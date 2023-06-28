export interface IOption {
  label: string;
  value: string;
}

export interface ITabItem extends IOption {
  component: JSX.Element;
}
