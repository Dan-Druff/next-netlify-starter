
import React, {useContext} from 'react';
const PingContext = React.createContext();

export function usePing(){
    return useContext(PingContext);
}

export function PingProvider({children}){
    function doPing(){
        console.log("Ping has pung");
        return {
            ping:"Heres your fucking Ping"
        }
    }
    const value = {
        doPing
    }
    return (
        <PingContext.Provider value={value}>
            {children}
        </PingContext.Provider>
    )
}
