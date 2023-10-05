const darkMode = document.getElementById('darkMode')
const wrapper = document.getElementById('wrapper')

//toggle to dark mode with css class prepared

const toggleMode =(e) => {
    e.preventDefault();
    wrapper.classList.toggle('dark-mode');    
}

darkMode.addEventListener('click', toggleMode)