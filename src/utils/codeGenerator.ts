export interface LogicTranslation {
  python: string;
  javascript: string;
  explanation: string;
}

export const translateLogicToCode = (_logic: string, scenario: string): LogicTranslation => {
  // This is a simplified logic translator for the MVP
  // In version 2, this would be replaced with AI-powered generation
  
  // const normalizedLogic = logic.toLowerCase();
  
  if (scenario.includes('weather') || scenario.includes('wear')) {
    return translateWeatherLogic();
  } else if (scenario.includes('sort') || scenario.includes('books')) {
    return translateSortingLogic();
  } else if (scenario.includes('meal') || scenario.includes('food')) {
    return translateMealLogic();
  } else if (scenario.includes('grade') || scenario.includes('score')) {
    return translateGradeLogic();
  } else if (scenario.includes('budget') || scenario.includes('expense')) {
    return translateBudgetLogic();
  } else if (scenario.includes('task') || scenario.includes('schedule')) {
    return translateSchedulingLogic();
  } else if (scenario.includes('pathfinding') || scenario.includes('maze')) {
    return translatePathfindingLogic();
  } else if (scenario.includes('trading') || scenario.includes('finance')) {
    return translateTradingLogic();
  } else if (scenario.includes('inventory') || scenario.includes('management')) {
    return translateInventoryLogic();
  }
  
  return generateBasicConditionalLogic();
};

const translateWeatherLogic = (): LogicTranslation => {
  const pythonCode = `def what_to_wear(weather, temperature):
    if weather == "sunny" and temperature > 75:
        return "Light clothes and sunglasses"
    elif weather == "rainy":
        return "Raincoat and umbrella"
    elif temperature < 40:
        return "Heavy coat and warm clothes"
    else:
        return "Comfortable casual wear"

# Example usage
outfit = what_to_wear("sunny", 80)
print(f"You should wear: {outfit}")`;

  const javascriptCode = `function whatToWear(weather, temperature) {
    if (weather === "sunny" && temperature > 75) {
        return "Light clothes and sunglasses";
    } else if (weather === "rainy") {
        return "Raincoat and umbrella";
    } else if (temperature < 40) {
        return "Heavy coat and warm clothes";
    } else {
        return "Comfortable casual wear";
    }
}

// Example usage
const outfit = whatToWear("sunny", 80);
console.log(\`You should wear: \${outfit}\`);`;

  return {
    python: pythonCode,
    javascript: javascriptCode,
    explanation: "This code uses conditional statements (if/else) to make decisions based on weather conditions and temperature. It demonstrates how real-world decision-making translates to programming logic."
  };
};

const translateSortingLogic = (): LogicTranslation => {
  const pythonCode = `def sort_books(books, criteria="title"):
    if criteria == "title":
        return sorted(books, key=lambda book: book["title"])
    elif criteria == "author":
        return sorted(books, key=lambda book: book["author"])
    elif criteria == "year":
        return sorted(books, key=lambda book: book["year"])
    else:
        return books

# Example usage
books = [
    {"title": "Python Programming", "author": "Smith", "year": 2020},
    {"title": "JavaScript Basics", "author": "Johnson", "year": 2019},
    {"title": "Data Structures", "author": "Brown", "year": 2021}
]

sorted_books = sort_books(books, "title")
for book in sorted_books:
    print(f"{book['title']} by {book['author']} ({book['year']})")`;

  const javascriptCode = `function sortBooks(books, criteria = "title") {
    if (criteria === "title") {
        return books.sort((a, b) => a.title.localeCompare(b.title));
    } else if (criteria === "author") {
        return books.sort((a, b) => a.author.localeCompare(b.author));
    } else if (criteria === "year") {
        return books.sort((a, b) => a.year - b.year);
    } else {
        return books;
    }
}

// Example usage
const books = [
    {title: "Python Programming", author: "Smith", year: 2020},
    {title: "JavaScript Basics", author: "Johnson", year: 2019},
    {title: "Data Structures", author: "Brown", year: 2021}
];

const sortedBooks = sortBooks(books, "title");
sortedBooks.forEach(book => {
    console.log(\`\${book.title} by \${book.author} (\${book.year})\`);
});`;

  return {
    python: pythonCode,
    javascript: javascriptCode,
    explanation: "This code demonstrates sorting algorithms and data structures. It shows how to organize information systematically, which is a fundamental programming concept."
  };
};

