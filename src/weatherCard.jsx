import { useState, useEffect } from 'react'
import './weatherCard.css'


function weatherCard() {
    return (
        <div className='weather-card'>
            <h2>{title}</h2>
        </div>
    );
}


export default weatherCard;