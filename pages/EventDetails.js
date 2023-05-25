import useSWR from 'swr'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import { Pagination, Navigation, EffectCreative } from "swiper";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import "swiper/css/effect-creative";
import Image from "next/image";
import getSlug from "./components/slug";
import Script from "next/script";

const fetcher = (...args) => fetch(...args).then((res) => res.json())
const refreshInterval = 15*60*1000
let bgColor = '#218649';

export default function EventDetails(props) {
  const endpoint ='/digital-signage-announcement';
  const queryParameter = '?slug='+getSlug();

  const { data, error } = useSWR(props.dataBaseUrl+endpoint+queryParameter, fetcher, { refreshInterval: refreshInterval })
  if(error) return <p className='text-center'> Failed to load... </p>
  if(!data) return <p className='text-center'>loading...</p>
  
  return (
    <>
      <div className="ds-event-wrapper-body h-full">

        <Swiper
          modules={[Autoplay, Pagination, Navigation, EffectCreative]}
          spaceBetween={0}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 16000,
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
        >
          {data.announcments.map((data, index) => (
            <div key={index}>
              {data.details!==null?(
                <SwiperSlide key={index}>
                  <Script id="script-main" strategy="lazyOnload">
                    {
                      `
                        setTimeout(function(){
                        let headerHeightMain = document.querySelector('.ds-event-top-head').clientHeight;
                        //document.querySelector('.ds-event-wrapper-body').style.paddingTop = headerHeightMain+"px";
                        document.querySelector('.event-content').style.paddingTop = headerHeightMain+"px";
                        document.querySelector('.event-image').style.paddingTop = headerHeightMain+"px";
                        },200)
          `
                    }
                  </Script>

                  <style jsx>{`
                .bg-primary{
                  background-color: ${bgColor}
                }
                .text-primary{
                  color: ${bgColor}
                }
            `}</style>
                  <div className="ds-event-single mx-auto">
                    {data.image!== null ? (
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
                              </div>
                            </div>
                          </div>

                        </div>

                        {/*event content column*/}
                        <div className="column column-50">
                          <div className="event-content bg-grey-greenish h-full">

                            <div className="ds-event-body">
                              <div className="product-des" dangerouslySetInnerHTML={{ __html: data.details }} />
                            </div>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="row event-row event-row-js">
                        {/*event content column*/}
                        <div className="event-full-row event-content-no-image">
                          <div className="event-content bg-grey-greenish h-full d-flex">
                            <div>
                              <div className="ds-event-head pb-1 pt-1 w-100 m-0">
                                <h3 className="m-0 text-big text-primary text-bold">{data.title}</h3>
                              </div>
                              <div className="ds-event-body">
                                <div className="product-des" dangerouslySetInnerHTML={{ __html: data.details }} />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </SwiperSlide>
              ):(
                <SwiperSlide key={index}>
                  <div className="ds-event-single mx-auto">
                    <div className="row event-row event-row-js">
                      {/*event content column*/}
                      <div className="event-full-row">
                        <style jsx>{`
                .bg-primary{
                  background-color: ${bgColor}
                }
                .text-primary{
                  color: ${bgColor}
                }
            `}</style>
                        <div className="event-image h-full bg-primary d-flex justify-center align-center">
                          <div className="w-100">
                            <div className="image-holder">
                              <div className="image image-details">
                                {data.image===null?(
                                  <p></p>
                                ):(
                                  <Image src={data.image} alt="event" fill />
                                )}
                              </div>
                            </div>

                            <div className="ds-event-head text-center pb-2 pt-2">
                              <h3 className="m-0 text-uppercase text-big text-bold text-white">{data.title}</h3>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                </SwiperSlide>

              )}
            </div>
          ))}

        </Swiper>
      </div>
    </>
  )
}