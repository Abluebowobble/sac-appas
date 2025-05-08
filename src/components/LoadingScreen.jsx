import {useEffect} from "react"
import { TypeAnimation } from 'react-type-animation';

export default function LoadingScreen() {
    useEffect(() => {
        console.log(`Load IS MOUNTED`)
      }, []);
    return (
            <div className="animate-fadein relative w-full h-screen">
      <div
        className=" bg-linear-to-r from-yellow-400 to-amber-700 w-[20vw] h-xl rounded-[1vw] font-calsans px-6 py-4 absolute bottom-3 right-3 text-center"
        ><div className="text-2xl">Enter
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
      repeat={Infinity}
      preRenderFirstString={true}
      cursor={false}
      deletionSpeed={99}
    /></div>
    <div className="text-s">(click screen to continue)</div>
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
