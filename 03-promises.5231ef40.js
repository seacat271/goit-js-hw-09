var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},n={},t=e.parcelRequired7c6;function l(e,o){return new Promise(((n,t)=>{const l=Math.random()>.3;let i={position:e,delay:o};setTimeout((()=>{l&&n(i),t(i)}),o)}))}null==t&&((t=function(e){if(e in o)return o[e].exports;if(e in n){var t=n[e];delete n[e];var l={id:e,exports:{}};return o[e]=l,t.call(l.exports,l,l.exports),l.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,o){n[e]=o},e.parcelRequired7c6=t),t("i37YJ");({inputForm:document.querySelector(".form")}).inputForm.addEventListener("submit",(e=>{e.preventDefault();let{elements:{delay:o,step:n,amount:t}}=e.target;console.log(o.value,n.value,t.value);for(let e=1;e<=+t.value;e+=1)delay=+o.value+n.value*(e-1),l(e,delay).then((({position:e,delay:o})=>{console.log(`✅ Fulfilled promise ${e} in ${o}ms`)})).catch((({position:e,delay:o})=>{console.log(`❌ Rejected promise ${e} in ${o}ms`)}))}));
//# sourceMappingURL=03-promises.5231ef40.js.map
