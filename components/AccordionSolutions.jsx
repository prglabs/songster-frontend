import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiLogIn } from "react-icons/fi";



const RoundedSlideButton = () => {
    return (
    <a href="contact">
      <button
        className={`
          relative z-0 flex items-center gap-2 overflow-hidden rounded-lg border-[1px] 
          border-violet-300 px-4 py-2 font-semibold
          text-violet-300 transition-all duration-500
          
          before:absolute before:inset-0
          before:-z-10 before:translate-x-[150%]
          before:translate-y-[150%] before:scale-[2.5]
          before:rounded-[100%] before:bg-violet-300
          before:transition-transform before:duration-1000
          before:content-[""]
  
          hover:scale-105 hover:text-neutral-900
          hover:before:translate-x-[0%]
          hover:before:translate-y-[0%]
          active:scale-95`}
      >
        <span className="text-xl">Learn More</span>
      </button>
      </a>
    );
  };
  
const AccordionSolutions = () => {
  const [open, setOpen] = useState(solutions[0].id);
  const imgSrc = solutions.find((s) => s.id === open)?.imgSrc;
  return (
    <section className=" bg-black text-white">
      <div className=" max-w-5xl mx-auto grid gap-8 grid-cols-1 lg:grid-cols-[1fr_350px]">
        <div>
          <div className="flex flex-col gap-4">
            {solutions.map((q) => {
              return (
                <Solution {...q} key={q.id} open={open} setOpen={setOpen} index={q.id} />
              );
            })}
          </div>
        </div >
        <div className="bg-black font-semibold tracking-tight text-white rounded-2xl text-5xl lg:aspect-auto">
        We have unrelenting <span className="underline decoration-indigo-500">passion</span> for startups
        <br></br>
        <br></br>
            <p className="text-base">
            Peregrine Labs is on a mission to redefine the private market ecosystem. We are a team
            of technologists offering a truly differentiated operating model that <span className="underline decoration-indigo-500">shatters the VC mold.</span>
            </p>
            <br></br>
        <div className="flex items-left justify-left bg-black">

        <RoundedSlideButton/>
        
        </div>
        </div> 

      </div>
    </section>
  );
};

const Solution = ({ title, description, index, open, setOpen }) => {
  const isOpen = index === open;

  return (
    <div
      onClick={() => setOpen(index)}
      className="p-0.5 rounded-lg relative overflow-hidden cursor-pointer"
    >
      <motion.div
        initial={false}
        animate={{
          height: isOpen ? "240px" : "72px",
        }}
        className="p-6 rounded-[7px] bg-white flex flex-col justify-between relative z-20"
      >
        <div>
          <motion.p
            initial={false}
            animate={{
              color: isOpen ? "rgba(0, 0, 0, 0)" : "rgba(0, 0, 0, 1)",
            }}
            className="text-xl font-bold tracking-tight w-fit bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text"
          >
            {title}
          </motion.p>
          <div>
          <motion.p
            initial={false}
            animate={{
              opacity: isOpen ? 1 : 0,
            }}
            className="mt-4 bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent text-sm"
          >

            {description}
          </motion.p>
        </div>
        </div>
      </motion.div>
      <motion.div
        initial={false}
        animate={{
          opacity: isOpen ? 1 : 0,
        }}
        className="absolute inset-0 z-10 bg-gradient-to-r from-violet-600 to-indigo-600"
      />
      
      <div className="absolute inset-0 z-0 bg-slate-200" />
      
    </div>
  );
};

export default AccordionSolutions;

const solutions = [
  {
    id: 1,
    title: "01 | Direct Investments",
    description:
      "We make early-stage investments in cloud-native technology companies across B2B SaaS, Artificial Intelligence, Quantum Computing, and Healthcare/Life Sciences. Our systems integration teams work shoulder-to-shoulder with founders to accelerate the realization of their vision. As a systems integrator, we have the luxury of engaging with a more diverse set of startups earlier in their life-cycle and significantly lower the cost of capital for the founders that we partner with.",
  },
  {
    id: 2,
    title: "02 | Services for Equity",
    description:
      "Peregrine Labs offers creative commercial frameworks to cloud-native technology startups. Extend your runway and lower your OpEx by partially or fully funding Statements-Of-Work through service-for-equity agreements, warrants packages, and royalties -- all under a milestone driven approach.",
  },
  {
    id: 3,
    title: "03 | Innovation Lab",
    description:
    "We are redefining the status quo, by providing an environment for founders to develop transformational technology surrounded with the full support of our platform. We achieve this through equity swaps, giving you equity in Peregrine Labs in exchange for equity in your vision, creating a unified goal with aligned incentives between teams. You maintain full ownership over your intellectual property, and we work with you to commercialize it.",
 },
];

