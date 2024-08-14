// Section for updating active section
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
            });
            
            document.querySelector(`header nav a[href="#${id}"]`).classList.add('active');
        }
    });
};

let darkMode = localStorage.getItem('dark-mode');
const themeSwitch = document.getElementById('theme-switch');

const enableDarkmode = () => {
  document.body.classList.add('dark-mode');
  localStorage.setItem('dark-mode', 'active');
};

const disableDarkmode = () => {
  document.body.classList.remove('dark-mode');
  localStorage.setItem('dark-mode', null);
};

if(darkMode === "active") enableDarkmode();

themeSwitch.addEventListener("click", () => {
  darkMode = localStorage.getItem('dark-mode')
  darkMode !== "active" ? enableDarkmode() : disableDarkmode();
});
