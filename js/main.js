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