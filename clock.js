const clockContainer = document.querySelector('.clock');
const clock = clockContainer.querySelector('h1');

function getTime(){
    const date=new Date();
    //console.log(date.getFullYear());
    const seconds=date.getSeconds();
    const minutes=date.getMinutes();
    const hours=date.getHours();

    clock.innerText=`${hours<10 ?`0${hours}`:hours}:${minutes<10 ?`0${minutes}`:minutes}:${seconds<10 ?`0${seconds}`:seconds}`
}


function init(){
    getTime();
    setInterval(getTime,1000);
}

init();