### ✅ Why Do We Use `[]` in Route Files in Next.js?

**Definition:**

In **Next.js**, placing a file or folder name inside **square brackets `[param]`** is a way to define a **dynamic route segment** — it means that part of the URL can change, and you can capture its value.

---

### 🧠 Example:

#### Folder: `app/user/[username]/page.tsx`

#### URL: `http://localhost:3000/user/john-doe`

- Here, `[username]` captures the dynamic part of the URL (`john-doe`) and makes it available inside your page using the `useParams()` hook (in App Router) or `useRouter().query` (in Pages Router).

---

### 📌 Summary:

| Part                   | Meaning                     |
| ---------------------- | --------------------------- |
| `[username]`           | Dynamic placeholder         |
| `/user/john-doe`       | Matches and loads this page |
| `useParams().username` | Returns `"john-doe"`        |

---

Let me know if you'd like a visual diagram to understand this better.
