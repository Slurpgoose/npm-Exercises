const wallpaper = require('wallpaper');
const download = require('download-file')
const path = require('path');
const axios = require('axios');
const HOME_DIR = require('os').homedir()

const BACK_DIR = path.join(HOME_DIR, 'Desktop', 'backgrounds');

function getWallpaper(){
   wallpaper.get({'screen' : 'main'}).then(paper => {console.log(paper);})
}

function setWallPaper(file, scale){
    let file_path = path.join(BACK_DIR, file)
    wallpaper.set(file_path, {'screen': 'main'}, scale)
    .then(result => {
        console.log(result)
        getWallpaper();
    })
}

function getRandomDog() {
    var URL = 'https://dog.ceo/api/breeds/image/random';
    axios.get(URL)
    .then(response => {
        downloadDog(response.data.message)
    })
    .catch(error => {
        console.log(error)
    })
  }


function downloadDog(URL){
    var options = {
        directory: BACK_DIR,
        filename: "cat.jpg"
    };
    download(URL, options, setWallPaper(options.filename, 'center'))
}

getRandomDog()
//getWallpaper();
//setWallPaper('cat.jpg', 'fit');