function openFileInput() {
  document.getElementById("file").click();
}
function readFile(e) {
  var files;
  if (e.target.files) {
    files = e.target.files;
  } else {
    files = e.dataTransfer.files;
  }
  if (files.length == 0) {
    alert("What you dropped is not a file.");
    return;
  }
  var file = files[0];
  document.getElementById("file").textContent = `${file.name}| ${file.type}`;
  const reader = new FileReader();
  reader.onload = function (e) {
    document.getElementById("file-input").value = e.target.result;
  };
  reader.readAsDataURL(file);
}
function getTheFile(e) {
  e.preventDefault();
  this.readFile(e);
}
function dragOver(e) {
  e.currentTarget.classList.add("blue-bg");
  e.currentTarget.style.color = "white";
  e.stopPropagation();
  e.preventDefault();
}
function dragLeave(e) {
  e.currentTarget.classList.remove("blue-bg");
}
function showFile(e) {
  const [file] = e.currentTarget.files;
  if (file) {
    const uploadImg = document.getElementById("upload-img");
    uploadImg.style.width = "80px";
    uploadImg.style.height = "80px";
    uploadImg.src = URL.createObjectURL(file);
    uploadImg.style.borderRadius = "12px";
    this.coverPhoto = file;
  }
}
