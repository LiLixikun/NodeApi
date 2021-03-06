
const puppeteer = require('puppeteer')

const url = `https://movie.douban.com/tag/#/?sort=U&range=6,10&tags=`


const sleep = time => new Promise((resolve, reject) => {
    setTimeout(resolve, time)
})

    ; (async () => {
        const brower = await puppeteer.launch({
            args: ['--no-sanbox'],
            dumpio: false
        })

        const page = await brower.newPage()
        await page.goto(url, {
            awitUntil: 'networkidle2'
        })

        await sleep(3000);
        await page.waitForSelector('.more')

        for (let i = 0; i < 1; i++) {
            await sleep(3000);
            await page.click('.more')
        }

        const result = await page.evaluate(() => {
            var $ = window.$
            var items = $('.list-wp a')

            var links = []
            if (items.length > 0) {
                for (let i = 0; i < items.length; i++) {
                    const item = items[i];
                    let it = $(item)
                    let doubanId = it.find('div').data('id')
                    let title = it.find('.title').text()
                    let rate = Number(it.find('.rate').text())
                    let poster = it.find('img').attr('src').replace('s_ratio', 'l_ratio')
                    links.push({
                        doubanId,
                        title,
                        rate,
                        poster
                    })
                }
                // items.forEach((item, index) => {

                // })
            }
            return links
        })
        brower.close()
        console.log(result);

    })()