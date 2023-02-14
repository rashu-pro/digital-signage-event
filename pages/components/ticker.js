import useSWR from "swr";
import getSlug from "./slug";

const fetcher = (...args) => fetch(...args).then((res) => res.json())
export default function MarqueeText(){
  const { data, error } = useSWR('https://secure-api.net/api/v1/company-announcement?slug='+getSlug(), fetcher)
  if(error) return <p className='m-0 text-center'> Failed to load... </p>
  if(!data) return <p className='m-0 text-center'>loading...</p>

  return (
    <>
      {data.announcments.map((data, index)=>(
        <>
        {data.smallDetails!==null?(
          <div key={index} className="me-2 marquee-single">
          <p className="m-0">{data.smallDetails} </p>
        </div>
        ):(
          <>
          </>
        )}
        </>
      ))}
    </>
  )
}