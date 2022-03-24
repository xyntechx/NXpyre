import { useState, useEffect } from "react";
import { supabase } from "../../utils/supabaseClient";
import { useRouter } from "next/dist/client/router";
import styles from "./Account.module.css";
import Options from "../options";

export default function Account({ session }) {
    const [loading, setLoading] = useState(true);
    const [username, setUsername] = useState(null);
    const [user_type, setUserType] = useState(null);
    const [career, setCareer] = useState(null);
    const [artist_code, setArtistCode] = useState(null);

    const router = useRouter();

    useEffect(() => {
        getProfile();
    }, [session]);

    async function getProfile() {
        try {
            setLoading(true);
            const user = supabase.auth.user();

            let { data, error, status } = await supabase
                .from("profiles")
                .select("username, user_type, career")
                .eq("id", user.id)
                .single();

            if (error && status !== 406) {
                throw error;
            }

            if (data) {
                setUsername(data.username);
                setUserType(data.user_type);
                setCareer(data.career);
            }
        } catch (error) {
            alert(error.message);
        } finally {
            setLoading(false);
        }
    }

    async function updateProfile({ username, user_type, career }) {
        try {
            setLoading(true);
            const user = supabase.auth.user();

            if (artist_code === process.env.NEXT_PUBLIC_ARTIST_CODE) {
                setCareer("Inspire Artist");
            } else {
                if (user_type === "Artist") {
                    setUserType(null);
                    setCareer(null);
                    alert(
                        "The user type 'Artist' is only for recruited Inspire Artists! \nPlease pick either 'Student' or 'Professional'!"
                    );
                }
            }

            const updates = {
                id: user.id,
                email: user.email,
                username: username,
                user_type: user_type,
                career: career,
                updated_at: new Date(),
            };

            let { error } = await supabase.from("profiles").upsert(updates, {
                returning: "minimal",
            });

            if (error) {
                throw error;
            } else {
                alert("Your profile has been successfully updated!");
            }
        } catch (error) {
            alert(error.message);
        } finally {
            setLoading(false);
        }
    }

    async function redirectUser({ username, user_type, career }) {
        if (username === null || user_type === null || career === null)
            alert("Please complete your profile before continuing!");
        else if (
            user_type === "Artist" &&
            artist_code !== process.env.NEXT_PUBLIC_ARTIST_CODE
        )
            alert(
                "The user type 'Artist' is only for recruited Inspire Artists! \nPlease pick either 'Student' or 'Professional'!"
            );
        else if (user_type === "Student") router.push("/student");
        else if (user_type === "Professional") router.push("/professional");
        else if (user_type === "Artist") router.push("/artist");
    }

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Log In</h1>

            <br />
            <br />

            <input
                id="username"
                type="text"
                className={styles.input}
                placeholder="Full Name"
                value={username || ""}
                onChange={(e) => setUsername(e.target.value)}
            />

            <br />

            <select
                id="user_type"
                className={styles.input}
                value={user_type || "DEFAULT"}
                onChange={(e) => setUserType(e.target.value)}
            >
                <option disabled value="DEFAULT">
                    I am a...
                </option>
                <option value="Student">Student</option>
                <option value="Professional">Professional</option>
                <option value="Artist">Artist</option>
            </select>

            <br />

            {user_type === "Artist" ? (
                <>
                    <input
                        id="artist-code"
                        type="text"
                        className={styles.input}
                        placeholder="Artist Code"
                        value={artist_code || ""}
                        onChange={(e) => setArtistCode(e.target.value)}
                    />
                </>
            ) : (
                <>
                    <select
                        id="career"
                        className={styles.input}
                        value={career || "DEFAULT"}
                        onChange={(e) => setCareer(e.target.value)}
                    >
                        <Options />
                    </select>
                </>
            )}

            <br />

            <button
                className={styles.buttonGreen}
                onClick={() => updateProfile({ username, user_type, career })}
                disabled={loading}
            >
                {loading ? "Loading..." : "Update"}
            </button>

            <br />

            <button
                className={styles.buttonBlue}
                onClick={() => redirectUser({ username, user_type, career })}
            >
                Continue
            </button>

            <br />

            <button
                className={styles.buttonRed}
                onClick={() => {
                    supabase.auth.signOut();
                    window.location.href = "/";
                }}
            >
                Sign Out
            </button>
        </div>
    );
}