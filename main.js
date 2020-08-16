function onClickMenu(){
    document.getElementById("menu-bar").classList.toggle("change");
    document.getElementById("nav").classList.toggle("change-nav");
    document.getElementById("menu-bg").classList.toggle("change-bg");
}

// Contact us Form Submission
const scriptURL = 'https://script.google.com/macros/s/AKfycbyk42IWa_3ThA1DyPjfAQsmrZs3bDNsLj0Su98kO0vvMlHc0zk/exec';
const form = document.forms['contact-us'];

form.addEventListener('submit', e => {
fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => console.log('Success!', response))
    .catch(error => console.error('Error!', error.message));
alert("Form Submitted Succesfully. Thank You!")
})
