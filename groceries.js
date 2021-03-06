//courtesy of w3schools, from: http://www.w3schools.com/js/js_cookies.asp
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
//courtesy of w3schools, from: http://www.w3schools.com/js/js_cookies.asp
function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function addItem()  {

    var input = document.getElementById("newItem").value;
    var list = document.getElementById("listDisplay");
    var item = document.createElement("li");
    var btnClose = document.createElement("button");
    var iconClose = document.createElement("span");
    btnClose.classList.add("btn");
    btnClose.classList.add("btn-danger");
    btnClose.classList.add("btn-xs");
    btnClose.classList.add("glyphicon");
    btnClose.classList.add("glyphicon-remove");
    var itemName = document.createTextNode(input);
    btnClose.addEventListener("click", removeParentListItem);

    item.appendChild(itemName);
    list.appendChild(item);
    btnClose.appendChild(iconClose);
    item.appendChild(btnClose);
    document.getElementById("newItem").value = "";

}

function removeParentListItem(){
    var mom = this.parentNode;
    var grandma = mom.parentNode;

    grandma.removeChild(mom);
}
