type FooterLinksProps = {
  href: string;
  icon: React.ReactNode;
  text: string;
};

export function FooterLinks({ href, icon, text }: FooterLinksProps) {
  return (
    <a
      href={href}
      className="flex items-center gap-3 hover:text-gray-300 transition-colors"
    >
      {icon}
      <span>{text}</span>
    </a>
  );
}