const translateMealLogic = (): LogicTranslation => {
  const pythonCode = `def suggest_meal(time_of_day, dietary_preferences, ingredients):
    if time_of_day == "morning":
        base_suggestions = ["oatmeal", "eggs", "toast"]
    elif time_of_day == "afternoon":
        base_suggestions = ["sandwich", "salad", "soup"]
    else:  # evening
        base_suggestions = ["pasta", "rice bowl", "stir-fry"]
    
    # Filter based on dietary preferences
    if "vegetarian" in dietary_preferences:
        base_suggestions = [meal for meal in base_suggestions if meal != "eggs"]
    
    # Check available ingredients
    available_meals = []
    for meal in base_suggestions:
        if meal in ingredients:
            available_meals.append(meal)
    
    return available_meals[0] if available_meals else "Order takeout!"

# Example usage
meal = suggest_meal("evening", ["vegetarian"], ["pasta", "rice bowl"])
print(f"Suggested meal: {meal}")`;

  const javascriptCode = `function suggestMeal(timeOfDay, dietaryPreferences, ingredients) {
    let baseSuggestions;
    
    if (timeOfDay === "morning") {
        baseSuggestions = ["oatmeal", "eggs", "toast"];
    } else if (timeOfDay === "afternoon") {
        baseSuggestions = ["sandwich", "salad", "soup"];
    } else { // evening
        baseSuggestions = ["pasta", "rice bowl", "stir-fry"];
    }
    
    // Filter based on dietary preferences
    if (dietaryPreferences.includes("vegetarian")) {
        baseSuggestions = baseSuggestions.filter(meal => meal !== "eggs");
    }
    
    // Check available ingredients
    const availableMeals = baseSuggestions.filter(meal => 
        ingredients.includes(meal)
    );
    
    return availableMeals.length > 0 ? availableMeals[0] : "Order takeout!";
}

// Example usage
const meal = suggestMeal("evening", ["vegetarian"], ["pasta", "rice bowl"]);
console.log(\`Suggested meal: \${meal}\`);`;

  return {
    python: pythonCode,
    javascript: javascriptCode,
    explanation: "This code combines multiple decision factors (time, preferences, availability) to make a recommendation. It demonstrates how complex real-world decisions can be broken down into logical steps."
  };
};

const translateGradeLogic = (): LogicTranslation => {
  const pythonCode = `def calculate_grade(score):
    if score >= 90:
        return "A"
    elif score >= 80:
        return "B"
    elif score >= 70:
        return "C"
    elif score >= 60:
        return "D"
    else:
        return "F"

def get_grade_message(grade):
    messages = {
        "A": "Excellent work!",
        "B": "Good job!",
        "C": "Fair work, keep improving!",
        "D": "Needs improvement",
        "F": "Please see instructor"
    }
    return messages.get(grade, "Invalid grade")

# Example usage
score = 85
grade = calculate_grade(score)
message = get_grade_message(grade)
print(f"Score: {score}, Grade: {grade}, Message: {message}")`;

  const javascriptCode = `function calculateGrade(score) {
    if (score >= 90) {
        return "A";
    } else if (score >= 80) {
        return "B";
    } else if (score >= 70) {
        return "C";
    } else if (score >= 60) {
        return "D";
    } else {
        return "F";
    }
}

function getGradeMessage(grade) {
    const messages = {
        "A": "Excellent work!",
        "B": "Good job!",
        "C": "Fair work, keep improving!",
        "D": "Needs improvement",
        "F": "Please see instructor"
    };
    return messages[grade] || "Invalid grade";
}

// Example usage
const score = 85;
const grade = calculateGrade(score);
const message = getGradeMessage(grade);
console.log(\`Score: \${score}, Grade: \${grade}, Message: \${message}\`);`;

  return {
    python: pythonCode,
    javascript: javascriptCode,
    explanation: "This code demonstrates range-based decision making and data lookup using dictionaries/objects. It shows how to create reusable functions for common tasks."
  };
};

