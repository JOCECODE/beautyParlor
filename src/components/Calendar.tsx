import React, { useState } from 'react';
import styled from 'styled-components';

interface Props {
  // Optional props here

}

const CalendarContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

.calendar-header {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
}

.prev-month,
.next-month {
  cursor: pointer;
}

.current-month {
  text-align: center;
}

.calendar-body {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20%, 1fr));
  justify-content: space-between;
  align-items: center;
  padding: 10px;
}

.day {
  width: 100%;
  height: 80px;
  text-align: center;
  line-height: 80px;
  border: 1px solid #ddd;
}

.gray {
  color: #ddd;
  background-color: #f9f9f9;
}
.isSelected {
  color: black;
  background-color: #00FF00;
  opacity: .3;
}
  `;

const Calendar: React.FC<Props> = (props) => {

  
  
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const handlePrevMonth = () => {
    const prevMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() - 1);
    setCurrentDate(prevMonth);
  };

  const handleNextMonth = () => {
    const nextMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1);
    setCurrentDate(nextMonth);
  };

  const handleDayClick = (date:Date) => {
    // do something with the date here
    console.log("clicked on: ", date);
    setSelectedDate(date);
    console.log(selectedDate);
  };


  const renderDays = () => {
    const days = [];
    const currentMonth = currentDate.getMonth();
    const currentYear = currentDate.getFullYear();
    const today = new Date();
    const lastDayOfMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
    for (let i = 1; i <= lastDayOfMonth; i++) {
      const date = new Date(currentYear, currentMonth, i);
      const isSelected = date.getTime() === (selectedDate && selectedDate.getTime());
      const className = date.getTime() < today.getTime() ? 'gray' : isSelected ? 'green' : '';
      days.push(
        <div key={i} className={`day ${className} ${isSelected ? 'isSelected' : ''}`} onClick={() => handleDayClick(date)} onTouchStart={() => handleDayClick(date)}>
          {i}
        </div>
      );
    }
    return days;
  };



  return (
    <CalendarContainer>
      <div className="calendar-header">
        <div className="prev-month" onClick={handlePrevMonth}>
          &lt;
        </div>
        <div className="current-month">
          {currentDate.toLocaleString('default', { month: 'long' })} {currentDate.getFullYear()}
        </div>
        <div className="next-month" onClick={handleNextMonth}>
          &gt;
        </div>
      </div>
      <div className="calendar-body">{renderDays()}</div>
    </CalendarContainer>
  );
};

export default Calendar;
