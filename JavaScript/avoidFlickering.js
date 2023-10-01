
darkMode = localStorage.getItem("dark-mode"); 

if (darkMode === "disabled") {
    document.documentElement.style.setProperty('--dark-shades', 'white');
    document.documentElement.style.setProperty('--light-shades', '#1A1A1A');
    document.documentElement.style.setProperty('--black', 'white');
} else {
    document.documentElement.style.setProperty('--dark-shades', '#1A1A1A');
    document.documentElement.style.setProperty('--light-shades', 'white');
    document.documentElement.style.setProperty('--black', 'black');
}