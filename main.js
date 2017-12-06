var slideshowState=0;

function preload() {
    $('.XC_16').hide();
    $('.S_17').hide();
    $('.Track_18').hide();
    $('.navTable').css('width', '100%');
}

function main() {
    slideshow();
}

preload();
$(document).ready(main);
$(document).mousemove(trackNavFade());
$(document).mousemove(xcNavFade());
$(document).mousemove(navFade());




function trackNavFade() {
    $('.navTrack').mouseenter(function() {
        $('.navTable').css('width', '200%');
        $('.Track_18').fadeIn(500);
        $('.S_17').fadeIn(500);
        $('.S_17').attr('href','track/2017_Season.html');
        $('.XC_16').fadeOut(500);
    });
    
    $('.S_17, .Track_18').mouseleave(function() {
        $('.S_17, .Track_18').mouseleave(function() {
            setTimeout(function() {
                $('.Track_18').fadeOut(500);
                $('.S_17').fadeOut(500, function() {
                    $('.navTable').css('width', '100%');
                    //return size to normal
                });
            },500);
        });
    });
}

function xcNavFade() {
    $('.navXC').mouseenter(function() {
        $('.navTable').css('width', '200%');
        $('.XC_16').fadeIn(500);
        $('.S_17').fadeIn(500);
        $('.S_17').attr('href','xc/2017_Season.html');
        $('.S_17').href('xc/2017.html');
        $('.Track_18').fadeOut(500);
    });
    
    $('.S_17, .XC_16').mouseleave(function() {
        $('.S_17, .XC_16').mouseleave(function() {
            setTimeout(function() {
                $('.XC_16').fadeOut(500);
                $('.S_17').fadeOut(500, function() {
                    $('.navTable').css('width', '100%');
                    //return size to normal
                });
            },500);
        });
    });
}

function navFade() {
    $('.navAbout, .navHome').mouseenter(function() {
        $('.XC_16').fadeOut(500);
        $('.Track_18').fadeOut(500);
        $('.S_17').fadeOut(500, function() {
            $('.navTable').css('width', '100%');
        });
    });
}

function slideshow() {
    var mainColor= '#d9d9d9';
    var tempColor= '#bfbfbf';
    
    setInterval(function() {
        if(slideshowState===0) {
            console.log(0);
                slideshowState=1;
                $('.slide1').css('background-color', tempColor);
                $('.slide2').css('background-color', mainColor);
                $('.slide3').css('background-color', mainColor);
                $('.slideshow').fadeOut(500, function() {
                    $('.slideshow').attr('src','/frontpage1.jpg');
                });
                $('.slideshow').fadeIn(500);
        }
        else if(slideshowState===1) {
            console.log(1);
                slideshowState=2;
                $('.slide1').css('background-color', mainColor);
                $('.slide2').css('background-color', tempColor);
                $('.slide3').css('background-color', mainColor);
                $('.slideshow').fadeOut(500, function() {
                    $('.slideshow').attr('src','/frontpage2.jpg');
                });
                $('.slideshow').fadeIn(500);
        }
        else if(slideshowState===2) {
            console.log(2);
                slideshowState=0;
                $('.slide1').css('background-color', mainColor);
                $('.slide2').css('background-color', mainColor);
                $('.slide3').css('background-color', tempColor);
                $('.slideshow').fadeOut(500, function() {
                    $('.slideshow').attr('src','/frontpage3.jpg');
                });
                $('.slideshow').fadeIn(500);
        }
    },5000);
}
