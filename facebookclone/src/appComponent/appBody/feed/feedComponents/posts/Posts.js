import React from 'react'
import "./Posts.css"
import { Avatar } from '@material-ui/core'
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import AddCommentIcon from '@material-ui/icons/AddComment';
import ShareIcon from '@material-ui/icons/Share';
function Posts({profilePic, image, userName, timestamp, message}) {
    return (
        <div className="Posts">
            <div className="Posts__top">
                <Avatar
                    src={profilePic}
                    className="Posts__avatar"
                />
                <div className="Posts__topInfo">
                    <h3>{userName}</h3>
                    <p>{timestamp}</p>
                </div>
            </div>
            <div className="Posts__bottom">
                <p>{message}</p>
            </div>
            <div className="Posts__image">
                <img src={image} alt=""/>
            </div>
            <div className="Posts__options">
                <div className="Posts__option">
                    <ThumbUpIcon/>
                    <h3>Like</h3>
                </div>
                <div className="Posts__option">
                    <AddCommentIcon/>
                    <h3>Comment</h3>
                </div>
                <div className="Posts__option">
                    <ShareIcon/>
                    <h3>Share</h3>
                </div>
            </div>
        </div>
    )
}

export default Posts
