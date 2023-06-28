import InputField from "../components/InputField";
import Button from "../components/Button";
import Toggle from "../components/Toggle";
import { CheckMark, FacebookLogo, GoogleLogo } from "../assets";

const Login = () => {
  function onClick() {
    console.log("click");
  }
  return (
    <section className="flex flex-col flex-1 items-center gap-6 pt-20">
      <h2 className="text-4xl text-white">Welcome</h2>

      <form className="flex flex-col items-center gap-4 max-w-[600px] w-full">
        <InputField name="firstName" placeholder="Name" type="text" required />
        <InputField
          name="password"
          placeholder="Password"
          type="password"
          required
        />
        <div className="flex items-center gap-4">
          <Toggle id="rememberMe" label="REMEMBER ME?" name="rememberMe" />
          <Button border="circle" onClick={onClick} type="submit">
            <img
              className="w-[15px] h-[15px]"
              src={CheckMark}
              alt="check mark"
            />
          </Button>
        </div>

        <Button textColor="red" onClick={onClick} icon={GoogleLogo}>
          Login with Google
        </Button>
        <Button textColor="blue" onClick={onClick} icon={FacebookLogo}>
          Login with Facebook
        </Button>
      </form>

      <div className="flex items-center justify-center gap-1 mt-auto border-t border-white max-w-[600px] w-full py-10">
        <p className="text-white opacity-50">NEW USER?</p>
        {/* rome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
        <p
          onClick={() => console.log("click")}
          className="text-white underline cursor-pointer"
        >
          SIGN UP
        </p>
      </div>
    </section>
  );
};

export default Login;
