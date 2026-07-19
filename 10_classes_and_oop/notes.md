# JavaScript and Classes: Intro to OOP

## What is OOP?
**Object-Oriented Programming (OOP)** is a programming paradigm. Think of it as a specific structure or style of writing code where we organize our data and logic into "objects".

## What is an Object?
An object is simply a collection of **properties** (variables/data) and **methods** (functions/actions). 

## Why use OOP?
As applications grow larger, standard procedural code can become messy and hard to manage (often called "spaghetti code"). OOP helps by keeping code organized, reusable, and much easier to maintain. 

## Key Parts of OOP in JavaScript
JavaScript handles OOP using a few core mechanics:
- **Object Literals:** The simplest way to create an object using `{}`.
- **Constructor Functions:** Functions used to blueprint and create multiple objects.
- **Prototypes:** The mechanism JavaScript uses to share properties and methods between objects.
- **Classes:** Introduced in ES6, this is a cleaner syntax (syntactic sugar) over JavaScript's existing prototype-based inheritance.
- **Instances:** The actual objects created from a class or constructor using the `new` keyword, which binds data to the `this` keyword.

---

## The 4 Pillars of OOP
These are the four main concepts that make OOP so powerful:

1. **Abstraction (Hiding Details):** 
   Hiding the complex, under-the-hood implementation details and showing only the essential features to the user. *(Example: You know how to use a steering wheel without needing to know exactly how the car's engine works).*

2. **Encapsulation (Wrapping Data):** 
   Bundling the data (properties) and the methods that act on that data into a single unit (the object). It also restricts direct outside access to some of the object's components to prevent accidental interference.

3. **Inheritance (Sharing Features):** 
   A mechanism where a new class can inherit properties and methods from an existing parent class. This prevents us from writing the same code twice.

4. **Polymorphism (Many Faces):** 
   The ability for different objects to use the exact same method name, but respond in their own unique way.