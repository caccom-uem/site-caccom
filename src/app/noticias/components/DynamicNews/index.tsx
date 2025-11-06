'use client';

import { useEffect, useState } from 'react';
import { NewsCard } from './NewsCard';
import { useItemsPerPage } from '@/src/hooks/useItemsPerPage';
import { NewsApi } from '@/src/services/api/news';
import { StrapiResponse } from '@/src/interfaces/strapi';
import { News } from '@/src/interfaces/news';

async function getNewsData(
  page: number,
  itemsPerPage: number
): Promise<StrapiResponse<News>> {
  const newsApi = new NewsApi();
  return await newsApi.getNews(page, itemsPerPage);
}

export function DynamicNews({ initialPage }: { initialPage: number }) {
  const [news, setNews] = useState<News[]>([]);
  const [page, setPage] = useState(initialPage);
  const [pageCount, setPageCount] = useState(1);
  const itemsPerPage = useItemsPerPage();

  useEffect(() => {
    async function fetchNews() {
      const { data: news, meta: newsMeta } = await getNewsData(
        page,
        itemsPerPage
      );

      setNews(news);
      setPageCount(newsMeta?.pagination?.pageCount || 1);
      console.log(newsMeta);
    }
    fetchNews();
  }, [page, itemsPerPage]);

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mt-10 max-full">
        {news.map((news, kxz) => (
          <NewsCard key={kxz} news={news} />
        ))}
      </div>

      <div className="flex justify-between items-center mt-12">
        <button
          onClick={() => setPage((p) => Math.max(1, p - 1))}
          disabled={page <= 1}
          className={`px-4 py-2 bg-red text-white rounded-md shadow-md transition-all ${
            page <= 1 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-red-700'
          }`}
        >
          Anterior
        </button>

        <span className="text-gray-700">
          Página {page} de {pageCount}
        </span>

        <button
          onClick={() => setPage((p) => Math.min(pageCount, p + 1))}
          disabled={page >= pageCount}
          className={`px-4 py-2 bg-red text-white rounded-md shadow-md transition-all ${
            page >= pageCount
              ? 'opacity-50 cursor-not-allowed'
              : 'hover:bg-red-700'
          }`}
        >
          Próxima
        </button>
      </div>
    </>
  );
}
