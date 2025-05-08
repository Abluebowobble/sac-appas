import React from "react";
import LoadingScreen from "./LoadingScreen";
import Home from "./Home";
import { useState } from "react";

export default function ScreenManager() {
  const [loading, setLoading] = useState(true);
  const [animate, setAnimate] = useState(false);

  return (
    <div>
      <div>{loading ? <LoadingScreen /> : <Home />}</div>
      <div>
        {loading && (
          <div
            className="fixed top-0 left-0 w-screen h-screen z-10"
            onClick={() => {
              setAnimate(true);
              setTimeout(() => setLoading(false), 2000);
              setTimeout(() => setAnimate(false), 5000);
            }}
          ></div>
        )}
      </div>
      <div>
        {animate && (
          <img
            src="/black.png"
            className="animate-tocorner scale-1 -translate-x-50"
          />
        )}
      </div>
    </div>
  );
}
