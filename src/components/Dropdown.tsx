import React from "react";
import * as Select from "@radix-ui/react-select";
import {
  CheckIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from "@radix-ui/react-icons";
import { IOption } from "../types";

type SelectItemProps = {
  children: React.ReactNode;
  value: string;
};

const SelectItem = React.forwardRef(
  (
    { children, value }: SelectItemProps,
    forwardedRef: React.Ref<HTMLDivElement>
  ) => {
    return (
      <Select.Item
        className="flex justify-between cursor-pointer h-8 hover:bg-[rgba(233,128,184,0.5)]  p-2"
        value={value}
        ref={forwardedRef}
      >
        <Select.ItemText>{children}</Select.ItemText>
        <Select.ItemIndicator className="SelectItemIndicator">
          <CheckIcon />
        </Select.ItemIndicator>
      </Select.Item>
    );
  }
);

type DropdownProps = {
  name: string;
  placeholder: string;
  options: IOption[];
  required?: boolean;
  disabled?: boolean;
};

const Dropdown = ({
  name,
  placeholder,
  options,
  required = false,
  disabled = false,
}: DropdownProps) => {
  return (
    <Select.Root name={name} required={required} disabled={disabled}>
      <Select.Trigger
        className="flex justify-left items-center relative w-full max-w-[320px] h-[50px] bg-[rgba(255,255,255,0.15)] text-left text-sm text-white placeholder:text-white px-4 border-[2px] border-solid border-white rounded-xl"
        aria-label={name}
      >
        <Select.Value placeholder={placeholder} />
        <Select.Icon className="absolute top-4 right-3">
          <ChevronDownIcon className="w-5 h-5" />
        </Select.Icon>
      </Select.Trigger>

      <Select.Portal className="w-full max-w-[320px] bg-[rgb(232,73,159)] rounded">
        <Select.Content className="w-full p-2 text-white border-[2px] border-solid border-white rounded">
          <Select.ScrollUpButton className="SelectScrollButton">
            <ChevronUpIcon />
          </Select.ScrollUpButton>
          <Select.Viewport className="SelectViewport">
            {options.map(({ value, label }, index) => (
              <SelectItem key={`${value}${index}`} value={value}>
                {label}
              </SelectItem>
            ))}
          </Select.Viewport>
          <Select.ScrollDownButton className="SelectScrollButton">
            <ChevronDownIcon />
          </Select.ScrollDownButton>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  );
};

export default Dropdown;
