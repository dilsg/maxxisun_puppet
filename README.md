# maxxisun_puppet

Using of puppeteer for maxxissun.app for home assistant

First install puppeteer (here on 192.168.178.198)

<code>node get_maxxi_login.js</code> generates a static html-page of the maxxisun.app-website

this page is written to /var/www/html for a local apache2-server on 192.168.178.198

within home assistant we can find the interessting values of maxxisun.app using multiscrape

#

we start "node get_maxxi_login.js" via crontab every 2 minutes with

<code>*/2 * * * * /usr/bin/node /home/pi/puppeteer/get_maxxi_login.js</code>

#

on home assistant we have a file multiscrape.yaml (included in configuration.yaml) for scraping the values

It is not optimal but it works. 
