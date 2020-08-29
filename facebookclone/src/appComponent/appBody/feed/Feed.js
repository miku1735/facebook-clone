import React from 'react'
import StoryReel from "./feedComponents/storyReels/StoryReel"
import "./Feed.css"
import MessageSender from './feedComponents/messageSender/MessageSender'
function Feed() {
    return (
        <div className="Feed">
            <StoryReel/>
            <MessageSender/>
        </div>
    )
}

export default Feed
