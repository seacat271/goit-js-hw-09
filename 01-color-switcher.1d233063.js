const t={startBtn:document.querySelector("[data-start]"),stopBtn:document.querySelector("[data-stop]"),body:document.querySelector("body")};function o(){randomColor=`#${Math.floor(16777215*Math.random()).toString(16)}`,t.body.style.backgroundColor=randomColor}function e(){[...document.querySelectorAll("button")].map((t=>t.disabled=!t.disabled))}let n=null;t.stopBtn.disabled=!0,t.startBtn.addEventListener("click",(function(){o(),n=setInterval((()=>{o()}),1e3),e()})),t.stopBtn.addEventListener("click",(function(){clearInterval(n),e()}));
//# sourceMappingURL=01-color-switcher.1d233063.js.map
