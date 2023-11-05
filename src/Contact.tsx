/* imports */
import { useTheme } from './components/ThemePicker';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhoneAlt, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

/* sass */
import "./sass/_contact.scss";


/* type definitions */
type ContactItem = {
  icon: IconProp,
  text: string,
  url: string
  tooltip: string,
}

const emailContact: ContactItem = {
  icon: faEnvelope,
  text: "lorenhayden@hotmail.com",
  url: "mailto:lorenhayden@hotmail.com",
  tooltip: "E-mail"
}

const phoneContact: ContactItem = {
  icon: faPhoneAlt,
  text: "(702) 465-4642",
  url: "tel:7-24654642",
  tooltip: "Mobile Phone"
}

const locationContact: ContactItem = {
  icon: faMapMarkerAlt,
  text: "Las Vegas NV 89179",
  url: "https://maps.app.goo.gl/AMYEx5D6dA9SbMP77",
  tooltip: "Location"
}

type ContactPage = {
  header: string,
  items: ContactItem[]
}

const ContactData: ContactPage = {
  header: "Contact",
  items: [emailContact, phoneContact, locationContact]
}

const Contact = () => {
  const theme = useTheme();
  return (
    <div className={`contact-${theme.name}`}>
      <h1 className={`contact-header-${theme.name}`}>
        {`${ContactData.header}`}
      </h1>
      <div className={`contact-content-${theme.name}`}>
        <ul className={`contact-list-${theme.name}`}>
          {ContactData.items.map((contactItem: ContactItem, index) => {
            const contactItemKey = `contact-item-${index}`
            return (
              <li key={contactItemKey} className={`contact-item-${theme.name}`}>
                <FontAwesomeIcon className={`contact-icon-${theme.name}`} icon={contactItem.icon} />
                <a className={`contact-link-${theme.name}`} href={contactItem.url} target="_blanks">
                  {contactItem.text}
                </a>
                <span className={`contact-tooltip-${theme.name}`}>
                  {contactItem.tooltip}
                </span>
              </li>
            )
          })}
        </ul>
      </div>
      <div className={`contact-map-${theme.name}`}>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12912.871215802283!2d-115.25661350000001!3d35.99054445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c8c9bb14975093%3A0xb0e70bbcf0244ec4!2sLas%20Vegas%2C%20NV%2089179!5e0!3m2!1sen!2sus!4v1699202855859!5m2!1sen!2sus" loading="lazy"></iframe>
      </div>
    </div>
  )
}

export default Contact;