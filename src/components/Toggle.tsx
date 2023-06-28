import * as Switch from "@radix-ui/react-switch";

type ToggleProps = {
  id: string;
  name: string;
  label: string;
  required?: boolean;
  disabled?: boolean;
  alignLabel?: "left" | "right";
};

const Toggle = ({
  id,
  name,
  label,
  required,
  disabled,
  alignLabel = "left",
}: ToggleProps) => {
  return (
    <div className="flex items-center gap-2 w-fit">
      <Switch.Root
        className="inline-flex items-center justify-start flex-shrink-0 cursor-pointer rounded p-2 w-10 h-4 bg-gray-200 data-[state=checked]:bg-[rgb(232,73,159)]"
        id={id}
        name={name}
        disabled={disabled}
        required={required}
      >
        <Switch.Thumb className="bg-white w-6 h-6 rounded-full transition-[transform] duration-200 translate-x-[-50%] data-[state=checked]:translate-x-[50%]" />
      </Switch.Root>
      <label className="text-white" htmlFor={name}>
        {label}
      </label>
    </div>
  );
};

export default Toggle;
