window.onload=function()
{
    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");
    var x = 300;
    var y = 350;
    var t=Date.now();
    let speed=25;

    context.arc(x, y, 50, 0, 2 * Math.PI);
    context.fillStyle="red";
    context.fill(); 
    var count=0;
    context.font="25px Arial";
    context.fillStyle="white";
    context.fillText("Count: "+ count, 20,30);
    //var btn=document.getElementById("Mybutton")
    
    document.onkeydown= function()
    {   
        count+=1;
        y-=50;
        speed=25;
        function draw(){
        var timePassed=(Date.now()-t)/1000;
        t=Date.now();
        context.clearRect(0,0,600,400);
        context.beginPath();
        context.arc(x, y, 50, 0, 2 * Math.PI);
        context.fillStyle="red";
        context.fill(); 
        context.font="25px Arial";
        context.fillStyle="white";
        context.fillText("Count: "+ count, 20,30);
        if(y<=350){
            speed += 50 * timePassed;
            y += speed * timePassed;
        }
        if(y>350){ 
            count=0;
            y=350;
           
            }
        window.requestAnimationFrame(draw);
        }
        draw();
    }
    
}