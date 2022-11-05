import React, { useEffect, useState } from 'react';
import { MdNotificationsActive, MdNotificationsNone } from 'react-icons/md';
import { useNotificationCenter } from "react-toastify/addons/use-notification-center"
import Popup from 'reactjs-popup';
import { createGlobalStyle } from 'styled-components';
import './NotificationsWidget.scss'

const NotificationsWidget = () => {
  const { notifications, remove } = useNotificationCenter()
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className='notification-popup'>
      <Popup 
      trigger={
        notifications.length ?
        <div className='logo-container'><MdNotificationsActive className='logo' onClick={() => setIsOpen(!isOpen)}/></div> :
        <div className='logo-container'><MdNotificationsNone className='logo' onClick={() => setIsOpen(!isOpen)}/></div>
      }
      on='hover'
      mouseLeaveDelay={150}
      mouseEnterDelay={50}
      contentStyle={{ padding: '15px', border: 'red'}}
      >
      {notifications.length ? 
        <div className='notifications'>
          {notifications.map(notification => {
            console.log(notifications)
            if (notification.read) {
              return null
            }
          return <div className='notification'>{notification.content} 
              <button onClick={() => remove(notification.id)}>👁️</button> 
            </div>
          })}
        </div>
      : <div className='notifications'>
          <p className='notification'>You have no notifications!</p>
        </div>}
      </Popup>
    </div>
  );
};

export default NotificationsWidget;