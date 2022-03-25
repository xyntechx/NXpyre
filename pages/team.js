import Head from "next/head";
import styles from "../styles/Home.module.css";
import Topnav from "../components/topnav/topnav";
import Image from "next/image";

export default function Team() {
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
                <h1 className={styles.title}>Our Core Team</h1>
                <br />
                <br />
                <section className={styles.teamSection}>
                    <Image
                        src="/team/nyx.jpeg"
                        alt="Nyx Audrey Angelo Iskandar, Founder"
                        width="200"
                        height="200"
                    />
                    <br />
                    <h3 className={styles.teamDescription}>
                        Nyx Audrey Angelo Iskandar
                    </h3>
                    <h3 className={styles.teamDescription}>Founder</h3>
                    <br />
                    <p className={styles.teamDesc}>
                        Nyx is a driven, ambitious, and inquisitive teenager who
                        loves to experiment with new things and strives for
                        improvement every day. She is passionate about computer
                        science, research, entrepreneurship, and
                        service-learning! Nyx is also a self-proclaimed sports
                        addict, having been in the school team for basketball in
                        primary school, netball in secondary school, and now
                        volleyball in junior college! She also loves drawing
                        manga (her style is inspired by her two favourite anime:
                        Dragon Ball Z and Haikyuu). All in all, &quot;stay
                        hungry, stay foolish&quot; is her motto and becoming a
                        multi-hyphenate is her goal.
                    </p>
                </section>

                <br />
                <br />
                <br />
                <br />

                <section className={styles.teamSection}>
                    <Image
                        src="/team/zen.jpeg"
                        alt="Soh Zen (Su Zhen), Outreach Lead"
                        width="200"
                        height="200"
                    />
                    <br />
                    <h3 className={styles.teamDescription}>
                        Soh Zen (Su Zhen)
                    </h3>
                    <h3 className={styles.teamDescription}>Outreach Lead</h3>
                    <br />
                    <p className={styles.teamDesc}>
                        Zen is a fervent individual who exudes unwavering
                        confidence. Currently, she is a student of Nanyang
                        Polytechnic who is enrolled in the Diploma in Nursing
                        programme. Outside of her studies, she is an acting
                        enthusiast, frequently participating in stage
                        performances. As a budding nurse, Zen hopes to serve the
                        community and make a difference, no matter how small it
                        is.
                    </p>
                </section>

                <br />
                <br />
                <br />
                <br />

                <section className={styles.teamSection}>
                    <Image
                        src="/team/rebecca.jpeg"
                        alt="Rebecca Moira Angelo Iskandar, Outreach Lead"
                        width="200"
                        height="200"
                    />
                    <br />
                    <h3 className={styles.teamDescription}>
                        Rebecca Moira Angelo Iskandar
                    </h3>
                    <h3 className={styles.teamDescription}>Outreach Lead</h3>
                    <br />
                    <p className={styles.teamDesc}>
                        Rebecca is a positive and energetic person with a warm
                        personality. She is eager to pursue her love for art,
                        specifically in terms of creating artworks to bring
                        people together, driving her to join the Art Club of
                        Raffles Girls&apos; School (Secondary) and Inspire where
                        she explores and develops her artistic skills.
                        Sometimes, you can spot Rebecca drawing either digitally
                        or on paper, or listening to pop music. More often,
                        it&apos;s both!
                    </p>
                </section>

                <br />
                <br />
                <br />
                <br />

                <section className={styles.teamSection}>
                    <Image
                        src="/team/jia xuan.jpeg"
                        alt="Lam Jia Xuan, Art Lead"
                        width="200"
                        height="200"
                    />
                    <br />
                    <h3 className={styles.teamDescription}>Lam Jia Xuan</h3>
                    <h3 className={styles.teamDescription}>Art Lead</h3>
                    <br />
                    <p className={styles.teamDesc}>
                        Jia Xuan is an amiable and resilient teenager who loves
                        to help others. She is excited to contribute as the Lead
                        Artist of Inspire because of her love for drawing! Her
                        hobbies also include watching anime and listening to
                        music. By and large, she is an ever-bubbly and
                        ever-enthusiastic person with great passion in all of
                        her endeavours!
                    </p>
                </section>

                <br />
                <br />
                <br />
                <br />

                <section className={styles.teamSection}>
                    <Image
                        src="/team/wen ze.jpeg"
                        alt="Tan Wen Ze, Art Lead"
                        width="200"
                        height="200"
                    />
                    <br />
                    <h3 className={styles.teamDescription}>Tan Wen Ze</h3>
                    <h3 className={styles.teamDescription}>Art Lead</h3>
                    <br />
                    <p className={styles.teamDesc}>
                        Wen Ze&apos;s expertise lies in art; he is skilled and
                        dedicated to his craft! Other than drawing, Wen Ze also
                        loves dancing and playing video games. Moreover, he is
                        interested in learning about history, both the facts as
                        well as the myths from the distant past. Truly, Wen Ze
                        is an energetic individual who strives to hone his
                        skills in media art design!
                    </p>
                </section>

                <br />
                <br />
                <br />
                <br />
            </main>
        </div>
    );
}
