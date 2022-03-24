import Image from "next/image";
import Link from "next/link";
import styles from "../curves/Curves.module.css";

export default function Curves() {
    return (
        <>
            <div className={styles.bluecurves}></div>
            <section className={styles.blue}>
                <div className={styles.blobcontent}>
                    <h1 className={styles.title}>Why NXpyre?</h1>
                    <br />
                    <br />
                    <p className={styles.description}>
                        🎯 Connect with like-minded peers and working
                        professionals
                    </p>
                    <p className={styles.description}>
                        ✨ Watch animations about careers in your field(s) of
                        interest
                    </p>
                    <p className={styles.description}>
                        🎉 Learn about internships, apprenticeships, full-time
                        work, etc. from those who have done it before
                    </p>
                    <p className={styles.description}>
                        ⭐️ Be inspired seize opportunities beyond school - and
                        impress universities your future employers
                    </p>
                    <br />
                    <br />
                    <div className={styles.learnMoreBigContainer}>
                        <div className={styles.learnMoreContainerColumn}>
                            <Link href="/about/#students">
                                <a>
                                    <Image
                                        src="/buttons/students.png"
                                        alt="Students - Learn More"
                                        width={300}
                                        height={300}
                                        className={styles.imageButton}
                                    />
                                </a>
                            </Link>
                            <Link href="/about/#professionals">
                                <a>
                                    <Image
                                        src="/buttons/professionals.png"
                                        alt="Professionals - Learn More"
                                        width={300}
                                        height={300}
                                        className={styles.imageButton}
                                    />
                                </a>
                            </Link>
                            <Link href="/about/#artists">
                                <a>
                                    <Image
                                        src="/buttons/artists.png"
                                        alt="Artists - Learn More"
                                        width={300}
                                        height={300}
                                        className={styles.imageButton}
                                    />
                                </a>
                            </Link>
                        </div>
                        <div className={styles.learnMoreContainerRow}>
                            <Link href="/about/#students">
                                <a>
                                    <Image
                                        src="/buttons/students.png"
                                        alt="Students - Learn More"
                                        width={200}
                                        height={200}
                                        className={styles.imageButton}
                                    />
                                </a>
                            </Link>
                            <Link href="/about/#professionals">
                                <a>
                                    <Image
                                        src="/buttons/professionals.png"
                                        alt="Professionals - Learn More"
                                        width={200}
                                        height={200}
                                        className={styles.imageButton}
                                    />
                                </a>
                            </Link>
                            <Link href="/about/#artists">
                                <a>
                                    <Image
                                        src="/buttons/artists.png"
                                        alt="Artists - Learn More"
                                        width={200}
                                        height={200}
                                        className={styles.imageButton}
                                    />
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
            <div className={styles.bluecurvesinverted}></div>
        </>
    );
}
