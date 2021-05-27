import React from 'react';
import '../styles/Avatar.css';

/**
 * Con destructuracion
 */
export const Avatar = ({ name, src }) => {
    return (
        <div className="ava">
            <picture>
                <img src={src}/>
                <h1>{name}</h1>
            </picture>
        </div>
    )
}