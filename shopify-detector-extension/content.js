(function () {
  const isShopify = window.Shopify || window.__st;

  if (isShopify) {
    const banner = document.createElement("div");
    banner.innerText = "✅ Built with Shopify";
    banner.style.position = "fixed";
    banner.style.top = "0";
    banner.style.left = "0";
    banner.style.width = "100%";
    banner.style.backgroundColor = "#96bf48";
    banner.style.color = "#fff";
    banner.style.textAlign = "center";
    banner.style.padding = "10px";
    banner.style.zIndex = "9999";
    banner.style.fontSize = "16px";
    banner.style.fontFamily = "Arial, sans-serif";
    document.body.prepend(banner);
  }
})();