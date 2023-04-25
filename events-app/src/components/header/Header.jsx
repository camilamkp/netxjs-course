import Link from 'next/link';
import Image from 'next/image';

const Header = () =>
{
  return (
    <header>
      <div>
        <div className='top-navbar'>
          <Image alt='logo' src={'/images/logo.png'} width={150} height={150} />
          <nav>
            <ul>

              <li>
                <Link href='/' passHref legacyBehavior>
                    <a>Home</a>
                </Link>
              </li>
              <li>
                <Link href='/events' passHref legacyBehavior>
                    <a>Events</a>
                </Link>
              </li>
              <li>
                <Link href='/about-us' passHref legacyBehavior>
                    <a>About Us</a>
                </Link>
              </li>

            </ul>


          </nav>
        </div>
          <p className='title'>My first nextjs Project</p>
      </div>
    </header>
  )
}

export default Header;
