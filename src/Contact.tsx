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
        <div className={`contact-image-${theme.name}`}>
          <img src="./me.png" alt="Picture of Loren Hayden" />
        </div>
      </div>
    </div>
  )
}

export default Contact;