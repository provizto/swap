document.addEventListener("DOMContentLoaded", function() {
    console.log("Antarmuka DEX siap digunakan.");
    
    // Memastikan user mengetahui status hukum platform saat pertama kali masuk
    if (!localStorage.getItem("rulesAccepted")) {
        alert("Pemberitahuan: Anda sedang mengakses Antarmuka Non-Custodial pihak ketiga. Hubungkan dompet kripto Anda secara bijak.");
        localStorage.setItem("rulesAccepted", "true");
    }
});
