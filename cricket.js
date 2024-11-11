
let count;
let scoreStr=localStorage.getItem('score');
if(scoreStr!=undefined){
     count=JSON.parse(scoreStr);
}else{
    count={
        win:0,
        lost:0,
        tie:0,
    }
}
function generateComputerChoice(){
    let randomNumber=Math.random()*3;
    if(randomNumber<=1){
        return('bat');
    }else if(randomNumber<=2){
        return('ball');
    }
    else{
        return('stumps');
    }
}


function getResult(computerChoice,userChoice){
    if(computerChoice==='bat' && userChoice==='ball'){
        count.lost++;
        return 'computer won';
    }else if(computerChoice==='bat' && userChoice==='stumps'){
        count.win++;
        return 'user won';
    }else if(computerChoice==='ball' && userChoice==='stumps'){
        count.lost++;
        return 'computer won';
    }else if(computerChoice==='ball' && userChoice==='bat'){
        count.win++;
        return 'user won';
    }else if(computerChoice==='stumps' && userChoice==='bat'){
        count.lost++;
        return 'computer won';
    }else if(computerChoice==='stumps' && userChoice==='ball'){
        count.win++;
        return 'user won';
    }
    else{
        count.tie++;
        return 'its a tie';
    }
}
function showResult(computerChoice,userChoice,result){
    localStorage.setItem('score',JSON.stringify(count));
    document.querySelector('#user-choice').innerText=userChoice!==undefined?`user choose to ${userChoice}`:'';
    document.querySelector('#computer-choice').innerText=computerChoice!==undefined?`computer choose to ${computerChoice}`:'';
    document.querySelector('#result').innerText=result!==undefined?`${result}`:'';
    document.querySelector('#score').innerText=`win:${count.win},lost:${count.lost},tie:${count.tie}`;
}