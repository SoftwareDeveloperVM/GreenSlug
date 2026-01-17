import "./globals.css";
import NavBarFacts from "./components/NavBarFacts";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <NavBarFacts />
        {children} {/* Only pages render here */}
      </body>
    </html>
  );
}
