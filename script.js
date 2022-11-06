let navigationlinks = document.getElementById('navigation-bar');
let burgerbar = document.getElementById('togglebutton');
let picture = document.getElementById('image');
burgerbar.addEventListener('click', function () {
    burgerbar.classList.toggle('toggle');
    navigationlinks.classList.toggle('active');
    picture.classList.toggle('activation');
});

let liftbutton = document.getElementById('goToTop');
liftbutton.addEventListener('click', function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
});

let contact = document.getElementById('contactform');
contact.addEventListener('submit', function(event){
    event.preventDefault();
    let error = {};

    let contactElement = event.target;

    let usernameValue = document.getElementById('username').value;

    if (usernameValue == ''){
        error.username = 'მომხმარებლის ველი უნდა შეივსოს.';
    }

    let textField = document.getElementById('text').value;

    if (textField.length < 10){
        error.textarea = 'გამოიყენეთ სულ მცირე 10 სიმბოლო.'
    }

    let rules = document.getElementById('terms').checked;

    if (!rules){
        error.conditions = 'თქვენ უნდა დაეთანხმოთ კომუნიკაციის წესებს.';
    }

     contactElement.querySelectorAll('.errortext').forEach(item => {
        item.textContent = '';
    });

    for (let item in error){
        let errorDiv = document.getElementById('error-' + item);

        if (errorDiv) {
            errorDiv.textContent = error[item];
        }
    }
    if (Object.keys(error).length == 0){
        contactElement.submit();
    }
});

let emailarea = document.getElementById('email');
emailarea.addEventListener('keydown', function(){
    let emailValue = document.getElementById('email').value;
    let mail = document.getElementById('mail');
    let bunch = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
if (emailValue.match(bunch)){
    mail.innerText = 'ელ-ფოსტა სწორია.';
    mail.style.color = 'green';
} else {
mail.innerText = 'ელ-ფოსტა არა სწორია.';
mail.style.color = 'red';
}


});

document.getElementById('purchase').addEventListener('click', function () {
    alert('მადლობა ბილეთის შესყიდვისათვის. Thank you for purchasing ticket.')
})
document.getElementById('purchase-1').addEventListener('click', function () {
    alert('მადლობა ბილეთის შესყიდვისათვის. Thank you for purchasing ticket.')
})
document.getElementById('purchase-2').addEventListener('click', function () {
    alert('მადლობა ბილეთის შესყიდვისათვის. Thank you for purchasing ticket.')
})
document.getElementById('purchase-3').addEventListener('click', function () {
    alert('მადლობა ბილეთის შესყიდვისათვის. Thank you for purchasing ticket.')
})
document.getElementById('purchase-4').addEventListener('click', function () {
    alert('მადლობა ბილეთის შესყიდვისათვის. Thank you for purchasing ticket.')
})
document.getElementById('purchase-5').addEventListener('click', function () {
    alert('მადლობა ბილეთის შესყიდვისათვის. Thank you for purchasing ticket.')
})
document.getElementById('purchase-6').addEventListener('click', function () {
    alert('მადლობა ბილეთის შესყიდვისათვის. Thank you for purchasing ticket.')
})
document.getElementById('purchase-7').addEventListener('click', function () {
    alert('მადლობა ბილეთის შესყიდვისათვის. Thank you for purchasing ticket.')
})
document.getElementById('purchase-8').addEventListener('click', function () {
    alert('მადლობა ბილეთის შესყიდვისათვის. Thank you for purchasing ticket.')
})
document.getElementById('purchase-9').addEventListener('click', function () {
    alert('მადლობა ბილეთის შესყიდვისათვის. Thank you for purchasing ticket.')
})
document.getElementById('purchase-10').addEventListener('click', function () {
    alert('მადლობა ბილეთის შესყიდვისათვის. Thank you for purchasing ticket.')
})
document.getElementById('purchase-11').addEventListener('click', function () {
    alert('მადლობა ბილეთის შესყიდვისათვის. Thank you for purchasing ticket.')
})
document.getElementById('purchase-12').addEventListener('click', function () {
    alert('მადლობა ბილეთის შესყიდვისათვის. Thank you for purchasing ticket.')
})
document.getElementById('purchase-13').addEventListener('click', function () {
    alert('მადლობა ბილეთის შესყიდვისათვის. Thank you for purchasing ticket.')
})
document.getElementById('purchase-14').addEventListener('click', function () {
    alert('მადლობა ბილეთის შესყიდვისათვის. Thank you for purchasing ticket.')
})
document.getElementById('purchase-15').addEventListener('click', function () {
    alert('მადლობა ბილეთის შესყიდვისათვის. Thank you for purchasing ticket.')
})
