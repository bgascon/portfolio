// controls hamburger menu in mobile & tablet view

var $hamburger = $(".hamburger");
var $menu = $(".mobile-nav");
            
$hamburger.on("click", function(e) {
    $hamburger.toggleClass("is-active");
    $menu.toggleClass('active');
});