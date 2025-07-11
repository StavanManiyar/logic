/*
  # Insert initial data for Logic2Code

  1. Insert sample scenarios
  2. Insert sample badges
  3. Insert sample challenges
*/

-- Insert scenarios
INSERT INTO scenarios (title, description, difficulty, category, prompt, example, hints) VALUES
(
  'Weather-Based Clothing',
  'Learn to make decisions based on weather conditions',
  'beginner',
  'Conditional Logic',
  'Imagine you''re getting ready in the morning. How do you decide what to wear based on the weather and temperature?',
  'For example: "If it''s sunny and hot, I wear light clothes. If it''s raining, I take an umbrella and wear a raincoat."',
  ARRAY[
    'Think about different weather conditions (sunny, rainy, cloudy)',
    'Consider temperature ranges (hot, cold, mild)',
    'What combinations would you consider?'
  ]
),
(
  'Book Organization',
  'Sort and organize books using different criteria',
  'beginner',
  'Sorting & Arrays',
  'You have a collection of books that need to be organized. How would you sort them?',
  'For example: "I would sort them by author''s last name, or by publication year, or by genre."',
  ARRAY[
    'Think about different sorting criteria (title, author, year)',
    'Consider how you would compare books',
    'What order would you prefer?'
  ]
),
(
  'Meal Planning',
  'Plan meals based on preferences and ingredients',
  'intermediate',
  'Complex Logic',
  'How do you decide what to cook for dinner based on available ingredients and dietary preferences?',
  'For example: "I check what''s in the fridge, consider if anyone has dietary restrictions, and think about the time of day."',
  ARRAY[
    'Consider available ingredients',
    'Think about dietary restrictions',
    'Factor in time and effort required'
  ]
),
(
  'Grade Calculator',
  'Calculate grades and provide feedback',
  'intermediate',
  'Functions & Logic',
  'How would you calculate a student''s letter grade based on their numerical score?',
  'For example: "90-100 is an A, 80-89 is a B, 70-79 is a C, and so on."',
  ARRAY[
    'Think about grade ranges',
    'Consider edge cases',
    'What feedback would you provide?'
  ]
),
(
  'Budget Tracker',
  'Track expenses and categorize spending',
  'advanced',
  'Data Processing',
  'How would you track your monthly expenses and categorize them?',
  'For example: "I would group expenses by category like food, transport, entertainment, and calculate totals."',
  ARRAY[
    'Think about expense categories',
    'Consider tracking methods',
    'How would you analyze spending patterns?'
  ]
),
(
  'Task Scheduler',
  'Prioritize and schedule tasks efficiently',
  'advanced',
  'Algorithms',
  'How would you prioritize and schedule your daily tasks?',
  'For example: "I would consider deadlines, importance, and estimated time for each task."',
  ARRAY[
    'Think about task priority factors',
    'Consider time constraints',
    'How would you handle conflicts?'
  ]
);

-- Insert badges
INSERT INTO badges (name, description, icon, requirement, points) VALUES
(
  'First Steps',
  'Complete your first scenario',
  '🎯',
  'Complete 1 scenario',
  100
),
(
  'Logic Master',
  'Complete 5 conditional logic scenarios',
  '🧠',
  'Complete 5 scenarios in Conditional Logic category',
  250
),
(
  'Code Translator',
  'Generate code in both Python and JavaScript',
  '🔄',
  'Generate code in both languages',
  150
),
(
  'Streak Keeper',
  'Maintain a 7-day learning streak',
  '🔥',
  'Learn for 7 consecutive days',
  300
),
(
  'Advanced Thinker',
  'Complete 3 advanced scenarios',
  '🚀',
  'Complete 3 advanced difficulty scenarios',
  500
),
(
  'Community Helper',
  'Share your progress on social media',
  '🤝',
  'Share progress externally',
  50
),
(
  'Perfectionist',
  'Complete 10 scenarios with perfect scores',
  '⭐',
  'Complete 10 scenarios perfectly',
  400
),
(
  'Explorer',
  'Try scenarios from all categories',
  '🌍',
  'Complete at least 1 scenario from each category',
  350
);

-- Insert challenges
INSERT INTO challenges (title, description, difficulty, points, requirements) VALUES
(
  'Logic Foundations',
  'Master the basics of conditional logic',
  'beginner',
  200,
  ARRAY['Complete Weather-Based Clothing', 'Complete Grade Calculator', 'Generate code in Python']
),
(
  'Data Manipulation',
  'Learn to work with arrays and objects',
  'intermediate',
  350,
  ARRAY['Complete Book Organization', 'Complete Budget Tracker', 'Generate code in JavaScript']
),
(
  'Complex Problem Solving',
  'Tackle advanced algorithmic challenges',
  'advanced',
  500,
  ARRAY['Complete Task Scheduler', 'Complete Meal Planning', 'Maintain 5-day streak']
),
(
  'Full Stack Logic',
  'Demonstrate mastery across all areas',
  'advanced',
  750,
  ARRAY['Complete 10 scenarios', 'Earn 5 badges', 'Try both programming languages']
);