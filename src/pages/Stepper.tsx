import { useMultiStep } from "../hooks/use-multi-step";
import Splash from "./Splash";
import Onboarding from "./Onboarding";

const Stepper = () => {
  const { step, next, back } = useMultiStep([
    <Splash onNext={() => next()} />,
    <Onboarding onNext={() => next()} onBack={() => back()} />,
  ]);
  return <>{step}</>;
};

export default Stepper;
