import {
  motion,
  useMotionValue,
  useMotionValueEvent,
} from "framer-motion";
import { useEffect, useState } from "react";

const ShuffleCards = () => {
  const dragProgress = useMotionValue(0);
  const [order, setOrder] = useState([
    "front",
    "middle",
    "back",
    "back"
  ]);

  const handleDragEnd = () => {
    const x = dragProgress.get();
    if (x <= -50) {
      const orderCopy = [...order];
      orderCopy.unshift(orderCopy.pop());
      setOrder(orderCopy);
    }
  };


  return (
    <div className="grid place-content-center overflow-hidden bg-black px-8 py-24 text-slate-50">
      <motion.div
        whileTap={{ scale: 0.985 }}
        className="relative -ml-[100px] h-[450px] w-[350px] md:-ml-[175px]"
      >
        <Card
          imgUrl="Sales Intelligence Layer"
          testimonial="Integrate with your existing Salesforce data with 3rd Party Data to monitor markets, generate discovery questions, and recommend products and services for target personas. Leverage GenAI to accelerate deal cycles."
          handleDragEnd={handleDragEnd}
          dragProgress={dragProgress}
          position={order[0]}
        />
        <Card
          imgUrl="Text-to-SQL Agent"
          testimonial="   Database agnostic text-to-SQL translation agent that enables users to interrogate their data using natural human language. No SQL experience required."
          handleDragEnd={handleDragEnd}
          dragProgress={dragProgress}
          position={order[1]}
        />
        <Card
          imgUrl="RAG Chatbot Accelerator" 
          testimonial="Accelerated Retrieval Augmented Generation (RAG) enables faster large language model (LLM) queries, creating a more real and relevant chatbot user experience."
          handleDragEnd={handleDragEnd}
          dragProgress={dragProgress}
          position={order[2]}
        />
        <Card
          imgUrl="Maestro"
          testimonial="Coming soon..."
          handleDragEnd={handleDragEnd}
          dragProgress={dragProgress}
          position={order[3]}
        />
      </motion.div>
    </div>
  );
};

const Card = ({
  handleDragEnd,
  dragProgress,
  testimonial,
  position,
  imgUrl,
  author,
}) => {
  const [dragging, setDragging] = useState(false);

  const dragX = useMotionValue(0);

  useMotionValueEvent(dragX, "change", (latest) => {
    // When component first mounts, dragX will be a percentage
    // due to us setting the initial X value in the animate prop.
    if (typeof latest === "number" && dragging) {
      dragProgress.set(latest);
    } else {
      // Default back to 0 so that setInterval can continue
      dragProgress.set(0);
    }
  });

  const onDragStart = () => setDragging(true);

  const onDragEnd = () => {
    setDragging(false);
    handleDragEnd();
  };

  const x = position === "front" ? "0%" : position === "middle" ? "33%" : "66%";
  const rotateZ =
    position === "front" ? "0deg" : position === "middle" ? "0deg" : "0deg";
  const zIndex = position === "front" ? "2" : position === "middle" ? "1" : "0";

  const draggable = position === "front";

  return (
    <motion.div
      style={{
        zIndex,
        x: dragX,
      }}
      animate={{ rotate: rotateZ, x }}
      drag
      dragElastic={0.35}
      dragListener={draggable}
      dragConstraints={{
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
      }}
      onDragStart={onDragStart}
      onDragEnd={onDragEnd}
      transition={{
        duration: 0.35,
      }}
      className={`absolute left-0 top-0 grid h-[450px] w-[350px] select-none place-content-center space-y-6 rounded-2xl border-2 border-slate-700 bg-slate-800/20 p-6 shadow-xl backdrop-blur-md ${
        draggable ? "cursor-grab active:cursor-grabbing" : ""
      }`}
    >
      <div className="underline decoration-indigo-600 text-4xl uppercase tracking-tighter font-bold text-left">{imgUrl}</div>
      <span className="text-left text-md text-white trackong-tighter">
        {testimonial}
      </span>
      <div className="flex flex-row" >
        <a href="/contact">
          <button className="relative z-10 rounded-lg bg-gradient-to-br from-indigo-500 to-fuchsia-500 p-0.5 duration-300 group-hover:scale-110">
            <span className="block rounded-md bg-slate-950 px-4 py-2 font-semibold text-slate-100 duration-300 group-hover:bg-slate-950/50 group-hover:text-slate-50 group-active:bg-slate-950/80">
              Learn More
            </span>
          </button>
          </a>
          <a href="https://calendly.com/peregrine-labs/30min">
            <button className="relative z-10 rounded-lg bg-gradient-to-br from-indigo-500 to-fuchsia-500 p-0.5 duration-300 group-hover:scale-110">
              <span className="block rounded-md bg-slate-950 px-4 py-2 font-semibold text-slate-100 duration-300 group-hover:bg-slate-950/50 group-hover:text-slate-50 group-active:bg-slate-950/80">
                Schedule A Demo
              </span>
          </button>
        </a>
      </div>
    </motion.div>
  );
};

export default ShuffleCards;