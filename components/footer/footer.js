import Image from "next/image";
import Link from "next/link";
import styles from "../footer/Footer.module.css";

export default function Footer() {
    return (
        <>
            <p className={styles.description}>
                Can&apos;t get enough of NXpyre? Follow us here!
            </p>
            <footer className={styles.footerLarge}>
                <Link href="https://www.linkedin.com/company/nxpyre/">
                    <a target="_blank" rel="noopener noreferrer">
                        <Image
                            src="/socials/linkedin.png"
                            alt="LinkedIn Logo"
                            width={60}
                            height={60}
                        />
                    </a>
                </Link>

                <Link href="https://www.instagram.com/nxpyre/">
                    <a target="_blank" rel="noopener noreferrer">
                        <Image
                            src="/socials/instagram.png"
                            alt="Instagram Logo"
                            width={60}
                            height={60}
                        />
                    </a>
                </Link>

                <Link href="mailto:contact@nxpyre.com">
                    <a target="_blank" rel="noopener noreferrer">
                        <Image
                            src="/socials/email.png"
                            alt="Email Logo"
                            width={70}
                            height={70}
                        />
                    </a>
                </Link>
            </footer>

            <footer className={styles.footerSmall}>
                <Link href="https://www.linkedin.com/company/nxpyre/">
                    <a target="_blank" rel="noopener noreferrer">
                        <Image
                            src="/socials/linkedin.png"
                            alt="LinkedIn Logo"
                            width={50}
                            height={50}
                        />
                    </a>
                </Link>

                <Link href="https://www.instagram.com/nxpyre/">
                    <a target="_blank" rel="noopener noreferrer">
                        <Image
                            src="/socials/instagram.png"
                            alt="Instagram Logo"
                            width={50}
                            height={50}
                        />
                    </a>
                </Link>

                <Link href="mailto:contact@nxpyre.com">
                    <a target="_blank" rel="noopener noreferrer">
                        <Image
                            src="/socials/email.png"
                            alt="Email Logo"
                            width={60}
                            height={60}
                        />
                    </a>
                </Link>
            </footer>

            <br />
            <br />
        </>
    );
}
