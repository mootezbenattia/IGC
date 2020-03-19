

// Loading page
var loaderPage = function() {
	$(".loader").fadeOut("slow");
};

$(function(){
    loaderPage();
});


// events
document.getElementById("More-event1").addEventListener("click",f1);
function f1(){
    document.getElementById("event_img1").style.animation="btn-event-plus1 1s";
    document.getElementById("event_img1").style.animationFillMode="forwards";
    document.getElementById("More-event1").style.display="none";
    document.getElementById("less-event1").style.display="block";
    document.getElementById("less-event1").style.marginLeft = "28%";
    document.getElementById("Event-contenu1").innerHTML = 'Par sa tradition agricole associée à une politique de prospection , d\'acclimatation et d\'amélioration desplantes, la tunisie est riche en ressources phytogénétiques.la tunisie est riche en ressources phytogénétiques.Par sa tradition agricole associée à une politique de prospection Par sa tradition agricole associée à une politique de prospection , d\'acclimatation et d\'amélioration desplantes, la tunisie est riche en ressources phytogénétiques.la tunisie est riche en ressources phytogénétiques.Par sa tradition agricole associée à une politique de prospection ,Par sa tradition agricole associée à une politique de prospection,Par sa tradition agricole associée à une politique de prospection , d\'acclimatation et d\'amélioration desplantes ';
}
document.getElementById("less-event1").addEventListener("click",f2);
function f2(){
    document.getElementById("event_img1").style.animation="btn-event-moins1 1s";
    document.getElementById("event_img1").style.animationFillMode="forwards";
    document.getElementById("More-event1").style.display="block";
    document.getElementById("More-event1").style.marginLeft = "28%";
    document.getElementById("less-event1").style.display="none";
    document.getElementById("Event-contenu1").innerHTML = 'Par sa tradition agricole associée à une politique de prospection , d\'acclimatation et d\'amélioration desplantes, la tunisie est riche en ressources phytogénétiques... ';
}