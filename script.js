const bodyEl = document.querySelector("body");

bodyEl.addEventListener("mousemove",(e)=>{
    const x = e.offsetX;
    const y = e.offsetY;

    const ran = Math.random()*100
    const newSpan = document.createElement("span");
    newSpan.style.left = x + "px";
    newSpan.style.top = y + "px";
    newSpan.style.height = ran + "px";
    newSpan.style.width = ran + "px";
    bodyEl.appendChild(newSpan);
    setTimeout(()=>{
        newSpan.remove()
    }, 3000)
});