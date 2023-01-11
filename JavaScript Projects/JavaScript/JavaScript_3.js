function displayType(maker) {
    var makerType = maker.getAttribute("data-maker-type");
    alert(makerType + " is made by the " + maker.innerHTML + " company!");
}