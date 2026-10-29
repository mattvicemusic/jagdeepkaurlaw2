import { NextResponse } from "next/server";

/**
 * Kill switch only: set MAINTENANCE_MODE=1 in Vercel (+ redeploy) to take the
 * whole site down with a plain 503; remove the variable (+ redeploy) to bring
 * it back. A prolonged 503 can affect indexing; use this only for temporary outages.
 */
export function middleware() {
  if (process.env.MAINTENANCE_MODE === "1") {
    return new NextResponse("Service temporarily unavailable", {
      status: 503,
      headers: { "Retry-After": "3600", "Content-Type": "text/plain" },
    });
  }
  return NextResponse.next();
}
