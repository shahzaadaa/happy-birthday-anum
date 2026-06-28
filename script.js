// ================================
// Happy Birthday Website
// By Muneeb ❤️
// ================================

// Hide loader after 2 seconds
window.addEventListener("load", () => {
    setTimeout(() => {
        const loader = document.getElementById("loader");
        if (loader) loader.style.display = "none";
    }, 2000);
});

const startBtn = document.getElementById("startBtn");
const surprise = document.getElementById("surprise");
const giftSection = document.getElementById("giftSection");
const cakeSection = document.getElementById("cakeSection");
const letterSection = document.getElementById("letterSection");
const finalSection = document.getElementById("finalSection");

const popup = document.getElementById("popup");
const giftMessage = document.getElementById("giftMessage");
const closePopup = document.getElementById("closePopup");

const music = document.getElementById("music");

// Start button
if (startBtn) {
    startBtn.addEventListener("click", () => {
        surprise.classList.remove("hidden");
        giftSection.classList.remove("hidden");
        cakeSection.classList.remove("hidden");
        letterSection.classList.remove("hidden");
        finalSection.classList.remove("hidden");

        surprise.classList.add("fadeIn");
        giftSection.classList.add("fadeIn");
        cakeSection.classList.add("fadeIn");
        letterSection.classList.add("fadeIn");
        finalSection.classList.add("fadeIn");

        if (music) {
            music.play().catch(() => {});
        }

        launchConfetti();

        surprise.scrollIntoView({
            behavior: "smooth"
        });
    });
}

// 📦 FIXED GIFT OPENER FUNCTION
function openGift(number){
    if (!popup || !giftMessage) return;

    // This forces the popup window to show up
    popup.style.setProperty('display', 'flex', 'important');
    popup.classList.remove("hidden");

    switch(number){
        case 1:
            giftMessage.innerHTML = "🎂 A huge birthday hug and endless happiness for you, Anum!";
            break;
        case 2:
            giftMessage.innerHTML = "🌸 May Allah bless you with success, peace, good health and beautiful memories.";
            break;
        case 3:
            giftMessage.innerHTML = "❤️ Thank you for being such an amazing best friend. Happy Birthday!<br><br>From Muneeb";
            break;
    }
}

// 📦 FIXED POPUP CLOSE BUTTON
if (closePopup) {
    closePopup.onclick = () => {
        popup.style.setProperty('display', 'none', 'important');
        popup.classList.add("hidden");
    };
}

// Close if clicking outside the white box container
window.onclick = (e) => {
    if (e.target == popup) {
        popup.style.setProperty('display', 'none', 'important');
        popup.classList.add("hidden");
    }
};

// Blow Candle
const blowBtn = document.getElementById("blowBtn");
const flame = document.querySelector(".flame");

if(blowBtn){
    blowBtn.onclick=()=>{
        if(flame){
            flame.style.display="none";
        }
        blowBtn.innerHTML="🎉 Wish Granted!";
        launchConfetti();
    };
}

// Simple Confetti
function launchConfetti(){
    const canvas=document.getElementById("confetti");
    if(!canvas) return;

    const ctx=canvas.getContext("2d");
    canvas.width=window.innerWidth;
    canvas.height=window.innerHeight;
    const pieces=[];

    for(let i=0;i<180;i++){
        pieces.push({
            x:Math.random()*canvas.width,
            y:Math.random()*canvas.height-canvas.height,
            r:Math.random()*6+3,
            dy:Math.random()*5+2
        });
    }

    let frame=0;
    function draw(){
        ctx.clearRect(0,0,canvas.width,canvas.height);
        pieces.forEach(p=>{
            ctx.beginPath();
            ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
            ctx.fillStyle=`hsl(${Math.random()*360},100%,60%)`;
            ctx.fill();
            p.y+=p.dy;
            if(p.y>canvas.height){
                p.y=-20;
            }
        });
        frame++;
        if(frame<300){
            requestAnimationFrame(draw);
        }else{
            ctx.clearRect(0,0,canvas.width,canvas.height);
        }
    }
    draw();
}

window.addEventListener("resize",()=>{
    const canvas=document.getElementById("confetti");
    if(canvas){
        canvas.width=window.innerWidth;
        canvas.height=window.innerHeight;
    }
});
