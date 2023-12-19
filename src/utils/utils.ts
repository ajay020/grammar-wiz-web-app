export const createSlug = (title: string) => {
  return title.toLowerCase().replace(/\s+/g, "-");
};

export const decodeSlug = (slug: string) => {
  return slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};
