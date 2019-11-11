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