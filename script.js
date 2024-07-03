let countdownInterval;

function updatetimer() {
  console.log("enterres");
  let hours = parseInt(document.querySelector("#realhours").textContent);
  let minutes = parseInt(document.querySelector("#realminutes").textContent);
  let seconds = parseInt(document.querySelector("#realseconds").textContent);
  if (seconds === 0) {
    if (minutes === 0) {
      if (hours === 0) {
        clearInterval(countdownInterval);
        let finaloutput = document.querySelector("#realtime");
        finaloutput.innerHTML = "Time's up";
        finaloutput.classList.add("danger");
        document.body.innerHTML += `<audio autoplay ><source src='Laadi Gudiye.mp3' ></source></audio>`;
        return;
      } else {
        hours--;
        minutes = 59;
      }
    } else {
      seconds = 59;
      minutes--;
    }
  } else {
    seconds--;
  }
  document.querySelector("#realhours").textContent = String(hours).padStart(
    2,
    0
  );
  document.querySelector("#realminutes").textContent = String(minutes).padStart(
    2,
    0
  );
  document.querySelector("#realseconds").textContent = String(seconds).padStart(
    2,
    0
  );
}

document.querySelector("#btn").addEventListener("click", () => {
  let hours = document.querySelector("#Hours").value;
  let minutes = document.querySelector("#Minutes").value;
  let seconds = document.querySelector("#Seconds").value;
  if (minutes > 59 || seconds > 59) {
    alert("Enter the time correctly.");
  } else {
    document.querySelector("#container").innerHTML = `
    <h1>Countdown Timer</h1>
        <div id="realtime">
          <div id="realhours">${hours.padStart(2, 0)}</div>:
          <div id="realminutes">${minutes.padStart(2, 0)}</div>:
          <div id="realseconds">${seconds.padStart(2, 0)}</div>
        </div>
        `;
    countdownInterval = setInterval(updatetimer, 1000);
  }
});

/*
  let countdownInterval;

function updateTimer() {
    let hours = parseInt(document.querySelector("#realhours").textContent);
    let minutes = parseInt(document.querySelector("#realminutes").textContent);
    let seconds = parseInt(document.querySelector("#realseconds").textContent);

    if (seconds === 0) {
        if (minutes === 0) {
            if (hours === 0) {
                clearInterval(countdownInterval);
                alert("Time's up!");
                <
                return;
            } else {
                hours--;
                minutes = 59;
                seconds = 59;
            }
        } else {
            minutes--;
            seconds = 59;
        }
    } else {
        seconds--;
    }

    document.querySelector("#realhours").textContent = String(hours).padStart(2, '0');
    document.querySelector("#realminutes").textContent = String(minutes).padStart(2, '0');
    document.querySelector("#realseconds").textContent = String(seconds).padStart(2, '0');
}

document.querySelector("#btn").addEventListener("click", () => {
    let hours = parseInt(document.querySelector("#Hours").value);
    let minutes = parseInt(document.querySelector("#Minutes").value);
    let seconds = parseInt(document.querySelector("#Seconds").value);

    if (isNaN(hours) || isNaN(minutes) || isNaN(seconds) || minutes > 59 || seconds > 59) {
        alert("Enter the time correctly.");
    } else {
        document.querySelector("#container").innerHTML = `
            <h1>Countdown Timer</h1>
            <div id="realtime">
              <div id="realhours">${String(hours).padStart(2, '0')}</div>:
              <div id="realminutes">${String(minutes).padStart(2, '0')}</div>:
              <div id="realseconds">${String(seconds).padStart(2, '0')}</div>
            </div>
        `;
        countdownInterval = setInterval(updateTimer, 1000);
    }
});
*/
