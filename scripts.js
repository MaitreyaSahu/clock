console.log('connected');
setInterval(move,1000);

const secondHand = document.querySelector('.second');
const minuteHand = document.querySelector('.minute');
const hourHand = document.querySelector('.hour');

function move(){
    const now = new Date();    

    //convert second to degree
    const second = now.getSeconds();
    const secondInDegree = ((second / 60) * 360) + 90;
    secondHand.style.transform = `rotate(${secondInDegree}deg)`;

    //convert minute to degree
    const minute = now.getMinutes();
    const minuteInDegree = (((minute / 60) * 360) + (second / 60)) + 90;
    minuteHand.style.transform = `rotate(${minuteInDegree}deg)`;

    //convert hour to degree
    const hour = now.getHours();
    const hourInDegree = (((hour / 12) * 360) + (minute/12)) + 90;
    hourHand.style.transform = `rotate(${hourInDegree}deg)`;

    console.log(now.getHours(), now.getMinutes(), now.getSeconds(), hourInDegree, minuteInDegree, secondInDegree);

}