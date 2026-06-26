---
title: Java Memory Management
---

Java Virtual Machine (JVM) divides memory into several distinct areas, each serving specific purposes. Understanding these areas is crucial for writing efficient code and debugging memory issues.

---

## 1. Heap Memory

**What it stores:** Objects and instance variables

**Characteristics:**
- Shared across all threads
- Created when JVM starts
- Destroyed when JVM exits
- Managed by Garbage Collector
- Can be dynamically expanded or contracted

**Structure (Modern Java):**

### Young Generation (Minor GC occurs here)
- **Eden Space:** Where new objects are initially allocated
- **Survivor Spaces (S0 and S1):** Objects that survive one GC cycle move here

### Old Generation (Tenured Generation)
- Long-lived objects that survived multiple GC cycles
- Major GC (Full GC) occurs here, which is more time-consuming

**Example:**
```java
class Employee {
    String name;        // Reference stored in heap
    int age;            // Primitive stored in heap (as instance variable)
}

Employee emp = new Employee();  // Object created in heap
emp.name = "John";              // String object created in heap
```

**Heap Memory Errors:**
- `OutOfMemoryError: Java heap space` - when heap is full

---

## 2. Stack Memory

**What it stores:** 
- Local variables (primitives)
- Reference variables (pointers to heap objects)
- Method call information (stack frames)
- Partial results and return values

**Characteristics:**
- One stack per thread (thread-safe by nature)
- Works on LIFO (Last In First Out) principle
- Created when thread starts
- Destroyed when thread terminates
- Faster access than heap
- Limited size

**Stack Frame Contains:**
- Local variables
- Operand stack (for calculations)
- Reference to current class constant pool

**Example:**
```java
public void calculate() {
    int x = 10;                    // x stored in stack
    int y = 20;                    // y stored in stack
    Employee emp = new Employee(); // 'emp' reference in stack, object in heap
    int result = x + y;            // result stored in stack
}
```

**Stack Memory Errors:**
- `StackOverflowError` - when stack is full (often due to deep recursion)

---

## 3. Method Area (Metaspace in Java 8+)

**What it stores:**
- Class structures (metadata)
- Static variables
- Static methods
- Constant pool
- Method bytecode
- Field information
- Runtime constant pool

**Characteristics:**
- Shared across all threads
- Created on JVM startup
- Part of non-heap memory (from Java 8)
- Uses native memory (not limited by JVM heap)

**Example:**
```java
class Calculator {
    static int count = 0;           // Stored in Method Area
    static final double PI = 3.14;  // Stored in Method Area (constant pool)
    
    static void increment() {       // Method code in Method Area
        count++;
    }
}
```

**Evolution:**
- **Java 7 and earlier:** PermGen (Permanent Generation) - part of heap
- **Java 8 onwards:** Metaspace - uses native memory

**Metaspace Errors:**
- `OutOfMemoryError: Metaspace` - when metaspace is exhausted

---

## 4. Program Counter (PC) Register

**What it stores:** 
- Address of current JVM instruction being executed

**Characteristics:**
- One PC register per thread
- Contains address of instruction in Method Area
- For native methods, value is undefined

---

## 5. Native Method Stack

**What it stores:** 
- Native method information (methods written in C/C++)

**Characteristics:**
- One per thread
- Supports native method calls (JNI - Java Native Interface)

---

## Complete Memory Allocation Example

```java
public class MemoryDemo {
    // Static variable - Method Area
    static int staticVar = 100;
    
    // Instance variable - will be in Heap when object is created
    int instanceVar = 200;
    
    public static void main(String[] args) {
        // 'args' reference - Stack
        // Actual String array - Heap
        
        int localPrimitive = 10;              // Stack
        String localString = "Hello";         // "Hello" in String Pool (Heap)
                                               // localString reference in Stack
        
        MemoryDemo obj = new MemoryDemo();    // obj reference - Stack
                                               // MemoryDemo object - Heap
                                               // instanceVar inside object - Heap
        
        obj.processData(20);
    }
    
    public void processData(int param) {
        // param - Stack (new stack frame for this method)
        int result = param * 2;               // result - Stack
        Integer wrapped = Integer.valueOf(result); // reference in Stack, object in Heap
    }
}
```

---

## Memory Allocation by Data Type

### Primitives
- **As local variables:** Stack
- **As instance variables:** Heap (inside object)
- **As static variables:** Method Area

