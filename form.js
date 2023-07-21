function validate() {
    var user = document.getElementById("username").value;
    

    if (user == "") {
        document.getElementById("error1").innerHTML = "** Please Fill The username";
   
        return false;
    }
}