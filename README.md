# RubyWager.com

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load fonts including Geist, Roboto, and custom Thunder font.

## Cache Policy & ChunkLoadError Prevention

This application implements a strict caching strategy to prevent `ChunkLoadError` issues after deployments.

### Cache Headers Strategy

The application uses different cache policies for different resource types (configured in `next.config.js`):

#### Immutable Assets (Long-term caching)
- **`/_next/static/*`** - JavaScript, CSS, fonts, and other static assets
  - `Cache-Control: public, max-age=31536000, immutable`
  - These files have content-based hashes in their filenames, making them safe to cache indefinitely

- **`/_next/image`** - Optimized images via next/image
  - `Cache-Control: public, max-age=31536000, immutable`
  - Image transformations are cached based on parameters

#### Dynamic Content (No caching)
- **`/:path*`** - All HTML pages
  - `Cache-Control: no-store, must-revalidate`
  - Ensures browsers always fetch the latest HTML that references current chunk hashes

- **`/_next/data/*`** - Next.js data files
  - `Cache-Control: no-store, must-revalidate`
  - Prevents stale data fetching for dynamic routes

### Why This Matters

**Problem:** After a new deployment, if HTML is cached, it references old JavaScript chunks that no longer exist, causing `ChunkLoadError`.

**Solution:** Never cache HTML, always cache static assets. This ensures:
1. Users always get the latest HTML with correct chunk references
2. Static assets (JS/CSS) are cached efficiently
3. No chunk mismatch between deployments

### Auto-Recovery Mechanism

The application includes automatic chunk error recovery (`src/app/_client-recovery.ts`):

- Listens for `ChunkLoadError` events
- Automatically reloads the page once to fetch updated chunks
- Prevents infinite reload loops using session storage
- Handles both synchronous and promise-based chunk load failures

### Font Optimization

Fonts are loaded using `next/font` to:
- Eliminate FOUT (Flash of Unstyled Text)
- Prevent font preload warnings
- Automatically add proper `crossorigin` and `as="font"` attributes
- Optimize loading with `font-display: swap`

Available fonts:
- **Roboto** - Google Font (400, 500, 700)
- **Geist Sans & Mono** - Vercel fonts
- **Thunder** - Custom local font

### Error Boundary

A global error boundary (`src/app/error.tsx`) provides:
- User-friendly error UI
- "Reload App" and "Try Again" buttons
- Development error details
- Graceful fallback for unhandled errors

## CDN Configuration (SiteGround/Cloudflare)

### Required CDN Settings

To prevent chunk errors, configure your CDN with these rules:

#### 1. Bypass Cache for Dynamic Content
Create cache rules to **bypass/disable cache** for:
- All HTML pages (`/*` without file extensions)
- `/_next/data/*` paths

**Cloudflare Example (Page Rules):**
```
Rule 1: rubywager.com/_next/data/*
  - Cache Level: Bypass

Rule 2: rubywager.com/*
  - Cache Level: Bypass (for HTML)
  - Match: URLs without file extensions
```

**SiteGround Example:**
- Disable "Dynamic Cache" or use "Cache Everything" exclusion rules
- Add exception patterns: `*/_next/data/*`, `*.html`

#### 2. Enable Long-term Cache for Static Assets
Allow aggressive caching for:
- `/_next/static/*`
- `/_next/image/*`

These are already handled by the `Cache-Control` headers from Next.js.

#### 3. Post-Deployment Cache Purge

After each deployment, purge cache **selectively**:

```bash
# Purge HTML and data, keep static assets
# Cloudflare CLI example:
curl -X POST "https://api.cloudflare.com/client/v4/zones/{zone_id}/purge_cache" \
  -H "Authorization: Bearer {api_token}" \
  -H "Content-Type: application/json" \
  --data '{
    "files": [
      "https://rubywager.com/*"
    ]
  }'
```

**⚠️ Important:** Only purge non-hashed resources. Static assets with hashes (`/_next/static/`) should never be purged as they're immutable.

### CI/CD Integration

Add cache purge to your deployment pipeline:

1. **Build & Deploy** - Upload new files to server
2. **Purge CDN Cache** - Clear HTML/data cache only
3. **Health Check** - Verify deployment

Example GitHub Actions step:
```yaml
- name: Purge CDN Cache
  run: |
    # Purge all HTML pages
    curl -X POST "https://api.cloudflare.com/client/v4/zones/${{ secrets.CF_ZONE_ID }}/purge_cache" \
      -H "Authorization: Bearer ${{ secrets.CF_API_TOKEN }}" \
      -H "Content-Type: application/json" \
      --data '{"purge_everything":false,"files":["https://rubywager.com/"]}'
```

## Verification Checklist

After implementing these changes, verify:

### Build & Local Testing
```bash
# Build production version
npm run build

# Start production server
npm start

# Test navigation between routes
# Perform hard reloads (Cmd+Shift+R / Ctrl+Shift+R)
# Check browser console for errors
```

### Cache Headers Verification
```bash
# Check static asset headers (should be immutable)
curl -I https://rubywager.com/_next/static/chunks/[any-file].js

# Check HTML headers (should be no-store)
curl -I https://rubywager.com/

# Expected outputs:
# Static: Cache-Control: public, max-age=31536000, immutable
# HTML: Cache-Control: no-store, must-revalidate
```

### Performance Testing
- **Lighthouse** - Check for font preload warnings
- **WebPageTest** - Verify cache headers
- **Browser DevTools** - Network tab, check "Disable cache" off

### Firefox Font Privacy Warning

If you see "Request for font blocked at visibility level 2" in Firefox:
- This is a Firefox privacy feature, not an error
- Using `next/font` minimizes this warning
- Does not affect functionality
- Safe to ignore

## Deployment Process

1. **Pre-deployment**
   - Run tests: `npm test`
   - Build locally: `npm run build`
   - Verify no console errors

2. **Deploy**
   - Upload build to SiteGround/hosting
   - Verify deployment succeeded

3. **Post-deployment**
   - Purge CDN cache (HTML only)
   - Test critical paths
   - Monitor for errors

4. **Rollback Plan**
   - Keep previous build available
   - Document rollback procedure
   - Monitor error rates

## Troubleshooting

### ChunkLoadError Still Occurring?

1. **Check cache headers** - Use curl or DevTools
2. **Clear CDN cache** - Purge all HTML/data
3. **Verify CDN rules** - Ensure bypass rules are active
4. **Check browser cache** - Hard reload (Ctrl+Shift+R)
5. **Inspect console** - Look for auto-reload attempt

### Font Not Loading?

1. **Verify font import** - Check `src/app/fonts.ts`
2. **Check className** - Ensure `roboto.variable` in layout
3. **Inspect Network tab** - Font files should return 200
4. **Check CSS** - Font should be applied via CSS variable

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
- [Next.js Caching](https://nextjs.org/docs/app/building-your-application/caching) - understand caching strategies

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!
