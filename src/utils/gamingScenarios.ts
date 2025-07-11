export interface GamingScenarioExample {
  id: string;
  title: string;
  description: string;
  game: string;
  category: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  points: number;
  estimatedTime: string;
  exampleInput: string;
  exampleOutput: string;
  hints: string[];
  concepts: string[];
  realWorldApplication: string;
}

export const gamingScenarioTemplates: GamingScenarioExample[] = [
  // Clash of Clans Scenarios
  {
    id: 'clash-1',
    title: 'Clash of Clans: Army Deployment Strategy',
    description: 'Create logic to deploy troops based on base layout and defensive structures',
    game: 'Clash of Clans',
    category: 'Strategy Games',
    difficulty: 'intermediate',
    points: 280,
    estimatedTime: '25 min',
    exampleInput: `Defense Layout:
- Cannons: 3 (targeting ground units)
- Archer Towers: 2 (targeting air and ground)
- Walls: Level 8
- Air Defense: 1

Available Troops:
- Giants: 5 (tank units)
- Archers: 30 (ranged units)
- Wizards: 10 (splash damage)`,
    exampleOutput: `Deployment Strategy:
1. Deploy Giants first to tank damage
2. Deploy Wizards behind Giants for splash damage
3. Deploy Archers to support from range
4. Target Air Defense first with ground troops
5. Spread deployment to avoid splash damage

Python Code:
def deploy_army(defenses, troops):
    deployment_order = []
    
    # Step 1: Deploy tanks first
    if troops['giants'] > 0:
        deployment_order.append(('giants', 'front_line'))
    
    # Step 2: Deploy splash damage dealers
    if troops['wizards'] > 0:
        deployment_order.append(('wizards', 'behind_tanks'))
    
    # Step 3: Deploy ranged support
    if troops['archers'] > 0:
        deployment_order.append(('archers', 'spread_formation'))
    
    return deployment_order`,
    hints: [
      'Think about unit roles: tanks, damage dealers, and support',
      'Consider defensive priorities and vulnerabilities',
      'Use conditional logic for different troop combinations',
      'Remember to check troop availability before deployment'
    ],
    concepts: ['Conditional Logic', 'Strategy Algorithms', 'Priority Systems', 'Resource Management'],
    realWorldApplication: 'Military tactical planning, resource allocation in project management, and automated deployment systems in cloud computing.'
  },

  {
    id: 'clash-2',
    title: 'Clash of Clans: Resource Management',
    description: 'Optimize gold, elixir, and dark elixir collection and spending priorities',
    game: 'Clash of Clans',
    category: 'Strategy Games',
    difficulty: 'beginner',
    points: 180,
    estimatedTime: '20 min',
    exampleInput: `Current Resources:
- Gold: 50,000
- Elixir: 30,000
- Dark Elixir: 500

Upgrade Options:
- Town Hall: 2,000,000 gold
- Army Camp: 100,000 elixir
- Barbarian King: 5,000 dark elixir`,
    exampleOutput: `Priority Decision:
1. Check if we have enough resources
2. Prioritize based on strategic value
3. Consider cost-effectiveness

Python Code:
def manage_resources(gold, elixir, dark_elixir, upgrades):
    affordable_upgrades = []
    
    for upgrade in upgrades:
        cost = upgrade['cost']
        resource_type = upgrade['resource_type']
        
        if resource_type == 'gold' and gold >= cost:
            affordable_upgrades.append(upgrade)
        elif resource_type == 'elixir' and elixir >= cost:
            affordable_upgrades.append(upgrade)
        elif resource_type == 'dark_elixir' and dark_elixir >= cost:
            affordable_upgrades.append(upgrade)
    
    # Sort by priority score
    affordable_upgrades.sort(key=lambda x: x['priority'], reverse=True)
    return affordable_upgrades[0] if affordable_upgrades else None`,
    hints: [
      'Start with simple if-else statements for resource checking',
      'Think about priority systems using comparison operators',
      'Consider edge cases when resources are insufficient',
      'Use functions to organize your logic'
    ],
    concepts: ['Conditional Statements', 'Data Structures', 'Sorting Algorithms', 'Decision Making'],
    realWorldApplication: 'Budget management systems, inventory control, investment portfolio optimization, and supply chain management.'
  },

  // Valorant Scenarios
  {
    id: 'valorant-1',
    title: 'Valorant: Agent Selection Logic',
    description: 'Create team composition logic based on map and enemy picks',
    game: 'Valorant',
    category: 'FPS Games',
    difficulty: 'intermediate',
    points: 250,
    estimatedTime: '22 min',
    exampleInput: `Map: Bind
Team Composition Needed:
- Controller (smoke/wall utility)
- Initiator (info gathering)
- Duelist (entry fragger)
- Sentinel (defensive utility)

Enemy Team:
- Jett (Duelist)
- Omen (Controller)
- Sova (Initiator)
- Unknown agents: 2`,
    exampleOutput: `Recommended Team:
1. Brimstone (Controller) - good smokes for Bind
2. Breach (Initiator) - counters Jett's mobility
3. Raze (Duelist) - explosive utility for tight angles
4. Cypher (Sentinel) - information gathering

Python Code:
def select_agent(map_name, team_comp, enemy_team):
    agent_recommendations = {
        'Bind': {
            'Controller': ['Brimstone', 'Omen'],
            'Initiator': ['Breach', 'Skye'],
            'Duelist': ['Raze', 'Phoenix'],
            'Sentinel': ['Cypher', 'Killjoy']
        }
    }
    
    missing_roles = []
    for role in ['Controller', 'Initiator', 'Duelist', 'Sentinel']:
        if not any(agent['role'] == role for agent in team_comp):
            missing_roles.append(role)
    
    # Prioritize most needed role
    if missing_roles:
        priority_role = missing_roles[0]
        return agent_recommendations[map_name][priority_role][0]
    
    return None`,
    hints: [
      'Consider map-specific agent strengths',
      'Think about role balance in team composition',
      'Use dictionaries to map agents to their roles',
      'Consider counter-picks against enemy team'
    ],
    concepts: ['Dictionary Operations', 'Role-Based Logic', 'Team Optimization', 'Strategic Planning'],
    realWorldApplication: 'Team formation in sports analytics, skill-based job assignment, and resource allocation in project teams.'
  },

  {
    id: 'valorant-2',
    title: 'Valorant: Economy System',
    description: 'Manage weapon purchases and save rounds based on team economy',
    game: 'Valorant',
    category: 'FPS Games',
    difficulty: 'intermediate',
    points: 270,
    estimatedTime: '25 min',
    exampleInput: `Team Economy:
Player 1: 3400 credits
Player 2: 2100 credits  
Player 3: 1900 credits
Player 4: 4200 credits
Player 5: 800 credits

Round Type: Full Buy Round
Weapon Costs:
- Vandal: 2900
- Phantom: 2900
- Operator: 4700
- Sheriff: 800
- Armor: 1000`,
    exampleOutput: `Buy Strategy:
1. Check team's total economy
2. Determine if team can afford full buy
3. Coordinate purchases for optimal firepower

Python Code:
def economy_manager(team_credits, round_type):
    total_credits = sum(team_credits)
    min_credits = min(team_credits)
    
    if round_type == "full_buy":
        if min_credits >= 3900:  # Rifle + armor
            return "full_buy"
        elif total_credits >= 15000:  # Team can support
            return "force_buy"
        else:
            return "save_round"
    
    elif round_type == "eco":
        return "save_round"
    
    return "half_buy"

def recommend_weapons(credits):
    if credits >= 3900:
        return ["Vandal/Phantom", "Full Armor"]
    elif credits >= 2000:
        return ["Spectre", "Light Armor"]
    else:
        return ["Classic", "No Armor"]`,
    hints: [
      'Consider minimum thresholds for different buy types',
      'Think about team coordination vs individual economy',
      'Use mathematical operations to calculate totals',
      'Plan for future rounds, not just current one'
    ],
    concepts: ['Financial Logic', 'Team Coordination', 'Threshold Calculations', 'Resource Planning'],
    realWorldApplication: 'Budget allocation systems, investment strategies, resource management in business, and financial planning tools.'
  },

  // League of Legends Scenarios
  {
    id: 'lol-1',
    title: 'League of Legends: Champion Draft System',
    description: 'Build pick/ban logic considering team synergy and counter-picks',
    game: 'League of Legends',
    category: 'MOBA Games',
    difficulty: 'advanced',
    points: 350,
    estimatedTime: '30 min',
    exampleInput: `Draft Phase: Pick 3/5
Current Team:
- Top: Garen (Tank/Fighter)
- Jungle: Graves (Marksman/Fighter)
- Mid: Empty
- ADC: Empty  
- Support: Empty

Enemy Team:
- Top: Fiora (Fighter)
- Jungle: Lee Sin (Fighter)
- Mid: Yasuo (Fighter/Assassin)
- ADC: Jinx (Marksman)
- Support: Thresh (Support/Tank)

Available Champions: All except picked/banned`,
    exampleOutput: `Recommended Picks:
1. Mid: Malzahar (counters Yasuo, provides CC)
2. ADC: Ezreal (safe pick, good mobility)
3. Support: Leona (engages, protects ADC)

Python Code:
def draft_champion(position, team_comp, enemy_comp, available_champs):
    # Analyze team needs
    team_roles = [champ['role'] for champ in team_comp if champ]
    missing_roles = ['Tank', 'DPS', 'Support', 'Engage'] 
    
    for role in team_roles:
        if role in missing_roles:
            missing_roles.remove(role)
    
    # Find counters to enemy team
    enemy_positions = {champ['position']: champ for champ in enemy_comp if champ}
    
    if position in enemy_positions:
        enemy_champ = enemy_positions[position]
        counters = get_counters(enemy_champ['name'])
        
        # Find available counter that fills team need
        for counter in counters:
            if counter in available_champs and fills_team_need(counter, missing_roles):
                return counter
    
    # Fallback to synergy pick
    return find_synergy_pick(team_comp, available_champs)`,
    hints: [
      'Consider both individual matchups and team composition',
      'Think about different phases of the game (early, mid, late)',
      'Use data structures to represent champion attributes',
      'Balance offensive and defensive capabilities'
    ],
    concepts: ['Complex Decision Trees', 'Multi-factor Analysis', 'Strategic Planning', 'Data Relationships'],
    realWorldApplication: 'Sports team selection, hiring decisions with skill matching, and strategic business partnerships.'
  },

  // Minecraft Scenarios
  {
    id: 'minecraft-1',
    title: 'Minecraft: Auto-Mining System',
    description: 'Design redstone logic for automated mining and sorting systems',
    game: 'Minecraft',
    category: 'Sandbox Games',
    difficulty: 'intermediate',
    points: 260,
    estimatedTime: '25 min',
    exampleInput: `Mining Parameters:
- Area: 16x16 chunks
- Depth: Y-level 12 (diamond level)
- Resources to collect: Diamond, Iron, Gold, Coal
- Storage capacity: 27 stacks per chest

Redstone Components:
- Hoppers: Available
- Comparators: Available  
- Repeaters: Available
- Pistons: Available`,
    exampleOutput: `Mining System Logic:
1. Create systematic mining pattern
2. Set up item sorting system
3. Implement storage management

Python Code:
def design_mining_system(area_size, depth, target_resources):
    mining_pattern = []
    
    # Generate spiral mining pattern for efficiency
    for x in range(area_size):
        for z in range(area_size):
            if should_mine_block(x, z, depth):
                mining_pattern.append((x, depth, z))
    
    # Sort by distance from start for optimal path
    mining_pattern.sort(key=lambda pos: pos[0]**2 + pos[2]**2)
    
    return mining_pattern

def create_sorting_system(resources):
    sorting_logic = {}
    
    for resource in resources:
        chest_id = assign_chest(resource)
        sorting_logic[resource] = {
            'chest': chest_id,
            'priority': get_resource_priority(resource)
        }
    
    return sorting_logic`,
    hints: [
      'Think about efficient pathfinding algorithms',
      'Consider item sorting using comparators and hoppers',
      'Plan for different resource priorities',
      'Design modular systems that can be expanded'
    ],
    concepts: ['Pathfinding Algorithms', 'Automation Logic', 'Sorting Systems', 'Resource Management'],
    realWorldApplication: 'Warehouse automation, robotic manufacturing systems, and automated data processing pipelines.'
  },

  // Battle Royale Scenarios
  {
    id: 'fortnite-1',
    title: 'Fortnite: Storm Circle Prediction',
    description: 'Predict safe zones and create optimal rotation strategies',
    game: 'Fortnite',
    category: 'Battle Royale',
    difficulty: 'intermediate',
    points: 240,
    estimatedTime: '22 min',
    exampleInput: `Current Situation:
- Player Position: (120, 85)
- Current Circle Center: (100, 100)
- Current Circle Radius: 50
- Next Circle: Unknown
- Storm Damage: 1 HP/second
- Movement Speed: 5 units/second
- Available Materials: 500 wood`,
    exampleOutput: `Rotation Strategy:
1. Calculate probable next circle locations
2. Find shortest safe path
3. Plan building materials usage

Python Code:
def predict_circle_movement(current_center, current_radius, circle_number):
    # Next circle is typically 50-70% smaller
    next_radius = current_radius * 0.6
    
    # Calculate possible next centers (within current circle)
    possible_centers = []
    
    for x_offset in range(-20, 21, 5):
        for y_offset in range(-20, 21, 5):
            next_center = (current_center[0] + x_offset, current_center[1] + y_offset)
            
            # Check if entire next circle fits in current circle
            if is_valid_next_circle(current_center, current_radius, next_center, next_radius):
                possible_centers.append(next_center)
    
    return possible_centers, next_radius

def plan_rotation(player_pos, safe_zones, storm_speed):
    best_path = None
    min_risk = float('inf')
    
    for zone in safe_zones:
        distance = calculate_distance(player_pos, zone)
        time_needed = distance / 5  # player speed
        storm_damage = max(0, (time_needed - time_to_storm()) * storm_speed)
        
        if storm_damage < min_risk:
            min_risk = storm_damage
            best_path = zone
    
    return best_path`,
    hints: [
      'Use coordinate geometry for distance calculations',
      'Consider both time and safety in route planning',
      'Think about probability distributions for circle placement',
      'Account for building materials as movement tools'
    ],
    concepts: ['Coordinate Geometry', 'Probability Calculations', 'Pathfinding', 'Risk Assessment'],
    realWorldApplication: 'GPS navigation systems, emergency evacuation planning, and logistics optimization.'
  },

  // Pokemon Scenarios
  {
    id: 'pokemon-1',
    title: 'Pokémon: Type Effectiveness Calculator',
    description: 'Build logic to calculate damage multipliers and optimal movesets',
    game: 'Pokémon',
    category: 'RPG Games',
    difficulty: 'beginner',
    points: 190,
    estimatedTime: '18 min',
    exampleInput: `Battle Scenario:
Attacking Pokemon: Charizard (Fire/Flying)
Move: Flamethrower (Fire-type)
Defending Pokemon: Venusaur (Grass/Poison)

Type Chart:
- Fire vs Grass: 2x damage (Super Effective)
- Fire vs Poison: 1x damage (Normal)
- Dual types: Calculate each type separately`,
    exampleOutput: `Damage Calculation:
1. Check attacking move type vs defending Pokemon types
2. Apply type effectiveness multipliers
3. Calculate final damage modifier

Python Code:
def calculate_type_effectiveness(move_type, defender_types):
    type_chart = {
        'Fire': {'Grass': 2.0, 'Water': 0.5, 'Fire': 0.5, 'Steel': 2.0},
        'Water': {'Fire': 2.0, 'Grass': 0.5, 'Water': 0.5, 'Ground': 2.0},
        'Grass': {'Water': 2.0, 'Fire': 0.5, 'Grass': 0.5, 'Ground': 2.0},
        # ... more type matchups
    }
    
    effectiveness = 1.0
    
    for defender_type in defender_types:
        if move_type in type_chart and defender_type in type_chart[move_type]:
            effectiveness *= type_chart[move_type][defender_type]
    
    return effectiveness

def get_effectiveness_message(multiplier):
    if multiplier > 1:
        return "It's super effective!"
    elif multiplier < 1:
        return "It's not very effective..."
    else:
        return ""`,
    hints: [
      'Use nested dictionaries to represent the type chart',
      'Remember that dual-type Pokemon require checking both types',
      'Start with a simple effectiveness calculation',
      'Consider special cases like immunity (0x damage)'
    ],
    concepts: ['Dictionary Lookups', 'Nested Data Structures', 'Mathematical Calculations', 'Game Logic'],
    realWorldApplication: 'Rule-based expert systems, decision support systems, and automated scoring algorithms.'
  },

  // Among Us Scenario
  {
    id: 'among-us-1',
    title: 'Among Us: Impostor Detection Logic',
    description: 'Analyze player behavior patterns to identify suspicious activities',
    game: 'Among Us',
    category: 'Social Deduction',
    difficulty: 'intermediate',
    points: 250,
    estimatedTime: '23 min',
    exampleInput: `Game State:
Players: 8 alive
Impostors: 2 (unknown)

Player Behaviors:
- Red: Completed 3/4 visual tasks, vouched for by Blue
- Blue: Completed 2/4 visual tasks, was with Red
- Green: Completed 1/4 visual tasks, avoided meetings
- Yellow: Completed 4/4 visual tasks, very active in chat
- Purple: Completed 0/4 visual tasks, silent in meetings`,
    exampleOutput: `Suspicion Analysis:
1. Calculate task completion rates
2. Analyze social behavior patterns
3. Check for alibis and vouching

Python Code:
def analyze_player_suspicion(players, game_events):
    suspicion_scores = {}
    
    for player in players:
        score = 0
        
        # Task completion analysis
        task_rate = player['completed_tasks'] / player['total_tasks']
        if task_rate < 0.3:
            score += 30  # Low task completion is suspicious
        
        # Social behavior analysis
        if player['chat_messages'] == 0:
            score += 20  # Silent players are suspicious
        
        # Vouching analysis
        vouches = count_vouches_for_player(player, game_events)
        score -= vouches * 10  # Vouches reduce suspicion
        
        # Emergency meeting behavior
        if player['called_emergency'] > 2:
            score += 15  # Too many meetings is suspicious
        
        suspicion_scores[player['name']] = max(0, score)
    
    # Sort by suspicion level
    sorted_suspicion = sorted(suspicion_scores.items(), key=lambda x: x[1], reverse=True)
    return sorted_suspicion

def recommend_vote(suspicion_scores, alive_players):
    if not suspicion_scores:
        return "Skip vote - insufficient evidence"
    
    most_suspicious = suspicion_scores[0]
    if most_suspicious[1] > 50:  # Threshold for voting
        return f"Vote {most_suspicious[0]} (Suspicion: {most_suspicious[1]})"
    else:
        return "Skip vote - no clear target"`,
    hints: [
      'Consider multiple behavioral indicators',
      'Weight different types of evidence appropriately', 
      'Think about false positives and negatives',
      'Use scoring systems to quantify suspicion'
    ],
    concepts: ['Behavioral Analysis', 'Scoring Algorithms', 'Pattern Recognition', 'Decision Making'],
    realWorldApplication: 'Fraud detection systems, behavioral analytics, security monitoring, and automated moderation systems.'
  },

  // Counter-Strike 2 Scenarios
  {
    id: 'cs2-1',
    title: 'CS2: Economy Management System',
    description: 'Optimize team weapon purchases and force-buy decisions',
    game: 'Counter-Strike 2',
    category: 'FPS Games',
    difficulty: 'intermediate',
    points: 280,
    estimatedTime: '25 min',
    exampleInput: `Round 4 - Team Economy:
Player 1: $2400
Player 2: $1900
Player 3: $3200
Player 4: $800
Player 5: $4100

Previous Round: Lost (1-2)
Weapon Costs: AK-47 ($2700), M4A4 ($3100), AWP ($4750)`,
    exampleOutput: `Economy Decision: Semi-Buy

Python Code:
def cs_economy_manager(team_money, round_history, current_score):
    total_money = sum(team_money)
    avg_money = total_money / len(team_money)
    min_money = min(team_money)
    
    # Determine buy type
    if min_money >= 3700:  # Full buy threshold
        return "full_buy"
    elif avg_money >= 2500 and total_money >= 12000:
        return "force_buy"  # Team can support
    elif min_money < 1500:
        return "eco_round"  # Save for next round
    else:
        return "anti_eco"  # Light buy
        
def recommend_weapons(money, buy_type, role):
    if buy_type == "full_buy":
        if role == "awper" and money >= 4750:
            return ["AWP", "Kevlar+Helmet"]
        elif money >= 3100:
            return ["M4A4/AK-47", "Kevlar+Helmet"]
    elif buy_type == "force_buy":
        if money >= 2000:
            return ["Famas/Galil", "Kevlar"]
    return ["P250", "No Armor"]`,
    hints: [
      'Consider the minimum threshold for effective buys',
      'Think about round importance (match point, etc.)',
      'Account for player roles (AWPer, entry fragger, support)',
      'Plan for next round economy after current purchases'
    ],
    concepts: ['Resource Management', 'Team Coordination', 'Strategic Planning', 'Risk Assessment'],
    realWorldApplication: 'Budget allocation in business teams, resource planning in project management, and financial risk assessment.'
  },

  {
    id: 'cs2-2',
    title: 'CS2: Smoke Grenade Positioning Algorithm',
    description: 'Calculate optimal smoke positions for map control and site execution',
    game: 'Counter-Strike 2',
    category: 'FPS Games',
    difficulty: 'advanced',
    points: 350,
    estimatedTime: '30 min',
    exampleInput: `Map: Dust2 - A Site Execute
Objective: Block CT rotations and isolate angles
Smoke Positions Available: 5
Enemy Positions: Long, Short, Site, CT Spawn`,
    exampleOutput: `Optimal Smoke Setup:
1. Long Corner smoke (blocks AWP angle)
2. Cross smoke (blocks rotation)
3. CT spawn smoke (delays rotations)
4. Default box smoke (isolates site)

Python Code:
def calculate_smoke_positions(map_data, objective, enemy_positions):
    critical_angles = []
    rotation_paths = []
    
    # Identify critical sight lines to block
    for enemy_pos in enemy_positions:
        sight_lines = get_sight_lines(enemy_pos, objective)
        critical_angles.extend(sight_lines)
    
    # Find rotation paths to delay
    rotation_paths = get_rotation_paths(map_data, objective)
    
    # Calculate optimal smoke positions
    smoke_positions = []
    for angle in critical_angles[:3]:  # Max 3 angle blocks
        optimal_pos = find_smoke_position(angle)
        smoke_positions.append(optimal_pos)
    
    # Add rotation blocking smokes
    for path in rotation_paths[:2]:  # Max 2 rotation blocks
        block_pos = find_path_block_position(path)
        smoke_positions.append(block_pos)
    
    return smoke_positions[:5]  # Limit to available smokes`,
    hints: [
      'Consider sight line geometry and angles',
      'Think about timing coordination between smokes',
      'Account for smoke bloom time and duration',
      'Plan for both offensive and defensive scenarios'
    ],
    concepts: ['Geometric Calculations', 'Spatial Reasoning', 'Tactical Planning', 'Coordinate Systems'],
    realWorldApplication: 'Military tactical planning, security camera placement optimization, and autonomous vehicle navigation.'
  },

  // World of Warcraft Scenarios
  {
    id: 'wow-1',
    title: 'World of Warcraft: Raid Healing Priority System',
    description: 'Create intelligent healing algorithms for raid encounters',
    game: 'World of Warcraft',
    category: 'MMORPG',
    difficulty: 'advanced',
    points: 380,
    estimatedTime: '35 min',
    exampleInput: `Raid Status:
Tank: 45% HP (High Priority)
Healer 1: 80% HP (Medium Priority)
DPS 1: 30% HP (Low Priority)
DPS 2: 95% HP (No Healing Needed)

Healing Spells:
- Flash Heal: 2s cast, 2000 healing
- Greater Heal: 3s cast, 3500 healing
- Prayer of Healing: 3s cast, 1500 AoE healing`,
    exampleOutput: `Healing Priority Algorithm:

Python Code:
def healing_priority_system(raid_members, available_spells, encounter_type):
    # Calculate threat levels
    healing_queue = []
    
    for member in raid_members:
        priority_score = calculate_priority(member)
        healing_queue.append((member, priority_score))
    
    # Sort by priority (highest first)
    healing_queue.sort(key=lambda x: x[1], reverse=True)
    
    healing_plan = []
    
    for member, priority in healing_queue:
        if member['hp_percentage'] < get_danger_threshold(member['role']):
            optimal_spell = select_healing_spell(member, available_spells)
            healing_plan.append({
                'target': member['name'],
                'spell': optimal_spell,
                'urgency': get_urgency_level(member['hp_percentage'])
            })
    
    return healing_plan

def calculate_priority(member):
    base_priority = {
        'tank': 100,
        'healer': 80,
        'dps': 60
    }
    
    role_priority = base_priority.get(member['role'], 60)
    hp_modifier = (100 - member['hp_percentage']) * 0.5
    debuff_modifier = len(member['debuffs']) * 10
    
    return role_priority + hp_modifier + debuff_modifier`,
    hints: [
      'Consider different roles have different priority levels',
      'Factor in current encounter mechanics and damage patterns',
      'Think about mana efficiency vs healing speed trade-offs',
      'Account for debuffs and damage over time effects'
    ],
    concepts: ['Priority Queues', 'Real-time Decision Making', 'Resource Optimization', 'Multi-factor Analysis'],
    realWorldApplication: 'Emergency triage systems, resource allocation in hospitals, and priority scheduling in operating systems.'
  },

  // Chess.com Scenarios
  {
    id: 'chess-1',
    title: 'Chess.com: Opening Move Analyzer',
    description: 'Analyze chess openings and suggest optimal continuations',
    game: 'Chess.com',
    category: 'Strategy Games',
    difficulty: 'advanced',
    points: 400,
    estimatedTime: '40 min',
    exampleInput: `Position: After 1.e4 e5 2.Nf3
Opening: King's Pawn Game
Possible continuations:
- 2...Nc6 (Italian Game setup)
- 2...f5 (King's Gambit Declined)
- 2...d6 (Philidor Defense)
- 2...Nf6 (Petrov's Defense)`,
    exampleOutput: `Opening Analysis:

Python Code:
def analyze_chess_opening(position, move_history, player_rating):
    opening_database = {
        'italian_game': {
            'moves': ['e4', 'e5', 'Nf3', 'Nc6', 'Bc4'],
            'win_rate': 0.52,
            'complexity': 'intermediate'
        },
        'spanish_opening': {
            'moves': ['e4', 'e5', 'Nf3', 'Nc6', 'Bb5'],
            'win_rate': 0.54,
            'complexity': 'advanced'
        }
    }
    
    def evaluate_continuation(next_move, current_position):
        # Evaluate based on:
        # 1. Statistical success rate
        # 2. Player's rating and style
        # 3. Positional factors
        
        statistical_score = get_move_statistics(next_move, current_position)
        complexity_match = matches_player_level(next_move, player_rating)
        positional_value = evaluate_position(current_position, next_move)
        
        return {
            'move': next_move,
            'score': statistical_score * 0.4 + complexity_match * 0.3 + positional_value * 0.3,
            'reasoning': generate_explanation(next_move)
        }
    
    possible_moves = generate_legal_moves(position)
    move_evaluations = []
    
    for move in possible_moves:
        evaluation = evaluate_continuation(move, position)
        move_evaluations.append(evaluation)
    
    # Sort by score and return top recommendations
    move_evaluations.sort(key=lambda x: x['score'], reverse=True)
    return move_evaluations[:3]`,
    hints: [
      'Consider statistical databases of opening success rates',
      'Factor in player rating and experience level',
      'Think about positional evaluation functions',
      'Account for transpositions between different openings'
    ],
    concepts: ['Game Tree Analysis', 'Statistical Evaluation', 'Pattern Recognition', 'Decision Trees'],
    realWorldApplication: 'Strategic planning in business, decision support systems, and AI game playing algorithms.'
  },

  // Portal Puzzle Game
  {
    id: 'portal-1',
    title: 'Portal: Physics Puzzle Solver',
    description: 'Calculate portal trajectories and momentum conservation',
    game: 'Portal',
    category: 'Puzzle Games',
    difficulty: 'advanced',
    points: 360,
    estimatedTime: '32 min',
    exampleInput: `Puzzle Chamber:
Player Position: (0, 0, 0)
Target Position: (10, 5, 0)
Portal Surfaces: Wall A (5, 0, 0), Wall B (10, 0, 0)
Obstacles: Deadly Pit (3-7, 0, 0)
Player Velocity: 0 m/s`,
    exampleOutput: `Portal Solution:

Python Code:
def solve_portal_puzzle(start_pos, target_pos, portal_surfaces, obstacles):
    import math
    
    def calculate_portal_trajectory(entry_portal, exit_portal, initial_velocity):
        # Conservation of momentum through portals
        # Velocity magnitude is preserved, direction changes based on portal orientation
        
        entry_normal = get_surface_normal(entry_portal)
        exit_normal = get_surface_normal(exit_portal)
        
        # Calculate velocity transformation
        velocity_component = dot_product(initial_velocity, entry_normal)
        exit_velocity = multiply_vector(exit_normal, velocity_component)
        
        return exit_velocity
    
    def find_optimal_portal_placement(surfaces, start, target, obstacles):
        best_solution = None
        min_time = float('inf')
        
        for surf1 in surfaces:
            for surf2 in surfaces:
                if surf1 == surf2:
                    continue
                    
                # Test portal placement
                portal_a = place_portal(surf1, optimize_for='entry')
                portal_b = place_portal(surf2, optimize_for='exit')
                
                # Calculate required initial velocity
                required_velocity = calculate_required_velocity(start, portal_a, portal_b, target)
                
                # Check if path is clear of obstacles
                if is_path_clear(start, portal_a, obstacles) and is_path_clear(portal_b, target, obstacles):
                    travel_time = calculate_travel_time(start, portal_a, portal_b, target, required_velocity)
                    
                    if travel_time < min_time:
                        min_time = travel_time
                        best_solution = {
                            'portal_a': portal_a,
                            'portal_b': portal_b,
                            'initial_velocity': required_velocity,
                            'travel_time': travel_time
                        }
        
        return best_solution
    
    solution = find_optimal_portal_placement(portal_surfaces, start_pos, target_pos, obstacles)
    return solution`,
    hints: [
      'Consider conservation of momentum through portals',
      'Think about 3D trajectory calculations and physics',
      'Account for portal orientation and surface normals',
      'Plan for obstacles and surface placement constraints'
    ],
    concepts: ['Physics Simulation', '3D Geometry', 'Optimization Problems', 'Vector Mathematics'],
    realWorldApplication: 'Physics simulations, 3D graphics programming, robotics path planning, and game physics engines.'
  },

  // Candy Crush Mobile Game
  {
    id: 'candy-crush-1',
    title: 'Candy Crush: Match Detection Algorithm',
    description: 'Detect and process candy matches and cascading effects',
    game: 'Candy Crush',
    category: 'Mobile Games',
    difficulty: 'intermediate',
    points: 240,
    estimatedTime: '22 min',
    exampleInput: `Grid (8x8):
[R, B, R, G, Y, R, B, G]
[B, R, R, R, R, B, Y, R]
[G, B, Y, G, B, R, R, B]
[Y, G, B, Y, G, B, Y, G]
[R, Y, R, B, R, Y, B, R]
[B, G, Y, R, Y, G, R, Y]
[G, R, B, G, B, R, G, B]
[Y, B, G, Y, R, B, Y, G]

Where R=Red, B=Blue, G=Green, Y=Yellow`,
    exampleOutput: `Match Detection:

Python Code:
def detect_candy_matches(grid):
    rows, cols = len(grid), len(grid[0])
    matches = []
    
    # Check horizontal matches
    for row in range(rows):
        count = 1
        current_color = grid[row][0]
        start_col = 0
        
        for col in range(1, cols):
            if grid[row][col] == current_color:
                count += 1
            else:
                if count >= 3:
                    matches.append({
                        'type': 'horizontal',
                        'color': current_color,
                        'positions': [(row, c) for c in range(start_col, start_col + count)],
                        'length': count
                    })
                
                current_color = grid[row][col]
                start_col = col
                count = 1
        
        # Check final sequence
        if count >= 3:
            matches.append({
                'type': 'horizontal',
                'color': current_color,
                'positions': [(row, c) for c in range(start_col, start_col + count)],
                'length': count
            })
    
    # Check vertical matches (similar logic)
    for col in range(cols):
        count = 1
        current_color = grid[0][col]
        start_row = 0
        
        for row in range(1, rows):
            if grid[row][col] == current_color:
                count += 1
            else:
                if count >= 3:
                    matches.append({
                        'type': 'vertical',
                        'color': current_color,
                        'positions': [(r, col) for r in range(start_row, start_row + count)],
                        'length': count
                    })
                
                current_color = grid[row][col]
                start_row = row
                count = 1
        
        if count >= 3:
            matches.append({
                'type': 'vertical',
                'color': current_color,
                'positions': [(r, col) for r in range(start_row, start_row + count)],
                'length': count
            })
    
    return matches

def calculate_score(matches):
    total_score = 0
    for match in matches:
        base_score = match['length'] * 10
        multiplier = 1.5 if match['length'] >= 5 else 1.0
        total_score += int(base_score * multiplier)
    return total_score`,
    hints: [
      'Think about both horizontal and vertical match detection',
      'Consider special candies created by longer matches',
      'Account for cascading effects after matches are removed',
      'Use 2D array traversal techniques'
    ],
    concepts: ['2D Array Processing', 'Pattern Recognition', 'Game Logic', 'Cascade Algorithms'],
    realWorldApplication: 'Image processing algorithms, pattern recognition in data analysis, and automated quality control systems.'
  },

  // Formula 1 Racing
  {
    id: 'f1-1',
    title: 'Formula 1: Pit Stop Strategy Optimizer',
    description: 'Calculate optimal pit stop timing based on tire degradation and fuel',
    game: 'F1 23',
    category: 'Racing Games',
    difficulty: 'advanced',
    points: 370,
    estimatedTime: '33 min',
    exampleInput: `Race Conditions:
Circuit: Monaco (78 laps)
Current Lap: 25
Tire Compound: Medium (60% degraded)
Fuel Load: 40 laps remaining
Position: 3rd
Gap to car ahead: 8.5 seconds
Gap to car behind: 12.2 seconds
Weather: Dry (10% chance rain in 20 laps)`,
    exampleOutput: `Pit Strategy Analysis:

Python Code:
def optimize_pit_strategy(race_data, car_status, track_conditions):
    def calculate_tire_degradation(compound, laps_used, track_temp):
        degradation_rates = {
            'soft': 0.08,    # 8% per lap
            'medium': 0.05,  # 5% per lap
            'hard': 0.03     # 3% per lap
        }
        
        base_rate = degradation_rates[compound]
        temp_modifier = 1 + (track_temp - 25) * 0.02  # 2% per degree above 25C
        
        return min(100, laps_used * base_rate * temp_modifier)
    
    def estimate_lap_time(tire_condition, fuel_load):
        base_lap_time = track_conditions['base_lap_time']
        
        # Tire degradation effect (up to +3 seconds)
        tire_penalty = (100 - tire_condition) * 0.03
        
        # Fuel load effect (0.03s per kg)
        fuel_penalty = fuel_load * 0.03
        
        return base_lap_time + tire_penalty + fuel_penalty
    
    def simulate_pit_window(pit_lap, new_compound):
        total_time = 0
        current_tire_condition = 100  # Fresh tires
        current_fuel = car_status['fuel_load']
        
        # Time lost in pit stop
        pit_stop_time = 23.5  # Average pit stop time
        total_time += pit_stop_time
        
        # Simulate remaining laps
        for lap in range(pit_lap, race_data['total_laps']):
            lap_time = estimate_lap_time(current_tire_condition, current_fuel)
            total_time += lap_time
            
            # Update tire and fuel
            current_tire_condition -= calculate_tire_degradation(
                new_compound, lap - pit_lap + 1, track_conditions['temperature']
            )
            current_fuel -= 1  # 1 unit per lap
        
        return total_time
    
    # Test different pit windows
    best_strategy = None
    best_time = float('inf')
    
    for pit_lap in range(race_data['current_lap'] + 5, race_data['total_laps'] - 10):
        for compound in ['soft', 'medium', 'hard']:
            if can_use_compound(compound, race_data['used_compounds']):
                total_time = simulate_pit_window(pit_lap, compound)
                
                if total_time < best_time:
                    best_time = total_time
                    best_strategy = {
                        'pit_lap': pit_lap,
                        'tire_compound': compound,
                        'estimated_total_time': total_time,
                        'time_advantage': best_time - total_time if best_time != float('inf') else 0
                    }
    
    return best_strategy`,
    hints: [
      'Consider tire degradation curves for different compounds',
      'Factor in fuel consumption and its effect on lap times',
      'Think about track position and overtaking difficulty',
      'Account for weather changes and safety car possibilities'
    ],
    concepts: ['Optimization Algorithms', 'Simulation Modeling', 'Multi-variable Analysis', 'Predictive Algorithms'],
    realWorldApplication: 'Supply chain optimization, resource scheduling in manufacturing, and predictive maintenance systems.'
  },

  // Tetris Puzzle Game
  {
    id: 'tetris-1',
    title: 'Tetris: Line Clear Optimization Algorithm',
    description: 'Calculate optimal piece placement for maximum line clears',
    game: 'Tetris',
    category: 'Puzzle Games',
    difficulty: 'intermediate',
    points: 290,
    estimatedTime: '26 min',
    exampleInput: `Current Board (10x20):
[0,0,0,0,0,0,0,0,0,0]  <- Top
[0,0,0,0,0,0,0,0,0,0]
[0,0,0,0,0,0,0,0,0,0]
...
[1,1,0,1,1,1,0,1,1,1]  <- Near bottom
[1,1,1,1,0,1,1,1,1,1]

Current Piece: T-piece
Next Pieces: [L, I, O, S]
Lines to clear: Target Tetris (4 lines)`,
    exampleOutput: `Optimal Placement Strategy:

Python Code:
def optimize_tetris_placement(board, current_piece, next_pieces, target_lines):
    def rotate_piece(piece, rotations):
        # Rotate piece matrix 90 degrees clockwise
        for _ in range(rotations % 4):
            piece = [[piece[j][i] for j in range(len(piece)-1, -1, -1)] 
                    for i in range(len(piece[0]))]
        return piece
    
    def can_place_piece(board, piece, row, col):
        for i in range(len(piece)):
            for j in range(len(piece[0])):
                if piece[i][j] == 1:
                    board_row, board_col = row + i, col + j
                    
                    # Check bounds
                    if (board_row >= len(board) or board_col < 0 or 
                        board_col >= len(board[0]) or board[board_row][board_col] == 1):
                        return False
        return True
    
    def place_piece(board, piece, row, col):
        new_board = [row[:] for row in board]  # Deep copy
        
        for i in range(len(piece)):
            for j in range(len(piece[0])):
                if piece[i][j] == 1:
                    new_board[row + i][col + j] = 1
        
        return new_board
    
    def count_cleared_lines(board):
        cleared = 0
        for row in board:
            if all(cell == 1 for cell in row):
                cleared += 1
        return cleared
    
    def evaluate_placement(board, piece, row, col):
        # Scoring factors:
        # 1. Lines cleared
        # 2. Height reduction
        # 3. Hole creation (negative)
        # 4. Well depth
        
        new_board = place_piece(board, piece, row, col)
        lines_cleared = count_cleared_lines(new_board)
        
        # Remove cleared lines
        new_board = remove_complete_lines(new_board)
        
        # Calculate evaluation metrics
        height_score = calculate_height_score(new_board)
        hole_penalty = count_holes(new_board) * -10
        line_bonus = lines_cleared * 100
        
        return {
            'score': line_bonus + height_score + hole_penalty,
            'lines_cleared': lines_cleared,
            'board_state': new_board,
            'placement': (row, col)
        }
    
    best_placements = []
    
    # Try all rotations and positions
    for rotation in range(4):
        rotated_piece = rotate_piece(current_piece, rotation)
        
        for col in range(len(board[0]) - len(rotated_piece[0]) + 1):
            # Find landing row (gravity simulation)
            for row in range(len(board) - len(rotated_piece) + 1):
                if can_place_piece(board, rotated_piece, row, col):
                    # Check if this is the lowest possible position
                    if (row == len(board) - len(rotated_piece) or 
                        not can_place_piece(board, rotated_piece, row + 1, col)):
                        
                        evaluation = evaluate_placement(board, rotated_piece, row, col)
                        evaluation['rotation'] = rotation
                        best_placements.append(evaluation)
                    break
    
    # Sort by score and return best placement
    best_placements.sort(key=lambda x: x['score'], reverse=True)
    return best_placements[0] if best_placements else None`,
    hints: [
      'Consider all possible rotations and positions',
      'Think about line clearing potential vs. board health',
      'Account for hole creation and board height',
      'Plan ahead using the next piece queue'
    ],
    concepts: ['Game State Evaluation', 'Optimization Problems', '2D Array Manipulation', 'Lookahead Algorithms'],
    realWorldApplication: 'Automated packing algorithms, inventory optimization, and space allocation systems.'
  },

  // Apex Legends Battle Royale
  {
    id: 'apex-1',
    title: 'Apex Legends: Ring Positioning Strategy',
    description: 'Calculate optimal positioning based on ring movement and team abilities',
    game: 'Apex Legends',
    category: 'Battle Royale',
    difficulty: 'intermediate',
    points: 260,
    estimatedTime: '24 min',
    exampleInput: `Current Situation:
Team Position: (150, 200)
Ring Center: (300, 250)
Ring Radius: 180 (closing to 120 in 90 seconds)
Team Composition: Wraith, Bloodhound, Lifeline
Nearby Teams: 3 teams spotted
Available Rotation Routes: North Path, East Valley, South Ridge`,
    exampleOutput: `Ring Strategy Analysis:

Python Code:
def calculate_apex_rotation(team_pos, ring_data, team_comp, nearby_threats):
    def calculate_ring_damage(distance_outside, ring_phase):
        damage_per_second = [0, 1, 1, 5, 10, 15, 20, 25]  # Ring damage by phase
        return damage_per_second[min(ring_phase, 7)] if distance_outside > 0 else 0
    
    def evaluate_rotation_route(start_pos, end_pos, route_type, threats):
        distance = calculate_distance(start_pos, end_pos)
        travel_time = distance / get_movement_speed(team_comp)
        
        # Route safety evaluation
        safety_score = 100
        for threat in threats:
            threat_distance = calculate_distance(route_type['waypoints'], threat['position'])
            if threat_distance < 100:  # Danger zone
                safety_score -= 30
            elif threat_distance < 200:  # Caution zone
                safety_score -= 15
        
        # Ring timing evaluation
        ring_close_time = ring_data['close_time']
        time_buffer = ring_close_time - travel_time
        
        if time_buffer < 0:
            ring_penalty = abs(time_buffer) * 10  # Heavy penalty for being late
        else:
            ring_bonus = min(time_buffer * 2, 20)  # Bonus for early arrival
            ring_penalty = -ring_bonus
        
        return {
            'route': route_type['name'],
            'travel_time': travel_time,
            'safety_score': safety_score,
            'ring_penalty': ring_penalty,
            'total_score': safety_score - ring_penalty,
            'recommended_loadout': suggest_loadout_for_route(route_type)
        }
    
    def get_movement_speed(team_composition):
        base_speed = 100  # units per second
        
        # Team ability modifiers
        if 'Wraith' in team_composition:
            base_speed *= 1.1  # Portal potential
        if 'Pathfinder' in team_composition:
            base_speed *= 1.15  # Zipline mobility
        if 'Octane' in team_composition:
            base_speed *= 1.2  # Jump pad and stim
        
        return base_speed
    
    # Analyze all available routes
    route_options = [
        {'name': 'North Path', 'waypoints': [(170, 220), (200, 240), (250, 260)], 'terrain': 'open'},
        {'name': 'East Valley', 'waypoints': [(180, 210), (220, 215), (280, 240)], 'terrain': 'covered'},
        {'name': 'South Ridge', 'waypoints': [(140, 180), (190, 190), (270, 230)], 'terrain': 'elevated'}
    ]
    
    route_evaluations = []
    
    for route in route_options:
        evaluation = evaluate_rotation_route(team_pos, ring_data['next_center'], route, nearby_threats)
        route_evaluations.append(evaluation)
    
    # Sort by total score and return best option
    route_evaluations.sort(key=lambda x: x['total_score'], reverse=True)
    
    return {
        'recommended_route': route_evaluations[0],
        'alternative_routes': route_evaluations[1:],
        'emergency_plan': generate_emergency_plan(team_pos, ring_data, team_comp)
    }`,
    hints: [
      'Consider team composition abilities for mobility',
      'Factor in ring damage and timing constraints',
      'Account for enemy team positions and popular routes',
      'Think about terrain advantages and cover options'
    ],
    concepts: ['Pathfinding Algorithms', 'Risk Assessment', 'Multi-criteria Decision Making', 'Spatial Analysis'],
    realWorldApplication: 'Emergency evacuation planning, logistics route optimization, and autonomous vehicle navigation.'
  }
];

