import React from "react";
import classes from"./Footer.module.scss"

const Footer = () => {
    return (
        <footer className={classes.footer}>
            <div className={classes.footer__container}>
                <div className={classes.footer__title}>
                    <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat ducimus consequatur, quae voluptate assumenda dignissimos molestias molestiae nihil, recusandae eos quia, libero culpa cumque iure. Obcaecati.</h2>
                </div>
            </div>
        </footer>
    )
}

export default Footer;