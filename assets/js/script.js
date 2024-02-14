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
//document.querySelector('#sidebar .toggle-sidebar').addEventListener('click', function() {
        //document.querySelector('#sidebar').classList.toggle('open')

//})
// from another coder

// Function to close the sidebar
function closeSidebar() {
        document.querySelector('#sidebar').classList.remove('open');
}

  // Event listener for document click
document.addEventListener('click', function(event) {
        const sidebar = document.querySelector('#sidebar');
        const toggleButton = document.querySelector('#sidebar .toggle-sidebar');

    // Check if the clicked element is outside the sidebar and not the toggle button
        if (!sidebar.contains(event.target) && event.target !== toggleButton) {
        closeSidebar();
        }
});

  // Event listener for toggle button click
document.querySelector('#sidebar .toggle-sidebar').addEventListener('click', function(event) {
    // Prevent the click event from propagating to the document
        event.stopPropagation();
        document.querySelector('#sidebar').classList.toggle('open');
});

  // Event listener for page change (e.g., using navigation links)
window.addEventListener('hashchange', function() {
        closeSidebar();
});





function toggleMode() {
    let theme = document.querySelector('html').getAttribute('theme');

    if(theme == "dark") {
        theme = "light";
    } else {
        theme = "dark";
    }

    document.querySelector('html').setAttribute("theme", theme)
}