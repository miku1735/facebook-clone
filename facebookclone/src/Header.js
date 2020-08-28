import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from "@material-ui/icons/Home";
import FlagIcon from "@material-ui/icons/Flag";
import StorefrontIcon from "@material-ui/icons/Storefront";
import SupervisedUserCircleIcon from "@material-ui/icons/SupervisedUserCircle";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import AddIcon from "@material-ui/icons/Add";
import { Avatar, IconButton } from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive";
import ForumIcon from '@material-ui/icons/Forum';

function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/321px-Facebook_f_logo_%282019%29.svg.png"
          alt=""
        ></img>
        <div className="header__input">
          <SearchIcon></SearchIcon>
          <input placeholder="Search Facebook" type="text"></input>
        </div>
      </div>
      <div className="header__center">
        <div className="header__option
        header__option--active">
          <HomeIcon fontSize="large"></HomeIcon>
        </div>
        <div className="header__option">
          <FlagIcon fontSize="large"></FlagIcon>
        </div>
        <div className="header__option">
          <SubscriptionsIcon></SubscriptionsIcon>
        </div>
        <div className="header__option">
          <StorefrontIcon fontSize="large"></StorefrontIcon>
        </div>
        <div className="header__option">
          <SupervisedUserCircleIcon fontSize="large"></SupervisedUserCircleIcon>
        </div>
      </div>
      <div className="header__right">
        <div className="header__info">
          <Avatar></Avatar>
          <h4>Mayank</h4>
        </div>
        <IconButton>
          <AddIcon />
        </IconButton>
        <IconButton>
            <ForumIcon/>
        </IconButton>
        <IconButton>
          <NotificationsActiveIcon />
        </IconButton>
        <IconButton>
          <ExpandMoreIcon />
        </IconButton>
      </div>
    </div>
  );
}

export default Header;
