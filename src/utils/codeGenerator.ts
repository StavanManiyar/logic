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