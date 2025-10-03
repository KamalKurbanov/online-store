import Image from 'next/image'
import { Card, Souvenir } from './components/Card'
import { GetServerSideProps } from 'next'

type Props = {
  token: string
}

export default async function Page({ token }: Props) {
  const data = await fetch('http://localhost:3001/api/v1/user/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      password: '000111',
      email: 'base@gmail.ru',
    }),
    cache: 'no-store',
  })
  const res = await data.json()

  return (
    <div>
      <h1>Магазин</h1>
      token: {res.token}
      {/* <p>{token}</p> */}
    </div>
  )
}
