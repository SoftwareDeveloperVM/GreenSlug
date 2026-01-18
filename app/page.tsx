"use client";

import Navbar from "../components/NavBar";
import Button from "../components/Button";
import { useRouter } from "next/navigation";

export default function Home() {
    const router = useRouter();

    return (
        <div
            style={{
                minHeight: "100vh",
                background: "linear-gradient(180deg, #7ebeab 0%, #6fbfa5 60%, #f7f9f7 100%)",
            }}
        >
            <Navbar />

            {/* ---------- HERO ---------- */}
            <section
                style={{
                    padding: "120px 20px 100px",
                    textAlign: "center",
                    maxWidth: "1100px",
                    margin: "0 auto",
                }}
            >
                <h1
                    style={{
                        fontSize: "64px",
                        fontWeight: 900,
                        color: "#0f3d2a",
                        marginBottom: "24px",
                        lineHeight: 1.05,
                        letterSpacing: "-1px",
                    }}
                >
                    GreenSlug
                </h1>

                <p
                    style={{
                        fontSize: "22px",
                        color: "#134a33",
                        maxWidth: "720px",
                        margin: "0 auto 48px",
                        lineHeight: 1.6,
                    }}
                >
                    Connecting farmers with local businesses and nonprofits with a mission
                    to reduce food waste efficiently.
                </p>

                <div style={{ display: "flex", justifyContent: "center" }}>
                    <Button
                        text="Get Started"
                        primary
                        onClick={() => router.push("/login")}
                    />
                </div>
            </section>

            {/* ---------- FEATURES ---------- */}
            <section
                style={{
                    backgroundColor: "#f7f9f7",
                    padding: "100px 20px",
                }}
            >
                <div
                    style={{
                        maxWidth: "1100px",
                        margin: "0 auto",
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
                        gap: "32px",
                    }}
                >
                    <FeatureCard
                        title="For Farmers"
                        text="List produce and set pricing in real time, while supporting nearby restaurants and kitchens."
                        icon="🌾"
                    />

                    <FeatureCard
                        title="For Businesses"
                        text="Source fresh food in bulk fro cheap prices, while supporting the Santa Cruz community"
                        icon="🏪"
                    />

                    <FeatureCard
                        title="For Nonprofits"
                        text="Request discounted food from local farms for donation programs and drives."
                        icon="❤️"
                    />
                </div>
            </section>

            {/* ---------- CTA ---------- */}
            <section
                style={{
                    padding: "100px 20px",
                    textAlign: "center",
                    background: "linear-gradient(135deg, #349265, #2f7f5b)",
                }}
            >
                <h2
                    style={{
                        fontSize: "42px",
                        fontWeight: 800,
                        color: "#ffffff",
                        marginBottom: "18px",
                        letterSpacing: "-0.5px",
                    }}
                >
                    Build a Zero-Waste Food System
                </h2>

                <p
                    style={{
                        fontSize: "18px",
                        color: "#e6f4ef",
                        maxWidth: "620px",
                        margin: "0 auto 36px",
                        lineHeight: 1.6,
                    }}
                >
                    Whether you're selling produce, buying it, or helping your community,
                    GreenSlug makes it seamless and simple.
                </p>

                <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        flexWrap: "wrap",
                        gap: "16px",
                    }}
                >
                </div>
            </section>
        </div>
    );
}

/* ---------- FEATURE CARD ---------- */

function FeatureCard({
                         title,
                         text,
                         icon,
                     }: {
    title: string;
    text: string;
    icon: string;
}) {
    return (
        <div
            style={{
                backgroundColor: "#ffffff",
                padding: "36px 32px",
                borderRadius: "20px",
                boxShadow: "0 12px 28px rgba(0,0,0,0.08)",
                textAlign: "center",
                transition: "transform 0.25s ease, box-shadow 0.25s ease",
            }}
        >
            <div
                style={{
                    fontSize: "44px",
                    marginBottom: "16px",
                }}
            >
                {icon}
            </div>

            <h3
                style={{
                    fontSize: "22px",
                    fontWeight: 700,
                    color: "#136942",
                    marginBottom: "14px",
                }}
            >
                {title}
            </h3>

            <p
                style={{
                    fontSize: "16px",
                    color: "#134a33",
                    lineHeight: 1.6,
                }}
            >
                {text}
            </p>
        </div>
    );
}
