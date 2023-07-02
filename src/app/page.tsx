import Image from "next/image";
import styles from "./page.module.scss";
import ShoppingList from "./components/list/list";
import Hero from "./components/hero/hero";
import TextInput from "./components/input/input";
import localFont from "next/font/local";

const myFont = localFont({ src: "../../fonts/SpaceMono-Regular.ttf" });

export default function Home() {
  return (
    <main className={styles.main} style={myFont.style}>
      <div className={styles.description}>
        <p>
          Get started with&nbsp;
          <code className={styles.code}>Morpheus</code>
        </p>
        <div>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/morph.svg"
              alt="MORPHEUS Logo"
              className={styles.vercelLogo}
              width={225}
              height={28.35}
              priority
            />
          </a>
        </div>
      </div>
      <Hero></Hero>
      <br></br>
      <br></br>

      <div className={styles.center}>
        <ShoppingList></ShoppingList>
      </div>
      <TextInput></TextInput>
      <br></br>
      <br></br>
      <div className={styles.grid}>
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Whitepaper <span>-&gt;</span>
          </h2>
          <p>
            Discover the groundbreaking technology behind liquid metal
            transformation.
          </p>
        </a>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Research <span>-&gt;</span>
          </h2>
          <p>
            Delve into the research and development of liquid metal
            applications.
          </p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Testimonials <span>-&gt;</span>
          </h2>
          <p>
            Explore success stories and testimonials from users of liquid metal
            technology.
          </p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Funding <span>-&gt;</span>
          </h2>
          <p>
            Learn about our funding opportunities in the liquid metal industry.
          </p>
        </a>
      </div>
    </main>
  );
}
