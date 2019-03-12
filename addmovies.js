const imgUrl = document.getElementById('imgurl');

$('[name="thumbnail"]').on('change', function() {
    $('img.preview').prop('src', this.value);
});
imgUrl.addEventListener('input', function() {
    document.querySelector('.previewImg').setAttribute('src')
})