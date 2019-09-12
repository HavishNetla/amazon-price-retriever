const axios = require('axios')
const cheerio = require('cheerio')

module.exports = {
  async retrievePrice(url) {
    return new Promise(async (resolve, reject) => {
      try {
        await axios.get(url).then(async res => {
          const $ = cheerio.load(res.data)

          const price = await $('#priceblock_ourprice').text()
          resolve(price)
        })
      } catch (e) {
        reject(e)
      }
    })
  },
}
