import Link from 'next/link'

export default function Navbar() {
  return (
    <div style={{ display: 'flex', gap: 12 }}>
        <Link href="/about" style={{ padding: 10, backgroundColor: 'green', width: 'fit-content', color: '#fff' }}>About</Link>
        <Link href="/about/Guitar" style={{ padding: 10, backgroundColor: 'green', width: 'fit-content', color: '#fff' }}>About Params</Link>
    </div>
  )
}
