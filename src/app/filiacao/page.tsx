import FormFilia from './components/ListRightsMember/FormFilia/page';
import ListRigthsMember from './components/ListRightsMember/page';

export default function Filiacao() {
  return (
    <div className="flex flex-col lg:flex-row justify-between items-stretch gap-12 px-6 py-12 md:px-12 lg:px-20 min-h-screen">
      <section className="w-full lg:w-[55%] flex flex-col justify-center gap-6">
        <h1 className="text-4xl md:text-5xl lg:text-6xl text-red font-bold mb-4 text-center lg:text-left">
          Seja um Filiado CACCOM
        </h1>

        <div>
          <p className="text-lg font-semibold text-black text-justify mb-2">
            Quem pode ser filiado?
          </p>

          <p className="text-lg font-medium text-black text-justify leading-relaxed">
            Segundo Capítulo II, Artigo 7 do Estatuto do CACCOM são considerados
            filiados ao CACCOM todos os representados que assinaram o termo de
            filiação ao Centro Acadêmico, bem como os membros da diretoria,
            coordenadores de departamentos temáticos, membros das secretarias
            especializadas e representantes de série durante o exercício de suas
            funções.
          </p>
        </div>

        <div>
          <p className="text-lg font-semibold text-black text-justify mb-2 mt-30">
            Quais os direitos do filiado?
          </p>
          <ListRigthsMember />
        </div>
      </section>

      <div className="w-full lg:w-[45%] flex items-center">
        <FormFilia />
      </div>
    </div>
  );
}
