'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { CheckCircle2, Circle } from "lucide-react"

const roadmap = [
  // Week 1
  {
    week: 1,
    days: [
      {
        day: 1,
        tasks: [
          {
            title: "Go: Install Go and 'Hello, World!'",
            explanation: "Set up your Go development environment and write your first Go program.",
            exercise: "Follow the official Go installation guide and write a simple 'Hello, World!' program.",
            goals: "Understand the basics of Go setup and compilation.",
            completed: false
          },
          {
            title: "Rust: Install Rust and 'Hello, World!'",
            explanation: "Set up Rust using rustup and write your first Rust program.",
            exercise: "Install Rust and Cargo, then write and run a 'Hello, World!' program.",
            goals: "Familiarize yourself with Rust's toolchain.",
            completed: false
          },
          {
            title: "DS/Algo: Arrays - Find the maximum element",
            explanation: "Learn how to traverse an array to find the maximum value.",
            exercise: "Write a function that takes an array as input and returns the maximum element.",
            goals: "Understand array traversal and basic algorithmic thinking.",
            leetcode: [
              "LeetCode 53: Maximum Subarray",
              "LeetCode 1: Two Sum",
              "LeetCode 121: Best Time to Buy and Sell Stock"
            ],
            completed: false
          },
        ]
      },
      {
        day: 2,
        tasks: [
          {
            title: "Go: Learn control structures",
            explanation: "Understand how to use if, else, switch, and for loops in Go.",
            exercise: "Write a program that uses a for loop to calculate the sum of numbers from 1 to 100.",
            goals: "Master Go's control flow syntax.",
            completed: false
          },
          {
            title: "Rust: Explore control flow",
            explanation: "Learn about Rust's if, else, match statements, and loop constructs.",
            exercise: "Create a program that matches user input to predefined responses.",
            goals: "Get comfortable with Rust's pattern matching.",
            completed: false
          },
          {
            title: "DS/Algo: Arrays - Reverse an array",
            explanation: "Implement an algorithm to reverse the elements of an array in place.",
            exercise: "Write a function that reverses an array without using extra space.",
            goals: "Improve understanding of array manipulation and indexing.",
            leetcode: [
              "LeetCode 189: Rotate Array",
              "LeetCode 977: Squares of a Sorted Array",
              "LeetCode 283: Move Zeroes"
            ],
            completed: false
          },
        ]
      },
      {
        day: 3,
        tasks: [
          {
            title: "Go: Understand functions",
            explanation: "Learn how to define and use functions in Go.",
            exercise: "Write functions for basic arithmetic operations and call them from your main function.",
            goals: "Understand function syntax and usage in Go.",
            completed: false
          },
          {
            title: "Rust: Dive into functions",
            explanation: "Explore how to write functions and the concept of expressions in Rust.",
            exercise: "Write functions that calculate factorial and Fibonacci numbers recursively.",
            goals: "Grasp Rust's approach to functions and recursion.",
            completed: false
          },
          {
            title: "DS/Algo: Hashing - Two Sum problem",
            explanation: "Learn how hashing can be used to solve problems efficiently.",
            exercise: "Implement the Two Sum problem using a hash map.",
            goals: "Understand the use of hash maps in problem-solving.",
            leetcode: [
              "LeetCode 1: Two Sum",
              "LeetCode 217: Contains Duplicate",
              "LeetCode 242: Valid Anagram"
            ],
            completed: false
          },
        ]
      },
      {
        day: 4,
        tasks: [
          {
            title: "Go: Learn about arrays and slices",
            explanation: "Understand how to use arrays and slices in Go.",
            exercise: "Manipulate slices: append, copy, and iterate over them.",
            goals: "Get comfortable with Go's array and slice types.",
            completed: false
          },
          {
            title: "Rust: Introduction to ownership and borrowing",
            explanation: "Learn Rust's ownership model and how borrowing works.",
            exercise: "Write functions that borrow data using references.",
            goals: "Understand the core concepts of Rust's memory safety.",
            completed: false
          },
          {
            title: "DS/Algo: Hashing - Check for duplicates",
            explanation: "Use hashing to check for duplicates in an array efficiently.",
            exercise: "Implement a function that returns true if duplicates are found.",
            goals: "Learn to apply hash maps to detect duplicates.",
            leetcode: [
              "LeetCode 217: Contains Duplicate",
              "LeetCode 219: Contains Duplicate II",
              "LeetCode 349: Intersection of Two Arrays"
            ],
            completed: false
          },
        ]
      },
      {
        day: 5,
        tasks: [
          {
            title: "Go: Explore maps",
            explanation: "Learn how to use maps (dictionaries) in Go.",
            exercise: "Count the frequency of elements in an array using a map.",
            goals: "Understand Go's map data structure and its applications.",
            completed: false
          },
          {
            title: "Rust: Deepen understanding of ownership",
            explanation: "Further explore ownership and borrowing with mutable references.",
            exercise: "Implement a function that modifies a borrowed value.",
            goals: "Master mutable and immutable references in Rust.",
            completed: false
          },
          {
            title: "DS/Algo: Two Pointers - Remove duplicates",
            explanation: "Learn the two-pointer technique to solve array problems.",
            exercise: "Remove duplicates from a sorted array in-place.",
            goals: "Understand how to use two pointers to optimize space.",
            leetcode: [
              "LeetCode 26: Remove Duplicates from Sorted Array",
              "LeetCode 27: Remove Element",
              "LeetCode 283: Move Zeroes"
            ],
            completed: false
          },
        ]
      },
      {
        day: 6,
        tasks: [
          {
            title: "Go: Introduction to structs and methods",
            explanation: "Learn how to define structs and methods in Go.",
            exercise: "Define a `Person` struct with fields and methods.",
            goals: "Understand how Go handles data structures and associated methods.",
            completed: false
          },
          {
            title: "Rust: Learn about structs and methods",
            explanation: "Explore how to define structs and implement methods in Rust.",
            exercise: "Create a `Rectangle` struct and implement methods to calculate area and perimeter.",
            goals: "Grasp Rust's approach to data and behavior encapsulation.",
            completed: false
          },
          {
            title: "DS/Algo: Stack - Valid Parentheses",
            explanation: "Understand the stack data structure and its applications.",
            exercise: "Use a stack to check if a string of parentheses is valid.",
            goals: "Learn how stacks can be used for parsing and evaluation.",
            leetcode: [
              "LeetCode 20: Valid Parentheses",
              "LeetCode 155: Min Stack",
              "LeetCode 232: Implement Queue using Stacks"
            ],
            completed: false
          },
        ]
      },
      {
        day: 7,
        tasks: [
          {
            title: "Go: Start CLI calculator project",
            explanation: "Begin building a simple command-line calculator in Go.",
            exercise: "Implement addition and subtraction functions.",
            goals: "Apply Go knowledge to a real-world project.",
            completed: false
          },
          {
            title: "Rust: Explore enums and pattern matching",
            explanation: "Learn about enums and how to use pattern matching with them.",
            exercise: "Implement a simple program that uses enums to represent different shapes.",
            goals: "Understand Rust's powerful enum and pattern matching features.",
            completed: false
          },
          {
            title: "DS/Algo: Stack - Implement a stack",
            explanation: "Implement a stack data structure using an array or linked list.",
            exercise: "Perform push, pop, and peek operations.",
            goals: "Solidify understanding of stack operations.",
            leetcode: [
              "LeetCode 225: Implement Stack using Queues",
              "LeetCode 150: Evaluate Reverse Polish Notation",
              "LeetCode 71: Simplify Path"
            ],
            completed: false
          },
        ]
      },
    ]
  },
  // Week 2
  {
    week: 2,
    days: [
      {
        day: 8,
        tasks: [
          {
            title: "Go: Learn about interfaces",
            explanation: "Understand how interfaces define behavior in Go.",
            exercise: "Create an interface for geometric shapes and implement it for circles and rectangles.",
            goals: "Grasp how polymorphism works in Go using interfaces.",
            completed: false
          },
          {
            title: "Rust: Continue with enums and pattern matching",
            explanation: "Dive deeper into enums and how to use pattern matching effectively.",
            exercise: "Implement a state machine using enums to model traffic light states.",
            goals: "Enhance your understanding of Rust's enum system.",
            completed: false
          },
          {
            title: "DS/Algo: Queue - Implement a queue",
            explanation: "Learn about the queue data structure and its FIFO property.",
            exercise: "Implement a queue and perform enqueue and dequeue operations.",
            goals: "Understand how queues operate and their applications.",
            leetcode: [
              "LeetCode 346: Moving Average from Data Stream",
              "LeetCode 622: Design Circular Queue",
              "LeetCode 933: Number of Recent Calls"
            ],
            completed: false
          },
        ]
      },
      {
        day: 9,
        tasks: [
          {
            title: "Go: Understand packages",
            explanation: "Learn how to organize code using packages in Go.",
            exercise: "Split your calculator project into separate packages for operations.",
            goals: "Organize code for better maintainability.",
            completed: false
          },
          {
            title: "Rust: Learn about modules",
            explanation: "Understand how to use modules and crates to structure Rust code.",
            exercise: "Organize your code into multiple modules with proper visibility.",
            goals: "Master code organization in Rust.",
            completed: false
          },
          {
            title: "DS/Algo: Linked List - Reverse a linked list",
            explanation: "Learn how to manipulate linked lists.",
            exercise: "Implement a function to reverse a singly linked list.",
            goals: "Understand linked list traversal and modification.",
            leetcode: [
              "LeetCode 206: Reverse Linked List",
              "LeetCode 21: Merge Two Sorted Lists",
              "LeetCode 141: Linked List Cycle"
            ],
            completed: false
          },
        ]
      },
      {
        day: 10,
        tasks: [
          {
            title: "Go: Error handling with error interface",
            explanation: "Learn how to handle errors in Go using the error interface.",
            exercise: "Modify your calculator to handle division by zero errors gracefully.",
            goals: "Implement robust error handling in Go applications.",
            completed: false
          },
          {
            title: "Rust: Error handling with Result and Option",
            explanation: "Understand error handling in Rust using Result and Option enums.",
            exercise: "Implement error handling in file reading operations.",
            goals: "Learn to write safe and reliable Rust code.",
            completed: false
          },
          {
            title: "DS/Algo: Linked List - Detect a cycle",
            explanation: "Use Floyd's Tortoise and Hare algorithm to detect cycles in a linked list.",
            exercise: "Implement a function to detect if a linked list has a cycle.",
            goals: "Understand advanced techniques in linked list manipulation.",
            leetcode: [
              "LeetCode 141: Linked List Cycle",
              "LeetCode 142: Linked List Cycle II",
              "LeetCode 160: Intersection of Two Linked Lists"
            ],
            completed: false
          },
        ]
      },
      {
        day: 11,
        tasks: [
          {
            title: "Go: Introduction to concurrency with goroutines",
            explanation: "Learn how to use goroutines for concurrent execution in Go.",
            exercise: "Launch multiple goroutines to perform calculations concurrently.",
            goals: "Understand the basics of concurrency in Go.",
            completed: false
          },
          {
            title: "Rust: Learn about lifetimes",
            explanation: "Understand Rust's lifetime annotations to manage references.",
            exercise: "Write functions with explicit lifetime annotations.",
            goals: "Master borrowing rules and lifetimes in Rust.",
            completed: false
          },
          {
            title: "DS/Algo: Trees - In-order traversal",
            explanation: "Learn about binary trees and traversal methods.",
            exercise: "Implement in-order traversal of a binary tree.",
            goals: "Understand tree data structures and traversal algorithms.",
            leetcode: [
              "LeetCode 94: Binary Tree Inorder Traversal",
              "LeetCode 144: Binary Tree Preorder Traversal",
              "LeetCode 145: Binary Tree Postorder Traversal"
            ],
            completed: false
          },
        ]
      },
      {
        day: 12,
        tasks: [
          {
            title: "Go: Working with channels",
            explanation: "Learn how to use channels for communication between goroutines.",
            exercise: "Implement a producer-consumer model using channels.",
            goals: "Master synchronization in concurrent Go programs.",
            completed: false
          },
          {
            title: "Rust: Explore closures",
            explanation: "Understand how closures capture environment variables in Rust.",
            exercise: "Use closures to perform operations on collections.",
            goals: "Learn functional programming aspects in Rust.",
            completed: false
          },
          {
            title: "DS/Algo: Trees - Maximum depth",
            explanation: "Determine the maximum depth (height) of a binary tree.",
            exercise: "Implement a function to find the maximum depth recursively.",
            goals: "Practice recursion and tree traversal.",
            leetcode: [
              "LeetCode 104: Maximum Depth of Binary Tree",
              "LeetCode 111: Minimum Depth of Binary Tree",
              "LeetCode 110: Balanced Binary Tree"
            ],
            completed: false
          },
        ]
      },
      {
        day: 13,
        tasks: [
          {
            title: "Go: Use the select statement",
            explanation: "Learn how to use the select statement with channels in Go.",
            exercise: "Implement timeouts and multiplexing using select.",
            goals: "Handle multiple channel operations effectively.",
            completed: false
          },
          {
            title: "Rust: Introduction to traits",
            explanation: "Understand how to define and implement traits in Rust.",
            exercise: "Create a custom trait and implement it for different types.",
            goals: "Grasp Rust's approach to polymorphism.",
            completed: false
          },
          {
            title: "DS/Algo: Graphs - Implement BFS traversal",
            explanation: "Learn how to traverse graphs using Breadth-First Search.",
            exercise: "Implement BFS and print nodes in level order.",
            goals: "Understand graph traversal techniques.",
            leetcode: [
              "LeetCode 102: Binary Tree Level Order Traversal",
              "LeetCode 107: Binary Tree Level Order Traversal II",
              "LeetCode 133: Clone Graph"
            ],
            completed: false
          },
        ]
      },
      {
        day: 14,
        tasks: [
          {
            title: "Go: Build a simple web server",
            explanation: "Create a basic web server using Go's net/http package.",
            exercise: "Handle basic GET requests and serve static content.",
            goals: "Apply Go networking knowledge to build web applications.",
            completed: false
          },
          {
            title: "Rust: Learn about generics",
            explanation: "Understand how to use generics in Rust for code reusability.",
            exercise: "Write generic functions and structs.",
            goals: "Enhance code flexibility using generics.",
            completed: false
          },
          {
            title: "DS/Algo: Graphs - Connected components",
            explanation: "Learn how to find connected components in an undirected graph.",
            exercise: "Implement a function to count connected components.",
            goals: "Deepen understanding of graph algorithms.",
            leetcode: [
              "LeetCode 323: Number of Connected Components in an Undirected Graph",
              "LeetCode 200: Number of Islands",
              "LeetCode 547: Number of Provinces"
            ],
            completed: false
          },
        ]
      },
    ]
  },
  // Week 3
  {
    week: 3,
    days: [
      {
        day: 15,
        tasks: [
          {
            title: "Go: Work with HTTP handlers",
            explanation: "Learn how to handle HTTP requests and responses in Go.",
            exercise: "Build a simple HTTP server that responds with 'Hello, World!' to any GET request.",
            goals: "Understand the basics of building web services in Go.",
            completed: false
          },
          {
            title: "Rust: Explore standard collections",
            explanation: "Get familiar with Rust's standard collections like Vec and HashMap.",
            exercise: "Write a program that counts the frequency of words in a text using HashMap.",
            goals: "Learn to effectively use Rust's collections for data manipulation.",
            completed: false
          },
          {
            title: "DS/Algo: Sorting - Implement selection sort",
            explanation: "Understand how the selection sort algorithm works.",
            exercise: "Implement selection sort and analyze its time complexity.",
            goals: "Grasp basic sorting algorithms and their efficiencies.",
            leetcode: [
              "LeetCode 912: Sort an Array",
              "LeetCode 147: Insertion Sort List",
              "LeetCode 215: Kth Largest Element in an Array"
            ],
            completed: false
          },
        ]
      },
      {
        day: 16,
        tasks: [
          {
            title: "Go: Middleware implementation",
            explanation: "Learn how to implement middleware in Go web servers.",
            exercise: "Add logging middleware to your HTTP server.",
            goals: "Understand how middleware can enhance web applications.",
            completed: false
          },
          {
            title: "Rust: Advanced error handling",
            explanation: "Explore custom error types and error handling strategies.",
            exercise: "Implement custom errors using the `thiserror` crate.",
            goals: "Improve robustness of Rust applications through better error handling.",
            completed: false
          },
          {
            title: "DS/Algo: Sorting - Implement quicksort",
            explanation: "Learn how the quicksort algorithm works.",
            exercise: "Implement quicksort and analyze its average and worst-case time complexities.",
            goals: "Understand divide and conquer algorithms.",
            leetcode: [
              "LeetCode 912: Sort an Array",
              "LeetCode 75: Sort Colors",
              "LeetCode 215: Kth Largest Element in an Array"
            ],
            completed: false
          },
        ]
      },
      {
        day: 17,
        tasks: [
          {
            title: "Go: Utilize templates",
            explanation: "Learn how to use templates for dynamic HTML content in Go.",
            exercise: "Serve HTML pages with dynamic data using the html/template package.",
            goals: "Integrate server-side rendering in your web applications.",
            completed: false
          },
          {
            title: "Rust: File I/O operations",
            explanation: "Understand how to perform file input/output in Rust.",
            exercise: "Write a program that reads from and writes to files.",
            goals: "Handle file operations safely and efficiently.",
            completed: false
          },
          {
            title: "DS/Algo: Recursion - Tower of Hanoi",
            explanation: "Solve the Tower of Hanoi problem using recursion.",
            exercise: "Implement a recursive function to move disks between towers.",
            goals: "Strengthen recursive problem-solving skills.",
            leetcode: [
              "LeetCode 779: K-th Symbol in Grammar",
              "LeetCode 894: All Possible Full Binary Trees",
              "LeetCode 241: Different Ways to Add Parentheses"
            ],
            completed: false
          },
        ]
      },
      {
        day: 18,
        tasks: [
          {
            title: "Go: JSON encoding and decoding",
            explanation: "Learn how to work with JSON data in Go.",
            exercise: "Create APIs that return JSON responses and parse JSON requests.",
            goals: "Handle data interchange formats in web services.",
            completed: false
          },
          {
            title: "Rust: Serialization with serde",
            explanation: "Use the serde crate for serialization and deserialization in Rust.",
            exercise: "Serialize structs to JSON and deserialize JSON to structs.",
            goals: "Understand data serialization in Rust applications.",
            completed: false
          },
          {
            title: "DS/Algo: Dynamic Programming - Fibonacci",
            explanation: "Learn the basics of dynamic programming using the Fibonacci sequence.",
            exercise: "Implement Fibonacci using memoization and tabulation.",
            goals: "Understand how to optimize recursive algorithms.",
            leetcode: [
              "LeetCode 70: Climbing Stairs",
              "LeetCode 198: House Robber",
              "LeetCode 213: House Robber II"
            ],
            completed: false
          },
        ]
      },
      {
        day: 19,
        tasks: [
          {
            title: "Go: Build a RESTful API",
            explanation: "Create a RESTful API with CRUD operations in Go.",
            exercise: "Implement endpoints for creating, reading, updating, and deleting resources.",
            goals: "Apply web development skills to build APIs.",
            completed: false
          },
          {
            title: "Rust: Build a CLI tool",
            explanation: "Use the clap crate to build command-line interfaces in Rust.",
            exercise: "Create a CLI for searching text in files (grep-like tool).",
            goals: "Develop practical Rust applications.",
            completed: false
          },
          {
            title: "DS/Algo: Dynamic Programming - Climbing Stairs",
            explanation: "Solve problems using dynamic programming techniques.",
            exercise: "Implement solutions for climbing stairs with variable steps.",
            goals: "Apply DP concepts to solve combinatorial problems.",
            leetcode: [
              "LeetCode 70: Climbing Stairs",
              "LeetCode 746: Min Cost Climbing Stairs",
              "LeetCode 62: Unique Paths"
            ],
            completed: false
          },
        ]
      },
      {
        day: 20,
        tasks: [
          {
            title: "Go: Database connectivity",
            explanation: "Learn how to connect to databases using Go's database/sql package.",
            exercise: "Connect your API to a SQLite or PostgreSQL database and perform CRUD operations.",
            goals: "Integrate persistent storage into your applications.",
            completed: false
          },
          {
            title: "Rust: Introduction to async programming",
            explanation: "Understand asynchronous programming in Rust using async/await.",
            exercise: "Make asynchronous HTTP requests using the reqwest crate.",
            goals: "Write efficient and non-blocking Rust code.",
            completed: false
          },
          {
            title: "DS/Algo: Backtracking - N-Queens problem",
            explanation: "Use backtracking to solve the N-Queens puzzle.",
            exercise: "Implement an algorithm to place N queens on an N×N chessboard.",
            goals: "Learn problem-solving using backtracking.",
            leetcode: [
              "LeetCode 51: N-Queens",
              "LeetCode 52: N-Queens II",
              "LeetCode 37: Sudoku Solver"
            ],
            completed: false
          },
        ]
      },
      {
        day: 21,
        tasks: [
          {
            title: "Go: Finalize and test your API",
            explanation: "Complete your RESTful API and write tests.",
            exercise: "Write unit tests for your handlers and ensure all endpoints work correctly.",
            goals: "Ensure code quality and reliability.",
            completed: false
          },
          {
            title: "Rust: Continue with async programming",
            explanation: "Deepen your understanding of async programming with the tokio crate.",
            exercise: "Build a simple asynchronous server that handles multiple connections.",
            goals: "Master concurrency in Rust.",
            completed: false
          },
          {
            title: "DS/Algo: Greedy Algorithms - Coin Change",
            explanation: "Learn greedy strategies to solve optimization problems.",
            exercise: "Implement the coin change problem using a greedy approach.",
            goals: "Understand where greedy algorithms are applicable.",
            leetcode: [
              "LeetCode 322: Coin Change",
              "LeetCode 55: Jump Game",
              "LeetCode 45: Jump Game II"
            ],
            completed: false
          },
        ]
      },
    ]
  },
  // Week 4
  {
    week: 4,
    days: [
      {
        day: 22,
        tasks: [
          {
            title: "Go: Introduction to testing",
            explanation: "Learn how to write unit tests in Go using the testing package.",
            exercise: "Write tests for your calculator functions ensuring they handle edge cases.",
            goals: "Understand the importance of testing and how to implement it in Go.",
            completed: false
          },
          {
            title: "Rust: Write tests using cargo test",
            explanation: "Learn how to write and run tests in Rust.",
            exercise: "Add tests to your CLI tool to validate its functionality.",
            goals: "Ensure code reliability through testing in Rust.",
            completed: false
          },
          {
            title: "DS/Algo: Heaps - Kth largest element",
            explanation: "Learn how to use a heap to find the Kth largest element in an array.",
            exercise: "Implement a function that finds the Kth largest element using a min-heap.",
            goals: "Understand heap operations and their applications.",
            leetcode: [
              "LeetCode 215: Kth Largest Element in an Array",
              "LeetCode 703: Kth Largest Element in a Stream",
              "LeetCode 347: Top K Frequent Elements"
            ],
            completed: false
          },
        ]
      },
      {
        day: 23,
        tasks: [
          {
            title: "Go: Start concurrent file processing app",
            explanation: "Begin building an application that processes files concurrently.",
            exercise: "Use goroutines and channels to read multiple files simultaneously.",
            goals: "Apply Go's concurrency features to a practical project.",
            completed: false
          },
          {
            title: "Rust: Introduction to macros",
            explanation: "Learn how macros work in Rust and how to write them.",
            exercise: "Write a simple macro to avoid code repetition.",
            goals: "Understand the power and use cases of macros in Rust.",
            completed: false
          },
          {
            title: "DS/Algo: Tries - Implement a trie",
            explanation: "Learn about trie data structures for efficient string manipulation.",
            exercise: "Implement a trie and use it for prefix searches.",
            goals: "Understand how tries work and their applications.",
            leetcode: [
              "LeetCode 208: Implement Trie (Prefix Tree)",
              "LeetCode 211: Design Add and Search Words Data Structure",
              "LeetCode 212: Word Search II"
            ],
            completed: false
          },
        ]
      },
      {
        day: 24,
        tasks: [
          {
            title: "Go: Continue building your app",
            explanation: "Enhance your concurrent file processing application.",
            exercise: "Implement error handling and logging.",
            goals: "Improve application robustness.",
            completed: false
          },
          {
            title: "Rust: Explore unsafe Rust",
            explanation: "Learn about unsafe code and when to use it.",
            exercise: "Write a function using raw pointers (with caution).",
            goals: "Understand Rust's safety guarantees and how to bypass them responsibly.",
            completed: false
          },
          {
            title: "DS/Algo: Graph Algorithms - Dijkstra's algorithm",
            explanation: "Learn how to find the shortest path in a weighted graph.",
            exercise: "Implement Dijkstra's algorithm.",
            goals: "Understand shortest path algorithms.",
            leetcode: [
              "LeetCode 743: Network Delay Time",
              "LeetCode 787: Cheapest Flights Within K Stops",
              "LeetCode 1631: Path With Minimum Effort"
            ],
            completed: false
          },
        ]
      },
      {
        day: 25,
        tasks: [
          {
            title: "Go: Final touches on your application",
            explanation: "Finalize your concurrent application.",
            exercise: "Optimize performance and refactor code for clarity.",
            goals: "Deliver a polished and efficient application.",
            completed: false
          },
          {
            title: "Rust: Build a web service",
            explanation: "Use the warp or actix-web crate to build a web service in Rust.",
            exercise: "Handle HTTP requests and implement basic routing.",
            goals: "Apply Rust skills to web development.",
            completed: false
          },
          {
            title: "DS/Algo: Advanced Topics - Segment trees",
            explanation: "Learn about segment trees for range queries.",
            exercise: "Implement a segment tree for range sum queries.",
            goals: "Understand advanced data structures.",
            leetcode: [
              "LeetCode 307: Range Sum Query - Mutable",
              "LeetCode 732: My Calendar III",
              "LeetCode 218: The Skyline Problem"
            ],
            completed: false
          },
        ]
      },
      {
        day: 26,
        tasks: [
          {
            title: "Go: Code review and optimization",
            explanation: "Review your code for potential improvements.",
            exercise: "Use profiling tools to identify bottlenecks.",
            goals: "Optimize code performance and quality.",
            completed: false
          },
          {
            title: "Rust: Code review and optimization",
            explanation: "Refine your Rust projects for better performance.",
            exercise: "Apply best practices and idiomatic Rust patterns.",
            goals: "Enhance code efficiency and maintainability.",
            completed: false
          },
          {
            title: "DS/Algo: Revision of challenging topics",
            explanation: "Revisit complex data structures and algorithms.",
            exercise: "Solve problems from topics you found difficult.",
            goals: "Strengthen understanding and problem-solving skills.",
            leetcode: [
              "Reattempt previous challenging LeetCode problems",
              "LeetCode 224: Basic Calculator",
              "LeetCode 42: Trapping Rain Water"
            ],
            completed: false
          },
        ]
      },
      {
        day: 27,
        tasks: [
          {
            title: "Go: Learn about Go modules",
            explanation: "Understand dependency management using Go modules.",
            exercise: "Convert your projects to use Go modules.",
            goals: "Manage project dependencies effectively.",
            completed: false
          },
          {
            title: "Rust: Learn about publishing crates",
            explanation: "Understand how to publish Rust crates to crates.io.",
            exercise: "Prepare a small crate for publishing (do not publish yet).",
            goals: "Learn the process of sharing Rust libraries.",
            completed: false
          },
          {
            title: "DS/Algo: Mock interview practice",
            explanation: "Simulate coding interviews to test your skills.",
            exercise: "Time yourself solving problems and explain your thought process.",
            goals: "Prepare for technical interviews.",
            leetcode: [
              "LeetCode 295: Find Median from Data Stream",
              "LeetCode 146: LRU Cache",
              "LeetCode 208: Implement Trie (Prefix Tree)"
            ],
            completed: false
          },
        ]
      },
      {
        day: 28,
        tasks: [
          {
            title: "Go: Deployment strategies",
            explanation: "Learn how to deploy Go applications.",
            exercise: "Deploy your web service locally or on a cloud platform.",
            goals: "Understand application deployment processes.",
            completed: false
          },
          {
            title: "Rust: Packaging and distribution",
            explanation: "Learn how to create release builds and distribute Rust applications.",
            exercise: "Create a release build of your project.",
            goals: "Prepare Rust applications for production use.",
            completed: false
          },
          {
            title: "DS/Algo: Final assessment",
            explanation: "Test your cumulative knowledge with a complex problem.",
            exercise: "Attempt a problem that combines multiple data structures and algorithms.",
            goals: "Assess your overall understanding and readiness.",
            leetcode: [
              "LeetCode 76: Minimum Window Substring",
              "LeetCode 23: Merge k Sorted Lists",
              "LeetCode 297: Serialize and Deserialize Binary Tree"
            ],
            completed: false
          },
        ]
      },
    ]
  },
  // Week 5
  {
    week: 5,
    days: [
      {
        day: 29,
        tasks: [
          {
            title: "Go: Reflect on your learning",
            explanation: "Review all Go concepts you've learned.",
            exercise: "Write a summary of key Go features and how you can apply them.",
            goals: "Solidify your understanding and identify areas for improvement.",
            completed: false
          },
          {
            title: "Rust: Reflect on your journey",
            explanation: "Review all Rust concepts you've covered.",
            exercise: "Discuss Rust's ownership model and how it differs from other languages you know.",
            goals: "Consolidate your knowledge and plan for advanced topics.",
            completed: false
          },
          {
            title: "DS/Algo: Review session",
            explanation: "Go over all data structures and algorithms studied.",
            exercise: "Create mind maps or summaries for each topic.",
            goals: "Prepare for future problem-solving by reinforcing your foundation.",
            leetcode: [
              "Revisit previous LeetCode problems",
              "Attempt new problems from topics you find challenging",
              "LeetCode 42: Trapping Rain Water"
            ],
            completed: false
          },
        ]
      },
      {
        day: 30,
        tasks: [
          {
            title: "Go: Plan for future projects",
            explanation: "Identify areas in Go you'd like to explore further.",
            exercise: "List potential projects or open-source contributions you can work on.",
            goals: "Set actionable goals for continued learning.",
            completed: false
          },
          {
            title: "Rust: Plan for advanced topics",
            explanation: "Explore advanced Rust features you'd like to learn.",
            exercise: "Create a roadmap for learning topics like concurrency and unsafe Rust.",
            goals: "Chart a path for mastering Rust.",
            completed: false
          },
          {
            title: "DS/Algo: Future roadmap",
            explanation: "Identify algorithms and data structures not yet covered.",
            exercise: "Plan a schedule to learn advanced topics like graphs, DP, and more.",
            goals: "Ensure continuous growth in your algorithmic skills.",
            leetcode: [
              "Identify advanced LeetCode problems to tackle",
              "Set goals for competitive programming",
              "LeetCode 127: Word Ladder"
            ],
            completed: false
          },
        ]
      },
    ]
  },
];


