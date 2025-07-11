import { supabase } from '../src/lib/supabase';

const newScenarios = [
  {
    title: 'Deciding What Superpower to Use',
    description: 'Choose a superpower that best fits the situation you are in.',
    difficulty: 'advanced',
    category: 'Fantasy Logic',
    prompt: 'In a world where everyone has a unique superpower, you must decide which one to use based on the challenge you face.',
    example: 'Example: "If facing a physical threat, choose invincibility. For mental challenges, choose telepathy."',
    hints: ['Consider the nature of the threat.', 'Think about your surroundings.', 'What impact will your choice have?']
  },
  {
    title: 'Choosing Which Animal to Adopt Based on Personality',
    description: 'Select the best animal companion based on personality traits.',
    difficulty: 'intermediate',
    category: 'Decision Making',
    prompt: 'Given your personality type, which animal would make the best pet for you?',
    example: 'For example: "An energetic person might choose a dog, while a more introverted person might prefer a cat."',
    hints: ['Consider activity levels.', 'Think about social needs.', 'What kind of home environment do you have?']
  },
  {
    title: 'Deciding What to Eat Based on Mood',
    description: 'Match your current mood to the best food option.',
    difficulty: 'beginner',
    category: 'Mood-Based Decisions',
    prompt: 'What should you eat when you are feeling happy, sad, or anxious?',
    example: 'For example: "If you\'re feeling happy, you might choose something sweet. If you\'re anxious, opt for comfort food."',
    hints: ['Identify your mood.', 'Think about what comforts you.', 'Are there any dietary restrictions?']
  },
  {
    title: 'Choosing Your Travel Mode Based on Your Mood',
    description: 'Select the best travel mode that suits your mood and needs.',
    difficulty: 'beginner',
    category: 'Mood-Based Decisions',
    prompt: 'What is the best way to travel when you feel adventurous or relaxed?',
    example: 'For example: "If feeling adventurous, take a bicycle. If relaxed, a car might suit you better."',
    hints: ['Consider the distance and time.', 'Think about your energy levels.', 'Are there any cost constraints?']
  },
  {
    title: 'Deciding Whether to Nap or Work',
    description: 'Choose between taking a rest or continuing with work based on your current state.',
    difficulty: 'intermediate',
    category: 'Lifestyle Decisions',
    prompt: 'How do you decide whether to take a nap or push through work when feeling fatigued?',
    example: 'For example: "If lacking sleep, prioritize a nap. When on a deadline, consider getting a caffeine boost."',
    hints: ['Assess current energy levels.', 'Consider the urgency of tasks.', 'Are there benefits to rest over work?']
  },
  {
    title: 'Sorting Your Playlist Based on Genre',
    description: 'Organize your music playlist according to different genres.',
    difficulty: 'beginner',
    category: 'Organization',
    prompt: 'How would you sort your playlist to make it easy to find different styles of music?',
    example: 'For example: "Sort by rock, hip-hop, and classical genres to create distinct folders."',
    hints: ['Identify different genres in your playlist.', 'Consider mood and setting.', 'What are your most listened-to tracks?']
  },
  {
    title: 'Choosing Your Costume for Halloween',
    description: 'Select the perfect Halloween costume to match the current trends and your personality.',
    difficulty: 'advanced',
    category: 'Special Occasions',
    prompt: 'What factors influence your choice of a Halloween costume?',
    example: 'For example: "Popular culture may influence you to dress as a superhero, while personality might dictate a classic ghost."',
    hints: ['Reflect on pop culture influences.', 'Consider comfort and creativity.', 'How do you want to express yourself this season?']
  },
  {
    title: 'Making a Travel Plan Based on Budget',
    description: 'Develop a travel itinerary that matches your financial constraints.',
    difficulty: 'advanced',
    category: 'Budget-Based Planning',
    prompt: 'How do you proceed with creating a travel plan when on a restricted budget?',
    example: 'For instance: "Opt for hostels instead of hotels, and plan activities around free events."',
    hints: ['Evaluate current budget.', 'Identify key destinations.', 'What activities are must-do despite cost constraints?']
  },
  {
    title: 'Buying a Phone Based on Features and Budget',
    description: 'Find the perfect phone based on technological needs and financial ability.',
    difficulty: 'intermediate',
    category: 'Tech Decisions',
    prompt: 'What are your priorities when purchasing a new phone?',
    example: 'For example: "Consider camera quality, battery life, and price range within your budget."',
    hints: ['Determine essential features.', 'Analyze competing models.', 'Are there discounts available?']
  },
  {
    title: 'Choosing a Pet for Your Home Based on Space',
    description: 'Select a suitable pet considering your available living space.',
    difficulty: 'intermediate',
    category: 'Lifestyle Choices',
    prompt: 'How do you pick the right pet for your living situation?',
    example: 'For instance: "In a large house, a big dog might be suitable. In a small apartment, a fish might be preferable."',
    hints: ['Evaluate indoor vs. outdoor space.', 'Consider maintenance and activity levels.', 'Any potential space conflicts with family members?']
  },
  {
    title: 'Wizard\'s Spellcasting Decision',
    description: 'Make the best spellcasting choice in a wizard duel.',
    difficulty: 'advanced',
    category: 'Fantasy Logic',
    prompt: 'Faced with a rival wizard, how do you decide the most effective spell to use?',
    example: 'Example scenario: "In an offensive strategy, fireballs may prevail over charms; but with defensive measures, shields are pivotal."',
    hints: ['Consider the opponent\'s strengths.', 'Think about spell effectiveness and cooldowns.', 'What type of magic does your opponent utilize most?']
  },
  {
    title: 'Deciding Whether to Fight or Flee (Dragon Encounter)',
    description: 'Respond to a dragon encounter with the most strategic decision - fight or flee.',
    difficulty: 'advanced',
    category: 'Survival Scenarios',
    prompt: 'In a dragon encounter, when should you stand your ground and when to retreat?',
    example: 'For instance: "When better equipped or skilled, fighting may be advantageous. But when cornered, fleeing could preserve life."',
    hints: ['Assess your combat abilities.', 'Consider the dragon\'s behavior and weaknesses.', 'Weigh the pros and cons of both actions.']
  },
  {
    title: 'Sorting Magical Items in a Wizard\'s Inventory',
    description: 'Organize enchanted objects and artifacts based on type and use.',
    difficulty: 'beginner',
    category: 'Inventory Management',
    prompt: 'Faced with a plethora of magical items, how do you arrange them efficiently?',
    example: 'Example: "Sort by potions, spellbooks, and artifacts for quick access and ease in retrieval."',
    hints: ['Identify common categories for classification.', 'Consider use cases and prioritize frequently used items.', 'Create distinct sections for quick navigation.']
  },
  {
    title: 'Choosing Your Fantasy Job',
    description: 'Find the best fantasy career that suits your magical abilities and aspirations.',
    difficulty: 'intermediate',
    category: 'Career Paths in Magic',
    prompt: 'What should you ponder when selecting a fantasy occupation?',
    example: 'For instance: "A skilled alchemist might pursue potion-making, whereas a talented warrior may choose knighthood."',
    hints: ['Evaluate your magical strengths.', 'Consider job availability and prospects.', 'Align choices with ultimate fantasy goals.']
  },
  {
    title: 'Deciding What Action to Take in a Real-World Game (e.g., RPG)',
    description: 'Determine your next move based on in-game circumstances and character abilities.',
    difficulty: 'intermediate',
    category: 'Strategic Gaming',
    prompt: 'Faced with in-game challenges, how do you decide the next step for your character?',
    example: 'For example: "When low on health, healing might be critical. In combat, attacking may gain dominance."',
    hints: ['Assess ongoing threats and opportunities.', 'Evaluate potential outcomes of all available actions.', 'Revisit tactical plans for long-term success.']
  },
  {
    title: 'Choosing a Weapon in a Battle (Game Scenario)',
    description: 'Make the most effective weapon choice based on battle dynamics and enemy type.',
    difficulty: 'intermediate',
    category: 'Combat Strategies',
    prompt: 'What considerations guide your choice of weapon in a gaming battle?',
    example: 'In a similar scenario: "Fast enemies might require ranged weapons, while heavy armor may need piercing attacks."',
    hints: ['Consider attack speed and damage.', 'Evaluate range and weight of weapons.', 'What\'s best for the specific enemy type?']
  },
  {
    title: 'Deciding Which Hero to Choose Based on the Battle',
    description: 'Select your hero based on opponent abilities and environmental context.',
    difficulty: 'intermediate',
    category: 'Leadership and Strategy',
    prompt: 'Faced with picking a hero, where do your considerations lead you?',
    example: 'Example choice: "Against magic-users, a rogue with stealth might succeed; but in open fields, a strong knight could triumph."',
    hints: ['Identify the key battle elements.', 'Assess each hero\'s unique strengths.', 'Consider terrain and situational advantages.']
  },
  {
    title: 'Sorting Your Inventory in a Fantasy RPG',
    description: 'Organize character inventory by relevance, rarity, and usefulness.',
    difficulty: 'beginner',
    category: 'Game Management',
    prompt: 'Desiring an orderly inventory, how do you categorize items?',
    example: 'Example planning: "Place rare weapons separately, group potions by effect, and align resources by type."',
    hints: ['Label items based on scarcity.', 'Categorize by immediate usefulness.', 'What elements align with your gaming style?']
  },
  {
    title: 'Deciding Whether to Use Magic or Physical Attack in a Battle',
    description: 'Choose the ideal offensive approach in combat, magic or melee.',
    difficulty: 'intermediate',
    category: 'Attack Decisions',
    prompt: 'In a battle, how do you choose between magic spells and physical blows?',
    example: 'Example thinking: "Against hardened foes, magic might dispel their armor while physical attacks exploit weaknesses."',
    hints: ['Consider mana levels and physical stamina.', 'Evaluate enemy defenses and vulnerabilities.', 'Align approach with character strengths.']
  },
  {
    title: 'Choosing to Explore or Rest in an Adventure Game',
    description: 'Engage in exploration or recuperate strength in quests.',
    difficulty: 'beginner',
    category: 'Adventurous Choices',
    prompt: 'Faced with fatigue, adventurers must choose to explore or rest.',
    example: 'Example decision: "In new territory, exploration yields resources; yet when health wanes, resting restores capabilities."',
    hints: ['Assess current health and fatigue levels.', 'Consider potential exploration discoveries.', 'What future endeavors may a rest support?']
  },
  {
    title: 'Organizing Your Magic Spell Book',
    description: 'Arrange your collection of spells for easy access and efficient use.',
    difficulty: 'beginner',
    category: 'Spell Management',
    prompt: 'With an overflowing spellbook, how do you prioritize your enchantments?',
    example: 'Example sorting: "Prioritize attack spells for quick access, group healing spells, and order utility ones alphabetically."',
    hints: ['Group spells by type and effect.', 'Prioritize based on frequency of use.', 'Are there any spells that synergize with others?']
  }
];

async function addScenarios() {
  console.log('Starting to add scenarios...');
  
  try {
    const { data, error } = await supabase
      .from('scenarios')
      .insert(newScenarios);

    if (error) {
      console.error('Error adding scenarios:', error);
      return;
    }

    console.log(`Successfully added ${newScenarios.length} scenarios!`);
    console.log('Added scenarios:', data);
  } catch (err) {
    console.error('Failed to add scenarios:', err);
  }
}

// Run the function
addScenarios();
