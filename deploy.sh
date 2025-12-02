#!/bin/bash
cd /var/www/rubywager
git pull
npm install
npm run build
pm2 restart rubywager
