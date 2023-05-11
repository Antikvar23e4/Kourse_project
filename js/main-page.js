$(document).ready(function() {
    $('.header_burger').click(function(event){
        $('.header_burger, .header_menu').toggleClass('active');
        $('body').toggleClass('lock');
    });
});






let slideImages = document.querySelectorAll('.s1');
    let next = document.querySelector('.next');
    let prev = document.querySelector('.prev');
    let counter = 0;
    next.addEventListener('click', slideNext)
    function slideNext() {
        slideImages[counter].style.animation = 'next1 0.5s ease-in forwards';
        if (counter >= slideImages.length - 1) {
            counter = 0;
        }
        else {
            counter++;
        }
        slideImages[counter].style.animation = 'next2 0.5s ease-in forwards';
    }

    prev.addEventListener('click', slidePrev)
    function slidePrev() {
        slideImages[counter].style.animation = 'prev1 0.5s ease-in forwards';
        if (counter == 0) {
            counter = slideImages.length - 1;
        }
        else {
            counter--;
        }
        slideImages[counter].style.animation = 'prev2 0.5s ease-in forwards';
    }
    function autoSliding() {
        deleteInterval  = setInterval(timer, 3000);
        function timer() {
            slideNext();
        }
    }
    autoSliding();
    const container = document.querySelector('.slide-container');
    container.addEventListener('mouseover', function() {
        clearInterval(deleteInterval);
    })
    container.addEventListener('mouseout', autoSliding);


    let slideImagess = document.querySelectorAll('.s2');
    let nextt = document.querySelector('.nextt');
    let prevv = document.querySelector('.prevv');
    let counterr = 0;
    nextt.addEventListener('click', slideNext2)
    function slideNext2() {
        slideImagess[counterr].style.animation = 'nextt1 0.5s ease-in forwards';
        if (counterr >= slideImagess.length - 1) {
            counterr = 0;
        }
        else {
            counterr++;
        }
        slideImagess[counterr].style.animation = 'nextt2 0.5s ease-in forwards';
    }

    prevv.addEventListener('click', slidePrev2)
    function slidePrev2() {
        slideImagess[counterr].style.animation = 'prevv1 0.5s ease-in forwards';
        if (counterr == 0) {
            counterr = slideImagess.length - 1;
        }
        else {
            counterr--;
        }
        slideImagess[counterr].style.animation = 'prevv2 0.5s ease-in forwards';
    }
    function autoSliding2() {
        deleteInterval2  = setInterval(timer, 3000);
        function timer() {
            slideNext2();
        }
    }
    autoSliding2();
    const containerr = document.querySelector('.slide-containerr');
    containerr.addEventListener('mouseover', function() {
        clearInterval(deleteInterval2);
    })
    containerr.addEventListener('mouseout', autoSliding2);

    //форма
    var nameError = document.getElementById('name-error');
var phoneError = document.getElementById('phone-error');
var emailError = document.getElementById('email-error');
var mestaError = document.getElementById('mesta-error');
var timeError = document.getElementById('time-error');
var dataError = document.getElementById('data-error');
var submitError = document.getElementById('submit-error');

function validateName() {
    var name = document.getElementById('fullName').value;

    if (name.length == 0) {
        nameError.innerHTML = 'Заполните поле ФИО';
        return false;
    }
    if (!name.match(/^[А-Яа-я]*\s{1}[А-Яа-я]*\s{1}[А-Яа-я]*$/)) {
        nameError.innerHTML = 'Введите полное ФИО';
        return false;
    }
    nameError.innerHTML = '';
    return true;
}

function validatePhone() {
    var phone = document.getElementById('phoneNumber').value;
    if (phone.length == 0) {
        phoneError.innerHTML = 'Заполните поле телефона';
        return false;
    }
    if (phone.length !== 11) {
        phoneError.innerHTML = 'Телефон должен состоять из 11 цифр';
        return false;
    }
    if (!phone.match(/^[0-9]{11}$/)) {
        phoneError.innerHTML = 'Только цифры пожалуйста';
        return false;
    }
    phoneError.innerHTML = '';
    return true;
}

function validateEmail() {
    var email = document.getElementById('email').value;

    if (email.length == 0) {
        emailError.innerHTML = 'Заполните поле почты';
        return false;
    }
    if (!email.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
        emailError.innerHTML = 'Почта недействительна';
        return false;
    }
   emailError.innerHTML = '';
    return true;
}

function validateMesta() {
    var mesta = document.getElementById('mesta').value;

    if (mesta.length == 0) {
        mestaError.innerHTML = 'Заполните поле мест';
        return false;
    }
    if (!mesta.match(/^[0-9]{1}$/)) {
        mestaError.innerHTML = 'Слишком большое колличество мест';
        return false;
    }
   mestaError.innerHTML = '';
    return true;
}


function validateTime() {
    var time = document.getElementById('time').value;

    if (time.length == 0) {
        timeError.innerHTML = 'Заполните поле времени';
        return false;
    }

    timeError.innerHTML = '';
    return true;
}

function validateData() {
    var data = document.getElementById('data').value;

    if (data.length == 0) {
        dataError.innerHTML = 'Заполните поле даты';
        return false;
    }

   dataError.innerHTML = '';
    return true;
}




function validateForm(){
    if(!validateName() || !validatePhone() || !validateEmail() || !validateMesta() || !validateTime() || !validateData()){
        submitError.style.display = 'block';
        submitError.innerHTML = 'Заполните все поля';
        setTimeout(function(){submitError.style.display = 'none';},3000);
        return false;
    }
}

