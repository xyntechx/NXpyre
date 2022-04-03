import Head from "next/head";
import styles from "../styles/Home.module.css";
import Topnav from "../components/topnav/topnav";
import { useState } from "react";
import { supabase } from "../utils/supabaseClient";

export default function Auth() {
    const [loading, setLoading] = useState(false);
    const [email, setEmail] = useState("");

    async function handleLogin(email) {
        try {
            setLoading(true);
            const { error } = await supabase.auth.signIn(
                { email },
                { redirectTo: "https://nxpyre.com/account/" }
            );
            if (error) throw error;
            alert("Check your email for your Magic Link!");
        } catch (error) {
            alert(error.error_description || error.message);
        } finally {
            setLoading(false);
        }
    }
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
                <h1 className={styles.title}>Join NXpyre</h1>

                <br />
                <br />

                <input
                    type="email"
                    className={styles.input}
                    name="id"
                    placeholder="Your Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <br />

                <button
                    onClick={(e) => {
                        e.preventDefault();
                        handleLogin(email);
                    }}
                    disabled={loading}
                    className={styles.button}
                >
                    <span>{loading ? "Loading..." : "Let's Go!"}</span>
                </button>
            </main>
        </div>
    );
}
