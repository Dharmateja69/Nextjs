🔸 Challenge 1 (Hard): Active Navigation Bar
Scenario:Create a Navbar with links like:

Home /

About /about

Projects /projects

Tasks:

Build a Navbar component used across pages.

Highlight the active link based on the current route.

Use useRouter().pathname to match and apply a class like active.

💡 Tip: Use inline styles or classNames based on condition.

🔸 Challenge 2 (Hard): Link with Query Parameters
Scenario: Click a button to go to /search?term=nextjs

Tasks:

Add a button/link to navigate to a page with a query string.

Use Link with query props or construct the URL manually.

<Link href={{ pathname: '/search', query: { term: 'nextjs' } }}>
  <a>Search for Next.js</a>
</Link>
