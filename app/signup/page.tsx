// /app/success/page.tsx
import dynamic from "next/dynamic";

const SuccessPage = dynamic(() => import("./SignUpClient"), { ssr: false });
export default SuccessPage;
