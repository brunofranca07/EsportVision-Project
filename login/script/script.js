/* MUDAR TELA */
let login2=document.querySelector(".login2");

/* MUDANÇA DE TELA DE LOGIN*/

/* TELA DE LOGIN */
function cadastrar(){
    if (login2.style.display=='none')
        login2.style.display='block'
    else
        login2.style.display='none'
}

/* TELA DE CADASTRO*/
function login(){
    if (login2.style.display=='block')
        login2.style.display='none'
    else
        login2.style.display='block'
}


/* REQUERIMENTOS DE LOGIN E CADASTRO*/

    /* LOGIN */
function entrar(){

    let username1=document.querySelector("#txtlogin1");
    let password1=document.querySelector("#txtsenha1");

    let nome1=username1.value;
    let senha1=password1.value;

    if(nome1===""||senha1===""){
        window.alert('Você precisa preencher todos os campos')
    }
    else{
        window.alert(`Bem-vindo(a) novamente, ${nome1}!`)
        window.location.href="../../index.html"
    }
}

    /* CADASTRO */
function cadastro(){

    let username2=document.querySelector("#txtlogin2");
    let password2=document.querySelector("#txtsenha2"); 

    let nome2=username2.value;
    let senha2=password2.value;

    if(nome2===""||senha2===""){
        window.alert('Você precisa preencher todos os campos')
    }
    else{
    window.alert(`Você foi cadastrado! Seja Bem-vindo(a), ${nome2}!`)  
    login2.style.display='none';
    }
}
