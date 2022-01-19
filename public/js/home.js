function toggleUserDetails() {
    let userDetails = document.querySelector(".user-info .details");
    let arrow = document.querySelector(".user-info .img-name i");
    let size = document.querySelector(".user-info")
    if (userDetails.style.display != "none") {
      userDetails.style.display = "none";
      arrow.className = "fas fa-angle-down";
      size.style.height="60px"
    } else {
      userDetails.style.display = "flex";
      arrow.className = "fas fa-angle-up";
      size.style.height="120px"
    }
}




$(window).scroll(function(){
  let position = $(this).scrollTop();
  if(position >= 180 ){
      $('.award-text').addClass('fromRight')
      $('.award-img').addClass('fromLeft')
  }else{
      $('.award-text').removeClass('fromRight')
      $('.award-img').removeClass('fromLeft')
  }
})