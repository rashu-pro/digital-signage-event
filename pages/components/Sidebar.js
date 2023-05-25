import Script from "next/script";
import useSWR from "swr";
import getSlug from "./slug";

const fetcher = (...args) => fetch(...args).then((res) => res.json())

const sampleData = [
  {
    "date": "Wednesday, Mar 29",
    "isActive": true,
    "events": [
      {
        "title": "Call or Text us",
        "startOn": "00:03 AM",
        "endOn": "10:03 AM",
        "description": "at  317-854-0207"
      },
      {
        "title": "30% Off on All Products!",
        "startOn": "00:03 AM",
        "endOn": "00:04 AM",
        "description": "23rd ISNA Education Forum Special"
      },
      {
        "title": "Text to Give",
        "startOn": "00:03 AM",
        "endOn": "00:03 AM",
        "description": "Text \"Donate\" to 833-292-9427"
      }
    ]
  },
  {
    "date": "Thursday, Mar 30",
    "isActive": false,
    "events": [
      {
        "title": "No event available.",
        "startOn": "",
        "endOn": "",
        "description": ""
      }
    ]
  },
  {
    "date": "Friday, Mar 31",
    "isActive": false,
    "events": [
      {
        "title": "Text to Give",
        "startOn": "00:03 AM",
        "endOn": "00:03 AM",
        "description": "Text \"Donate\" to 833-292-9427"
      }
    ]
  },
  {
    "date": "Saturday, Apr 01",
    "isActive": false,
    "events": [
      {
        "title": "No event available.",
        "startOn": "",
        "endOn": "",
        "description": ""
      }
    ]
  },
  {
    "date": "Sunday, Apr 02",
    "isActive": false,
    "events": [
      {
        "title": "No event available.",
        "startOn": "",
        "endOn": "",
        "description": ""
      }
    ]
  },
  {
    "date": "Monday, Apr 03",
    "isActive": false,
    "events": [
      {
        "title": "No event available.",
        "startOn": "",
        "endOn": "",
        "description": ""
      }
    ]
  },
  {
    "date": "Tuesday, Apr 04",
    "isActive": false,
    "events": [
      {
        "title": "No event available.",
        "startOn": "",
        "endOn": "",
        "description": ""
      }
    ]
  }
];

export default function Sidebar(props){
  const endpoint ='/digital-signage-weekly-events';
  const queryParameter = '?slug='+getSlug();

  const { data, error } = useSWR(props.dataBaseUrl+endpoint+queryParameter, fetcher)
  if(error) return <p className='m-0 text-center'> Failed to load... </p>
  if(!data) return <p className='m-0 text-center'>loading...</p>
  return (
    <>
      <Script id="script-sidebar" strategy="lazyOnload">
        {
          `
          let headerHeight = document.querySelector('.ds-event-top-head').clientHeight;
          document.querySelector('.ds-event-wrapper-sidebar').style.paddingTop = headerHeight+"px";
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
                    {data.events.map((data, index)=>(
                      <div key={index} className="mb-1">
                        {data.startOn===''?(
                          <p className="m-0 event-list-item-head opacity-md">{data.title}</p>
                        ):(
                          <p className="m-0 event-list-item-head">{data.title}</p>
                        )}
                      </div>
                    ))}
                  </div>
                ):(
                  <div className="event-list-item event-list-item-1">
                    <p className="m-0 event-list-item-date">{data.date}</p>
                    {data.events.map((data, index)=>(
                      <div key={index} className="mb-1">
                        {data.startOn===''?(
                          <p className="m-0 event-list-item-head opacity-md">{data.title}</p>
                        ):(
                          <p className="m-0 event-list-item-head">{data.title}</p>
                        )}
                      </div>
                    ))}
                  </div>
                )}

              </div>
            ))}

          </div>
        </div>
      </div>
    </>
  )
}