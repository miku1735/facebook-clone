import React from 'react'
import "./Login.css"
import {Button} from "@material-ui/core"
import {auth,provider} from "../../firebase"
import {UserContext} from "../../userContext/UserContextProvider"

function Login() {

    var [userData,setUserData] = React.useContext(UserContext)
    var onLogin = () => {
        // ..Login 

        auth
            . signInWithPopup(provider)
            .then((result)=>{
                console.log(result.additionalUserInfo.profile)
                setUserData({...userData, 
                                name:result.additionalUserInfo.profile.name,
                                picture:result.additionalUserInfo.profile.picture
                            })
            })
            .catch((error) => {alert(error.message)})
    }

    return (
        <div className="Login">
            <div className="Login__logo">
                <img className="Login__logo__img1" alt="" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/150px-Facebook_f_logo_%282019%29.svg.png"></img>
                <img className="Login__logo__img2" alt="" src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Facebook_Logo_%282019%29.svg/294px-Facebook_Logo_%282019%29.svg.png"></img>
            </div>
                <Button 
                    type="submit" 
                    variant="contained" 
                    color="primary" 
                    className="Login__button"
                    onClick={onLogin}
                >
                    Login
                </Button>
        </div>
    )
}

export default Login
