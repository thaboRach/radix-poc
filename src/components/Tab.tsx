import { useState } from "react";
import * as Tabs from "@radix-ui/react-tabs";
import { ITabItem } from "../types";

type TabProps = {
  options: ITabItem[];
};

const Tab = ({ options }: TabProps) => {
  const [activeTab, setActiveTab] = useState("login");
  return (
    <Tabs.Root
      className="w-full flex flex-col flex-1 max-w-[800px]"
      onValueChange={(value) => setActiveTab(value)}
      defaultValue="login"
    >
      <Tabs.List aria-label="Manage your account">
        {options.map(({ value, label }, index) => (
          <Tabs.Trigger
            key={`${value}${index}`}
            className={`border-b w-full max-w-[380px] ${
              activeTab === options[index].value
                ? "border-white text-white"
                : "border-[rgba(238,238,238,0.25)] text-[rgba(238,238,238,0.25)]"
            }`}
            value={value}
          >
            {label.toUpperCase()}
          </Tabs.Trigger>
        ))}
      </Tabs.List>

      {options.map(({ value, label, component }, index) => (
        <Tabs.Content
          key={`${label}${index}`}
          className="TabsContent"
          value={value}
        >
          {component}
        </Tabs.Content>
      ))}
    </Tabs.Root>
  );
};

export default Tab;
