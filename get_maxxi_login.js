/**
 * @name login to maxxsun.app Site and write status-page(js) to html-page
 *
 * @desc 
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
    categories: ['maxxisun']
  })
//  
  await page.setViewport({ width: 1200, height: 800 })
  await page.goto('https://maxxisun.app')

  const html = await page.content();
  console.log(html)


// execute standard javascript in the context of the page.


  await page.type("input[formcontrolname=email]", "user@mail.xyz");
  await page.type("input[formcontrolname=ccu]", "MAXXI-1234567-1234");
  await page.click('[class^="mat-mdc-button"]');

  await page.waitForNavigation(); // <------------------------- Wait for Naviga>
  await page.screenshot({path: 'maxxi.png'});

  const html1 = await page.content();
  console.log(html1)
  await page.screenshot({path: 'maxxi2.png'});

  const fs = require('fs');
  fs.writeFileSync('/var/www/html/maxxi.html', html1);



  await page.tracing.stop()
  await browser.close()
})()
