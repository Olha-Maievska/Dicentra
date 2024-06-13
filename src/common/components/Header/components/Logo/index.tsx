import { Link } from 'react-router-dom'

const Logo = () => {
  return (
    <Link to="/" className="relative h-14 w-52 mr-12">
      <img src="/images/logo/logo.png" alt="Logo" />
    </Link>
  )
}

export default Logo
