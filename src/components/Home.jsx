import {useEffect} from 'react';
import { TypeAnimation } from 'react-type-animation';
import Info from './Info';
import Button from './Button';

export default function Home () {
  useEffect(() => {
    console.log(`CARD IS MOUNTED`)
  }, []);

  return (
    <>
    <div className="relative w-full h-screen">
      <iframe 
          src='https://my.spline.design/liquidgold-LGBaObWfXzgi1ZyNRxaDanXw/' 
          frameborder='0' 
          className="h-screen w-screen flex flex-wrap"
          >
      </iframe>
    </div>
    <div
      className=
          "fixed top-0 left-0 w-screen h-screen" 
      style={{ cursor: "url('/smallerduckcursor.png'), auto" }}
    >
      <div className=
      "justify-self-center py-[10vh]"
      >
        <Info /><br/>
        <span className="text-amber-700 text-9xl md:text-[250px] font-dorsa text-shadow-lg/20">Rubber Duck Gala</span>
        <br/> 
        <span className="text-3xl font-calsans text-white text-shadow-lg"><TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Get ready to quack it up',
        4000, // wait 1s before replacing "Mice" with "Hamsters"
        'Get ready to make lasting memories',
        4000,
        'Get ready to have the best time of your life',
        4000,
        'Get ready to waddle in style',
        4000
      ]}
      wrapper="span"
      speed={50}
      repeat={Infinity}
      preRenderFirstString={false}
    /></span>
    <br/>
    <br/>
    <br/>
    <Button />
      </div>
      <div
        className="bg-amber-700 w-[20vw] h-xl font-calsans px-2 py-3 absolute bottom-3 right-3 text-center"
        ><div className="text-s">Made by: Isabella Deng
        </div></div>
    </div>
    </>
  )
}
//className="cursor-pointer"


