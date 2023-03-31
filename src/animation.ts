export const plateAnim = {
  hidden: (custom: { x: number; y: number }) => ({
    x: custom.x,
    y: custom.y,
    opacity: 0,
  }),

  visible: (custom: { delay: number }) => ({
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      delay: custom.delay * 0.2,
      duration: 1,
      type: "spring",
      easy: "easeInOut",
    },
  }),
};
