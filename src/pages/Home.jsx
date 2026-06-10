import { Link } from 'react-router-dom'

const PRODUCTS = [
  { id: 1, name: '상품 A', price: 10000 },
  { id: 2, name: '상품 B', price: 25000 },
  { id: 3, name: '상품 C', price: 49000 },
]

export default function Home() {
  return (
    <div style={{ padding: 40 }}>
      <h1>GA 테스트 쇼핑몰</h1>
      <div style={{ display: 'flex', gap: 16, marginTop: 24 }}>
        {PRODUCTS.map((p) => (
          <Link
            key={p.id}
            to={`/product/${p.id}`}
            style={{
              display: 'block',
              padding: 20,
              border: '1px solid #ddd',
              borderRadius: 8,
              textDecoration: 'none',
              color: 'inherit',
              width: 160,
            }}
          >
            <div style={{ fontWeight: 'bold' }}>{p.name}</div>
            <div style={{ marginTop: 8, color: '#555' }}>
              {p.price.toLocaleString()}원
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
