import React from "react";
import s from './Post.module.scss'
import LikeIcon from '../../../../image/like_post.svg'

const Post = (props) => {
    return (
        <div>
            <div className={s.profile__messages}>
                <div className={s.profile__messages_block}>
                    <div className={s.profile__messages_icon}>
                    </div>
                    <div className={s.profile__messages_text}>
                        <span className={s.message}>{props.message}</span>
                        <div className= {s.likes}>
                            <img src={LikeIcon} alt="Like" />
                            <span>{props.likes}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Post
