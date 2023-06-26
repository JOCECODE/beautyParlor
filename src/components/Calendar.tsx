import React, { useState } from 'react';
import styled from 'styled-components';
import { string } from 'zod';

interface Props {
  // Optional props here
}

const CalendarContainer = styled.div`
  width: 100vw;
  height: 159vh;
  display: flex;
  flex-direction: column;

  .calendar-header {
    width: 90%;
    margin-right: 5%;
    margin-left: 5%;
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
    font-size: 24px;
  }

  .calendar-body {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(14%, 1fr));
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
    background-color: #00ff00;
    opacity: 0.3;
  }

  .parent-div {
    margin-top: 10%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    justify-items: center;
    align-items: center;
    text-align: center;
  }
`;

const ArrowIcon = styled.div`
  cursor: pointer;
  font-size: 32px;
`;

const ErrorMessage = styled.div`
color: red;
margin-top: 5px;
font-size: 14px;
`;

const Calendar: React.FC<Props> = (props) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedDay, setSelectedDay] = useState<String | null>(null);
  const [isHairCutSelected, setIsHairCutSelected] = useState(false);
  const [isHairColorSelected, setIsHairColorSelected] = useState(false);
  const [isHairStyleSelected, setIsHairStyleSelected] = useState(false);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState('');
  const [showDayError, setShowDayError] = useState(true);
  const [showTimeError, setShowTimeError] = useState(true);
  const [showServiceError, setShowServiceError] = useState(true);

  const handleTimeSlotClick = (timeSlot: string) => {
    setSelectedTimeSlot(timeSlot);
    setShowTimeError(false);
  };

  const handleHairCutToggle = () => {
  if (isHairCutSelected === false) {
    setIsHairCutSelected(true);
    setShowServiceError(false);
  }
  else if (isHairCutSelected === true) {
    setIsHairCutSelected(false);
    setShowServiceError(true);
  }
  };

  const handleHairColorToggle = () => {
    if (isHairColorSelected === false) {
      setIsHairColorSelected(true);
      setShowServiceError(false);
    }
    else if (isHairColorSelected === true) {
      setIsHairColorSelected(false);
      setShowServiceError(true);
    }
  };

  const handleHairStyleToggle = () => {
    if (isHairStyleSelected === false) {
      setIsHairStyleSelected(true);
      setShowServiceError(false);
    }
    else if (isHairStyleSelected === true) {
      setIsHairStyleSelected(false);
      setShowServiceError(true);
    }
  };


  const handlePrevMonth = () => {
    const prevMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() - 1);
    setCurrentDate(prevMonth);
  };

  const handleNextMonth = () => {
    const nextMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1);
    setCurrentDate(nextMonth);
  };

  const handleDayClick = (date: Date) => {
    const day = date.getDay();
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const selectedDay = daysOfWeek[date.getDay()];
 // Check if the clicked day is grayed out
  const className = date < new Date() ? 'gray' : '';
  if (className === 'gray') {
    return; // Do nothing if the day is grayed out
  }
    // do something with the date here
    setSelectedDay(selectedDay ? selectedDay : "");
    setSelectedDate(date);
    setShowDayError(false);
  };

  const renderDays = () => {
    const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  
    // Render the row for days of the week
    const dayOfWeekRow = daysOfWeek.map((day) => (
      <div key={day} className="day">
        {day}
      </div>
    ));
  
    const days = [];
    const currentMonth = currentDate.getMonth();
    const currentYear = currentDate.getFullYear();
    const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();
  
    const today = new Date(); // Get the current date
  
    // Determine the number of days in the previous month
    const previousMonth = currentMonth === 0 ? 11 : currentMonth - 1;
    const previousYear = currentMonth === 0 ? currentYear - 1 : currentYear;
    const lastDayOfPreviousMonth = new Date(previousYear, previousMonth + 1, 0).getDate();
  
    // Render empty cells for the days before the first day of the current month
    for (let i = 0; i < firstDayOfMonth; i++) {
      const date = new Date(previousYear, previousMonth, lastDayOfPreviousMonth - i);
      const className = date < today ? 'gray' : '';
      days.push(
        <div key={`prev-day-${i}`} className={`day ${className}`}>
          {/* Display an empty div instead of the number */}
        </div>
      );
    }
  
    // Render days of the current month
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
    for (let i = 1; i <= daysInMonth; i++) {
      const date = new Date(currentYear, currentMonth, i);
      const className = date < today ? 'gray' : '';
      const isCurrentDay = date.toDateString() === today.toDateString();
      const isSelected = selectedDate && date.toDateString() === selectedDate.toDateString();
      const onClickHandler = isCurrentDay ? undefined : () => handleDayClick(date);
  
      days.push(
        <div
          key={`current-day-${i}`}
          className={`day ${className} ${isSelected ? 'green' : ''}`}
          onClick={onClickHandler}
          style={isCurrentDay ? { backgroundColor: 'orange' } : isSelected ? { backgroundColor: '#c7ecc5' } : {}}
        >
          {i}
        </div>
      );
    }
  
    // Render empty cells for the days after the last day of the current month
    const lastDayOfMonth = new Date(currentYear, currentMonth, daysInMonth).getDay();
    for (let i = 1; i <= 6 - lastDayOfMonth; i++) {
      const date = new Date(currentYear, currentMonth + 1, i);
      const className = date < today ? 'gray' : '';
      days.push(
        <div key={`next-day-${i}`} className={`day ${className}`}>
          {/* Display an empty div instead of the number */}
        </div>
      );
    }
  
    return [dayOfWeekRow, ...days];
  };
  
  
  

