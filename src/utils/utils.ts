export const createSlug = (title: string) => {
  return title.replace(/\s+/g, "_");
};

export const decodeSlug = (slug: string) => {
  return (
    slug
      .split("_")
      // .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ")
  );
};
