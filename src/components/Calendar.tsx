import React, { useState } from 'react';
import styled from 'styled-components';

interface Props {
  // Optional props here

}

const Calendar: React.FC<Props> = (props) => {

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
  `;
  
  const [currentDate, setCurrentDate] = useState(new Date());

  const handlePrevMonth = () => {
    const prevMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() - 1);
    setCurrentDate(prevMonth);
  };

  const handleNextMonth = () => {
    const nextMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1);
    setCurrentDate(nextMonth);
  };

  const renderDays = () => {
    const days = [];
    const currentMonth = currentDate.getMonth();
    const currentYear = currentDate.getFullYear();
    const today = new Date();
    const lastDayOfMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

    for (let i = 1; i <= lastDayOfMonth; i++) {
      const date = new Date(currentYear, currentMonth, i);
      const className = date.getTime() < today.getTime() ? 'gray' : '';
      days.push(
        <div key={i} className={`day ${className}`}>
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
