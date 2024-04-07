let dishes=document.querySelectorAll('.dish');
let textnode=document.querySelector('.search-bar').firstElementChild;
show=false;

textnode.addEventListener('keyup',(e)=>{
    let searchtext=e.target.value.toLowerCase();
    dishes.forEach((dish)=>{
        let dish_name=dish.firstElementChild.innerText.toLowerCase();
        if(dish_name.indexOf(searchtext)!=-1){
            console.log('hello');
            dish.parentElement.style.display='block';
            show=true;
        }else{
            dish.parentElement.style.display='none';
        }
    })
})