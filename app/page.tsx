import { headers } from "next/headers";
import DesktopSite from "@/app/components/DesktopSite";
import MobileSite from "@/app/components/MobileSite";

// Phones only — tablets/iPad fall through to the (fluid) desktop layout.
const MOBILE_UA = /Android.+Mobile|iPhone|iPod|Windows Phone|BlackBerry|Opera Mini|IEMobile|webOS/i;

export default function Page() {
  const ua = headers().get("user-agent") || "";
  return MOBILE_UA.test(ua) ? <MobileSite /> : <DesktopSite />;
}
