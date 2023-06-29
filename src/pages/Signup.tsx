import InputField from "../components/InputField";
import Dropdown from "../components/Dropdown";
import { languages } from "../utils/constants";
import Button from "../components/Button";
import { CheckMark } from "../assets";
import Checkbox from "../components/Checkbox";
import DatePicker from "../components/DatePicker";

const Signup = () => {
  function onClick() {
    console.log("click");
  }
  return (
    <section className="flex flex-col flex-1 items-center gap-6 pt-20">
      <h2 className="text-4xl text-white">Join us</h2>

      <form className="flex flex-col items-center gap-4 max-w-[600px] w-full">
        <InputField name="firstName" placeholder="Name" type="text" required />
        <InputField
          name="password"
          placeholder="Password"
          type="password"
          required
        />
        <InputField
          name="repeatPassword"
          placeholder="Confirm Password"
          type="password"
          required
        />
        <InputField
          name="email"
          placeholder="Email Address"
          type="email"
          required
        />
        <Dropdown
          name="preferredCodingLanguage"
          options={languages}
          placeholder="Preferred coding language"
        />
        <DatePicker />
        <div className="flex items-center gap-4">
          <Checkbox name="agreeToTerms" label="AGREE TO TERMS?" />
          <Button border="circle" onClick={onClick} type="submit">
            <img
              className="w-[15px] h-[15px]"
              src={CheckMark}
              alt="check mark"
            />
          </Button>
        </div>
      </form>

      <div className="flex items-center justify-center gap-1 mt-auto border-t border-white max-w-[600px] w-full py-10">
        <p className="text-white opacity-50">ALREADY DID THIS?</p>
        {/* rome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
        <p
          onClick={() => console.log("click")}
          className="text-white underline cursor-pointer"
        >
          LOGIN
        </p>
      </div>
    </section>
  );
};

export default Signup;
