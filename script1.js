function openModal(imgElement) {
  var modal = document.getElementById("modal");
  var modalImg = document.getElementById("modalImg");
  var caption = document.getElementById("caption");

  modal.style.display = "block";
  modalImg.src = imgElement.src;
  caption.innerHTML = imgElement.alt;
}

function closeModal() {
  var modal = document.getElementById("modal");
  modal.style.display = "none";
}