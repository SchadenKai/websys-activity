$('#cat_img').click(function(e) {
    if ($('#cat_img').css("width") == "200px") {
        $('#cat_img').css("width","10%");
    } else {
        $('#cat_img').css("width","200px")
    }
})

function readMore() {
    $('#removable-aside').remove()
}