export function App() {
  const [selectedDay, setSelectedDay] = useState(null)
  const [expandedTask, setExpandedTask] = useState(null)
  const [notes, setNotes] = useState({})

  useEffect(() => {
    const savedProgress = JSON.parse(localStorage.getItem('roadmapProgress'))
    if (savedProgress) {
      // Update roadmap with saved progress
      roadmap.forEach((week, weekIndex) => {
        week.days.forEach((day, dayIndex) => {
          day.tasks.forEach((task, taskIndex) => {
            if (savedProgress[weekIndex] &&
              savedProgress[weekIndex][dayIndex] &&
              savedProgress[weekIndex][dayIndex][taskIndex] !== undefined) {
              task.completed = savedProgress[weekIndex][dayIndex][taskIndex]
            }
          })
        })
      })
    }
    const savedNotes = JSON.parse(localStorage.getItem('taskNotes'))
    if (savedNotes) {
      setNotes(savedNotes)
    }
  }, [])

  const saveProgress = () => {
    const progress = roadmap.map(week =>
      week.days.map(day =>
        day.tasks.map(task => task.completed)
      )
    )
    localStorage.setItem('roadmapProgress', JSON.stringify(progress))
  }

  const saveNotes = () => {
    localStorage.setItem('taskNotes', JSON.stringify(notes))
  }

  const toggleTaskCompletion = (weekIndex, dayIndex, taskIndex) => {
    roadmap[weekIndex].days[dayIndex].tasks[taskIndex].completed =
      !roadmap[weekIndex].days[dayIndex].tasks[taskIndex].completed
    saveProgress()
    // Force a re-render
    setSelectedDay({ ...selectedDay })
  }

  const updateNote = (weekIndex, dayIndex, taskIndex, note) => {
    const noteKey = `${weekIndex}-${dayIndex}-${taskIndex}`
    setNotes(prevNotes => ({
      ...prevNotes,
      [noteKey]: note
    }))
    saveNotes()
  }

  return (
    <div className="flex h-screen bg-background text-foreground">
      <motion.div
        className="w-64 border-r p-4 bg-card"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-2xl font-bold mb-4">Daily Tasks</h2>
        <ScrollArea className="h-[calc(100vh-100px)]">
          {roadmap.map((week, weekIndex) => (
            <div key={weekIndex} className="mb-4">
              <h3 className="text-lg font-semibold mb-2">Week {week.week}</h3>
              {week.days.map((day, dayIndex) => (
                <Button
                  key={dayIndex}
                  variant="ghost"
                  className="w-full justify-start mb-1"
                  onClick={() => setSelectedDay({ weekIndex, dayIndex })}
                >
                  <span className="mr-2">
                    {day.tasks.every(task => task.completed) ? (
                      <CheckCircle2 className="w-4 h-4 text-green-500" />
                    ) : (
                      <Circle className="w-4 h-4" />
                    )}
                  </span>
                  Day {day.day}
                </Button>
              ))}
            </div>
          ))}
        </ScrollArea>
      </motion.div>
      <motion.div
        className="flex-1 p-4 overflow-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <AnimatePresence mode="wait">
          {selectedDay && (
            <motion.div
              key={`${selectedDay.weekIndex}-${selectedDay.dayIndex}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <h2 className="text-2xl font-bold mb-4">
                Week {roadmap[selectedDay.weekIndex].week}, Day {roadmap[selectedDay.weekIndex].days[selectedDay.dayIndex].day}
              </h2>
              {roadmap[selectedDay.weekIndex].days[selectedDay.dayIndex].tasks.map((task, taskIndex) => (
                <Card key={taskIndex} className="mb-4">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Checkbox
                        checked={task.completed}
                        onCheckedChange={() => toggleTaskCompletion(selectedDay.weekIndex, selectedDay.dayIndex, taskIndex)}
                        className="mr-2"
                      />
                      {task.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p><strong>Explanation:</strong> {task.explanation}</p>
                    <p><strong>Exercise:</strong> {task.exercise}</p>
                    <p><strong>Goals:</strong> {task.goals}</p>
                    {task.leetcode && (
                      <div>
                        <strong>LeetCode Problems:</strong>
                        <ul className="list-disc list-inside">
                          {task.leetcode.map((problem, index) => (
                            <li key={index}>{problem}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                    <Textarea
                      placeholder="Add notes or remarks..."
                      value={notes[`${selectedDay.weekIndex}-${selectedDay.dayIndex}-${taskIndex}`] || ''}
                      onChange={(e) => updateNote(selectedDay.weekIndex, selectedDay.dayIndex, taskIndex, e.target.value)}
                      className="mt-4"
                    />
                  </CardContent>
                </Card>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  )
}