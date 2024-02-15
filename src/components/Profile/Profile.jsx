import React from "react";
import ProfileIcon from '../../image/profile-page-icon.svg'
import s from './Profile.module.scss'
import MyPosts from "./myPosts/MyPosts";

const Profile = (props) => {
    return (
        <section className={s.profile}>
            <div className={s.profile__container}>
                <div className={s.profile__image}></div>
                <div className={s.profile__page}>
                    <div className={s.profile__page_img}>
                        <img src={ProfileIcon} alt={s.profile + s.icon} />
                    </div>
                    <div className={s.profile__info}>
                        <h3 className={s.profile__info_name}>
                            <span>{props.postInfo.name}</span>
                        </h3>
                        <div className={s.profile__info_birthDate}>
                            <p>BirthDay: <span>{props.postInfo.birthDate}</span></p>
                        </div>
                        <div className={s.profile__info_city}>
                            <p>Town: <span>{props.postInfo.town}</span></p>
                        </div>
                        <div className={s.profile__info_education}>
                            <p>Education: <span>{props.postInfo.education}</span></p>
                        </div>
                        <div className={s.profile__info_address}>
                            <p>Address: <span>{props.postInfo.address}</span></p>
                        </div>
                    </div>
                </div>
                <MyPosts postData={props.postData} />
            </div>
        </section>
    )
}

export default Profile
