import React from 'react'
import { Avatar } from '../components/Avatar'
import '../styles/Avatar.css';


export default function AvatarPage() {
    return (
        <div >
            <Avatar name="Tati" src='https://randomuser.me/api/portraits/women/2.jpg'></Avatar>
            <Avatar name="alejo" src="https://randomuser.me/api/portraits/women/2.jpg"></Avatar>
        </div>
    )
}
