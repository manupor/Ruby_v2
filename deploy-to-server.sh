#!/usr/bin/expect -f

set timeout 30

spawn ssh root@168.197.96.6

expect "password:"
send "6?l\$OS6Q-w\r"

expect "# "
send "cd /var/www/rubywager\r"

expect "# "
send "git pull\r"

expect "# "
send "npm run build\r"

expect {
    "# " { 
        send "pm2 restart rubywager\r"
        expect "# "
        send "exit\r"
    }
    timeout {
        send "exit\r"
    }
}

expect eof
