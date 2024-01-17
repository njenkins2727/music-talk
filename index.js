const inquirer  = require('inquirer');
const fs = require('fs');


// when i answer questions in terminal after running index.js 
// processarv will obtain: 
// Your name, year born, fav genres, fav genre atm, fav artists all time, favourite song from artist/s, where you listen to music, where do you listen to music the most: i.e in the car, at the beach, at work etc

 inquirer
    .prompt([
        {  
            name: 'yourName',
            type: 'input',
            message: 'What is your name?',
        },
        {
            name:'born',
            type: 'input',
            message: 'What year were you born?',
        },
        {
            name:'genre',
            type: 'input',
            message: 'What is your all time favourite GENRE?',
        },
        {
            name:'genreCurrent',
            type: 'input',
            message: 'What is your CURRENT favourite GENRE?',
        },
        {
            name:'artist',
            type: 'input',
            message: 'Who is your all time favourite ARTIST?',
        },
        {
            name:'song',
            type: 'input',
            message: 'What is your favourite song from this artist?',
        },
        {
            name: 'listenChoice',
            type: 'list',
            message: 'Do you stream your music?',
            choices: ['yes', 'no'],
        },
])
//   .then((data) => {
//     if (data.listenChoice === 'yes') {
//         inquirer
//         .prompt({
//             name: 'stream',
//             type: 'input',
//             message: 'What stream service do you use?',
//         }).then(function(data){
//             return console.log(data)
//         })
//         } else {
//         inquirer
//         .prompt({
//             name: 'nonStream',
//             type: 'input',
//             message: 'How do you listen to music?',
//         })
//         }
// })
.then((data) => {
    fs.writeFileSync('index.html', musicRender(data))
})
.catch((error) => {
    if (error.isTtyError) {
        throw new Error(`Prompt couldn't be render in current environment`);
    } else {
      console.log('something else wrong', error);
    }
  });

// then i am returned with a html that answers all the questions
// html will be a detailed about me about the subjects music and music taste 
const musicRender = ({yourName, born, genre, genreCurrent, artist, song, streaming, nonStreaming}) => 
`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Music Talk</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@exampledev/new.css@1/new.min.css">
    <link rel="stylesheet" href="https://fonts.xz.style/serve/inter.css">
</head>
<!--Your name, year born, fav genre, fav genre atm, fav artists all time, favourite song from artist/s, where you listen to music, 
    where do you listen to music the most: i.e in the car, at the beach, at work etc
 -->
<body>
    <header>
        <h1 class="">Music Talk</h1>
    </header>
    <h2>${yourName} ${born}</h2> 

    <h4>All time favourite genre:</h4>
    <p>${genre}</p>

    <h4>Current favourite genre:</h4>
    <p>${genreCurrent}</p>

    <h4>All time favourite Artist: </h4>
    <p>${artist}</p>

    <h4>Favourite song from ${artist}:</h4>
    <p>${song} </p>

    // <h4>What streaming service do you use?</h4>
    // <p>${streaming}</p>
    
    // <h4>How do you listen to your music (i.e vinyl, cd etc..)</h4>
    // <p>${nonStreaming}</p>
    
    </body>
    </html>`
    

    // async function choiceOutcome(data){
    //     if (data.listenChoice === 'yes') {
    //             inquirer
    //             .prompt({
    //                 name: 'stream',
    //                 type: 'input',
    //                 message: 'What stream service do you use?',
    //             }).then(function(data){
    //                 return console.log(data)
    //             })
    //             } else {
    //             inquirer
    //             .prompt({
    //                 name: 'nonStream',
    //                 type: 'input',
    //                 message: 'How do you listen to music?',
    //             })
    //             }
    // }

   