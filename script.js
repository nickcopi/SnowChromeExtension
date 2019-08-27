var canvas=document.createElement('canvas')
canvas.style.left="0px"
canvas.style.top="0px"
canvas.style.position="fixed"
canvas.style.zIndex="100"
canvas.style.pointerEvents="none"
canvas.width=screen.width
canvas.height=screen.height
document.body.appendChild(canvas)
var squiggles=[]
    var ctx=canvas.getContext('2d')
    var tick=0;
    canvas.mouseover=function(e){
e.preventDefault()
    }

var snow;
function Snow(){
snow=setInterval(function(){
tick++
squiggles.push(new Squiggle())
squiggles.push(new Squiggle())
squiggles.push(new Squiggle())
moveSquiggle()
render()
},16.6666)    
}
Snow()
function moveSquiggle(){
 for(i=0;i<squiggles.length;i++){
  var temp=(Math.floor((Math.random() * 6) + .5)-3);
  squiggles[i].x+=temp
 var temp=(Math.floor((Math.random() * 2) + 1));
 squiggles[i].y+=temp
  //squiggles[i].y+=1
 if(squiggles[i].y>canvas.height+2){
squiggles.splice(i,1)
i++
}
 
 }
}
function Squiggle(){
    this.x=Math.floor((Math.random() * canvas.width) + 1)
    this.y=0
}
function render(){
    ctx.clearRect(0,0,canvas.width,canvas.height)
    ctx.fillStyle="white"
for(i=0;i<squiggles.length;i++){
    ctx.fillRect(squiggles[i].x,squiggles[i].y,2,2)
}
}
squiggles.push(new Squiggle())
