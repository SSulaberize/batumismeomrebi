let navigationlinks = document. getElementById ('navigation-bar');
let burgerbutton = document. getElementById ('togglebutton');
burgerbutton.addEventListener ('click', function() {
    navigationlinks.classList.toggle('active');
})