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

canvas.onmousedown = (e) => {
  if(sessionStorage.getItem('pencil_focused') === 'true'){
      canvas.getContext('2d').fillStyle = current.value;
      canvas.getContext('2d').fillRect(128 * Math.floor(e.offsetX / 128), 128 * Math.floor(e.offsetY / 128), 128, 128);

      canvas.onmousemove = (e) => {
          canvas.getContext('2d').fillRect(128 * Math.floor(e.offsetX / 128), 128 * Math.floor(e.offsetY / 128), 128, 128);
      }

      document.onmouseup = () => {
          canvas.onmousemove = null;
      }
  }
  if (sessionStorage.getItem('paint_focused') === 'true') {
      
      let x = event.layerX;
      let y = event.layerY;
      let pixel = ctx.getImageData(x, y, 1, 1);
      let data = pixel.data;
      let rgbaCanvas = data.slice(0, -1).join(', ');

      text.style.color = current.value;
      let rgb =  text.style.color;
      let arr = rgb.slice(4, -1).split(', ');
      
      let colorFill = {};
      colorFill.r = +arr[0];
      colorFill.g = +arr[1];
      colorFill.b = +arr[2];
      colorFill.a = +arr[3] || 255;

      let rgbaCurrent = arr.join(', ');

      if (rgbaCanvas !== rgbaCurrent) {
          floodFill(e.offsetX, e.offsetY, colorFill);
      }
  }
}

function getPixelPos(x, y) {
  return (y * canvas.width + x) * 4;
};

function matchStartColor (data, pos, startColor) {
  return (data[pos]  === startColor.r &&
    data[pos+1] === startColor.g &&
      data[pos+2] === startColor.b &&
      data[pos+3] === startColor.a);
};

function colorPixel (data, pos, color) {
data[pos] = color.r || 0;
  data[pos+1] = color.g || 0;
  data[pos+2] = color.b || 0;
  data[pos+3] = color.hasOwnProperty("a") ? color.a : 255;
};

function floodFill (startX, startY, fillColor) {
  let dstImg = ctx.getImageData(0,0,canvas.width,canvas.height);
  let dstData = dstImg.data;

  let startPos = getPixelPos(startX, startY);
  let startColor = {
      r: dstData[startPos],
      g: dstData[startPos+1],
      b: dstData[startPos+2],
      a: dstData[startPos+3]
  };
  let todo = [[startX,startY]];

  while (todo.length) {
      let pos = todo.pop();
      let x = pos[0];
      let y = pos[1];    
      let currentPos = getPixelPos(x, y);

      while((y-- >= 0) && matchStartColor(dstData, currentPos, startColor)) {
          currentPos -= canvas.width * 4;
      }

      currentPos += canvas.width * 4;
      ++y;
      let reachLeft = false;
      let reachRight = false;

      while((y++ < canvas.height-1) && matchStartColor(dstData, currentPos, startColor)) {

          colorPixel(dstData, currentPos, fillColor);
          
          if (x > 0) {
              if (matchStartColor(dstData, currentPos-4, startColor)) {
                  if (!reachLeft) {
                  todo.push([x-1, y]);
                  reachLeft = true;
                  }
              }
              else if (reachLeft) {
                  reachLeft = false;
              }
          }
          
          if (x < canvas.width-1) {
              if (matchStartColor(dstData, currentPos+4, startColor)) {
                  if (!reachRight) {
                  todo.push([x+1, y]);
                  reachRight = true;
                  }
              }
              else if (reachRight) {
                  reachRight = false;
              }
          }
          currentPos += canvas.width * 4;
      }
  }

  ctx.putImageData(dstImg,0,0);
};

canvas.addEventListener('mousemove', (event) =>  {
  if (sessionStorage.getItem('choose_focused') === 'true') {
      let x = event.layerX;
      let y = event.layerY;
      let pixel = ctx.getImageData(x, y, 1, 1);
      let data = pixel.data;
      let rgba = 'rgba(' + data[0] + ', ' + data[1] +
              ', ' + data[2] + ', ' + (data[3] / 255) + ')';
      indicator_choose.style.background =  rgba;
      
  }
});

canvas.addEventListener('click', (event) =>  {
  if (sessionStorage.getItem('choose_focused') === 'true') {
      let x = event.layerX;
      let y = event.layerY;
      let pixel = ctx.getImageData(x, y, 1, 1);
      let data = pixel.data;
      let rgba = 'rgba(' + data[0] + ', ' + data[1] +
              ', ' + data[2] + ', ' + (data[3] / 255) + ')';
      
      sessionStorage.setItem('local_prev', sessionStorage.getItem('local_current'));
      prev.style.backgroundColor = sessionStorage.getItem('local_prev');
      current.value = rgb_to_hex(rgba);
      sessionStorage.setItem('local_current', current.value);
  }
});

function rgb_to_hex(color){
  let rgb = color.replace(/\s/g,'').match(/^rgba?\((\d+),(\d+),(\d+)/i);
  return (rgb && rgb.length === 4) ? "#" + ("0" + parseInt(rgb[1],10).toString(16)).slice(-2) 
  + ("0" + parseInt(rgb[2],10).toString(16)).slice(-2) + ("0" + parseInt(rgb[3],10).toString(16)).slice(-2) : color;
}