import React , { createContext, useContext, useMemo} from "react"
import { io } from "socket.io-client"
import SERVER_URL from "../constants.mjs"

const SocketContext = createContext(null)

export const useSocket = ()=>{
    const socket = useContext(SocketContext)
    return socket
}

export const SocketProvider = (props)=>{
    const socket = useMemo(()=> io(`${SERVER_URL}`),[])

    return (
        <SocketContext.Provider value={socket}>
            {props.children}
        </SocketContext.Provider>
    )
}