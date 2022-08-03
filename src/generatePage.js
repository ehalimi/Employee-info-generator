generatePage = (team) => {

let template = ``;

function employeeDiv(employee){
  for(var i = 0; i < employee.length; i++){

    if(employee[i].getRole() === "Manager"){

      template += `
        <div class = 'row'>
        
        <div class = 'column'>
          <div class = 'card'>
            
            <h3> ${employee[i].name} </h3>
            <p1>Manager <i class="fa-solid fa-mug-hot"></i> </p1>
            <p><span>Employee Id: </span> ${employee[i].id} </p>
            <p><span>Email Address: </span><a href= 'emailto: ${employee[i].email}'>${employee[i].email} </a></P>
            <p><span>Office Number: </span> ${employee[i].officeNumber} </p>

          </div>
        </div>
      `;
    } else if(employee[i].getRole() === "Engineer"){

      template += `
        <div class = 'row'>
        
        <div class='column'>
          <div class = 'card'>
            
            <h3> ${employee[i].name} </h3>
            <p1>Engineer <i class="fa-solid fa-glasses"></i> </p1>
            <p><span>Employee Id: </span> ${employee[i].id} </p>
            <p><span>Email Address: </span><a href= 'emailto: ${employee[i].email}'>${employee[i].email} </a></P>
            <p><span>Github: </span> ${employee[i].github} </p>

          </div>
        </div>
      `;
    } else if(employee[i].getRole() === "Intern"){

      template += `
        <div class = 'row'>

        <div class = 'column'>
          <div class = 'card'>
            
            <h3> ${employee[i].name} </h3>
            <p1>Intern <i class="fa-solid fa-user-graduate"></i> </p1>
            <p><span>Employee Id: </span> ${employee[i].id} </p>
            <p><span>Email Address: </span><a href= 'emailto: ${employee[i].email}'>${employee[i].email} </a></P>
            <p><span>School: </span> ${employee[i].school} </p>

          </div>
        </div>
      `;
    }
  }

  return template;
}

    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Employee Info</title>
        <script src="https://kit.fontawesome.com/4e0d2cfdd6.js" crossorigin="anonymous"></script>
        <link rel="stylesheet" href="../dist/style.css">
    </head>
    <body>
    <header> My Team </header>

    ${employeeDiv(team)}
    </body>
    </html>
    `;
}

module.exports = generatePage;