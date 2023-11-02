/* imports */
import { useTheme } from './components/ThemePicker';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faMapMarkerAlt, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';


/* sass */
import "./sass/_contact.scss";

const Contact = () => {
  const theme = useTheme();
  return (
    <section id="contact" className={`contact-${theme.name}`}>
      <div>
        <FontAwesomeIcon icon={faEnvelope} />
        <a href="mailto:lorenhayden@hotmail.com" target="_blanks">
          lorenhayden@hotmail.com
        </a>
        <span>E-Mail</span>
      </div>
      <div>
        <FontAwesomeIcon icon={faPhoneAlt} />
        <a href="tel:7024654642" target="_blanks">
          (702) 465-4642
        </a>
        <span>Phone</span>
      </div>
      <div>
        <FontAwesomeIcon icon={faMapMarkerAlt} />
        <a href="https://maps.app.goo.gl/AMYEx5D6dA9SbMP77" target="_blanks">
          Las Vegas NV 89179
        </a>
        <span>Location</span>
      </div>

    </section>
  )
}

export default Contact;