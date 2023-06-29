import * as RadixCheckbox from "@radix-ui/react-checkbox";
import { CheckIcon } from "@radix-ui/react-icons";

type CheckboxProps = {
  name: string;
  label: string;
  required?: boolean;
  disabled?: boolean;
};

const Checkbox = ({ name, label, required, disabled }: CheckboxProps) => {
  return (
    <div className="flex gap-2 justify-center items-center">
      <RadixCheckbox.Root
        className="flex items-center bg-transparent rounded-md border-[1px] h-5 w-5 justify-center data-[state=checked]:bg-white "
        id={name}
        name={name}
        required={required}
        disabled={disabled}
      >
        <RadixCheckbox.Indicator>
          <CheckIcon />
        </RadixCheckbox.Indicator>
      </RadixCheckbox.Root>
      <label
        className="inline-flex flex-col gap-[0.5] text-white text-[0.85rem]"
        htmlFor={name}
      >
        {label}
      </label>
    </div>
  );
};

export default Checkbox;
