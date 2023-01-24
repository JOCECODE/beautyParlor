import React, {MouseEvent} from 'react';
import Left from "./Left";
import Middle from "./Calendar";
import Right from "./Right";
import Footer from "./Footer";

const UserHomePage: React.FC = () => {
  const [activeClass, setActiveClass] = React.useState("left");

  const handleClick = (className: string) => {
    setActiveClass(className);
  }

  return (
    <> 

     <div className="drawer">
  <input id="my-drawer" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content">
    <label htmlFor="my-drawer" className="btn-ghost drawer-button inline-block"><span className="float-right ml-[78px] text-[29px]">Beauty Parlor</span> <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mt-[14px]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg></label>
    {/* <!-- Page content here --> */}
     {activeClass === 'left' ? <Left /> : null}
     {activeClass === 'middle' ? <Middle/> : null}
     {activeClass === 'right' ? <Right /> : null}
  {/* <NavbarAdmin/> */}
  <Footer/>

  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer" className="drawer-overlay"></label>
    <ul className="menu p-4 w-80 bg-base-100 text-base-content">
      {/* <!-- Sidebar content here --> */}
      <li><a>About Alyssa</a></li>
      <li><a>Privacy Policy</a></li>
      <li><a>How It Works</a></li>
      <li><a>Contact Us</a></li>
      <li><a>Dev Team</a></li>
      
    </ul>
  </div>
</div>

    <div className='btm-nav z-20'>
      {/* Left Button */}
  <button id="left" onClick={() => handleClick('left')} className={activeClass === 'left' ? 'active' : ''}>
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
  </button>
  {/* Middle Button Home */}
  <button id="middle" onClick={() => handleClick('middle')} className={activeClass === 'middle' ? 'active' : ''}>
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
  </button>
  {/* Rewards Page */}
  <button id="right" onClick={() => handleClick('right')} className={activeClass === 'right' ? 'active' : ''}>
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
  </button>
    </div>
    </>
  )
}

export default UserHomePage;