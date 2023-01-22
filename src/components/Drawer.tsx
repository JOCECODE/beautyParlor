import Hero from "../components/Hero";
import Carousel from "../components/Carousel"; 
import Footer from "../components/Footer"; 

const Drawer: React.FC = () => {
    return(
        <>
    <div className="drawer">
  <input id="my-drawer" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content">
    <label htmlFor="my-drawer" className="btn-ghost drawer-button inline-block"><span className="float-right ml-[78px] text-[29px]">Beauty Parlor</span> <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mt-[14px]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg></label>
    {/* <!-- Page content here --> */}
    <Hero/>
  <Carousel/>
  <Footer/>
    
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer" className="drawer-overlay"></label>
    <ul className="menu p-4 w-80 bg-base-100 text-base-content">
      {/* <!-- Sidebar content here --> */}
      <li><a>About Alyssa</a></li>
      <li><a>Privacy Policy</a></li>
      
    </ul>
  </div>
</div>


    </>
    )
}

export default Drawer;