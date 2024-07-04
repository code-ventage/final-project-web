'use client'

import { useContext, useState } from 'react'
import Footer from '@/components/footer'
import Translator from '@/components/translator'
import { buttonVariants } from '@/components/ui/button'
import { GamepadIcon, PlayIcon } from 'lucide-react'
import { translateToNumeral, translateToNumber } from '@/services/translate'
import Navbar from '@/components/navbar/navbar'
import Link from 'next/link'
import AuthContext from '@/context/auth-context'

export default function Home() {
  const { user } = useContext(AuthContext)
  const [value, setValue] = useState('')
  const [translation, setTranslation] = useState<string | undefined>('')
  const [consultType, setConsultType] = useState<'letter' | 'number'>('letter')
  const [isLoading, setIsLoading] = useState(false)

  const handleChange = async (value: string) => {
    setIsLoading(true)
    // numero a numeral
    if (consultType === 'letter') {
      const translated = await translateToNumeral(value)
      setTranslation(translated)
      setValue(value)
    }
    // numeral a numero
    else {
      const translated = await translateToNumber(value)
      setTranslation(translated)
      setValue(value)
    }
    setIsLoading(false)
  }

  const handleChangeType = () => {
    if (consultType === 'letter') {
      setConsultType('number')
    } else {
      setConsultType('letter')
    }
    setValue('')
    setTranslation('')
  }

  return (
    <div className="text-dark relative min-h-screen gap-y-6">
      <Navbar />
      <main className="my-5 flex flex-col gap-y-4 px-4">
        <Translator
          isLoading={isLoading}
          type={consultType}
          onChangeType={handleChangeType}
          value={value}
          translation={translation ?? ''}
          onChange={e => handleChange(e.target.value)}
        />
        <div className="mt-10 text-center">
          <Link
            href={{
              pathname: user ? '/game' : '/login',
              ...(user ? null : { query: { redirect: '/game' } }),
            }}
            className={buttonVariants({
              size: 'lg',
              className: 'max-md:hidden',
            })}
          >
            Jugar
            <PlayIcon className="ml-2 size-6" />
          </Link>
        </div>
      </main>
      <Link
        href="/game"
        title="Jugar"
        className={buttonVariants({
          size: 'icon',
          className: 'absolute bottom-16 right-3 block rounded-full md:hidden',
        })}
      >
        <GamepadIcon className="size-6" />
      </Link>

      <Footer />
    </div>
  )
}
