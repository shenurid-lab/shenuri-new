// src/sections/AllFeatures.jsx
import FeatureSection from "../components/FeatureSection";
import iconImg from "../assets/icon1.png";
import phoneImg from "../assets/frame 22.png";
import featureImg2 from "../assets/frame 23.png";
import featureImg3 from "../assets/frame 24.png";

export default function AllFeatures() {
  return (
    <>
      {/* Feature 1 */}
      <FeatureSection
        eyebrow="Lorem Ipsum is simply dummy text"
        subtext="Lorem Ipsum is simply dummy text"
        title={{
          highlight: "Lorem Ipsum",
          rest: " is simply dummy text of the printing.",
        }}
        body="KODEX TECHNOLOGY (PVT) LTD is a team of experienced mobile and web applications and website builders measuring dozens of completed projects. We build and develop mobile applications for several top platforms, including Android & iOS."
        iconImg={iconImg}
        iconBg="#08D3BB"
        featureImg={phoneImg}
        imageOn="right"
      />

      {/* Feature 2 */}
      <FeatureSection
        eyebrow="Lorem Ipsum is simply dummy text"
        subtext="Lorem Ipsum is simply dummy text"
        title={{
          highlight: "Lorem Ipsum",
          rest: " is simply dummy text of the printing.",
        }}
        body="KODEX TECHNOLOGY (PVT) LTD is a team of experienced mobile and web applications and website builders measuring dozens of completed projects. We build and develop mobile applications for several top platforms, including Android & iOS."
        iconImg={iconImg}
        iconBg="#1090CB"
        featureImg={featureImg2}
        imageOn="left"
      />

      {/* Feature 3 */}
      <FeatureSection
        eyebrow="Lorem Ipsum is simply dummy text"
        subtext="Lorem Ipsum is simply dummy text"
        title={{
          highlight: "Lorem Ipsum",
          rest: " is simply dummy text of the printing.",
        }}
        body="KODEX TECHNOLOGY (PVT) LTD is a team of experienced mobile and web applications and website builders measuring dozens of completed projects. We build and develop mobile applications for several top platforms, including Android & iOS."
        iconImg={iconImg}
        iconBg="#9208D3"
        featureImg={featureImg3}
        imageOn="right"
        withCircle={true}
      />
    </>
  );
}
