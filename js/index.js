function onHoverOnName() {
     const name = document.getElementById("name");
     const positionX = Math.floor(Math.random() * 100);
     const positionY = Math.floor(Math.random() * 100);
     const color = Math.floor(Math.random() * 16777215).toString(16);

     name.style.left = `${positionX}%`;
     name.style.top = `${positionY}%`;
     name.style.color = `#${color}`;
}

function onInputLover() {
     const iLU = "I Love You!";
     const lover = document.getElementById("lover");
     let index = 0;
     let temp = "";

     setInterval(() => {
          if (index === iLU.length) return;
          temp += iLU[index];
          lover.value = temp;
          index++;
     }, 100);
}

function onSubmitLover() {
     const lover = document.getElementById("lover");
     const results = document.getElementById("results");
     const image = document.createElement("img");
     image.className = "lover-result";
     if (!lover.value) {
          results.innerHTML = `
          <img class="lover-result" src="assets/angry-icon.png" />
          `;
     } else {
          results.innerHTML = `
          <img class="lover-result" src="assets/funny-icon.png" />
          `;
     }
}
