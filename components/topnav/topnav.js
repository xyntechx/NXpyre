import Image from "next/image";
import Link from "next/link";
import styles from "../topnav/Topnav.module.css";
import { useState, useEffect } from "react";
import { supabase } from "../../utils/supabaseClient";

export default function Topnav() {
    const [session, setSession] = useState(null);

    useEffect(() => {
        setSession(supabase.auth.session());

        supabase.auth.onAuthStateChange((_event, session) => {
            setSession(session);
        });
    }, []);

    return (
        <header className={styles.nav}>
            <Link href="/">
                <a>
                    <Image
                        src="/nxpyre/transparent.png"
                        alt="NXpyre Logo"
                        width={50}
                        height={50}
                        className={styles.logo}
                    />
                </a>
            </Link>
            <div className={styles.navlinks}>
                <Link href="/">
                    <a className={styles.link}>Home</a>
                </Link>
                <Link href="/about">
                    <a className={styles.link}>About</a>
                </Link>
                <Link href="/team">
                    <a className={styles.link}>Team</a>
                </Link>
                {!session ? (
                    <Link href="/auth">
                        <a className={styles.speciallink}>Sign Up</a>
                    </Link>
                ) : (
                    <Link href="/account">
                        <a className={styles.speciallink}>Profile</a>
                    </Link>
                )}
            </div>
        </header>
    );
}
