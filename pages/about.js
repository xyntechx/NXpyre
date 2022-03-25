import Head from "next/head";
import styles from "../styles/Home.module.css";
import Topnav from "../components/topnav/topnav";
import Image from "next/image";

export default function About() {
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
                    content="https://nxpyre.com/og-image.png"
                />
                <meta property="og:url" content="https://nxpyre.com/" />
                <meta property="og:type" content="website" />
            </Head>

            <Topnav />

            <main className={styles.main}>
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <h1 className={styles.title}>What to Expect</h1>
                <br />
                <br />
                <section id="students" className={styles.aboutSection}>
                    <div className={styles.bigImage}>
                        <Image
                            src="/buttons/students.png"
                            alt="Students - About"
                            width={300}
                            height={300}
                            className={styles.image}
                        />
                    </div>
                    <div className={styles.smallImage}>
                        <Image
                            src="/buttons/students.png"
                            alt="Students - About"
                            width={200}
                            height={200}
                            className={styles.image}
                        />
                    </div>
                    <div className={styles.aboutSubsection}>
                        <p className={styles.description}>
                            Do you aspire to enter a certain industry in the
                            future? Do you want to explore potential career
                            options? To those looking to seize opportunities
                            beyond school, joining NXpyre enables you to learn
                            directly from experienced peers and professionals
                            about a vast array of careers, ensuring that you are
                            better-informed when pursuing your dream career! To
                            those who have experienced the working world,
                            joining NXpyre provides you a platform to share your
                            voice and stories with the like-minded youth here!
                        </p>
                        <br />
                        <p className={styles.description}>
                            🎯 Connect with like-minded peers and working
                            professionals
                        </p>
                        <p className={styles.description}>
                            ✨ Watch animations about careers in your field(s)
                            of interest
                        </p>
                        <p className={styles.description}>
                            🎉 Learn about internships, apprenticeships,
                            full-time work, etc. from those who have done them
                            before
                        </p>
                        <p className={styles.description}>
                            🗣 Share about internships, apprenticeships,
                            full-time work, etc. with peers
                        </p>
                        <p className={styles.description}>
                            ⭐️ Be inspired to seize opportunities beyond school
                            (and impress universities your future employers)
                        </p>
                    </div>
                </section>

                <br />
                <br />
                <br />
                <br />

                <section id="professionals" className={styles.aboutSection}>
                    <div className={styles.bigImage}>
                        <Image
                            src="/buttons/professionals.png"
                            alt="Professionals - About"
                            width={300}
                            height={300}
                            className={styles.image}
                        />
                    </div>
                    <div className={styles.smallImage}>
                        <Image
                            src="/buttons/professionals.png"
                            alt="Professionals - About"
                            width={200}
                            height={200}
                            className={styles.image}
                        />
                    </div>
                    <div className={styles.aboutSubsection}>
                        <p className={styles.description}>
                            Do you want to develop and realise yourself through
                            the power of reflections? Do you want to share your
                            wisdom and experience with the future generation? At
                            NXpyre, you can inspire the next generation of
                            professionals of your field and even inspire
                            yourself to reach greater heights!
                        </p>
                        <br />
                        <p className={styles.description}>
                            🎯 Connect with ambitious youth seeking
                            opportunities beyond school
                        </p>
                        <p className={styles.description}>
                            🗣 Write lessons about your career to be watched as
                            animations by youth
                        </p>
                        <p className={styles.description}>
                            ⭐️ Be inspired to reach new milestones in your
                            career
                        </p>
                    </div>
                </section>

                <br />
                <br />
                <br />
                <br />

                <section id="artists" className={styles.aboutSection}>
                    <div className={styles.bigImage}>
                        <Image
                            src="/buttons/artists.png"
                            alt="Artists - About"
                            width={300}
                            height={300}
                            className={styles.image}
                        />
                    </div>
                    <div className={styles.smallImage}>
                        <Image
                            src="/buttons/artists.png"
                            alt="Artists - About"
                            width={200}
                            height={200}
                            className={styles.image}
                        />
                    </div>
                    <div className={styles.aboutSubsection}>
                        <p className={styles.description}>
                            Do you want to build your portfolio with projects
                            that are both creative and impactful? Do you want to
                            contribute to Inspire using your artistic skills?
                            Contributing to NXpyre promises you a wonderful
                            experience of creating animations to make the
                            inspiring engaging!
                        </p>
                        <br />
                        <p className={styles.description}>
                            🎯 Animate the career experiences of youth and
                            professionals
                        </p>
                        <p className={styles.description}>
                            ✨ Build your skills and portfolio via NXpyre
                            animations
                        </p>
                        <p className={styles.description}>
                            ⭐️ Be inspired to contribute to the community using
                            your artistic talent
                        </p>
                    </div>
                </section>

                <br />
                <br />
                <br />
                <br />
            </main>
        </div>
    );
}
