import { useLocation, useNavigate } from 'react-router-dom'
import { purchase } from '../lib/gtag'

export default function CheckoutPage() {
  const { state } = useLocation()
  const navigate = useNavigate()
  const product = state?.product

  if (!product) return <div style={{ padding: 40 }}>잘못된 접근입니다.</div>

  function handlePurchase() {
    const txId = `TX-${Date.now()}`
    purchase({
      transactionId: txId,
      value: product.price,
      items: [{ item_id: String(product.id), item_name: product.name, price: product.price, quantity: 1 }],
    })
    navigate('/thank-you', { state: { product, txId } })
  }

  return (
    <div style={{ padding: 40 }}>
      <h2>결제 확인</h2>
      <div
        style={{
          marginTop: 16,
          padding: 20,
          border: '1px solid #ddd',
          borderRadius: 8,
          maxWidth: 320,
        }}
      >
        <div>{product.name}</div>
        <div style={{ fontWeight: 'bold', marginTop: 8, fontSize: 20 }}>
          {product.price.toLocaleString()}원
        </div>
      </div>
      <button
        onClick={handlePurchase}
        style={{
          marginTop: 20,
          padding: '12px 32px',
          background: '#16a34a',
          color: '#fff',
          border: 'none',
          borderRadius: 8,
          fontSize: 16,
          cursor: 'pointer',
        }}
      >
        결제 완료
      </button>
    </div>
  )
}
