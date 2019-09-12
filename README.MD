# Amazon Price Retriever

## Usage
```js
const retriever = require('amazon-price-retriever')

 await retriever
    .retrievePrice(
      'https://www.amazon.com/Acer-XG270HU-27-inch-FREESYNC-Widescreen/dp/B00VRCLHYS/ref=pd_ybh_a_7?_encoding=UTF8&psc=1&refRID=WKW9W0JYKDNG2C3DFJG0',
    )
    .then(price => console.log(price))
// => $349.99
```