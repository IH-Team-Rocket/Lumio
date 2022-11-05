import React, { useState } from 'react';
import { MdNotificationsNone } from 'react-icons/md';
import { useNotificationCenter } from "react-toastify/addons/use-notification-center"

const NotificationsWidget = () => {
  const { notifications, } = useNotificationCenter()
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div>
      <MdNotificationsNone onClick={() => setIsOpen(!isOpen)}/>
      {isOpen && <div className='popup-box'>
        <div className='box'>
          {notifications.map(notification => <p>{notification.content}</p>)}
          <button onClick={() => setIsOpen(!isOpen)}>X</button>
        </div>
      </div>}
      {/* {notifications.map(notification => <p>{notification.content}</p>)} */}
    </div>
  );
};

export default NotificationsWidget;