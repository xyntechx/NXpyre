import Image from "next/image";
import Link from "next/link";
import styles from "../topnav/Topnav.module.css";

export default function Topnav() {
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
                <Link href="/join">
                    <a className={styles.speciallink}>Join</a>
                </Link>
            </div>
        </header>
    );
}
