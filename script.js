async function checkImagesSize() {
    let imageInput = document.getElementById('imageInput');
    let image = imageInput.files[0];//get the selected image file

    //  == a eshte ashtu
    //! a nuk eshte ashtu


    //check if an image is selected
    if (!image) {
        showMessage("Please select an image");
        return;
    };

    //check the size of the image
    if (image.size > 5 * 1024 * 1024) {//check if the size is larger
        showMessage("The size is larger than 5MB");
    }
    else {
        showMessage("Upload successfully completed");
    };

};
function showMessage(x) {
    document.getElementById("message").textContent = x;
};