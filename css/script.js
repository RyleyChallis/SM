function openNav() {
  document.getElementById("mobile-sidebar").style.width = "60%";
}

function closeNav() {
  document.getElementById("mobile-sidebar").style.width = "0";
}

window.addEventListener('click', function(event) {
    const sidebar = document.getElementById("mobile-sidebar");
    const menuBtn = document.getElementById("more-link");

    if (sidebar.style.width !== "0" && 
        !sidebar.contains(event.target) && 
        !menuBtn.contains(event.target)) {
        closeNav();
    }
});