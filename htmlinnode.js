const http = require("http");

const hostname = "127.0.0.1";
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  //   res.end('Hello World');
  res.end(`<!DOCTYPE html>
  <html lang="en">
    <head>
    <style>
    * {
        margin: 0;
        padding: 0;
      }
      .main > div {
        background-color: darkorchid;
        width: 20pt;
        height: 20pt;
        border-radius: 100%;
        position: absolute;
        top: 130px;
        left: 300pt;
        animation-duration: 1s;
        animation-iteration-count: infinite;
        animation-direction: alternate;
      }
      .main > div:nth-child(1) {
        background-color: darkorchid;
        animation-name: one;
      }
      @keyframes one {
        from {
        }
        to {
          left: 200pt;
          border-radius: 0pt;
          background-color: darkorange;
        }
      }
      .main > div:nth-child(2) {
        top: 250px;
        animation-name: two;
      }
      @keyframes two {
        from {
        }
        to {
          left: 400pt;
          border-radius: 0pt;
          background-color: darkorange;
        }
      }
      
      .main > div:nth-child(3) {
        left: 250pt;
        top: 143pt;
        animation-name: three;
      }
      @keyframes three {
        from {
        }
        to {
          left: 200pt;
          top: 160pt;
          border-radius: 0pt;
          background-color: darkorange;
        }
      }
      .main > div:nth-child(4) {
        left: 355pt;
        top: 143pt;
        animation-name: four;
      }
      @keyframes four {
        from {
        }
        to {
          left: 400pt;
          top: 133pt;
          border-radius: 0pt;
          background-color: darkorange;
        }
      }
      .main > div:nth-child(5) {
        left: 335pt;
        top: 172pt;
        animation-name: five;
      }
      @keyframes five {
        from {
        }
        to {
          left: 400pt;
          top: 160pt;
          border-radius: 0pt;
          background-color: darkorange;
        }
      }
      .main > div:nth-child(6) {
        left: 334pt;
        top: 115pt;
        animation-name: sixth;
      }
      @keyframes sixth {
        from {
        }
        to {
          left: 400pt;
          border-radius: 0pt;
          background-color: darkorange;
          top: 101pt;
        }
      }
      .main > div:nth-child(7) {
        top: 114pt;
        left: 266pt;
        animation-name: seven;
      }
      @keyframes seven {
        from {
        }
        to {
          left: 200pt;
          top: 130pt;
          border-radius: 0pt;
          background-color: darkorange;
        }
      }
      .main > div:nth-child(8) {
        top: 172pt;
        left: 266pt;
        animation-name: eigth;
      }
      @keyframes eigth {
        from {
        }
        to {
          left: 200pt;
          top: 190pt;
          border-radius: 0pt;
          background-color: darkorange;
        }
      }
    </style>
      <link rel="stylesheet" href="style.css" />
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Document</title>
    </head>
    <body>
      <div class="container">
        <div class="main">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </body>
  </html>`);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
