import PropTypes from "prop-types";

const Typography = ({ primary, xs, sm, /*14px*/ lg, medium, semibold, bold, thin, children, className, head1 }) => {
  const styled = `text-base ${primary ? "text-primary" : "text-standart"} ${xs && "text-xs"} ${sm && "text-sm"} 
  ${lg && "text-lg"} ${thin && "font-light"} ${medium && "font-medium"} ${semibold && "font-semibold"} 
  ${bold && "font-bold"} ${className}`;

  return <>{head1 ? <h1 className={styled}>{children}</h1> : <p className={styled}>{children}</p>}</>;
};

Typography.propTypes = {
  primary: PropTypes.bool,
  xs: PropTypes.bool,
  sm: PropTypes.bool,
  lg: PropTypes.bool,
  medium: PropTypes.bool,
  semibold: PropTypes.bool,
  bold: PropTypes.bool,
  thin: PropTypes.bool,
  children: PropTypes.string,
  className: PropTypes.string,
  head1: PropTypes.bool,
};

export default Typography;
