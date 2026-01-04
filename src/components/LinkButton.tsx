import React from 'react';
import Image from 'next/image';

interface LinkButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  icon?: string;
  iconAlt?: string;
  className?: string;
}

export const LinkButton: React.FC<LinkButtonProps> = ({
  href,
  children,
  variant = 'secondary',
  icon,
  iconAlt,
  className = '',
}) => {
  const baseStyles = "flex h-12 w-full items-center justify-center gap-2 rounded-full px-5 transition-colors md:w-[158px]";
  const variants = {
    primary: "bg-foreground text-background hover:bg-[#383838] dark:hover:bg-[#ccc]",
    secondary: "border border-solid border-black/[.08] hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a]",
  };

  return (
    <a
      className={`${baseStyles} ${variants[variant]} ${className}`}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      {icon && (
        <Image
          className="dark:invert"
          src={icon}
          alt={iconAlt || ""}
          width={16}
          height={16}
        />
      )}
      {children}
    </a>
  );
};
