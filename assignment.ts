// creating function and use conditional statements in it

function iftarParty(){
    const Rooza:string = "NO"
    if (Rooza == "yes"){
        console.log("you are invited at iftar party");
    }else{
        console.log("Please stay at your home");
    }
}
//iftarParty(); 


 // CREATE A return function USING if-else condition AND parameters and arguments 

function guestinvite(guest1:string,guest2:string):string{
    let guestinvite:string=" ";
    if(guest1 === "laiba" && guest2 === "faraz"){
        console.log(` \n ${guest1} and ${guest2} ! Both of you are invited for dinner`)
    }else{
        console.log( `\n Sorry , ${guest1} and ${guest2} you are not invited`);
        
    }
   return guestinvite;
}
guestinvite("laiba","faraz"); // IF CONDITION EXECUTE HERE
guestinvite("subhan" , "mustufa"); // ELSE CONDITION EXECUTE