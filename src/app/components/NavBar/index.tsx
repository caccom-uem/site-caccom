'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { NavLink } from './NavLink';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  return (
    <nav className="relative w-full bg-black text-white py-4 px-6 md:px-12 lg:px-20 flex justify-between items-center shadow-md z-50">
      <div className="flex items-center space-x-2">
        <Image
          src={'/image/logo/logo-icone.png'}
          alt="Logo CACCOM"
          width={40}
          height={40}
        />
        <Image
          src={'/image/logo/logo-escrita.png'}
          alt="Logo CACCOM"
          width={120}
          height={20}
          className="hidden lg:block"
        />
      </div>

      <div className="hidden md:flex items-center space-x-4">
        <NavLink href="/">Início</NavLink>
        <NavLink href="/calendario">Calendário</NavLink>
        <NavLink href="/filiacao">Filiação</NavLink>
        <NavLink href="/noticia">Notícias</NavLink>
        <NavLink href="/documentacao">Documentação</NavLink>
        <NavLink href="/eleicao">Eleição</NavLink>
      </div>

      <div className="md:hidden">
        <button onClick={() => setIsOpen(!isOpen)} aria-label="Abrir menu">
          {isOpen ? (
            <XMarkIcon className="h-8 w-8 text-white" />
          ) : (
            <Bars3Icon className="h-8 w-8 text-white" />
          )}
        </button>
      </div>

      <div
        className={`fixed inset-0 bg-black bg-opacity-95 flex flex-col items-center justify-center space-y-8 transition-transform duration-300 ease-in-out md:hidden
          ${isOpen ? 'translate-x-0' : 'translate-x-full'}
        `}
        onClick={() => setIsOpen(false)}
      >
        <div onClick={() => setIsOpen(false)}>
          <NavLink href="/">Início</NavLink>
        </div>
        <div onClick={() => setIsOpen(false)}>
          <NavLink href="/calendario">Calendário</NavLink>
        </div>
        <div onClick={() => setIsOpen(false)}>
          <NavLink href="/filiacao">Filiação</NavLink>
        </div>
        <div onClick={() => setIsOpen(false)}>
          <NavLink href="/noticia">Notícias</NavLink>
        </div>
        <div onClick={() => setIsOpen(false)}>
          <NavLink href="/documentacao">Documentação</NavLink>
        </div>
        <div onClick={() => setIsOpen(false)}>
          <NavLink href="/eleicao">Eleição</NavLink>
        </div>
      </div>
    </nav>
  );
}
