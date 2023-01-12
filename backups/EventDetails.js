import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay} from "swiper";
import "swiper/css";
import Image from "next/image";
import EventImage from "../public/jummah-namaz.jpg";

export default function EventDetails(){
  return (
    <div className="ds-event-wrapper-body">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false
        }}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        >
        <SwiperSlide>
          <div className="ds-event-single h-full mx-auto">
            <div className="row h-full">
              {/*event image column*/}
              <div className="column column-50">
                <div className="event-image h-full bg-primary d-flex justify-center align-center">
                  <div className="w-100">
                    <div className="image-holder">
                      <div className="image image-details">
                        <Image src={EventImage}
                               fill />
                      </div>
                    </div>
                    <div className="ds-event-head text-center pb-2 pt-3">
                      <h3 className="m-0 p-1 text-uppercase text-big text-bold text-white">A Life of Giving
                        Thanks. <br /> Jummah Khubah</h3>
                      <div>
                        <p className="m-0 mb-2 tag">Date: 25th November, 2022</p>
                      </div>
                    </div>
                  </div>
                </div>

              </div>

              {/*event content column*/}
              <div className="column column-50">
                <div className="event-content bg-grey-greenish h-full">

                  <div className="ds-event-body">
                    <p className="m-0 mb-1">
                      Assalam-O-Alaikum Community Members,
                    </p>
                    <p>Please note next week on Friday November 25, 2022</p>
                    <p className="text-underline">Jummah Khutbah topic is:</p>
                    <p className="text-highlight text-center text-uppercase"><span className="text-bold">"A LIFE OF GIVING THANKS"</span>
                      <br /> <span className="text-small text-normalcase">By IMAM SAFI KHAN</span></p>

                    <p className="pt-2">
                      There is no shortage of blessings to be thankful for. What is the importance of thankfulness? How
                      should we express it and what effects should it have on us? We reflect on blessings and the true
                      manifestation of thankfulness and gratitude. Saying Alhamdolilah.
                    </p>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}