import React from "react";

const CurrentDate = (props) => {
    let currentDate = new Date();
    let dayName = ['Duminica', 'Luni', 'Marti', 'Miercuri', 'Joi', 'Vineri', 'Sambata'];
    let monthName = ['Ianuarie', 'Februarie', 'Aprilie', 'Mai', 'Iunie', 'Iulie', 'August', 'Septembrie', 'Octombrie', 'Noiembrie', 'Decembrie'];
    let currentDayNo = currentDate.getDate();


    return (
        <h5>{dayName[currentDate.getDay()] + ', '+ currentDayNo + ' ' + monthName[currentDate.getMonth() - 1]}</h5>
    )
}

export default CurrentDate;