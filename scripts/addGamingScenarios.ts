import { supabase } from './supabase.js';

const gamingScenarios = [
  {
    title: 'Clash of Clans: Choosing Which Troops to Train',
    description: 'Strategically select troops based on enemy base defenses and layout.',
    difficulty: 'intermediate',
    category: 'Gaming Strategy',
    prompt: 'Analyze the enemy base and decide which troops to train. Consider walls, air defenses, and overall defense strength.',
    example: `Logic: If the enemy base has high walls, train wall breakers; if the enemy has air defenses, train dragons; if the base is lightly defended, train archers.

Code Example:
if (enemy.hasHighWalls) {
    trainTroops("wall_breakers");
} else if (enemy.hasAirDefenses) {
    trainTroops("dragons");
} else {
    trainTroops("archers");
}`,
    hints: ['Analyze enemy defenses first', 'Consider troop cost vs effectiveness', 'Check for weak points in the base layout']
  },
  {
    title: 'Valorant: Deciding Whether to Attack or Defend',
    description: 'Make tactical decisions based on enemy movement and team positioning.',
    difficulty: 'advanced',
    category: 'Gaming Strategy',
    prompt: 'Based on enemy behavior and site information, decide whether to attack aggressively or hold defensive positions.',
    example: `Logic: If the enemy is rushing B site, reinforce B with more players; if it's a slow push, hold your position and wait for them to reveal their strategy.

Code Example:
if (enemy.isRushing("B_site")) {
    reinforceSite("B", 3);
} else if (enemy.pushType === "slow") {
    holdPosition();
    waitForIntel();
}`,
    hints: ['Monitor enemy movement patterns', 'Communicate with your team', 'Consider round economy and weapon availability']
  },
  {
    title: 'PUBG: Choosing the Best Weapon for the Situation',
    description: 'Select optimal weapons based on combat range and engagement type.',
    difficulty: 'beginner',
    category: 'Gaming Strategy',
    prompt: 'Choose the most effective weapon based on your proximity to enemies and combat situation.',
    example: `Logic: If you're in close combat, equip a shotgun; if you're at medium range, equip an assault rifle; if you're far from the enemy, use a sniper.

Code Example:
if (combatRange === "close") {
    equipWeapon("shotgun");
} else if (combatRange === "medium") {
    equipWeapon("assault_rifle");
} else if (combatRange === "long") {
    equipWeapon("sniper_rifle");
}`,
    hints: ['Assess the distance to your target', 'Consider available ammunition', 'Factor in weapon attachments and accuracy']
  },
  {
    title: 'Fortnite: Deciding Whether to Build or Shoot',
    description: 'Choose between building defensively or engaging in combat based on the tactical situation.',
    difficulty: 'intermediate',
    category: 'Gaming Strategy',
    prompt: 'React to enemy attacks by deciding whether to build structures for defense/advantage or engage directly in combat.',
    example: `Logic: If you're being attacked from above, build a ramp to gain height; if you're being shot at from the ground, shoot back while building a wall for defense.

Code Example:
if (enemy.position === "above") {
    buildStructure("ramp");
    gainHeight();
} else if (enemy.isShootingFromGround) {
    buildStructure("wall");
    returnFire();
}`,
    hints: ['Always consider high ground advantage', 'Build while moving to avoid being hit', 'Monitor your material resources']
  },
  {
    title: 'League of Legends: Deciding When to Push or Retreat',
    description: 'Make strategic lane decisions based on enemy positions and team status.',
    difficulty: 'advanced',
    category: 'Gaming Strategy',
    prompt: 'Analyze the map state, enemy positions, and team advantage to decide whether to push lanes or retreat safely.',
    example: `Logic: If the enemy jungler is visible on the other side of the map, push the lane; if the enemy bot lane is ahead, retreat and play safe.

Code Example:
if (enemy.jungler.isVisible && enemy.jungler.location !== "nearby") {
    pushLane();
} else if (enemy.botLane.isAhead) {
    retreat();
    playSafe();
}`,
    hints: ['Track enemy jungler position on minimap', 'Consider your teams power spikes', 'Communicate with teammates before making moves']
  },
  {
    title: 'Minecraft: Choosing the Right Tools for Mining',
    description: 'Select appropriate tools based on the material you want to mine efficiently.',
    difficulty: 'beginner',
    category: 'Gaming Strategy',
    prompt: 'Choose the most efficient tool for mining different materials, considering durability and mining speed.',
    example: `Logic: If you're mining diamonds, use an iron pickaxe; if you're mining wood, use an axe; if you're mining stone, use a stone pickaxe.

Code Example:
if (material === "diamond") {
    useTool("iron_pickaxe");
} else if (material === "wood") {
    useTool("axe");
} else if (material === "stone") {
    useTool("stone_pickaxe");
}`,
    hints: ['Different materials require specific tool types', 'Consider tool durability and efficiency', 'Higher tier tools mine faster but cost more resources']
  },
  {
    title: 'Among Us: Deciding Who to Suspect',
    description: 'Use behavioral analysis and game evidence to identify potential impostors.',
    difficulty: 'intermediate',
    category: 'Gaming Strategy',
    prompt: 'Analyze player behavior, task completion, and suspicious activities to make voting decisions.',
    example: `Logic: If a player is acting unusually and is near a sabotaged area, suspect them; if someone has been quiet and hasn't completed tasks, vote them off.

Code Example:
if (player.behavior === "unusual" && player.nearSabotage) {
    suspectPlayer(player);
} else if (player.isQuiet && !player.completedTasks) {
    voteOff(player);
}`,
    hints: ['Watch for players avoiding tasks', 'Note who was near sabotaged areas', 'Pay attention to movement patterns and alibis']
  },
  {
    title: 'Apex Legends: Choosing Which Legend to Play',
    description: 'Select the optimal character based on team composition and strategic needs.',
    difficulty: 'intermediate',
    category: 'Gaming Strategy',
    prompt: 'Choose a Legend that complements your team composition and fits the planned strategy.',
    example: `Logic: If you're playing with a team full of fraggers, choose a support character like Lifeline; if you need a scout, choose Bloodhound.

Code Example:
if (team.hasMany("fragger")) {
    selectLegend("Lifeline"); // Support
} else if (team.needs("scout")) {
    selectLegend("Bloodhound");
} else if (team.needs("mobility")) {
    selectLegend("Pathfinder");
}`,
    hints: ['Balance team roles (assault, support, recon)', 'Consider map and ring positioning strategy', 'Adapt to your playstyle and team communication']
  },
  {
    title: 'Call of Duty: Deciding When to Use a Killstreak',
    description: 'Strategically deploy killstreak rewards based on enemy positioning and tactical advantage.',
    difficulty: 'intermediate',
    category: 'Gaming Strategy',
    prompt: 'Choose the optimal timing and type of killstreak to maximize impact on the battlefield.',
    example: `Logic: If the enemy is camping in a corner, use an airstrike; if they're scattered across the map, use a UAV to reveal their positions.

Code Example:
if (enemy.isCamping && enemy.location === "corner") {
    useKillstreak("airstrike", enemy.location);
} else if (enemy.isScattered) {
    useKillstreak("UAV");
    revealEnemyPositions();
}`,
    hints: ['Save powerful killstreaks for grouped enemies', 'Use reconnaissance streaks when enemies are hidden', 'Consider map layout and enemy movement patterns']
  },
  {
    title: 'Overwatch: Choosing Which Hero to Use Based on Team Composition',
    description: 'Select heroes that create a balanced and synergistic team composition.',
    difficulty: 'advanced',
    category: 'Gaming Strategy',
    prompt: 'Analyze your team composition and enemy team to choose a hero that provides the best strategic advantage.',
    example: `Logic: If the team lacks tanks, switch to a tank hero; if the team needs healing, switch to a support hero; if the team lacks damage, choose a damage hero.

Code Example:
if (team.lacks("tank")) {
    selectHero("tank_role");
} else if (team.needs("healing")) {
    selectHero("support_role");
} else if (team.lacks("damage")) {
    selectHero("damage_role");
}`,
    hints: ['Follow the 2-2-2 role composition guideline', 'Counter enemy team heroes with appropriate picks', 'Consider map objectives and choke points']
  }
];

async function addGamingScenarios() {
  console.log('Starting to add gaming scenarios...');
  
  try {
    const { data, error } = await supabase
      .from('scenarios')
      .insert(gamingScenarios);

    if (error) {
      console.error('Error adding gaming scenarios:', error);
      return;
    }

    console.log(`Successfully added ${gamingScenarios.length} gaming scenarios!`);
    console.log('Scenarios added successfully');
  } catch (err) {
    console.error('Failed to add gaming scenarios:', err);
  }
}

// Run the function
addGamingScenarios();
