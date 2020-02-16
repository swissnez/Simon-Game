
let buttonColours = ["red", "blue", "green", "yellow"];
let gamePattern = [];
let userClickedPattern = [];
let level = 0;
let i=0;
    
    while (i < buttonColours.length) { // $(".btn") using jQuery $() function to find all buttons "btn" hence length is 4 total 
        
        
        let color = choseRandomColor(nextSquence());
            gamePattern.push(color); 
            //animateColor(color);
            //playSound(color);
        i++;
    }
    $("h3").text("**** Game Pattern **** "+gamePattern);
    console.log("Random colors "+gamePattern);
    window.gamePattern = gamePattern;
    // UI Elements DOM Eventlistener! 
   
    function checkAnswer(sequence,color) {
        console.log("clicked "+sequence + " "+ color);

        if(sequence == gamePattern.indexOf("red")) {
            console.log("RED");
        } 
    }
   


    buttonColours.forEach(color=>{
        $("#"+color).click(function(){
            userClickedPattern.push(color);
            playSound(color);
            animateColor(color);
            console.log("UserClickedPattern >>>"+userClickedPattern);
            checkAnswer(userClickedPattern.indexOf(color),color);
        });
    });

    document.addEventListener("keydown",function(){
        
        $("h1").text("Level "+level);
        level++;
        let randomNumber = nextSquence();
        
    });

    

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

    
