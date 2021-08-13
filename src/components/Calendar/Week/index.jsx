import React from 'react';
import PropTypes from 'prop-types';
import { parse, addDays} from 'date-fns';
import CalendarDay from '../CalendarDay';
import './Week.scss';

Week.propTypes = {
    week: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired
}

/** Generates markup constisting of seven days
 * @param {Number} week first day of the week 
 * @param {Number} year current year 
 * @returns array of days in the week
 */
const getDaysOfWeek = (week, year) => {
    const startOfWeek = parse(`${week} ${year}`, 'w Y', new Date());
    const days = [];
    for(let i = 0; i < 7; i++) {
        const dateIndex = addDays(startOfWeek, i);
        days.push(<CalendarDay key={i} day={dateIndex.getDate()} date={dateIndex}/>);
    }

    return days;
}

function Week({week, year}) {
    return (  
        <tr>
            {getDaysOfWeek(week, year)}
        </tr>
    )
}

export default Week;