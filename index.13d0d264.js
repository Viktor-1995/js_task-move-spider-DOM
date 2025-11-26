var e=document.getElementsByClassName("wall"),t=document.getElementsByClassName("spider");document.addEventListener("click",function(n){var l=e[0].getBoundingClientRect(),s=t[0].getBoundingClientRect(),i=s.width/2,c=s.height/2,a=n.clientX-l.x,d=n.clientY-l.y;n.target.closest("div").className&&(t[0].style.left=a-i+"px",t[0].style.top=d-c+"px")});
//# sourceMappingURL=index.13d0d264.js.map
