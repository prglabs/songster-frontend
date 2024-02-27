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
  const defaultClassName = "w-full flex flex-col justify-center";
  const bgColorClassName = {
    black: "bg-black text-white",
    white: "bg-white text-black ",
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
