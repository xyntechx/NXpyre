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
                    <p className={styles.description}>
                        NXpyre is a platform connecting youth and professionals
                        to inspire youth to seize opportunities beyond school
                        and pursue their interests and career aspirations. Using
                        NXpyre, youth will learn from experienced peers and
                        working professionals from a plethora of fields about
                        different careers they can pursue now, including
                        internships, apprenticeships, full-time work, etc., via
                        animations. Hence, youth will be better-informed
                        regarding careers, inspiring them to realise their
                        dreams and take the first step towards their
                        aspirations.
                    </p>
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
