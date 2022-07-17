const {readFileSync, promises: fsPromises} = require('fs');

class DataSet {
    constructor(filePath) {

        const contents = readFileSync(filename, 'utf-8');

        const arr = contents.split(/\r?\n/);
      
        console.log(arr);

    }
}

function submitButton() {
    var element = document.getElementById("messageInput")
    //console.log(element.value)
    
    dataset = new DataSet("dataset.txt")
    

    document.getElementById("messageOutput").innerHTML = element.value
}