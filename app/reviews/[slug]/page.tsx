import Heading from "@/components/Heading";
import { getReview, getSlugs } from "@/lib/reviews";
import { Metadata } from "next";
import { FC } from "react";
import ShareLinkButton from "../../../components/ShareLinkButton";

interface ReviewPageProps {
  params: { slug: string };
}

export async function generateStaticParams() {
  const slugs = await getSlugs();
  return slugs.map((slug) => ({ slug }));
}

export const generateMetadata = async ({ params: { slug } }: ReviewPageProps): Promise<Metadata> => {
  const review = await getReview(slug);
  return { title: review.title };
};

const ReviewPage: FC<ReviewPageProps> = async ({ params: { slug } }) => {
  console.log("review page: ", slug);

  const review = await getReview(slug);
  return (
    <>
      <Heading>{review.title}</Heading>
      <div className='flex gap-3 items-baseline'>
        <p className='pb-2 italic'>{review.date}</p>
        <ShareLinkButton></ShareLinkButton>
      </div>

      <img src={review.image} alt='' width='640' height='360' className='mb-2 rounded' />
      <article
        dangerouslySetInnerHTML={{ __html: review.body }}
        className='prose prose-slate max-w-screen-sm'></article>
    </>
  );
};

export default ReviewPage;
