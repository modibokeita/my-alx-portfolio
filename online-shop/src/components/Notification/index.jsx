import { NotificationContainer } from "./NotificationElements";
import PropTypes from "prop-types"
const Notification = ({ message }) => {
    if (!message) return null;

    return <NotificationContainer>{message}</NotificationContainer>;
  };
Notification.propTypes = { message: PropTypes.string}
  export default Notification;
