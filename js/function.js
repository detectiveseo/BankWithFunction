function grabInputValue(id){
    const stringInput = document.getElementById(id).value;
    const numValue = parseInt(stringInput);
    return numValue;
}
function grabInnerText(id){
    const stringText = document.getElementById(id).innerText;
    const numText = parseInt(stringText);
    return numText;
}
function calculate(changeTextId, InputAmmount){
    const previous = grabInnerText(changeTextId);
    const Input = grabInputValue(InputAmmount);
    const newA = previous + Input;
    document.getElementById(changeTextId).innerText = newA;
}
document.getElementById('dipositSub').addEventListener('click', function(){
    document.getElementById('balance').innerText = parseInt(grabInnerText("balance")) + parseInt(grabInputValue('depositInput'));
    document.getElementById("depositInput").value = "";
})
document.getElementById('withdrawSub').addEventListener('click', function(){
    if(parseInt(document.getElementById('balance').innerText) >= parseInt(grabInputValue('withdrawInput'))){
        document.getElementById('balance').innerText = parseInt(grabInnerText("balance")) - parseInt(grabInputValue('withdrawInput'));
    document.getElementById("withdrawInput").value = "";}
    else{
        alert("you're not allowd")
    }
})