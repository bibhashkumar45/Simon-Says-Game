
//  First Step - Start the game by press any key

let gameSeq=[];
let userSeq=[];

let  btns=["yellow","red","purple","green"]; // array of color

let started=false;
let level=0;

let h2=document.querySelector("h2");

document.addEventListener("keypress", function()
{
        if(started==false)
        {
                console.log("game is started");
                started=true;


                levelUp();
        }

       
})


//  step 2

//  flase the button when start the game

function gameFlash(btn)
{
        btn.classList.add("flash");

        // remove 
        setTimeout(function()
        {
                btn.classList.remove("flash");
        },200)
}


//  When the user click the button
function userFlash(btn)
{
        btn.classList.add("userflash");

        // remove 
        setTimeout(function()
        {
                btn.classList.remove("userflash");
        },100)
}





function levelUp()
{
        userSeq=[];
        level++;
        h2.innerText=`Level : ${level}`;


        // choose randon button
        let randIdx=Math.floor(Math.random()*3);
        let randColor=btns[randIdx];
        let randbtn=document.querySelector(`.${randColor}`);  // select that btn from the document
        // console.log(randIdx);
        // console.log(randColor);
        // console.log(randbtn);

        // push color into gameSeq
        gameSeq.push(randColor);
        console.log(gameSeq);
        gameFlash(randbtn);

}



// check answer

function checkAns(idx)
{
        
        if(userSeq[idx]==gameSeq[idx])
        {
               if(userSeq.length=== gameSeq.length)
               {
                setTimeout(levelUp,1000);
               }
        }
        else
        {
                h2.innerHTML=`Game Over! Your score was <b>${level*10}</b> <br>Press any key to start.`;
                document.querySelector("body").style.backgroundColor="red";
                setTimeout(function ()
                {
                        document.querySelector("body").style.backgroundColor="white";  
                },150);
                reset();
        }
}



// ////////////////////////////////////////// STEP:-3 //////////////////


function btnPress()
{
        // console.log(this);
       let btn=this;
       userFlash(btn);

    // find user color

    userColor=btn.getAttribute("id");
//     console.log(userColor);
//      push in the array
    userSeq.push(userColor);
//     console.log(userSeq);

    checkAns(userSeq.length-1);// pass userseq index

}

let allBtns=document.querySelectorAll(".btn");

for(btn of allBtns)
{
        btn.addEventListener("click" , btnPress);
}

//   ///////////////////////////////  reset function

function reset()
{
        started=false;
        gameSeq=[];
        userSeq=[];
        level=0;

}

