// import useSWR from 'swr'
import Head from 'next/head'
import Header from "./components/Header";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import EventDetails from "./EventDetails";

// const fetcher = (...args) => fetch(...args).then((res) => res.json())
// const refreshInterval = 5*60*1000
export default function Home() {
  // const { data, error } = useSWR('http://api-test.test/api/test-api', fetcher, { refreshInterval: refreshInterval })
  // if(error) return <p className='text-center'> Failed to load... </p>
  // if(!data) return <p className='text-center'>loading...</p>

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
        "image": "http://api-test.test/images/thanks-giving.jpg",
        "date": "Saturday, November 26",
        "description": "<div><h4>Assalamu Alaikum Dear Community Members,</h4><h3>ICS is exited for the upcoming picnic!</h3>Insha Allah On:<p><strong>Date: </strong> Saturday, November 26</p><p><strong>Time: </strong> 12PM - 5PM</p><p><strong>Location: </strong> Islamic Center of Southlake</p><p>The ICS social team has planned a fun filled picnic for al ages Insha Allah. Please join us in celebrating community spirit and friendship at the masjid.</p><p>We look forward to seeing you all there with families!</p></div>"
      }
    ]
  }

  return (
    <>
      <Head>
        <title>Digital Signage Event</title>
        <meta name="description" content="Digital Signage - Event" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main>
        <div className="ds-wrapper landscape-mode mx-auto">
          <div className="ds-event-wrapper v2 bg-grey p-relative">

            {/*top head*/}
            <Header title={data.heading_top} />

            {/*page body*/}
            <div className="ds-event-inner p-relative zindex-9">
              {/*event details*/}
              <EventDetails />

              {/*sidebar*/}
              <Sidebar title="Upcoming Events" />
            </div>

            {/*page foot*/}
            <Footer />

          </div>
        </div>
      </main>
    </>
  )
}
