import React from "react";
import s from './MyPosts.module.scss'
import Post from "./Post/Post";

const MyPosts = (props) => {
    let postDataEl = props.postData.map( el => <Post message={el.message} likes={el.likesCount} />)

    let newPostEl = React.createRef();

const alertFn = () => {
    debugger;
    let newPostText =  newPostEl.current.value;
    alert(newPostText);

}

    return (
        <div>
            <div className={s.profile__post}>
                <h3 className={s.profile__post_title}>
                    <span>My post</span>
                </h3>
                <div className={s.profile__post_add}>
                    <textarea ref={newPostEl} name="Profile_news" id="newPost" cols="30" rows="10" className={s.profile__post_add_area} placeholder="Your new post..."></textarea>
                    <div className={s.profile__post_add_btn}>
                        <span onClick={ alertFn } >Send</span>
                    </div>
                </div>
            </div>
            {postDataEl}
        </div>
    )
}

export default MyPosts
