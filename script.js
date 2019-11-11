const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const json4 = [
    ["00BCD4", "FFEB3B","FFEB3B","00BCD4"],
    ["FFEB3B", "FFC107","FFC107","FFEB3B"],
    ["FFEB3B", "FFC107","FFC107","FFEB3B"],
    ["00BCD4", "FFEB3B","FFEB3B","00BCD4"]
];

function draw(data, type) {
    let pixel = canvas.width / data.length;
    for (let i = 0; i < data.length; i++) {
        for (let j = 0; j < data.length; j++) {
            if (type == 'hex') {
                ctx.fillStyle = `#${data[i][j]}`;
            } 
            ctx.fillRect(i * pixel, j * pixel, pixel, pixel);
        }
    }
}

draw(json4, 'hex');

let button4 = document.getElementById('btn-4');

button4.addEventListener('click', () => {
    draw(json4, 'hex');
});

let clear = document.getElementById('btn-clear');

clear.addEventListener('click', () => {
    ctx.fillStyle="#CDCDCB";
    ctx.fillRect(0,0,canvas.width, canvas.height);
});

let pencil = document.querySelector('.button_pencil');
pencil.focus();
let paint = document.querySelector('.button_paint');
let current = document.getElementById('input_color');
let choose = document.querySelector('.button_choose');
let indicator_choose = document.querySelector('.button_choose span');
indicator_choose.style.background =  '#00BCD4';
let transform = document.querySelector('.button_transform');

let prev_button = document.querySelector('.button_prev');
let prev = document.querySelector('.button_prev span');

let red_button = document.querySelector('.button_red');
let red = document.querySelector('.button_red span');

let blue_button = document.querySelector('.button_blue');
let blue = document.querySelector('.button_blue span');

let local_current;
let local_prev;
let text = document.getElementById('color');

sessionStorage.setItem('local_current', current.value);
sessionStorage.setItem('local_prev', sessionStorage.getItem('local_current'));

document.addEventListener('keydown', (e) => {
    if (e.code === "KeyP") {
        pencil.focus();

        bodys.classList.add('cursor_pencil');
        bodys.classList.remove('cursor_paint');
        bodys.classList.remove('cursor_choose');
        
        pencil.classList.add('focus');
        choose.classList.remove('focus');
        indicator_choose.classList.remove('indicator');
        paint.classList.remove('focus');
        transform.classList.remove('focus');
    
        sessionStorage.setItem('pencil_focused', 'true');
        sessionStorage.setItem('paint_focused', 'false');
        sessionStorage.setItem('choose_focused', 'false');
        
    }
    if (e.code === "KeyB") {
        paint.focus();

        bodys.classList.add('cursor_paint');
        bodys.classList.remove('cursor_pencil');
        bodys.classList.remove('cursor_choose');
    
        paint.classList.add('focus');
        choose.classList.remove('focus');
        indicator_choose.classList.remove('indicator');
        pencil.classList.remove('focus');
        transform.classList.remove('focus');
    
        sessionStorage.setItem('paint_focused', 'true');
        sessionStorage.setItem('pencil_focused', 'false');
        sessionStorage.setItem('choose_focused', 'false');
    }
    if (e.code === "KeyC") {
        choose.focus();

        bodys.classList.add('cursor_choose');
        bodys.classList.remove('cursor_paint');
        bodys.classList.remove('cursor_pencil');
    
        choose.classList.add('focus');
        indicator_choose.classList.add('indicator');
        pencil.classList.remove('focus');
        paint.classList.remove('focus');
        transform.classList.remove('focus');
    
        sessionStorage.setItem('choose_focused', 'true');
        sessionStorage.setItem('pencil_focused', 'false');
        sessionStorage.setItem('paint_focused', 'false');
    }
});

current.oninput = () => {
    sessionStorage.setItem('local_prev', sessionStorage.getItem('local_current'));
    prev.style.backgroundColor = sessionStorage.getItem('local_prev');
    sessionStorage.setItem('local_current', current.value);
    indicator_choose.style.background =  current.value;
};

prev_button.onclick = () => {
    current.value = sessionStorage.getItem('local_prev');
    prev.style.backgroundColor = sessionStorage.getItem('local_current');
    sessionStorage.setItem('local_prev', sessionStorage.getItem('local_current'));
    sessionStorage.setItem('local_current', current.value);
    indicator_choose.style.background =  current.value;
};

red_button.onclick = () => {
    current.value = '#FF0000';
    prev.style.backgroundColor = sessionStorage.getItem('local_current');
    sessionStorage.setItem('local_prev', sessionStorage.getItem('local_current'));
    sessionStorage.setItem('local_current', current.value);
    indicator_choose.style.background =  current.value;
};

blue_button.onclick = () => {
    current.value = '#7ACCF9';
    prev.style.backgroundColor = sessionStorage.getItem('local_current');
    sessionStorage.setItem('local_prev', sessionStorage.getItem('local_current'));
    sessionStorage.setItem('local_current', current.value);
    indicator_choose.style.background =  current.value;
};


let paint_focused = false;
let pencil_focused = false;
let choose_focused = false;
let bodys = document.getElementById('body');
sessionStorage.setItem('pencil_focused', 'true');
sessionStorage.setItem('paint_focused', 'false');
sessionStorage.setItem('choose_focused', 'false');
pencil.classList.add('focus');

paint.onclick = () => {
    bodys.classList.add('cursor_paint');
    bodys.classList.remove('cursor_pencil');
    bodys.classList.remove('cursor_choose');

    paint.classList.add('focus');
    choose.classList.remove('focus');
    indicator_choose.classList.remove('indicator');
    pencil.classList.remove('focus');
    transform.classList.remove('focus');

    sessionStorage.setItem('paint_focused', 'true');
    sessionStorage.setItem('pencil_focused', 'false');
    sessionStorage.setItem('choose_focused', 'false');
};

pencil.onclick = () => {
    bodys.classList.add('cursor_pencil');
    bodys.classList.remove('cursor_paint');
    bodys.classList.remove('cursor_choose');
    
    pencil.classList.add('focus');
    choose.classList.remove('focus');
    indicator_choose.classList.remove('indicator');
    paint.classList.remove('focus');
    transform.classList.remove('focus');

    sessionStorage.setItem('pencil_focused', 'true');
    sessionStorage.setItem('paint_focused', 'false');
    sessionStorage.setItem('choose_focused', 'false');
};

choose.onclick = () => {
    bodys.classList.add('cursor_choose');
    bodys.classList.remove('cursor_paint');
    bodys.classList.remove('cursor_pencil');

    choose.classList.add('focus');
    indicator_choose.classList.add('indicator');
    pencil.classList.remove('focus');
    paint.classList.remove('focus');
    transform.classList.remove('focus');

    sessionStorage.setItem('choose_focused', 'true');
    sessionStorage.setItem('pencil_focused', 'false');
    sessionStorage.setItem('paint_focused', 'false');
};

transform.onclick = () => {
    bodys.classList.remove('cursor_paint');
    bodys.classList.remove('cursor_pencil');
    bodys.classList.remove('cursor_paint');

    transform.classList.add('focus');
    indicator_choose.classList.remove('indicator');
    choose.classList.remove('focus');
    pencil.classList.remove('focus');
    paint.classList.remove('focus');

    sessionStorage.setItem('pencil_focused', 'false');
    sessionStorage.setItem('paint_focused', 'false');
    sessionStorage.setItem('choose_focused', 'false');
};