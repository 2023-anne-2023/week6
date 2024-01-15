import { useState, useEffect } from "react";

export default function App() {
  const [cookies, setCookies] = useState(0);
  const [cps, setCps] = useState(1); // cookies per second
  
    useEffect(() => {
    const cookieInterval = setInterval(() => {
      setCookies((currentCookies) => currentCookies + 1);
    }, 1000 / cps);

 

    // clean up the interval
    return () => {
      clearInterval(cookieInterval);
    };
  }, [cps]);

  function grandmaincreaseCps() {
    setCps(cps + 1);
  }
  function ovenincreaseCps() {
    setCps(cps + 10);
  }
  function factoryincreaseCps() {
    setCps(cps + 100);
  }
  return (
    <div>
      <p>Cookies: {cookies}</p>
      <p>Cookies per second: {cps}</p>
      <button onClick={grandmaincreaseCps}>Buy Grandma</button>
      <div><button onClick={ovenincreaseCps}>Buy Oven</button></div>
      <div><button onClick={factoryincreaseCps}>Buy Factory</button></div>
      <p className={cookies > 10 ? "" : "hidden"}></p>
    </div>
  );
  
}