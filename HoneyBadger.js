console.log ("I'm a high performance athlete, atheletes sweat... :")

rl = require('readline').createInterface({
    input : process.stdin,
})

rli.on('line, select_team')
function select_team (line) {
    if(line !=="END") {
     inputs.push(line)
    }
    else { 
        rli.close 

    }
}
var inputs = []

rli.on('close', select_team)

function select_team (line) {
    for(let i = 0; i<inputs.length; i++)
        switch (inputs[i]) {
        case "5":
            console.log("Red Bull")
            break;
        case "2":
            console.log("McLaren")
            break;
        case "3":
            console.log("Renault")
            break;
        default:
            console.log("Retired?")
    }

}