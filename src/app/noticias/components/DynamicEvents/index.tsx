'use client';

import { useEffect, useState } from 'react';
import { EventCard } from './EventCard';
import { useItemsPerPage } from '@/src/hooks/useItemsPerPage';
import { Event } from '@/src/interfaces/event';
import { EventsApi } from '@/src/services/api/events';
import { StrapiResponse } from '@/src/interfaces/strapi';

async function getEventsData(
  page: number,
  itemsPerPage: number
): Promise<StrapiResponse<Event>> {
  const eventsApi = new EventsApi();
  return await eventsApi.getEvents(page, itemsPerPage);
}

export function DynamicEvents({ initialPage }: { initialPage: number }) {
  const [events, setEvents] = useState<Event[]>([]);
  const [page, setPage] = useState(initialPage);
  const [pageCount, setPageCount] = useState(1);
  const itemsPerPage = useItemsPerPage();

  useEffect(() => {
    async function fetchEvents() {
      const { data: events, meta: eventsMeta } = await getEventsData(
        page,
        itemsPerPage
      );

      setEvents(events);
      setPageCount(eventsMeta?.pagination?.pageCount || 1);
    }
    fetchEvents();
  }, [page, itemsPerPage]);

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mt-10 max-full">
        {events.map((event) => (
          <EventCard key={event.id} event={event} />
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
