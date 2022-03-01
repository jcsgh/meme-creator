import React, { useEffect } from 'react';

export const Meme = () => {

    useEffect(() => {
        fetch('https://api.imgflip.com/get_memes')
    }, [])

    return(
        <>Hello</>
    )
};