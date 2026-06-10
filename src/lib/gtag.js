import TagManager from "react-gtm-module";

export function init() {
  TagManager.initialize({ gtmId: "GTM-N9C9GPNW" });
}

export function pageview(path) {
  TagManager.dataLayer({
    dataLayer: { event: "pageview", page: path },
  });
}

export function beginCheckout({ items, value, currency = "KRW" }) {
  TagManager.dataLayer({
    dataLayer: { event: "begin_checkout", currency, value, items },
  });
}

export function purchase({ transactionId, items, value, currency = "KRW" }) {
  // GTM으로도 전달
  TagManager.dataLayer({
    dataLayer: {
      event: "purchase",
      transaction_id: transactionId,
      currency,
      value,
      items,
    },
  });

  // GA4로 직접 전달
  // window.gtag("event", "purchase", {
  //   transaction_id: transactionId,
  //   currency,
  //   value,
  //   items,
  // });
}
