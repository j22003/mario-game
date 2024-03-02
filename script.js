
let currmoletile;
let currplanttile;
let score = 0;
let gameover = false;


window.onload = function(){
    setgame();
}

function setgame(){
    // set up the grid for the board in html
    for(var i = 0;i < 9;i++){ 
        // i goes from 0-8,total = 9
        let tile = document.createElement("div");
        tile.id = i.toString();
        tile.addEventListener("click", selectTile);
        document.getElementById("board").appendChild(tile)
    }
    setInterval(setmole, 2000);
    //call the function every one seconds
    setInterval(setplant, 3000);
    //call the function every two seconds
}

function setmole(){

    if(gameover){
        return;
    }

    if(currmoletile){
        currmoletile.innerHTML = " ";
    }

   
    let mole = document.createElement("img");
    mole.src = "monty-mole.png";

    let  num = getrandomtile();

    if(currmoletile && currmoletile.id == num){
        return;
    }

    currmoletile = document.getElementById(num);
    currmoletile.appendChild(mole);
}

function getrandomtile(){
    let num = Math.floor(Math.random()*9);
    return num.toString();
}

function setplant(){

    if(gameover){
        return;
    }

    if(currplanttile){
        currplanttile.innerHTML = " ";
    }

    let plant = document.createElement("img");
    plant.src = "piranha-plant.png";

    let  num = getrandomtile();
    if(currplanttile && currplanttile.id == num){
        return;
    }
    currplanttile = document.getElementById(num);
    currplanttile.appendChild(plant);


}
function selectTile(){

    if(gameover){
        return;
    }

    if(this == currmoletile){
        score += 10;
        document.getElementById("score").innerHTML =score.toString();
    }
    else if(this == currplanttile){
	gameover = true;
        document.getElementById("score").innerHTML = "GAME OVER" + score.toString();
    }
}