import ImageFrame from "@/components/ui/ImageFrame";

/**
 * PortraitBleed — vollflächiges Großformat mit kleinem hellen Overlay-Block
 * oben links.
 */
export default function PortraitBleed() {
  return (
    <section
      id="portrait-bleed"
      style={{
        position: "relative",
        background: "var(--bg)",
        width: "100%",
        height: "1612px",
      }}
    >
      <ImageFrame
        src="/assets/acc-1.jpg"
        alt="Großformat — echte Arbeitssituation bei MISCHOK"
        placeholder="Grossformat — echte Arbeitssituation"
        sizes="100vw"
      />
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          color: "#E4E3E1",
          padding: "14px 22px",
          fontFamily: "var(--mono)",
          fontSize: "12px",
          letterSpacing: "0.08em",
          width: "312px",
          height: "82px",
          backgroundColor: "#FEFEFE",
        }}
      />
    </section>
  );
}
