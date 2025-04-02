const brandStyle = {
  // Section Layout
  section: "pt-16",
  container: "container",
  wrapper: "-mx-4 flex flex-wrap",
  fullWidth: "w-full px-4",

  // Brand Container Styles
  brandContainer:
    "flex flex-wrap items-center justify-center rounded-sm bg-gray-light px-8 py-8 dark:bg-gray-dark sm:px-10 md:px-[50px] md:py-[40px] xl:p-[50px] 2xl:px-[70px] 2xl:py-[60px]",

  // Individual Brand Item Styles
  brandItem:
    "flex w-1/2 items-center justify-center px-3 py-[15px] sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6",

  // Brand Image Link Styles
  brandLink:
    "relative h-24 w-full opacity-80 transition hover:opacity-100 dark:opacity-60 dark:hover:opacity-100", // Increased height for larger images

  // Brand Image Styles
  brandImage: "block dark:hidden",
};

export default brandStyle;
