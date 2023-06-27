let bool = true;
const btn_ru = document.querySelectorAll(".btn_ru");
const btn_en = document.querySelectorAll(".btn_en");
const btn_kg = document.querySelectorAll(".btn_kg");
btn_ru[0].style.color = "blue";
btn_ru[0].style.boxShadow = "0px 2px 30px rgba(0, 0, 0, 0.2)";
btn_ru[1].style.color = "blue";
btn_ru[1].style.boxShadow = "0px 2px 30px rgba(0, 0, 0, 0.2)";

btn_ru[1].addEventListener("click", () => {
  btn_ru[1].style.color = "blue";
  btn_ru[1].style.boxShadow = "0px 0px 20px rgba(0, 0, 0, 0.2)";
  btn_en[1].style.color = "";
  btn_en[1].style.boxShadow = "";
  btn_kg[1].style.color = "";
  btn_kg[1].style.boxShadow = "";
});
//////////////////////////////////////////
btn_en[1].addEventListener("click", () => {
  btn_en[1].style.color = "blue";
  btn_en[1].style.boxShadow = "0px 0px 20px rgba(0, 0, 0, 0.2)";
  btn_ru[1].style.color = "";
  btn_ru[1].style.boxShadow = "";
  btn_kg[1].style.color = "";
  btn_kg[1].style.boxShadow = "";
});
//////////////////////////////////////////
btn_kg[1].addEventListener("click", () => {
  btn_kg[1].style.color = "blue";
  btn_kg[1].style.boxShadow = "0px 0px 20px rgba(0, 0, 0, 0.2)";
  btn_en[1].style.color = "";
  btn_en[1].style.boxShadow = "";
  btn_ru[1].style.color = "";
  btn_ru[1].style.boxShadow = "";
});
btn_ru[0].addEventListener("click", () => {
  btn_ru[0].style.color = "blue";
  btn_ru[0].style.boxShadow = "0px 0px 20px rgba(0, 0, 0, 0.2)";
  btn_en[0].style.color = "";
  btn_en[0].style.boxShadow = "";
  btn_kg[0].style.color = "";
  btn_kg[0].style.boxShadow = "";
});
//////////////////////////////////////////
btn_en[0].addEventListener("click", () => {
  [0];
  btn_en[0].style.color = "blue";
  btn_en[0].style.boxShadow = "0px 0px 20px rgba(0, 0, 0, 0.2)";
  btn_ru[0].style.color = "";
  btn_ru[0].style.boxShadow = "";
  btn_kg[0].style.color = "";
  btn_kg[0].style.boxShadow = "";
});
//////////////////////////////////////////
btn_kg[0].addEventListener("click", () => {
  btn_kg[0].style.color = "blue";
  btn_kg[0].style.boxShadow = "0px 0px 20px rgba(0, 0, 0, 0.2)";
  btn_en[0].style.color = "";
  btn_en[0].style.boxShadow = "";
  btn_ru[0].style.color = "";
  btn_ru[0].style.boxShadow = "";
});
const btn_html = document.querySelectorAll(".btn_html");
const btn_price = document.querySelectorAll(".btn_price");
const btn_order = document.querySelectorAll(".btn_order");
const btn_aboutUs = document.querySelectorAll(".btn_aboutUs");
if (window.location.href.includes("price.html")) {
  btn_price.forEach((btn) => (btn.style.color = "blue"));
} else if (window.location.href.includes("order.html")) {
  btn_order.forEach((btn) => (btn.style.color = "blue"));
} else if (window.location.href.includes("aboutUs.html")) {
  btn_aboutUs.forEach((btn) => (btn.style.color = "blue"));
} else if (window.location.href.includes("index.html")) {
  btn_html.forEach((btn) => (btn.style.color = "blue"));
} else {
  btn_html.forEach((btn) => (btn.style.color = "blue"));
}
////////////////////////////////////////////
const btn_nav = document.querySelector("#btn_nav");
const list_menuBtn = document.querySelector(".navMenu_main_innerBtn");
const shadow_nav = document.querySelector(".shadow_nav");

list_menuBtn.style.display = "none";
shadow_nav.style.display = "none";
btn_nav.addEventListener("click", () => {
  btn_nav.style.display = "none";
  list_menuBtn.style.display = "block";
  shadow_nav.style.display = "block";
});
shadow_nav.addEventListener("click", () => {
  btn_nav.style.display = "block";
  list_menuBtn.style.display = "none";
  shadow_nav.style.display = "none";
});
const close_menu = () => {
  btn_nav.style.display = "block";
  list_menuBtn.style.display = "none";
  shadow_nav.style.display = "none";
};
onclick(btn_html, close_menu());
onclick(btn_price, close_menu());
onclick(btn_order, close_menu());
onclick(btn_aboutUs, close_menu());
