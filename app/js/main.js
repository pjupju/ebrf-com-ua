
var acc = document.getElementsByClassName("conditions__accordion");
var faq = document.getElementsByClassName("faq__accordion-question");
var i;

for (i = 0; i < acc.length; i++) {
    console.log(acc[i].classList.length);
    if(acc[i].classList.length == 1) {
        acc[0].classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    } 
    // console.log(acc[i].classList.includes("active"));
    acc[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
}
for (i = 0; i < faq.length; i++) {
    faq[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
}

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
if (window.matchMedia("(max-width: 768px)").matches) {
    $('.contacts__tablinks:eq(2)').addClass(' active');
  } else if (window.matchMedia("(max-width: 564px)").matches) {
    $('.contacts__tablinks:eq(2)').addClass(' active');
  }
