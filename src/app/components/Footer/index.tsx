import Image from 'next/image';

export function Folder() {
  return (
    <section className="relative bg-black text-white flex flex-col md:flex-row items-center justify-between p-8 md:p-16 overflow-hidden">
      {/* Parte esquerda */}
      <div className="z-10 max-w-lg space-y-4">
        <h2 className="text-2xl md:text-3xl font-bold leading-snug">
          CENTRO ACADÊMICO DE <br />
          CIÊNCIA DA COMPUTAÇÃO UEM
        </h2>

        <ul className="space-y-3 text-sm md:text-base">
          <li className="flex items-center gap-2">
            <span className="text-pink-400">📷</span> @caccomuem
          </li>
          <li className="flex items-center gap-2">
            <span className="text-blue-400">✉️</span> caccom@uem.br
          </li>
          <li className="flex items-center gap-2">
            <span className="text-green-400">📞</span> 44 99174-6172
          </li>
          <li className="flex items-center gap-2">
            <span className="text-red-400">📍</span> BLOCO C-56 - SALA 005
          </li>
        </ul>
      </div>

      {/* Logo */}
      <div className="mt-5">
        <Image
          src="/image/logo/logo-sem-fundo.png"
          alt="CACCOM Logo"
          width={200}
          height={200}
          className="bg-white rounded-2xl"
        />
      </div>

      {/* Fundo com onda */}
      <div className="absolute bottom-0 right-0 w-1/2 h-[150px]">
        <svg
          className="w-full h-full"
          viewBox="0 0 500 150"
          preserveAspectRatio="none"
        >
          <path
            d="M 43 149 C 257 -116 307 172 525 -19 l 107 -67 C 717 25 384 151 387 150 L 43 151 Z"
            className="fill-gray-500"
          ></path>
          <path
            d="M0,150 C150 30 307 172 518 30 l600 -100 C 1000 177 384 151 205 154 L -1 152 Z"
            className="fill-gray-200"
          ></path>
        </svg>
      </div>
    </section>
  );
}
