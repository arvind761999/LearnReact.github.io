import React from 'react'

import UserContext from './UserContext';

// children : jo bhi components a rhe hai unko as it use karlo or Children lets you manipulate and transform the JSX you received as the children prop.

const UserContextProvider = ({children}) => {
    // How to give data 
    // We make a state
    const [user, setUser] = React.useState(null);  // jo bhi call karni hai vo yha per  karte hai

    // kuchh value deni hai
    return (

        // <> </> -> rap karna
        <UserContext.Provider value={{user, setUser}}>
           {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider;