import PageWrapper from '@/common/components/PageWrapper'
import ContactsInfo from './components/ContactsInfo'
import ContactsForm from './components/ContactsForm'

const navData = [{ nav: 'Contacts', link: '', isActive: true }]

const Contacts = () => {
  return (
    <PageWrapper title="Contacts" navArr={navData}>
      <div>
        <ContactsInfo />
        <ContactsForm />
      </div>
    </PageWrapper>
  )
}

export default Contacts
