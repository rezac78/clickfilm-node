function toggleUserDetails() {
    let userDetails = document.querySelector(".user-info .details");
    let arrow = document.querySelector(".user-info .img-name i");
    let size = document.querySelector(".user-info")
    if (userDetails.style.display != "contents") {
      userDetails.style.display = "contents";
      arrow.className = "fas fa-angle-down";
      size.style.height="100%"
    } else {
      userDetails.style.display = "none";
      arrow.className = "fas fa-angle-up";
      size.style.height="100%"
    }
}

function toggleUserDetails2() {
  let userDetails = document.querySelector(".user-info2 .details2");
  let arrow = document.querySelector(".user-info2 .img-name2 i");
  let size = document.querySelector(".user-info2")
  if (userDetails.style.display != "contents") {
    userDetails.style.display = "contents";
    arrow.className = "fas fa-angle-down";
    size.style.height="100%"
  } else {
    userDetails.style.display = "none";
    arrow.className = "fas fa-angle-up";
    size.style.height="100%"
  }
}

function toggleUserDetails3() {
  let userDetails = document.querySelector(".user-info3 .details3");
  let arrow = document.querySelector(".user-info3 .img-name3 i");
  let size = document.querySelector(".user-info3")
  if (userDetails.style.display != "contents") {
    userDetails.style.display = "contents";
    arrow.className = "fas fa-angle-down";
    size.style.height="100%"
  } else {
    userDetails.style.display = "none";
    arrow.className = "fas fa-angle-up";
    size.style.height="100%"
  }
}

