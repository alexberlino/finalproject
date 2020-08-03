// Navbar Toggle
const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

if ($navbarBurgers.length > 0) {

    $navbarBurgers.forEach(el => {
        el.addEventListener('click', () => {

            const target = el.dataset.target;
            const $target = document.getElementById(target);

            el.classList.toggle('is-active');
            $target.classList.toggle('is-active');
            document.body.classList.toggle("frozen");
        });
    });
}



// Mobile Menu Dropdown Activation
const panels = document.querySelectorAll('.dropdown-arrow');

function toggleOpen() {
    this.classList.toggle('activate');
    this.nextElementSibling.nextElementSibling.classList.toggle('activate');
    this.parentElement.classList.toggle('activate');
}

panels.forEach(panel => panel.addEventListener('click', toggleOpen));