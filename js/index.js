function onHoverOnName() {
     const name = document.getElementById("name");
     const positionX = Math.floor(Math.random() * 100);
     const positionY = Math.floor(Math.random() * 100);
     const color = Math.floor(Math.random() * 16777215).toString(16);

     name.style.left = `${positionX}%`;
     name.style.top = `${positionY}%`;
     name.style.color = `#${color}`;
}

function onClickName() {
     document.getElementById("content").innerHTML = `
          <div class='left-content' data-toggle="modal" data-target=".bd-example-modal-sm" onclick="onClickVeryFunny()">
               <p>L</p>
               <p>Ầ</p>
               <p>Y</p>
          </div>
          <div class='right-content' data-toggle="modal" data-target=".bd-example-modal-sm" onclick="onClickFunny()">
               <p>B</p>
               <p>Ự</p>
               <p>A</p>
          </div>
     `;
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

function onClickFunny() {
     results.innerHTML = `
     <img src="assets/sexy-girl.png" />
     <img class='left-breast' src="assets/left-breast.png" onclick="onClickLeftBreast()"/>
     <img class='right-breast' src="assets/right-breast.png" onclick="onClickRightBreast()"/>
     `;
}

function playAudio() {
     new Audio("assets/squeeze.wav").play();
}

function onClickLeftBreast() {
     const leftBreast = document.querySelector(".left-breast");
     leftBreast.style.top = "170px";
     playAudio();
     setTimeout(() => {
          leftBreast.style.top = "180px";
     }, 150);
}

function onClickRightBreast() {
     const rightBreast = document.querySelector(".right-breast");
     rightBreast.style.top = "162px";
     playAudio();
     setTimeout(() => {
          rightBreast.style.top = "172px";
     }, 150);
}

function onClickVeryFunny() {
     const results = document.getElementById("results");
     results.innerHTML = `
     Very funny
     `;
}
