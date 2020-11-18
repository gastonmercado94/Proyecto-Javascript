// EVENTOS CON DOM

// function ChangeInputName(){
//     document.getElementById("input__name").style.border="1px solid lightskyblue";
//     document.getElementById("input__name").style.background="rgba(255,255,255,0.2)";
// }

// function ChangeInputLastname(){
//     document.getElementById("input__lastname").style.border="1px solid lightskyblue";
//     document.getElementById("input__lastname").style.background="rgba(255,255,255,0.2)";
// }

// function ChangeInputMail(){
//     document.getElementById("input__mail").style.border="1px solid lightskyblue";
//     document.getElementById("input__mail").style.background="rgba(255,255,255,0.2)";
// }

// function ChangeInputMsg(){
//     document.getElementById("input__msg").style.border="1px solid lightskyblue";
//     document.getElementById("input__msg").style.background="rgba(255,255,255,0.2)";
// }

// function SendAlert(){
//     alert("Your message has been sent");
// }


// EVENTOS CON JQUERY

$("#input__name").change(function(){
$(this).css({border:"1px solid lightskyblue", background:"rgba(255,255,255,0.25)"})
});

$("#input__lastname").change(function(){
$(this).css({border:"1px solid lightskyblue", background:"rgba(255,255,255,0.25)"})
});

$("#input__mail").change(function(){
$(this).css({border:"1px solid lightskyblue", background:"rgba(255,255,255,0.25)"})
});

$("#input__msg").change(function(){
$(this).css({border:"1px solid lightskyblue", background:"rgba(255,255,255,0.25)"})
});

$("#button__send").click(function(){
    alert("Your message has been sent");
});
