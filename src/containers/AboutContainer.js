import Navbar from "@/components/Navbar";

const AboutContainer = () => {
  return (
    <div className="min-h-screen" style={{ background: "var(--background)", color: "var(--foreground)" }}>
      <section className="bg-white p-4">
        <Navbar variant="green" showBack={true} />
      </section>

    </div>
  );
};

export default AboutContainer;
