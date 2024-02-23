import { ReactElement } from "react";

type SectionWrapperProps = {
  children: ReactElement;
  className?: string;
  id?: string;
  bgColor?: "white" | "black";
};
const SectionWrapper = ({
  children,
  className,
  id,
  bgColor = "black",
}: SectionWrapperProps) => {
  const defaultClassName = "min-h-screen w-full flex flex-col justify-center";
  const bgColorClassName = {
    black: "bg-slate-950 text-white",
    white: "bg-white text-slate-950",
  };
  return (
    <section
      id={id}
      className={`${defaultClassName} ${bgColorClassName[bgColor]} ${className}`}
    >
      {children}
    </section>
  );
};

export default SectionWrapper;