### Objects
- **Object itself:** Always Heap
- **Reference variable:** Depends on where it's declared
  - Local variable: Stack
  - Instance variable: Heap (inside parent object)
  - Static variable: Method Area

### Arrays
- **Array object:** Heap
- **Reference to array:** Stack (if local), Heap (if instance), Method Area (if static)

### Strings
- **String literals:** String Pool (special area in Heap)
- **String objects (new String()):** Heap
- **String references:** Follow same rules as objects

---

## String Pool (String Constant Pool)

Special memory region in Heap for string literals.

```java
String s1 = "Java";        // Created in String Pool
String s2 = "Java";        // References same object in String Pool
String s3 = new String("Java"); // New object in Heap (outside pool)

System.out.println(s1 == s2);    // true (same reference)
System.out.println(s1 == s3);    // false (different objects)
System.out.println(s1.equals(s3)); // true (same content)
```

---

## Garbage Collection

**What it does:** Automatically frees up heap memory by removing objects that are no longer referenced.

**Types of GC:**
1. **Minor GC** - Cleans Young Generation
2. **Major GC** - Cleans Old Generation
3. **Full GC** - Cleans entire Heap

**When objects become eligible for GC:**
- No references pointing to it
- All references are out of scope
- Reference is explicitly set to null
- Object is created inside a method and method completes

**Making objects eligible:**
```java
Employee emp = new Employee();
emp = null;  // Original object eligible for GC

// or when method ends
public void createObject() {
    Employee temp = new Employee();
} // temp goes out of scope, object eligible for GC
```

---

## Memory Configuration (JVM Arguments)

```bash
# Heap Size
-Xms512m          # Initial heap size
-Xmx2g            # Maximum heap size

# Stack Size
-Xss1m            # Thread stack size

# Metaspace
-XX:MetaspaceSize=128m
-XX:MaxMetaspaceSize=512m

# Young Generation
-Xmn512m          # Size of Young Generation
```

---

## Common Interview Questions - Quick Answers

**Q: Where are static variables stored?**
A: Method Area (Metaspace in Java 8+)

**Q: Where are local variables stored?**
A: Stack memory

**Q: Where are objects stored?**
A: Heap memory (reference can be in Stack, Heap, or Method Area depending on declaration)

**Q: What's the difference between Stack and Heap?**
A: Stack stores method calls and local variables (fast, LIFO, limited size). Heap stores objects (slower, managed by GC, larger size).

**Q: Can Stack memory cause OutOfMemoryError?**
A: No, it causes StackOverflowError. OutOfMemoryError is for Heap and Metaspace.

**Q: Where are String literals stored?**
A: String Pool, which is part of Heap memory.

**Q: What happens when a method is called?**
A: A new stack frame is created on the thread's stack, containing local variables and method information.

---

## Memory Leak Scenarios (Important for Interviews)

1. **Unclosed Resources:** Streams, connections not closed
2. **Static Collections:** Growing collections in static fields
3. **Inner Class References:** Non-static inner classes hold reference to outer class
4. **ThreadLocal Variables:** Not removing ThreadLocal variables
5. **Listeners/Callbacks:** Not unregistering listeners

```java
// Memory Leak Example
public class LeakExample {
    static List<Object> list = new ArrayList<>();
    
    public void addData() {
        list.add(new Object());  // Objects keep accumulating, never removed
    }
}
```

---

## Key Takeaways

1. **Heap:** Objects, instance variables, arrays
2. **Stack:** Local variables, method calls, references
3. **Method Area:** Class metadata, static variables, constants
4. **PC Register:** Current instruction address per thread
5. **Native Stack:** Native method calls

**Memory Speed:** Stack > Heap > Method Area

**Thread Safety:** Stack (thread-local) > Method Area/Heap (shared)

**Size:** Heap (largest) > Method Area > Stack (smallest)

---

## Visual Summary

```
JVM MEMORY
│
├── HEAP (Shared, GC managed)
│   ├── Young Generation
│   │   ├── Eden Space
│   │   └── Survivor Spaces (S0, S1)
│   ├── Old Generation
│   └── String Pool
│
├── STACK (Per Thread, LIFO)
│   └── Stack Frames
│       ├── Local Variables
│       ├── Operand Stack
│       └── Frame Data
│
├── METHOD AREA / METASPACE (Shared, Native Memory)
│   ├── Class Metadata
│   ├── Static Variables
│   └── Runtime Constant Pool
│
├── PC REGISTER (Per Thread)
│
└── NATIVE METHOD STACK (Per Thread)
```
