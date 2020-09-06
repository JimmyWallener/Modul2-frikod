/*
School assignment designed to use:
Self invoked anonymous function
Custom Events
AddEventListeners to handle Custome Events.
Global Variables
&& conditionals

*/

// Global Variable
const main = document.querySelector(".main");

// Self invoked anonymous function
(function () {
  // global varible within function
  const button = document.querySelector(".changes");
  const colorBox = document.querySelector(".colorbox");
  const textBox = document.querySelector(".textbox");
  const resetBtn = document.querySelector(".reset");
  let mainColor = 0;
  let boxColor = 0;

  // First addeventlistener for customevent
  document.addEventListener("change-color", (e) => {
    main.style.backgroundColor = e.detail.main;
    colorBox.style.backgroundColor = e.detail.colorbox;
  });
  // second addeventlistener for customevent
  document.addEventListener("change-color", (e) => {
    textBox.textContent = "Current HexColor: " + e.detail.colorbox;
  });
  // changes color in divs on click through customevent
  button.addEventListener("click", () => {
    mainColor = colorChange();
    boxColor = colorChange();
    console.log(mainColor);
    const event = new CustomEvent("change-color", {
      detail: {
        main: mainColor,
        colorbox: boxColor,
      },
    });
    document.dispatchEvent(event);
  });
  // resets values through customEvent
  resetBtn.addEventListener("click", () => {
    mainColor && resetColor();
  });

  // Functions here

  // randomizes color hex
  function colorChange() {
    const index = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += index[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  // resets palett through CustomEvent
  function resetColor() {
    mainColor = "#000000";
    boxColor = "#000000";
    const event = new CustomEvent("change-color", {
      detail: {
        main: mainColor,
        colorbox: boxColor,
      },
    });
    document.dispatchEvent(event);
  }
})();
