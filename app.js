// Memastikan halaman telah dimuat sepenuhnya
document.addEventListener("DOMContentLoaded", function() {
    console.log("DEX Interface siap dijalankan.");

    // Contoh logika tambahan: Memunculkan pop-up disclaimer hukum saat user pertama datang
    if (!localStorage.getItem("disclaimerAccepted")) {
        const setuju = confirm(
            "Pemberitahuan Hukum:\n\nPlatform ini hanya menyediakan antarmuka grafis pihak ketiga. Kami tidak menyimpan dana Anda dan tidak bertanggung jawab atas risiko di jaringan blockchain. Apakah Anda setuju?"
        );
        
        if (setuju) {
            localStorage.setItem("disclaimerAccepted", "true");
        } else {
            // Jika tidak setuju, arahkan ke halaman lain atau kosongkan halaman
            document.body.innerHTML = "<h2 style='text-align:center; margin-top:50px;'>Anda harus menyetujui ketentuan untuk menggunakan platform ini.</h2>";
        }
    }
});