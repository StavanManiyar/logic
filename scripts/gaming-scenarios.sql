-- Insert Gaming Scenarios
INSERT INTO scenarios (title, description, difficulty, category, prompt, example, hints) VALUES
('Clash of Clans: Choosing Which Troops to Train', 'Strategically select troops based on enemy base defenses and layout.', 'intermediate', 'Gaming Strategy', 'Analyze the enemy base and decide which troops to train. Consider walls, air defenses, and overall defense strength.', 'Logic: If the enemy base has high walls, train wall breakers; if the enemy has air defenses, train dragons; if the base is lightly defended, train archers.

Code Example:
if (enemy.hasHighWalls) {
    trainTroops("wall_breakers");
} else if (enemy.hasAirDefenses) {
    trainTroops("dragons");
} else {
    trainTroops("archers");
}', ARRAY['Analyze enemy defenses first', 'Consider troop cost vs effectiveness', 'Check for weak points in the base layout']),

('Valorant: Deciding Whether to Attack or Defend', 'Make tactical decisions based on enemy movement and team positioning.', 'advanced', 'Gaming Strategy', 'Based on enemy behavior and site information, decide whether to attack aggressively or hold defensive positions.', 'Logic: If the enemy is rushing B site, reinforce B with more players; if it''s a slow push, hold your position and wait for them to reveal their strategy.

Code Example:
if (enemy.isRushing("B_site")) {
    reinforceSite("B", 3);
} else if (enemy.pushType === "slow") {
    holdPosition();
    waitForIntel();
}', ARRAY['Monitor enemy movement patterns', 'Communicate with your team', 'Consider round economy and weapon availability']),

('PUBG: Choosing the Best Weapon for the Situation', 'Select optimal weapons based on combat range and engagement type.', 'beginner', 'Gaming Strategy', 'Choose the most effective weapon based on your proximity to enemies and combat situation.', 'Logic: If you''re in close combat, equip a shotgun; if you''re at medium range, equip an assault rifle; if you''re far from the enemy, use a sniper.

Code Example:
if (combatRange === "close") {
    equipWeapon("shotgun");
} else if (combatRange === "medium") {
    equipWeapon("assault_rifle");
} else if (combatRange === "long") {
    equipWeapon("sniper_rifle");
}', ARRAY['Assess the distance to your target', 'Consider available ammunition', 'Factor in weapon attachments and accuracy']),

('Fortnite: Deciding Whether to Build or Shoot', 'Choose between building defensively or engaging in combat based on the tactical situation.', 'intermediate', 'Gaming Strategy', 'React to enemy attacks by deciding whether to build structures for defense/advantage or engage directly in combat.', 'Logic: If you''re being attacked from above, build a ramp to gain height; if you''re being shot at from the ground, shoot back while building a wall for defense.

Code Example:
if (enemy.position === "above") {
    buildStructure("ramp");
    gainHeight();
} else if (enemy.isShootingFromGround) {
    buildStructure("wall");
    returnFire();
}', ARRAY['Always consider high ground advantage', 'Build while moving to avoid being hit', 'Monitor your material resources']),

('League of Legends: Deciding When to Push or Retreat', 'Make strategic lane decisions based on enemy positions and team status.', 'advanced', 'Gaming Strategy', 'Analyze the map state, enemy positions, and team advantage to decide whether to push lanes or retreat safely.', 'Logic: If the enemy jungler is visible on the other side of the map, push the lane; if the enemy bot lane is ahead, retreat and play safe.

Code Example:
if (enemy.jungler.isVisible && enemy.jungler.location !== "nearby") {
    pushLane();
} else if (enemy.botLane.isAhead) {
    retreat();
    playSafe();
}', ARRAY['Track enemy jungler position on minimap', 'Consider your teams power spikes', 'Communicate with teammates before making moves']),

('Minecraft: Choosing the Right Tools for Mining', 'Select appropriate tools based on the material you want to mine efficiently.', 'beginner', 'Gaming Strategy', 'Choose the most efficient tool for mining different materials, considering durability and mining speed.', 'Logic: If you''re mining diamonds, use an iron pickaxe; if you''re mining wood, use an axe; if you''re mining stone, use a stone pickaxe.

Code Example:
if (material === "diamond") {
    useTool("iron_pickaxe");
} else if (material === "wood") {
    useTool("axe");
} else if (material === "stone") {
    useTool("stone_pickaxe");
}', ARRAY['Different materials require specific tool types', 'Consider tool durability and efficiency', 'Higher tier tools mine faster but cost more resources']),

('Among Us: Deciding Who to Suspect', 'Use behavioral analysis and game evidence to identify potential impostors.', 'intermediate', 'Gaming Strategy', 'Analyze player behavior, task completion, and suspicious activities to make voting decisions.', 'Logic: If a player is acting unusually and is near a sabotaged area, suspect them; if someone has been quiet and hasn''t completed tasks, vote them off.

Code Example:
if (player.behavior === "unusual" && player.nearSabotage) {
    suspectPlayer(player);
} else if (player.isQuiet && !player.completedTasks) {
    voteOff(player);
}', ARRAY['Watch for players avoiding tasks', 'Note who was near sabotaged areas', 'Pay attention to movement patterns and alibis']),

('Apex Legends: Choosing Which Legend to Play', 'Select the optimal character based on team composition and strategic needs.', 'intermediate', 'Gaming Strategy', 'Choose a Legend that complements your team composition and fits the planned strategy.', 'Logic: If you''re playing with a team full of fraggers, choose a support character like Lifeline; if you need a scout, choose Bloodhound.

Code Example:
if (team.hasMany("fragger")) {
    selectLegend("Lifeline"); // Support
} else if (team.needs("scout")) {
    selectLegend("Bloodhound");
} else if (team.needs("mobility")) {
    selectLegend("Pathfinder");
}', ARRAY['Balance team roles (assault, support, recon)', 'Consider map and ring positioning strategy', 'Adapt to your playstyle and team communication']),

('Call of Duty: Deciding When to Use a Killstreak', 'Strategically deploy killstreak rewards based on enemy positioning and tactical advantage.', 'intermediate', 'Gaming Strategy', 'Choose the optimal timing and type of killstreak to maximize impact on the battlefield.', 'Logic: If the enemy is camping in a corner, use an airstrike; if they''re scattered across the map, use a UAV to reveal their positions.

Code Example:
if (enemy.isCamping && enemy.location === "corner") {
    useKillstreak("airstrike", enemy.location);
} else if (enemy.isScattered) {
    useKillstreak("UAV");
    revealEnemyPositions();
}', ARRAY['Save powerful killstreaks for grouped enemies', 'Use reconnaissance streaks when enemies are hidden', 'Consider map layout and enemy movement patterns']),

('Overwatch: Choosing Which Hero to Use Based on Team Composition', 'Select heroes that create a balanced and synergistic team composition.', 'advanced', 'Gaming Strategy', 'Analyze your team composition and enemy team to choose a hero that provides the best strategic advantage.', 'Logic: If the team lacks tanks, switch to a tank hero; if the team needs healing, switch to a support hero; if the team lacks damage, choose a damage hero.

Code Example:
if (team.lacks("tank")) {
    selectHero("tank_role");
} else if (team.needs("healing")) {
    selectHero("support_role");
} else if (team.lacks("damage")) {
    selectHero("damage_role");
}', ARRAY['Follow the 2-2-2 role composition guideline', 'Counter enemy team heroes with appropriate picks', 'Consider map objectives and choke points']);

-- Insert Gaming Badges
INSERT INTO badges (name, description, icon, requirement, points) VALUES
('Gaming Strategist', 'Complete 5 gaming strategy scenarios', '🎮', 'Complete 5 scenarios in Gaming Strategy category', 300),
('Tactical Thinker', 'Master advanced gaming decision-making', '🧠', 'Complete 3 advanced gaming scenarios', 400),
('Battle Royale Expert', 'Complete scenarios from battle royale games', '🏆', 'Complete PUBG, Fortnite, and Apex Legends scenarios', 250),
('MOBA Master', 'Excel at multiplayer online battle arena logic', '⚔️', 'Complete League of Legends and other MOBA scenarios', 200),
('FPS Commander', 'Master first-person shooter strategies', '🎯', 'Complete Valorant, Call of Duty, and Overwatch scenarios', 350),
('All-Game Veteran', 'Complete scenarios from all gaming categories', '🏅', 'Complete at least 1 scenario from each game type', 500);
