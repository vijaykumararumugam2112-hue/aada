import Container from "../common/Container";

import FooterCTA from "../footer/FooterCTA";
import FooterLinks from "../footer/FooterLinks";
import FooterBottom from "../footer/FooterBottom";

function Footer() {
  return (
    <footer className="relative overflow-hidden bg-slate-950 text-white">

      {/* Background */}

      <div className="absolute inset-0">

        <div className="absolute -top-32 left-0 h-96 w-96 rounded-full bg-blue-500/10 blur-[150px]" />

        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-cyan-400/10 blur-[150px]" />

        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `
              linear-gradient(to right,#3b82f6 1px,transparent 1px),
              linear-gradient(to bottom,#3b82f6 1px,transparent 1px)
            `,
            backgroundSize: "48px 48px",
          }}
        />

      </div>

      <Container>

        <div className="relative py-28">

          <FooterCTA />

          <FooterLinks />

          <FooterBottom />

        </div>

      </Container>

    </footer>
  );
}

export default Footer;