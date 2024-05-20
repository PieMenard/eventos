import { EventosEvent } from '@/lib/types';
import EventCard from './event-card';

type EventsListProps = {
  events: EventosEvent[];
};

const EventsList = ({ events }: EventsListProps) => {
  return (
    <section className="max-w-[1100px] flex flex-wrap gap-10 justify-center px-[20x]">
      {events.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
    </section>
  );
};

export default EventsList;
