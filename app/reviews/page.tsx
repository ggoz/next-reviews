import Link from "next/link";
import Heading from "@/components/Heading";
import { getReviews } from "@/lib/reviews";

const ReviewsPage = async () => {
  const reviews = await getReviews();
  return (
    <>
      <Heading>Reviews</Heading>
      <ul className='flex flex-row flex-wrap gap-3'>
        {reviews.map((review) => (
          <li key={review.slug} className='bg-white w-80 rounded shadow border hover:shadow-xl'>
            <Link href={`/reviews/${review.slug}`}>
              <img src={`${review.image}`} alt='' width='320' height='180' className='mb-2 rounded' />
              <h2 className='font-orbitron font-semibold  text-center py-1'>{review.title}</h2>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ReviewsPage;
