function onHoverOnName() {
   const name = document.getElementById('name');
   const position = Math.floor(Math.random() * 100);
   const color = Math.floor(Math.random()*16777215).toString(16);

   name.style.left = `${position / 2}%`;
   name.style.top = `${position}%`;
   name.style.color = `#${color}`;
}