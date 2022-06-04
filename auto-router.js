const path = require('path');
const fs = require('fs');

const directoryPath = path.join(__dirname, 'src/views');

fs.readdir(directoryPath, function (err, files) {
  if (err) {
      return console.log('Unable to scan directory: ' + err)
  }

  const fileNames = files.map(file => file.replace('.vue', ''))
  const data = JSON.stringify(fileNames)

  fs.writeFile('src/router/pages.json', data, (err) => {
    if (err) throw err;
  })
})
