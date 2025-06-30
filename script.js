let userscore=0;
let compscore=0;

const user=document.querySelectorAll(".game");
const final=document.querySelector(".finalscore");
const usc=document.querySelector(".usc");
const csc=document.querySelector(".csc");

alert("This game includes financial and health issues.Please play at your own risk.\n ਇਸ ਗੇਮ ਵਿੱਚ ਵਿੱਤੀ ਅਤੇ ਸਿਹਤ ਸਮੱਸਿਆਵਾਂ ਸ਼ਾਮਲ ਹਨ। ਕਿਰਪਾ ਕਰਕੇ ਆਪਣੇ ਜੋਖਮ 'ਤੇ ਖੇਡੋ।");
let outputs=prompt("Bet any thing if you want\nਜੇਕਰ ਤੁਸੀਂ ਚਾਹੁੰਦੇ ਹੋ ਤਾਂ ਕਿਸੇ ਵੀ ਚੀਜ਼ 'ਤੇ ਸੱਟਾ ਲਗਾਓ|");
let output=(outputs.toUpperCase());
user.forEach((game) => {
    game.addEventListener("click",()=>{
        let userchoices=game.getAttribute("id");
       console.log("User choice =",userchoices);

        let opponent=["stone","paper","scissor"];
       comp=Math.floor(Math.random()*3);
       console.log("Computer choice =",opponent[comp]);
       let compchoice=opponent[comp];

       if(userchoices===compchoice)
        {
            console.log("Match is draw");
            final.innerText="Match is draw";
            final.style.backgroundColor="blue";
        } 
        else{
           let userwin=true;
           if(userchoices==="stone"){
            userwin =compchoice==="scissor"?true:false;
           }
           else if(userchoices==="paper"){
            userwin =compchoice==="stone"?true:false;
           }
           else
           {
            userwin =compchoice==="paper"?true:false;
           
           }
       
           if(userwin){
            userscore++;
            usc.innerText=userscore;
            final.innerText=`Your ${userchoices} beats ${compchoice}.You Won!`;
            final.style.backgroundColor="green";
            
           }
            else {
                compscore++;
                csc.innerText=compscore;
                final.innerText=`Computer choose ${compchoice}.You loose`;
                final.style.backgroundColor="red";
            }
           
            if(userscore === 10){
                alert(`CONGRACTULATIONS ! YOU WON. ${output}`);
                final.innerText="YOU WON.START AGAIN !";
                final.style.backgroundColor="green";
                final.addEventListener("click",()=>{
                final.innerText="Score board";
                final.style.backgroundColor="darkblue";
                userscore=0;
                usc.innerText=userscore;
                compscore=0;
                csc.innerText=compscore;
                });
               
            }
            else if(compscore === 10){
                alert(`YOU LOOSE ! ${output}. PLEASE TRY AGAIN.`);
                final.innerText="YOU LOOSE.TRY AGAIN !";
                final.style.backgroundColor="red";
            

                final.addEventListener("click",()=>{
                    final.innerText="Score board";
                    final.style.backgroundColor="darkblue";
                    userscore=0;
                    usc.innerText=userscore;
                    compscore=0;
                    csc.innerText=compscore;
                    });
            }
            else{

            }
        }

    })  
});

