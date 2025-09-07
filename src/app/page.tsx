import Image from "next/image";

export default function Home() {
  return (
    <div>
      <section className="p-10 flex justify-center items-center">
        <div style={{width: "70%"}} className="pr-20">
          <h1 className="text-6xl text-red font-bold text-center">Sobre nós</h1>
          <p className="text-xl font-semibold text-black text-justify mt-10">
            Somos o CACCOM  –  Centro Acadêmico de Ciência da Computação.
            <br/>
            <br/>
            Uma equipe formada por estudantes que acreditam na força da união, da representatividade e do diálogo. Nosso papel vai além de representar os alunos junto à coordenação e à universidade: estamos aqui para apoiar iniciativas, promover eventos, fortalecer a comunidade acadêmica e criar um ambiente mais colaborativo e acolhedor para todos que fazem parte do curso. Seja para tirar dúvidas,compartilhar ideias ou simplesmente bater um papo, o CACCOM está de portas abertas. Juntos, construímos um curso mais participativo, diverso e conectado!
          </p>
        </div>
        <div style={{width: "30%"}} className="pr-20 flex justify-center items-center">
          <Image
            src={"/image/logo-cinza.png"}
            alt={"Logo cinza CACCOM"}
            className="rounded-[800]"
            width={500}
            height={500}
          ></Image>
        </div>
      </section>

      <section className="p-10 flex bg-gray-300">
        <div style={{width: "70%"}} className="pr-10 flex flex-col">
          <h1 className="text-6xl text-red font-bold text-center">Sobre a Gestão Atual</h1>
          <div className="flex flex-wrap gap-10 mt-10 justify-center">
            <div className="w-80 bg-white rounded-lg shadow-md hover:shadow-2xl transition-shadow duration-300 p-6 flex flex-col items-center ">
              <Image
                src={"/image/lucas.jpg"}
                alt="Foto do Lucas"
                width={150}
                height={150}
                className="rounded-md"
              ></Image>
              <p className="text-2xl font-bold mt-4 mb-2">
                Lucas A. de Lima 
              </p>
              <a className="text-blue-500 hover:underline"
                href={"https://www.linkedin.com/in/lucalves2004/"}>
                Linkedin
              </a>
            </div>
            <div className="w-80 bg-white rounded-lg shadow-md hover:shadow-2xl transition-shadow duration-300 p-6 flex flex-col items-center ">
              <Image
                src={"/image/lucas.jpg"}
                alt="Foto do Lucas"
                width={150}
                height={150}
                className="rounded-md"
              ></Image>
              <p className="text-2xl font-bold mt-4 mb-2">
                Julia de A. Pires 
              </p>
              <button>
                Linkedin
              </button>
            </div>
            <div className="w-80 bg-white rounded-lg shadow-md hover:shadow-2xl transition-shadow duration-300 p-6 flex flex-col items-center ">
              <Image
                src={"/image/nuno.jpg"}
                alt="Foto do Nuno"
                width={150}
                height={150}
                className="rounded-md"
              ></Image>
              <p className="text-2xl font-bold mt-4 mb-2">
                Nuno M. M. Abilio
              </p>
              <a className="text-blue-500 hover:underline"
                href={"https://www.linkedin.com/in/nuno-miguel-mendon%C3%A7a-abilio-7b390a304?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"}>
                Linkedin
              </a>
            </div>
            <div className="w-80 bg-white rounded-lg shadow-md hover:shadow-2xl transition-shadow duration-300 p-6 flex flex-col items-center ">
              <Image
                src={"/image/sophia.jpg"}
                alt="Foto da Sophia"
                width={150}
                height={150}
                className="rounded-md"
              ></Image>
              <p className="text-2xl font-bold mt-4 mb-2">
                Sophia F. A. Oliveira 
              </p>
              <a className="text-blue-500 hover:underline"
                href={"https://www.linkedin.com/in/sophia-freire-956652210?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"}>
                Linkedin
              </a>
            </div>
            <div className="w-80 bg-white rounded-lg shadow-md hover:shadow-2xl transition-shadow duration-300 p-6 flex flex-col items-center ">
              <Image
                src={"/image/lucas.jpg"}
                alt="Foto do Lucas"
                width={150}
                height={150}
                className="rounded-md"
              ></Image>
              <p className="text-2xl font-bold mt-4 mb-2">
                Lucas Alves de Lima
              </p>
              <button>
                Linkedin
              </button>
            </div>
            <div className="w-80 bg-white rounded-lg shadow-md hover:shadow-2xl transition-shadow duration-300 p-6 flex flex-col items-center ">
              <Image
                src={"/image/lucas.jpg"}
                alt="Foto do Lucas"
                width={150}
                height={150}
                className="rounded-md"
              ></Image>
              <p className="text-2xl font-bold mt-4 mb-2">
                Lucas Alves de Lima
              </p>
              <button>
                Linkedin
              </button>
            </div>
            <div className="w-80 bg-white rounded-lg shadow-md hover:shadow-2xl transition-shadow duration-300 p-6 flex flex-col items-center ">
              <Image
                src={"/image/lucas.jpg"}
                alt="Foto do Lucas"
                width={150}
                height={150}
                className="rounded-md"
              ></Image>
              <p className="text-2xl font-bold mt-4 mb-2">
                Lucas Alves de Lima
              </p>
              <button>
                Linkedin
              </button>
            </div>
            <div className="w-80 bg-white rounded-lg shadow-md hover:shadow-2xl transition-shadow duration-300 p-6 flex flex-col items-center ">
              <Image
                src={"/image/lucas.jpg"}
                alt="Foto do Lucas"
                width={150}
                height={150}
                className="rounded-md"
              ></Image>
              <p className="text-2xl font-bold mt-4 mb-2">
                Lucas Alves de Lima
              </p>
              <button>
                Linkedin
              </button>
            </div>
            <div className="w-80 bg-white rounded-lg shadow-md hover:shadow-2xl transition-shadow duration-300 p-6 flex flex-col items-center ">
              <Image
                src={"/image/lucas.jpg"}
                alt="Foto do Lucas"
                width={150}
                height={150}
                className="rounded-md"
              ></Image>
              <p className="text-2xl font-bold mt-4 mb-2">
                Lucas Alves de Lima
              </p>
              <button>
                Linkedin
              </button>
            </div>
            <div className="w-80 bg-white rounded-lg shadow-md hover:shadow-2xl transition-shadow duration-300 p-6 flex flex-col items-center ">
              <Image
                src={"/image/lucas.jpg"}
                alt="Foto do Lucas"
                width={150}
                height={150}
                className="rounded-md"
              ></Image>
              <p className="text-2xl font-bold mt-4 mb-2">
                Lucas Alves de Lima
              </p>
              <button>
                Linkedin
              </button>
            </div>
            <div className="w-80 bg-white rounded-lg shadow-md hover:shadow-2xl transition-shadow duration-300 p-6 flex flex-col items-center ">
              <Image
                src={"/image/lucas.jpg"}
                alt="Foto do Lucas"
                width={150}
                height={150}
                className="rounded-md"
              ></Image>
              <p className="text-2xl font-bold mt-4 mb-2">
                Lucas Alves de Lima
              </p>
              <button>
                Linkedin
              </button>
            </div>
            <div className="w-80 bg-white rounded-lg shadow-md hover:shadow-2xl transition-shadow duration-300 p-6 flex flex-col items-center ">
              <Image
                src={"/image/eduardo.jpg"}
                alt="Foto do Eduardo"
                width={150}
                height={150}
                className="rounded-md"
              ></Image>
              <p className="text-2xl font-bold mt-4 mb-2">
                Eduardo A. R. Minholi 
              </p>
            </div>
            <div className="w-80 bg-white rounded-lg shadow-md hover:shadow-2xl transition-shadow duration-300 p-6 flex flex-col items-center ">
              <Image
                src={"/image/lucas.jpg"}
                alt="Foto do Lucas"
                width={150}
                height={150}
                className="rounded-md"
              ></Image>
              <p className="text-2xl font-bold mt-4 mb-2">
                Lucas Alves de Lima
              </p>
              <button>
                Linkedin
              </button>
            </div>
          </div>
        </div>

        <div style={{width: "30%"}} className="pr-20">
          <p className="text-xl font-semibold text-black text-justify mt-10">
            O CACCOM é composto por 7 diretorias, cada uma com suas próprias atribuições e tarefas dentro da instituição. 
          </p>
          <p className="text-xl font-semibold text-black text-center mt-10">
            Compõe a gestão atual do <span className="text-red border-b-2 border-red">CACCOM</span>
          </p>
          <ul className="list-none list-inside">
            <li className="rounded-lg p-4 mt-5 bg-red gap-2 text-white">
              <p className="text-center">
                <span className="text-xl"> 🥳 Lucas A. de Lima </span> 
                <br/>
                <span className="font-bold text-xl "> Presidente </span>
              </p>
            </li>
           <li className="rounded-lg p-4 mt-5 bg-red gap-2 text-white">
              <p className="text-center">
                <span className="text-xl"> 🥳 Julia de A. Pires </span> 
                <br/>
                <span className="font-bold text-xl "> Vice-Presidente </span>
              </p>
            </li>
            <li className="rounded-lg p-4 mt-5 bg-red gap-2 text-white">
              <p className="text-center">
                <span className="text-xl"> 🦀 Nuno M. M. Abilio </span> 
                <br/>
                <span className="font-bold text-xl "> Diretor de Relações Públicas </span>
              </p>
            </li>
            <li className="rounded-lg p-4 mt-5 bg-red gap-2 text-white">
              <p className="text-center">
                <span className="text-xl">  🤍 Sophia F. A. Oliveira </span> 
                <br/>
                <span className="font-bold text-xl "> Tesoureira </span>
              </p>
            </li>
            <li className="rounded-lg p-4 mt-5 bg-red gap-2 text-white">
              <p className="text-center">
                <span className="text-xl"> 🥳 Arthur H. da Silva </span> 
                <br/>
                <span className="font-bold text-xl "> Diretor de Mídias e Comunicações </span>
              </p>
            </li>
            <li className="rounded-lg p-4 mt-5 bg-red gap-2 text-white">
              <p className="text-center">
                <span className="text-xl"> 🤓 Eduardo A. R. Minholi </span> 
                <br/>
                <span className="font-bold text-xl "> Diretor de Projetos e Eventos </span>
              </p>
            </li>
            <li className="rounded-lg p-4 mt-5 bg-red gap-2 text-white">
              <p className="text-center">
                <span className="text-xl"> 🥳 Patrick N. de Morais </span> 
                <br/>
                <span className="font-bold text-xl "> Secretario </span>
              </p>
            </li>
          </ul>
          <p className="text-xl font-semibold text-black text-center mt-10">
            São filiado ao <span className="text-red border-b-2 border-red">CACCOM</span>
          </p>
          <ul className="list-none list-inside">
            <li className="rounded-lg p-4 mt-5 bg-red gap-2 text-white">
              <p className="text-center">
                <span className="text-xl"> 🥳 Giovanna da S. Bulcão </span> 
                <br/>
                <span className="font-bold text-xl "> Acessora da secretaria </span>
              </p>
            </li>
           <li className="rounded-lg p-4 mt-5 bg-red gap-2 text-white">
              <p className="text-center">
                <span className="text-xl"> 🥳 Cintia da S. Bulcão </span> 
                <br/>
                <span className="font-bold text-xl "> Acessora da presidência </span>
              </p>
            </li>
            <li className="rounded-lg p-4 mt-5 bg-red gap-2 text-white">
              <p className="text-center">
                <span className="text-xl"> 🥳 Kauã Belmonte </span> 
                <br/>
                <span className="font-bold text-xl "> Acessor de financeiro </span>
              </p>
            </li>
            <li className="rounded-lg p-4 mt-5 bg-red gap-2 text-white">
              <p className="text-center">
                <span className="text-xl"> 🥳 Pedro L. S. Figueiredo </span> 
                <br/>
                <span className="font-bold text-xl "> Acessor de comunicação </span>
              </p>
            </li>
            <li className="rounded-lg p-4 mt-5 bg-red gap-2 text-white">
              <p className="text-center">
                <span className="text-xl"> 🥳 José L. P. de Sousa </span> 
                <br/>
                <span className="font-bold text-xl "> Acessor de projetos </span>
              </p>
            </li>
            <li className="rounded-lg p-4 mt-5 bg-red gap-2 text-white">
              <p className="text-center">
                <span className="text-xl"> 🥳 Bernardo W. de Oliveira  </span> 
                <br/>
                <span className="font-bold text-xl "> Acessor da secretaria </span>
              </p>
            </li>
          </ul>
        </div>
      </section>
    </div>
    
  );
}
