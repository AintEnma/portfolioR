# Supabase Setup Instructions

## 1. Create a Supabase Project
1. Go to [supabase.com](https://supabase.com) and sign up/login.
2. Click "New project".
3. Fill in your project details and wait for it to be set up.

## 2. Get Your Project Credentials
1. In your Supabase dashboard, go to Settings > API.
2. Copy the "Project URL" and "anon public" key.

## 3. Create Environment Variables
1. Create a `.env` file in the root of your project (same level as `package.json`).
2. Add the following:
```
VITE_SUPABASE_URL=your_project_url_here
VITE_SUPABASE_ANON_KEY=your_anon_key_here
```
3. Replace with your actual values.

## 4. Set Up Database Tables
1. In your Supabase dashboard, go to the SQL Editor.
2. Run the SQL script from `schema.sql` in your project root.
3. This will create the necessary tables: `about`, `tools`, `contacts`, `contact_intro`.

## 5. Add Initial Data (Optional)
You can add initial data via the Supabase dashboard or use the CMS at `/admin` after setup.

Example inserts:
- For `about`: Insert a row with title and content.
- For `tools`: Insert rows with name, description, icon_url.
- For `contacts`: Insert rows with type, value, icon_url.
- For `contact_intro`: Insert a row with intro_text.

## 6. Test the CMS
1. Run `npm run dev` to start the development server.
2. Navigate to `http://localhost:5173/admin` to access the CMS.
3. Edit your content and check the main site to see updates.

## Security Note
- The anon key is public, so don't expose sensitive data.
- For production, consider adding authentication to the admin page.
