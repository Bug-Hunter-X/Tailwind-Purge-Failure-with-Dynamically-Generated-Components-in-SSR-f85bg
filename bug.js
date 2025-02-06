This bug occurs when using Tailwind CSS with a framework like Next.js or Nuxt.js that uses server-side rendering (SSR).  The issue arises when Tailwind's purge functionality fails to correctly identify and include all CSS classes used in your application's components. This often happens when components are dynamically generated or imported only after the initial server-side rendering process. Consequently, some styles are missing in production builds leading to broken styling or unexpected visual behaviour.  This is often more pronounced when dealing with conditional classes or classes present in JSX after the component has mounted.