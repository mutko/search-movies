let imgUrl = document.getElementById('img-url');
let imgPrev = document.querySelector('.img-prev');

let submit = document.getElementById('master');

imgUrl.addEventListener('input', function() {
    imgPrev.setAttribute('src', imgUrl.value);
})

submit.addEventListener('click', function() {
    
})