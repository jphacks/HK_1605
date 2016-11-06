$(document).on('pageinit', '#detail_page', function(){
    document.getElementById("detail_img").src = imageurl;
    document.getElementById("course_detail").innerHTML = course;
});


function goto_buy(){
    imageurl = document.getElementById("detail_img").src;
    course = document.getElementById("course_detail").innerHTML;
    myNavigator.pushPage('buy_detail.html');
}
