import Link from 'next/link';

const Bread = () => {
  return (
    <nav className="breadcrumb p-4 ml-[7.5%]">
      <ol className="flex space-x-2 items-center text-gray-600">
        {/* Home */}
        <li className="flex items-center">
          <Link href="/" passHref>
            <div className="hover:underline cursor-pointer">Home</div>
          </Link>
          <span className="mx-2 text-gray-400">{'>'}</span>
        </li>
        {/* Shop */}
        <li className="flex items-center">
          <Link href="/shop" passHref>
            <div className="hover:underline cursor-pointer">Shop</div>
          </Link>
          <span className="mx-2 text-gray-400">{'>'}</span>
        </li>
        {/* Men */}
        <li className="flex items-center">
          <Link href="/shop/men" passHref>
            <div className="hover:underline cursor-pointer">Men</div>
          </Link>
          <span className="mx-2 text-gray-400">{'>'}</span>
        </li>
        {/* T-shirts */}
        <li className="flex items-center text-gray-800">
          <div>T-shirts</div>
        </li>
      </ol>
    </nav>
  );
};

export default Bread;