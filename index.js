let numberOfDrums = document.querySelectorAll(".drum").length;

// iterate throught all buttons on the html, to activate them

for(let i = 0; i < numberOfDrums; i ++) {

    document.querySelectorAll(".drum")[i].addEventListener("click", function() {

        let buttonInnerHtml = this.innerHTML;

        makeSound(buttonInnerHtml);

        buttonAnimation(buttonInnerHtml);
    });
}

// adding Keystrokes recognition

document.addEventListener("keydown", function (event) {
    makeSound(event.key);
    buttonAnimation(event.key);
});

// play sounds on keystroke

function makeSound (key) {
    switch (key) {
        case "w":
            var audio = new Audio('./sounds/crash.mp3');
            audio.play();
            break;
        case "a":
            var audio = new Audio('./sounds/kick-bass.mp3');
            audio.play();
            break;
        case "s":
            var audio = new Audio('./sounds/snare.mp3');
            audio.play();
            break;
        case "d":
            var audio = new Audio('./sounds/tom-1.mp3');
            audio.play();
            break;
        case "j":
            var audio = new Audio('./sounds/tom-2.mp3');
            audio.play();
            break;
        case "k":
            var audio = new Audio('./sounds/tom-3.mp3');
            audio.play();
            break;
        case "l":
            var audio = new Audio('./sounds/tom-4.mp3');
            audio.play();
            break;
    }
}

function buttonAnimation(currentKey) {
    let activeButton = document.querySelector(`.${currentKey}`);
    const removeClass = setTimeout(function() {
                activeButton.classList.remove("pressed");
            }, 100);

     switch (currentKey) {
        case "w":
            activeButton.classList.add("pressed");
            removeClass;
        case "a":
            activeButton.classList.add("pressed");
            removeClass
            break;
        case "s":
            activeButton.classList.add("pressed");
            removeClass
            break;
        case "d":
            activeButton.classList.add("pressed");
            removeClass
            break;
        case "j":
            activeButton.classList.add("pressed");
            removeClass
            break;
        case "k":
            activeButton.classList.add("pressed");
            removeClass
            break;
        case "l":
            activeButton.classList.add("pressed");
            removeClass
            break;
    }
}