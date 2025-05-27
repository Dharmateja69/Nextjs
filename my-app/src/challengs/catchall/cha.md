Challenge (Hard): Catch-All Routing
🔹 Challenge 1: Knowledge Base
Goal: Build a dynamic knowledge base using catch-all routes.

Structure:

/help/[...slug].js

Examples:

/help → Home page

/help/account/settings → Shows “Account → Settings”

/help/payments/methods/upi → Shows nested article

Task:

Parse slug and display it as breadcrumb navigation.

🔹 Challenge 2: Search Filter URLs
Goal: Handle search filters dynamically.

Structure:

/search/[...queryParams].js

Examples:

/search/shoes → Search for “shoes”

/search/shoes/nike/black → shoes + brand: nike + color: black

Task:

Display a UI that explains what’s being searched

Parse and convert queryParams array into search filters
