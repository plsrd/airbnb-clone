import Link from 'next/link'

const NavBar = () => {
  return (
    <nav>
      <Link href='/'>
      <div className='logo' />
      </Link>
    </nav>
  )
}

export default NavBar