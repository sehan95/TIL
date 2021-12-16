var button = document.querySelector('button');
var input1 = document.getElementById('num1');
var input2 = document.getElementById('num2');
function add(num1, num2) {
    // num1 이랑 num2 에게 number 타입을 정하기
    return num1 + num2;
}
button.addEventListener('click', function () {
    console.log(add(+input1.value, +input2.value)); // input1.value 앞에 + 연산자를 추가해 숫자로 바꾸기
});
