import { FC } from 'react'

interface IArrowPrev {
  offset: boolean
  cssStyles?: string | undefined
  fillColor?: string | undefined
  handleClick: () => void
}

interface IArrowNext {
  countSlides: number
  dataLenght: number | undefined
  cssStyles?: string | undefined
  fillColor?: string | undefined
  handleClick: () => void
}

export const ArrowPrev: FC<IArrowPrev> = ({
  offset,
  handleClick,
  cssStyles,
  fillColor = '#292933',
}) => {
  return (
    <button
      className={`w-12 h-12 border-2 border-solid rounded-full absolute z-10 flex items-center justify-center disabled:opacity-75 disabled:cursor-not-allowed ${cssStyles}`}
      onClick={handleClick}
      disabled={!offset}
    >
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="mr-1"
      >
        <path
          d="M20.2812 22.3438L14.8125 16.0938L20.2812 9.84375L19.1875 7.34375L11.5312 16.0938L19.1875 24.8438L20.2812 22.3438Z"
          fill={fillColor}
        />
      </svg>
    </button>
  )
}

export const ArrowNext: FC<IArrowNext> = ({
  countSlides,
  handleClick,
  dataLenght,
  cssStyles,
  fillColor = '#292933',
}) => {
  return (
    <button
      className={`w-12 h-12 rounded-full border-2 border-solid absolute z-10 flex items-center justify-center disabled:opacity-75 disabled:cursor-not-allowed ${cssStyles}`}
      onClick={handleClick}
      disabled={countSlides === dataLenght}
    >
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="ml-1"
      >
        <path
          d="M11.7188 22.3438L17.1875 16.0938L11.7188 9.84375L12.8125 7.34375L20.4688 16.0938L12.8125 24.8438L11.7188 22.3438Z"
          fill={fillColor}
        />
      </svg>
    </button>
  )
}
