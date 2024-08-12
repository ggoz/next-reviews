import { readdir, readFile } from "fs/promises";
import matter from "gray-matter";
import { marked } from "marked";

export interface Review {
  slug: string;
  title: string;
  date: string;
  image: string;
  body: string;
}

export const getReview = async (slug: string): Promise<Review> => {
  const text = await readFile(`./content/reviews/${slug}.md`, "utf-8");
  const {
    content,
    data: { title, date, image }
  } = matter(text);
  const html = await marked(content);
  return {
    slug,
    title,
    date,
    image,
    body: html
  };
};

export const getReviews = async (): Promise<Review[]> => {
  const slugs = await getSlugs();

  const reviews = [];
  for (const slug of slugs) {
    const review = await getReview(slug);
    reviews.push(review);
  }
  reviews.sort((a, b) => b.date.localeCompare(a.date));
  return reviews;
};

export const getSlugs = async (): Promise<string[]> => {
  const files = await readdir('./content/reviews');
  const slugs = files.filter(file => file.endsWith('.md')).map(file => file.slice(0, -'.md'.length));
  return slugs;
};

export const getFeaturedReview = async (): Promise<Review> => {
  ;
  const reviews = await getReviews();
  return reviews[0];

};