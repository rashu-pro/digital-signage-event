import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Digital Signage</title>
        <meta name="description" content="Digital Signage" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="">
          <div className="ds-wrapper mx-auto">
            <div className="ds-event-wrapper v4 layout-portrait bg-grey p-relative">
              <div className="ds-event-inner p-relative zindex-9">

                <div className="ds-event-wrapper-body">
                  <div className="ds-event-single v3 text-dark mx-auto">
                    <h2
                      className="section-title bg-primary text-center m-0 text-white text-uppercase pt-2 pb-2 font-oswald">Please
                      Donate for the Multipurpose hall</h2>

                    <div className="event-content">
                      <div className="event-content-wrapper">
                        <div className="ds-event-head text-center pb-2 pt-2">
                          <h3 className="title-big m-0 pt-1">Jummah Khutbah: A Life of Giving Thanks.</h3>
                          <div className="pb-2">
                            <p className="tag">Date: 25th November, 2022</p>
                          </div>
                          <div className="image-holder">
                            <div className="image">
                              <img src="assets/images/banner_small_3.jpg" alt="event" />
                            </div>
                          </div>
                        </div>
                        <div className="ds-event-body text-dark pb-1">
                          <div className="pb-1">
                            <p className="">
                              Assalam-O-Alaikum Community Members,
                            </p>
                            <p className="">Please note next week on <span className="text-underline">Friday November 25, 2022</span>
                            </p>
                          </div>

                          <p className="text-underline">Jummah Khutbah topic is:</p>
                          <p className="text-highlight text-uppercase"><span className="text-bold">"A LIFE OF GIVING THANKS"</span>
                            <br /> <span className="text-small text-normalcase">By IMAM SAFI KHAN</span></p>
                          <div className="pt-3">
                            <p className="">
                              There is no shortage of blessings to be thankful for. What is the importance of
                              thankfulness? How should we express it and what effects should it have on us? We reflect
                              on blessings and the true manifestation of thankfulness and gratitude. Saying
                              Alhamdolilah.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
