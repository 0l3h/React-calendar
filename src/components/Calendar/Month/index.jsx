import React from 'react';
import PropTypes from 'prop-types';
import Week from '../Week';
import {format, getWeeksInMonth, getWeek} from 'date-fns';
import './Month.scss';

const getWeeks = date => {
    const weeks = [];
    const firstDayOfMonth = new Date(date.getFullYear(), date.getMonth(), 1);
    const year = date.getFullYear();
    const firstWeek = getWeek(firstDayOfMonth);

    for(let i = firstWeek; i < firstWeek + getWeeksInMonth(date); i++) {
        weeks.push(<Week key={i} week={i} year={year}/>)
    }

    return weeks;
};

Month.propTypes = {
    date: PropTypes.instanceOf(Date).isRequired,
}

function Month({date}) {    
    return (
        <section>
            <table>
                <caption id='month-name'>{format(date, 'MMMM y')}</caption>
                <thead>
                    <tr id='weeks-name'>
                        <th>S</th>
                        <th>M</th>
                        <th>T</th>
                        <th>W</th>
                        <th>T</th>
                        <th>F</th>
                        <th>S</th>
                    </tr>
                </thead>
                <tbody>
                    {getWeeks(date)}
                </tbody>
            </table>
        </section>
    );
}

export default Month;