const generateBasicConditionalLogic = (): LogicTranslation => {
  const pythonCode = `def make_decision(condition):
    if condition:
        return "Yes, proceed with the action"
    else:
        return "No, do not proceed"

# Example usage
result = make_decision(True)
print(f"Decision: {result}")`;

  const javascriptCode = `function makeDecision(condition) {
    if (condition) {
        return "Yes, proceed with the action";
    } else {
        return "No, do not proceed";
    }
}

// Example usage
const result = makeDecision(true);
console.log(\`Decision: \${result}\`);`;

  return {
    python: pythonCode,
    javascript: javascriptCode,
    explanation: "This is a basic conditional structure that demonstrates how yes/no decisions translate to if/else statements in programming."
  };
};

const translateBudgetLogic = (): LogicTranslation => {
  const pythonCode = `def track_expenses(expenses, budget):
    total_spent = sum(expense['amount'] for expense in expenses)
    remaining_budget = budget - total_spent
    
    categories = {}
    for expense in expenses:
        category = expense['category']
        if category not in categories:
            categories[category] = 0
        categories[category] += expense['amount']
    
    return {
        'total_spent': total_spent,
        'remaining_budget': remaining_budget,
        'categories': categories,
        'budget_status': 'over' if remaining_budget < 0 else 'within'
    }

# Example usage
expenses = [
    {'category': 'food', 'amount': 50},
    {'category': 'transport', 'amount': 30},
    {'category': 'entertainment', 'amount': 25}
]

budget_report = track_expenses(expenses, 120)
print(f"Spent: $\{budget_report['total_spent']}, Remaining: $\{budget_report['remaining_budget']}")`

  const javascriptCode = `function trackExpenses(expenses, budget) {
    const totalSpent = expenses.reduce((sum, expense) => sum + expense.amount, 0);
    const remainingBudget = budget - totalSpent;
    
    const categories = {};
    expenses.forEach(expense => {
        if (!categories[expense.category]) {
            categories[expense.category] = 0;
        }
        categories[expense.category] += expense.amount;
    });
    
    return {
        totalSpent,
        remainingBudget,
        categories,
        budgetStatus: remainingBudget < 0 ? 'over' : 'within'
    };
}

// Example usage
const expenses = [
    {category: 'food', amount: 50},
    {category: 'transport', amount: 30},
    {category: 'entertainment', amount: 25}
];

const budgetReport = trackExpenses(expenses, 120);
console.log(\`Spent: $\${budgetReport.totalSpent}, Remaining: $\${budgetReport.remainingBudget}\`);`;

  return {
    python: pythonCode,
    javascript: javascriptCode,
    explanation: "This code demonstrates data processing and aggregation. It shows how to calculate totals, group data by categories, and make financial decisions based on budget constraints."
  };
};

const translateSchedulingLogic = (): LogicTranslation => {
  const pythonCode = `def schedule_tasks(tasks):
    # Sort tasks by priority and deadline
    sorted_tasks = sorted(tasks, key=lambda task: (task['priority'], task['deadline']))
    
    scheduled = []
    current_time = 0
    
    for task in sorted_tasks:
        scheduled.append({
            'name': task['name'],
            'start_time': current_time,
            'end_time': current_time + task['duration'],
            'priority': task['priority']
        })
        current_time += task['duration']
    
    return scheduled

# Example usage
tasks = [
    {'name': 'Write report', 'priority': 1, 'deadline': 5, 'duration': 3},
    {'name': 'Meeting', 'priority': 2, 'deadline': 2, 'duration': 1},
    {'name': 'Code review', 'priority': 1, 'deadline': 4, 'duration': 2}
]

schedule = schedule_tasks(tasks)
for task in schedule:
    print(f"{task['name']}: {task['start_time']}-{task['end_time']} (Priority: {task['priority']})")`;

  const javascriptCode = `function scheduleTasks(tasks) {
    // Sort tasks by priority and deadline
    const sortedTasks = tasks.sort((a, b) => {
        if (a.priority !== b.priority) return a.priority - b.priority;
        return a.deadline - b.deadline;
    });
    
    const scheduled = [];
    let currentTime = 0;
    
    sortedTasks.forEach(task => {
        scheduled.push({
            name: task.name,
            startTime: currentTime,
            endTime: currentTime + task.duration,
            priority: task.priority
        });
        currentTime += task.duration;
    });
    
    return scheduled;
}

// Example usage
const tasks = [
    {name: 'Write report', priority: 1, deadline: 5, duration: 3},
    {name: 'Meeting', priority: 2, deadline: 2, duration: 1},
    {name: 'Code review', priority: 1, deadline: 4, duration: 2}
];

const schedule = scheduleTasks(tasks);
schedule.forEach(task => {
    console.log(\`\${task.name}: \${task.startTime}-\${task.endTime} (Priority: \${task.priority})\`);
});`;

  return {
    python: pythonCode,
    javascript: javascriptCode,
    explanation: "This code demonstrates sorting algorithms and priority-based scheduling. It shows how to organize tasks efficiently using multiple criteria for decision-making."
  };
};

