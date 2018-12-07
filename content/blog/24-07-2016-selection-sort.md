+++
date = "2016-07-24T15:16:54+05:30"
draft = false
title = "CS101: Selection Sort"
description = "CS101: Introduction to Selection sort and difference between Arrays and Linked lists."
+++

## Memory
Computer memory can be thought of as a huge chest with hundreds and thousands of drawers. Each drawer can store some data. Whenever you store something in a drawer, you get back an address pointing to it. You can use this address to access the content inside it or to manipulate what's already in there. If you are storing something in memory, your computer will look for free space and give you an address where it can save it. However, if you want to save a collection of related items you would either use arrays or linked lists.

## Arrays and Linked Lists
Both arrays and linked lists have unique properties and you would use each of them based on the operation you are performing. You could use one instead of the other, but there could be severe performance implications in some cases and it's up to you to make the right choice.

In arrays all the data is stored contiguously, all the items in the collection sit next to each other. If you have a list of three numbers and you want to add a fourth one, in an array it would be placed next to the third item. However, there is a caveat to this, what if the memory location the fourth item was going to take up is already used by someone else. In such scenarios the whole array moves to a memory location where all four items could be placed one after another. This makes adding an item to an array a relatively slow process. The work around this problem is to pre-allocate memory for an array so you don't have to move it to a different location when you run out of contiguous spaces. But then you would be consuming space that could be used by some other process and what if you crossed the pre-allocated bound and needed to add more items. This isn't a perfect solution to the problem.  Arrays are good by reading random data, but are slow at manipulating (inserting/deleting).

Linked lists in contrast, are fast at adding and deleting items, but slow at reading. This is because of the way they are implemented. Unlike arrays, you don't need items sitting next to each other in memory. Each memory location is split into two parts: one containing the data you want to store in it and the other part containing the memory address of the next item in the list. This way you could have items spread throughout the memory without worrying about contiguous space. If you want to jump to the last item in a linked list, you would have to traverse through all the items that come before it because they would eventually point to it: first item has an address to the second item, second item has a memory address to third and so on.  Adding new item to a linked list is quite simple, you put the item anywhere in the memory and point to it's memory address in the previous location. Similarly, when deleting an item, you just delete the item and update the memory location of the previous item. You don't need to move the list every time you add or remove items. Linked lists are fast adding inserting and deleting items, but are slow at reading random items.

In some scenarios, neither arrays or linked lists are useful. In such cases you could combine both of them together to create hybrid data structures that share properties from array and linked list.

## Selection Sort
Selection sort like other sorting algorithms is used to sort an unordered list of items. Selection sort takes a list of n unordered items and loops over it `n * n` times. Every time it checks if the current number is smaller than the previous and stores a reference to it and if it find a smaller item it updates the reference. This is done to every member of the list. As you find the smallest number you add it to a new list and remove it from the original one.  The loop continues until there are no items in the original list left and then you return the new list which will be sorted. The is represented using Big O notation as O(n * n) or O(n<sup>2</sup>).

## Code Example
{{<highlight python>}}
def findSmallest(arr):
  smallest = arr[0]
  smallest_index = 0
  for i in range(1, len(arr)):
    if arr[i] < smallest:
    smallest = arr[i]
    smallest_index = i
    return smallest_index

def selectionSort(arr):
  newArr = []
  for i in range(len(arr)):
    smallest = findSmallest(arr)
    newArr.append(arr.pop(smallest))
  return newArr

print selectionSort([2,3,4,6,7,1,9])
// [1,2,3,4,5,7,9]
{{</highlight>}}

Selection sort isn't the fastest algorithm, but it is a great primer to understanding how the faster alternatives like Quick sort work. Other algorithms like Binary search require unsorted lists to be sorted first; this is where sorting algorithms like Selection sort come in.
