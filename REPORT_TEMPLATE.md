# Personal Assignment 1 Report Template

## 1. Project Overview

**Project Name:**  
(GreenPath: Carbon Footprint Calculator)

**What does your calculator do?**  
(his calculator estimates the amount of CO2 emissions produced during a trip based on the distance traveled and the mode of transport selected such as electric, gasoline and public transport. It also provides a personalized message and classifies the environmental impact into categories (Low, Average, or High).)


## 2. Inputs

List and explain all inputs you used.

| Input Name | Unit | What it Represents |
| User name | string | users name for personalized output |
| distance | km | the total length of the trip |
| transport mode | category | The type of vehicle used |

Explain in words:  
( chose these inputs because distance and transport type are the two most critical factors in calculating individual carbon footprints. It is really vital to find out what amount of CO2 emission does a car release.Using a name makes the application more interactive and user-friendly.  )

---

## 3. Process (Calculation Logic)

**Formula or Calculation Used:**  
(Total CO2 (kg) = (Distance * Emission Factor) / 1000)

**Steps:**
1. Get input values (Name, Distance, Transport) from the HTML 
2. Assign a factor based on the transport type (Petrol: 192, Electric: 53, Bus: 105)
3.Perform the multiplication and divide by 1000 to convert grams to kilograms.
4. Store the final result in the totalKg variable. 

---

## 4. Conditional Logic (if / else)

Explain how your program interprets the result.

Example:

If total kg < 2kg → Low impact! You are an Eco-Hero 
If total kg 2-10 kg → Average impact. Good job!
If BMI > 10kg → high impact 

I chose these ranges based on typical short-to-medium city trips. The logic helps users understand if their travel habits are sustainable or if they should consider alternatives like cycling or walking.

---

## 5. Output

What does your program show to the user?

- The exact kilograms of CO2
- Category or interpretation: a feedback message (Low, Average, or High impact)
- Personalized message: The results start with "Results for [Name]
- Optional: binary output (if implemented)

---

## 6. Edge Cases / Unusual Inputs

What happens if:

- User leaves input empty? T
- User enters zero or negative numbers? 

Explain how your program handles this.
-The program checks if name or distance is empty. If so, it displays a red error message: "Please fill in all fields!" and stops the calculation using return. 
-The formula will calculate it mathematically, but the validation can be extended to prevent non-positive numbers.    



## 7. Optional Features (If You Added Any)

Examples:
- Binary conversion  
- Extra calculations  
- Extra UI features  
- Validation messages  

---

## 8. How to Run the Project

1. Download the project folder containing index.html, style.css, and script.js. 
2. Open `index.html` in browser  
3. Enter your name and trip distance, then select your transport.  
4. Click the Calculate button to see the result.

---

## 9. AI Usage (If Used)

Did you use AI tools?  
(Yes / No) yes, i did 

If yes, explain briefly:
- What you asked AI for - Firstly I asked AI any ideas for calculator, because i didnt have one. Then when i distinguished what calculator i would work on, i asked gemini to write me full code because i couldnt do it by myself. 
- What you modified yourself: I partly customized the CSS design to make the UI look professional, including the card layout, shadows, and color scheme. I modified the HTML structure, updated the titles, and adjusted the labels to fit the "GreenPath" branding. But i didnt do anything in js.script 
- What you fully understand now: Actually, the specific syntax of coding is still a bit sophisticated and confusing for me. However, I now fully understand the general workflow of a web application: how a user provides data, how JavaScript captures that data, processes it through a formula, and sends it back to the display.


## 10. Reflection

What did you learn from this assignment?
I learned the fundamental "Input → Process → Output" logic. I now understand that even a simple calculator requires a clear sequence: taking data, applying a formula, and updating the UI.I realized that CSS is not just about colors, but about layout and user experience. Making the calculator look like a professional "card" made it feel much more like a real application. In addition, I learned how to use AI effectively—not just to copy code, but to explore ideas and understand complex syntax. Even though the code is still a bit sophisticated for me, I now know the general structure of a web project.

(2–4 sentences)