const translatePathfindingLogic = (): LogicTranslation => {
  const pythonCode = `def find_path(maze, start, end):
    from collections import deque
    
    rows, cols = len(maze), len(maze[0])
    directions = [(0, 1), (1, 0), (0, -1), (-1, 0)]  # right, down, left, up
    
    queue = deque([(start[0], start[1], [])])
    visited = set([start])
    
    while queue:
        x, y, path = queue.popleft()
        
        if (x, y) == end:
            return path + [(x, y)]
        
        for dx, dy in directions:
            nx, ny = x + dx, y + dy
            
            if (0 <= nx < rows and 0 <= ny < cols and 
                maze[nx][ny] == 0 and (nx, ny) not in visited):
                visited.add((nx, ny))
                queue.append((nx, ny, path + [(x, y)]))
    
    return []  # No path found

# Example usage
maze = [
    [0, 0, 0, 1],
    [1, 0, 0, 0],
    [0, 0, 1, 0],
    [0, 0, 0, 0]
]

path = find_path(maze, (0, 0), (3, 3))
print(f"Path found: {path}")`;

  const javascriptCode = `function findPath(maze, start, end) {
    const rows = maze.length;
    const cols = maze[0].length;
    const directions = [[0, 1], [1, 0], [0, -1], [-1, 0]]; // right, down, left, up
    
    const queue = [[start[0], start[1], []]];
    const visited = new Set([\`\${start[0]},\${start[1]}\`]);
    
    while (queue.length > 0) {
        const [x, y, path] = queue.shift();
        
        if (x === end[0] && y === end[1]) {
            return [...path, [x, y]];
        }
        
        for (const [dx, dy] of directions) {
            const nx = x + dx;
            const ny = y + dy;
            const key = \`\${nx},\${ny}\`;
            
            if (nx >= 0 && nx < rows && ny >= 0 && ny < cols && 
                maze[nx][ny] === 0 && !visited.has(key)) {
                visited.add(key);
                queue.push([nx, ny, [...path, [x, y]]]);
            }
        }
    }
    
    return []; // No path found
}

// Example usage
const maze = [
    [0, 0, 0, 1],
    [1, 0, 0, 0],
    [0, 0, 1, 0],
    [0, 0, 0, 0]
];

const path = findPath(maze, [0, 0], [3, 3]);
console.log('Path found: ' + JSON.stringify(path));`;

  return {
    python: pythonCode,
    javascript: javascriptCode,
    explanation: "This code implements a breadth-first search algorithm for pathfinding. It demonstrates advanced concepts like graph traversal, queue data structures, and algorithmic problem-solving."
  };
};

