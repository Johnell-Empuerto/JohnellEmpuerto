document.addEventListener('mousemove', function (e) {
    const cursor = document.querySelector('.cursor');
    const shadow = document.querySelector('.shadow');

    // Calculate the offset for cursor and shadow
    const cursorOffset = 10; // Half of the cursor size (20px / 2)
    const shadowOffset = 15; // Half of the shadow size (30px / 2)

    // Position the cursor and shadow exactly at the mouse position
    cursor.style.left = `${e.clientX - cursorOffset}px`;
    cursor.style.top = `${e.clientY - cursorOffset}px`;

    setTimeout(() => {
        shadow.style.left = `${e.clientX - shadowOffset}px`;
        shadow.style.top = `${e.clientY - shadowOffset}px`;
    }, 50); // Adjust the delay as needed
});

AOS.init();
document.querySelector('.hamburger').addEventListener('click', function() {
    this.classList.toggle('is-active');
    document.querySelector('.navbar-menu').classList.toggle('active');
    document.querySelector('.blur-bg').classList.toggle('active');
    document.body.classList.toggle('tilt');
});

document.querySelector('.close-btn').addEventListener('click', function() {
    document.querySelector('.hamburger').classList.remove('is-active');
    document.querySelector('.navbar-menu').classList.remove('active');
    document.querySelector('.blur-bg').classList.remove('active');
    document.body.classList.remove('tilt');
});

document.querySelector('.blur-bg').addEventListener('click', function() {
    document.querySelector('.hamburger').classList.remove('is-active');
    document.querySelector('.navbar-menu').classList.remove('active');
    document.querySelector('.blur-bg').classList.remove('active');
    document.body.classList.remove('tilt');
});

// CSS for showing the menu when active
const css = `
    .navbar-menu.active {
        left: 0;
    }
`;
const style = document.createElement('style');
style.appendChild(document.createTextNode(css));
document.head.appendChild(style);


function adjustAOSDelays() {
    document.querySelectorAll('[data-aos-delay]').forEach(function(el) {
        if (window.innerWidth <= 1000) {
            // Adjust the delay for screens 1000px or less
            el.setAttribute('data-aos-delay', '200');
        } else {
            // Restore the original delay for screens larger than 1000px
            el.setAttribute('data-aos-delay', el.dataset.originalDelay);
        }
    });
}

function storeOriginalDelays() {
    document.querySelectorAll('[data-aos-delay]').forEach(function(el) {
        el.dataset.originalDelay = el.getAttribute('data-aos-delay');
    });
}

document.addEventListener('DOMContentLoaded', function() {
    storeOriginalDelays();
    adjustAOSDelays();
});
window.addEventListener('resize', adjustAOSDelays);


function adjustAOSDelays() {
    document.querySelectorAll('[data-aos-delay]').forEach(function(el) {
        if (window.innerWidth <= 1000) {
            el.setAttribute('data-aos-delay', '200');
        } else {
            el.setAttribute('data-aos-delay', el.dataset.originalDelay);
        }
    });
}

function storeOriginalDelays() {
    document.querySelectorAll('[data-aos-delay]').forEach(function(el) {
        el.dataset.originalDelay = el.getAttribute('data-aos-delay');
    });
}



// Get the button
let mybutton = document.getElementById("backToTopBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
mybutton.onclick = function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}


// remove animation

// function removeAOSAttributes() {
//     if (window.innerWidth <= 1000) {
//         document.querySelectorAll('[data-aos]').forEach(function(el) {
//             el.removeAttribute('data-aos');
//             el.removeAttribute('data-aos-delay');
//             el.removeAttribute('data-aos-once');
//         });
//     }
// }

// document.addEventListener('DOMContentLoaded', removeAOSAttributes);
// window.addEventListener('resize', removeAOSAttributes);
