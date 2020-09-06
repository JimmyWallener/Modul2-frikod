const main = document.querySelector(".main");

(function () {
  const button = document.querySelector(".changes");
  const colorBox = document.querySelector(".colorbox");
  const textBox = document.querySelector(".textbox");
  const resetBtn = document.querySelector(".reset");
  let mainColor = 0;
  let boxColor = 0;

  document.addEventListener("change-color", (e) => {
    main.style.backgroundColor = e.detail.main;
    colorBox.style.backgroundColor = e.detail.colorbox;
  });
  document.addEventListener("change-color", (e) => {
    textBox.textContent = "Current HexColor: " + e.detail.colorbox;
  });

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
  resetBtn.addEventListener("click", () => {
    mainColor && resetColor();
  });
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

  // Functions here
  function colorChange() {
    const index = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += index[Math.floor(Math.random() * 16)];
    }
    return color;
  }
})();
