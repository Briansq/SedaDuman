let navLinks = document.querySelectorAll('a.inner-link');
//console.log(navLinks);

navLinks.forEach((item) => {
    item.addEventListener('click', function(){
        console.log(item)
        document.querySelector('nav ul li a.active').classList.remove('active');
        document.querySelector(`nav ul li a[href='${item.getAttribute('href')}']`).classList.add('active');
        document.querySelector('main > section.active').classList.remove('active');
        document.querySelector(`main > section${item.getAttribute('href')}`).classList.add('active');
        //console.log(`main > section${item.getAttribute('href')}`)
    })
})


let contactFormItems = document.querySelectorAll('#contact .form input, #contact .form textarea');

contactFormItems.forEach((item) => {
    item.addEventListener('focus', function() {
        //console.log("focus", item)
        item.parentElement.classList.add('focus')
    })

    item.addEventListener('blur', function() {
        if(!item.value) {
            item.parentElement.classList.remove('focus')
        }
        
    })
})


//sidebar-toggle
document.querySelector('#sidebar .toggle-sidebar').addEventListener('click', function() {
        document.querySelector('#sidebar').classList.toggle('open')
})


function toggleMode() {
    let theme = document.querySelector('html').getAttribute('theme');

    if(theme == "dark") {
        theme = "light";
    } else {
        theme = "dark";
    }

    document.querySelector('html').setAttribute("theme", theme)
}