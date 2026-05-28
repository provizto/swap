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
