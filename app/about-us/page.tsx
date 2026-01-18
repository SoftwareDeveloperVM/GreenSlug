import Navbar from "../../components/NavBar";

export default function AboutUsPage() {
    return (
        <>
            <Navbar />

            <main
                style={{
                    minHeight: '100vh',
                    padding: '120px 24px',
                    background: 'linear-gradient(180deg, #f7f9f7 0%, #ffffff 100%)',
                }}
            >
                <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
                    {/* ---------- HEADER ---------- */}
                    <section style={{ textAlign: 'center', marginBottom: '80px' }}>
                        <h1
                            style={{
                                fontSize: '56px',
                                fontWeight: 900,
                                color: '#0f3d2a',
                                marginBottom: '24px',
                                letterSpacing: '-1px',
                            }}
                        >
                            About GreenSlug
                        </h1>

                        <p
                            style={{
                                fontSize: '20px',
                                color: '#134a33',
                                maxWidth: '720px',
                                margin: '0 auto',
                                lineHeight: 1.7,
                            }}
                        >
                            GreenSlug is a local-first food exchange platform designed to reduce
                            waste, strengthen communities, and make surplus food accessible to
                            those who need it most.
                        </p>
                    </section>

                    {/* ---------- MISSION ---------- */}
                    <section style={{ marginBottom: '72px' }}>
                        <h2
                            style={{
                                fontSize: '34px',
                                fontWeight: 800,
                                color: '#136942',
                                marginBottom: '16px',
                            }}
                        >
                            Our Mission
                        </h2>

                        <p
                            style={{
                                fontSize: '18px',
                                color: '#134a33',
                                lineHeight: 1.7,
                            }}
                        >
                            Every year, massive amounts of edible food go to waste while
                            communities face food insecurity. GreenSlug exists to close that
                            gap. We connect farmers, businesses, and nonprofits in a transparent
                            marketplace where surplus food finds purpose instead of landfills.
                        </p>
                    </section>

                    {/* ---------- HOW IT WORKS ---------- */}
                    <section style={{ marginBottom: '72px' }}>
                        <h2
                            style={{
                                fontSize: '34px',
                                fontWeight: 800,
                                color: '#136942',
                                marginBottom: '24px',
                            }}
                        >
                            How GreenSlug Works
                        </h2>

                        <ul
                            style={{
                                fontSize: '18px',
                                color: '#134a33',
                                lineHeight: 1.8,
                                paddingLeft: '20px',
                            }}
                        >
                            <li>
                                <strong>Farmers</strong> list surplus produce with flexible
                                pricing.
                            </li>
                            <li>
                                <strong>Businesses</strong> source fresh food locally and fairly.
                            </li>
                            <li>
                                <strong>Nonprofits</strong> request discounted or donated food to
                                serve their communities.
                            </li>
                            <li>
                                All parties negotiate transparently and coordinate pickups with
                                minimal friction.
                            </li>
                        </ul>
                    </section>

                    {/* ---------- VALUES ---------- */}
                    <section style={{ marginBottom: '72px' }}>
                        <h2
                            style={{
                                fontSize: '34px',
                                fontWeight: 800,
                                color: '#136942',
                                marginBottom: '24px',
                            }}
                        >
                            Our Values
                        </h2>

                        <div
                            style={{
                                display: 'grid',
                                gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
                                gap: '24px',
                            }}
                        >
                            <ValueCard
                                title="Sustainability"
                                text="Reducing waste is not optional — it’s essential."
                                icon="🌱"
                            />
                            <ValueCard
                                title="Transparency"
                                text="Fair pricing, open negotiation, and local trust."
                                icon="🔍"
                            />
                            <ValueCard
                                title="Community"
                                text="Strong local networks build resilient food systems."
                                icon="🤝"
                            />
                        </div>
                    </section>

                    {/* ---------- FOOTER CTA ---------- */}
                    <section style={{ textAlign: 'center' }}>
                        <p
                            style={{
                                fontSize: '20px',
                                color: '#0f3d2a',
                                fontWeight: 600,
                            }}
                        >
                            GreenSlug isn’t just a platform —
                            <br />
                            it’s a step toward a zero-waste future.
                        </p>
                    </section>
                </div>
            </main>
        </>
    );
}

/* ---------- VALUE CARD ---------- */

function ValueCard({
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
                backgroundColor: '#ffffff',
                padding: '28px',
                borderRadius: '18px',
                boxShadow: '0 10px 24px rgba(0,0,0,0.08)',
            }}
        >
            <div style={{ fontSize: '36px', marginBottom: '12px' }}>{icon}</div>

            <h3
                style={{
                    fontSize: '22px',
                    fontWeight: 700,
                    color: '#136942',
                    marginBottom: '10px',
                }}
            >
                {title}
            </h3>

            <p
                style={{
                    fontSize: '16px',
                    color: '#134a33',
                    lineHeight: 1.6,
                }}
            >
                {text}
            </p>
        </div>
    );
}
