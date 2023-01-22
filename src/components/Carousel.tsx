const Carousel: React.FC = () => {
  return(
    <>
    
    {/* Carousel */}
    <div className="carousel w-full min-h-[300px]">
  <div id="slide1" className="carousel-item relative w-full">
    <img src="https://img.freepik.com/free-vector/sign-up-concept-illustration_114360-7865.jpg?w=740&t=st=1671946106~exp=1671946706~hmac=5316fa8283cc49105b28aa9f5b8ea0d5711ade09aadba5038a78f4cf97221cc8" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img src="https://img.freepik.com/free-vector/businessman-planning-events-deadlines-agenda_74855-6274.jpg?w=996&t=st=1671945800~exp=1671946400~hmac=e71655a15cf274e5e6b44a47e164330d6e60d9e825fdc4144f26eb2c55f4cb7f" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src="https://img.freepik.com/free-vector/man-holding-clock-time-management-concept_23-2148823171.jpg?w=740&t=st=1671946050~exp=1671946650~hmac=4a8ca7b6d6586ddd8a713ab67e1e646f2b68cd34fa6a0094a780c882027e0409" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div> 
  
  {/* <div id="slide4" className="carousel-item relative w-full">
    <img src="https://placeimg.com/800/200/arch" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div> */}
</div>
<div className='mt-3 text-3xl font-bold text-center'>How It Works</div>


    </>
  )
}

export default Carousel;