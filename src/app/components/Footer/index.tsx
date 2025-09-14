import Image from 'next/image';
import {
  DevicePhoneMobileIcon,
  EnvelopeIcon,
  MapPinIcon,
} from '@heroicons/react/24/solid';
import { FaInstagram } from 'react-icons/fa';
import { FooterLinks } from './FooterLinks';

export function Footer() {
  return (
    <footer className="relative bg-black text-white overflow-hidden">
      <div className="relative z-10 mx-auto px-6 py-12 md:px-20 flex flex-col md:flex-row items-center justify-between gap-10 text-center md:text-left">
        <div className="space-y-4">
          <h2 className="text-2xl md:text-3xl font-bold leading-snug">
            CENTRO ACADÊMICO DE <br />
            CIÊNCIA DA COMPUTAÇÃO UEM
          </h2>
          <ul className="space-y-3 text-base flex flex-col items-center md:items-start">
            <li>
              <FooterLinks
                href="https://www.instagram.com/caccomuem/"
                icon={<FaInstagram className="h-5 w-5" />}
                text="@caccomuem"
              />
            </li>
            <li>
              <FooterLinks
                href="mailto:caccom@uem.br"
                icon={<EnvelopeIcon className="h-5 w-5" />}
                text="caccom@uem.br"
              />
            </li>
            <li>
              <FooterLinks
                href="tel:+5544991746172"
                icon={<DevicePhoneMobileIcon className="h-5 w-5" />}
                text="(44) 99174-6172"
              />
            </li>
            <li>
              <FooterLinks
                href="https://goo.gl/maps/1nX4fZ5H3Pz4Yk9K8"
                icon={<MapPinIcon className="h-5 w-5" />}
                text="Bloco C-56 - Sala 005"
              />
            </li>
          </ul>
        </div>

        <div className="flex-shrink-0">
          <Image
            src="/image/logo/logo-sem-fundo.png"
            alt="Logo do CACCOM em um fundo branco arredondado"
            width={180}
            height={180}
            className="bg-white shadow-lg rounded-2xl p-2 hidden md:block"
          />
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-24 md:h-32 text-gray-800 z-0">
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
    </footer>
  );
}
