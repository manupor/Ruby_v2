#!/usr/bin/expect -f

set timeout 60

# Copy the modified files to the server
spawn scp -r ./src/components/promotions/HorizontalPromosSection.tsx root@168.197.96.6:/var/www/rubywager/src/components/promotions/
expect "password:"
send "6?l\$OS6Q-w\r"
expect eof

spawn scp -r ./src/components/rules/RulesFeatures.tsx root@168.197.96.6:/var/www/rubywager/src/components/rules/
expect "password:"
send "6?l\$OS6Q-w\r"
expect eof

# Now SSH and rebuild
spawn ssh root@168.197.96.6
expect "password:"
send "6?l\$OS6Q-w\r"

expect "# "
send "cd /var/www/rubywager\r"

expect "# "
send "npm run build\r"

expect {
    -timeout 120
    "# " { 
        send "pm2 restart rubywager\r"
        expect "# "
        send "exit\r"
    }
    timeout {
        send_user "Build timeout, exiting...\n"
        send "exit\r"
    }
}

expect eof
