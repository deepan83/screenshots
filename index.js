const Capium = require('capium');
const capium = new Capium({
  pages: [
    "https://www.britishgas.co.uk",
  ],
  caps: [
    {"browserName": "chrome"},
    {"browserName": "firefox"}
  ]
});
capium.run();
