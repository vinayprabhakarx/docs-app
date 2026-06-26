---
title: java collections framework
---

# Java Collections Framework - Complete Notes

---

# Table of Contents

* [1. Introduction](#1-introduction)
  * [1.1 What is the Java Collections Framework](#11-what-is-the-java-collections-framework)
  * [1.2 Hierarchy Overview](#12-hierarchy-overview)
  * [1.3 Core Interfaces Summary](#13-core-interfaces-summary)
* [2. Iterable and Iterator Interfaces](#2-iterable-and-iterator-interfaces)
  * [2.1 Iterable Interface](#21-iterable-interface)
  * [2.2 Iterator Interface](#22-iterator-interface)
  * [2.3 ListIterator Interface](#23-listiterator-interface)
* [3. Collection Interface](#3-collection-interface)
  * [3.1 Core Methods](#31-core-methods)
* [4. List Interface](#4-list-interface)
  * [4.1 List-Specific Methods](#41-list-specific-methods)
  * [4.2 ArrayList](#42-arraylist)
  * [4.3 LinkedList](#43-linkedlist)
  * [4.4 Vector](#44-vector)
  * [4.5 Stack](#45-stack)
  * [4.6 ArrayList vs LinkedList vs Vector](#46-arraylist-vs-linkedlist-vs-vector)
* [5. Queue Interface](#5-queue-interface)
  * [5.1 Queue Methods - Throwing vs Non-Throwing](#51-queue-methods---throwing-vs-non-throwing)
  * [5.2 PriorityQueue](#52-priorityqueue)
  * [5.3 ArrayDeque as Queue](#53-arraydeque-as-queue)
  * [5.4 LinkedList as Queue](#54-linkedlist-as-queue)
* [6. Deque Interface](#6-deque-interface)
  * [6.1 Deque Methods](#61-deque-methods)
  * [6.2 ArrayDeque vs LinkedList as Deque](#62-arraydeque-vs-linkedlist-as-deque)
* [7. Set Interface](#7-set-interface)
  * [7.1 HashSet](#71-hashset)
  * [7.2 LinkedHashSet](#72-linkedhashset)
  * [7.3 TreeSet](#73-treeset)
  * [7.4 EnumSet](#74-enumset)
  * [7.5 HashSet vs LinkedHashSet vs TreeSet](#75-hashset-vs-linkedhashset-vs-treeset)
* [8. SortedSet and NavigableSet](#8-sortedset-and-navigableset)
  * [8.1 SortedSet Methods](#81-sortedset-methods)
  * [8.2 NavigableSet Methods](#82-navigableset-methods)
* [9. Map Interface](#9-map-interface)
  * [9.1 Map Methods](#91-map-methods)
  * [9.2 HashMap](#92-hashmap)
  * [9.3 LinkedHashMap](#93-linkedhashmap)
  * [9.4 TreeMap](#94-treemap)
  * [9.5 Hashtable](#95-hashtable)
  * [9.6 EnumMap](#96-enummap)
  * [9.7 IdentityHashMap](#97-identityhashmap)
  * [9.8 WeakHashMap](#98-weakhashmap)
  * [9.9 HashMap vs LinkedHashMap vs TreeMap vs Hashtable](#99-hashmap-vs-linkedhashmap-vs-treemap-vs-hashtable)
* [10. SortedMap and NavigableMap](#10-sortedmap-and-navigablemap)
  * [10.1 SortedMap Methods](#101-sortedmap-methods)
  * [10.2 NavigableMap Methods](#102-navigablemap-methods)
* [11. Concurrent Collections](#11-concurrent-collections)
  * [11.1 ConcurrentHashMap](#111-concurrenthashmap)
  * [11.2 CopyOnWriteArrayList](#112-copyonwritearraylist)
  * [11.3 CopyOnWriteArraySet](#113-copyonwritearrayset)
  * [11.4 ConcurrentLinkedQueue](#114-concurrentlinkedqueue)
  * [11.5 BlockingQueue Implementations](#115-blockingqueue-implementations)
  * [11.6 ConcurrentSkipListMap and ConcurrentSkipListSet](#116-concurrentskiplistmap-and-concurrentskiplistset)
* [12. Collections Utility Class](#12-collections-utility-class)
  * [12.1 Sorting and Searching](#121-sorting-and-searching)
  * [12.2 Min, Max and Frequency](#122-min-max-and-frequency)
  * [12.3 Modification Methods](#123-modification-methods)
  * [12.4 Unmodifiable Wrappers](#124-unmodifiable-wrappers)
  * [12.5 Synchronized Wrappers](#125-synchronized-wrappers)
  * [12.6 Singleton and Empty Collections](#126-singleton-and-empty-collections)
* [13. Arrays Utility Class](#13-arrays-utility-class)
* [14. Comparable and Comparator](#14-comparable-and-comparator)
  * [14.1 Comparable Interface](#141-comparable-interface)
  * [14.2 Comparator Interface](#142-comparator-interface)
  * [14.3 Comparable vs Comparator](#143-comparable-vs-comparator)
* [15. Choosing the Right Collection](#15-choosing-the-right-collection)

---

## 1. Introduction

### 1.1 What is the Java Collections Framework

The Java Collections Framework (JCF) is a unified architecture for representing and manipulating collections of objects. It was introduced in Java 1.2 and resides in the `java.util` package. It provides:

- A set of **interfaces** that define the types of collections (List, Set, Map, Queue, etc.)
- **Implementations** (concrete classes) of those interfaces
- **Algorithms** (utility methods in `Collections` and `Arrays` classes)

Before JCF, Java had `Vector`, `Stack`, `Hashtable`, and `Properties` which were not part of a unified framework. JCF standardized these.

### 1.2 Hierarchy Overview

```
java.lang.Iterable
    |
java.util.Collection
    |
    +-- List          --> ArrayList, LinkedList, Vector, Stack
    |
    +-- Queue         --> PriorityQueue, ArrayDeque, LinkedList
    |       |
    |       +-- Deque --> ArrayDeque, LinkedList
    |
    +-- Set           --> HashSet, LinkedHashSet
            |
            +-- SortedSet --> NavigableSet --> TreeSet

java.util.Map (separate hierarchy - does NOT extend Collection)
    |
    +-- SortedMap --> NavigableMap --> TreeMap
    |
    Implementations: HashMap, LinkedHashMap, TreeMap, Hashtable, EnumMap, WeakHashMap
```

### 1.3 Core Interfaces Summary

| Interface | Description | Allows Duplicates | Ordered | Sorted |
|-----------|-------------|-------------------|---------|--------|
| `Collection` | Root interface | Depends on subtype | Depends | No |
| `List` | Ordered sequence | Yes | Yes (by index) | No |
| `Set` | Unique elements | No | Depends | Depends |
| `SortedSet` | Sorted unique elements | No | Yes | Yes |
| `Queue` | FIFO ordering | Yes | Yes (FIFO) | No |
| `Deque` | Double-ended queue | Yes | Yes | No |
| `Map` | Key-value pairs | Keys: No, Values: Yes | Depends | Depends |
| `SortedMap` | Sorted key-value pairs | Keys: No | Yes (by key) | Yes |

---

## 2. Iterable and Iterator Interfaces

### 2.1 Iterable Interface

`java.lang.Iterable<T>` is the root of the collection hierarchy. Any class implementing it can be used in a for-each loop.

```java
public interface Iterable<T> {
    Iterator<T> iterator();                              // Returns an iterator
    default void forEach(Consumer<? super T> action);   // Java 8 - iterates and applies action
    default Spliterator<T> spliterator();               // Java 8 - for parallel iteration
}
```

**Example:**
```java
List<String> list = List.of("A", "B", "C");
list.forEach(s -> System.out.println(s));  // uses forEach
```

### 2.2 Iterator Interface

`java.util.Iterator<E>` provides a way to traverse a collection sequentially. It supports safe removal during iteration.

```java
public interface Iterator<E> {
    boolean hasNext();           // Returns true if more elements exist
    E next();                    // Returns next element, advances cursor
    default void remove();       // Removes last element returned by next() - optional operation
    default void forEachRemaining(Consumer<? super E> action); // Java 8 - applies action to remaining elements
}
```

**Important notes:**
- Calling `remove()` without calling `next()` first throws `IllegalStateException`.
- Modifying a collection while iterating (except via `iterator.remove()`) throws `ConcurrentModificationException` - this is called **fail-fast** behavior.

**Example:**
```java
List<Integer> list = new ArrayList<>(Arrays.asList(1, 2, 3, 4));
Iterator<Integer> it = list.iterator();
while (it.hasNext()) {
    int val = it.next();
    if (val % 2 == 0) it.remove(); // safe removal
}
// list is now [1, 3]
```

### 2.3 ListIterator Interface

`java.util.ListIterator<E>` extends `Iterator` and allows bidirectional traversal, element replacement, and insertion. Only available for `List` implementations.

```java
public interface ListIterator<E> extends Iterator<E> {
    // Forward traversal (inherited)
    boolean hasNext();
    E next();
    int nextIndex();         // Index of element that would be returned by next()

    // Backward traversal
    boolean hasPrevious();
    E previous();            // Returns previous element, moves cursor backward
    int previousIndex();     // Index of element that would be returned by previous()

    // Modification
    void remove();           // Removes last element returned by next() or previous()
    void set(E e);           // Replaces last element returned by next() or previous()
    void add(E e);           // Inserts element before the element that would be returned by next()
}
```

**Example:**
```java
List<String> list = new ArrayList<>(Arrays.asList("A", "B", "C"));
ListIterator<String> lit = list.listIterator(list.size()); // start from end
while (lit.hasPrevious()) {
    System.out.print(lit.previous() + " "); // prints C B A
}
```

---

## 3. Collection Interface

`java.util.Collection<E>` extends `Iterable<E>` and is the root interface for all collections except `Map`.

### 3.1 Core Methods

```java
public interface Collection<E> extends Iterable<E> {

    // Size and emptiness
    int size();                                      // Number of elements
    boolean isEmpty();                               // True if size() == 0

    // Membership
    boolean contains(Object o);                     // True if element exists (uses equals())
    boolean containsAll(Collection<?> c);           // True if all elements of c are present

    // Adding
    boolean add(E e);                               // Adds element; returns true if collection changed
    boolean addAll(Collection<? extends E> c);      // Adds all elements of c

    // Removing
    boolean remove(Object o);                       // Removes single instance of o; returns true if changed
    boolean removeAll(Collection<?> c);             // Removes all elements also in c (set difference)
    boolean retainAll(Collection<?> c);             // Retains only elements also in c (intersection)
    default boolean removeIf(Predicate<? super E> filter); // Java 8 - removes elements matching predicate
    void clear();                                   // Removes all elements

    // Conversion
    Object[] toArray();                             // Returns array of all elements
    <T> T[] toArray(T[] a);                         // Returns typed array; uses a if large enough
    default <T> T[] toArray(IntFunction<T[]> generator); // Java 11 - e.g., toArray(String[]::new)

    // Stream support (Java 8)
    default Stream<E> stream();                     // Returns a sequential Stream
    default Stream<E> parallelStream();             // Returns a parallel Stream

    // Iterator
    Iterator<E> iterator();
    default Spliterator<E> spliterator();
}
```

**Note on `add()` return value:** For a `Set`, `add("x")` returns `false` if "x" already exists. For a `List`, it always returns `true` (duplicate allowed).

---

## 4. List Interface

`java.util.List<E>` extends `Collection` and represents an **ordered sequence** (also called a sequence or array list). Elements are accessible by their integer index (position). Duplicates are allowed.

### 4.1 List-Specific Methods

```java
public interface List<E> extends Collection<E> {

    // Positional access
    E get(int index);                               // Returns element at index
    E set(int index, E element);                    // Replaces element at index; returns old element
    void add(int index, E element);                 // Inserts at index; shifts subsequent elements right
    E remove(int index);                            // Removes element at index; returns it
    boolean addAll(int index, Collection<? extends E> c); // Inserts all at index

    // Search
    int indexOf(Object o);                          // First index of o; -1 if not found
    int lastIndexOf(Object o);                      // Last index of o; -1 if not found

    // Sub-list
    List<E> subList(int fromIndex, int toIndex);    // View of portion [fromIndex, toIndex); NOT a copy

    // Sorting (Java 8)
    default void sort(Comparator<? super E> c);     // Sorts list using comparator (null = natural order)

    // Replacement (Java 8)
    default void replaceAll(UnaryOperator<E> operator); // Replaces each element with result of operator

    // Iterators
    ListIterator<E> listIterator();                 // ListIterator starting at index 0
    ListIterator<E> listIterator(int index);        // ListIterator starting at given index

    // Factory methods (Java 9) - returns unmodifiable list
    static <E> List<E> of(E... elements);
    static <E> List<E> copyOf(Collection<? extends E> coll); // Java 10
}
```

**Important about `subList()`:** The returned list is a **view** (backed by the original). Changes to the subList are reflected in the original list and vice versa. If the original list is structurally modified (size changed) after getting a subList, the subList becomes invalid.

### 4.2 ArrayList

`java.util.ArrayList<E>` is a resizable-array implementation of `List`. It is the most commonly used collection.

**Key characteristics:**
- Backed by an `Object[]` array
- Default initial capacity: 10
- Grows by 50% when full (`newCapacity = oldCapacity + (oldCapacity >> 1)`)
- `size()`, `get()`, `set()`, `iterator()` run in O(1)
- `add(E)` is amortized O(1); `add(int, E)` is O(n) due to shifting
- `remove(int)` and `remove(Object)` are O(n) due to shifting
- `contains()` and `indexOf()` are O(n) (linear scan)
- Not thread-safe

**Additional methods specific to ArrayList:**
```java
ArrayList<String> list = new ArrayList<>();

// Constructors
new ArrayList<>()                        // empty, initial capacity 10
new ArrayList<>(int initialCapacity)     // empty with given initial capacity
new ArrayList<>(Collection<? extends E> c) // populated from collection

// Capacity management
void ensureCapacity(int minCapacity);    // Ensures array is at least minCapacity
void trimToSize();                       // Trims backing array to current size (saves memory)
```

**Example:**
```java
ArrayList<String> list = new ArrayList<>();
list.add("Java");
list.add("Python");
list.add(0, "C++");            // insert at index 0
System.out.println(list.get(1)); // Java
list.remove(Integer.valueOf("Java")); // removes by object, not index
list.sort(Comparator.naturalOrder());
```

### 4.3 LinkedList

`java.util.LinkedList<E>` implements both `List` and `Deque`. Internally a **doubly-linked list**.

**Key characteristics:**
- O(1) for `addFirst()`, `addLast()`, `removeFirst()`, `removeLast()`
- O(n) for `get(int index)` - must traverse from head or tail
- More memory overhead than ArrayList (each node stores prev/next pointers)
- Not thread-safe
- Implements `Deque`, so it can be used as a stack or queue

**Additional methods beyond List (from Deque/Queue):**
```java
// Adding
void addFirst(E e);         // Inserts at beginning
void addLast(E e);          // Inserts at end (same as add(e))
boolean offerFirst(E e);    // Inserts at beginning (returns false if fails - never here)
boolean offerLast(E e);     // Inserts at end

// Removing
E removeFirst();            // Removes and returns first; throws NoSuchElementException if empty
E removeLast();             // Removes and returns last; throws NoSuchElementException if empty
E pollFirst();              // Removes and returns first; returns null if empty
E pollLast();               // Removes and returns last; returns null if empty

// Peeking
E getFirst();               // Returns first without removing; throws if empty
E getLast();                // Returns last without removing; throws if empty
E peekFirst();              // Returns first without removing; returns null if empty
E peekLast();               // Returns last without removing; returns null if empty

// Stack operations
void push(E e);             // Same as addFirst(e)
E pop();                    // Same as removeFirst()
E peek();                   // Same as peekFirst()

// Descending iterator
Iterator<E> descendingIterator(); // Iterates from tail to head
```

### 4.4 Vector

`java.util.Vector<E>` is a legacy synchronized resizable-array list. It is the thread-safe counterpart of ArrayList.

**Key characteristics:**
- All methods are `synchronized` - thread-safe but slow due to locking overhead
- Default initial capacity: 10
- Grows by 100% (doubles) when full (unlike ArrayList which grows by 50%)
- Prefer `Collections.synchronizedList(new ArrayList<>())` or `CopyOnWriteArrayList` in modern code
- Legacy class - avoid in new code

```java
// Constructors
new Vector<>()
new Vector<>(int initialCapacity)
new Vector<>(int initialCapacity, int capacityIncrement) // custom growth amount
new Vector<>(Collection<? extends E> c)

// Legacy-specific methods (older names, same behavior as List methods)
void addElement(E obj);         // same as add(E)
void insertElementAt(E obj, int index); // same as add(int, E)
E elementAt(int index);         // same as get(int)
void setElementAt(E obj, int index);    // same as set(int, E)
void removeElement(Object obj); // same as remove(Object)
void removeElementAt(int index);// same as remove(int)
void removeAllElements();       // same as clear()
int indexOf(Object o, int index);       // search starting from index
int lastIndexOf(Object o, int index);   // search backwards from index
Enumeration<E> elements();      // legacy iterator (pre-Iterator)
void copyInto(Object[] anArray);// copies elements into array
int capacity();                 // returns current array capacity
void ensureCapacity(int minCapacity);
void trimToSize();
E firstElement();               // same as get(0)
E lastElement();                // same as get(size()-1)
```

### 4.5 Stack

`java.util.Stack<E>` extends `Vector` and represents a LIFO (Last-In-First-Out) stack.

**Key characteristics:**
- Thread-safe (inherits from Vector)
- Legacy class - prefer `Deque` (specifically `ArrayDeque`) for stack operations in modern code
- All Vector methods are available

```java
E push(E item);             // Pushes item onto top of stack; returns item
E pop();                    // Removes and returns top item; throws EmptyStackException if empty
E peek();                   // Returns top item without removing; throws EmptyStackException if empty
boolean empty();            // Returns true if stack has no elements
int search(Object o);       // Returns 1-based position from top; -1 if not found
```

**Example - why to prefer ArrayDeque over Stack:**
```java
// Legacy way - Stack (synchronized, slow)
Stack<Integer> stack = new Stack<>();
stack.push(1); stack.pop();

// Modern way - ArrayDeque as stack (not synchronized, faster)
Deque<Integer> stack = new ArrayDeque<>();
stack.push(1); stack.pop();
```

### 4.6 ArrayList vs LinkedList vs Vector

| Feature | ArrayList | LinkedList | Vector |
|---------|-----------|------------|--------|
| Internal structure | Dynamic array | Doubly-linked list | Dynamic array |
| get(index) | O(1) | O(n) | O(1) |
| add(end) | Amortized O(1) | O(1) | Amortized O(1) |
| add(middle) | O(n) | O(n) for find, O(1) for insert | O(n) |
| remove(index) | O(n) | O(n) for find, O(1) for remove | O(n) |
| Memory | Less (only data) | More (prev/next pointers) | Less |
| Thread-safe | No | No | Yes (synchronized) |
| Growth factor | 1.5x | N/A | 2x |
| Null allowed | Yes | Yes | Yes |
| Use case | Random access, iteration | Frequent insert/remove at ends | Legacy thread-safe |

---

## 5. Queue Interface

`java.util.Queue<E>` extends `Collection` and represents a collection designed for **FIFO** (First-In-First-Out) ordering. Some implementations are priority-based or LIFO.

### 5.1 Queue Methods - Throwing vs Non-Throwing

Queue provides two sets of methods for each operation. One set throws exceptions on failure; the other returns special values.

| Operation | Throws Exception | Returns Special Value |
|-----------|------------------|-----------------------|
| Insert | `add(e)` - throws `IllegalStateException` if full | `offer(e)` - returns `false` if full |
| Remove head | `remove()` - throws `NoSuchElementException` if empty | `poll()` - returns `null` if empty |
| Examine head | `element()` - throws `NoSuchElementException` if empty | `peek()` - returns `null` if empty |

```java
public interface Queue<E> extends Collection<E> {
    boolean add(E e);       // Inserts element; throws IllegalStateException if capacity exceeded
    boolean offer(E e);     // Inserts element; returns false if not possible

    E remove();             // Retrieves and removes head; throws NoSuchElementException if empty
    E poll();               // Retrieves and removes head; returns null if empty

    E element();            // Retrieves but does not remove head; throws NoSuchElementException if empty
    E peek();               // Retrieves but does not remove head; returns null if empty
}
```

**Rule of thumb:** Use `offer()`, `poll()`, `peek()` (the non-throwing variants) in most cases to avoid exception handling overhead.

### 5.2 PriorityQueue

`java.util.PriorityQueue<E>` is an unbounded priority queue based on a **min-heap**. Elements are ordered by natural ordering or a given `Comparator`.

**Key characteristics:**
- Head of queue is the **smallest** element (natural ordering)
- Does NOT guarantee order of elements with equal priority
- Does NOT allow `null` elements
- Not thread-safe
- `offer()`, `poll()`, `peek()` are O(log n); `contains()` and `remove(Object)` are O(n); `size()` is O(1)
- Default initial capacity: 11; grows automatically

```java
// Constructors
new PriorityQueue<>()                               // natural order, initial capacity 11
new PriorityQueue<>(int initialCapacity)
new PriorityQueue<>(Comparator<? super E> comparator)
new PriorityQueue<>(int initialCapacity, Comparator<? super E> comparator)
new PriorityQueue<>(Collection<? extends E> c)
new PriorityQueue<>(PriorityQueue<? extends E> c)
new PriorityQueue<>(SortedSet<? extends E> c)

// Methods (inherits all Queue methods, plus)
Comparator<? super E> comparator();  // Returns comparator, or null if natural ordering
```

**Example - max-heap:**
```java
PriorityQueue<Integer> maxHeap = new PriorityQueue<>(Comparator.reverseOrder());
maxHeap.offer(3); maxHeap.offer(1); maxHeap.offer(5);
System.out.println(maxHeap.poll()); // 5 (largest first)
```

### 5.3 ArrayDeque as Queue

`ArrayDeque` can be used as a Queue using `offerLast()`/`pollFirst()` (or simply `offer()`/`poll()`). It is generally **faster** than `LinkedList` when used as a queue. See Section 6 for full details.

### 5.4 LinkedList as Queue

`LinkedList` implements `Queue` and can be used as a FIFO queue. `offer()` adds to the tail, `poll()` removes from the head.

```java
Queue<String> queue = new LinkedList<>();
queue.offer("first");
queue.offer("second");
queue.poll();  // returns "first"
```

---

## 6. Deque Interface

`java.util.Deque<E>` (Double-Ended Queue) extends `Queue` and supports element insertion and removal at both ends. It can function as a **queue** (FIFO) or a **stack** (LIFO).

### 6.1 Deque Methods

```java
public interface Deque<E> extends Queue<E> {

    // Insert at front
    void addFirst(E e);         // throws IllegalStateException if full
    boolean offerFirst(E e);    // returns false if full

    // Insert at back
    void addLast(E e);          // throws IllegalStateException if full (same as add(e))
    boolean offerLast(E e);     // returns false if full (same as offer(e))

    // Remove from front
    E removeFirst();            // throws NoSuchElementException if empty (same as remove())
    E pollFirst();              // returns null if empty (same as poll())

    // Remove from back
    E removeLast();             // throws NoSuchElementException if empty
    E pollLast();               // returns null if empty

    // Examine front
    E getFirst();               // throws NoSuchElementException if empty (same as element())
    E peekFirst();              // returns null if empty (same as peek())

    // Examine back
    E getLast();                // throws NoSuchElementException if empty
    E peekLast();               // returns null if empty

    // Stack operations (treat deque as LIFO stack)
    void push(E e);             // same as addFirst(e)
    E pop();                    // same as removeFirst()
    E peek();                   // same as peekFirst()

    // Remove specific element
    boolean removeFirstOccurrence(Object o);  // removes first occurrence
    boolean removeLastOccurrence(Object o);   // removes last occurrence

    // Descending iterator
    Iterator<E> descendingIterator(); // iterates from tail to head
}
```

**Deque as Queue mapping:**

| Queue method | Equivalent Deque method |
|---|---|
| `add(e)` | `addLast(e)` |
| `offer(e)` | `offerLast(e)` |
| `remove()` | `removeFirst()` |
| `poll()` | `pollFirst()` |
| `element()` | `getFirst()` |
| `peek()` | `peekFirst()` |

### 6.2 ArrayDeque vs LinkedList as Deque

| Feature | ArrayDeque | LinkedList |
|---------|-----------|------------|
| Internal structure | Resizable circular array | Doubly-linked list |
| Memory | Less (contiguous) | More (node objects with pointers) |
| `addFirst` / `addLast` | Amortized O(1) | O(1) |
| `removeFirst` / `removeLast` | O(1) | O(1) |
| `get(index)` | Not supported | O(n) |
| Null elements | Not allowed | Allowed |
| Thread-safe | No | No |
| Preferred use | Most use cases | When also used as a List |

`ArrayDeque` is the **preferred** implementation for both stack and queue use cases.

---

## 7. Set Interface

`java.util.Set<E>` extends `Collection`. A Set contains **no duplicate elements** - it models the mathematical set abstraction. All methods are inherited from `Collection`; `Set` does not add new methods but strengthens the contract of `add()` (no duplicates).

**Java 9+ factory methods:**
```java
Set<String> s = Set.of("A", "B", "C");           // unmodifiable, no nulls, no duplicates
Set<String> s = Set.copyOf(existingCollection);   // Java 10
```

### 7.1 HashSet

`java.util.HashSet<E>` implements `Set` backed by a `HashMap`. It offers O(1) average performance for basic operations.

**Key characteristics:**
- No ordering guarantee (iteration order is unpredictable)
- Permits one `null` element
- Not thread-safe
- Performance depends on `hashCode()` and `equals()` of elements
- Default initial capacity: 16, default load factor: 0.75

```java
// Constructors
new HashSet<>()
new HashSet<>(int initialCapacity)
new HashSet<>(int initialCapacity, float loadFactor)
new HashSet<>(Collection<? extends E> c)
```

No additional public methods beyond `Collection`. Relies on correct `hashCode()` and `equals()` implementations.

**Example:**
```java
Set<String> set = new HashSet<>();
set.add("Apple"); set.add("Banana"); set.add("Apple"); // duplicate ignored
System.out.println(set.size()); // 2
```

### 7.2 LinkedHashSet

`java.util.LinkedHashSet<E>` extends `HashSet` and maintains **insertion order** using a doubly-linked list running through all entries.

**Key characteristics:**
- Iteration order = insertion order
- Slightly slower than HashSet for add/remove due to linked list maintenance
- Permits one `null` element
- Not thread-safe

```java
// Constructors
new LinkedHashSet<>()
new LinkedHashSet<>(int initialCapacity)
new LinkedHashSet<>(int initialCapacity, float loadFactor)
new LinkedHashSet<>(Collection<? extends E> c)
```

No additional methods beyond `HashSet`.

### 7.3 TreeSet

`java.util.TreeSet<E>` implements `NavigableSet` (which extends `SortedSet`) backed by a `TreeMap` (Red-Black tree). Elements are kept in **sorted order**.

**Key characteristics:**
- Elements sorted by natural ordering or a `Comparator`
- O(log n) for `add()`, `remove()`, `contains()`
- Does NOT permit `null` (throws `NullPointerException`)
- Not thread-safe
- Implements `NavigableSet` - many navigation methods available (see Section 8)

```java
// Constructors
new TreeSet<>()                                     // natural ordering
new TreeSet<>(Comparator<? super E> comparator)     // custom comparator
new TreeSet<>(Collection<? extends E> c)            // natural ordering from collection
new TreeSet<>(SortedSet<E> s)                       // same ordering as s

// All NavigableSet methods available - see Section 8
```

### 7.4 EnumSet

`java.util.EnumSet<E extends Enum<E>>` is a high-performance `Set` implementation for use with enum types. All elements must come from a single enum type.

**Key characteristics:**
- Extremely fast (internally uses bit vectors)
- All operations are O(1)
- Iteration in enum declaration order
- Does NOT permit `null`
- Not thread-safe

```java
enum Day { MON, TUE, WED, THU, FRI, SAT, SUN }

// Factory methods (no public constructors)
EnumSet<Day> workDays = EnumSet.of(Day.MON, Day.TUE, Day.WED, Day.THU, Day.FRI);
EnumSet<Day> weekend  = EnumSet.of(Day.SAT, Day.SUN);
EnumSet<Day> allDays  = EnumSet.allOf(Day.class);
EnumSet<Day> noDays   = EnumSet.noneOf(Day.class);
EnumSet<Day> range    = EnumSet.range(Day.MON, Day.FRI);     // MON to FRI inclusive
EnumSet<Day> copy     = EnumSet.copyOf(workDays);
EnumSet<Day> comp     = EnumSet.complementOf(workDays);      // SAT and SUN
```

### 7.5 HashSet vs LinkedHashSet vs TreeSet

| Feature | HashSet | LinkedHashSet | TreeSet |
|---------|---------|---------------|---------|
| Ordering | None | Insertion order | Sorted (natural or Comparator) |
| `add` / `remove` / `contains` | O(1) avg | O(1) avg | O(log n) |
| Null | One null allowed | One null allowed | Not allowed |
| Thread-safe | No | No | No |
| Memory | Least | Medium | Most |
| Interface | Set | Set | NavigableSet |
| Best use | General purpose | Order-preserving dedup | Sorted iteration, range queries |

---

## 8. SortedSet and NavigableSet

### 8.1 SortedSet Methods

`java.util.SortedSet<E>` extends `Set`. It guarantees elements are in ascending order.

```java
public interface SortedSet<E> extends Set<E> {
    Comparator<? super E> comparator(); // Returns comparator; null if natural ordering

    // Range views (returned views are backed by original set)
    SortedSet<E> subSet(E fromElement, E toElement);   // [fromElement, toElement) - from inclusive, to exclusive
    SortedSet<E> headSet(E toElement);                 // Elements strictly less than toElement
    SortedSet<E> tailSet(E fromElement);               // Elements >= fromElement

    // Endpoints
    E first();   // Returns first (lowest) element; throws NoSuchElementException if empty
    E last();    // Returns last (highest) element; throws NoSuchElementException if empty
}
```

### 8.2 NavigableSet Methods

`java.util.NavigableSet<E>` extends `SortedSet` and adds navigation methods to find closest matches.

```java
public interface NavigableSet<E> extends SortedSet<E> {

    // Closest element queries
    E lower(E e);       // Greatest element strictly less than e; null if none
    E floor(E e);       // Greatest element <= e; null if none
    E ceiling(E e);     // Least element >= e; null if none
    E higher(E e);      // Least element strictly greater than e; null if none

    // Removal of extremes
    E pollFirst();      // Removes and returns first (lowest); null if empty
    E pollLast();       // Removes and returns last (highest); null if empty

    // Reverse order
    NavigableSet<E> descendingSet();            // Reverse-order view of this set
    Iterator<E> descendingIterator();           // Iterator in descending order

    // Controlled range views (more flexible than SortedSet)
    NavigableSet<E> subSet(E from, boolean fromInclusive, E to, boolean toInclusive);
    NavigableSet<E> headSet(E toElement, boolean inclusive);
    NavigableSet<E> tailSet(E fromElement, boolean inclusive);
}
```

**Example:**
```java
TreeSet<Integer> ts = new TreeSet<>(Arrays.asList(1, 3, 5, 7, 9));
System.out.println(ts.floor(6));    // 5 (greatest <= 6)
System.out.println(ts.ceiling(6));  // 7 (least >= 6)
System.out.println(ts.lower(5));    // 3 (strictly less than 5)
System.out.println(ts.higher(5));   // 7 (strictly greater than 5)
System.out.println(ts.subSet(3, true, 7, false)); // [3, 5]
```

---

## 9. Map Interface

`java.util.Map<K, V>` does **not** extend `Collection`. It maps keys to values. A map cannot contain duplicate keys; each key maps to at most one value.

### 9.1 Map Methods

```java
public interface Map<K, V> {

    // Size
    int size();
    boolean isEmpty();

    // Lookup
    boolean containsKey(Object key);            // True if key exists
    boolean containsValue(Object value);        // True if value exists (O(n) scan)
    V get(Object key);                          // Returns value for key; null if not found
    default V getOrDefault(Object key, V defaultValue); // Java 8 - returns defaultValue if key absent

    // Modification
    V put(K key, V value);                      // Associates key with value; returns old value (or null)
    void putAll(Map<? extends K, ? extends V> m); // Copies all mappings from m
    V remove(Object key);                       // Removes key; returns associated value (or null)
    boolean remove(Object key, Object value);   // Java 8 - removes only if key maps to value
    void clear();

    // Conditional put (Java 8)
    default V putIfAbsent(K key, V value);      // Puts only if key is absent or mapped to null; returns old value
    default boolean replace(K key, V oldValue, V newValue); // Replaces only if currently mapped to oldValue
    default V replace(K key, V value);          // Replaces only if key is currently mapped

    // Compute methods (Java 8)
    default V compute(K key, BiFunction<? super K, ? super V, ? extends V> remappingFunction);
        // Computes new value for key using function; removes entry if function returns null

    default V computeIfAbsent(K key, Function<? super K, ? extends V> mappingFunction);
        // If key absent or null, computes value using function and stores it; returns new value

    default V computeIfPresent(K key, BiFunction<? super K, ? super V, ? extends V> remappingFunction);
        // If key present and non-null, recomputes value; removes if function returns null

    default V merge(K key, V value, BiFunction<? super V, ? super V, ? extends V> remappingFunction);
        // If key absent: puts value. If key present: applies function to old and new value.
        // Removes if function returns null.

    // Iteration (Java 8)
    default void forEach(BiConsumer<? super K, ? super V> action);
    default void replaceAll(BiFunction<? super K, ? super V, ? extends V> function);

    // Views
    Set<K> keySet();                            // Set view of all keys
    Collection<V> values();                     // Collection view of all values
    Set<Map.Entry<K, V>> entrySet();            // Set view of key-value pairs

    // Nested interface
    interface Entry<K, V> {
        K getKey();
        V getValue();
        V setValue(V value);
        static <K extends Comparable<? super K>, V> Comparator<Entry<K,V>> comparingByKey();
        static <K, V extends Comparable<? super V>> Comparator<Entry<K,V>> comparingByValue();
        static <K, V> Comparator<Entry<K,V>> comparingByKey(Comparator<? super K> cmp);
        static <K, V> Comparator<Entry<K,V>> comparingByValue(Comparator<? super V> cmp);
    }

    // Factory methods (Java 9) - returns unmodifiable map
    static <K,V> Map<K,V> of(K k1, V v1, ...)           // up to 10 key-value pairs
    static <K,V> Map<K,V> ofEntries(Entry<K,V>... entries)
    static <K,V> Map<K,V> copyOf(Map<? extends K, ? extends V> map) // Java 10
    static <K,V> Map.Entry<K,V> entry(K k, V v)          // Java 9 - creates an Entry
}
```

**compute() vs merge() vs computeIfAbsent() examples:**
```java
Map<String, Integer> wordCount = new HashMap<>();

// computeIfAbsent: initialize if not present
wordCount.computeIfAbsent("hello", k -> 0);

// compute: increment counter (handles both absent and present)
wordCount.compute("hello", (k, v) -> (v == null) ? 1 : v + 1);

// merge: cleaner increment (value=1 is the default for new keys)
wordCount.merge("hello", 1, Integer::sum);
```

### 9.2 HashMap

`java.util.HashMap<K, V>` is the most-used `Map` implementation. Backed by a hash table (array of buckets, each a linked list or tree since Java 8).

**Key characteristics:**
- Average O(1) for `get()`, `put()`, `remove()`, `containsKey()`
- No ordering guarantee on iteration
- Permits one `null` key and multiple `null` values
- Not thread-safe
- Default initial capacity: 16, load factor: 0.75
- Since Java 8: buckets convert from linked list to Red-Black tree when a bucket has 8+ entries (TREEIFY_THRESHOLD) to improve worst-case from O(n) to O(log n)

```java
// Constructors
new HashMap<>()
new HashMap<>(int initialCapacity)
new HashMap<>(int initialCapacity, float loadFactor)
new HashMap<>(Map<? extends K, ? extends V> m)
```

No additional public methods beyond `Map`.

### 9.3 LinkedHashMap

`java.util.LinkedHashMap<K, V>` extends `HashMap` and maintains a doubly-linked list of entries to preserve **insertion order** (or optionally access order).

**Key characteristics:**
- Iteration order = insertion order by default
- If constructed with `accessOrder = true`, iteration is in LRU (Least Recently Used) order
- Slightly slower than HashMap due to linked list maintenance
- Permits one `null` key and multiple `null` values
- Not thread-safe
- Useful for building LRU caches (override `removeEldestEntry()`)

```java
// Constructors
new LinkedHashMap<>()
new LinkedHashMap<>(int initialCapacity)
new LinkedHashMap<>(int initialCapacity, float loadFactor)
new LinkedHashMap<>(Map<? extends K, ? extends V> m)
new LinkedHashMap<>(int initialCapacity, float loadFactor, boolean accessOrder)
    // accessOrder=true: iteration order is from least-recently-accessed to most-recently-accessed

// Additional method
protected boolean removeEldestEntry(Map.Entry<K,V> eldest);
    // Override to return true when eldest entry should be removed (used for caches)
```

**LRU Cache example:**
```java
int MAX = 3;
Map<Integer, String> lruCache = new LinkedHashMap<>(16, 0.75f, true) {
    protected boolean removeEldestEntry(Map.Entry<Integer, String> e) {
        return size() > MAX;
    }
};
```

### 9.4 TreeMap

`java.util.TreeMap<K, V>` implements `NavigableMap` backed by a Red-Black tree. Keys are kept in **sorted order**.

**Key characteristics:**
- O(log n) for `get()`, `put()`, `remove()`
- Keys sorted by natural ordering or `Comparator`
- Does NOT permit `null` keys (throws `NullPointerException`); values may be `null`
- Not thread-safe

```java
// Constructors
new TreeMap<>()
new TreeMap<>(Comparator<? super K> comparator)
new TreeMap<>(Map<? extends K, ? extends V> m)
new TreeMap<>(SortedMap<K, ? extends V> m)

// All NavigableMap methods available - see Section 10
```

### 9.5 Hashtable

`java.util.Hashtable<K, V>` is a legacy synchronized map. Predecessor to `HashMap`.

**Key characteristics:**
- All methods are `synchronized` - thread-safe but slow
- Does NOT permit `null` keys or `null` values (throws `NullPointerException`)
- Prefer `ConcurrentHashMap` over `Hashtable` in modern concurrent code

```java
// Legacy-specific methods
Enumeration<K> keys();           // Legacy key iterator
Enumeration<V> elements();       // Legacy value iterator
boolean contains(Object value);  // Same as containsValue() - legacy method
int hashCode();
```

### 9.6 EnumMap

`java.util.EnumMap<K extends Enum<K>, V>` is a specialized `Map` for enum keys. Internally uses an array indexed by enum ordinals.

**Key characteristics:**
- Extremely fast - O(1) with very low constant factor
- Keys must be from a single enum type
- Iteration in enum declaration order
- Does NOT permit `null` keys; values may be `null`
- Not thread-safe

```java
// Constructor - requires enum class to be specified
EnumMap<Day, String> schedule = new EnumMap<>(Day.class);
schedule.put(Day.MON, "Stand-up at 9am");
```

### 9.7 IdentityHashMap

`java.util.IdentityHashMap<K, V>` uses **reference equality** (`==`) instead of `equals()` for key comparison, and `System.identityHashCode()` instead of `hashCode()`.

**Use case:** Object graph traversal where you need to track objects already visited (preventing infinite loops) - e.g., serialization, deep copying.

```java
IdentityHashMap<Object, Boolean> visited = new IdentityHashMap<>();
String a = new String("hello");
String b = new String("hello");
visited.put(a, true);
System.out.println(visited.containsKey(b)); // false - different reference
System.out.println(visited.containsKey(a)); // true
```

### 9.8 WeakHashMap

`java.util.WeakHashMap<K, V>` uses **weak references** for keys. An entry is automatically removed when its key is no longer strongly reachable (eligible for GC).

**Use case:** Caching - associate data with objects without preventing them from being garbage collected.

```java
WeakHashMap<Object, String> cache = new WeakHashMap<>();
Object key = new Object();
cache.put(key, "cached data");
key = null;           // key no longer strongly referenced
System.gc();          // entry may be removed from map after GC
```

### 9.9 HashMap vs LinkedHashMap vs TreeMap vs Hashtable

| Feature | HashMap | LinkedHashMap | TreeMap | Hashtable |
|---------|---------|---------------|---------|-----------|
| Ordering | None | Insertion order | Sorted by key | None |
| `get` / `put` | O(1) avg | O(1) avg | O(log n) | O(1) avg |
| Null keys | One allowed | One allowed | Not allowed | Not allowed |
| Null values | Allowed | Allowed | Allowed | Not allowed |
| Thread-safe | No | No | No | Yes (synchronized) |
| Interface | Map | Map | NavigableMap | Map |
| Best use | General purpose | Order-preserving, LRU cache | Sorted keys, range queries | Legacy only |

---

## 10. SortedMap and NavigableMap

### 10.1 SortedMap Methods

`java.util.SortedMap<K, V>` extends `Map` and guarantees keys in ascending order.

```java
public interface SortedMap<K, V> extends Map<K, V> {
    Comparator<? super K> comparator();                     // null if natural ordering

    // Sub-map views (backed by original map)
    SortedMap<K, V> subMap(K fromKey, K toKey);             // [fromKey, toKey)
    SortedMap<K, V> headMap(K toKey);                       // Keys strictly less than toKey
    SortedMap<K, V> tailMap(K fromKey);                     // Keys >= fromKey

    // First/last keys
    K firstKey();   // Throws NoSuchElementException if empty
    K lastKey();    // Throws NoSuchElementException if empty
}
```

### 10.2 NavigableMap Methods

`java.util.NavigableMap<K, V>` extends `SortedMap` and adds navigation methods.

```java
public interface NavigableMap<K, V> extends SortedMap<K, V> {

    // Closest key/entry queries
    Map.Entry<K,V> lowerEntry(K key);    // Entry with greatest key strictly < key
    K lowerKey(K key);
    Map.Entry<K,V> floorEntry(K key);    // Entry with greatest key <= key
    K floorKey(K key);
    Map.Entry<K,V> ceilingEntry(K key);  // Entry with least key >= key
    K ceilingKey(K key);
    Map.Entry<K,V> higherEntry(K key);   // Entry with least key strictly > key
    K higherKey(K key);

    // Extremes
    Map.Entry<K,V> firstEntry();         // Lowest key entry; null if empty
    Map.Entry<K,V> lastEntry();          // Highest key entry; null if empty
    Map.Entry<K,V> pollFirstEntry();     // Removes and returns lowest key entry
    Map.Entry<K,V> pollLastEntry();      // Removes and returns highest key entry

    // Reverse order views
    NavigableMap<K,V> descendingMap();              // Reverse-order view
    NavigableSet<K> navigableKeySet();              // NavigableSet of keys
    NavigableSet<K> descendingKeySet();             // Keys in descending order

    // Controlled sub-map views
    NavigableMap<K,V> subMap(K from, boolean fromInclusive, K to, boolean toInclusive);
    NavigableMap<K,V> headMap(K toKey, boolean inclusive);
    NavigableMap<K,V> tailMap(K fromKey, boolean inclusive);
}
```

---

## 11. Concurrent Collections

Located in `java.util.concurrent`. Designed for safe concurrent access without external synchronization.

### 11.1 ConcurrentHashMap

`java.util.concurrent.ConcurrentHashMap<K, V>` is the thread-safe alternative to `HashMap`. Uses **segment-level locking** (Java 7) or **CAS + synchronized on individual buckets** (Java 8+).

**Key characteristics:**
- High concurrency - multiple threads can read and write simultaneously
- Does NOT permit `null` keys or `null` values
- Weakly consistent iterators (no `ConcurrentModificationException`)
- Read operations are generally non-blocking

```java
// Constructors
new ConcurrentHashMap<>()
new ConcurrentHashMap<>(int initialCapacity)
new ConcurrentHashMap<>(int initialCapacity, float loadFactor)
new ConcurrentHashMap<>(int initialCapacity, float loadFactor, int concurrencyLevel)
new ConcurrentHashMap<>(Map<? extends K, ? extends V> m)

// Atomic operations (all inherited from Map with atomic semantics)
putIfAbsent(key, value)
remove(key, value)
replace(key, oldValue, newValue)
replace(key, value)

// Bulk operations (Java 8) - run in parallel if parallelismThreshold met
void forEach(long parallelismThreshold, BiConsumer<? super K,? super V> action)
void forEachKey(long parallelismThreshold, Consumer<? super K> action)
void forEachValue(long parallelismThreshold, Consumer<? super V> action)
void forEachEntry(long parallelismThreshold, Consumer<? super Map.Entry<K,V>> action)

<U> U search(long parallelismThreshold, BiFunction<? super K,? super V,? extends U> searchFunction)
<U> U searchKeys(long parallelismThreshold, Function<? super K,? extends U> searchFunction)
<U> U searchValues(long parallelismThreshold, Function<? super V,? extends U> searchFunction)
<U> U searchEntries(long parallelismThreshold, Function<Map.Entry<K,V>,? extends U> searchFunction)

<U> U reduce(long parallelismThreshold, BiFunction<? super K,? super V,? extends U> transformer,
             BiFunction<? super U,? super U,? extends U> reducer)
long mappingCount()         // Returns the number of mappings (use instead of size() for large maps)

static <K> KeySetView<K,Boolean> newKeySet()  // Returns a Set backed by a ConcurrentHashMap
```

### 11.2 CopyOnWriteArrayList

`java.util.concurrent.CopyOnWriteArrayList<E>` implements `List`. On every mutative operation, a fresh copy of the underlying array is created.

**Key characteristics:**
- Thread-safe for reads - no synchronization needed for iteration
- Very slow for writes (copies entire array)
- Iterators are snapshot-based - they never see `ConcurrentModificationException` and reflect the state at the time the iterator was created
- Best use: Collections that are read far more often than written (event listeners, observer lists)

```java
// All List methods work. Additional:
boolean addIfAbsent(E e);                           // Adds only if not present; returns true if added
int addAllAbsent(Collection<? extends E> c);        // Adds elements not already present; returns count added
```

### 11.3 CopyOnWriteArraySet

`java.util.concurrent.CopyOnWriteArraySet<E>` is backed by a `CopyOnWriteArrayList`. Same copy-on-write semantics.

- No additional methods beyond `Set`.
- O(n) for `add()`, `contains()` - not efficient for large sets.
- Best for small sets with many more reads than writes.

### 11.4 ConcurrentLinkedQueue

`java.util.concurrent.ConcurrentLinkedQueue<E>` is an unbounded thread-safe FIFO queue based on linked nodes using CAS (Compare-And-Swap).

- Non-blocking, lock-free
- Does NOT permit `null`
- `size()` is O(n) - not constant time
- All `Queue` methods apply

```java
// No additional methods beyond Queue
```

### 11.5 BlockingQueue Implementations

`java.util.concurrent.BlockingQueue<E>` extends `Queue` and adds blocking operations:

```java
public interface BlockingQueue<E> extends Queue<E> {
    // Blocking insert
    void put(E e) throws InterruptedException;                     // Blocks until space available
    boolean offer(E e, long timeout, TimeUnit unit) throws InterruptedException; // Waits up to timeout

    // Blocking remove
    E take() throws InterruptedException;                          // Blocks until element available
    E poll(long timeout, TimeUnit unit) throws InterruptedException; // Waits up to timeout

    int remainingCapacity();  // Returns remaining space; Integer.MAX_VALUE if unbounded
    int drainTo(Collection<? super E> c);             // Removes all available elements into c
    int drainTo(Collection<? super E> c, int maxElements);
}
```

**ArrayBlockingQueue** - bounded blocking queue backed by an array:
```java
new ArrayBlockingQueue<>(int capacity)
new ArrayBlockingQueue<>(int capacity, boolean fair) // fair=true: FIFO access for blocked threads
```

**LinkedBlockingQueue** - optionally bounded blocking queue backed by linked nodes:
```java
new LinkedBlockingQueue<>()               // unbounded (Integer.MAX_VALUE capacity)
new LinkedBlockingQueue<>(int capacity)   // bounded
```

**PriorityBlockingQueue** - unbounded blocking priority queue:
```java
new PriorityBlockingQueue<>()
new PriorityBlockingQueue<>(int initialCapacity)
new PriorityBlockingQueue<>(int initialCapacity, Comparator<? super E> comparator)
```

**SynchronousQueue** - a queue with no internal capacity. Each `put()` must wait for a `take()` and vice versa. Used for hand-off designs.

**LinkedTransferQueue** - unbounded queue with additional transfer methods:
```java
void transfer(E e);                              // Blocks until a consumer takes the element
boolean tryTransfer(E e);                        // Returns false immediately if no consumer waiting
boolean tryTransfer(E e, long timeout, TimeUnit unit);
boolean hasWaitingConsumer();
int getWaitingConsumerCount();
```

**DelayQueue** - unbounded queue of `Delayed` elements. An element can only be taken when its delay has expired.

### 11.6 ConcurrentSkipListMap and ConcurrentSkipListSet

**ConcurrentSkipListMap** - thread-safe `NavigableMap`. Concurrent alternative to `Collections.synchronizedMap(new TreeMap<>())`.

**ConcurrentSkipListSet** - thread-safe `NavigableSet`. Backed by `ConcurrentSkipListMap`.

Both have O(log n) average for most operations and support all `NavigableMap`/`NavigableSet` methods.

---

## 12. Collections Utility Class

`java.util.Collections` provides static utility methods that operate on or return collections.

### 12.1 Sorting and Searching

```java
// Sorting - uses merge sort, O(n log n), stable
static <T extends Comparable<? super T>> void sort(List<T> list)
static <T> void sort(List<T> list, Comparator<? super T> c)

// Binary search - list MUST be sorted first
// Returns index of key if found; otherwise (-(insertion point) - 1)
static <T> int binarySearch(List<? extends Comparable<? super T>> list, T key)
static <T> int binarySearch(List<? extends T> list, T key, Comparator<? super T> c)

// Reversing order
static void reverse(List<?> list)
static <T> Comparator<T> reverseOrder()                           // Returns natural order reversed
static <T> Comparator<T> reverseOrder(Comparator<T> cmp)         // Returns given comparator reversed
```

### 12.2 Min, Max and Frequency

```java
static <T extends Object & Comparable<? super T>> T min(Collection<? extends T> coll)
static <T> T min(Collection<? extends T> coll, Comparator<? super T> comp)
static <T extends Object & Comparable<? super T>> T max(Collection<? extends T> coll)
static <T> T max(Collection<? extends T> coll, Comparator<? super T> comp)

static int frequency(Collection<?> c, Object o)    // Number of occurrences of o in c
static boolean disjoint(Collection<?> c1, Collection<?> c2) // True if no common elements
```

### 12.3 Modification Methods

```java
static void shuffle(List<?> list)                           // Random shuffle
static void shuffle(List<?> list, Random rnd)               // Shuffle with given Random

static void swap(List<?> list, int i, int j)                // Swaps elements at i and j

static <T> void fill(List<? super T> list, T obj)           // Replaces all elements with obj

static <T> void copy(List<? super T> dest, List<? extends T> src)
    // Copies src into dest; dest must be at least as large as src

static <T> boolean replaceAll(List<T> list, T oldVal, T newVal) // Replaces all oldVal with newVal

static void rotate(List<?> list, int distance)
    // Rotates elements; element at index i moves to (i + distance) % size

static int indexOfSubList(List<?> source, List<?> target)   // First occurrence of target in source; -1 if none
static int lastIndexOfSubList(List<?> source, List<?> target)

static <T> List<T> nCopies(int n, T o)                      // Immutable list of n copies of o
```

### 12.4 Unmodifiable Wrappers

These methods return a view that throws `UnsupportedOperationException` on any modification attempt. The underlying collection can still be modified through the original reference.

```java
static <T> Collection<T> unmodifiableCollection(Collection<? extends T> c)
static <T> List<T> unmodifiableList(List<? extends T> list)
static <T> Set<T> unmodifiableSet(Set<? extends T> s)
static <T> SortedSet<T> unmodifiableSortedSet(SortedSet<T> s)
static <T> NavigableSet<T> unmodifiableNavigableSet(NavigableSet<T> s)
static <K,V> Map<K,V> unmodifiableMap(Map<? extends K, ? extends V> m)
static <K,V> SortedMap<K,V> unmodifiableSortedMap(SortedMap<K, ? extends V> m)
static <K,V> NavigableMap<K,V> unmodifiableNavigableMap(NavigableMap<K, ? extends V> m)
```

**Note:** In Java 9+, `List.of()`, `Set.of()`, `Map.of()` return truly unmodifiable collections (even the original reference cannot modify them). `Collections.unmodifiableXxx()` is just a wrapper.

### 12.5 Synchronized Wrappers

Returns thread-safe views by wrapping all methods in `synchronized` blocks. Manual synchronization is still required when iterating.

```java
static <T> Collection<T> synchronizedCollection(Collection<T> c)
static <T> List<T> synchronizedList(List<T> list)
static <T> Set<T> synchronizedSet(Set<T> s)
static <T> SortedSet<T> synchronizedSortedSet(SortedSet<T> s)
static <T> NavigableSet<T> synchronizedNavigableSet(NavigableSet<T> s)
static <K,V> Map<K,V> synchronizedMap(Map<K,V> m)
static <K,V> SortedMap<K,V> synchronizedSortedMap(SortedMap<K,V> m)
static <K,V> NavigableMap<K,V> synchronizedNavigableMap(NavigableMap<K,V> m)
```

**Important:** When iterating a synchronized collection, you must manually synchronize on the collection:
```java
List<String> syncList = Collections.synchronizedList(new ArrayList<>());
synchronized (syncList) {
    Iterator<String> it = syncList.iterator();
    while (it.hasNext()) { /* ... */ }
}
```

### 12.6 Singleton and Empty Collections

```java
// Singleton (immutable, single-element)
static <T> Set<T> singleton(T o)
static <T> List<T> singletonList(T o)
static <K,V> Map<K,V> singletonMap(K key, V value)

// Empty (immutable, no elements)
static <T> List<T> emptyList()
static <T> Set<T> emptySet()
static <K,V> Map<K,V> emptyMap()
static <T> Iterator<T> emptyIterator()
static <T> ListIterator<T> emptyListIterator()
static <T> Enumeration<T> emptyEnumeration()

// Checked wrappers (throw ClassCastException at insertion if wrong type)
static <E> Collection<E> checkedCollection(Collection<E> c, Class<E> type)
static <E> List<E> checkedList(List<E> list, Class<E> type)
static <E> Set<E> checkedSet(Set<E> s, Class<E> type)
static <K,V> Map<K,V> checkedMap(Map<K,V> m, Class<K> keyType, Class<V> valueType)
// ... and variants for SortedSet, NavigableSet, SortedMap, NavigableMap, Queue
```

---

## 13. Arrays Utility Class

`java.util.Arrays` provides static methods for array manipulation.

```java
// Sorting (uses Dual-Pivot Quicksort for primitives; TimSort for objects)
static void sort(int[] a)
static void sort(int[] a, int fromIndex, int toIndex)
static <T> void sort(T[] a, Comparator<? super T> c)
static <T> void sort(T[] a, int fromIndex, int toIndex, Comparator<? super T> c)
static void parallelSort(int[] a)       // Java 8 - uses ForkJoinPool for large arrays
static <T extends Comparable<? super T>> void parallelSort(T[] a)

// Binary search (array must be sorted first)
static int binarySearch(int[] a, int key)
static int binarySearch(int[] a, int fromIndex, int toIndex, int key)
static <T> int binarySearch(T[] a, T key, Comparator<? super T> c)

// Copying
static int[] copyOf(int[] original, int newLength)          // truncates or pads with 0/null
static int[] copyOfRange(int[] original, int from, int to)  // [from, to)

// Filling
static void fill(int[] a, int val)
static void fill(int[] a, int fromIndex, int toIndex, int val)
static <T> void parallelSetAll(T[] array, IntFunction<? extends T> generator) // Java 8
static <T> void setAll(T[] array, IntFunction<? extends T> generator)         // Java 8

// Comparison
static boolean equals(int[] a, int[] a2)                    // Element-wise equality
static boolean deepEquals(Object[] a1, Object[] a2)         // Recursive equality for nested arrays
static int compare(int[] a, int[] b)                        // Java 9 - lexicographic comparison
static int mismatch(int[] a, int[] b)                       // Java 9 - index of first mismatch; -1 if equal

// String representation
static String toString(int[] a)                             // "[1, 2, 3]"
static String deepToString(Object[] a)                      // Works for multi-dimensional arrays

// Hash codes
static int hashCode(int[] a)
static int deepHashCode(Object[] a)

// Conversion
static <T> List<T> asList(T... a)
    // Returns a FIXED-SIZE List backed by the array.
    // set() works; add() and remove() throw UnsupportedOperationException.
    // Changes to the list write through to the array.

// Streams (Java 8)
static IntStream stream(int[] array)
static IntStream stream(int[] array, int startInclusive, int endExclusive)
static <T> Stream<T> stream(T[] array)
static <T> Stream<T> stream(T[] array, int startInclusive, int endExclusive)

// Parallel prefix (Java 8) - cumulative operation in-place
static void parallelPrefix(int[] array, IntBinaryOperator op) // e.g., cumulative sum
```

**`Arrays.asList()` vs `new ArrayList<>(Arrays.asList())`:**
```java
String[] arr = {"A", "B", "C"};

List<String> fixed = Arrays.asList(arr);
// fixed.add("D");    // UnsupportedOperationException
fixed.set(0, "Z");    // Works - reflected back in arr

List<String> mutable = new ArrayList<>(Arrays.asList(arr));
mutable.add("D");     // Works - independent copy
```

---

## 14. Comparable and Comparator

### 14.1 Comparable Interface

`java.lang.Comparable<T>` defines the **natural ordering** of a class. Implemented by the class itself.

```java
public interface Comparable<T> {
    int compareTo(T o);
    // Returns: negative if this < o
    //          zero     if this == o
    //          positive if this > o
}
```

Classes with natural ordering: `String`, `Integer`, `Double`, `Date`, `LocalDate`, etc.

**Example:**
```java
public class Student implements Comparable<Student> {
    String name;
    int gpa;

    @Override
    public int compareTo(Student other) {
        return Integer.compare(this.gpa, other.gpa); // ascending by GPA
    }
}
// Now TreeSet<Student>, Collections.sort(list) work without explicit Comparator
```

### 14.2 Comparator Interface

`java.util.Comparator<T>` defines an **external ordering** separate from the class. Passed as a parameter.

```java
public interface Comparator<T> {
    int compare(T o1, T o2);        // negative if o1 < o2, zero if equal, positive if o1 > o2
    boolean equals(Object obj);     // not commonly overridden

    // Default methods for chaining (Java 8)
    default Comparator<T> reversed();
    default Comparator<T> thenComparing(Comparator<? super T> other);    // secondary comparator
    default <U extends Comparable<? super U>> Comparator<T> thenComparing(Function<? super T, ? extends U> keyExtractor);
    default Comparator<T> thenComparingInt(ToIntFunction<? super T> keyExtractor);
    default Comparator<T> thenComparingLong(ToLongFunction<? super T> keyExtractor);
    default Comparator<T> thenComparingDouble(ToDoubleFunction<? super T> keyExtractor);

    // Static factory methods (Java 8)
    static <T, U extends Comparable<? super U>> Comparator<T>
        comparing(Function<? super T, ? extends U> keyExtractor);        // compare by extracted key
    static <T, U> Comparator<T>
        comparing(Function<? super T, ? extends U> keyExtractor, Comparator<? super U> keyComparator);
    static <T> Comparator<T> comparingInt(ToIntFunction<? super T> keyExtractor);
    static <T> Comparator<T> comparingLong(ToLongFunction<? super T> keyExtractor);
    static <T> Comparator<T> comparingDouble(ToDoubleFunction<? super T> keyExtractor);
    static <T extends Comparable<? super T>> Comparator<T> naturalOrder();
    static <T extends Comparable<? super T>> Comparator<T> reverseOrder();
    static <T> Comparator<T> nullsFirst(Comparator<? super T> comparator); // nulls sort first
    static <T> Comparator<T> nullsLast(Comparator<? super T> comparator);  // nulls sort last
}
```

**Chaining example:**
```java
List<Student> students = ...;
students.sort(
    Comparator.comparingDouble(Student::getGpa)
              .reversed()
              .thenComparing(Student::getName)
              .thenComparingInt(Student::getAge)
);
```

### 14.3 Comparable vs Comparator

| Aspect | Comparable | Comparator |
|--------|-----------|------------|
| Package | `java.lang` | `java.util` |
| Method | `compareTo(T o)` - one argument | `compare(T o1, T o2)` - two arguments |
| Location | Implemented inside the class | Separate class / lambda |
| Ordering type | Natural ordering (single, fixed) | Custom ordering (multiple, flexible) |
| When to use | Class has one obvious natural order | Multiple orderings needed, or class cannot be modified |
| Null handling | Must handle manually | Use `Comparator.nullsFirst()` / `nullsLast()` |
| Example | `String`, `Integer` | Sort by name, then age, then score |

---

## 15. Choosing the Right Collection

```
Need key-value mapping?
    Yes --> Map
        Need sorted keys?          --> TreeMap
        Need insertion order?      --> LinkedHashMap
        Need thread safety?        --> ConcurrentHashMap
        General purpose?           --> HashMap

    No --> Collection
        Allow duplicates?
            No --> Set
                Need sorted order? --> TreeSet
                Need insertion order? --> LinkedHashSet
                General purpose?   --> HashSet

            Yes --> Need ordering?
                FIFO queue?        --> ArrayDeque (or LinkedBlockingQueue if concurrent)
                Priority order?    --> PriorityQueue
                Stack (LIFO)?      --> ArrayDeque (push/pop)
                Indexed access?    --> ArrayList
                Frequent insert/remove at ends? --> ArrayDeque or LinkedList
```

**Quick reference:**

| Requirement | Best Choice |
|-------------|------------|
| Fast random access by index | ArrayList |
| Fast insert/remove at both ends | ArrayDeque |
| Unique elements, fast lookup | HashSet |
| Unique elements, sorted | TreeSet |
| Key-value, fast lookup | HashMap |
| Key-value, sorted keys | TreeMap |
| Key-value, insertion order | LinkedHashMap |
| Thread-safe map | ConcurrentHashMap |
| Thread-safe list (read-heavy) | CopyOnWriteArrayList |
| Producer-consumer queue | ArrayBlockingQueue / LinkedBlockingQueue |
| Enum keys | EnumMap |
| Enum elements | EnumSet |
| Priority-based retrieval | PriorityQueue |

---

*Notes cover Java SE 17. Features introduced in specific versions are marked (Java 8, Java 9, etc.).*
