import Script from "next/script";
import useSWR from "swr";
import getSlug from "./slug";

const fetcher = (...args) => fetch(...args).then((res) => res.json())

export default function Sidebar(props){
  const { data, error } = useSWR('https://secure-api.net/api/v1/digital-signage-weekly-events?slug='+getSlug(), fetcher)
  if(error) return <p className='m-0 text-center'> Failed to load... </p>
  if(!data) return <p className='m-0 text-center'>loading...</p>
  return (
    <>
      <Script id="script-sidebar" strategy="lazyOnload">
        {
          `
            document.querySelector('.ds-event-wrapper-sidebar').style.paddingTop = headHeight+"px";
          `
        }
      </Script>

      <style jsx>{`
        .ds-event-wrapper-sidebar{
          background-color:#fff!important;
          height: 100vh;
          overflow: hidden;
          padding-bottom: 3rem;
        }
        .ds-event-wrapper-sidebar-inner{
          margin:0!important;
          box-shadow:none!important;
          border-radius:0!important;
          background-color:#fff;
          height:100%;
          overflow:hidden;
        }
      `}</style>

      <div className="ds-event-wrapper-sidebar">
        <div className="ds-event-wrapper-sidebar-inner ds-sidebar">
          <div className="ds-sidebar-head">
            <h2 className="m-0 pb-1 ds-sidebar-title">{props.title}</h2>
          </div>

          <div className="event-list">
            {data.map((data, index)=>(
              <div key={index}>
                {data.isActive?(
                  <div className="event-list-item event-list-item-1 current">
                    <p className="m-0 event-list-item-date">{data.date}</p>
                    <p className="m-0 event-list-item-head">{data.title}</p>
                    <div className="event-list-item-body">
                      {data.startOn===''?(
                        <></>
                      ):(
                        <p>{data.startOn}</p>
                      )}
                    </div>
                  </div>
                ):(
                  <div className="event-list-item event-list-item-1">
                    <p className="m-0 event-list-item-date">{data.date}</p>
                    <p className="m-0 event-list-item-head">{data.title}</p>
                    <div className="event-list-item-body">
                      {data.startOn===''?(
                        <></>
                      ):(
                        <p><strong>Start Time:</strong>{data.startOn}</p>
                      )}

                      {data.endOn===''?(
                        <></>
                      ):(
                        <p><strong>End Time:</strong>{data.endOn}</p>
                      )}
                    </div>
                  </div>
                )}</div>
            ))}

          </div>
        </div>
      </div>
    </>
  )
}