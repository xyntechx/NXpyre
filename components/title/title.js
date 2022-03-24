import Image from "next/image";
import Link from "next/link";
import styles from "../title/Title.module.css";

export default function Title() {
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
                    <Link href="/join">
                        <a className={styles.button}>Join NXpyre</a>
                    </Link>
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
                <Link href="/join">
                    <a className={styles.button}>Join NXpyre</a>
                </Link>
            </div>
        </main>
    );
}
