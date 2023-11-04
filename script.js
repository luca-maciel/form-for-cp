var emailIpt = document.querySelector('#email-ipt');

var msgIpt = document.querySelector("#msg-ipt");

function tiraPlacehold(){
    emailIpt.setAttribute("placeholder", "");
}

function addPlacehold(){
    emailIpt.setAttribute("placeholder", "Seu email");
}
//=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

function tiraPlaceholdMsg(){
    msgIpt.setAttribute("placeholder", "");
}

function addPlaceholdMsg(){
    msgIpt.setAttribute("placeholder", "Sua mensagem");
}

// emailIpt.addEventListener('mouseclick', tiraPlacehold);
emailIpt.addEventListener('mouseleave', addPlacehold);

msgIpt.addEventListener('mouseleave', addPlaceholdMsg);
