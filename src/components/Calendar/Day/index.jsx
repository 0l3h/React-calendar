import React from 'react';
import {format} from 'date-fns';
import './Day.scss'

function Day() {
    const currentDate = new Date();
    return (
        <section id='day'>
            <div>{format(currentDate, 'eeee')}</div>
            <div>{currentDate.getDate()}</div>
        </section>
    );
}

export default Day;