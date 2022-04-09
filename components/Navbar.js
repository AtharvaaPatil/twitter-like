import Link from 'next/link';
// Link component used to route to home page

const Navbar = () => {
    <nav className='navbar'>
        <Link href = "/">
            <a className='navbar-brand'>Post app</a>
        </Link>
        <Link href = "/new">
            <a className='create'>Create Post</a>
        </Link>
    </nav>
}

export default Navbar