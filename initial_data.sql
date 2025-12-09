-- Initial data inserts for Supabase tables
-- Run these in your Supabase SQL Editor after creating the tables

-- Insert into about table
INSERT INTO about (title, content) VALUES
('About Me', 'Im Rom - I grow through discipline, curiosity, and the pursuit of both knowledge and excellence.');

-- Insert into tools table
INSERT INTO tools (name, description, icon_url) VALUES
('Flutter', 'Open-source framework for building cross-platform mobile applications.', 'https://storage.googleapis.com/cms-storage-bucket/4fd5520fe28ebf839174.svg'),
('Node.js', 'JavaScript runtime built on Chrome''s V8 JavaScript engine', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg'),
('Godot', 'Free and open-source game engine for 2D and 3D game development.', 'https://godotengine.org/assets/press/logo_large_color_light.png'),
('Figma', 'Vector graphics editor and prototyping tool', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg'),
('Git', 'Distributed version control system', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg');

-- Insert into contacts table
INSERT INTO contacts (type, value, icon_url) VALUES
('email', 'romdenielle19@gmail.com', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg'),
('linkedin', 'https://linkedin.com/in/yourprofile', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg'),
('github', 'https://github.com/AintEnma', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg'),
('instagram', 'https://www.instagram.com/aintenma?igsh=bnZxZnBpY3U5bWRp', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/twitter/twitter-original.svg');

-- Insert into contact_intro table
INSERT INTO contact_intro (intro_text) VALUES
('I''d love to hear from you! Whether you have a project in mind, want to collaborate, or just want to say hello, feel free to reach out. I''m always open to discussing new opportunities and interesting ideas.');
