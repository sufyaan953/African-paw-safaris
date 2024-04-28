const showBtn = document.querySelector('.navBtn');
const topNav = document.querySelector('.topNav');

showBtn.addEventListener('click', function(){

    if(topNav.classList.contains('showNav')){
        topNav.classList.remove(showNav);
        showBtn.innerHTML = '<i class = "fas fa bars"></i>';
    } else{
        topNav.classList.add('showNav');
        showBtn.innerHTML = 'i class = "fas fa-items"></i>';
    }

});
    