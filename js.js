function myFunction() {
    var txt;
    if (confirm("Press a button!")) {
        txt = "Your submitted successfully.!";
    } else {
        txt = "Please fill correct information.!";
    }
    document.getElementById("demo").innerHTML = txt;
}