import Image from "next/image";
import LogoCompany from "../../public/logo_company.png";
import Marquee from "react-fast-marquee";
import MarqueeText from "./ticker";

export default function Header(props){
  return (
    <div className="ds-event-top-head d-flex">
      <div className="ds-organization-logo pr-5">
        <div className="logo-holder">
          <Image src={LogoCompany} alt="company" height={100} />
        </div>
      </div>
      <Marquee className="py-4 text-danger marquee-text ds-event-top-head-title pr-5"
               gradient={false}
               pauseOnClick={true} speed={40}>
        <MarqueeText />
      </Marquee>
      {/*<h2 className="ds-event-top-head-title bg-white text-center m-0 mb-2 color-secondary font-oswald">{props.title}</h2>*/}
    </div>
  )
}