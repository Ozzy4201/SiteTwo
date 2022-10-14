const burger = document.getElementsByClassName("burger")[0];
const Top = document.getElementById("Top");
const Middle = document.getElementById("Middle");
const Bottom = document.getElementById("Bottom");
var open = 0.5;

function animateTopMidBot(Top, Middle, Bottom) {
    if(open=0){
        console.log("open = 0");
    };
    if(open=1){
        console.log("open = 1");
    }
    return 0;
};

burger.addEventListener("click", animateTopMidBot(Top, Middle, Bottom));
