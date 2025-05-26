🔸 Challenge 1 (Medium): User Profile Navigation
Scenario: You are building a user dashboard. You need to create routes for:

/dashboard – main dashboard

/dashboard/profile – user profile page

/dashboard/settings – settings page

👉 Tasks:

Create nested folder structure inside /pages/dashboard/

Use Link to navigate between the 3 subpages from a common layout

Highlight the current active page

✍️ Hint: Use useRouter().pathname to detect active path

Challenge 2 (Hard): Dynamic User Page with SEO-Friendly URL
Scenario: You’re building a public user profile system like GitHub.

Goal: Create a dynamic route like /user/john-doe to show that user’s public profile.

👉 Tasks:

Create file: /pages/user/[username].js

Extract username from the URL

Display a dummy profile page using the username

Add a back button to home

✍️ Hint: Use useRouter() to access route parameters
