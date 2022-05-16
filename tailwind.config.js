module.exports = {
  /**
   * If you want to support toggling dark mode manually instead of relying
   * on the operating system preference, use the class strategy instead of
   * the media strategy
   */
  darkMode: "class",

  /**
   * Paths to all components and layouts or other files that contain Tailwind class names.
   */
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/layouts/**/*.{js,ts,jsx,tsx}",
  ],

  /**
   * The theme section is where you define anything related to the visual design of your site.
   */
  theme: {

    /**
     * Extending the default theme.
     */
    extends: {

    }
  }
}
