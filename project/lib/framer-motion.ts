// This is a placeholder file to simulate framer-motion package
// In a real project, we would install framer-motion as a dependency
// For this demo, we're creating simplified types that match what we use in our components

export interface MotionProps {
  initial?: any;
  animate?: any;
  exit?: any;
  transition?: any;
  variants?: any;
  whileHover?: any;
  whileTap?: any;
  whileInView?: any;
  viewport?: any;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

export const motion = {
  div: (props: MotionProps & React.HTMLAttributes<HTMLDivElement>) => {
    const { children, ...rest } = props;
    return <div {...rest}>{children}</div>;
  },
  h1: (props: MotionProps & React.HTMLAttributes<HTMLHeadingElement>) => {
    const { children, ...rest } = props;
    return <h1 {...rest}>{children}</h1>;
  },
  p: (props: MotionProps & React.HTMLAttributes<HTMLParagraphElement>) => {
    const { children, ...rest } = props;
    return <p {...rest}>{children}</p>;
  },
  // Add more components as needed
};