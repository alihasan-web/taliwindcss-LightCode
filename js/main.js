let main=document.getElementById('main');
let icon=document.getElementById('icon');
function open_icon(){
    main.classList.toggle('hidden');
    icon.classList.toggle('fa-xmark')
}
let users = document.getElementById('users');
let userstext=document.getElementById('users-text');
let bo_uses=document.getElementsByClassName('bo-use');
let text_uses=document.getElementsByClassName('text-use');
function showuser(){
    for(users of bo_uses)
    {
        users.classList.remove('active-use')
    }
    for(userstext of text_uses)
    {
        userstext.classList.remove('active-text')
    }
    let i=Array.from(bo_uses).indexOf(event.target);
    bo_uses[i].classList.add('active-use');
    text_uses[i].classList.add('active-text');
    
}
let togglebtn = document.getElementById('togglebtn');
let card_1_front = document.getElementById('card_1_front');
let card_1_back =document.getElementById('card_1_back');
togglebtn.addEventListener('change',() =>{
    card_1_front.classList.toggle('-rotate-y-180');
    card_1_back.classList.toggle('rotate-y-180');
})
let head=document.getElementById('header');
window.onscroll= () => {
    if(window.scrollY > 100){
        head.classList.add('bg-color-primary-dark');
        head.classList.add('border-b');
        head.classList.add('border-color-gray');
        head.classList.add('shadow-lg')
}else{
    head.classList.remove('bg-color-primary-dark');
    head.classList.remove('border-b');
    head.classList.remove('border-color-gray');
    head.classList.remove('shadow-lg')
}
}
