import Link from 'next/link';
import Image from 'next/image';

const HomePage = ({ data }) => {
  return (
    <main>
        { 
        data.map( ev =>
        (
            <Link key={ ev.id } href={ `/events/${ ev.id }` } passHref legacyBehavior>
            <a>
                <Image width={ 600 } height={ 400 } alt={ ev.title } src={ ev.image } />
                <h2>{ ev.title }</h2>
                <p>{ ev.description }</p>
            </a>
            </Link>
        ) ) 
        }
    </main>
  )
}

export default HomePage;