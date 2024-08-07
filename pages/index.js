import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import { useState } from "react";

export default function Home() {
  const [message, setMessage] = useState("");
  const [show, setShow] = useState(false);
  const [passphraseAttempt, setPassphraseAttempt] = useState("");

  function typedInPassPhrase(event) {
    setPassphraseAttempt(event.target.value);
    if (event.target.value === "ColonelMustardInTheLibraryWithALeadPipe") {
      setMessage("Welcome Kirsten, here's all your content down below");
      setShow(true);
    } else if (event.target.value === "") {
      setMessage("");
      setShow(false);
    } else {
      setMessage("Nice try, but no cigar!");
      setShow(false);
    }
  }

  return (
    <>
      <div>
        <Head>
          <title>Kirsten&apos;s Dev Notes</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className={styles.main}>
          <h1 className={styles.title}>Kirsten&apos;s Dev Notes</h1>
          <div
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <input
              style={{
                width: "60%",
                margin: "0 auto",
                textAlign: "center",
                height: "40px",
              }}
              type="text"
              id="passphrase"
              name="passphrase"
              placeholder="Enter the passphrase"
              onChange={typedInPassPhrase}
            />
            <p style={{ textAlign: "center" }}>{message}</p>
            {!show && passphraseAttempt != "" && (
              <p style={{ textAlign: "center" }}>
                The passphrase definitely isn&apos;t...{" "}
                <span style={{ color: "indigo" }}>{passphraseAttempt}</span>
              </p>
            )}
          </div>
          {show && (
            <div className={styles.content}>
              <div className={styles.lessons}>
                <h1>Bomb-Ass Shortcuts</h1>
                <p>Some cool shortcuts that I&apos;ve learned in VS Code</p>
                <p>Coming Soon...</p>
              </div>
              <div className={styles.lessons}>
                <h1>Amazing Videos</h1>
                <p>
                  Some of my favorite coding lessons. Disclaimer: These videos
                  won&apos;t put you to sleep.
                </p>
                <p>Coming Soon...</p>
              </div>
              <div className={styles.lessons}>
                <h1>Helpful Articles</h1>
                <p>
                  Useful articles that have helped me figure some things out.
                </p>
                <p>Coming Soon...</p>
              </div>
              <div className={styles.lessons}>
                <h1>Cool Tools</h1>
                <p>My favorite tools, extensions, and add-ons</p>
                <p>Coming Soon...</p>
              </div>
              <div className={styles.lessons}>
                <h1>Wicked Websites</h1>
                <p>
                  Some of my fav sites that are just wicked cool. Simple as
                  that.
                </p>
                <p>Coming Soon...</p>
              </div>
              <div className={styles.lessons}>
                <h1>Dope Devs</h1>
                <p>
                  Some pretty cool devs who are out there doing pretty cool
                  things. Def worth checking them out.
                </p>
                <p>Coming Soon...</p>
              </div>
              <div
                className="tasksBoxes"
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "space-around",
                  alignContent: "center",
                  flexWrap: "wrap",
                }}
              >
                <div className="left">
                  <h1>Small Ideas:</h1>
                  <ul>
                    <li>JS Types</li>
                    <li>Console.log</li>
                    <li>Center a div</li>
                    <li>Buttons</li>
                    <li>Next Link</li>
                    <li>Next Image</li>
                    <li>Cursor Icons</li>
                    <li>Schemas</li>
                    <li>API Routes</li>
                    <li>Get Static Props</li>
                    <li>Get Static Paths</li>
                    <li>Get Server Side Props</li>
                  </ul>
                </div>
                <div className="right">
                  <h1>Bigger Ideas:</h1>
                  <ul>
                    <li>Create React App</li>
                    <li>Create Next App</li>
                    <li>Sanity Init</li>
                    <li>Git Init</li>
                    <li>Vercel Setup</li>
                    <li>Netlify Setup</li>
                    <li>Grecaptcha V2 & V3</li>
                    <li>A Contact Form</li>
                    <li>Slider Container</li>
                    <li>Components</li>
                    <li>CSS Modules</li>
                    <li>Animations</li>
                    <li>Cards</li>
                    <li>Routes</li>
                    <li>Payment System</li>
                    <li>SEO</li>
                    <li>Google Analytics</li>
                    <li>Google Search Console</li>
                    <li>Google Tag Manager</li>
                    <li>Validation</li>
                    <li>Forms</li>
                    <li>APIs</li>
                    <li>Authentication</li>
                    <li>Authorization</li>
                    <li>Database</li>
                    <li>Deployment</li>
                    <li>Hosting</li>
                    <li>Domains</li>
                    <li>SSL</li>
                    <li>CDN</li>
                    <li>Cloudflare</li>
                    <li>Cloudinary</li>
                    <li>Stripe</li>
                    <li>Paypal</li>
                    <li>Mailchimp</li>
                    <li>Mailgun</li>
                    <li>Sendgrid</li>
                    <li>Twilio</li>
                    <li>Google Maps</li>
                    <li>Google Fonts</li>
                    <li>Portable Text</li>
                    <li>Markdown</li>
                    <li>JSON</li>
                    <li>SVG Image Components</li>
                  </ul>
                </div>
              </div>
            </div>
          )}
        </main>
      </div>
    </>
  );
}
