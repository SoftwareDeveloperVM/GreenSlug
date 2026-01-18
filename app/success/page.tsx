// /app/success/page.tsx
import dynamic from "next/dynamic";

const SuccessPage = dynamic(() => import("./SuccessClient"), { ssr: false });
export default SuccessPage;
