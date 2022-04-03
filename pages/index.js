import Head from "next/head";
import styles from "../styles/Home.module.css";
import Topnav from "../components/topnav/topnav";
import Title from "../components/title/title";
import Curves from "../components/curves/curves";
import Footer from "../components/footer/footer";

export default function Home() {
    return (
        <div>
            <Head>
                <title>NXpyre</title>
                <link rel="icon" href="/favicon.ico" />
                <meta
                    name="description"
                    content="Inspire the Next Generation"
                />
                <meta name="author" content="Nyx Iskandar"></meta>
                <meta property="og:title" content="NXpyre" />
                <meta
                    property="og:description"
                    content="Inspire the Next Generation"
                />
                <meta
                    property="og:image"
                    content="https://nxpyre.com/nxpyre/og-image.png"
                />
                <meta property="og:url" content="https://nxpyre.com/" />
                <meta property="og:type" content="website" />
            </Head>

            <Topnav />

            <main className={styles.main}>
                <Title />
                <Curves />
                <Footer />
            </main>
        </div>
    );
}