const isAppointmentReady = () => {
  return selectedDate !== null && (isHairCutSelected || isHairColorSelected || isHairStyleSelected) && selectedTimeSlot !== '';
};

const handleBookAppointment = () => {
  if (selectedDate === null) {
    setShowDayError(true);
  }

  if (selectedTimeSlot === '') {
    setShowTimeError(true);
  }

  if (!isHairCutSelected && !isHairColorSelected && !isHairStyleSelected) {
    setShowServiceError(true);
  }
};

return (
<CalendarContainer>
      <div className="calendar-header">
        <ArrowIcon onClick={handlePrevMonth}>
          <span>&#8592;</span>
        </ArrowIcon>
        <div className="current-month">
          {currentDate.toLocaleString('default', { month: 'long', year: 'numeric' })}
        </div>
        <ArrowIcon onClick={handleNextMonth}>
          <span>&#8594;</span>
        </ArrowIcon>
      </div>
      <div className="calendar-body">{renderDays()}</div>
        {/* Hair Cut, or HairStyle or HairColor */}
        <div className="parent-div">
        <div className="child-div">
          <input
            id="cut"
            type="checkbox"
            className="toggle toggle-md"
            checked={isHairCutSelected}
            onChange={handleHairCutToggle}
          />
          <h3>Hair-Cut</h3>
        </div>
        <div className="child-div">
          <input
            id="color"
            type="checkbox"
            className="toggle toggle-md"
            checked={isHairColorSelected}
            onChange={handleHairColorToggle}
          />
          <h3>Hair-Color</h3>
        </div>
        <div className="child-div">
          <input
            id="style"
            type="checkbox"
            className="toggle toggle-md"
            checked={isHairStyleSelected}
            onChange={handleHairStyleToggle}
          />
          <h3>Hair-Style</h3>
        </div>

    </div>
     {/* time slots input */}
     <div className="parent-div">
        <div className="child-div">
          <button
            id="1pm"
            className={`btn bg-orange-400 ${selectedTimeSlot === '1pm' ? 'selected' : ''}`}
            onClick={() => handleTimeSlotClick('1:00 p.m.')}
          >
            1:00 p.m.
          </button>
        </div>
        <div className="child-div">
          <button
            id="4pm"
            className={`btn bg-orange-400 ${selectedTimeSlot === '4pm' ? 'selected' : ''}`}
            onClick={() => handleTimeSlotClick('4:00 p.m.')}
          >
            4:00 p.m.
          </button>
        </div>
        <div className="child-div">
          <button
            id="7pm"
            className={`btn bg-orange-400 ${selectedTimeSlot === '7pm' ? 'selected' : ''}`}
            onClick={() => handleTimeSlotClick('7:00 p.m.')}
          >
            7:00 p.m.
          </button>
        </div>
      </div>

    <div className="p-4">
    {showDayError && <ErrorMessage>Please select a day</ErrorMessage>}
{showTimeError && <ErrorMessage>Please select a time</ErrorMessage>}
{showServiceError && <ErrorMessage>Please select at least one service</ErrorMessage>}
      <h1 className='text-5xl font-bold mt-6'>{selectedDay}</h1>
    <h3 className='text-3xl font-semibold mt-4'> {isHairCutSelected ? "Hair-Cut," : ""} {isHairColorSelected ? "Hair-Color," : ""} {isHairStyleSelected ? "Hair-Style" : ""}</h3>
    <h4 className="text-2xl text-left mt-2">{selectedTimeSlot? `at ${selectedTimeSlot}` : ""}</h4>
  


    <div className="parent-div">
      <div className="child-div"></div>
      <div className="child-div"></div>
      <div className="child-div  mr-8">
      {isAppointmentReady() ? (
              <button id="bookAppointment" className="btn bg-orange-400" onClick={handleBookAppointment}>
                Book Appointment
              </button>
            ) : (
              <button id="bookAppointment" className="btn bg-orange-400" disabled>
                Book Appointment
              </button>
            )}
          </div>
        </div>
    </div>
    
    </CalendarContainer>
);
};

export default Calendar;
