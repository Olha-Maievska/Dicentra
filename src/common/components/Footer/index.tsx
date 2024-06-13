import LogoContent from './components/LogoContent'
import FooterNavigation from './components/FooterNavigation'
import FooterInput from './components/FooterInput'
import FooterCopy from './components/FooterCopy'
import { forClientsNav, forCompanyNav, logoContentData } from './data'

const Footer = () => {
  return (
    <footer className="bg-selection-form text-light py-12 font-roboto">
      <div className="container">
        <div className="flex justify-between">
          <LogoContent {...logoContentData} />

          <FooterNavigation {...forClientsNav} />
          <FooterNavigation {...forCompanyNav} />

          <FooterInput />
        </div>
        <FooterCopy />
      </div>
    </footer>
  )
}

export default Footer
