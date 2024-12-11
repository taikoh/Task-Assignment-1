$(function () {
    let sizeChange = false;

    function changeFontSize() {
        sizeChange = !sizeChange;
        $("p").css("font-size", sizeChange ? "120%" : "100%")
    }

    $(".toggle-group").click(changeFontSize);
});