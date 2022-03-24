import Image from "next/image";
import Link from "next/link";
import styles from "../title/Title.module.css";
import { useState, useEffect } from "react";
import { supabase } from "../../utils/supabaseClient";

export default function Title() {
    const [session, setSession] = useState(null);

    useEffect(() => {
        setSession(supabase.auth.session());

        supabase.auth.onAuthStateChange((_event, session) => {
            setSession(session);
        });
    }, []);
    return (
        <main className={styles.main}>
            {/* Large Screens */}
            <div className={styles.largeContainer}>
                <Image
                    src="/nxpyre/nxpyre.png"
                    alt="NXpyre Logo"
                    width={300}
                    height={300}
                    className={styles.logo}
                />
                <div>
                    <div className={styles.columnFlex}>
                        <h1 className={styles.title}>NXpyre</h1>
                        <p className={styles.description}>
                            Inspire the Next Generation
                        </p>
                    </div>
                    <br />
                    <br />
                    {!session ? (
                        <Link href="/auth">
                            <a className={styles.button}>Join NXpyre</a>
                        </Link>
                    ) : (
                        <Link href="/account">
                            <a className={styles.button}>Join NXpyre</a>
                        </Link>
                    )}
                </div>
            </div>

            {/* Small Screens */}
            <div className={styles.smallContainer}>
                <h1 className={styles.title}>NXpyre</h1>
                <p className={styles.description}>
                    Inspire the Next Generation
                </p>
                <Image
                    src="/nxpyre/nxpyre.png"
                    alt="NXpyre Logo"
                    width={150}
                    height={150}
                    className={styles.logo}
                />
                <br />
                {!session ? (
                    <Link href="/auth">
                        <a className={styles.button}>Join NXpyre</a>
                    </Link>
                ) : (
                    <Link href="/account">
                        <a className={styles.button}>Join NXpyre</a>
                    </Link>
                )}
            </div>
        </main>
    );
}
