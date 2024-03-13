import { PortableTextBlock } from "sanity";

export type Project = {
  _id: string;
  _CreatedAt: Date;
  name: string;
  slug: string;
  image: string;
  alt: string;
  url: string;
  content: PortableTextBlock[];
};
