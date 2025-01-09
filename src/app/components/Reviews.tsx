import React from "react";

interface Review {
  name: string;
  date: string;
  rating: number;
  review: string;
}

const reviews: Review[] = [
  {
    name: "Samantha D.",
    date: "August 14, 2023",
    rating: 5,
    review:
      "I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It's become my favorite go-to shirt."
  },
  {
    name: "Alex M.",
    date: "August 15, 2023",
    rating: 5,
    review:
      "The t-shirt exceeded my expectations! The colors are vibrant and the print quality is top-notch. Being a UI/UX designer myself, I'm quite picky about aesthetics, and this t-shirt definitely gets a thumbs up from me."
  },
  {
    name: "Ethan R.",
    date: "August 16, 2023",
    rating: 4,
    review:
      "This t-shirt is a must-have for anyone who appreciates good design. The minimalistic yet stylish pattern caught my eye, and the fit is perfect. I can see the designer’s touch in every aspect of this shirt."
  },
  {
    name: "Olivia P.",
    date: "August 17, 2023",
    rating: 5,
    review:
      "As a UI/UX enthusiast, I value simplicity and functionality. This t-shirt not only represents those principles but also feels great to wear. It's evident that the designer poured their creativity into making this t-shirt stand out."
  },
  {
    name: "Liam K.",
    date: "August 18, 2023",
    rating: 5,
    review:
      "This t-shirt is a fusion of comfort and creativity. The fabric is soft, and the design speaks volumes about the designer's skill. It's like wearing a piece of art that reflects my passion for both design and fashion."
  },
  {
    name: "Ava H.",
    date: "August 19, 2023",
    rating: 5,
    review:
      "I'm not just wearing a t-shirt; I'm wearing a piece of design philosophy. The intricate details and thoughtful layout of the design make this shirt a conversation starter."
  }
];

const ReviewCard: React.FC<Review> = ({ name, date, rating, review }) => {
  return (
    <div className="review-card border rounded-lg p-4 shadow-md">
      <div className="flex items-center mb-2">
        <div className="text-yellow-500 text-xl">{'★'.repeat(rating)}</div>
        <div className="text-gray-400 ml-2 text-sm">{'☆'.repeat(5 - rating)}</div>
      </div>
      <h3 className="font-bold text-lg mb-1">{name}</h3>
      <p className="text-gray-500 text-sm mb-2">Posted on {date}</p>
      <p className="text-gray-700">{review}</p>
    </div>
  );
};

const ReviewsSection: React.FC = () => {
  return (
    <div className="reviews-section max-w-5xl mx-auto p-6">
      <div className="tabs flex justify-between items-center border-b pb-2 mb-4">
        <div className="flex space-x-36">
          <button className="text-gray-800 font-semibold border-b-2 border-black">Product Details</button>
          <button className="text-gray-800 font-semibold border-b-2 border-black">Rating & Reviews</button>
          <button className="text-gray-800 font-semibold border-b-2 border-black">FAQs</button>
        </div>
        <div className="flex items-center space-x-4">
          <div className="relative">
            <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-2 px-4 rounded flex items-center">
              Latest
              <span className="ml-2">▼</span>
            </button>
          </div>
          <button className="bg-black text-white font-semibold py-2 px-4 rounded">Write a Review</button>
        </div>
      </div>
      <h2 className="text-2xl font-bold mb-6">All Reviews ({reviews.length})</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {reviews.map((review, index) => (
          <ReviewCard
            key={index}
            name={review.name}
            date={review.date}
            rating={review.rating}
            review={review.review}
          />
        ))}
      </div>
      <div className="text-center mt-6">
        <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-2 px-4 rounded">
          Load More Reviews
        </button>
      </div>
    </div>
  );
};

export default ReviewsSection;
