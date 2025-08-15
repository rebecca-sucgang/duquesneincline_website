$("#readLess").click(function(){ 
    $("#longIntro").hide(); 
    $("#readLess").hide();  
    $("#readMore").show();  

  });
  
  $("#readMore").click(function(){
    $("#longIntro").show(); 
    $("#readLess").show(); 
    $("#readMore").hide(); 
  });

$("#readLess2").click(function(){ 
    $("#longIntro2").hide(); 
    $("#readLess2").hide();  
    $("#readMore2").show();  

  });
  
  $("#readMore2").click(function(){
    $("#longIntro2").show(); 
    $("#readLess2").show(); 
    $("#readMore2").hide(); 
  });

$("#readLess3").click(function(){ 
    $("#longIntro3").hide(); 
    $("#readLess3").hide();  
    $("#readMore3").show();  

  });
  
  $("#readMore3").click(function(){
    $("#longIntro3").show(); 
    $("#readLess3").show(); 
    $("#readMore3").hide(); 
  });

$("#readLess4").click(function(){ 
    $("#longIntro4").hide(); 
    $("#readLess4").hide();  
    $("#readMore4").show();   

  });
  
  $("#readMore4").click(function(){
    $("#longIntro4").show(); 
    $("#readLess4").show(); 
    $("#readMore4").hide(); 
  });

$("#readLess5").click(function(){ 
    $("#longIntro5").hide(); 
    $("#readLess5").hide();  
    $("#readMore5").show();  

  });
  
  $("#readMore5").click(function(){
    $("#longIntro5").show(); 
    $("#readLess5").show(); 
    $("#readMore5").hide(); 
  });

$("#readLess6").click(function(){ 
    $("#longIntro6").hide(); 
    $("#readLess6").hide();  
    $("#readMore6").show();  

  });
  
  $("#readMore6").click(function(){
    $("#longIntro6").show(); 
    $("#readLess6").show(); 
    $("#readMore6").hide(); 
  });

// I followed this tutorial: https://leadwebpraxis.com/integrate-apis-into-your-website/
document.addEventListener('DOMContentLoaded', function() {
    fetch('https://api.openweathermap.org/data/2.5/weather?q=Pittsburgh&appid=0b00b382829d9fa84ea3adb2f417e6e0')
        .then(response => response.json())
        .then(data => {
            let temp = ((data.main.temp - 273.15) * 9/5 + 32).toFixed(1);
            let desc = data.weather[0].description;
            document.getElementById('weather-box').innerHTML=`Current Weather in Pittsburgh: ${temp}°F, ${desc}`;
        })
        .catch(error => console.log('Error fetching weather data:', error));
});

/* Slideshow tutotial from W3 Schools */
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}


function validate(event) {
    var userName = document.getElementById("UserName");
    var userEmail = document.getElementById("UserEmail");
    var userPhone = document.getElementById("UserPhone");
    var zipCode = document.getElementById("zipcode");
    var msg = document.getElementById("ValidateMsg");

    msg.innerHTML = "";
    
    if (!userName.checkValidity() || !userEmail.checkValidity()) {
        msg.innerHTML = "Please try again and fill out the mailing list form correctly!";
        event.preventDefault(); 
        return;
    }
    
    if (userPhone.value !== "" && !/^\d{10}$/.test(userPhone.value)) {
        msg.innerHTML += "Please enter a valid 10-digit phone number (numbers only).<br>";
        event.preventDefault(); 
    }

    if (zipCode.value !== "" && !/^\d{5}$/.test(zipCode.value)) {
        msg.innerHTML += "Please enter a valid 5-digit zip code (numbers only).<br>";
        event.preventDefault(); 
    }
}