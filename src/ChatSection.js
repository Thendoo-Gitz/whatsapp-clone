import React from 'react'
import './ChatSection.css'
import { Avatar, IconButton } from '@material-ui/core'
import AttachFileOutlinedIcon from '@material-ui/icons/AttachFileOutlined'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import {
  InsertEmoticon,
  MicNoneOutlined,
  SearchOutlined,
} from '@material-ui/icons'

function ChatSection() {
  return (
    <div className='ChatSection'>
      <div className='ChatSectionHeader'>
        <Avatar src='https://i.imgur.com/Aj3ZcJM.png' />

        <div className='ChatSectionHeaderInfo'>
          <h3>Anjing</h3>
          <p>Last seen dekat kedai</p>
        </div>

        <div className='ChatSectionHeaderRight'>
          <IconButton>
            <AttachFileOutlinedIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
          <IconButton>
            <SearchOutlined />
          </IconButton>
        </div>
      </div>

      <div className='ChatBody'>
        <p className='ChatMessage'>
          <span className='ChatBodyName'>Anjing</span>Woof woof!
          <span className='ChatBodyTimestamp'>{new Date().toUTCString()}</span>
        </p>
        <p className='ChatMessage'>
          <span className='ChatBodyName'>Anjing</span>Gong gong!*
          <span className='ChatBodyTimestamp'>{new Date().toUTCString()}</span>
        </p>
        <p className='ChatMessage Received '>
          <span className='ChatBodyName'>Meor</span>Apa sial
          <span className='ChatBodyTimestamp'>{new Date().toUTCString()}</span>
        </p>
        <p className='ChatMessage Received '>
          <span className='ChatBodyName'>Meor</span>wkwkwkwkwkwkkwkwkwkw
          <span className='ChatBodyTimestamp'>{new Date().toUTCString()}</span>
        </p>
      </div>

      <div className='ChatFooter'>
        <InsertEmoticon />
        <form>
          <input type='text' placeholder='Enter message here' />
          <button type='submit'>Send a message</button>
        </form>
        <MicNoneOutlined />
      </div>
    </div>
  )
}

export default ChatSection
