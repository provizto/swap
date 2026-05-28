document.addEventListener("DOMContentLoaded", function() {
    console.log("Zoniq Finance Interface initialized.");

    const modal = document.getElementById("tos-modal");
    const openBtn = document.getElementById("open-tos");
    const closeBtn = document.getElementById("close-tos");
    const acceptBtn = document.getElementById("accept-tos-btn");

    // Pastikan tombolnya ada sebelum memasang fungsi klik
    if (openBtn && modal) {
        openBtn.onclick = function(e) {
            e.preventDefault();
            modal.classList.add("active");
        };
    }

    if (closeBtn) {
        closeBtn.onclick = function() {
            modal.classList.remove("active");
        };
    }

    if (acceptBtn) {
        acceptBtn.onclick = function() {
            modal.classList.remove("active");
            console.log("User menyetujui regulasi.");
        };
    }

    // Menutup modal jika klik di luar kotak putih modal
    window.onclick = function(event) {
        if (event.target === modal) {
            modal.classList.remove("active");
        }
    };
});
