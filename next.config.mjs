/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ["image/avif", "image/webp"],
    // Zulässige Qualitätsstufen (Next 15 erfordert die Liste). 75 = Default,
    // 90 = großformatige Foto-/Hero-Flächen, 95 = das prominente Hero-Bild
    // (geringere Kompression, sichtbar in Flächen wie Hemd/Wand).
    qualities: [75, 90, 95],
  },
};

export default nextConfig;
