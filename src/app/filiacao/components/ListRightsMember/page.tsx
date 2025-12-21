import { CheckCircle } from 'lucide-react';

export default function ListRigthsMember() {
  return (
    <div className="space-y-4">
      <ul className="space-y-3 text-lg text-black text-justify leading-relaxed">
        <li className="flex items-start gap-3">
          <CheckCircle className="mt-1 text-blue-600" size={22} />
          <span>Todos os direitos dos representados;</span>
        </li>

        <li className="flex items-start gap-3">
          <CheckCircle className="mt-1 text-blue-600" size={22} />
          <span>
            Obter descontos em todas as promoções do CACCOM, conforme
            estabelecido pela diretoria;
          </span>
        </li>

        <li className="flex items-start gap-3">
          <CheckCircle className="mt-1 text-blue-600" size={22} />
          <span>
            Ganho de horas de Atividade Acadêmica Extracurricular por participar
            de qualquer atividade do centro acadêmico;
          </span>
        </li>
      </ul>
    </div>
  );
}
