import { useEffect, useState } from "react";
import "./App.css";
import { quotes } from "./quotes";
import _ from "lodash";
import { TwitterShareButton, TwitterIcon } from "react-share";
import ReactGA from "react-ga4";

function App() {
  const [quote, setQuote] = useState("");

  useEffect(() => {
    setQuote(_.sample(quotes) || "");
  });

  ReactGA.initialize("G-VLQLCTD3R8");
  ReactGA.send({
    hitType: "pageview",
    page: window.location.pathname + window.location.search,
  });

  function refreshPage() {
    window.location.reload();
  }

  return (

    <>
      <div
        className="h-screen w-screen flex flex-col items-center p-10"
        style={{
          backgroundColor: 'black',
          backgroundImage: `url(https://source.unsplash.com/random/800x600/?coffee)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundBlendMode: "luminosity",
        }}
      >
        <div className="text-center flex flex-col gap-5 m-auto md:mx-20">
          <h1 className="font-family t-quote text-white bg-black bg-opacity-90 rounded-md p-10 text-2xl md:text-3xl">
            "{quote}"
          </h1>

          <div className="mb-30">
            <button className="bg-black rounded-md p-4 text-lg m-1 text-white update-button" onClick={refreshPage}>Quero me desmotivar mais</button>
          </div>

        </div>

        <div className="bg-black bg-opacity-90 rounded-md p-2">
          <TwitterShareButton
            className="m-auto mt-0 flex content-center space-x-2 align-middle"
            title={`"${quote}" 
              \nvia: `}
            url={"https://desmotive-se.vercel.app/"}
          >
            <TwitterIcon size={32} borderRadius={10} /><span className="m-auto text-white f-handwritten text-l">Compartilhe para desmotivar outros devs</span>
          </TwitterShareButton>
        </div>

        <a className="text-sm text-white bg-black bg-opacity-80 rounded-md p-2 mt-3" href="https://birobirobiro.dev" target="_blank">birobirobiro.dev</a>
      </div>
    </>
  );
}

export default App;
