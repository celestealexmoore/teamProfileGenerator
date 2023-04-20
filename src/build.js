import fs from "fs";
let htmlShell;

export function generateTitle(data) {
  htmlShell = `<!DOCTYPE html>
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
        <header>${data.companyName}</header>
    
        <section id="employees">
    `;
}

export function generateManager(answers) {
  htmlShell += `  <div class="card">
    <div class="topHalfCard">
      <p class="name">${answers.name}</p>
      <div class="iconFloat">
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-eyeglasses" viewBox="0 0 16 16">
            <path d="M4 6a2 2 0 1 1 0 4 2 2 0 0 1 0-4zm2.625.547a3 3 0 0 0-5.584.953H.5a.5.5 0 0 0 0 1h.541A3 3 0 0 0 7 8a1 1 0 0 1 2 0 3 3 0 0 0 5.959.5h.541a.5.5 0 0 0 0-1h-.541a3 3 0 0 0-5.584-.953A1.993 1.993 0 0 0 8 6c-.532 0-1.016.208-1.375.547zM14 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0z"/>
        </svg>
        <p class="role">Manager</p>
      </div>
    </div>
  
    <div class="bottomHalfCard">
        <ul class="details">
            <li class="profileDetail">ID: ${answers.employeeId}</li>
            <li class="profileDetail">Email: <a href="mailto:${answers.managerEmail}">${answers.managerEmail}</a></li>
            <li class="profileDetail">Office Number: ${answers.officeNumber}</li>
        </ul>
    </div>
  </div> `;
}

export function generateHTML() {
  htmlShell += `</section>
  <script src='../index.js'>
</body>
</html>`;

  fs.appendFile("./dist/index.html", htmlShell, (err) =>
    err ? console.error(err) : null
  );
}
