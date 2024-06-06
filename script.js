const result = document.getElementById('result');

function display(input) {
    result.value += input;
}

function clearInput(){
    result.value = "";
}

function counting() {
    result.value = eval(result.value);
}
