let button = document.getElementById("button");
let button2 = document.getElementById("button2");
let num = document.getElementById("num");
let input = document.getElementById("input");

buttonClicks();
input.addEventListener('keydown', () => {
    buttonClicks();
});

function buttonClicks(){
    button.addEventListener('click', () => {
        if(input.value != null)
            factor = 1;
        else factor = parseInt(input.value);
        let i = parseInt(num.innerText.toString());
        num.innerText = i+factor;
    });
    button2.addEventListener('click', () => {
        if(input.value != null)
            factor = 1;
        else factor = parseInt(input.value);
        let i = parseInt(num.innerText.toString());
        num.innerText = i-factor;
    });
}