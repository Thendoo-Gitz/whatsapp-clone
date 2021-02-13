import React from 'react'
import { Avatar } from '@material-ui/core'
import './SidebarChat.css'

function SidebarChat() {
  return (
    <div className='sidebarChat'>
      <Avatar src='https://i.imgur.com/PI3eI16.png' />
      <div className='sidebarChatInfo'>
        <h2>Kumpulan</h2>
        <p>Roem Lim: He ...</p>
      </div>
    </div>
  )
}

export default SidebarChat
