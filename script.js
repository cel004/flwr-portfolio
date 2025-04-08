var vid = document.getElementById('scrollVideo');
vid.pause();
 
window.onscroll = function(){
    vid.pause();
};

setInterval(function(){
    vid.currentTime = window.pageYOffset/400;
}, 40);