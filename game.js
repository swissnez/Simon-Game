
let buttonColours = ["red", "blue", "green", "yellow"];
let gamePattern = [];
let userClickedPattern = [];

    let i=0;
    
    while (i < $(".btn").length) { // using jQuery $() function to find all buttons "btn" hence length is 4 total 
        
        
        let color = choseRandomColor(nextSquence());
            gamePattern.push(color); 
            //animateColor(color);
            //playSound(color);
        i++;
    }

    // FRONT END DOM Eventlistener! 
   
    buttonColours.forEach(color=>{
        $("#"+color).click(function(){
            userClickedPattern.push(color);
            playSound(color);
            animateColor(color);
            console.log(userClickedPattern);
        });
    });

    //console.log("GAME PATTERN ARRAY "+gamePattern);

    
    

function nextSquence() {    
    let randomNumber = Math.floor(Math.random()*4);
    return randomNumber;
}

function choseRandomColor(randomChosenColour) {
    let color = buttonColours[randomChosenColour];
    return color;
}
function animateColor(color) {
    let str = "#"+color;
        $(str).fadeIn(100).fadeOut(100).fadeIn(100);
        $(str).addClass("pressed");
        setInterval(() => {
            $(str).removeClass("pressed");
        }, 300);
}

function playSound(color) {
    var audio = new Audio("sounds/" + color + ".mp3");
        audio.play();
}

    
