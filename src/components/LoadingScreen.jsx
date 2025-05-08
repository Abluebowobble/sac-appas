import {useEffect, useState} from "react"
import { TypeAnimation } from 'react-type-animation';

export default function LoadingScreen() {
    const [loadText, setLoadText] = useState(<div className="text-s md:text-2xl">Loading
      <TypeAnimation
    sequence={[
      '',
      500, 
      '.',
      500,
      '..',
      500,
      '...',
      500
    ]}
    wrapper="span"
    speed={50}
    repeat={10}
    preRenderFirstString={true}
    cursor={false}
    deletionSpeed={99}
  /></div>);
    useEffect(() => {
      const timer = setTimeout(() => {
        setLoadText(<div><span className="text-s md:text-2xl">Done!</span><br/><span className="text-xs md:text-2xl">Click anywhere to continue.</span></div>);
      }, 10000);
      
      return () => clearTimeout(timer);
      }, []);

    return (
            <div className="animate-fadein relative w-full h-screen">
      <div
        className=" bg-linear-to-r from-yellow-400 to-amber-700 w-[20vw] h-xl rounded-[1vw] font-calsans px-2 md:px-6 py-3 md:py-4 absolute bottom-3 right-3 text-center"
        >{loadText}
    </div>
    <div>
            <iframe
            src='https://my.spline.design/tvatimedoor-X8iBN9wMxO31OMEAVuHtgtPy/' 
            frameborder='0' 
            className="h-screen w-screen flex flex-wrap"
            ></iframe>
    </div>

    </div>
    )
}
