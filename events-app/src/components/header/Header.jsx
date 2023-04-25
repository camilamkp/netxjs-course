import Link from 'next/link';

const Header = () =>
{
  return (
    <header>
        <nav>
        <Link href='/' passHref legacyBehavior>
            <a>Home</a>
        </Link>

        <Link href='/events' passHref legacyBehavior>
            <a>Events</a>
        </Link>

        <Link href='/about-us' passHref legacyBehavior>
            <a>About Us</a>
        </Link>
        </nav>
    </header>
  )
}

export default Header;
