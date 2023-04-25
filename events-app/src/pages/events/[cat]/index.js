import Image from 'next/image';
import Link from 'next/link';

const EventsCategoryPage = ({ data, pageName }) =>
{
  return (
    <div>
        <h1>Events in { pageName } </h1>

        <div>

          { data.map( ev =>
            (
              <Link key={ ev.id } href={`/events/${ ev.city }/${ ev.id }`} passHref legacyBehavior>
                <a>

                  <Image width={300} height={300} alt={ ev.title } src={ ev.image } />
                  
                  <h2>{ ev.title }</h2>
                  
                  <p>{ ev.description }</p>
                </a>
                
              </Link>
            ))}

        {/* <a href='/events/event1'>
          {' '}
          <img/>
          <h2>Event 1</h2>
        </a>

        <a href='/events/event2'>
          {' '}
          <img/>
          <h2>Event 2</h2>
        </a>

        <a href='/events/event3'>
          {' '}
          <img/>
          <h2>Event 3</h2>
        </a>

        <a href='/events/event4'>
          {' '}
          <img/>
          <h2>Event 4</h2>
        </a>

        <a href='/events/event5'>
          {' '}
          <img/>
          <h2>Event 5</h2>
        </a>

        <a href='/events/event6'>
          {' '}
          <img/>
          <h2>Event 6</h2>
        </a> */}
        
        </div>
        
    </div>
  )
}

export default EventsCategoryPage;

export async function getStaticPaths()
{
  const { events_categories } = await import('../../../data/data.json');

  const allPaths = events_categories.map( (ev)=>
    {
      return{
        params:
          {
            cat: ev.id.toString(),
          },
      };
    });
    
  return {
    paths: allPaths,
    fallback: false,
  };
}

export async function getStaticProps(context)
{
   const id = context?.params.cat;
  const { allEvents } = await import('../../../data/data.json');
  const data = allEvents.filter(ev => ev.city === id)
  return{ props: { data, pageName: id } } 
}