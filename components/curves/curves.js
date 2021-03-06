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
                        and pursue their interests and career aspirations. Our
                        motto is &quot;Inspire the Next Generation&quot;,
                        encompassing NXpyre&apos;s mission to create a community
                        of youth and working professionals to ensure the
                        accessibility of career information for the next
                        generation of professionals in all fields. Using NXpyre,
                        youth will learn from experienced peers and working
                        professionals about a plethora of fields (e.g. Computer
                        Science, Architecture, etc.) and job experiences (e.g.
                        internships, apprenticeships, full-time work, etc.) via
                        animations. Hence, youth will be better-informed
                        regarding careers, inspiring them to realise their
                        dreams and take the first step towards their
                        aspirations.
                    </p>
                    <p className={styles.description}>
                        To achieve our mission, NXpyre engages Teachers,
                        Artists, Learners.
                    </p>
                    <br />
                    <div className={styles.learnMoreBigContainer}>
                        <div className={styles.learnMoreContainerColumn}>
                            <Link href="/about/#teach">
                                <a>
                                    <Image
                                        src="/buttons/teach.png"
                                        alt="Teach - Learn More"
                                        width={300}
                                        height={300}
                                        className={styles.imageButton}
                                    />
                                </a>
                            </Link>
                            <Link href="/about/#animate">
                                <a>
                                    <Image
                                        src="/buttons/animate.png"
                                        alt="Animate - Learn More"
                                        width={300}
                                        height={300}
                                        className={styles.imageButton}
                                    />
                                </a>
                            </Link>
                            <Link href="/about/#learn">
                                <a>
                                    <Image
                                        src="/buttons/learn.png"
                                        alt="Learn - Learn More"
                                        width={300}
                                        height={300}
                                        className={styles.imageButton}
                                    />
                                </a>
                            </Link>
                        </div>
                        <div className={styles.learnMoreContainerRow}>
                            <Link href="/about/#teach">
                                <a>
                                    <Image
                                        src="/buttons/teach.png"
                                        alt="Teach - Learn More"
                                        width={200}
                                        height={200}
                                        className={styles.imageButton}
                                    />
                                </a>
                            </Link>
                            <Link href="/about/#animate">
                                <a>
                                    <Image
                                        src="/buttons/animate.png"
                                        alt="Animate - Learn More"
                                        width={200}
                                        height={200}
                                        className={styles.imageButton}
                                    />
                                </a>
                            </Link>
                            <Link href="/about/#learn">
                                <a>
                                    <Image
                                        src="/buttons/learn.png"
                                        alt="Learn - Learn More"
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
