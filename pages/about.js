import Head from "next/head";
import styles from "../styles/Home.module.css";
import Topnav from "../components/topnav/topnav";
import Image from "next/image";
import Link from "next/link";

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
                    content="https://nxpyre.com/nxpyre/og-image.png"
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
                <p className={styles.topPara}>
                    There are 3 user types in NXpyre:{" "}
                    <Link href="#teach">
                        <a className={styles.textLink}>Teachers</a>
                    </Link>
                    ,{" "}
                    <Link href="#animate">
                        <a className={styles.textLink}>Artists</a>
                    </Link>
                    ,{" "}
                    <Link href="#learn">
                        <a className={styles.textLink}>Learners</a>
                    </Link>
                    . Teachers include working professionals and youth with
                    employment experience who wish to share their wisdom with
                    the NXpyre community! Teachers will write
                    &quot;lessons&quot; about their fields and job experiences,
                    and those lessons will be transformed into animations. This
                    is done by Artists, talented individuals passionate about
                    art and animation who are recruited into NXpyre&apos;s team.
                    Finally, Learners watch the animations and learn about a
                    multitude of fields and careers, inspiring them to pursue
                    their career aspirations!
                </p>
                <br />
                <br />

                <section id="teach" className={styles.aboutSection}>
                    <div className={styles.bigImage}>
                        <Image
                            src="/buttons/teach.png"
                            alt="Teach - About"
                            width={300}
                            height={300}
                            className={styles.image}
                        />
                    </div>
                    <div className={styles.smallImage}>
                        <Image
                            src="/buttons/teach.png"
                            alt="Teach - About"
                            width={200}
                            height={200}
                            className={styles.image}
                        />
                    </div>
                    <div className={styles.aboutSubsection}>
                        <p className={styles.description}>
                            Do you want to develop and realise yourself through
                            the power of reflections? Do you want to share your
                            wisdom and experience with like-minded peers or the
                            future generation? At NXpyre, you can inspire future
                            professionals of your field and even yourself to
                            reach greater heights!
                        </p>
                        <br />
                        <p className={styles.description}>
                            🎯 Connect with ambitious youth and professionals
                        </p>
                        <p className={styles.description}>
                            ✨ Write about your field (e.g. Computer Science,
                            Architecture, etc.) and job experience (e.g.
                            internships, apprenticeships, full-time work, etc.),
                            no matter how niche or common it is
                        </p>
                        <p className={styles.description}>
                            🗣 Share that you have contributed to NXpyre and the
                            wider community via the Teacher Certificate you can
                            request from us
                        </p>
                        <p className={styles.description}>
                            ⭐️ Be inspired to reach new milestones in your
                            career and other aspirations
                        </p>
                    </div>
                </section>

                <br />
                <br />
                <br />
                <br />

                <section id="animate" className={styles.aboutSection}>
                    <div className={styles.bigImage}>
                        <Image
                            src="/buttons/animate.png"
                            alt="Animate - About"
                            width={300}
                            height={300}
                            className={styles.image}
                        />
                    </div>
                    <div className={styles.smallImage}>
                        <Image
                            src="/buttons/animate.png"
                            alt="Animate - About"
                            width={200}
                            height={200}
                            className={styles.image}
                        />
                    </div>
                    <div className={styles.aboutSubsection}>
                        <p className={styles.description}>
                            Do you want to build your portfolio with projects
                            that are both creative and impactful? Do you want to
                            contribute to NXpyre using your artistic skills?
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
                            🗣 Share that you have contributed to NXpyre and the
                            wider community via the Artist Certificate you can
                            request from us
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

                <section id="learn" className={styles.aboutSection}>
                    <div className={styles.bigImage}>
                        <Image
                            src="/buttons/learn.png"
                            alt="Learn - About"
                            width={300}
                            height={300}
                            className={styles.image}
                        />
                    </div>
                    <div className={styles.smallImage}>
                        <Image
                            src="/buttons/learn.png"
                            alt="Learn - About"
                            width={200}
                            height={200}
                            className={styles.image}
                        />
                    </div>
                    <div className={styles.aboutSubsection}>
                        <p className={styles.description}>
                            Do you aspire to enter a certain industry in the
                            future? Do you want to explore potential career
                            options? Joining NXpyre enables you to learn
                            directly from experienced peers and professionals
                            about a vast array of careers, ensuring that you are
                            better-informed when pursuing your dream career!
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
                            ⭐️ Be inspired to seize opportunities beyond school
                            (and impress universities and your future employers)
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
