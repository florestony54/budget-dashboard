// var util = require('util');
// var yf = require('yahoo-finance');

// var SYMBOL = 'AAPL';

// yf.historical({
//   symbol: SYMBOL,
//   from: '2012-01-01',
//   to: '2012-12-31',
//   period: 'd'
// }, function (err, quotes) {
//   if (err) { throw err; }
//   console.log(util.format(
//     '=== %s (%d) ===',
//     SYMBOL,
//     quotes.length
//   ).cyan);
//   if (quotes[0]) {
//     console.log(
//       '%s\n...\n%s',
//       JSON.stringify(quotes[0], null, 2),
//       JSON.stringify(quotes[quotes.length - 1], null, 2)
//     );
//   } else {
//     console.log('N/A');
//   }
// });
var data = [];

for (let i = 0; i < 6; i++){
     data.push(Math.floor(Math.random() * 1000) + 1)
    }

export default data;