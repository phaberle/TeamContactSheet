const fs = require('fs');

sendToHTML = (object) => {
    // object = [
    //     _mgr = {
    //         mgr_name: 'Fred',
    //         mgr_id: '1',
    //         mgr_email: 'fred@work.com',
    //         mgr_role: 'Manager',
    //         mgr_officeNumber: '123'
    //     },
    //     _eng = {
    //         eng_name: 'Jones',
    //         eng_id: '2',
    //         eng_email: 'paulhaberle@mac.com',
    //         eng_role: 'Engineer',
    //         eng_github: 'phaberle'
    //     },
    //     _int = {
    //         int_name: 'Smith',
    //         int_id: '3',
    //         int_email: 'smith@work.com',
    //         int_role: 'Intern',
    //         int_school: 'UT Austin'
    //     }
    // ]

    const { mgr_id, mgr_name, mgr_email, mgr_role, mgr_officeNumber } = object[0];
    const { eng_id, eng_name, eng_email, eng_role, eng_github } = object[1];
    const { int_name, int_id, int_email, int_role, int_school } = object[2];

    let template =
        `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" />
    <title>MyTeam</title>
</head>
<body>
    <header>
        <div class="py-0 mb-0"></div>
        <h1 class="text-light bg-danger p-3 text-center">My Team</h1>
    </header>
    <main class="d-flex flex-column">
<div class="m-5 row justify-content-center">
    <div class="col-12 col-md-6 col-xl-3 mb-3">
        <div class="card" style="width: 18rem">
            <h4 class="card-header bg-primary border-secondary text-light">
               ${mgr_name}<br><i class="fa-solid fa-mug-hot"></i> ${mgr_role}
            </h4>
            <ul  class="list-group list-group-flush">
                <li class="list-group-item"> ID: ${mgr_id}</li>
                <li class="list-group-item">Email: <a href=mailto:"${mgr_email}">${mgr_email}</a></li>
                <li class="list-group-item">Office Number: ${mgr_officeNumber}</li>
            </ul>
        </div>
    </div>
    <div class="col-12 col-md-6 col-xl-3 mb-3">
        <div class="card" style="width: 18rem">
            <h4 class="card-header bg-primary text-light">
               ${eng_name}<br><i class="fa-solid fa-glasses"></i> ${eng_role}
            </h4>
            <ul class="list-group list-group-flush">
                <li class="list-group-item"> ID: ${eng_id}</li>
                <li class="list-group-item">Email: <a href=mailto:"${eng_email}">${eng_email}</a></li>
                <li class="list-group-item">GitHub: <a href="https://github.com/${eng_github}">${eng_github}</a></li>
            </ul>
        </div>
    </div>
    <div class="col-12 col-md-6 col-xl-3 mb-3">
        <div class="card" style="width: 18rem">
            <h4 class="card-header bg-primary text-light">
                ${int_name}<br><i class="fa-solid fa-user-graduate"></i> ${int_role}
            </h4>
            <ul class="list-group list-group-flush">
                <li class="list-group-item"> ID: ${int_id}</li>
                <li class="list-group-item">Email: <a href=mailto:"${int_email}>${int_email}</a></li>
                <li class="list-group-item">School: ${int_school}</li>
            </ul>
        </div>
    </div>
</div>
    </main>
</body>
</html>
    `;

    fs.writeFile('./dist/index.html', template, err => {
        if (err) {
            console.error(err);
        }
        console.log("File written successfully.\nCheck the dist folder.");
    });
}


module.exports = { sendToHTML }