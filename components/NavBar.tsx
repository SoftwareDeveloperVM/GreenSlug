"use client";

import { useRouter } from "next/navigation";
import Button from "./Button";

export default function Navbar() {
    const router = useRouter();

    return (
        <nav
            style={{
                display: "flex",
                justifyContent: "space-between",
                padding: "16px 32px",
                backgroundColor: "var(--green-deep)",
                color: "white",
            }}
        >
            <div
                style={{ fontWeight: "bold", fontSize: "24px", cursor: "pointer" }}
                onClick={() => router.push("/")}
            >
                GreenSlug
            </div>

            <div style={{ display: "flex", gap: "12px" }}>
                {/* ABOUT US (formerly Graphs) */}
                <Button
                    text="About Us"
                    onClick={() => router.push("/about-us")}
                />

                {/* INFO */}
                <Button
                    text="Info"
                    primary
                    onClick={() => router.push("/info")}
                />
            </div>
        </nav>
    );
}
