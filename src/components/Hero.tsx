import CreateAppointmentButton from "./CreateAppointmentButton"

const Hero: React.FC = () => {
    return(
      <>
      <div className="hero min-h-[380px]" style={{ backgroundImage: `url("https://wallpapercave.com/wp/wp7712146.jpg")` }}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
      <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <CreateAppointmentButton/>
    </div>
  </div>
</div>
      </>
    )
}

export default Hero;