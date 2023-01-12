import Head from 'next/head'
import Header from "./Header";
import Footer from "./Footer";
import Sidebar from "./Sidebar";
import EventDetails from "./EventDetails";

export default function Home() {
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
            <Header title="PLEASE DONATE FOR THE MULTIPURPOSE HALL" />

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
