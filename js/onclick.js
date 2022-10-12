const burger = document.getElementsByClassName("burger-part");
const Top = document.getElementById("Top");
const Middle = document.getElementById("Middle");
const Bottom = document.getElementById("Bottom");
var open = 0;

burger.addEventListener("click", animateTopMidBot(Top, Middle, Bottom));

function animateTopMidBot(Top, Middle, Bottom) {
    if(open=0){
        console.log("open = 0");
        open = 1;
        Top.animate([
            { //from
                    top: 0, rotation: 0
            },
            { //to
                top: "0.82vw", rotation: 45
            }
        ], 500);
    };
    if(open=1){
        console.log("open = 1")
        open = 0

    }
};