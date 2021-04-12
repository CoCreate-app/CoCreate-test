const fs = require('fs');

// let file = fs.readFileSync('./.gitignore',  'utf8')

// if(!file.match(/\/?dist\/?/))
// {
    console.log('aaaa')
//     fs.appendFileSync('./gitignore','\n/dist/\n', 'utf8')
// }

   fs.appendFileSync('./.gitignore','\n/dist/\n')