'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Event } from '@/src/interfaces/event';
import { getStrapiUrl } from '@/src/utils/getStrapiUrl';
import { formatDate } from '@/src/utils/formatDate';

interface EventCardProps {
  event: Event;
}

function renderBadge(event: Event) {
  const baseClass =
    'absolute bottom-0 left-0 right-0 p-2 flex justify-center items-center h-6';

  if (event.finalizado) {
    return (
      <div className={`${baseClass} bg-green-500 bg-opacity-90`}>
        <p className="text-white text-sm font-bold">Evento Finalizado</p>
      </div>
    );
  }

  if (event.data_inicio && event.data_fim) {
    return (
      <div className={`${baseClass} bg-red bg-opacity-90`}>
        <p className="text-white text-sm font-bold">
          {formatDate(event.data_inicio)} até {formatDate(event.data_fim)}
        </p>
      </div>
    );
  }

  if (event.data_inicio) {
    return (
      <div className={`${baseClass} bg-red bg-opacity-90`}>
        <p className="text-white text-sm font-bold">
          {formatDate(event.data_inicio, true)}
        </p>
      </div>
    );
  }

  return null;
}

export function EventCard({ event }: EventCardProps) {
  const imageUrl = event.imagem
    ? getStrapiUrl(event.imagem.url)
    : 'https://placehold.co/600x400/cccccc/94a3b8?text=Imagem+Indispon%C3%ADvel';

  return (
    <Link
      href={event.link || '#'}
      target="_blank"
      rel="noopener noreferrer"
      className="group w-full flex flex-col rounded-lg overflow-hidden bg-white shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
    >
      <div className="relative w-full h-56">
        <Image
          src={imageUrl}
          alt={event.imagem?.alternativeText || event.titulo}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          onError={(e) => {
            e.currentTarget.src =
              'https://placehold.co/600x400/cccccc/94a3b8?text=Imagem+Indispon%C3%ADvel';
          }}
        />
        {renderBadge(event)}
      </div>

      <div className="p-4 flex flex-col flex-grow">
        <div className="flex-grow">
          <h3 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-red-500 transition-colors">
            {event.titulo}
          </h3>
          <p className="text-gray-600 text-sm line-clamp-3">
            {event.descricao}
          </p>
        </div>
      </div>
    </Link>
  );
}
