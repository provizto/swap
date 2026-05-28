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

document.addEventListener("DOMContentLoaded", function() {
    console.log("Zoniq Finance Interface initialized.");

    // Mengambil Elemen DOM untuk Operasional Modal ToS
    const modal = document.getElementById("tos-modal");
    const openBtn = document.getElementById("open-tos");
    const closeBtn = document.getElementById("close-tos");
    const acceptBtn = document.getElementById("accept-tos-btn");

    // Fungsi membuka Jendela Modal Ketentuan Hukum
    openBtn.addEventListener("click", function(e) {
        e.preventDefault(); // Mencegah reload halaman
        modal.classList.add("active");
    });

    // Fungsi menutup Jendela Modal lewat tanda silang
    closeBtn.addEventListener("click", function() {
        modal.classList.remove("active");
    });

    // Fungsi menutup Jendela Modal lewat tombol persetujuan
    acceptBtn.addEventListener("click", function() {
        modal.classList.remove("active");
        console.log("User telah menyetujui Ketentuan Regulasi Zoniq Finance.");
    });

    // Menutup modal otomatis jika user mengklik area luar kotak hitam modal
    window.addEventListener("click", function(event) {
        if (event.target === modal) {
            modal.classList.remove("active");
        }
    });
});
