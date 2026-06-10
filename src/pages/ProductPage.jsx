import { useParams, useNavigate } from 'react-router-dom'
import { beginCheckout, buttonClick } from '../lib/gtag'

const PRODUCTS = {
  1: { id: 1, name: '상품 A', price: 10000 },
  2: { id: 2, name: '상품 B', price: 25000 },
  3: { id: 3, name: '상품 C', price: 49000 },
}

export default function ProductPage() {
  const { id } = useParams()
  const navigate = useNavigate()
  const product = PRODUCTS[id]

  if (!product) return <div style={{ padding: 40 }}>상품을 찾을 수 없습니다.</div>

  function handleCheckout() {
    buttonClick({ label: '결제하기', location: 'product' })
    beginCheckout({
      value: product.price,
      items: [{ item_id: String(product.id), item_name: product.name, price: product.price, quantity: 1 }],
    })
    navigate('/checkout', { state: { product } })
  }

  return (
    <div style={{ padding: 40 }}>
      <h2>{product.name}</h2>
      <p style={{ fontSize: 24, fontWeight: 'bold' }}>{product.price.toLocaleString()}원</p>
      <button
        onClick={handleCheckout}
        style={{
          marginTop: 16,
          padding: '12px 32px',
          background: '#2563eb',
          color: '#fff',
          border: 'none',
          borderRadius: 8,
          fontSize: 16,
          cursor: 'pointer',
        }}
      >
        결제하기
      </button>
      <br />
      <button
        onClick={() => navigate(-1)}
        style={{ marginTop: 12, background: 'none', border: 'none', color: '#888', cursor: 'pointer' }}
      >
        ← 뒤로
      </button>
    </div>
  )
}
