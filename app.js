document.querySelectorAll('nav button').forEach(button=>{
  button.addEventListener('click',()=>{
    document.querySelectorAll('nav button').forEach(b=>b.style.background='#242a3b');
    button.style.background='#454d70';
    document.querySelector('main h2').textContent=button.textContent;
  });
});
document.getElementById('search').addEventListener('keydown',e=>{
  if(e.key==='Enter'){
    document.querySelector('main h2').textContent='Search: '+e.target.value;
  }
});
