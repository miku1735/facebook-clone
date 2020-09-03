import React from 'react'
export const UserContext = React.createContext()

function UserContextProvider(props) {
    var [userData,setUserData] = React.useState({
        name:"",
        picture:""
    })
    return (
        <UserContext.Provider value={[userData,setUserData]}>
            {props.children}
        </UserContext.Provider>
    )
}

export default UserContextProvider