const translateTradingLogic = (): LogicTranslation => {
  const pythonCode = `def trading_strategy(prices, capital, risk_tolerance):
    def calculate_moving_average(prices, window):
        return [sum(prices[i:i+window])/window for i in range(len(prices)-window+1)]
    
    def should_buy(current_price, ma_short, ma_long, available_capital):
        return (ma_short > ma_long and 
                current_price <= available_capital * 0.1 and  # Risk management
                available_capital > current_price)
    
    def should_sell(current_price, purchase_price, risk_tolerance):
        gain = (current_price - purchase_price) / purchase_price
        return gain >= 0.05 or gain <= -risk_tolerance  # 5% gain or risk limit
    
    ma_short = calculate_moving_average(prices, 5)
    ma_long = calculate_moving_average(prices, 20)
    
    trades = []
    current_capital = capital
    position = None
    
    for i in range(len(ma_short)):
        current_price = prices[i + 19]  # Offset for MA calculation
        
        if position is None and should_buy(current_price, ma_short[i], ma_long[i], current_capital):
            position = {'price': current_price, 'shares': int(current_capital * 0.1 / current_price)}
            current_capital -= position['shares'] * current_price
            trades.append(f"BUY {position['shares']} shares at \${current_price:.2f}")
        
        elif position and should_sell(current_price, position['price'], risk_tolerance):
            profit = (current_price - position['price']) * position['shares']
            current_capital += position['shares'] * current_price
            trades.append(f"SELL {position['shares']} shares at \${current_price:.2f}, Profit: \${profit:.2f}")
            position = None
    
    return trades, current_capital

# Example usage
prices = [100, 102, 101, 105, 107, 103, 108, 110, 106, 109, 112, 108, 115, 118, 114, 120, 122, 119, 125, 128, 124, 130, 132, 128, 135]
trades, final_capital = trading_strategy(prices, 10000, 0.05)
for trade in trades:
    print(trade)
print(f"Final capital: \${final_capital:.2f}")`

  const javascriptCode = `function tradingStrategy(prices, capital, riskTolerance) {
    function calculateMovingAverage(prices, window) {
        const result = [];
        for (let i = 0; i <= prices.length - window; i++) {
            const sum = prices.slice(i, i + window).reduce((a, b) => a + b, 0);
            result.push(sum / window);
        }
        return result;
    }
    
    function shouldBuy(currentPrice, maShort, maLong, availableCapital) {
        return (maShort > maLong && 
                currentPrice <= availableCapital * 0.1 && // Risk management
                availableCapital > currentPrice);
    }
    
    function shouldSell(currentPrice, purchasePrice, riskTolerance) {
        const gain = (currentPrice - purchasePrice) / purchasePrice;
        return gain >= 0.05 || gain <= -riskTolerance; // 5% gain or risk limit
    }
    
    const maShort = calculateMovingAverage(prices, 5);
    const maLong = calculateMovingAverage(prices, 20);
    
    const trades = [];
    let currentCapital = capital;
    let position = null;
    
    for (let i = 0; i < maShort.length; i++) {
        const currentPrice = prices[i + 19]; // Offset for MA calculation
        
        if (!position && shouldBuy(currentPrice, maShort[i], maLong[i], currentCapital)) {
            const shares = Math.floor(currentCapital * 0.1 / currentPrice);
            position = {price: currentPrice, shares};
            currentCapital -= shares * currentPrice;
            trades.push(\`BUY \${shares} shares at $\${currentPrice.toFixed(2)}\`);
        } else if (position && shouldSell(currentPrice, position.price, riskTolerance)) {
            const profit = (currentPrice - position.price) * position.shares;
            currentCapital += position.shares * currentPrice;
            trades.push(\`SELL \${position.shares} shares at $\${currentPrice.toFixed(2)}, Profit: $\${profit.toFixed(2)}\`);
            position = null;
        }
    }
    
    return [trades, currentCapital];
}

// Example usage
const prices = [100, 102, 101, 105, 107, 103, 108, 110, 106, 109, 112, 108, 115, 118, 114, 120, 122, 119, 125, 128, 124, 130, 132, 128, 135];
const [trades, finalCapital] = tradingStrategy(prices, 10000, 0.05);
trades.forEach(trade => console.log(trade));
console.log(\`Final capital: $\${finalCapital.toFixed(2)}\`);`;

  return {
    python: pythonCode,
    javascript: javascriptCode,
    explanation: "This code implements an automated trading strategy using moving averages and risk management. It demonstrates advanced financial logic, algorithmic trading concepts, and data analysis techniques."
  };
};

