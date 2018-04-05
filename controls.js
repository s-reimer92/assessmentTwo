var r1 = document.getElementById("r1"),
    r2 = document.getElementById("r2"),
    r3 = document.getElementById("r3"),
    r4 = document.getElementById("r4"),
    hair = document.getElementById("hair"),
    eyes = document.getElementById("eyes"),
    nose = document.getElementById("nose"),
    mouth = document.getElementById("mouth");
    hairvar = 1,
    eyevar = 1,
    nosevar = 1,
    mouthvar = 1;

function randomFace(){
    hairvar = Math.floor((Math.random()*3)+1);
    eyevar = Math.floor((Math.random()*3)+1);
    nosevar = Math.floor((Math.random()*3)+1);
    mouthvar = Math.floor((Math.random()*3)+1);
    r1.value = Math.floor((Math.random()*70)+1);
    hair.style.width = r1.value + "%";
    r2.value = Math.floor((Math.random()*40)+1);
    eyes.style.width = r2.value + "%";
    r3.value = Math.floor((Math.random()*30)+1);
    nose.style.width = r3.value + "%";
    r4.value = Math.floor((Math.random()*35)+1);
    mouth.style.width = r4.value + "%";
    document.getElementById("colorchoose").value = '#'+Math.floor(Math.random()*16777215).toString(16);
    document.getElementById("preview").style.backgroundColor = document.getElementById("colorchoose").value;
    hair.src = "img/hair"+hairvar+".png";
    eyes.src = "img/eyes"+eyevar+".png";
    nose.src = "img/nose"+nosevar+".png";
    mouth.src = "img/mouth"+mouthvar+".png";
    console.log(r1.value, r2.value);
}
function createFace(){
    var newpic =  document.createElement("div");
    newpic.style.height = "100px";
    newpic.style.width = "100px";
    newpic.style.backgroundColor = document.getElementById("colorchoose").value;
    newpic.style.display = "inline-block";
    newpic.style.position = "relative";
    newpic.className = "col-xl-1 col-lg-2 col-md-2 col-sm-3";
    var newHair = document.createElement("img");
    newHair.src = "hair"+hairvar+".png";
    newHair.style.width = r1.value + "%";
    newHair.style.top = "0px";
    newHair.className = "thumbitems";
    var newEyes = document.createElement("img");
    newEyes.src = "eyes"+eyevar+".png";
    newEyes.style.width = r2.value + "%";
    newEyes.style.top = "40px";
    newEyes.className = "thumbitems";
    var newNose = document.createElement("img");
    newNose.src = "nose"+nosevar+".png";
    newNose.style.width = r3.value + "%";
    newNose.style.top = "55px";
    newNose.className = "thumbitems";
    var newMouth = document.createElement("img");
    newMouth.src = "mouth"+mouthvar+".png";
    newMouth.style.width = r4.value + "%";
    newMouth.style.top = "75px";
    newMouth.className = "thumbitems";
    newpic.appendChild(newHair);
    newpic.appendChild(newEyes);
    newpic.appendChild(newNose);
    newpic.appendChild(newMouth);
    document.getElementById("thumbBox").appendChild(newpic);
    newpic.addEventListener("click", function(){
        document.getElementById("thumbBox").removeChild(newpic);
    });
}
function changeType(type){
    r1.type = type;
    r2.type = type;
    r3.type = type;
    r4.type = type;
    r1.max = 70;
    r2.max = 40;
    r3.max = 30;
    r4.max = 35;
}
    
//Change preview BG color
document.getElementById("colorchoose").addEventListener("change", function(){
   document.getElementById("preview").style.backgroundColor = this.value;
});
//Change input types
document.getElementById("number").addEventListener("click", function(){
    changeType("number");
});
document.getElementById("range").addEventListener("click", function(){
    changeType("range");
});
//Change feature size
r1.addEventListener("change", function(){
    hair.style.width = r1.value + "%";
});
r2.addEventListener("change", function(){
    eyes.style.width = r2.value + "%";
});
r3.addEventListener("change", function(){
    nose.style.width = r3.value + "%";
});
r4.addEventListener("change", function(){
    mouth.style.width = r4.value + "%";
});
//Change features
hair.addEventListener("click", function(){
    if(hairvar >= 3){
        hairvar = 0;
    }
    hairvar++;
    hair.src = "hair"+hairvar+".png";
});
eyes.addEventListener("click", function(){
    if(eyevar >= 3){
        eyevar = 0;
    }
    eyevar++;
    eyes.src = "eyes"+eyevar+".png";
});
nose.addEventListener("click", function(){
    if(nosevar >= 3){
        nosevar = 0;
    }
    nosevar++;
    nose.src = "nose"+nosevar+".png";
});
mouth.addEventListener("click", function(){
    if(mouthvar >= 3){
        mouthvar = 0;
    }
    mouthvar++;
    mouth.src = "mouth"+mouthvar+".png";
});
//Create Elements
document.getElementById("plus").addEventListener("click", function(){
    createFace();
});
//Random image
document.getElementById("random").addEventListener("click", function(){
    randomFace();
    
});
//AutoRandom
document.getElementById("autoRandom").addEventListener("click", function(){
    var randomTimer = setInterval(function(){
        randomFace();
        createFace();
    }, 500);
    document.getElementById("autoRandom").disabled = true;
    document.getElementById("stopRandom").addEventListener("click", function(){
        clearInterval(randomTimer);
        document.getElementById("autoRandom").disabled = false;
    });
});
