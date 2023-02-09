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
            <Image src="https://res.cloudinary.com/secure-api/image/upload/v1675159812/secure-api/ics/images/obw2vgner7zjapdvdo6e.png" alt="ICS" fill />
          </div>
        </div>
        <Marquee className="py-4 text-yellow marquee-text ds-event-top-head-title pr-5"
                 gradient={false}
                 pauseOnClick={true} speed={200}>
          <MarqueeText />
        </Marquee>
      </div>
    </>
  )
}