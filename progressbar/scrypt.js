const progressWrap = document.querySelector("#progress-wrapper");
const progress = document.querySelector("#progress");

const progressFunc = () => {
    let value = 0;
    const interval = setInterval(() => {
        value += 10;
        if (value > 100) {
            // clearInterval(interval)
            value = 0
        }
        progress.style.width = `${value}%`
    }, 500);
}

progressFunc()