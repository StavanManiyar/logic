import { supabase } from './supabase.js';

const gamingBadges = [
  {
    name: 'Gaming Strategist',
    description: 'Complete 5 gaming strategy scenarios',
    icon: '🎮',
    requirement: 'Complete 5 scenarios in Gaming Strategy category',
    points: 300
  },
  {
    name: 'Tactical Thinker',
    description: 'Master advanced gaming decision-making',
    icon: '🧠',
    requirement: 'Complete 3 advanced gaming scenarios',
    points: 400
  },
  {
    name: 'Battle Royale Expert',
    description: 'Complete scenarios from battle royale games',
    icon: '🏆',
    requirement: 'Complete PUBG, Fortnite, and Apex Legends scenarios',
    points: 250
  },
  {
    name: 'MOBA Master',
    description: 'Excel at multiplayer online battle arena logic',
    icon: '⚔️',
    requirement: 'Complete League of Legends and other MOBA scenarios',
    points: 200
  },
  {
    name: 'FPS Commander',
    description: 'Master first-person shooter strategies',
    icon: '🎯',
    requirement: 'Complete Valorant, Call of Duty, and Overwatch scenarios',
    points: 350
  },
  {
    name: 'All-Game Veteran',
    description: 'Complete scenarios from all gaming categories',
    icon: '🏅',
    requirement: 'Complete at least 1 scenario from each game type',
    points: 500
  }
];

async function addGamingBadges() {
  console.log('Starting to add gaming badges...');
  
  try {
    const { data, error } = await supabase
      .from('badges')
      .insert(gamingBadges);

    if (error) {
      console.error('Error adding gaming badges:', error);
      return;
    }

    console.log(`Successfully added ${gamingBadges.length} gaming badges!`);
    console.log('Gaming badges added successfully');
  } catch (err) {
    console.error('Failed to add gaming badges:', err);
  }
}

// Run the function
addGamingBadges();
