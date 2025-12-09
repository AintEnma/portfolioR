-- SQL scripts to create tables in Supabase

-- Table for About Me content
CREATE TABLE about (
  id SERIAL PRIMARY KEY,
  title TEXT NOT NULL,
  content TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Table for Tools
CREATE TABLE tools (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  description TEXT NOT NULL,
  icon_url TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Table for Contacts
CREATE TABLE contacts (
  id SERIAL PRIMARY KEY,
  type TEXT NOT NULL, -- e.g., 'email', 'linkedin', 'github'
  value TEXT NOT NULL, -- e.g., 'email@example.com', 'https://linkedin.com/in/username'
  icon_url TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Table for Contact Intro (since Contact.jsx has intro text)
CREATE TABLE contact_intro (
  id SERIAL PRIMARY KEY,
  intro_text TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Insert initial data (optional, user can do this via CMS or dashboard)
-- INSERT INTO about (title, content) VALUES ('About Me', 'Your about text here...');
-- INSERT INTO tools (name, description, icon_url) VALUES ('Figma', 'UI/UX design tool...', 'https://...');
-- INSERT INTO contacts (type, value, icon_url) VALUES ('email', 'your@email.com', 'https://...');
-- INSERT INTO contact_intro (intro_text) VALUES ('I''d love to hear from you!...');
