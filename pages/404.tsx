import { useRouter } from 'next/router';
import { useEffect } from 'react'

export default function PageNotFound() {
  const router = useRouter()

  useEffect(() => {
      setTimeout(() => {
          router.push('/')
      }, 3000);
  }, [])
  
  return (
    <div>404 | Page Not Found</div>
  )
}
