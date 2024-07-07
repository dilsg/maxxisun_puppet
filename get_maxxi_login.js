/**
 * @name get list of links
 *
 * @desc Scrapes Hacker News for links on the home page and returns the top 10
 */
const puppeteer = require('puppeteer');
(async() => {
    const browser = await puppeteer.launch({
        executablePath: '/usr/bin/chromium',
        args: [
            '--no-sandbox',
            // '--disable-gpu,
            // '--disable-dev-shm-usage',
            // '--disable-setuid-sandbox',
        ]
    });
  const page = await browser.newPage()
  await page.tracing.start({
    path: 'trace.json',
    categories: ['devtools.timeline']
  })
//  await page.goto('https://news.ycombinator.com/news')
  await page.setViewport({ width: 1200, height: 800 })
  await page.goto('https://maxxisun.app')

  const html = await page.content();
  console.log(html)


// execute standard javascript in the context of the page.


  await page.type("input[formcontrolname=email]", "user@mail.xyz");
  await page.type("input[formcontrolname=ccu]", "MAXXI-1234567-1234");
  await page.click('[class^="mat-mdc-button"]');
// body > app-root > app-login > div.container.login-container > div > div:nth-child(4) > button


  await page.waitForNavigation(); // <------------------------- Wait for Naviga>
  await page.screenshot({path: 'maxxi.png'});



  const html1 = await page.content();
  console.log(html1)
  await page.screenshot({path: 'maxxi2.png'});

  const fs = require('fs');
  fs.writeFileSync('/var/www/html/maxxi.html', html1);



// ... write to file
  await page.tracing.stop()
  await browser.close()
})()
