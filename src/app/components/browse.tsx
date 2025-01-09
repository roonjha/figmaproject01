
import Image from 'next/image';

const BrowseByStyle = () => {
  return (
    <div className="bg-white min-h-screen flex items-center justify-center">
      {/* Gray Background with Rounded Corners */}
      <div className="bg-gray-200 rounded-lg shadow-lg w-[1239px] h-[760px] p-6 flex flex-col items-center mt-5">
        {/* Title */}
        <h2 className="text-center text-4xl font-extrabold mb-8">BROWSE BY DRESS STYLE</h2>
        
        {/* Grid of Images without Gaps */}
        <div className="grid grid-cols-2 gap-4">
          {/* Casual */}
          <div className="flex items-center justify-center">
            <Image
              src="/casual.png" // Replace with the path to your casual image
              alt="Casual"
              width={407}
              height={289}
              className="rounded-lg"
            />
          </div>

          {/* Formal */}
          <div className="flex items-center justify-center mt-28">
            <Image
              src="/formal.png" // Replace with the path to your formal image
              alt="Formal"
              width={407}
              height={289}
              className="rounded-lg"
            />
          </div>

          {/* Party */}
          <div className="flex items-center justify-center mb-44">
            <Image
              src="/party.png" // Replace with the path to your party image
              alt="Party"
              width={407}
              height={289}
              className="rounded-lg"
            />
          </div>

          {/* Gym */}
          <div className="flex items-center justify-center mb-[15%]">
            <Image
              src="/gym.png" // Replace with the path to your gym image
              alt="Gym"
              width={407}
              height={289}
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrowseByStyle;
