import { Button as ANTButton } from "antd";

const Button = ({ children, ...props }) => {
  return (
    <ANTButton {...props} className="bg-blue-500 w-full" type="primary">
      {children}
    </ANTButton>
  );
};

export default Button;
