import Image from "next/image";
import Marquee from "react-fast-marquee";
import MarqueeText from "./ticker";
import Script from "next/script";

// let bgColor = '#2e7346';
let bgColor = '#218649';
export default function Header(props){

  return (
    <>
      <Script id="script-event-row" strategy="lazyOnload">
        {
          `let headHeight = document.querySelector('.ds-event-top-head').clientHeight;
               document.querySelectorAll('.event-row-js').forEach(selector=>{
                selector.style.paddingTop = headHeight+"px";
               })`
        }
      </Script>
      <div className="ds-event-top-head d-flex">
        <style jsx>{`
        .ds-event-top-head{
          background-color: ${bgColor}
        }
      `}</style>
        <div className="ds-organization-logo pr-5">
          <div className="logo-holder">
            <Image src={props.logo} alt="ICS" fill />
          </div>
        </div>
        <MarqueeText />
      </div>
    </>
  )
}