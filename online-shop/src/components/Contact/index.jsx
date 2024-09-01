import PropTypes from "prop-types"
import {ContactContenair, ContactH1} from "./ContactElements"
const Contact = () => {
  return (
    <ContactContenair id= "contact">
        <ContactH1> our Contact</ContactH1>
    </ContactContenair>
  )
}
Contact.propTypes = {
    id: PropTypes.object,
}
export default Contact

