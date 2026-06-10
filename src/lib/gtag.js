export const GA_ID = 'G-TESTID123'

// 페이지뷰
export function pageview(path) {
  window.gtag('config', GA_ID, { page_path: path })
}

// 결제 시작 (begin_checkout)
export function beginCheckout({ items, value, currency = 'KRW' }) {
  window.gtag('event', 'begin_checkout', {
    currency,
    value,
    items,
  })
}

// 결제 완료 (purchase)
export function purchase({ transactionId, items, value, currency = 'KRW' }) {
  window.gtag('event', 'purchase', {
    transaction_id: transactionId,
    currency,
    value,
    items,
  })
}

// 범용 이벤트
export function trackEvent(eventName, params = {}) {
  window.gtag('event', eventName, params)
}
