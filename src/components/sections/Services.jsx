import { motion } from "framer-motion";

import Container from "../common/Container";
import SectionTitle from "../common/SectionTitle";
import ServiceCard from "../common/ServiceCard";

function Services() {
  return (
    <section
      id="services"
      className="py-28 bg-gradient-to-b from-white to-slate-50"
    >
      <Container>

        {/* Heading */}

        <SectionTitle
          badge="💼 What We Do"
          title="Our Premium Services"
          subtitle="We help startups, businesses and brands establish a strong digital presence through modern websites, scalable applications and result-driven digital marketing."
        />

        {/* Cards */}

        <motion.div
          className="mt-20 grid gap-8 lg:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.18,
              },
            },
          }}
        >

          {/* Website */}

          <motion.div
            variants={{
              hidden: {
                opacity: 0,
                y: 40,
              },
              visible: {
                opacity: 1,
                y: 0,
              },
            }}
          >
            <ServiceCard
              icon="💻"
              color="blue"
              title="Website Development"
              description="Modern, responsive and SEO-friendly websites designed to build your online presence and convert visitors into customers."
              features={[
                "Responsive Design",
                "SEO Optimized",
                "Fast Performance",
                "Business Websites",
              ]}
            />
          </motion.div>

          {/* App */}

          <motion.div
            variants={{
              hidden: {
                opacity: 0,
                y: 40,
              },
              visible: {
                opacity: 1,
                y: 0,
              },
            }}
          >
            <ServiceCard
              icon="📱"
              color="orange"
              title="App Development"
              description="Custom Android and Web Applications built with modern technologies to automate your business and improve customer experience."
              features={[
                "Android Apps",
                "Web Applications",
                "Admin Dashboard",
                "Cloud Integration",
              ]}
            />
          </motion.div>

          {/* Ads */}

          <motion.div
            variants={{
              hidden: {
                opacity: 0,
                y: 40,
              },
              visible: {
                opacity: 1,
                y: 0,
              },
            }}
          >
            <ServiceCard
              icon="📈"
              color="green"
              title="Meta & Google Ads"
              description="Generate high-quality leads and grow your business using targeted Meta and Google advertising campaigns."
              features={[
                "Meta Ads",
                "Google Ads",
                "Lead Generation",
                "Campaign Optimization",
              ]}
            />
          </motion.div>

        </motion.div>

      </Container>
    </section>
  );
}

export default Services;