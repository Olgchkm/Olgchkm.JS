//Табы
let tab = function(){
    let tabNav = document.querySelectorAll('.item'),
        tabContent = document.querySelectorAll('.tab'),
        tabName;
    tabNav.forEach(item => {item.addEventListener('click', selectTabNav)})
    function selectTabNav(){
        tabNav.forEach(item => {
            item.classList.remove('is-active');
        });
        this.classList.add('is-active');
        tabName = this.getAttribute('data-tab-name');
        selectTabContent(tabName);
    }
    function selectTabContent(tabName){
        tabContent.forEach(item =>{
            item.classList.contains(tabName) ? item.classList.add('is-active') : item.classList.remove('is-active');
        })
    }
}
tab();
//Аккордеон
const accordion = () => {
    const btns = document.querySelectorAll(".ac-head");
    const blocks = document.querySelectorAll(".ac-block");
    blocks.forEach((block) => {
		block.classList.add("animate__animated", "animate__fadeIn");
    });
    btns.forEach((btn) => {
		btn.addEventListener("click", function () {
            if (!this.classList.contains("active")) {
                btns.forEach((btn) => {
                    btn.classList.remove("active", "active-style");
                });
                this.classList.add("active", "active-style");
	        } else {
                btns.forEach((btn) => {
	                btn.classList.remove("active", "active-style");
                });
	    	}
        });
	});
}
accordion();
//Модальное окно
const modal = document.querySelector(".modal");
const btn = document.querySelector(".readmore");
const closeBtn = document.querySelector(".modal-close");

btn.addEventListener("click", function () {
	modal.classList.add("modal-active");
    closeBtn.addEventListener("click", closeModal);
    modal.addEventListener("click", hideModal);
    function closeModal() {
        modal.classList.remove("modal-active");
        closeBtn.removeEventListener("click", closeModal);
        modal.removeEventListener("click", hideModal);
    }
    //скрытие модального окна не по кнопке
    function hideModal(event) {
        if (event.target === modal){
            closeModal();
        }
    }
});
//Фильтрация
const nav = document.querySelector('.filtr-nav'),
    content = document.querySelectorAll('.cont'),
    navLis = document.querySelectorAll('.li')

function filter() {
    nav.addEventListener('click', event =>{
        const targetId = event.target.dataset.id
        const target = event.target
        
        if (target.classList.contains('id')){
            navLis.forEach(navLi => navLi.classList.remove('active'))
            target.classList.add('active')
        }

        switch(targetId){
            case 'all':
                getItems('cont')
                break
            case 'get':
                getItems(targetId)
                break
            case 'jump':
                getItems(targetId)
                break
            case 'legal':
                getItems(targetId)
                break    
        }
    })
}
filter()
function getItems(className){
    content.forEach(item =>{
        if (item.classList.contains(className)){
            item.style.display = 'block'
        } else{
            item.style.display = 'none'
        }
    })
}
//Слайдер
let slideIndex = 1,
    slides = document.querySelectorAll('.sliderNew-item'),
    prev = document.querySelector('.prev'),
    next = document.querySelector('.next'),
    dotsWrap = document.querySelector('.sliderNew-dots'),
    dots = document.querySelectorAll('.dot');

    showSlides(slideIndex);
// Принимала аргумент номер слайда, который нужно показать
function showSlides (n) {
// дополнительно делаем проверку чтобы индекс не вышел за пределы
    if (n > slides.length) {
    // Возвращаемся к первому слайду
        slideIndex = 1;
    }
    if (n < 1) {
    // Возвращаемся к последнему слайду
        slideIndex = slides.length;
    }

    slides.forEach((item) => item.style.display = 'none');
// for (let i = 0; i < slides.length; i++) {
//     slides[i].style.display = 'none';
// }
    dots.forEach((item) => item.classList.remove('dot-active'));

    slides[slideIndex - 1].style.display = 'block';
    dots[slideIndex - 1].classList.add('dot-active');

    }
function plusSlides(n) {
    showSlides(slideIndex += n); 
}
function currentSlide(n) {
    showSlides(slideIndex = n);
}

prev.addEventListener('click', function() {
    plusSlides(-1);
});

next.addEventListener('click', function() {
    plusSlides(1);
});
//Создаем событие клика на родителя, используя делегирование событий
dotsWrap.addEventListener('click', function(event) {
// перебираем все dot и узнаем на какую именно кликнули
    for (let i = 0; i < dots.length + 1; i++) {
    // проверяем элемент на соответствие и узнаем номер точки
        if (event.target.classList.contains('dot') && event.target == dots[i-1]) {
            currentSlide(i);
        }
    }
});
//Бургер-меню
document.getElementById("burger").addEventListener('click', function(){
    document.querySelector("header").classList.toggle("open")
})

		




   
