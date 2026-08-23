const cursor = document.querySelector('.custom-cursor');
let lastTime = performance.now();
const lerp = (start, end, amt) => (1 - amt) * start + amt * end;

let pageX = -500
let pageY = 0

let lerpX = 0
let lerpY = 0
let sizeLerpX = 0; let sizeLerpY = 0;

let firstFrame = false

function update(currentTime) {
  let deltaTime = (currentTime - lastTime) / 1000;

  lerpX = lerp(lerpX, pageX, deltaTime * 15.0);
  lerpY = lerp(lerpY, pageY, deltaTime * 15.0);
  cursor.style.left = lerpX + 'px'
  cursor.style.top = lerpY + 'px'

  if (firstFrame) {
    sizeLerpX = lerp(sizeLerpX, 32, deltaTime * 6.0);
      sizeLerpY = lerp(sizeLerpY, 32, deltaTime * 6.0);

      cursor.style.width = sizeLerpX + 'px'
      cursor.style.height = sizeLerpY + 'px'
  }
  
  
  lastTime = currentTime

  self.requestAnimationFrame(update)
}
document.addEventListener('mousemove', (e) => {
  if (!firstFrame) {
    lerpX = e.pageX
    lerpY = e.pageY
    firstFrame = true
  }
    pageX = e.pageX
    pageY = e.pageY
});
self.requestAnimationFrame(update);