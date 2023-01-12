import Image from "next/image";
import LogoCompany from "../public/logo_company.png";

export default function Header(props){
  return (
    <div className="ds-event-top-head">
      <div className="ds-organization-logo">
        <div className="logo-holder">
          <Image src={LogoCompany} alt="company" height={100} />
        </div>
      </div>
      <h2 className="ds-event-top-head-title bg-white text-center m-0 mb-2 color-secondary font-oswald">{props.title}</h2>
    </div>
  )
}