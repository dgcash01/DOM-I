var startTime;
var intervalTimer;
var muhButtonDiv = document.createElement('div');
muhButtonDiv.style.flexDirection = 'column';
// body.style.flexDirection = 'column';
var muhButton = document.createElement('button');
muhButton.innerText = 'Be Vin Diesel!';
muhButton.onclick=function(){
    startTimer();
};
document.addEventListener('DOMContentLoaded', function(){
    muhButtonDiv.appendChild(muhButton);
    document.body.appendChild(muhButtonDiv);
});

function incrementTimer(){
    const currentTime = +new Date();
    const diff = currentTime - startTime;
    let sDiff = "0000000" + diff;
    let arrDiff = sDiff.split('');
    arrDiff.pop();
    document.getElementById('msTens').innerHTML = arrDiff.pop();
    document.getElementById('msHundreds').innerHTML = arrDiff.pop();
    document.getElementById('secondOnes').innerHTML = arrDiff.pop();
    let secondTens = arrDiff.pop();
    document.getElementById('secondTens').innerHTML = secondTens;
    if (secondTens === '1'){
        clearInterval(intervalTimer);
        document.querySelectorAll('.digit').forEach(element => {
            element.style.color= 'red';
        });
    }
    // console.log(sDiff);
}

function startTimer(){
    startTime = +new Date();
    intervalTimer = setInterval (() => {
        incrementTimer();
    } ,10);
    document.querySelectorAll('.digit').forEach(element => {
        element.style.color= 'black';
    });


}


