interface LinkProps extends React.ComponentPropsWithoutRef<"a"> {}

export default function Link({ children, ...props }: LinkProps) {
  return (
    <a {...props} className="hover:underline hover:text-rose-200">
      {children}
    </a>
  );
}
