var Toggle = document.getElementById('toggle');
var Toggle2 = document.getElementById('toggle2');
var Html = document.querySelector('html');
var LightImage = document.getElementById('lightimage');
var DarkImage = document.getElementById('darkimage');
var SmallMenu = document.getElementById('smallmenu');
var SmallToggle = document.getElementById('smalltoggle');
var SmallClose = document.getElementById('smallclose')
var ListCompany = document.getElementById('listcompany');
var ListTeam = document.getElementById('listteam');
var ListContact = document.getElementById('listcontact')
var HTML = document.querySelector('html');
HTML.style.scrollBehavior = 'smooth';


ListCompany.addEventListener('click',function(){
    if(SmallToggle.classList.contains('block')){
        SmallToggle.classList.remove('block');
        SmallToggle.classList.add('hidden');
    }
})

ListTeam.addEventListener('click',function(){
    if(SmallToggle.classList.contains('block')){
        SmallToggle.classList.remove('block');
        SmallToggle.classList.add('hidden');
    }
})

ListContact.addEventListener('click',function(){
    if(SmallToggle.classList.contains('block')){
        SmallToggle.classList.remove('block');
        SmallToggle.classList.add('hidden');
    }
})



SmallMenu.addEventListener('click',function(){
    if(SmallToggle.classList.contains('hidden')){
        SmallToggle.classList.remove('hidden');
        SmallToggle.classList.add('block');
    }
})

SmallClose.addEventListener('click',function(){
    if(SmallToggle.classList.contains('block')){
        SmallToggle.classList.remove('block');
        SmallToggle.classList.add('hidden');
    }
})




Toggle.addEventListener('click', function(){
   if(Toggle.checked){
       Html.classList.add('dark');
   }else{
       Html.classList.remove('dark');
   }
})


Toggle.addEventListener('click',function(){
    if(Toggle.checked){
        LightImage.classList.add('hidden');
        DarkImage.classList.add('block');
        DarkImage.classList.remove('hidden');
    }else if(!Toggle.checked){
        LightImage.classList.remove('hidden');
        LightImage.classList.add('block');
        DarkImage.classList.add('hidden')
    }
})

Toggle2.addEventListener('click', function(){
   if(Toggle2.checked){
       Html.classList.add('dark');
   }else{
       Html.classList.remove('dark');
   }
})


Toggle2.addEventListener('click',function(){
    if(Toggle2.checked){
        LightImage.classList.add('hidden');
        DarkImage.classList.add('block');
        DarkImage.classList.remove('hidden');
    }else if(!Toggle2.checked){
        LightImage.classList.remove('hidden');
        LightImage.classList.add('block');
        DarkImage.classList.add('hidden')
    }
})