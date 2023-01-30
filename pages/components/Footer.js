import Image from "next/image";
export default function Footer(){
  return (
    <div className="ds-event-bottom-foot">
      <div className="text-center">
        <p className="m-0 d-flex align-center justify-center ds-event-bottom-foot-credit">
          <Image src="https://secure-api.net/Content/payment-method-update-assets/img/logo-masjid-main.png" alt="masjid solutins" fill />
            Powered By &nbsp;<a href="https://masjidsolutions.net">https://masjidsolutions.net</a>
        </p>
      </div>
    </div>
  )
}