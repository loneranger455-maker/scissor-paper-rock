var player=0;comp=0;times=0;


function refresh(){
    document.getElementById("mainone").innerHTML="";
    document.getElementById("game").style.display="flex";
    document.getElementById("control").innerHTML="Make your selection:"
    document.getElementById("control").style.backgroundColor="transparent";


}
function draw(b){
    var x=document.createElement("img");

    switch(b){
        case 0:x.src="image/scissor.png";break;
        case 1:x.src="image/paper.png";break;
        case 2:x.src="image/rock.png";break;         
    }
    return(x);
}
function main(x){
        var win=0;draw1=0;
      
         a=Math.floor(Math.random()*3);
         document.getElementById("game").style.display="none";
         var a2=document.createElement("div");
         a2.setAttribute("id","nogame");
         document.getElementById("mainone").appendChild(a2);
         a2.appendChild(draw(x));
         a2.appendChild(draw(a));
         if (a!=x){
             times+=1;
             if (a==0){ if (x==1){comp+=1;document.getElementById("control").innerHTML="Computer won";} else {player+=1;win=1;document.getElementById("control").innerHTML="You won"}}
             if (a==1){ if (x==2){comp+=1;document.getElementById("control").innerHTML="Computer won"} else {player+=1;win=1;document.getElementById("control").innerHTML="You won"}}
             if (a==2){ if (x==0){comp+=1;document.getElementById("control").innerHTML="Computer won"} else {player+=1;win=1;document.getElementById("control").innerHTML="You won"}}
         }
         else {draw1=1;document.getElementById("control").innerHTML="Draw";document.getElementById("control").style.backgroundColor="blue";}
         if (draw1==0){
             var v1=document.createElement("td");
             var v2=document.createElement("td");
             var img1=document.createElement("img");
             img1.src="image/tick.png";
             var img2=document.createElement("img");
             img2.src="image/cross.png";
             img1.setAttribute("id","new");
             img2.setAttribute("id","new");
             if (win==1){ v1.appendChild(img1);v2.appendChild(img2);document.getElementById("control").style.backgroundColor="yellow"}
             else{ v2.appendChild(img1);v1.appendChild(img2);document.getElementById("control").style.backgroundColor="red"}
             document.getElementById("player").appendChild(v1);
             document.getElementById("computer").appendChild(v2);
         }
        if(times==5){
            setTimeout(()=>{
            document.getElementById("star").style.display="none";
            nw=document.createElement("p");
            nw.setAttribute("class","final");
            nw2=document.createElement("span");
            nw2.setAttribute("class","final2");
            if (player>comp)nw2.innerHTML="You won";
            else nw2.innerHTML="you lost";
            nw.appendChild(nw2);
            document.body.appendChild(nw);
            nw=document.createElement("a");
            nw.href="spr.html";
            nw.setAttribute("id","float");
            nw.innerHTML="play again";
            document.body.appendChild(nw);},800)
        }
        document.getElementById("point2").innerHTML=player;
        document.getElementById("point1").innerHTML=comp;
        
        }
