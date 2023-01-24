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

export default function EventDetails(props){
  return (
    <>
      <div className="ds-event-wrapper-body h-full">
        <Script id="script-event-row" strategy="lazyOnload">
          {
            `let headHeight = document.querySelector('.ds-event-top-head').clientHeight;
               document.querySelectorAll('.event-row-js').forEach(selector=>{
                selector.style.paddingTop = headHeight+"px";
               })`
          }
        </Script>

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
          className="mainSlider"
          onSlideChange={() => {
            setTimeout(function (){
              let currentIndex = parseInt(document.querySelector('.swiper-pagination-current').innerHTML)
              document.querySelectorAll('.event-list-item').forEach(selector=>{
                selector.classList.remove('current')
              })
              document.querySelector('.event-list-item-'+currentIndex).classList.add('current')
            },200)

          }}
          onSwiper={(swiper) => {
            console.log(swiper)
          }}
        >
          {props.data.map((data, index)=>(
            <SwiperSlide key={index}>
              <div className="ds-event-single mx-auto">
                <div className="row event-row event-row-js">
                  {/*event image column*/}
                  <div className="column column-50">
                    <div className="event-image h-full bg-primary d-flex justify-center align-center">
                      <div className="w-100">
                        <div className="image-holder">
                          <div className="image image-details">
                            <Image src={data.image} alt="event" fill />
                          </div>
                        </div>
                        <div className="ds-event-head text-center pb-2 pt-3">
                          <h3 className="m-0 p-1 text-uppercase text-big text-bold text-white">{data.title}</h3>
                          <div>
                            <p className="m-0 mb-2 tag">Date: {data.date}</p>
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>

                  {/*event content column*/}
                  <div className="column column-50">
                    <div className="event-content bg-grey-greenish h-full">

                      <div className="ds-event-body">
                        <div className="product-des" dangerouslySetInnerHTML={{ __html: data.description }} />

                        </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}

        </Swiper>
      </div>
    </>
  )
}