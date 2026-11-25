const button = document.querySelector('#burguer');
const menu = document.querySelector('.menu');
function closeMenu(){button.setAttribute('aria-expanded','false');menu.classList.remove('open');}
button.addEventListener('click',()=>{const open=button.getAttribute('aria-expanded')!=='true';button.setAttribute('aria-expanded',String(open));menu.classList.toggle('open',open);});
menu.addEventListener('click',e=>{if(e.target.closest('a'))closeMenu();});
document.addEventListener('keydown',e=>{if(e.key==='Escape'){closeMenu();button.focus();}});
