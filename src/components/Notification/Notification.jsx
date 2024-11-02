import s from './Notification.module.css';

const Notification = ({ message }) => {
  return <span className={s.notification}>{message}</span>;
};

export default Notification;
