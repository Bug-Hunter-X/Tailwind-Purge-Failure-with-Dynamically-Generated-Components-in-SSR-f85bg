# Tailwind Purge Failure in SSR

This repository demonstrates a common issue when using Tailwind CSS with server-side rendering (SSR) frameworks like Next.js or Nuxt.js.  Dynamically generated classes or classes added via Javascript after the initial render are often purged by Tailwind, leading to missing styles in the production build.

The `bug.js` file shows how the problem manifests. The `bugSolution.js` file shows a possible solution involving adjusting Tailwind's purge configuration or using a different approach to manage dynamic classes.

## Steps to Reproduce

1. Clone this repository.
2. Install dependencies using `npm install`.
3. Run the application using `npm run dev` (specific command will depend on framework used).
4. Observe missing styles in production build. 
5. Implement the solution in `bugSolution.js` to resolve the issue.

## Solutions

The solution involves carefully configuring Tailwind's `purge` options to correctly identify and retain all classes, including dynamically generated ones.  This might involve using more permissive patterns or explicitly including certain classes. Another solution involves optimizing how you apply classes to avoid dynamic class generation.   Additional details are within the `bugSolution.js` file.