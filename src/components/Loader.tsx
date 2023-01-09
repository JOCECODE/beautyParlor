import { useSpring, animated } from "@react-spring/web";
import { useState, useEffect } from "react";

const Loader: React.FC = () => {
//      const props = useSpring({
//     from: { opacity: 0 },
//     at: { opacity: .5},
//     to: { opacity: 1 },
    
//     // in mili seconds 1000 = 1 second
//     config: { duration: 3000 },
//   });

//   return (
//     <animated.div className="flex items-center justify-center h-screen w-screen" style={props}>
//       {/* content goes here */}
//       <p className="text-6xl">What's Gucci!</p>
//     </animated.div>
//   );
const animation1 = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 2000},
  })
  const animation2 = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    delay: 750,
    config: { duration: 1500},
  })

  return (
    <div className="flex items-center justify-center h-screen w-screen">
      <animated.div  style={{...animation1}}>
       
       <p className="text-6xl">Hello </p>
     </animated.div>

     <animated.div style={{...animation2}}><p className="text-orange-600 text-6xl ml-2">There!</p></animated.div>
    </div>
  )
}
export default Loader;