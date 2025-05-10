import React, { FC } from "react";

type Props = {
  placeholder?: string;
  className?: string;
};

const MyComponent: FC<Props> = ({ placeholder, className }) => {
  return <input placeholder={placeholder} type="text" className={className} />;
};

export default MyComponent;
