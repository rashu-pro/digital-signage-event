import useSWR from "swr";
import getSlug from "./slug";
import Marquee from "react-fast-marquee";

const fetcher = (...args) => fetch(...args).then((res) => res.json())
export default function MarqueeText(){
  const { data, error } = useSWR('https://secure-api.net/api/v1/digital-signage-tickers/?slug='+getSlug(), fetcher)
  if(error) return <p className='m-0 text-center'> Failed to load... </p>
  if(!data) return <p className='m-0 text-center'>loading...</p>

  let documentWidth = window.innerWidth;
  let tickerSpeed = 80;
  if(documentWidth>1600){
    tickerSpeed = 100;
  }

  if(documentWidth>2400){
    tickerSpeed = 120;
  }

  if(documentWidth>3800){
    tickerSpeed = 200;
  }

  return (
    <>
      <Marquee className="py-4 text-yellow marquee-text ds-event-top-head-title pr-5"
               gradient={false}
               pauseOnClick={true} speed={tickerSpeed}>
        {data.map((data, index)=>(
          <div key={index}>
            {data.title!==null?(
              <div key={index} className="me-2 marquee-single">
                <p className="m-0">{data.title} </p>
              </div>
            ):(
              <>
              </>
            )}
          </div>
        ))}
      </Marquee>
    </>
  )
}