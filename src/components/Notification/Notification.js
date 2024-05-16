import { Message } from './Notification.styled';
import PropTypes from 'prop-types';

/**
 * A component to display a text message.
 *
 * @param {string} props.message Notification message.
 *
 * @returns {React.Component} Message component.
 */
const Notification = ({ message }) => <Message>{message}</Message>;

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Notification;
