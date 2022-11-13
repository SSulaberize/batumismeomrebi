// Burger Bar & Drop Down Menu
let navigationlinks = document.getElementById('navigation-bar');
let burgerbar = document.getElementById('togglebutton');
let picture = document.getElementById('slider');
burgerbar.addEventListener('click', function () {
    burgerbar.classList.toggle('toggle');
    navigationlinks.classList.toggle('active');
    picture.classList.toggle('activation');
});

// Scroll to Top

let liftbutton = document.getElementById('goToTop');
liftbutton.addEventListener('click', function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
});

// Validation

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

// Slider

let group = [
    {
        id: 1,
        imagePlacement: 'images/1.jpg',

    },
    {
        id: 2,
        imagePlacement: 'images/ice-hockey-player-at-rink.jpg',

    },
    {
        id: 3,
        imagePlacement: 'images/one-hockey-player-on-ice.jpg',

    },
    {
        id: 4,
        imagePlacement: 'images/hockey-match-at-rink.jpg',
    },
];

let chevronLeft = document.getElementById('leftChevron');
let chevronRight = document.getElementById('rightChevron');
let contentSlider = document.getElementById('sliderContent');
let dotsElement = document.getElementsByClassName('dot');
let indexSlider = 0;

function divTagCreate(item) {
 let divTag = document.createElement('div');
 divTag.classList.add('slide');

 return divTag;
}

function imageTagCreate(item) {
    let imageTag = document.createElement('img');
    imageTag.setAttribute('src', item.imagePlacement);
    imageTag.classList.add('imageslide');

    return imageTag;
}

function createDots(){
    let dots = document.createElement('div');
    dots.classList.add('dot-wrapper');

   group.forEach(element => {
        let dotElement = document.createElement('div');
        dotElement.classList.add('dot');
       dotElement.setAttribute('group-id', element.id - 1);
        dots.appendChild(dotElement);

        dotElement.addEventListener('click', function(event) {
            let id = event.target.getAttribute('group-id');
            indexSlider = id;
            getSlide();
        })
    })
    return dots;
}

function getSlide() {
    contentSlider.innerHTML = ' ';
    let sliderItem = divTagCreate(group[indexSlider]);
    let tagImage = imageTagCreate(group[indexSlider]);
    let dots = createDots();

    sliderItem.appendChild(tagImage);
    contentSlider.appendChild(sliderItem);
   contentSlider.appendChild(dots);

   currentActiveDot();
}

function currentActiveDot() {
    dotsElement[indexSlider].classList.add('activeDot');
}

function leftChevronClick() {
    if (indexSlider == 0) {
        indexSlider = group.length-1;
        getSlide();
        return;
    }
    indexSlider -=1;
    getSlide();
}

function rightChevronClick(){
    if (indexSlider == group.length-1){
        indexSlider = 0;
        getSlide();
        return;
    }
    indexSlider +=1;
    getSlide();
}

chevronLeft.addEventListener('click', leftChevronClick);
chevronRight.addEventListener('click', rightChevronClick);

setInterval(() => {
    rightChevronClick();
}, 6000);

getSlide();

// Accordion

let accordion = document.querySelectorAll('.text-block');
let minus = document.getElementById('minus');
let plus = document.getElementById('plus')
for (let element of accordion) {
    element.addEventListener('click', function(){
        this.classList.toggle('active');
        minus.classList.toggle('toggle');
        plus.classList.toggle('metamorphose')

    })
}

let accordionen = document.querySelectorAll('.text-block-en');
let minusen = document.getElementById('minus');
let plusen = document.getElementById('plus')
for (let element of accordionen) {
    element.addEventListener('click', function(){
        this.classList.toggle('active');
        minus.classList.toggle('toggle');
        plus.classList.toggle('metamorphose')

    })
}

// FILTER

let resultat = document.getElementById('resultat');
let filter = document.getElementById('filter');
let itemsList = [];

function filterUsers() {
    fetch('https://jsonplaceholder.typicode.com/albums',{
        method: 'GET',
    })
    .then(response => {
return response.json();
    })
    .then(dataReceive=>{
        dataReceive.forEach(element => {
            let li = document.createElement('li');
            li.innerHTML = `${element.id} ${element.title}`;
            itemsList.push(li);
            resultat.appendChild(li);
        });
    })
    .catch(error =>{
        console.log(error);
    })
}

filterUsers();

function dataFilter(itemSearch) {
    itemsList.forEach(item => {
        if (item.innerText.toLowerCase().includes(itemSearch.toLowerCase())){
        item.classList.remove('hide');
       } else {
        item.classList.add('hide');
       }
    })
}

filter.addEventListener('keyup', function(event) {
    dataFilter(event.target.value);

})

// Cookies

document.getElementById('contactform').addEventListener('submit', function(event){
    event.preventDefault();

    let checkbox = document.getElementById('terms');
    if (checkbox.checked) {
        let valueUsername = document.getElementById('username').value;
        Cookies.set('cookiesusernameSave', valueUsername);
    } else {
        Cookies.remove('cookiesusernameSave');
    }
});

let usernameSaved = Cookies.get('cookiesusernameSave');

if (usernameSaved) {
    document.getElementById('username').value = usernameSaved;
    document.getElementById('terms').checked = true;

}

// Alert

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
