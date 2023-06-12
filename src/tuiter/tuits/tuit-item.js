import React from "react";
import "./tuit.css";
import "../../vendors/fontawesome/css/all.css";
import {useDispatch} from "react-redux";
import {updateTuitThunk, deleteTuitThunk} from "../services/tuits-thunks";
import { FaHeart, FaRegHeart } from "react-icons/fa";
const TuitItem = (
 {
   tuit = {
   "topic": "Space",
   "userName": "SpaceX",
   "title": "100s of SpaceX Starships land on Mars after a 6 month journey. 1000s of Martian colonists being building Mars Base 1",
   "time": "2h",
   "image": "spacex.png",
   "liked": true,
   "replies": 123,
   "retuits": 432,
   "likes": 2345,
   "handle": "@spacex",
   "tuit": "You want to wake up in the morning and think the future is going to be great - and that’s what being a spacefaring civilization is all about. It’s about believing in the future and thinking that the future will be better than the past. And I can’t think of anything more exciting than going out there and being among the stars"
	}
 }
) => {
	const dispatch = useDispatch();
const deleteTuitHandler = (id) => {
  dispatch(deleteTuitThunk(id));
}

 return(
	<li class="list-group-item">
	<div class="row">
	<div className="col-1">
       <img className="rounded-circle" height={48} src={`/images/${tuit.image}`}/>
		
     </div>
        <div className="col-11">
            <div class="wd-poster-name">{tuit.userName}</div>
            <div class="wd-poster-info">{tuit.handle} - {tuit.time}</div>
			<i class="fa fa-times float-end wd-button-icon-grey" onClick={() => deleteTuitHandler(tuit._id)}></i>
            <div class="wd-float-done"></div>
            <div class="wd-post-text">{tuit.tuit}</div>
            <div class="wd-float-done"></div>

			

            <div class="wd-button-area">
                <a class="wd-button-link" href="#">
                    <i class="fa fa-comment wd-button-icon-grey"></i>
                    <div class="wd-button-text-grey">{tuit.replies}</div>
                </a>
                <a class="wd-button-link" href="#">
                    <i class="fa fa-retweet wd-button-icon-grey"></i>
                    <div class="wd-button-text-grey">{tuit.retuits}</div>
                </a>
                <a class="wd-button-link" href="#">
					{ tuit.liked ? 
					<><FaHeart
					  className="text-danger"
					  onClick={() =>
						dispatch(updateTuitThunk({ ...tuit, likes: tuit.likes - 1, liked: false }))
					  }
					/>
					<span className="ms-2">{tuit.likes}</span></> :
					<><FaRegHeart
					  className="text-danger"
					  onClick={() =>
						dispatch(updateTuitThunk({ ...tuit, likes: tuit.likes + 1, liked: true }))
					  }
					/>
					<span className="ms-2">{tuit.likes}</span></> }
                </a>
                <a class="wd-button-link" href="#">
                    <i class="fa fa-upload wd-button-icon-grey"></i>
                </a>
            </div>
            <div class="wd-float-done"></div>
			

        </div>
        <div class="wd-float-done"></div>
    </div>
	</li>
 );
};
export default TuitItem;