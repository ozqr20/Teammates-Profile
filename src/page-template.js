const generateCards = data => {
    let page = ``;
    data.forEach(element => {
        if(element.getRole() === 'Engineer'){
            page += `
                <div class='card' style='max-width: 18rem;'>
                    <div class='card-header text-white bg-dark mb-3'>
                        <h2 class='card-title'>${element.name}</h2>
                        <h3 class='card-title'><i class="fas fa-user-edit'></i> Engineer</h3>
                    </div>
                    <ul class='list-group list-group-flush'>
                        <li class='list-group-item'>ID: ${element.id}</li>
                        <li class='list-group-item'>Email: <span><a href="Email:${element.email}">${element.email}</a></span></li>
                        <li class='list-group-item fab fa-github'>Github: <span><a target="_blank" href="https://github.com/${element.gitUser}">${element.gitUser}</a></span></li>
                    <ul>
                </div>
            `
        } else if (element.getRole() === "Intern"){
            page += `
                <div class='card' style='max-width: 18rem;'>
                    <div class='card-header text-white bg-info mb-3'>
                        <h2 class='card-title'>${element.name}</h2>
                        <h3 class='card-title'><i class="fas fa-user-graduate'></i> Intern</h3>
                    </div>
                    <ul class='list-group list-group-flush'>
                        <li class='list-group-item'>ID: ${element.id}</li>
                        <li class='list-group-item'>Email: <span><a href="Email:${element.email}">${element.email}</a></span></li>
                        <li class='list-group-item">School: ${element.school}</li>
                    <ul>
                </div>
            `
        } else if(element.getRole() === 'Manager'){
            page += `
                <div class='card' style='max-width: 18rem;'>
                    <div class='card-header text-white bg-primary mb-3'>
                        <h2 class='card-title'>${element.name}</h2>
                        <h3 class='card-title'><i class="far fa-id-card'></i> Manager</h3>
                    </div>
                    <ul class='list-group list-group-flush'>
                        <li class='list-group-item'>ID: ${element.id}</li>
                        <li class='list-group-item'>Email: <span><a href="Email:${element.email}">${element.email}</a></span></li>
                        <li class='list-group-item">Office Number: ${element.office}</li>
                    <ul>
                </div>
            `
        }
        
    });

    return page;

} 

module.exports = templateData => {

    return `
    <!DOCTYPE html>
    <html lang="en">

    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <metta htt-equiv="X-UA-Compatible" content="ie=edge">
        <title>Teammates Profile</title>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
        <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="style.css">
    <head>

    <body>
        <header>
            <div class='container flex-row justify-space-between align-center text-center'>
                <h1 class='page-title text-white bg-danger py-2 px-3'>TEAM</h1>
            </div>
        </header>
        <main class='container my-5">
            <section class='my-3' id='team'>
                <div class='container flex-row justify-space-around align-center'>
                ${generateCards(templateData)}
                </div>
            </section>
        </main>
        <footer class="container text-center py-3">
        <h4 class="text-dark">&copy; ${new Date().getFullYear()} by Ozqr20</h4>
      </footer>
    </body>
    </html>
    `
};