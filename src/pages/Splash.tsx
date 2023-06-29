import Button from "../components/Button";
import LogoHolder from "../components/LogoHolder";
import { GoogleLogo, Logo, FacebookLogo } from "../assets";

interface SplashProps {
  onNext: () => void;
}

const Splash = ({ onNext }: SplashProps) => {
  return (
    <div className="grid grid-rows-2 grid-cols-1 place-items-center w-full h-screen bg-gradient-to-r from-purple-500 to-pink-500">
      <header className="flex flex-col items-center gap-10">
        <LogoHolder />
        <img src={Logo} alt="logo" />
      </header>

      <main className="flex flex-col items-center gap-6">
        <Button textColor="pink" onClick={onNext}>
          Login
        </Button>
        <Button textColor="red" onClick={onNext} icon={GoogleLogo}>
          Login with Google
        </Button>
        <Button textColor="blue" onClick={onNext} icon={FacebookLogo}>
          Login with Facebook
        </Button>

        <div className="flex items-center gap-3">
          <hr className="w-[85px] bg-[rgba(255, 255, 255, 0.25)]" />
          <p className="text-white">OR</p>
          <hr className="w-[85px] bg-[rgba(255, 255, 255, 0.25)]" />
        </div>

        <Button textColor="blue" onClick={onNext} secondary>
          Sign up
        </Button>
      </main>
      <footer className="flex flex-col items-center gap-6 mt-auto max-w-[600px] w-full pb-6">
        <hr className="w-full bg-[rgba(255, 255, 255, 0.25)]" />
        <p className="text-white text-xs">
          Made using{" "}
          <a className="underline" href="https://www.radix-ui.com/">
            Radix UI
          </a>
        </p>
      </footer>
    </div>
  );
};

export default Splash;
