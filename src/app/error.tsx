'use client'

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <html lang="en">
      <body>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '100vh',
          padding: '20px',
          fontFamily: 'system-ui, sans-serif',
          backgroundColor: '#0a0a0a',
          color: '#fff',
        }}>
          <div style={{
            maxWidth: '500px',
            textAlign: 'center',
          }}>
            <h1 style={{
              fontSize: '2.5rem',
              marginBottom: '1rem',
              color: '#FF003D',
            }}>
              ⚠️ Something went wrong
            </h1>
            <p style={{
              fontSize: '1.1rem',
              marginBottom: '2rem',
              color: '#888',
            }}>
              We encountered an unexpected error. This might be due to a recent update.
            </p>
            <div style={{
              display: 'flex',
              gap: '1rem',
              justifyContent: 'center',
            }}>
              <button
                onClick={() => location.reload()}
                style={{
                  padding: '12px 24px',
                  fontSize: '1rem',
                  fontWeight: '600',
                  backgroundColor: '#FF003D',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  transition: 'background-color 0.2s',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#E00034'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#FF003D'
                }}
              >
                🔄 Reload App
              </button>
              <button
                onClick={reset}
                style={{
                  padding: '12px 24px',
                  fontSize: '1rem',
                  fontWeight: '600',
                  backgroundColor: 'transparent',
                  color: '#fff',
                  border: '2px solid #333',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  transition: 'border-color 0.2s',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#555'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = '#333'
                }}
              >
                Try Again
              </button>
            </div>
            {process.env.NODE_ENV === 'development' && (
              <details style={{
                marginTop: '2rem',
                textAlign: 'left',
                backgroundColor: '#1a1a1a',
                padding: '1rem',
                borderRadius: '8px',
                fontSize: '0.9rem',
              }}>
                <summary style={{ cursor: 'pointer', marginBottom: '0.5rem' }}>
                  Error Details (Dev Only)
                </summary>
                <pre style={{
                  overflow: 'auto',
                  color: '#FF003D',
                  fontSize: '0.85rem',
                }}>
                  {error.message}
                  {error.digest && `\nDigest: ${error.digest}`}
                </pre>
              </details>
            )}
          </div>
        </div>
      </body>
    </html>
  )
}
