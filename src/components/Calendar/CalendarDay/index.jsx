import React from 'react';
import PropTypes from 'prop-types';
import { getDayOfYear, isEqual } from 'date-fns';
import { lastDayOfMonth } from 'date-fns/esm';
import './CalendarDay.scss';

CalendarDay.propTypes = {
    day: PropTypes.number.isRequired,
    date: PropTypes.instanceOf(Date).isRequired,
}

/** Compares given date in the calendar with the current date
 * @param {Date} date calendar date
 * @returns result of comparison 
 */
function isEqualToCurrentDay(date) {
    return isEqual(getDayOfYear(date), getDayOfYear(new Date()));
}

function CalendarDay({day, date}) {
    const lastDay = lastDayOfMonth(new Date());
    const style = {
        color: "red", 
        borderRadius: "50%", 
        boxShadow: "0 0 0px .3rem red",
    };

    return (
        <td style={isEqualToCurrentDay(date)? style : null}>
            {getDayOfYear(date) <= getDayOfYear(lastDay)? day : null}    
        </td>
    )
}

export default CalendarDay;