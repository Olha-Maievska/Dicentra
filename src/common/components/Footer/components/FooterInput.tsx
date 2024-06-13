import { FormEvent, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getNews } from '@/features/forms/formsSlice'
import { useAppDispatch } from '@/hooks/hooks'
import { CircularProgress } from '@mui/material'

const FooterInput = () => {
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [successMsg, setSuccessMsg] = useState('')

  const dispatch = useAppDispatch()

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()

    if (!email) return
    setLoading(true)
    dispatch(getNews(email))

    setTimeout(() => {
      setLoading(false)
      setSuccessMsg('Thank you! Now you will receive the latest news')
    }, 500)

    setEmail('')
  }

  useEffect(() => {
    setSuccessMsg('')
  }, [])

  return (
    <div className="w-64">
      <h5 className="font-bold text-xl mb-4">
        Stay up to date with the latest news
      </h5>

      {loading ? (
        <div className="h-14 text-center">
          <CircularProgress color="inherit" />
        </div>
      ) : successMsg ? (
        <div className="h-14 text-white">{successMsg}</div>
      ) : (
        <form className="relative" onSubmit={handleSubmit}>
          <input
            className="rounded-full p-4 pr-12 w-full text-dark font-roboto focus:outline-transparent focus:outline-none border-none"
            type="email"
            placeholder="Your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button
            className="absolute right-5 top-1/2 -translate-y-1/2"
            type="submit"
          >
            <img src="/images/icons/navigation.svg" alt="send" />
          </button>
        </form>
      )}

      <div className="mt-7 flex">
        <Link
          className="border-gold border-2 border-solid rounded-full w-12 h-12 flex justify-center items-center mr-4"
          to="https://www.facebook.com"
          target="_blank"
        >
          <img src="/images/icons/facebook.svg" alt="facebook" />
        </Link>
        <Link
          className="border-gold border-2 border-solid rounded-full w-12 h-12 flex justify-center items-center"
          to="https://www.instagram.com"
          target="_blank"
        >
          <img src="/images/icons/instagram.svg" alt="instagram" />
        </Link>
      </div>
    </div>
  )
}

export default FooterInput
