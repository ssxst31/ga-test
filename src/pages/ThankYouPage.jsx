import { useLocation, Link } from 'react-router-dom'

export default function ThankYouPage() {
  const { state } = useLocation()

  return (
    <div style={{ padding: 40 }}>
      <h2>결제 완료!</h2>
      {state?.product && (
        <p>
          {state.product.name} — {state.product.price.toLocaleString()}원 결제되었습니다.
          <br />
          <small style={{ color: '#888' }}>Transaction ID: {state.txId}</small>
        </p>
      )}
      <Link to="/">← 홈으로</Link>
    </div>
  )
}
