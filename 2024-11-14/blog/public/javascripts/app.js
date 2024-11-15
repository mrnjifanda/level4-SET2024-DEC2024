const button = document.getElementById('button');
if (button) {

    button.addEventListener('click', e => {

        e.preventDefault();

        alert('Hello, world!');
    }); 
}
