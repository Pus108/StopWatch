let startTime = 0;
    let elapsedTime = 0;
    let timerInterval;
    let isRunning = false;

    const display = document.getElementById("display");
    const lapsList = document.getElementById("laps");

    function timeToString(time) {
      let totalSeconds = Math.floor(time / 1000);
      let hh = Math.floor(totalSeconds / 3600);
      let mm = Math.floor((totalSeconds % 3600) / 60);
      let ss = totalSeconds % 60;

      let formattedHH = hh.toString().padStart(2, "0");
      let formattedMM = mm.toString().padStart(2, "0");
      let formattedSS = ss.toString().padStart(2, "0");

      return `${formattedHH}:${formattedMM}:${formattedSS}`;
    }

    function start() {
      if (!isRunning) {
        startTime = Date.now() - elapsedTime;
        timerInterval = setInterval(() => {
          elapsedTime = Date.now() - startTime;
          display.innerHTML = timeToString(elapsedTime);
        }, 1000);
        isRunning = true;
      }
    }

    function pause() {
      if (isRunning) {
        clearInterval(timerInterval);
        isRunning = false;
      }
    }

    function reset() {
      clearInterval(timerInterval);
      display.innerHTML = "00:00:00";
      elapsedTime = 0;
      isRunning = false;
      lapsList.innerHTML = "";
    }

    function lap() {
      if (isRunning) {
        const li = document.createElement("li");
        li.textContent = timeToString(elapsedTime);
        lapsList.appendChild(li);
      }
    }

    document.getElementById("startBtn").addEventListener("click", start);
    document.getElementById("pauseBtn").addEventListener("click", pause);
    document.getElementById("resetBtn").addEventListener("click", reset);
    document.getElementById("lapBtn").addEventListener("click", lap);