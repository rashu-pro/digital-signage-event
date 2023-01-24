// import useSWR from 'swr'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import { Pagination, Navigation, EffectCreative, FreeMode, Thumbs, Grid } from "swiper";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import "swiper/css/effect-creative";
import Script from "next/script";
import Image from "next/image";

// const fetcher = (...args) => fetch(...args).then((res) => res.json())
// const refreshInterval = 5*60*1000

export default function EventDetails() {
  // const { data, error } = useSWR('http://api-test.test/api/test-api', fetcher, { refreshInterval: refreshInterval })
  // if(error) return <p className='text-center'> Failed to load... </p>
  // if(!data) return <p className='text-center'>loading...</p>
  // console.log(data)
  const data = {
    "heading_top": "PLEASE DONATE FOR THE MULTIPURPOSE HALL",
    "status": 1,
    "announcements": [
      {
        "title": "A Life of Giving Thanks",
        "image": "http://api-test.test/images/jummah-namaz.jpg",
        "date": "16/01/2023",
        "description": "<div class=\"ds-event-body\"><p class=\"m-0 mb-1\">Assalam-O-Alaikum Community Members,</p><p>Please note next week on Friday November 25, 2022</p><p class=\"text-underline\">Jummah Khutbah topic is:</p><p class=\"text-highlight text-center text-uppercase\"><span class=\"text-bold\">A LIFE OF GIVING THANKS</span><br> <span class=\"text-small text-normalcase\">By IMAM SAFI KHAN</span></p><p class=\"pt-2\">There is no shortage of blessings to be thankful for. What is the importance of thankfulness? How should we express it and what effects should it have on us? We reflect on blessings and the true manifestation of thankfulness and gratitude. Saying Alhamdolilah.</p></div>"
      },
      {
        "title": "ICS THANKSGIVING PICNIC",
        "image": "",
        "date": "Saturday, November 26",
        "description": "<div><p class=\"pb-2\">The ICS social team has planned a fun filled picnic for al ages Insha Allah. Please join us in celebrating community spirit and friendship at the masjid.</p> <h4>Assalamu Alaikum Dear Community Members,</h4><h3>ICS is exited for the upcoming picnic!</h3>Insha Allah On:<p><strong>Date: </strong> Saturday, November 26</p><p><strong>Time: </strong> 12PM - 5PM</p><p><strong>Location: </strong> Islamic Center of Southlake</p><p>The ICS social team has planned a fun filled picnic for al ages Insha Allah. Please join us in celebrating community spirit and friendship at the masjid.</p><p>We look forward to seeing you all there with families!</p></div>"
      }
    ]
  }

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
          modules={[Autoplay, Pagination, Navigation, EffectCreative]}
          spaceBetween={0}
          slidesPerView={1}
          loop={false}
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
        >
          {data.announcements.map((data, index) => (
            <SwiperSlide key={index}>
              <div className="ds-event-single mx-auto">
                {data.image !== '' ? (
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
                          <div className="product-des" dangerouslySetInnerHTML={{ __html: data.description }} />
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="row event-row event-row-js">
                    {/*event content column*/}
                    <div className="event-content-no-image">
                      <div className="event-content bg-grey-greenish h-full d-flex">
                        <div>
                          <div className="ds-event-head pb-1 pt-1 w-100 m-0">
                            <h3 className="m-0 text-big text-primary text-bold">{data.title}</h3>
                          </div>
                          <div className="ds-event-body">
                            <div className="product-des" dangerouslySetInnerHTML={{ __html: data.description }} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </SwiperSlide>
          ))}

        </Swiper>
      </div>
    </>
  )
}