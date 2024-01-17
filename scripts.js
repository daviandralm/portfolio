function toggle(){
    const body = document.body;
    const icon = document.getElementById('icon');

    body.classList.toggle('darkmode');

    if (body.classList.contains('darkmode')) {
        icon.src = 'sun.png';
        icon.alt = "dark mode icon";
        
    } else {
        icon.src = "moon.png";
        icon.alt = "light mode icon";
    }

}