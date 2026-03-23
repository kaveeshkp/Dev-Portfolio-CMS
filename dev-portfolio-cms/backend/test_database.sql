-- Test script to verify MySQL database setup
-- Run this to check if everything is configured correctly

-- Check if database exists
SHOW DATABASES LIKE 'portfolio_cms';

-- Use the database
USE portfolio_cms;

-- Show all tables
SHOW TABLES;

-- Check projects table structure
DESCRIBE projects;

-- Count existing projects
SELECT COUNT(*) as project_count FROM projects;

-- Show all projects
SELECT * FROM projects;

-- Check if you can insert a test project (optional - comment out if not needed)
-- INSERT INTO projects (title, description, tech_stack, github_url, featured, published, created_at)
-- VALUES ('Test Project', 'Test Description', 'React, Node.js', 'https://github.com/test', false, true, NOW());
