import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const ServiceSlider = () => {
  const [selected, setSelected] = useState(0);

  return (
    <section className="mx-auto flex max-w-5xl flex-col-reverse items-center gap-6 bg-black px-4 py-12 md:flex-row md:gap-12 md:px-8">
      <AnimatePresence mode="wait">
        {FEATURES.map((tab, index) => {
          return selected === index ? (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              key={index}
              className="w-full"
            >
              <tab.Feature />
            </motion.div>
          ) : undefined;
        })}
      </AnimatePresence>
      <Tabs selected={selected} setSelected={setSelected} />
    </section>
  );
};

const Tabs = ({ selected, setSelected }) => {
  return (
    <div className="w-full shrink-0 overflow-scroll md:w-fit">
      {FEATURES.map((tab, index) => {
        return (
          <Tab
            key={index}
            setSelected={setSelected}
            selected={selected === index}
            title={tab.title}
            tabNum={index}
          />
        );
      })}
    </div>
  );
};

const Tab = ({ selected, title, setSelected, tabNum }) => {
  return (
    <div className="group relative w-full md:w-fit">
      <button
        onClick={() => setSelected(tabNum)}
        className="relative z-0 flex w-full border-l-[6px] border-slate-200 p-2 transition-colors group-hover:border-slate-300 md:flex-col md:border-l-8 md:p-6"
      >
        <span
          className={`min-w-[150px] max-w-[270px] text-start rounded text-lg tracking-tight font-semibold transition-colors md:text ${
            selected
              ? "text-indigo-500"
              : "text-white group-hover:text-"
          }`}
        >
          {title}
        </span>
      </button>
      {selected && (
        <motion.span
          layoutId="vertical-slide-feature-slider"
          className="absolute bottom-0 left-0 top-0 z-10 w-[6px] bg-indigo-500 md:w-2 "
        />
      )}
    </div>
  );
};

export default ServiceSlider;

const FEATURES = [
  {
    title: "Artificial Intelligence",
    Feature: () => <ArtificialIntelligenceFeature/>,
  },
  {
    title: "Cost Optimization",
    Feature: () => <CostOptimizationFeature />,
  },
  {
    title: "Systems Integration",
    Feature: () => <SystemsIntegrationFeature />,
  },
  {
    title: "Application Development",
    Feature: () => <ApplicationDevelopment />,
  },
  {
    title: "Managed Services",
    Feature: () => <ManagedServicesFeature />,
  },
];

const ArtificialIntelligenceFeature = ({ text }) => (
  // <div className="w-full">
    <div className="relative w-full rounded-xl bg-black shadow-xl">
      <div className="flex w-full rounded-t-xl bg-black p-3">
      {/* </div> */}
      <div className="">
        <p className="text-4xl tracking-tight font-bold text-white underline decoration-indigo-500">
           Artificial Intelligence
        </p>
        <br></br>
        <div className="text-white font-semibold tracking-0">
          Our engineers bring subject-matter expertise in artificial intelligence and
          machine learning. We offer solution design, implementation, management,
          and consulting services across various domains, including predictive
          analytics, unsupervised learning, and Generative AI.
        </div>
        <br></br>
        <GradientShadowButton></GradientShadowButton>
      </div>
    </div>
  </div>
);

const CostOptimizationFeature = ({ text }) => (
  <div className="w-full">
    <div className="relative h-[300px] w-full rounded-xl bg-black shadow-xl">
      <div className="flex w-full gap-1.5 rounded-t-xl bg-black p-3">
      </div>
      <div className="p-2">
        <p className="text-4xl tracking-tight font-bold text-white bg-clip-text underline decoration-indigo-500">
           Cost Optimization
        </p>
        <br></br>
        <div className="text-white font-semibold">
          Peregrine Labs, founded by former AWS Solutions Architects and Data Scientists, assists customers in optimizing their cloud computing operations 
          for cost-efficiency and innovation. We achieve this by optimizing infrastructure 
          for scalability and guiding customers through contract negotiations with cloud providers.
        </div>
        <br></br>
        <GradientShadowButton></GradientShadowButton>
      </div>
    </div>
  </div>
);

const SystemsIntegrationFeature = ({ text }) => (
  <div className="w-full">
    <div className="relative h-[300px] w-full rounded-xl bg-black shadow-xl">
      <div className="flex w-full gap-1.5 rounded-t-xl bg-black p-3">
      </div>
      <div className="p-2">
        <p className="text-4xl tracking-tight font-bold text-white underline decoration-indigo-500">
           Systems Integration
        </p>
        <br></br>
        <div className="font-semibold text-white">
        We have extensive experience integrating first-party cloud services, third-party 
        independent software, and proprietary in-house solutions. Our
        engineers work with customers to modernize applications, migrate
        workloads from on-premise to cloud, and migrate workloads across public
        cloud service providers.
        </div>
        <br></br>
        <GradientShadowButton></GradientShadowButton>
      </div>
    </div>
  </div>
);
const ApplicationDevelopment = ({ text }) => (
  <div className="w-full">
    <div className="relative h-[300px] w-full rounded-xl bg-black shadow-xl">
      <div className="flex w-full gap-1.5 rounded-t-xl bg-black p-3">
      </div>
      <div className="p-2">
        <p className="text-4xl tracking-tight font-bold text-white underline decoration-indigo-500">
           Application Development
        </p>
        <br></br>
        <div className="text-white font-semibold">
        Rapidly build your MVP or extend existing product functionality with
        Peregrine's application development team. We specialize in back-end
        design and development, rapid prototyping, front-end integration, and
        UI/UX design services.
        </div>
        <br></br>
        <GradientShadowButton></GradientShadowButton>
      </div>
    </div>
  </div>
);
const ManagedServicesFeature = ({ text }) => (
  <div className="w-full">
    <div className="relative h-[300px] w-full rounded-xl bg-black shadow-xl">
      <div className="flex w-full gap-1.5 rounded-t-xl bg-black p-3">
      </div>
      <div className="p-2">
        <p className="text-4xl tracking-tight font-bold text-white underline decoration-indigo-500">
           Managed Services
        </p>
        <br></br>
        <div className="text-white font-semibold">
        Offload the operational complexity of managing cloud infrastructure and
        services to our engineering teams. Peregrine Labs provides managed
        services for individual technologies, platforms, and cloud environments,
        enabling your teams to shift focus from tedious infrastructure management
        to building product differentiation.
        </div>
        <br></br>
        <GradientShadowButton></GradientShadowButton>
      </div>
    </div>
  </div>
);

const GradientShadowButton = () => {
  return (
    <div className="group relative w-fit transition-transform duration-300 active:scale-95">
      <button className="relative z-10 rounded-lg bg-gradient-to-br from-indigo-500 to-fuchsia-500 p-0.5 duration-300 group-hover:scale-110">
        <span className="block rounded-md bg-slate-950 px-4 py-2 font-semibold text-slate-100 duration-300 group-hover:bg-slate-950/50 group-hover:text-slate-50 group-active:bg-slate-950/80">
          <a href='/contact'>Learn More</a>
        </span>
      </button>
      <span className="pointer-events-none absolute -inset-4 z-0 transform-gpu rounded-2xl bg-gradient-to-br from-indigo-500 to-fuchsia-500 opacity-30 blur-xl transition-all duration-300 group-hover:opacity-90 group-active:opacity-50" />
    </div>
  );
};