import { Title } from '../components/Title';
import { DynamicEvents } from './components/DynamicEvents';
import { DynamicNews } from './components/DynamicNews';

export const metadata = {
  title: 'Notícias e Eventos',
};

export default async function NoticiasPage() {
  return (
    <div className="bg-white">
      <section className="mx-auto px-6 py-12 md:px-20 lg:py-20">
        <Title>Notícias</Title>

        <DynamicNews initialPage={1} />
      </section>

      <section className="bg-gray-200">
        <div className="mx-auto px-6 py-12 md:px-20 lg:py-20">
          <Title>Próximos Eventos</Title>

          <DynamicEvents initialPage={1} />
        </div>
      </section>
    </div>
  );
}
