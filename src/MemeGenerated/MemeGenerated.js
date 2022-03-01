import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import styles from './styles.module.css'

export const MemeGenerated = () => {

    const history = useHistory();
    const location = useLocation();
    const url = new URLSearchParams(location.search).get('url');


    return (
        <div className={styles.container}>
            <button onClick={() => history.push('/')} className={styles.home}>
                Make More Memes
            </button>
            {url && <img src={url}/>}
        </div>
    )
}

