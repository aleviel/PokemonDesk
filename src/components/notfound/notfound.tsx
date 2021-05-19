import React from 'react';
import { navigate } from 'hookrouter';
import Button from '../button';
import { LinkEnum } from '../../routes';

import TeamR from './assets/notfound.png';

import Styles from './notfound.module.scss';

const NotFound = () => {
    return (
        <div className={Styles.root}>
            <div className={Styles.wrapper}>
                <div className={Styles.text}> 404</div>
            </div>
            <div className={Styles.layer}>
                <img src={TeamR} alt="TEAM R" />
                <div className={Styles.subTitle}>
                    <span>The rocket team </span>has won this time.
                </div>
                <Button
                    onClick={() => {
                        navigate(LinkEnum.HOME);
                    }}
                    color="yellow">
                    RETURN
                </Button>
            </div>
        </div>
    );
};

export default NotFound;
