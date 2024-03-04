var typed= new Typed(".text", {
    strings: ["Graphic Designer","YouTuber","Video Editor","Content Creator","Photographer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop:true
});


function loadContent(page, targetId) {
    var xhttp = new XMLHttpRequest();
    
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4) {
            if (this.status == 200) {
                document.getElementById(targetId).innerHTML = this.responseText;
            } else {
                console.error("Failed to load content:", this.status, this.statusText);
            }
        }
    };
    
    xhttp.open("GET", page, true);
    xhttp.send();
}

function animateRadialBars() {
    var radialBars = document.querySelectorAll('.radial-bar');

    radialBars.forEach(function(radialBar) {
        var percentage = radialBar.getAttribute('data-percentage');
        var progressBar = radialBar.querySelector('.progress-bar');

        
        var color = calculateColor(percentage);

        
        progressBar.style.stroke = 'cyan';
        var offset = 502 - (percentage * 502) / 100;
        progressBar.style.strokeDashoffset = offset;
    });
}


$(".images2 img").click(function () {
    $(this).addClass("zoom");
  });
  
  $(".images2 img").mouseleave(function () {
    $(this).removeClass("zoom");
  });
  
