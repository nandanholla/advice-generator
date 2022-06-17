import Head from 'next/head'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import desktopDivider from '../public/pattern-divider-desktop.svg'

const prefix = process.env.NEXT_PUBLIC_BASE_PATH || ''

type Advice = {
  id: number
  advice: string
}

const Home = () => {
  const [id, setId] = useState(1)
  const [advice, setAdvice] = useState("")
  const [loading, setLoading] = useState(true)

  const getAdvice = async (): Promise<Advice> => {
    setLoading(true)
    const res = await fetch('https://api.adviceslip.com/advice')
    const data = await res.json()
    const { slip: { id, advice } } = data
    setId(id)
    setAdvice(advice)
    setLoading(false)
    return { id, advice }
  }

  useEffect(() => {
    getAdvice()
  }, [])

  return (
    <>
      <Head>
        <title>Advice Generator | Get random advice</title>
        <meta name="description" content="Random advice generator using Advice API" />
        <link rel="shortcut icon" href={prefix + "/favicon.ico"} type="image/x-icon" />
        <link rel="apple-touch-icon" sizes="180x180" href={prefix + "/apple-touch-icon.png"} />
        <link rel="icon" type="image/png" sizes="32x32" href={prefix + "/favicon-32x32.png"} />
        <link rel="icon" type="image/png" sizes="16x16" href={prefix + "/favicon-16x16.png"} />
        <link rel="manifest" href={prefix + "/site.webmanifest"} />
        <link href="https://fonts.googleapis.com/css2?family=Manrope&display=swap" rel="stylesheet"
        />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
      </Head>
      <main className="container flex justify-center items-center bg-dark-blue min-h-screen w-screen px-5 font-manrope">

        {/* Card */}
        <div className="shadow-md px-6 py-10 sm:p-10 rounded-xl bg-dark-grayish-blue h-fit sm:min-w-[520px] min-w-[340px] max-w-[340px] sm:max-w-[520px] relative">

          {/* advice number */}
          <p className='text-neon-green uppercase tracking-widest text-xs font-extrabold mb-6'>Advice #{id}</p>

          {/* advice */}
            <h1 className='text-light-cyan text-[28px] font-extrabold mb-6 break-words'>
              {
                loading ? 'Loading...' :
                <>
                  <i className="fa-solid fa-quote-left text-xs -translate-y-3 mr-1"></i>
                    {advice}
                  <i className="fa-solid fa-quote-right text-xs -translate-y-3 ml-1"></i>
                </>
              }
            </h1>

          {/* divider */}

          <div className="my-8">
            <Image src={desktopDivider} alt="divider" />
          </div>

          {/* random advice button */}
          <button type='button' className='rounded-full w-12 h-12 p-8 bg-neon-green flex justify-center items-center absolute -bottom-6 -translate-x-1/2 left-1/2 transition-shadow ease-in-out duration-300 hover:shadow-[0_0_30px_2px_rgba(0,0,0,1)] hover:shadow-neon-green' onClick={getAdvice}>
            <i className="fa-solid fa-dice-five text-dark-blue text-3xl"></i>
          </button>

        </div>
      </main>
    </>
  )
}

export default Home
