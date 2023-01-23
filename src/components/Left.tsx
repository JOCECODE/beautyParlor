

export default function Left() {
    
    let stars = 2;
    let value = stars / 3 * 100;
    
  return (
    <>
    <h1 className="text-4xl font-bold text-center p-5">{stars}/3 Stars</h1>
    <div className="text-center p-5">
    
        
    <div className="radial-progress" style={{ "--value": `${value}`, "--size": "10rem", "--thickness": "5px" }}>
        
        <div className="rating rating-lg">
  <input type="" name="rating-8" className="mask mask-star-2 bg-orange-400" readOnly/>
  <input type="" name="rating-8" className="mask mask-star-2 bg-orange-400" readOnly />
  <input type="" name="rating-8" className="mask mask-star-2 bg-orange-100" readOnly/>
</div>
        
        </div>

    </div>
    <p className="text-center px-20">Collect 3 Stars and redeem a <span className="text-lg font-bold text-orange-600">FREE</span> haircut.</p>
    </>
  )
}
