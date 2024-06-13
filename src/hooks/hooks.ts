import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import type { RootState, AppDispatch } from '@/features/store'

export const useAppDispatch = useDispatch.withTypes<AppDispatch>()

export const useAppSelector = useSelector.withTypes<RootState>()

export const usePromotionTime = (deadline: string) => {
  const [days, setDays] = useState<number | string>('00')
  const [hours, setHours] = useState<number | string>('00')
  const [minutes, setMinutes] = useState<number | string>('00')
  const [seconds, setSeconds] = useState<number | string>('00')

  const addZero = (num: number): string | number => {
    if (num <= 9) {
      return `0${num}`
    } else {
      return num
    }
  }

  const getTimeRemaining = (endtime: string) => {
    const t = Date.parse(endtime) - Date.parse(String(new Date())),
      seconds = Math.floor((t / 1000) % 60),
      minutes = Math.floor((t / 1000 / 60) % 60),
      hours = Math.floor((t / (1000 * 60 * 60)) % 24),
      days = Math.floor(t / (1000 * 60 * 60 * 24))

    return {
      total: t,
      days: days,
      hours: hours,
      minutes: minutes,
      seconds: seconds,
    }
  }

  useEffect(() => {
    const timerInterval = setInterval(() => updateClock(deadline), 1000)

    function updateClock(endtime: string) {
      const t = getTimeRemaining(endtime)

      setHours(addZero(t.hours))
      setMinutes(addZero(t.minutes))
      setSeconds(addZero(t.seconds))
      setDays(addZero(t.days))

      if (t.total <= 0) {
        setHours('00')
        setMinutes('00')
        setSeconds('00')
        setDays('00')

        clearInterval(timerInterval)
      }
    }

    updateClock(deadline)
    return () => clearInterval(timerInterval)
  }, [deadline])

  return { days, hours, minutes, seconds }
}
