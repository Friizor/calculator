const result = document.getElementById('result');

function display(input) {
    result.value += input;
}

function clearInput(){
    result.value = "";
}

function counting() {
    try{
        result.value = eval(result.value);
    }
    catch{
        result.value = "Error";
    }
}
