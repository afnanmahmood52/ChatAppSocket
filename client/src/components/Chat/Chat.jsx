import React, {useState, useEffect} from 'react'
import {useLocation} from 'react-router-dom'

import querystring from 'query-string'
import io from 'socket.io-client'

const END_POINT = "http://localhost:5000"

let socket;

export default function Chat() {
    const [name, setName] = useState('')
    const [room, setRoom] = useState('')
    const location = useLocation()

    useEffect(()=>{
        const {name, room} = querystring.parse(location.search)

        socket = io(END_POINT)
        
        setName(name)
        setRoom(room)

        console.log(socket)
    }, [END_POINT, location.search])

    return (
        <div>
            <h1>Chat Component</h1>
        </div>
    )
}
