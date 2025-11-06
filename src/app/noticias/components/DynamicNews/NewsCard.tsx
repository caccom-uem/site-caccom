'use client';

import Image from 'next/image';
import Link from 'next/link';
import { News } from '@/src/interfaces/news';
import { getStrapiUrl } from '@/src/utils/getStrapiUrl';
import { formatDate } from '@/src/utils/formatDate';

interface NewsCardProps {
  news: News;
}

export function NewsCard({ news }: NewsCardProps) {
  const imageUrl = news.imagem
    ? getStrapiUrl(news.imagem.url)
    : 'https://placehold.co/600x400/cccccc/94a3b8?text=Imagem+Indispon%C3%ADvel';

  return (
    <Link
      href={news.link || '#'}
      target="_blank"
      rel="noopener noreferrer"
      className="group w-full flex flex-col rounded-lg overflow-hidden bg-white shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
    >
      <div className="relative w-full h-56">
        <Image
          src={imageUrl}
          alt={news.imagem?.alternativeText || news.titulo}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          onError={(e) => {
            e.currentTarget.src =
              'https://placehold.co/600x400/cccccc/94a3b8?text=Imagem+Indispon%C3%ADvel';
          }}
        />
      </div>

      <div className="p-4 flex flex-col flex-grow">
        <div className="flex-grow">
          <h3 className="text-lg font-bold text-gray-800 mb-2 transition-colors">
            {news.titulo}
          </h3>
          <p className="text-gray-600 text-sm line-clamp-3">{news.descricao}</p>
          <p className="text-gray-500 text-xs mt-2">
            {news.data && formatDate(news.data)}
          </p>
        </div>
      </div>
    </Link>
  );
}
