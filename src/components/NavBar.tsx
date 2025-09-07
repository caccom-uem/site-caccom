"use client";

import Image from "next/image";
import NavLink from "./NavLink";

export default function Navbar() {
  return (
    <nav className="w-full bg-black text-white pt-5 pl-10 flex flex-col shadow-md">
      <section className="flex justify-around item-center">
        <div className="flex space-x-2 justify-start h-auto" style={{width: "30%"}}>
          <Image
            src={"/image/logo-icone.png"}
            alt="Logo CACCOM"
            width={40}
            height={40}
          ></Image>
          <Image
            src={"/image/logo-escrita.png"}
            alt="Logo CACCOM"
            width={120}
            height={20}
          ></Image>
        </div>
        <div className="flex justify-end space-x-6 pr-5" style={{width: "70%"}}>
          <NavLink href="/">Início </NavLink>
          <NavLink href="/calendario"> Calendário </NavLink>
          <NavLink href="/filiacao"> Filiação </NavLink>
          <NavLink href="/noticia"> Notícias </NavLink>
          <NavLink href="/documentacao"> Documentação </NavLink>
          <NavLink href="/eleicao"> Eleição </NavLink>
        </div>
      </section>
      <h1 className="text-7xl font-bold mt-5 mb-10"> Início </h1>
    </nav>
  );
}
