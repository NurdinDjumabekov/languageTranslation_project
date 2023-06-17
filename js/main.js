let bool = true;
const btn_ru = document.querySelector("#btn_ru");
const btn_en = document.querySelector("#btn_en");
btn_ru.style.color = "red";
btn_ru.style.boxShadow = "0px 2px 30px rgba(0, 0, 0, 0.1)";

btn_ru.addEventListener("click", () => {
  btn_ru.style.color = "red";
  btn_ru.style.boxShadow = "0px 0px 20px rgba(0, 0, 0, 0.1)";
  btn_en.style.color = "";
  btn_en.style.boxShadow = "";
});
//////////////////////////////////////////
btn_en.addEventListener("click", () => {
  btn_en.style.color = "red";
  btn_en.style.boxShadow = "0px 0px 20px rgba(0, 0, 0, 0.1)";
  btn_ru.style.color = "";
  btn_ru.style.boxShadow = "";
});
const btn_html = document.querySelector(".btn_html");
const btn_price = document.querySelector(".btn_price");
const btn_order = document.querySelector(".btn_order");
const btn_aboutUs = document.querySelector(".btn_aboutUs");
if (window.location.href === "http://127.0.0.1:5500/price.html") {
  btn_price.style.color = "red";
} else if (window.location.href === "http://127.0.0.1:5500/order.html") {
  btn_order.style.color = "red";
} else if (window.location.href === "http://127.0.0.1:5500/abourUs.html") {
  btn_aboutUs.style.color = "red";
} else if (window.location.href === "http://127.0.0.1:5500/index.html") {
  btn_html.style.color = "red";
} else {
  btn_html.style.color = "red";
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
