type LinkWithIconProps = {
  icon: React.JSXElementConstructor<React.SVGProps<SVGSVGElement>>;
  href: string;
  children: React.ReactNode;
};

export function LinkWithIcon({
  icon: Icon,
  href,
  children,
}: LinkWithIconProps) {
  return (
    <p className="flex text-xl items-center justify-start gap-2 hover:underline ">
      <Icon className="w-6 h-6 text-black" />{' '}
      <a className="font-bold" href={href} target="_blank" rel="noreferrer">
        {' '}
        {children}
      </a>
    </p>
  );
}
