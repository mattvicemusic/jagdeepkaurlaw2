import { ImageResponse } from "next/og";
export const alt = "Jagdeep Kaur, Advocate. POSH and workplace legal support.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        padding: "50px 64px",
        background: "#faf6ee",
        color: "#193e38",
        fontFamily: "sans-serif",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          fontSize: 20,
          paddingBottom: 24,
        }}
      >
        <span>Advocate / Mumbai Metropolitan Region</span>
        <span>jagdeepkaur.legal</span>
      </div>
      <div
        style={{
          display: "flex",
          fontSize: 100,
          letterSpacing: -7,
          paddingBottom: 28,
          borderBottom: "2px solid #193e38",
        }}
      >
        Jagdeep Kaur
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          fontSize: 58,
          lineHeight: 1.2,
          letterSpacing: -2,
          paddingTop: 42,
        }}
      >
        <div style={{ display: "flex" }}>
          <span style={{ color: "#193e38" }}>POSH</span>
          <span> & workplace</span>
        </div>
        <span>legal support.</span>
      </div>
    </div>,
    size,
  );
}
