import Link from 'next/link';
import { UserButton, auth } from '@clerk/nextjs';

const Header = async ({ username }) => {
  const { userId } = auth();

  return (
    <nav className='flex items-center justify-between px-6 py-4 mb-5'>
      <div className='flex items-center'>
        <Link href='/'>
          <div className='text-lg font-bold uppercase'>Logo</div>
        </Link>
      </div>
      <div className='flex items-center'>
        {!userId && (
          <>
            <Link href='sign-in' className='mr-4'>
              Sign In
            </Link>
            <Link href='sign-up' className='mr-4'>
              Sign Up
            </Link>
          </>
        )}
        {userId && (
          <Link href='profile' className='text-gray-300 hover:text-white mr-4'>
            Profile
          </Link>
        )}
        <div className='ml-auto'>
          <UserButton afterSignOutUrl='/' />
        </div>
      </div>
    </nav>
  );
};

export default Header;
