import React, { useEffect } from 'react'
import StoryReel from "./feedComponents/storyReels/StoryReel"
import "./Feed.css"
import MessageSender from './feedComponents/messageSender/MessageSender'
import Posts from './feedComponents/posts/Posts'
import {FeedProvider} from "./feedComponents/context/feedContext"
import {UserContext}  from "../../../userContext/UserContextProvider"
import db from '../../../firebase'

function Feed() {
    var [feeds, setFeeds] = React.useState([])
    var [userData,] = React.useContext(UserContext)
    useEffect(() => {
        db.collection("posts").onSnapshot(snapshot =>
            setFeeds(snapshot.docs.map(doc => ({
                id: doc.id,
                data: doc.data()
            })))
        )
    }, [])
    var id = "baba" 
    var updateFeeds = (data)=>{
        setFeeds([{"id":id,data:data},...feeds])
    }
    return (
        <FeedProvider value={[feeds,updateFeeds]}>
            <div className="Feed">
                <StoryReel/>
                <MessageSender/>
                {
                    feeds.map((feed)=>{
                        return <Posts
                                    key={feed.id}
                                    image = {feed.data.image}
                                    message = {feed.data.message}
                                    userName = {userData.userName}
                                    profilePic = {userData.picture}
                                    timestamp = "26 August at 17:24"
                                />
                    }
                    )
                }
                
                
            </div>
            </FeedProvider>
    )
}

export default Feed


