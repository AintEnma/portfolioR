# CMS Implementation with Supabase - TODO List

## 1. Install Supabase Client
- [x] Add @supabase/supabase-js to package.json dependencies
- [x] Run npm install to install the package

## 2. Set Up Supabase Configuration
- [x] Create src/supabaseClient.js for Supabase client setup
- [ ] **USER ACTION**: Create .env file with VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY (see SUPABASE_SETUP.md)

## 3. Database Schema
- [x] Provide SQL scripts for creating tables: about, tools, contacts
- [ ] **USER ACTION**: Run SQL in Supabase dashboard to create tables

## 4. Create CMS Interface
- [x] Create src/pages/Admin.jsx for CMS editing interface
- [x] Add /admin route in src/App.jsx
- [x] Implement forms for editing about text, tools, and contacts

## 5. Update Components to Fetch Data
- [x] Update src/pages/About.jsx to fetch about text and tools from Supabase
- [x] Update src/pages/Contact.jsx to fetch intro text from Supabase
- [x] Update src/components/Carousel.jsx to fetch contacts from Supabase

## 6. Authentication (Optional)
- [ ] **USER ACTION**: Add basic auth to Admin page using Supabase Auth (optional)

## 7. Testing and Followup
- [ ] **USER ACTION**: Test CMS editing and verify updates on site
- [ ] **USER ACTION**: Add initial data to Supabase tables
