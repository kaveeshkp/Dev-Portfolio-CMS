-- Portfolio CMS Database Fix Script
-- Run this in MySQL to remove the liveUrl column

-- Use the portfolio_cms database
USE portfolio_cms;

-- Show current table structure (before changes)
DESCRIBE projects;

-- Drop the live_url column if it exists
ALTER TABLE projects DROP COLUMN IF EXISTS live_url;

-- Verify the change
DESCRIBE projects;

-- Expected columns after fix:
-- id, title, description, tech_stack, github_url, image_url, featured, published, created_at

-- Optional: Show all existing projects
SELECT * FROM projects;
