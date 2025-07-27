function toggleMenu() {
        var menu = document.getElementById("menu");
        var toggle = document.getElementById("menuToggle");
        
        menu.classList.toggle("active"); 
        
        // Ubah ikon antara ☰ (hamburger) dan ✖ (tanda X)
        if (menu.classList.contains("active")) {
            toggle.innerHTML = "✖"; 
        } else {
            toggle.innerHTML = "☰"; 
        }
}

