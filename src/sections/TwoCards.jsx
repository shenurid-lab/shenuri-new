// src/components/TwoCards.jsx
import bell from "../assets/bell.png";
import Card from "../components/Card";

export default function TwoCards() {
  return (
    <section className="bg-white py-30">
      <div className="max-w-6xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* LEFT CARD (light) */}
        <Card
          title="Lorem Ipsum is simply dummy text."
          text="KODEX TECHNOLOGY (PVT) LTD is a team of experienced mobile and web
          applications and website builders measuring dozens of completed
          projects. We build and develop mobile applications for several top
          platforms, including Android & iOS."
          buttonText="View More"
          variant="light"
        />

        {/* RIGHT CARD (dark with icon) */}
        <Card
          title="Lorem Ipsum is simply dummy text."
          text="KODEX TECHNOLOGY (PVT) LTD is a team of experienced mobile and web
          applications and website builders measuring dozens of completed
          projects. We build and develop mobile applications for several top
          platforms, including Android & iOS."
          buttonText="View More"
          variant="dark"
          icon={{ src: bell, alt: "Bell" }}
        />
      </div>
    </section>
  );
}
