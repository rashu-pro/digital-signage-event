import {useState} from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay} from "swiper";
import {Pagination, Navigation, EffectCreative, FreeMode, Thumbs, Grid} from "swiper";
import "swiper/css";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import "swiper/css/effect-creative";
import Script from "next/script";
import Image from "next/image";
import ImageEvent from "../public/jummah-namaz.jpg";

export default function EventDetails(){
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <>
      <div className="ds-event-wrapper-body h-full">
        <Swiper
          modules={[Autoplay, FreeMode, Pagination, Navigation, Thumbs, EffectCreative]}
          spaceBetween={0}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 10000,
            disableOnInteraction: false,
          }}
          effect="creative"
          creativeEffect={{
            prev: {
              shadow: true,
              translate: [0, 0, -400],
            },
            next: {
              translate: ["100%", 0, 0],
            },
          }}
          navigation={true}
          pagination={{
            type: "fraction",
          }}
          thumbs={{ swiper: thumbsSwiper }}
          className="mainSlider"
          onSlideChange={() => {
            document.querySelector('.ds-event-wrapper-sidebar').classList.add('added')
            let slideTotal = document.querySelectorAll('.swiper-slide').length - 3;
            let currentIndex = document.querySelector('.swiper-slide.swiper-slide-active').getAttribute('data-swiper-slide-index')
            document.querySelectorAll('.event-list-item').forEach(selector=>{
              selector.classList.remove('current')
            })
            if(parseInt(currentIndex) === slideTotal){
              document.querySelector('.event-list-item-0').classList.add('current')
            } else{
              currentIndex = parseInt(currentIndex) + 1;
              document.querySelector('.event-list-item-'+currentIndex).classList.add('current')
            }
          }}
          onSwiper={(swiper) => {
            console.log(swiper)
          }}
        >
          <SwiperSlide>
            <Script id="script-event-row" strategy="lazyOnload">
              {
                `let headHeight = document.querySelector('.ds-event-top-head').clientHeight;
               document.querySelectorAll('.event-row-js').forEach(selector=>{
                selector.style.paddingTop = headHeight+"px";
               })`
              }
            </Script>
            <div className="ds-event-single mx-auto">
              <div className="row event-row event-row-js">
                {/*event image column*/}
                <div className="column column-50">
                  <div className="event-image h-full bg-primary d-flex justify-center align-center">
                    <div className="w-100">
                      <div className="image-holder">
                        <div className="image image-details">
                          <Image src={ImageEvent} alt="event" />
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
                      <p className="text-highlight text-center text-uppercase"><span className="text-bold">A LIFE OF GIVING THANKS</span>
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

          <SwiperSlide>
            <Script id="script-event-row" strategy="lazyOnload">
              {
                `let headHeight = document.querySelector('.ds-event-top-head').clientHeight;
               document.querySelectorAll('.event-row-js').forEach(selector=>{
                selector.style.paddingTop = headHeight+"px";
               })`
              }
            </Script>
            <div className="ds-event-single mx-auto">
              <div className="row event-row event-row-js">
                {/*event image column*/}
                <div className="column column-50">
                  <div className="event-image h-full bg-primary d-flex justify-center align-center">
                    <div className="w-100">
                      <div className="image-holder">
                        <div className="image image-details">
                          <Image src={ImageEvent} alt="event" />
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
                      <p className="text-highlight text-center text-uppercase"><span className="text-bold">A LIFE OF GIVING THANKS</span>
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

          <SwiperSlide>
            <Script id="script-event-row" strategy="lazyOnload">
              {
                `let headHeight = document.querySelector('.ds-event-top-head').clientHeight;
               document.querySelectorAll('.event-row-js').forEach(selector=>{
                selector.style.paddingTop = headHeight+"px";
               })`
              }
            </Script>
            <div className="ds-event-single mx-auto">
              <div className="row event-row event-row-js">
                {/*event image column*/}
                <div className="column column-50">
                  <div className="event-image h-full bg-primary d-flex justify-center align-center">
                    <div className="w-100">
                      <div className="image-holder">
                        <div className="image image-details">
                          <Image src={ImageEvent} alt="event" />
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
                      <p className="text-highlight text-center text-uppercase"><span className="text-bold">A LIFE OF GIVING THANKS</span>
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

          <SwiperSlide>
            <Script id="script-event-row" strategy="lazyOnload">
              {
                `let headHeight = document.querySelector('.ds-event-top-head').clientHeight;
               document.querySelectorAll('.event-row-js').forEach(selector=>{
                selector.style.paddingTop = headHeight+"px";
               })`
              }
            </Script>
            <div className="ds-event-single mx-auto">
              <div className="row event-row event-row-js">
                {/*event image column*/}
                <div className="column column-50">
                  <div className="event-image h-full bg-primary d-flex justify-center align-center">
                    <div className="w-100">
                      <div className="image-holder">
                        <div className="image image-details">
                          <Image src={ImageEvent} alt="event" />
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
                      <p className="text-highlight text-center text-uppercase"><span className="text-bold">A LIFE OF GIVING THANKS</span>
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

          <SwiperSlide>
            <Script id="script-event-row" strategy="lazyOnload">
              {
                `let headHeight = document.querySelector('.ds-event-top-head').clientHeight;
               document.querySelectorAll('.event-row-js').forEach(selector=>{
                selector.style.paddingTop = headHeight+"px";
               })`
              }
            </Script>
            <div className="ds-event-single mx-auto">
              <div className="row event-row event-row-js">
                {/*event image column*/}
                <div className="column column-50">
                  <div className="event-image h-full bg-primary d-flex justify-center align-center">
                    <div className="w-100">
                      <div className="image-holder">
                        <div className="image image-details">
                          <Image src={ImageEvent} alt="event" />
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
                      <p className="text-highlight text-center text-uppercase"><span className="text-bold">A LIFE OF GIVING THANKS</span>
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
    </>
  )
}