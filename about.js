//navbar
window.onscroll = function(){
    navBar()
};
var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop

function navBar(){
    if(window.pageYOffset>= sticky)
    {
        navbar.classList.add("sticky");
    }
    else{
        navbar.classList.remove("sticky");
    }
}

//nav bar link
var tablinks = document.getElementsByClassName("about-link");
var tabcontents = document.getElementsByClassName("tab-contents");
function opentab(tabname) {
    for (tablink of tablinks) {
        tablink.classList.remove("active-link");
    }
    for (tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}


//menubar
var sidemenu = document.getElementById("sidemenu");
function openMenu() {
    sidemenu.style.right = "0";
}
function closeMenu(){
    sidemenu.style.right = "-200px"
}

//contact

const scriptURL = 'https://script.google.com/macros/s/AKfycbykihlPkMsHTqhkBTSpoVs5ASCGM0aDhL2BvPIAYTtZ4VqYEA7LOiFTrLXMlPSevnJ6/exec'
const form = document.forms['submit-to-google-sheet']

//submit msg
const msg = document.getElementById("msg");

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        msg.innerHTML = "Messege Sent Successfully";
        setTimeout(function(){
            msg.innerHTML = "";
        },3000)
        form.reset();
      })
      .catch(error => console.error('Error!', error.message))
  }
);


