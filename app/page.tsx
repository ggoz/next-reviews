import Heading from "@/components/Heading";
import { getFeaturedReview } from "@/lib/reviews";
import { Metadata } from "next";
import Link from "next/link";

const HomePage = async () => {
  console.log("HomePage Rendering");
  const review = await getFeaturedReview();
  return (
    <>
      <Heading>Indie Gamer</Heading>
      <p className='pb-3'>Only the best indie games, reviewed for you.</p>
      <div className='bg-white rounded w-80 shadow border hover:shadow-xl sm:w-full'>
        <Link href={`/reviews/${review.slug}`} className='flex flex-col sm:flex-row'>
          <img
            src={review.image}
            alt=''
            width='320'
            height='180'
            className='rounded-t sm:rounded-l sm:rounded-r-none'
          />
          <h2 className='font-orbitron font-semibold  text-center py-1 sm:px-2'>{review.title}</h2>
        </Link>
      </div>
    </>
  );
};

export default HomePage;
