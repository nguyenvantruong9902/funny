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
     if (!lover.value) {
          alert("Chưa nhập kìa má :))");
     }
}
