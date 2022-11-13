$('#cat_img').click(function(e) {
    if ($('#cat_img').css("width") == "200px") {
        console.log("tanginamo");
        $('#cat_img').css("width","10%");
    } else {
        $('#cat_img').css("width","200px")
    }
})

function readMore() {
    $('#removable-aside').remove()
}