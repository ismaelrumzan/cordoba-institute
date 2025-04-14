
    (function() {
      var baseURL = "https://cdn.shopify.com/shopifycloud/checkout-web/assets/";
      var scripts = ["https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/polyfills.CPIGHvSH.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/app.CVtsrZr5.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/page-OnePage.DUjuPxwN.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/DeliveryMethodSelectorSection.pUp2H1E6.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/useEditorShopPayNavigation.eBSx36iG.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/VaultedPayment.DdaG9PgQ.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/LocalizationExtensionField.BpICt_jp.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/ShopPayOptInDisclaimer.D7p9SAwQ.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/ShipmentBreakdown.CQkwHdc9.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/MerchandiseModal.ByGCcE8I.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/StackedMerchandisePreview.mtjKeWQK.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/PayButtonSection.CdBO0XSI.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/component-ShopPayVerificationSwitch.D6NSiAoT.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/useSubscribeMessenger.CWHVmbFY.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/index.De5o9omr.js"];
      var styles = ["https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/app.er3zDQVT.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/OnePage.PMX4OSBO.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/DeliveryMethodSelectorSection.DmqjTkNB.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/useEditorShopPayNavigation.DCOTvxC3.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/VaultedPayment.OxMVm7u-.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/StackedMerchandisePreview.CKAakmU8.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/ShopPayVerificationSwitch.DW7NMDXG.css"];
      var fontPreconnectUrls = ["https://fonts.shopifycdn.com"];
      var fontPrefetchUrls = ["https://fonts.shopifycdn.com/open_sans/opensans_n4.5460e0463a398b1075386f51084d8aa756bafb17.woff2?h1=dHJlbmR5ei5jby51aw&hmac=fc62bccb86e395199b7b528536b4769470f4e357fe941e1aeaaaf9575b2e786d","https://fonts.shopifycdn.com/open_sans/opensans_n6.63a74f6cbbfef729fb07955b2d5b4cc83273862e.woff2?h1=dHJlbmR5ei5jby51aw&hmac=d1a13980eafbdda5c2871aab56ff1f27c07c3ce8b94f9d01187ed98e16da1b14"];
      var imgPrefetchUrls = ["https://cdn.shopify.com/s/files/1/0354/1414/7131/files/Trendyz_Logo_Black_on_transparent_x320.png?v=1630556763"];

      function preconnect(url, callback) {
        var link = document.createElement('link');
        link.rel = 'dns-prefetch preconnect';
        link.href = url;
        link.crossOrigin = '';
        link.onload = link.onerror = callback;
        document.head.appendChild(link);
      }

      function preconnectAssets() {
        var resources = [baseURL].concat(fontPreconnectUrls);
        var index = 0;
        (function next() {
          var res = resources[index++];
          if (res) preconnect(res, next);
        })();
      }

      function prefetch(url, as, callback) {
        var link = document.createElement('link');
        if (link.relList.supports('prefetch')) {
          link.rel = 'prefetch';
          link.fetchPriority = 'low';
          link.as = as;
          if (as === 'font') link.type = 'font/woff2';
          link.href = url;
          link.crossOrigin = '';
          link.onload = link.onerror = callback;
          document.head.appendChild(link);
        } else {
          var xhr = new XMLHttpRequest();
          xhr.open('GET', url, true);
          xhr.onloadend = callback;
          xhr.send();
        }
      }

      function prefetchAssets() {
        var resources = [].concat(
          scripts.map(function(url) { return [url, 'script']; }),
          styles.map(function(url) { return [url, 'style']; }),
          fontPrefetchUrls.map(function(url) { return [url, 'font']; }),
          imgPrefetchUrls.map(function(url) { return [url, 'image']; })
        );
        var index = 0;
        function run() {
          var res = resources[index++];
          if (res) prefetch(res[0], res[1], next);
        }
        var next = (self.requestIdleCallback || setTimeout).bind(self, run);
        next();
      }

      function onLoaded() {
        try {
          if (parseFloat(navigator.connection.effectiveType) > 2 && !navigator.connection.saveData) {
            preconnectAssets();
            prefetchAssets();
          }
        } catch (e) {}
      }

      if (document.readyState === 'complete') {
        onLoaded();
      } else {
        addEventListener('load', onLoaded);
      }
    })();
  