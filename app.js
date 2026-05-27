document.addEventListener("DOMContentLoaded", function() {
    console.log("DEX Interface siap dijalankan.");

    // Menginisialisasi dan menampilkan Widget Uniswap secara resmi
    const widgetContainer = document.getElementById("uniswap-widget");
    
    if (window.UniswapWidget) {
        window.UniswapWidget.render({
            // Pilih jaringan blockchain (misal: 1 untuk Ethereum, 137 untuk Polygon)
            defaultChainId: 137, 
            jsonRpcEndpoint: "https://polygon-rpc.com", // Publik RPC gratis untuk Polygon
            width: "100%",
            theme: {
                backgroundColor: "#FFFFFF",
                primaryColor: "#1A1A1A",
                secondaryColor: "#7B7B7B",
                accentColor: "#4A90E2",
                borderRadius: 16
            }
        }, widgetContainer);
    }

    // Peringatan hukum pembuka (Opsional)
    if (!localStorage.getItem("disclaimerAccepted")) {
        const setuju = confirm(
            "Pemberitahuan Hukum:\n\nPlatform ini hanya menyediakan antarmuka grafis pihak ketiga. Kami tidak menyimpan dana Anda. Apakah Anda setuju?"
        );
        if (setuju) {
            localStorage.setItem("disclaimerAccepted", "true");
        } else {
            document.body.innerHTML = "<h2 style='text-align:center; margin-top:50px;'>Anda harus menyetujui ketentuan untuk menggunakan platform ini.</h2>";
        }
    }
});
