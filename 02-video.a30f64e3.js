const e=document.querySelector("iframe"),n=new Vimeo.Player(e);n.addEventListener("blur",(()=>{console.log("dziala"),n.getCurrentTime().then((function(e){console.log(e)})).catch((function(e){}))}));
//# sourceMappingURL=02-video.a30f64e3.js.map
