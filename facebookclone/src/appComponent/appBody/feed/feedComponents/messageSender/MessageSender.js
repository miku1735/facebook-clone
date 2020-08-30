import React from 'react'
import "./MessageSender.css"
import { Avatar } from '@material-ui/core'
import Buttons from './buttons/Buttons'
import VideocamIcon from '@material-ui/icons/Videocam';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import FeedContext from "../../feedComponents/context/feedContext"
function MessageSender() {
    var [input,setInput] = React.useState("");
    var [imageURL, setImageURL] = React.useState("");
    const [,updateFeed] = React.useContext(FeedContext)

    var handleSubmit = (e)=> {
        e.preventDefault()
        updateFeed({
            message: input,
            profilePic: user,
            image: imageURL,
            userName: "Mayank",
            timestamp: "26 August at 17:24",
        });
        setInput(""); setImageURL(""); // set all state to null values;
    }

    return (
        <div className="MessageSender">
            <form className="MessageSender__top">
                <div className="MessageSender__top__left">
                    <Avatar className="MessageSender__top__avatar" src={user}> </Avatar>
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


var user = "data:image/jpeg;base64,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"
