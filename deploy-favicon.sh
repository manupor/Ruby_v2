#!/usr/bin/expect -f

set timeout 120

# Copy favicon.ico to public folder on server
spawn scp ./public/favicon.ico root@168.197.96.6:/var/www/rubywager/public/favicon.ico
expect {
    "password:" {
        send "6?l\$OS6Q-w\r"
        expect eof
    }
    eof
}

# Copy updated layout.tsx
spawn scp ./src/app/layout.tsx root@168.197.96.6:/var/www/rubywager/src/app/layout.tsx
expect {
    "password:" {
        send "6?l\$OS6Q-w\r"
        expect eof
    }
    eof
}

# Now SSH and rebuild
spawn ssh root@168.197.96.6
expect "password:"
send "6?l\$OS6Q-w\r"

expect "# "
send "cd /var/www/rubywager\r"

expect "# "
send "npm run build\r"

# Wait for build to complete
expect {
    -timeout 180
    "# " {
        send "pm2 restart rubywager\r"
        expect "# "
        send "pm2 status\r"
        expect "# "
        send "exit\r"
    }
    timeout {
        send_user "\nBuild is taking longer than expected...\n"
        send "exit\r"
    }
}

expect eof
