// shadcn.config.js
export default {
    // Configure the shadcn UI components
    components: {
      Button: {
        base: "px-4 py-2 rounded-md",
        variants: {
          primary: "bg-blue-500 text-white hover:bg-blue-600",
          secondary: "bg-gray-500 text-white hover:bg-gray-600",
        },
      },
      // Add other components here
    },
  }
  