let getGif=function(t,e){const o="https://api.giphy.com/v1/gifs/search?api_key="+GIPHY_API_KEY+"&rating=G&";axios.get(o+"q="+t).then((function(t){e(t.data.data)})).catch((function(t){console.warn(t)}))},topicName=document.querySelector(".topic"),myButton=document.querySelector(".submit-topic");console.log(topicName.value),myButton.addEventListener("click",(function(t){getGif(topicName.value,(function(t){console.log(t);for(let e=0;e<10;e++){console.log(getGif[e]),Math.random();let o=document.createElement("img");o.setAttribute("src",t[e].images.original.url),o.classList.add("new-img"),document.body.append(o),o.style.left=600*Math.random()+"px",o.style.top=0*Math.random()+"px"}})),getGif("Core Water",(function(t){for(let e=0;e<1;e++){console.log(getGif[e]);let o=document.createElement("img");o.setAttribute("src",t[e].images.original.url),o.classList.add("wrong-img"),document.body.append(o),createdImg.style.left=600*Math.random()+"px",createdImg.style.top=0*Math.random()+"px"}})),setInterval((function(){let t=document.querySelector(".new-img:not(.falling)"),e=document.querySelector(".wrong-img:not(.falling)");t.classList.add("falling"),e.classList.add("falling")}),1e3),createdImg.addEventListener("click",(function(){this.classList.remove("new-img")}))}));
//# sourceMappingURL=main-dist.js.map