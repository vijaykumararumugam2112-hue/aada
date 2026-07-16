import {
  Phone,
  ArrowRight,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import Container from "../common/Container";
import Badge from "../common/Badge";
import { company } from "../../data/siteData";
import DeveloperScene from "../hero/DeveloperScene";

function Hero() {
  return (
    <section
  id="home"
  className="
    min-h-[100svh]
    flex
    items-center
    bg-gradient-to-b
    from-slate-50
    via-white
    to-slate-100
    pt-24
  "
>
      <Container>
        <div
  className="
    grid
    grid-cols-1
    gap-10
    lg:grid-cols-2
    lg:gap-16
    items-center
  "
>

          {/* ================= LEFT SIDE ================= */}

          <div>

            <Badge>
              🚀 Building Digital Experiences
            </Badge>

            <h1 className="mt-6 text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight">

              We Build

              <br />

              <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-700 bg-clip-text text-transparent">
                Digital Experiences
              </span>

              <br />

              That Grow
              <span className="text-orange-500"> Businesses.</span>

            </h1>

            <p className="mt-8 max-w-xl text-lg leading-8 text-slate-600">
              We help startups, businesses and brands establish a powerful
              digital presence through modern websites, scalable applications
              and high-performing Meta & Google Ads.
            </p>

            {/* Services */}

            <div className="mt-8 flex flex-wrap gap-3">

              <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
                💻 Website Development
              </span>

              <span className="rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-orange-700">
                📱 App Development
              </span>

              <span className="rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700">
                📈 Meta & Google Ads
              </span>

            </div>

            {/* Buttons */}

            <div className="mt-10 flex flex-wrap gap-4">

              <button
                className="
                  bg-blue-600
                  hover:bg-blue-700
                  text-white
                  px-8
                  py-4
                  rounded-2xl
                  font-semibold
                  flex
                  items-center
                  gap-2
                  shadow-lg
                  hover:shadow-blue-300
                  transition-all
                  duration-300
                "
              >
                Start Your Project

                <ArrowRight size={18} />
              </button>

              <a
                href={`tel:${company.phone}`}
                className="
                  border-2
                  border-slate-300
                  hover:border-blue-600
                  hover:bg-blue-50
                  px-8
                  py-4
                  rounded-2xl
                  font-semibold
                  flex
                  items-center
                  gap-2
                  transition-all
                  duration-300
                "
              >
                <Phone size={18} />
                Call Now
              </a>

            </div>

            {/* Stats */}

            <div className="mt-14 grid grid-cols-3 gap-6 text-center lg:flex lg:gap-12">

              <div>
                <h3 className="text-3xl font-bold text-blue-600">
                  3+
                </h3>

                <p className="text-slate-500">
                  Projects
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-orange-500">
                  3
                </h3>

                <p className="text-slate-500">
                  Core Services
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-green-600">
                  100%
                </h3>

                <p className="text-slate-500">
                  Client Focus
                </p>
              </div>

            </div>

          </div>

          {/* ================= RIGHT SIDE ================= */}

          <div className="flex justify-center lg:block">
  <DeveloperScene />
</div>

        </div>
      </Container>
    </section>
  );
}

export default Hero;