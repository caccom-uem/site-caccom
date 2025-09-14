import Image from 'next/image';
import { FaInstagram } from 'react-icons/fa';
import { EnvelopeIcon, MapPinIcon } from '@heroicons/react/24/solid';
import { Map } from './components/Map';
import { MemberCard } from './components/MemberCard';
import { LinkWithIcon } from './components/LinkWithIcon';

export default function Home() {
  return (
    <div>
      <section className="px-6 py-12 md:px-12 lg:p-20 flex flex-col lg:flex-row justify-between items-center gap-12">
        <div className="w-full lg:w-[55%]">
          <h1 className="text-4xl md:text-5xl lg:text-6xl text-red font-bold mb-4 text-center lg:text-left">
            Sobre nós
          </h1>
          <p className="text-lg font-semibold text-black text-justify mb-2">
            Somos o CACCOM – Centro Acadêmico de Ciência da Computação da UEM.
          </p>
          <p className="text-lg font-medium text-black text-justify leading-relaxed">
            Uma equipe formada por estudantes que acreditam na força da união,
            da representatividade e do diálogo. Nosso papel vai além de
            representar os alunos junto à coordenação e à universidade: estamos
            aqui para apoiar iniciativas, promover eventos, fortalecer a
            comunidade acadêmica e criar um ambiente mais colaborativo e
            acolhedor para todos que fazem parte do curso. Seja para tirar
            dúvidas, compartilhar ideias ou simplesmente bater um papo, o CACCOM
            está de portas abertas. Juntos, construímos um curso mais
            participativo, diverso e conectado!
          </p>
        </div>
        <div className="w-full lg:w-[40%]">
          <Image
            src={'/image/members/membros.jpeg'}
            alt={'Membros do CACCOM'}
            className="rounded-lg border shadow-lg w-full h-auto"
            width={800}
            height={450}
            sizes="(max-width: 1023px) 100vw, 40vw"
            quality={100}
          />
        </div>
      </section>

      <section className="px-4 py-12 sm:px-10 md:px-12 lg:p-20 bg-gray-300">
        <h1 className="text-4xl md:text-5xl lg:text-6xl md:text-left text-red font-bold text-center mb-10">
          Gestão Atual
        </h1>
        <div className="flex flex-wrap gap-8 justify-center">
          <MemberCard
            name="Lucas A. de Lima"
            image="/image/members/lucas.jpg"
            cargo="Presidente"
            linkedin="https://www.linkedin.com/in/lucalves2004/"
          />
          <MemberCard
            name="Julia de A. Pires"
            image="/image/members/julia.jpg"
            cargo="Vice-Presidente"
            linkedin="https://www.linkedin.com/in/julia-de-araujo-pires/"
          />
          <MemberCard
            name="Nuno M. M. Abilio"
            image="/image/members/nuno.jpg"
            cargo="Diretor de Relações Públicas"
            linkedin="https://www.linkedin.com/in/nuno-miguel-mendon%C3%A7a-abilio-7b390a304?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
          />
          <MemberCard
            name="Sophia F. A. Oliveira"
            image="/image/members/sophia.jpg"
            cargo="Tesoureira"
            linkedin="https://www.linkedin.com/in/sophia-freire-956652210?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
          />
          <MemberCard
            name="Patrick N. de Morais"
            image="/image/members/patrick.jpg"
            cargo="Secretario"
          />
          <MemberCard
            name="Eduardo A. R. Minholi"
            image="/image/members/eduardo.jpg"
            cargo="Diretor de Projetos e Eventos"
          />
          <MemberCard
            name="Arthur H. da Silva"
            image="/image/members/arthur.jpg"
            cargo="Diretor de Mídias e Comunicações"
            linkedin="https://www.linkedin.com/in/arthur-henrique-da-silva-536723269?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
          />
          <MemberCard
            name="Giovanna da S. Bulcão"
            image="/image/members/giovana.jpg"
            cargo="Acessora da secretaria"
            linkedin="https://www.linkedin.com/in/giovana-da-silva-bulc%C3%A3o?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
          />
          <MemberCard
            name="José L. P. de Sousa"
            image="/image/members/jose.jpg"
            cargo="Acessor de projetos"
            linkedin="https://www.linkedin.com/in/peres07"
          />
          <MemberCard
            name="Cintia da S. Bulcão"
            image="/image/members/cintia.jpg"
            cargo="Acessora da presidência"
            linkedin="https://www.linkedin.com/in/cintia-da-silva-bulc%C3%A3o-66896836b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
          />
          <MemberCard
            name="Kauã Belmonte"
            image="/image/members/kaua.jpg"
            cargo="Acessor de financeiro"
            linkedin='https://www.linkedin.com/in/kau%C3%A3-belmonte-235b7b2b9?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'
          />
          <MemberCard
            name="Pedro L. S. Figueiredo"
            image="/image/members/pedro.jpg"
            cargo="Acessor de comunicação"
            linkedin="https://www.linkedin.com/in/pedro-luiz-47565b231?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
          />
          <MemberCard
            name="Bernardo W. de Oliveira"
            image="/image/members/bernardo.jpg"
            cargo="Acessor da secretaria"
            linkedin="https://www.linkedin.com/in/bernardo-oliveira-b53666206?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
          />
        </div>
      </section>

      <section className="px-6 py-12 md:px-12 lg:px-20 flex flex-col">
        <h1 className="text-4xl md:text-5xl lg:text-6xl text-red font-bold text-center lg:text-left mb-10">
          Contato e Localização
        </h1>
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12 mt-4">
          <div className="flex flex-col gap-4 w-full lg:w-auto">
            <LinkWithIcon
              icon={FaInstagram}
              href="https://www.instagram.com/caccomuem/"
            >
              @caccomuem
            </LinkWithIcon>
            <LinkWithIcon icon={EnvelopeIcon} href="mailto:caccom@uem.br">
              caccom@uem.br
            </LinkWithIcon>
            <LinkWithIcon
              icon={MapPinIcon}
              href="https://www.google.com/maps/place/Bloco+C56+(DIN%2FUEM)/@-23.4075173,-51.9392257,17z/data=!3m1!4b1!4m6!3m5!1s0x94e81bd11448b1d9:0x82f29a73e680f43c!8m2!3d-23.4075222!4d-51.9366508!16s%2Fg%2F11s7x3w8n5?entry=ttu"
            >
              Bloco C56 - Sala 005
            </LinkWithIcon>
          </div>
          <div className="rounded-lg shadow-md w-full lg:w-4/5 overflow-hidden">
            <Map />
          </div>
        </div>
      </section>

      {/* Componentizar essa seção - Mover para página de documentos*/}
      {/* <section className="px-6 py-12 md:px-12 lg:px-20 flex flex-col bg-gray-300">
        <h1 className="text-4xl md:text-5xl lg:text-6xl text-red font-bold text-center lg:text-left">
          Links Úteis
        </h1>
        <ul className="list-none flex flex-wrap gap-5 mt-10 justify-center lg:justify-start">
          <a href="#">
            <li className="rounded-lg p-4 bg-black hover:bg-gray-800 text-white text-center">
              <span className="text-xl">Estatuto</span>
            </li>
          </a>
          <a href="#">
            <li className="rounded-lg p-4 bg-black hover:bg-gray-800 text-white text-center">
              <span className="text-xl">
                Associação de Egresso do Departamento de Informática - AEDIN
              </span>
            </li>
          </a>
          <a href="#">
            <li className="rounded-lg p-4 bg-black hover:bg-gray-800 text-white text-center">
              <span className="text-xl">Empresa Júnior - MAIN</span>
            </li>
          </a>
          <a href="#">
            <li className="rounded-lg p-4 bg-black hover:bg-gray-800 text-white text-center">
              <span className="text-xl">Drive CACCOM</span>
            </li>
          </a>
          <a href="#">
            <li className="rounded-lg p-4 bg-black hover:bg-gray-800 text-white text-center">
              <span className="text-xl">Ouvidoria</span>
            </li>
          </a>
        </ul>
      </section> */}
    </div>
  );
}
