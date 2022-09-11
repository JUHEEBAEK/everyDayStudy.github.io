const clockTitle = document.querySelector(".jsClock");

function getClock() {
    const date = new Date();
    const second = String(date.getSeconds()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const hours = String(date.getHours()).padStart(2, "0");
    
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth()).padStart(2, "0");
    const year = String(date.getFullYear()).padStart(2, "0");
    
    clockTitle.innerText = `${year}-${month}-${day} ${hours}:${minutes}:${second}`;
}

setInterval(getClock, 1000);
