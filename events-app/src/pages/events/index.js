
const EventsPage = () =>
{
  return (
    <>
    <EventsPage />
    </>
  )
}

export default EventsPage;

export async function getStaticProps()
{
  const { events_categories } = await import('../../data/data.json')

  return{
    props:{
      data: events_categories,
    },
  };
}