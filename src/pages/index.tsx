import axios from "axios"
import { useEffect, useState } from "react"
import { Header } from "../components/header"

interface TokenProps {
  token: string
}

export default function Home() {
  const [token, setToken] = useState<string | null>(null)

  useEffect(() => {
    const token = async () => {
      const { token }:TokenProps = await axios.get('/api/token').then(res => res.data)
      setToken(token)
    }
    token()
  }, [])
  return (
    token !== null && <Header token={token} />
  )
}
