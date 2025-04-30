export type Testimonial = {
  id: number;
  name: string;
  designation: string;
  company?: string; // Make company optional
  content: string;
  image: string;
  linkedin: string;
};
