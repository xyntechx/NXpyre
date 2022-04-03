import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import Topnav from "../components/topnav/topnav";
import Account_s from "../components/account/account-s";
import { useState, useEffect } from "react";
import { supabase } from "../utils/supabaseClient";

export default function Account() {
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
                    content="https://nxpyre.com/nxpyre/og-image.png"
                />
                <meta property="og:url" content="https://nxpyre.com/" />
                <meta property="og:type" content="website" />
            </Head>

            <Topnav />

            <main className={styles.main}>
                {!session ? (
                    <>
                        <h1 className={styles.title}>
                            Oops! Please log in/sign up first!
                        </h1>
                        <br />
                        <Link href="/auth">
                            <a className={styles.button}>Join NXpyre</a>
                        </Link>
                    </>
                ) : (
                    <Account_s key={session.user.id} session={session} />
                )}
            </main>
        </div>
    );
}