export const getScenarioById = (id: string): GamingScenarioExample | undefined => {
  return gamingScenarioTemplates.find(scenario => scenario.id === id);
};

export const getScenariosByGame = (game: string): GamingScenarioExample[] => {
  return gamingScenarioTemplates.filter(scenario => scenario.game === game);
};

export const getScenariosByCategory = (category: string): GamingScenarioExample[] => {
  return gamingScenarioTemplates.filter(scenario => scenario.category === category);
};

export const getScenariosByDifficulty = (difficulty: string): GamingScenarioExample[] => {
  return gamingScenarioTemplates.filter(scenario => scenario.difficulty === difficulty);
};

// Get all scenarios as a combined array for dynamic progress tracking
export const getScenariosArr = () => {
  // Base learning scenarios
  const baseScenarios = [
    {
      id: '1',
      title: 'Weather-Based Clothing',
      description: 'Learn to make decisions based on weather conditions',
      difficulty: 'beginner' as const,
      category: 'Conditional Logic',
      points: 100,
      estimatedTime: '15 min'
    },
    {
      id: '2',
      title: 'Book Organization',
      description: 'Sort and organize books using different criteria',
      difficulty: 'beginner' as const,
      category: 'Sorting & Arrays',
      points: 120,
      estimatedTime: '18 min'
    },
    {
      id: '3',
      title: 'Meal Planning',
      description: 'Plan meals based on preferences and ingredients',
      difficulty: 'intermediate' as const,
      category: 'Complex Logic',
      points: 200,
      estimatedTime: '22 min'
    },
    {
      id: '4',
      title: 'Grade Calculator',
      description: 'Calculate grades and provide feedback',
      difficulty: 'intermediate' as const,
      category: 'Functions & Logic',
      points: 220,
      estimatedTime: '20 min'
    },
    {
      id: '5',
      title: 'Budget Tracker',
      description: 'Track expenses and categorize spending',
      difficulty: 'advanced' as const,
      category: 'Data Processing',
      points: 300,
      estimatedTime: '30 min'
    },
    {
      id: '6',
      title: 'Task Scheduler',
      description: 'Prioritize and schedule tasks efficiently',
      difficulty: 'advanced' as const,
      category: 'Algorithms',
      points: 320,
      estimatedTime: '35 min'
    }
  ];

  // Gaming scenarios
  const gamingScenarios = gamingScenarioTemplates.map(template => ({
    id: template.id,
    title: template.title,
    description: template.description,
    difficulty: template.difficulty,
    category: template.category,
    points: template.points,
    estimatedTime: template.estimatedTime
  }));

  return [...baseScenarios, ...gamingScenarios];
};
