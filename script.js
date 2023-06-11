function toggleMode() {
  const html = document.documentElement
  // if (html.classList.contains("light")) {
  //   html.classList.remove("light")
  // } else {
  //   html.classList.add("light")
  // }

  // simplifying the code
  html.classList.toggle("light")

  // Pegar a tag img
  const img = document.querySelector("#profile img")
  // substituir a imagem
  if (html.classList.contains("light")) {
    // Se tiver light mode, adicionat a imagem ligh;
    img.setAttribute("src", "./assets/avatar-light.png")
  } else {
    // Se tiver sem light mode, manter a imagem normal
    img.setAttribute("src", "assets/Avatar.png")
  }
}
