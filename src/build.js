import fs from "fs";
let cards = [];
let title;

export function generateTitle(answers) {
  title = answers.companyName;
}

export function generateManager(answers) {
  cards.push(`<div class="card">
    <div class="topHalfCard">
      <p class="name">${answers.name}</p>
      <div class="iconFloat">
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-cup-hot-fill" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M.5 6a.5.5 0 0 0-.488.608l1.652 7.434A2.5 2.5 0 0 0 4.104 16h5.792a2.5 2.5 0 0 0 2.44-1.958l.131-.59a3 3 0 0 0 1.3-5.854l.221-.99A.5.5 0 0 0 13.5 6H.5ZM13 12.5a2.01 2.01 0 0 1-.316-.025l.867-3.898A2.001 2.001 0 0 1 13 12.5Z"/>
      <path d="m4.4.8-.003.004-.014.019a4.167 4.167 0 0 0-.204.31 2.327 2.327 0 0 0-.141.267c-.026.06-.034.092-.037.103v.004a.593.593 0 0 0 .091.248c.075.133.178.272.308.445l.01.012c.118.158.26.347.37.543.112.2.22.455.22.745 0 .188-.065.368-.119.494a3.31 3.31 0 0 1-.202.388 5.444 5.444 0 0 1-.253.382l-.018.025-.005.008-.002.002A.5.5 0 0 1 3.6 4.2l.003-.004.014-.019a4.149 4.149 0 0 0 .204-.31 2.06 2.06 0 0 0 .141-.267c.026-.06.034-.092.037-.103a.593.593 0 0 0-.09-.252A4.334 4.334 0 0 0 3.6 2.8l-.01-.012a5.099 5.099 0 0 1-.37-.543A1.53 1.53 0 0 1 3 1.5c0-.188.065-.368.119-.494.059-.138.134-.274.202-.388a5.446 5.446 0 0 1 .253-.382l.025-.035A.5.5 0 0 1 4.4.8Zm3 0-.003.004-.014.019a4.167 4.167 0 0 0-.204.31 2.327 2.327 0 0 0-.141.267c-.026.06-.034.092-.037.103v.004a.593.593 0 0 0 .091.248c.075.133.178.272.308.445l.01.012c.118.158.26.347.37.543.112.2.22.455.22.745 0 .188-.065.368-.119.494a3.31 3.31 0 0 1-.202.388 5.444 5.444 0 0 1-.253.382l-.018.025-.005.008-.002.002A.5.5 0 0 1 6.6 4.2l.003-.004.014-.019a4.149 4.149 0 0 0 .204-.31 2.06 2.06 0 0 0 .141-.267c.026-.06.034-.092.037-.103a.593.593 0 0 0-.09-.252A4.334 4.334 0 0 0 6.6 2.8l-.01-.012a5.099 5.099 0 0 1-.37-.543A1.53 1.53 0 0 1 6 1.5c0-.188.065-.368.119-.494.059-.138.134-.274.202-.388a5.446 5.446 0 0 1 .253-.382l.025-.035A.5.5 0 0 1 7.4.8Zm3 0-.003.004-.014.019a4.077 4.077 0 0 0-.204.31 2.337 2.337 0 0 0-.141.267c-.026.06-.034.092-.037.103v.004a.593.593 0 0 0 .091.248c.075.133.178.272.308.445l.01.012c.118.158.26.347.37.543.112.2.22.455.22.745 0 .188-.065.368-.119.494a3.198 3.198 0 0 1-.202.388 5.385 5.385 0 0 1-.252.382l-.019.025-.005.008-.002.002A.5.5 0 0 1 9.6 4.2l.003-.004.014-.019a4.149 4.149 0 0 0 .204-.31 2.06 2.06 0 0 0 .141-.267c.026-.06.034-.092.037-.103a.593.593 0 0 0-.09-.252A4.334 4.334 0 0 0 9.6 2.8l-.01-.012a5.099 5.099 0 0 1-.37-.543A1.53 1.53 0 0 1 9 1.5c0-.188.065-.368.119-.494.059-.138.134-.274.202-.388a5.446 5.446 0 0 1 .253-.382l.025-.035A.5.5 0 0 1 10.4.8Z"/>
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
  </div> `);
  return;
}

export function generateEngineer(answers) {
  cards.push(`
  
  <div class="card">
    <div class="topHalfCard">
      <p class="name">${answers.name}</p>
      <div class="iconFloat">
      <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-eyeglasses" viewBox="0 0 16 16">
      <path d="M4 6a2 2 0 1 1 0 4 2 2 0 0 1 0-4zm2.625.547a3 3 0 0 0-5.584.953H.5a.5.5 0 0 0 0 1h.541A3 3 0 0 0 7 8a1 1 0 0 1 2 0 3 3 0 0 0 5.959.5h.541a.5.5 0 0 0 0-1h-.541a3 3 0 0 0-5.584-.953A1.993 1.993 0 0 0 8 6c-.532 0-1.016.208-1.375.547zM14 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0z"/>
    </svg>
        <p class="role">Engineer</p>
      </div>
    </div>
  
    <div class="bottomHalfCard">
        <ul class="details">
            <li class="profileDetail">ID: ${answers.engineerId}</li>
            <li class="profileDetail">Email: <a href="mailto:${answers.engineerEmail}">${answers.engineerEmail}</a></li>
            <li class="profileDetail">GitHub: <a href="https://github.com/${answers.github}" target="_blank">${answers.github}</a></li>
            </ul>
    </div>
  </div> `);
  return;
}

export function generateIntern(answers) {
  cards.push(`
    
    <div class="card">
      <div class="topHalfCard">
        <p class="name">${answers.name}</p>
        <div class="iconFloat">
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-mortarboard-fill" viewBox="0 0 16 16">
        <path d="M8.211 2.047a.5.5 0 0 0-.422 0l-7.5 3.5a.5.5 0 0 0 .025.917l7.5 3a.5.5 0 0 0 .372 0L14 7.14V13a1 1 0 0 0-1 1v2h3v-2a1 1 0 0 0-1-1V6.739l.686-.275a.5.5 0 0 0 .025-.917l-7.5-3.5Z"/>
        <path d="M4.176 9.032a.5.5 0 0 0-.656.327l-.5 1.7a.5.5 0 0 0 .294.605l4.5 1.8a.5.5 0 0 0 .372 0l4.5-1.8a.5.5 0 0 0 .294-.605l-.5-1.7a.5.5 0 0 0-.656-.327L8 10.466 4.176 9.032Z"/>
      </svg>
          <p class="role">Intern</p>
        </div>
      </div>
    
      <div class="bottomHalfCard">
          <ul class="details">
              <li class="profileDetail">ID: ${answers.internId}</li>
              <li class="profileDetail">Email: <a href="mailto:${answers.internEmail}">${answers.internEmail}</a></li>
              <li class="profileDetail">School: ${answers.internSchool}</li>
              </ul>
      </div>
    </div> `);
    return;
}

export function generateHTML() {
  let htmlShell = `
    <!DOCTYPE html>
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
        <header>${title}</header>

        <section id="employees">${cards.join("")}</section>
        <script src="../index.js"></script>
    </body>
    </html>
    `;

  fs.appendFile("./dist/index.html", htmlShell, (err) =>
    err ? console.error(err) : null
  );
}
