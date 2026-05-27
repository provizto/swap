* **Isi seluruh file `app.js` Anda dengan ini:**
  ```javascript
  document.addEventListener("DOMContentLoaded", function() {
      const widgetContainer = document.getElementById("uniswap-widget");
      
      if (window.UniswapWidget) {
          window.UniswapWidget.render({
              defaultChainId: 137, // Jaringan Polygon
              jsonRpcEndpoint: "https://polygon-rpc.com", 
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
  });
