function deferVideo() {

    //defer html5 video loading
  $("video source").each(function() {
    var sourceFile = $(this).attr("data-src");
    $(this).attr("src", sourceFile);
    var video = this.parentElement;
    video.load();
    // uncomment if video is not autoplay
    //video.play();
  });

}
window.onload = deferVideo();

/*Load typewriter effect on page load */
window.onload = function() {
  typeWriterAdd();
  typeWriterRemove();
};

/*For typewriter effect on page load */
var i = 0;
var j = 0;
var introText = "Hi. I'm Peter. ";
var finalText = "Let me help you improve lives through technology."
var speed = 200;

function typeWriterAdd() {
  if (i < introText.length && j === 0) {
    document.getElementById("about-me-bio-header").innerHTML += introText.charAt(i);
    i++;
    if(i === introText.length) {j++};
    console.log(j);
    setTimeout(typeWriterAdd, speed);
  }
  
    if (j === 1) {
    document.getElementById("about-me-bio-header").innerHTML = document.getElementById("about-me-bio-header").innerHTML.substring(0, document.getElementById("about-me-bio-header").innerHTML.length -1);
    i--;
    if(i === 0) {j++};
    console.log(j);
    setTimeout(typeWriterAdd, speed);
  }
  
  if (i < finalText.length && j === 2) {
    document.getElementById("about-me-bio-header").innerHTML += finalText.charAt(i);
    i++;
    if(i === finalText.length) {j++};
    console.log(j);
    setTimeout(typeWriterAdd, 400);
  }
  if(j === 3) {
        document.getElementById('hideOnload').style.opacity = 1;
  }
}


