//



















//
////










///////////SERVER
const tempOverview = fs.readFileSync(`${__dirname}/templates/templates-overview.html`, 'utf-8');
const tempCard = fs.readFileSync(`${__dirname}/templates/templates-card.html`, 'utf-8');
const tempProduct = fs.readFileSync(`${__dirname}/templates/templates-product.html`, 'utf-8');


const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, 'utf-8');
const dataObj = JSON.parse(data);

const server = http.createServer((req, res) => {
    const pathName = req.url;

    //Overview page

    if (pathName === '/' || pathName === '/overview') {
        res.writeHead(200, { 'Content-type': 'text/html' });
        const cardsHTML = dataObj.map(el => replaceTemplate(tempCard, el));

        res.end(tempOverview);
      
      //product page
  } else if (pathName === "/product") {
      res.end("this is PRODUCT");
      
      //API
  } else if (pathName === "/api") {
      res.writeHead(200, { 'Content-type': 'application/json' });
      res.end(data);
      
      //Not found
  } else {
    res.writeHead(404, {
      "content-type": "text/html",
      "my-own-header": "hello-world",
    });
    res.end("<h1> page not found</h1>");
  }

  //   console.log(req.url);
  //   res.end("Hello from the server!");    
})
