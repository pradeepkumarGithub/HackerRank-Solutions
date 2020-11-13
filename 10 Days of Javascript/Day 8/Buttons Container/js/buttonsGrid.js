let middleButton = document.getElementById('btn5');
let label = [1, 2, 3, 6, 9, 8, 7, 4];
middleButton.addEventListener("click", () => {
    label.unshift(label.pop());
    document.getElementById('btn1').innerHTML = label[0];
    document.getElementById('btn2').innerHTML = label[1];
    document.getElementById('btn3').innerHTML = label[2];
    document.getElementById('btn6').innerHTML = label[3];
    document.getElementById('btn9').innerHTML = label[4];
    document.getElementById('btn8').innerHTML = label[5];
    document.getElementById('btn7').innerHTML = label[6];
    document.getElementById('btn4').innerHTML = label[7];
  
});