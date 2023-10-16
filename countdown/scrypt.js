(function () {
    const hour = document.querySelector("#hour")
    const mins = document.querySelector("#min")
    const sec = document.querySelector("#sec")

    const startBtn = document.querySelector(".start")
    const stopBtn = document.querySelector(".stop")
    const resetBtn = document.querySelector(".reset")
    var timer
    startBtn.addEventListener("click", function () {

        if (hour.value == 0 && mins.value == 0 && sec.value == 0) {
            return
        }
        stopBtn.style.display = "block";
        startBtn.style.display = "none";
        timer = setInterval(() => {
            handleCountDown()
        }, 1000)

        function handleCountDown() {
            if (sec.value > 59) {
                ++mins.value;
                sec.value = parseInt(sec.value) - 59;
            }
            if (mins.value > 60) {
                ++hour.value;
                mins.value = parseInt(mins.value) - 60;
            }

            if (hour.value == 0 && mins.value == 0 && sec.value == 0) {
                handleStop()
            } else if (sec.value != 0) {
                sec.value = `${sec.value <= 10 ? "0" : ""}${sec.value - 1}`
            } else if (mins.value != 0 && sec.value == 0) {
                sec.value = 59;
                mins.value = `${mins.value <= 10 ? "0" : ""}${mins.value - 1}`
            } else if (hour.value != 0 && mins.value == 0) {
                mins.value = 60;
                hour.value = `${hour.value <= 10 ? "0" : ""}${hour.value - 1}`
            }
        }
    })

    function handleStop() {
        clearInterval(timer)
        stopBtn.style.display = "none";
        startBtn.style.display = "initial";
    }

    stopBtn.addEventListener("click", handleStop)

    resetBtn.addEventListener("click", function () {
        hour.value = "00";
        mins.value = "00";
        sec.value = "00"
        handleStop()
    })
})()