import "../css/componentTitle.css";
import logo from "../assets/img/webpack-logo.png";

export const hello = (name) => {
  console.log("Creating h1 ...");
  const $h1 = document.createElement("h1");
  $h1.innerHTML = `Hi my name is ${name} !!!`;
  $h1.id = "title-name";
  document.body.append($h1);

  // img
  const $img = document.createElement("img");
  $img.src = logo;
  document.body.append($img);
};
