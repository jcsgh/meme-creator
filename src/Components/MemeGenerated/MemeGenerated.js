import React, { useState } from 'react';
import styles from './styles.module.css';
import { useHistory, useLocation } from 'react-router-dom';
import { useClipboard } from 'use-clipboard-copy';

export const MemeGenerated = () => {

  const [copied, setCopied] = useState(false);
  const [favorite, setFavorite] = useState(false);

  const clipboard = useClipboard();
  const history = useHistory();
  const location = useLocation();
  const url = new URLSearchParams(location.search).get('url');

  const copyLink = () => {
    clipboard.copy(url);
    setCopied(true);
  };

  const Favorite = () => {
    setFavorite(true)
  }

  return(
    <div className={styles.container}>
      <button onClick={() => history.push('/')} className={styles.home}>
        Make More Memes
      </button>
      { url && <img alt='meme' src={url} /> }
      <button onClick={copyLink} className={styles.copy}>
        {copied ? 'Link copied!' : 'Copy link'}
      </button>
      <button onClick={Favorite} className={styles.fav}>
        {favorite ? 'Added to Favorites!' : 'Add to Favorites'}
      </button>
    </div>
  );
};