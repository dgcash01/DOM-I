var startTime;
var muhButton = document.createElement('button');
muhButton.onclick=function(){
    startTimer();
};
document.addEventListener('DOMContentLoaded', function(){
    document.body.appendChild(muhButton);
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
    document.getElementById('secondTens').innerHTML = arrDiff.pop();
    
    // console.log(sDiff);
}

function startTimer(){
    startTime = +new Date();
    setInterval (() => {
        incrementTimer();
    } ,10);
}


