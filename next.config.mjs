/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ["image/avif", "image/webp"],
    // Zulässige Qualitätsstufen (Next 15 erfordert die Liste). 90 = höhere
    // Qualität für großformatige Foto-/Hero-Flächen, 75 = Default.
    qualities: [75, 90],
  },
};

export default nextConfig;
