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