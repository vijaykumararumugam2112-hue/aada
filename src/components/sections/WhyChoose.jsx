import { motion } from "framer-motion";

import Container from "../common/Container";
import SectionTitle from "../common/SectionTitle";
import FeatureCard from "../common/FeatureCard";

function WhyChoose() {
  return (
    <section
      id="why"
      className="py-28 bg-white"
    >
      <Container>

        <SectionTitle
          badge="⭐ Why Choose AADA"
          title="Built For Growth"
          subtitle="We don't just build websites and applications. We create digital experiences that help businesses attract customers, improve operations and grow with confidence."
        />

        <motion.div
          className="mt-20 grid gap-8 lg:grid-cols-2"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
        >

          <FeatureCard
            icon="⚡"
            color="blue"
            title="Fast Delivery"
            description="Efficient planning and streamlined development ensure your project is delivered quickly without compromising quality."
          />

          <FeatureCard
            icon="🎯"
            color="orange"
            title="Tailor-Made Solutions"
            description="Every business is unique. We build custom websites and applications that perfectly match your goals."
          />

          <FeatureCard
            icon="🚀"
            color="green"
            title="Modern Technology"
            description="Using React, Firebase, AI tools and cloud technologies, we build secure, scalable and future-ready solutions."
          />

          <FeatureCard
            icon="🤝"
            color="purple"
            title="Long-Term Support"
            description="Our partnership doesn't end after launch. We continue to support, improve and scale your digital products."
          />

        </motion.div>

      </Container>
    </section>
  );
}

export default WhyChoose;