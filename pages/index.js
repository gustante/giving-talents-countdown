import Head from 'next/head'
import { useEffect } from 'react'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'





export default function Home() {

  useEffect(() => {

    (function () {
      const second = 1000,
        minute = second * 60,
        hour = minute * 60,
        day = hour * 24;


      //remove this if you don't need it
      let launch = "10/20/2022"

      const countDown = new Date(launch).getTime(),
        x = setInterval(function () {

          const now = new Date().getTime(),
            distance = countDown - now;

          document.getElementById("days").innerText = Math.floor(distance / (day)),
            document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
            document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
            document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);
        }, 0)
    }());

  }, [])


  return (
    <div className={styles.container}>
      <Head>
        <title>Giving Talents</title>
        <meta name="Giving Talents" content="A Giving Tueday campaign" />
        <link rel="icon" href="/favicon.ico" />

      </Head>

      <main className={styles.main}>
        <h2>
          Count down to...
        </h2>
        <h1 className={styles.title}>
          Outrageous Generosity
        </h1>
        <h1>
          What can you give in an hour?
        </h1>
        <p>From 1 PM to 2 PM (your local time)</p>



        <div className="container">

          <div id="countdown">
            <ul>
              <li><span id="days"></span>Days</li>
              <li><span id="hours"></span>Hours</li>
              <li><span id="minutes"></span>Minutes</li>
              <li><span id="seconds"></span>Seconds</li>
            </ul>
          </div>

          <div className="social-icons">
            <Link href="https://www.instagram.com/explore/tags/givingtalents/">
              <a>
                <FontAwesomeIcon width="50px" icon={faInstagram} />
              </a>
            </Link>
            <Link href="https://twitter.com/search?q=%23givingtalents&src=typed_query&f=top">
              <a>
                <FontAwesomeIcon width="50px" icon={faTwitter} />
              </a>
            </Link>
            <Link href="https://www.facebook.com/hashtag/givingtalents">
              <a>
                <FontAwesomeIcon width="50px" icon={faFacebook} />
              </a>
            </Link>
          </div>

        </div>




      </main>
    </div>
  )
}
