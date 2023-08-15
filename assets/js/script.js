document.addEventListener("DOMContentLoaded", function(){
    var logoInstagram = document.getElementById('instagram-call');

    logoInstagram.addEventListener('click', function(){
        window.open('https://www.instagram.com/wmbarberclub/','_blank');
    })
})

document.addEventListener('DOMContentLoaded', function(){
    var buttonSchedule = document.getElementById('button-schedule');

    buttonSchedule.addEventListener('click', function(){
        window.open('https://client.tuaagenda.com/c/Wmbarberclub/agendar/funcionarios', '_blank');
    })
})

document.addEventListener("DOMContentLoaded", function() {
    var imgLogo = document.getElementById("img-logo");
    
    imgLogo.addEventListener("click", function() {
        var homeSection = document.getElementById("home");

        homeSection.scrollIntoView({
            behavior: "smooth"
        });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    var phoneCopy = this.getElementById('copy-phone-number');

    phoneCopy.addEventListener('click', function(event){
        event.preventDefault();

        var phoneNumber = '21983039936';
        var textArea = document.createElement('textarea');
        textArea.value = phoneNumber;

        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand("copy");
        document.body.removeChild(textArea);
    });
});

document.addEventListener("DOMContentLoaded", function() {
    var imgFullscreen = document.querySelectorAll(".fullscreen-img");

    imgFullscreen.forEach(function(img) {
        img.addEventListener("click", function() {
            img.requestFullscreen();
        });
    });
});