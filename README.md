# maxxisun_puppet

Using of puppeteer for maxxissun.app for home assistant

First install puppeteer

node get_maxxi_login.js generates a static html-page of the maxxisun.app-website

this page is writen to /var/www/html for a local apache2-server

in home assistant with multiscrape we can find the interessting values of maxxisun.app

#

we start "node get_maxxi_login.js" via crontab every 2 minutes with

*/2 * * * * /usr/bin/node /home/pi/puppeteer-docker-RPi/get_maxxi_login.js

#

on home assistant we have a file multiscrape.yaml (included in configuration.yaml) for scraping the values

