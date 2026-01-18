import Navbar from "../../components/NavBar";

export default function InfoPage() {
    return (
        <>
            <Navbar />

            <main
                style={{
                    minHeight: '100vh',
                    padding: '80px 24px',
                    background: '#fafafa',
                }}
            >
                <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
                    {/* ---------- HEADER ---------- */}
                    <section style={{ textAlign: 'center', marginBottom: '60px' }}>
                        <h1
                            style={{
                                fontSize: '48px',
                                fontWeight: 900,
                                color: '#0f3d2a',
                                marginBottom: '16px',
                            }}
                        >
                            Local Food Waste in Santa Cruz
                        </h1>

                        <p style={{ fontSize: '18px', color: '#134a33', lineHeight: 1.6 }}>
                            Food waste is a major environmental and social issue in Santa Cruz
                            County. Farms, distributors, and retailers often discard edible food
                            due to cosmetic standards, surplus harvests, or logistical barriers.
                        </p>
                    </section>

                    {/* ---------- FACTS ---------- */}
                    <section style={{ marginBottom: '60px' }}>
                        <h2
                            style={{
                                fontSize: '32px',
                                fontWeight: 800,
                                color: '#136942',
                                marginBottom: '20px',
                            }}
                        >
                            Key Facts
                        </h2>

                        <ul style={{ fontSize: '18px', lineHeight: 1.7, color: '#134a33' }}>
                            <li>
                                Food waste makes up a significant portion of landfill material in
                                Santa Cruz County.
                            </li>
                            <li>
                                California law SB 1383 requires counties to reduce organic waste
                                disposal and recover edible food.
                            </li>
                            <li>
                                Many farms in the Pajaro Valley discard surplus produce due to labor
                                and transportation costs.
                            </li>
                        </ul>
                    </section>

                    {/* ---------- GRAPHS ---------- */}
                    <section style={{ marginBottom: '60px' }}>
                        <h2
                            style={{
                                fontSize: '32px',
                                fontWeight: 800,
                                color: '#136942',
                                marginBottom: '20px',
                            }}
                        >
                            Visual Data
                        </h2>

                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
                            <GraphPlaceholder title="Food Waste in Santa Cruz Landfills" />
                            <GraphPlaceholder title="Surplus Produce from Local Farms" />
                        </div>
                    </section>

                    {/* ---------- ARTICLES ---------- */}
                    <section style={{ marginBottom: '60px' }}>
                        <h2
                            style={{
                                fontSize: '32px',
                                fontWeight: 800,
                                color: '#136942',
                                marginBottom: '20px',
                            }}
                        >
                            Local Context & Articles
                        </h2>

                        <Article
                            title="Surplus Produce in the Pajaro Valley"
                            text="Farms in the Santa Cruz and Pajaro Valley region often grow more produce than markets can absorb, leading to food waste despite ongoing food insecurity."
                        />

                        <Article
                            title="Santa Cruz County Composting & Recovery"
                            text="County programs aim to divert food scraps from landfills and expand edible food recovery partnerships with farms and nonprofits."
                        />
                    </section>

                    {/* ---------- ACTION ---------- */}
                    <section
                        style={{
                            background: '#ffffff',
                            padding: '40px',
                            borderRadius: '16px',
                            boxShadow: '0 6px 18px rgba(0,0,0,0.06)',
                            textAlign: 'center',
                        }}
                    >
                        <h2
                            style={{
                                fontSize: '30px',
                                fontWeight: 800,
                                color: '#136942',
                                marginBottom: '16px',
                            }}
                        >
                            Why GreenSlug Matters
                        </h2>

                        <p style={{ fontSize: '18px', color: '#134a33', lineHeight: 1.6 }}>
                            GreenSlug helps bridge the gap between surplus food and community
                            needs by enabling direct, transparent connections between farmers,
                            businesses, and nonprofits.
                        </p>
                    </section>
                </div>
            </main>
        </>
    );
}

/* ---------- COMPONENTS ---------- */

function GraphPlaceholder({ title }: { title: string }) {
    return (
        <div
            style={{
                background: '#ffffff',
                padding: '24px',
                borderRadius: '14px',
                minHeight: '220px',
                boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
                textAlign: 'center',
                color: '#777',
            }}
        >
            📊 {title}
        </div>
    );
}

function Article({ title, text }: { title: string; text: string }) {
    return (
        <article style={{ marginBottom: '24px' }}>
            <h3 style={{ fontSize: '22px', fontWeight: 700 }}>{title}</h3>
            <p style={{ fontSize: '18px', color: '#333', lineHeight: 1.7 }}>{text}</p>
        </article>
    );
}