const translateInventoryLogic = (): LogicTranslation => {
  const pythonCode = `def manage_inventory(inventory, orders, reorder_threshold=10):
    def process_order(item, quantity):
        if item in inventory and inventory[item]['stock'] >= quantity:
            inventory[item]['stock'] -= quantity
            inventory[item]['sold'] += quantity
            return f"Order fulfilled: {quantity} {item}(s)"
        else:
            return f"Insufficient stock for {quantity} {item}(s)"
    
    def check_reorder_needed(item, threshold):
        return inventory[item]['stock'] <= threshold
    
    def suggest_reorder(item):
        avg_sales = inventory[item]['sold'] / 30  # Monthly average
        suggested_order = int(avg_sales * 60)  # 2 months supply
        return max(suggested_order, 20)  # Minimum order of 20
    
    results = []
    reorder_suggestions = []
    
    # Process orders
    for order in orders:
        result = process_order(order['item'], order['quantity'])
        results.append(result)
    
    # Check reorder needs
    for item in inventory:
        if check_reorder_needed(item, reorder_threshold):
            suggested_qty = suggest_reorder(item)
            reorder_suggestions.append(f"Reorder {item}: {suggested_qty} units")
    
    return {
        'order_results': results,
        'reorder_suggestions': reorder_suggestions,
        'current_inventory': inventory
    }

# Example usage
inventory = {
    'widgets': {'stock': 50, 'sold': 120},
    'gadgets': {'stock': 8, 'sold': 85},
    'tools': {'stock': 25, 'sold': 60}
}

orders = [
    {'item': 'widgets', 'quantity': 5},
    {'item': 'gadgets', 'quantity': 3},
    {'item': 'tools', 'quantity': 10}
]

report = manage_inventory(inventory, orders)
for result in report['order_results']:
    print(result)
for suggestion in report['reorder_suggestions']:
    print(suggestion)`;

  const javascriptCode = `function manageInventory(inventory, orders, reorderThreshold = 10) {
    function processOrder(item, quantity) {
        if (inventory[item] && inventory[item].stock >= quantity) {
            inventory[item].stock -= quantity;
            inventory[item].sold += quantity;
            return \`Order fulfilled: \${quantity} \${item}(s)\`;
        } else {
            return \`Insufficient stock for \${quantity} \${item}(s)\`;
        }
    }
    
    function checkReorderNeeded(item, threshold) {
        return inventory[item].stock <= threshold;
    }
    
    function suggestReorder(item) {
        const avgSales = inventory[item].sold / 30; // Monthly average
        const suggestedOrder = Math.floor(avgSales * 60); // 2 months supply
        return Math.max(suggestedOrder, 20); // Minimum order of 20
    }
    
    const results = [];
    const reorderSuggestions = [];
    
    // Process orders
    orders.forEach(order => {
        const result = processOrder(order.item, order.quantity);
        results.push(result);
    });
    
    // Check reorder needs
    Object.keys(inventory).forEach(item => {
        if (checkReorderNeeded(item, reorderThreshold)) {
            const suggestedQty = suggestReorder(item);
            reorderSuggestions.push(\`Reorder \${item}: \${suggestedQty} units\`);
        }
    });
    
    return {
        orderResults: results,
        reorderSuggestions: reorderSuggestions,
        currentInventory: inventory
    };
}

// Example usage
const inventory = {
    widgets: {stock: 50, sold: 120},
    gadgets: {stock: 8, sold: 85},
    tools: {stock: 25, sold: 60}
};

const orders = [
    {item: 'widgets', quantity: 5},
    {item: 'gadgets', quantity: 3},
    {item: 'tools', quantity: 10}
];

const report = manageInventory(inventory, orders);
report.orderResults.forEach(result => console.log(result));
report.reorderSuggestions.forEach(suggestion => console.log(suggestion));`;

  return {
    python: pythonCode,
    javascript: javascriptCode,
    explanation: "This code demonstrates inventory management logic with automated reordering. It shows how to track stock levels, process orders, and make data-driven decisions for supply chain management."
  };
};
