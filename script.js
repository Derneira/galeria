function previewImage() {
    var imageUrl = document.getElementById("imageUrl").value;
    var fileInput = document.getElementById("imageInput");
    var gallery = document.getElementById("gallery");
    var previewContainer = document.getElementById("previewContainer");

    previewContainer.innerHTML = "";

    if (imageUrl) {
        var img = document.createElement("img");
        img.src = imageUrl;
        img.classList.add("previewImage");
        previewContainer.appendChild(img);
    } else if (fileInput.files && fileInput.files[0]) {

        var reader = new FileReader();
        reader.onload = function (e) {
            var img = document.createElement("img");
            img.src = e.target.result;
            img.classList.add("previewImage");
            previewContainer.appendChild(img);
        };
        reader.readAsDataURL(fileInput.files[0]);
    } else {
        previewContainer.innerHTML = "Por favor, insira uma URL válida ou selecione um arquivo de imagem.";
    }
}

function addToGallery() {
    var imageUrl = document.getElementById("imageUrl").value;
    var fileInput = document.getElementById("imageInput");

    if (imageUrl || (fileInput.files && fileInput.files[0])) {
        var img = document.createElement("img");
        img.classList.add("galleryImage");

        if (imageUrl) {
            img.src = imageUrl;
        } else {
            var reader = new FileReader();
            reader.onload = function (e) {
                img.src = e.target.result;
            };
            reader.readAsDataURL(fileInput.files[0]);
        }

        var gallery = document.getElementById("gallery");
        gallery.appendChild(img);
    } else {
        alert("insira uma URL válida ou selecione um arquivo de imagem.");
    }
}
