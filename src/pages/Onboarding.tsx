import LogoHolder from "../components/LogoHolder";
import { Arrow } from "../assets";
import Login from "./Login";
import { ITabItem } from "../types";
import Signup from "./Signup";
import Tab from "../components/Tab";

interface OnboardingProps {
  onNext: () => void;
  onBack: () => void;
}

export const tabOptions: ITabItem[] = [
  { label: "Login", value: "login", component: <Login /> },
  { label: "Signup", value: "signup", component: <Signup /> },
];

const Onboarding = ({ onBack }: OnboardingProps) => {
  return (
    <main className="w-full h-screen flex flex-col items-center gap-10 bg-gradient-to-r from-purple-500 to-pink-500">
      <div className="w-full flex justify-center pt-10 relative">
        {/* rome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
        <img
          className="w-[30px] h-[30px] cursor-pointer absolute left-6"
          src={Arrow}
          alt="back arrow"
          onClick={onBack}
        />
        <LogoHolder size="small" />
      </div>

      <Tab options={tabOptions} />
    </main>
  );
};

export default Onboarding;
