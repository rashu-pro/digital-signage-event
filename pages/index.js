import useSWR from 'swr'
import Head from 'next/head'
import getSlug from "./components/slug"
import Header from "./components/Header";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import EventDetails from "./EventDetails";

const fetcher = (...args) => fetch(...args).then((res) => res.json())
// const refreshInterval = 5*60*1000
let bgColor = '#218649';
export default function Home() {
  const {data, error} = useSWR('https://secure-api.net/api/v1/company-prayer?slug=' + getSlug(), fetcher)
  if (error) return <p className='text-center'> Failed to load... </p>
  if (!data) return <p className='text-center'>loading...</p>

  let url = window.location.href;
  let slug = url.split('=');
  slug = slug[slug.length-1];
  let companyLogo = data.logoURL;
  if(slug ==='ics'){
    companyLogo = 'https://res.cloudinary.com/secure-api/image/upload/v1675159812/secure-api/ics/images/obw2vgner7zjapdvdo6e.png';
  }

  return (
    <>
      <Head>
        <title>Announcement</title>
        <meta name="description" content="Digital Signage - Event" />
        <link rel="icon" href="/favicon-digital-signage.png" />
      </Head>

      <main>
        <style jsx>{`
        .ds-event-wrapper.v2 .ds-event-inner{
        background:${bgColor};
        }
        `}</style>
        <div className="ds-wrapper landscape-mode mx-auto">
          <div className="ds-event-wrapper v2 bg-grey p-relative">

            {/*top head*/}
            <Header title="title" logo={companyLogo} />

            {/*page body*/}
            <div className="ds-event-inner p-relative zindex-9">
              {/*event details*/}
              <EventDetails />

              {/*sidebar*/}
              <Sidebar title="Upcoming Events" />
            </div>

            {/*page foot*/}
            {/*<Footer />*/}

          </div>
        </div>
      </main>
    </>
  )
}
