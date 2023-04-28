import EventCard from '@/components/events/EventCard';


const SingleEventPage = ({ data }) => <EventCard data={ data }/>

export default SingleEventPage;

export async function getStaticPaths()
{
  const data = await import('../../../data/data.json');
  const allEvents = data.allEvents;

  const allPaths = allEvents.map((path) =>
  {
    return{
      params: {
        cat: path.city,
        // the same name from the file [id]
        id: path.id,
      },
    };
  });

  return{
          paths: allPaths,
          fallback: false,
        }
}

export async function getStaticProps(context)
{
  const id = context.params.id;
  const { allEvents } = await import('../../../data/data.json');
  
  const eventData = allEvents.find((ev) => id === ev.id );
  
  return{
    props: {
      data: eventData,
    },
  }
}
