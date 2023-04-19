import fs from "fs";

export function generateHTML(answers) {
  fs.appendFile(
    "./dist/index.html",
    `<!DOCTYPE html>
          <html lang="en">
            <head>
              <meta charset="UTF-8" />
              <meta http-equiv="X-UA-Compatible" content="IE=edge" />
              <meta name="viewport" content="width=device-width, initial-scale=1.0" />
              <link rel="stylesheet" href="./reset.css" />
              <link rel="stylesheet" href="./styles.css" />
              <title>Team Profile Generator</title>
            </head>
            <body>
              <header>${answers.companyName}</header>
          
              <section id="employees"></section>
              <script src='../index.js'>
            </body>
          </html>
          `,
    (err) => (err ? console.error(err) : null)
  );
}

// module.exports = {
//   generateHTML: generateHTML,
// };
