import Head from 'next/head'
import Image from 'next/image'
import { useState, useEffect } from 'react'

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
      </Head>
      <main className="container flex justify-center items-center bg-dark-blue min-h-screen min-w-full px-5 font-manrope">

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
            <Image src='/pattern-divider-desktop.svg' width="444" height="16" alt="divider" />
          </div>

          {/* random advice button */}
          <button aria-label='shuffle button' className='rounded-full w-12 h-12 p-8 bg-neon-green flex justify-center items-center absolute -bottom-6 -translate-x-1/2 left-1/2 transition-shadow ease-in-out duration-300 hover:shadow-[0_0_30px_2px_rgba(0,0,0,1)] hover:shadow-neon-green' onClick={getAdvice}>
            <i className="fa-solid fa-dice-five text-dark-blue text-3xl"></i>
          </button>

        </div>
      </main>
    </>
  )
}

export default Home
