$(function(){

});

function openCompany(evt, companyName) {
    let i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("contacts__tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("contacts__tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(companyName).style.display = "block";
    evt.currentTarget.className += " active";
};
