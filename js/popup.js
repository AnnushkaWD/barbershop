var link = document.querySelector(".login-link");
var popup = document.querySelector(".modal-login");
var close = popup.querySelector(".modal-close");
var login = popup.querySelector("[name=login]");
var password = popup.querySelector("[name=password]");
var form = popup.querySelector("form");
var mapLink = document.querySelector(".contacts-button-map");
var mapPopup = document.querySelector(".modal-map");
 var mapClose = mapPopup.querySelector(".modal-close");
var isStorageSupport = true;


var storage = "";

try{
  storage = localStorage.getItem("login");
}
catch (err){
  isStorageSupport = false;
}


link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("modal-show");

  if(storage){
    login.value = storage;
    password.focus();
  }
  else{
    login.focus();
  }
  });


close.addEventListener("click", function(evt){
  evt.preventDefault();
  popup.classList.remove("modal-show");
  popup.classList.remove("modal-error");
});



form.addEventListener("submit", function(evt){
  if (!login.value || !password.value) {
    evt.preventDefault();
    console.log("dd");
    popup.classList.remove("modal-error");
    popup.classList.add("modal-error");
  }
  else {
    if (isStorageSupport){
      localStorage.setItem("login", login.value);
    }
  }
});

window.addEventListener("keydowm", function(evt){
  if(evt.keyCode === 27)  {
    if(popup.classList.container("modal-show")){
      evt.preventDefault();
      popup.classList.remove("modal-show");
        popup.classList.remove("modal-error");
  }
}
});

mapLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  console.log("блабла");
  mapPopup.classList.add("modal-show");
});

mapClose.addEventListener("click", function(evt){
  evt.preventDefault();
  mapPopup.classList.remove("modal-show");
});

window.addEventListener("keydowm", function(evt){
  if(evt.keyCode === 27)  {
    if(mapPopup.classList.container("modal-show")){
      evt.preventDefault();
      mapPopup.classList.remove("modal-show");
  }
}
});
