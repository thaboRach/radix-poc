import classNames from "classnames";

interface LogoProps {
  size?: "small" | "large";
}

const LogoHolder = ({ size = "large" }: LogoProps) => {
  const logoClass = classNames("flex justify-center rounded-2xl bg-white", {
    "w-[95px] h-[95px]": size === "large",
    "w-[50px] h-[50px]": size === "small",
  });
  return <div className={logoClass} />;
};

export default LogoHolder;
