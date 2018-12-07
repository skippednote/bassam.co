---
date: "2016-07-23"
title: "CS101: Binary Search"
path: "/cs101-binary-search"
---

## Preface

A few years back, I was studying as a computer science student (Bachelors in Information Technology) and like every other student in my class I was ill-informed that whatever they taught at college was outdated, impractical, and useless to a web developer. To me they were teaching low level languages like C and C++ which as a web developer, I would never touch with a ten foot pole or microprocessors that weren't powerful enough to run todays feature phones. After working as in this industry for more than 5 years I can't tell you how wrong I and everyone else who badmouthed college education was.

I started freelancing while I was still in the first semester of my graduation and after few semesters I joined [Axelerant](https://www.axelerant.com) to work as a full time Front-end Developer. So all the effort I spent on studies was just a few days before exams. Now, after soo many years I'm taking time to do a CS101 on my own with the help of books, MOOCs and other online resource.

## Algorithms

An algorithm is a set of instructions for accomplishing a task. However the term algorithm is used mostly to describe code that is fast or solves interesting problems. Algorithms come in handy when solving difficult problems that need to be executed faster and in the shortest number of steps.

## Binary Search

Binary search is the fastest way to find an item in a sorted list. So if you are looking for a name in a phone book or checking if a username exists in a database, you would use Binary search over other algorithms. If the item you are searching for is found in the list, Binary search would return the index of the item else it would return null. Binary search gets faster as the number of items we are searching increases.

Let's say you are looking for a person named _Zack_ in the phone book, you could either start from the first page and one by one go through all the names until you find what you are looking for. This is called **Simple search**. So if _Zack_ was the last entry in the phone book and the total number of names in the phone book was 350,000, well then you have to go through 350,000 names before you could find what you were looking for. This however is a worst case scenario, in some cases, what you are looking for might come up as a first item of the list you are searching. But when talking about the algorithms you always consider the worst case scenario.

This can be solved in a magnitude smaller number of steps using Binary search. With Binary search you take a list and instead of starting at the beginning, you start at the middle every time. If the item you are looking for is greater than what you found in the middle of the list, you discard everything from start up to that middle item. For the opposite case, if the item you are looking for is smaller than what you found in the middle, you discard everything from the item found in middle and above. Using Binary search with every step you reduce the scope of your search by 50 percent. Compared to Simple search where it took 350,000 steps to find the name in the phone book, it will take roughly around 19 steps which are lot faster.

## Code example

```python
def binary_search(list, item):
low = 0
high = len(list) - 1

    while (low <= high):
        mid = (low + high) / 2
        if (list[mid] == item):
            return mid
        elif (list[mid] > item):
            high = mid - 1
        else:
            low = mid + 1
    return None

print binary_search([1,2,3,4,5,6,7,8,9,10], 10)
```

You start by creating a function called `binary_search` which takes a list and an item you are looking for in the list. Then you define the start and the highest value of the list. You loop over the list until you find the index of the item you are looking for or you return nil, each time the condition isn't met you divide the list in half by either changing the value of high to `mid - 1` or increasing the value of low to `mid + 1`.

## Big O

Big O is a special notation used to tell how fast your algorithm is. Time isn't a useful metric when measuring algorithms. Take Binary search, for example, it gets faster as list of items grows bigger. Big O lets us compare algorithms based on the number of operation it takes to complete a procedure. The smaller the number, faster the algorithm.

Say an operation takes one millisecond to complete and we have to look through a list of one billion items. If we are using Simple search that would take us around eleven days, but if we choose Binary search we could complete the procedure in 32 milliseconds.

We use Logrithm to represent this:

- Simple Search: O(n)  
  1 billion items == 1 billion operations
- Binary Search: O(log<sub>2</sub>n)  
  1 billion items == ~32 operations

As the number of items in the list grows algorithm could get faster, move at a steady pace or get slower exponentially. Based on the problem you are solving you will choose the appropriate algorithm. I'll be covering more algorithms in future, which target specific problems like Binary searching is useful for finding an item is a large list.
