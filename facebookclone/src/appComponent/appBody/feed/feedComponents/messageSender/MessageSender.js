import React from 'react'
import "./MessageSender.css"
import { Avatar } from '@material-ui/core'
import Buttons from './buttons/Buttons'
import VideocamIcon from '@material-ui/icons/Videocam';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import FeedContext from "../../feedComponents/context/feedContext";
import {UserContext} from "../../../../../userContext/UserContextProvider"
function MessageSender() {
    var [userData,] = React.useContext(UserContext)
    var [input,setInput] = React.useState("");
    var [imageURL, setImageURL] = React.useState("");
    const [,updateFeed] = React.useContext(FeedContext)

    var handleSubmit = (e)=> {
        e.preventDefault()
        updateFeed({
            message: input,
            profilePic: userData.picture,
            image: imageURL,
            userName: userData.name,
            timestamp: "26 August at 17:24",
        });
        setInput(""); setImageURL(""); // set all state to null values;
    }

    return (
        <div className="MessageSender">
            <form className="MessageSender__top">
                <div className="MessageSender__top__left">
                    <Avatar 
                        className="MessageSender__top__avatar" 
                        src={userData.picture}> 
                    </Avatar>
                    <input 
                        placeholder="What's on your mind Mayank" 
                        type="text"
                        value={input}
                        onChange={(e)=>setInput(e.target.value)}
                    />
                </div>
                <div className="MessageSender__top__right">
                    <input 
                        placeholder="Image URL (Optional)" 
                        type="text"
                        value={imageURL}
                        onChange={(e)=>setImageURL(e.target.value)}
                    />
                </div>
                <button onClick={handleSubmit} type="submit"> hidden submit </button>
            </form>
            <div className="MessageSender__bottom">
                <Buttons 
                    Icon={VideocamIcon} 
                    title={"Live Video"}
                    color={"red"}
                />
                <Buttons 
                    Icon={PhotoLibraryIcon} 
                    title={"Photo/Video"}
                    color={"green"}
                />
                <Buttons 
                    Icon={InsertEmoticonIcon} 
                    title={"Feeling/Activity"}
                    color={"blue"}
                />
            </div>
        </div>
    )
}

export default MessageSender


