import React, { useState } from 'react';
import styled from 'styled-components';

interface Props {
  // Optional props here

}

const CalendarContainer = styled.div`
  width: 100vw;
  height: 140vh;
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
  background-color: #00FF00;
  opacity: .3;
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
   const dater = new Date();
    // do something with the date here
    console.log("clicked on: ", date);
    // console.log(date.toLocaleTimeString());
    // console.log(date.toDateString().split(" "));
    // console.log(dater.toLocaleTimeString());
    setSelectedDate(date);
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
      {/* Hair Cut, or HairStyle or HairColor */}
        <div className="parent-div">
      
      <div className="child-div">
        <input id="cut" type="checkbox" className="toggle toggle-md" />
        <h3>Hair-Cut</h3>

    {/* <svg xmlns="http://www.w3.org/2000/svg" fill='orange' stroke='black' width="48" height="48" viewBox="0 0 26 24"><path d="M17.5 12.5c0 .828-.56 1.5-1.25 1.5s-1.25-.672-1.25-1.5.56-1.5 1.25-1.5 1.25.672 1.25 1.5zm-7.75-1.5c-.69 0-1.25.672-1.25 1.5s.56 1.5 1.25 1.5 1.25-.672 1.25-1.5-.56-1.5-1.25-1.5zm3.25 8.354c2.235 0 3-2.354 3-2.354h-6s.847 2.354 3 2.354zm13-6.75c0 2.865-.791 5.778-1.933 8.243-.542 1.169-1.163 2.238-1.817 3.153l-3.796-1.917c-1.556 1.187-3.37 1.917-5.454 1.917-1.993 0-3.825-.749-5.408-1.941l-3.842 1.941c-.654-.915-1.275-1.984-1.817-3.153-1.142-2.465-1.933-5.378-1.933-8.243 0-7.59 5.281-12.604 13-12.604s13 5.014 13 12.604zm-5.669 4.285c.123-.202.313-.354.536-.43 2.106-.713 2.57-3.529 1.802-4.746-6.576-.39-10.89-3.363-12.669-6.322-2.257 5.063-5.078 6.628-6.863 6.795-.482 1.714.322 3.706 1.996 4.273.224.076.413.228.536.43 1.708 2.83 4.015 5.111 7.331 5.111 3.318 0 5.624-2.284 7.331-5.111z"/></svg> */}
    
  </div>
      <div className="child-div">
        <input id="color" type="checkbox" className="toggle toggle-md" />
        <h3>Hair-Color</h3>
        {/* <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24"><path d="M12.026 14.116c-3.475 1.673-7.504 3.619-8.484 4.09-1.848.889-3.542-1.445-3.542-1.445l8.761-4.226 3.265 1.581zm7.93 6.884c-.686 0-1.393-.154-2.064-.479-1.943-.941-2.953-3.001-2.498-4.854.26-1.057-.296-1.201-1.145-1.612l-14.189-6.866s1.7-2.329 3.546-1.436c1.134.549 5.689 2.747 9.614 4.651l.985-.474c.85-.409 1.406-.552 1.149-1.609-.451-1.855.564-3.913 2.51-4.848.669-.321 1.373-.473 2.054-.473 2.311 0 4.045 1.696 4.045 3.801 0 1.582-.986 3.156-2.613 3.973-1.625.816-2.765.18-4.38.965l-.504.245.552.27c1.613.789 2.754.156 4.377.976 1.624.819 2.605 2.392 2.605 3.97 0 2.108-1.739 3.8-4.044 3.8zm-2.555-12.815c.489 1.022 1.876 1.378 3.092.793 1.217-.584 1.809-1.893 1.321-2.916-.489-1.022-1.876-1.379-3.093-.794s-1.808 1.894-1.32 2.917zm-3.643 3.625c0-.414-.335-.75-.75-.75-.414 0-.75.336-.75.75s.336.75.75.75.75-.336.75-.75zm6.777 3.213c-1.215-.588-2.604-.236-3.095.786-.491 1.022.098 2.332 1.313 2.919 1.215.588 2.603.235 3.094-.787.492-1.021-.097-2.33-1.312-2.918z"/></svg>
       */}
      </div>
      <div className="child-div">
        <input id="style" type="checkbox" className="toggle toggle-md" />
        <h3>Hair-Style</h3>
    {/* <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 26"><path d="M16.5 14.492c0 .828-.56 1.5-1.25 1.5s-1.25-.671-1.25-1.5.56-1.5 1.25-1.5 1.25.672 1.25 1.5zm-7.75-1.5c-.69 0-1.25.672-1.25 1.5s.56 1.5 1.25 1.5 1.25-.672 1.25-1.5-.56-1.5-1.25-1.5zm3.25 8.354c2.235 0 3-2.354 3-2.354h-6s.847 2.354 3 2.354zm12-6.041c0 1.765-.985 3.991-3.139 4.906-2.348 3.731-5.484 5.781-8.861 5.781-3.377 0-6.513-2.05-8.862-5.781-2.153-.915-3.138-3.141-3.138-4.906 0-1.472.387-2.937 1.682-3.636-.377-2.311-.117-6.176 4.193-7.593 1.031-1.99 3.125-4.084 6.125-4.084s5.094 2.094 6.125 4.083c4.31 1.418 4.57 5.282 4.193 7.594 1.295.699 1.682 2.164 1.682 3.636zm-2.176-1.252c-4.687-.258-6.833-4.66-7.241-7.394-1.167 6.333-9 1.792-9.896 9.052-.886-.467-1.715-1.308-2.215-2.159-.996.997-.54 4.154 1.661 4.899.224.076.413.228.535.43 1.991 3.296 4.595 5.111 7.332 5.111s5.34-1.815 7.331-5.111c.122-.202.312-.354.535-.43 1.771-.599 2.517-2.769 1.958-4.398z"/></svg>
     */}
    </div>
   
    </div>
      {/* time slots input */}
      <div className="parent-div">
      <div className="child-div"><button className="btn bg-orange-400">1:00 p.m.</button></div>
      <div className="child-div"><button className="btn bg-orange-400">4:00 p.m.</button></div>
      <div className="child-div"><button className="btn bg-orange-400">7:00 p.m.</button></div>
    </div>

    <div className="p-4">
      <h1 className='text-5xl font-bold mt-6'>Wednesday,</h1>
    <h3 className='text-3xl font-semibold mt-4'> Hair Cut, Color, and Style</h3>
    <h4 className='text-2xl text-left mt-2'> at 4:00 p.m.</h4>

    <div className="parent-div">
      <div className="child-div"></div>
      <div className="child-div"></div>
      <div className="child-div  mr-8"><button className="btn bg-orange-400">Book Appointment</button></div>
    </div>
    </div>
    </CalendarContainer>
  );
};

export default Calendar;
