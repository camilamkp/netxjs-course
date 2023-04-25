import Image from 'next/image';
import Link from 'next/link';

const AllEventsPage = ({ data }) =>
{
  return (
    <div className='events-page'>

              { data.map(ev =>
          (
            <Link key={ ev.id } href={`/events/${ ev.id }`} passHref legacyBehavior>
              <a className='card-content'>
              <Image  width={500} height={500} alt={ ev.title } src={ ev.image } />
              <h2>{ ev.title }</h2>
            </a>
          </Link>
          )
        )}

     </div>
  )
}

export default AllEventsPage;