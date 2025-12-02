#!/usr/bin/expect -f

set timeout 120

# Copy HorizontalPromosSection.tsx
spawn scp ./src/components/promotions/HorizontalPromosSection.tsx root@168.197.96.6:/var/www/rubywager/src/components/promotions/HorizontalPromosSection.tsx
expect {
    "password:" {
        send "6?l\$OS6Q-w\r"
        expect eof
    }
    eof
}

# Copy RulesFeatures.tsx
spawn scp ./src/components/rules/RulesFeatures.tsx root@168.197.96.6:/var/www/rubywager/src/components/rules/RulesFeatures.tsx
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

# Wait for build to complete (can take a while)
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
