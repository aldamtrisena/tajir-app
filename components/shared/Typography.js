import PropTypes from "prop-types";
import { twMerge } from "tailwind-merge";

const Typography = ({
  primary,
  xs,
  sm,
  /*14px*/ lg,
  xl,
  medium,
  semibold,
  bold,
  thin,
  children,
  center,
  className,
  head1,
}) => {
  const styled = twMerge(`text-sm md:text-base ${primary ? "text-primary" : "text-standart"} ${xs ? "text-xs" : ""} 
  ${sm ? "text-sm" : ""} ${lg ? "text-lg" : ""} ${xl ? "text-xl" : ""} ${thin ? "font-light" : ""} ${
    medium ? "font-medium" : ""
  } 
  ${semibold ? "font-semibold" : ""} 
  ${center ? "text-center" : ""} 
  ${bold ? "font-bold" : ""} , ${className}`);

  return <>{head1 ? <h1 className={styled}>{children}</h1> : <p className={styled}>{children}</p>}</>;
};

Typography.propTypes = {
  primary: PropTypes.bool,
  xs: PropTypes.bool,
  sm: PropTypes.bool,
  lg: PropTypes.bool,
  xl: PropTypes.bool,
  medium: PropTypes.bool,
  semibold: PropTypes.bool,
  bold: PropTypes.bool,
  thin: PropTypes.bool,
  children: PropTypes.string,
  className: PropTypes.string,
  head1: PropTypes.bool,
  center: PropTypes.bool,
};

export default Typography;
