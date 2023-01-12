import Image from "next/image";
import IconCredit from "../public/icon-credit-ms.png";
export default function Footer(){
  return (
    <div className="ds-event-bottom-foot">
      <div className="text-center">
        <p className="m-0 d-flex align-center justify-center ds-event-bottom-foot-credit">
          <Image src={IconCredit} alt="masjid solutins" height={40} />
            Powered By &nbsp;<a href="https://masjidsolutions.net">https://masjidsolutions.net</a>
        </p>
      </div>
    </div>
  )
}