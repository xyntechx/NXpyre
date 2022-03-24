import Head from "next/head";
import styles from "../styles/Home.module.css";
import { useState, useEffect } from "react";
import { supabase } from "../utils/supabaseClient";
import Topnav from "../components/topnav/topnav";
import Title from "../components/title/title";
import Curves from "../components/curves/curves";
import Footer from "../components/footer/footer";

export default function Home() {
    const [session, setSession] = useState(null);

    useEffect(() => {
        setSession(supabase.auth.session());

        supabase.auth.onAuthStateChange((_event, session) => {
            setSession(session);
        });
    }, []);

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
                    content="https://nxpyre.com/og-image.png"
                />
                <meta property="og:url" content="https://nxpyre.com/" />
                <meta property="og:type" content="website" />
            </Head>

            <Topnav />

            {!session ? (
                <main className={styles.main}>
                    <Title />
                    <Curves />
                    <Footer />
                </main>
            ) : (
                <></>
                // TODO: Account component
            )}
        </div>
    );
}
