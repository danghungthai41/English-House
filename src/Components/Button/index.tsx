import React from "react";
import cx from "classnames/bind";
import { Link } from "react-router-dom";
interface Props {
  to?: boolean | string;
  href?: boolean | string;
  className?: string;
  classNameChild?: string;
  padding?: string;
  children?: React.ReactNode;
  onClick?: (event: Event) => void;
}

const Button: React.FC<Props> = ({
  to,
  href,
  children,
  onClick,
  className,
  classNameChild,
}) => {
  let Comp: any = "button";
  const props = {
    to,
    href,
    onClick,
  };
  if (to) {
    props.to = to;
    Comp = Link;
  }
  if (href) {
    props.href = href;
    Comp = "a";
  }

  const classes = cx(
    className,
    "border-b-[2px] border-transparent "
  );
  return (
    <Comp className={classes} {...props}>
      <span className={classNameChild}>{children}</span>
    </Comp>
  );
};

export default Button;
