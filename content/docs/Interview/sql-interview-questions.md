---
title: Sql Interview Questions
---

# Top 200 SQL Interview Questions and Answers (2025 Comprehensive Guide)

> **Top 200+ SQL Interview Questions & Answers (2025).** The ultimate cheatsheet with concise explanations, code snippets, and diagrams to crack your SQL interview.

## Table of Contents

<details>
<summary><strong>Section 1: Database Fundamentals (Q1-Q10)</strong></summary>

1. [What is a Database?](#q1-what-is-a-database)
2. [What is DBMS?](#q2-what-is-dbms)
3. [What is SQL?](#q3-what-is-sql)
4. [What is RDBMS?](#q4-what-is-rdbms)
5. [What is a Database Table?](#q5-what-is-a-database-table)
6. [What is a Query?](#q6-what-is-a-query)
7. [What is a Subquery?](#q7-what-is-a-subquery)
8. [What are the Types of Subquery?](#q8-what-are-the-types-of-subquery)
9. [What is Database Normalization?](#q9-what-is-database-normalization)
10. [What are Database Normalization Forms?](#q10-what-are-database-normalization-forms)

</details>

<details>
<summary><strong>Section 2: Keys and Constraints (Q11-Q20)</strong></summary>

11. [What is a Primary Key?](#q11-what-is-a-primary-key)
12. [What is a Foreign Key?](#q12-what-is-a-foreign-key)
13. [What is a Unique Key?](#q13-what-is-a-unique-key)
14. [What is a Candidate Key?](#q14-what-is-a-candidate-key)
15. [Difference between Primary Key and Unique Key?](#q15-difference-between-primary-key-and-unique-key)
16. [What is a Composite Key?](#q16-what-is-a-composite-key)
17. [What are Constraints in SQL?](#q17-what-are-constraints-in-sql)
18. [What is a Check Constraint?](#q18-what-is-a-check-constraint)
19. [What is a Default Constraint?](#q19-what-is-a-default-constraint)
20. [What is NOT NULL Constraint?](#q20-what-is-not-null-constraint)

</details>

<details>
<summary><strong>Section 3: Indexes (Q21-Q30)</strong></summary>

21. [What is an Index?](#q21-what-is-an-index)
22. [Why do we need Indexes?](#q22-why-do-we-need-indexes)
23. [What are the Types of Indexes?](#q23-what-are-the-types-of-indexes)
24. [What is a Clustered Index?](#q24-what-is-a-clustered-index)
25. [What is a Non-Clustered Index?](#q25-what-is-a-non-clustered-index)
26. [Difference between Clustered and Non-Clustered Index?](#q26-difference-between-clustered-and-non-clustered-index)
27. [What is a Unique Index?](#q27-what-is-a-unique-index)
28. [What is a Composite Index?](#q28-what-is-a-composite-index)
29. [When should you create an Index?](#q29-when-should-you-create-an-index)
30. [What is Index Selectivity?](#q30-what-is-index-selectivity)

</details>

<details>
<summary><strong>Section 4: Joins (Q31-Q45)</strong></summary>

31. [What is a Join in SQL?](#q31-what-is-a-join-in-sql)
32. [What are Different Types of Joins?](#q32-what-are-different-types-of-joins)
33. [What is an Inner Join?](#q33-what-is-an-inner-join)
34. [What is a Left Outer Join?](#q34-what-is-a-left-outer-join)
35. [What is a Right Outer Join?](#q35-what-is-a-right-outer-join)
36. [What is a Full Outer Join?](#q36-what-is-a-full-outer-join)
37. [What is a Self Join?](#q37-what-is-a-self-join)
38. [What is a Cross Join?](#q38-what-is-a-cross-join)
39. [What is the difference between Inner Join and Outer Join?](#q39-what-is-the-difference-between-inner-join-and-outer-join)
40. [Can you join more than two tables?](#q40-can-you-join-more-than-two-tables)
41. [What is the default Join type?](#q41-what-is-the-default-join-type)
42. [What is Natural Join?](#q42-what-is-natural-join)
43. [Difference between Join and Union?](#q43-difference-between-join-and-union)
44. [What is Equi Join?](#q44-what-is-equi-join)
45. [What is Non-Equi Join?](#q45-what-is-non-equi-join)

</details>

<details>
<summary><strong>Section 5: Stored Procedures and Functions (Q46-Q60)</strong></summary>

46. [What is a Stored Procedure?](#q46-what-is-a-stored-procedure)
47. [Why use Stored Procedures?](#q47-why-use-stored-procedures)
48. [What is a Function in SQL?](#q48-what-is-a-function-in-sql)
49. [Types of Functions?](#q49-types-of-functions)
50. [Difference between Stored Procedure and Function?](#q50-difference-between-stored-procedure-and-function)
51. [What are Scalar Functions?](#q51-what-are-scalar-functions)
52. [What are Aggregate Functions?](#q52-what-are-aggregate-functions)
53. [What are User-Defined Functions?](#q53-what-are-user-defined-functions)
54. [Types of User-Defined Functions?](#q54-types-of-user-defined-functions)
55. [What is a Table-Valued Function?](#q55-what-is-a-table-valued-function)
56. [Can we call a Stored Procedure from Function?](#q56-what-is-a-stored-procedure-from-function)
57. [What are Input and Output Parameters?](#q57-what-are-input-and-output-parameters)
58. [What is Return Statement in Stored Procedure?](#q58-what-is-return-statement-in-stored-procedure)
59. [Can Stored Procedures be nested?](#q59-can-stored-procedures-be-nested)
60. [What is a Recursive Stored Procedure?](#q60-what-is-a-recursive-stored-procedure)

</details>

<details>
<summary><strong>Section 6: Triggers (Q61-Q70)</strong></summary>

61. [What is a Trigger?](#q61-what-is-a-trigger)
62. [Why do we need Triggers?](#q62-why-do-we-need-triggers)
63. [Types of Triggers?](#q63-types-of-triggers)
64. [What is a DML Trigger?](#q64-what-is-a-dml-trigger)
65. [What is a DDL Trigger?](#q65-what-is-a-ddl-trigger)
66. [What is an INSTEAD OF Trigger?](#q66-what-is-an-instead-of-trigger)
67. [What is an AFTER Trigger?](#q67-what-is-an-after-trigger)
68. [Difference between Trigger and Stored Procedure?](#q68-difference-between-trigger-and-stored-procedure)
69. [Can we have multiple triggers on a table?](#q69-can-we-have-multiple-triggers-on-a-table)
70. [What are INSERTED and DELETED tables?](#q70-what-are-inserted-and-deleted-tables)

</details>

<details>
<summary><strong>Section 7: Views (Q71-Q80)</strong></summary>

71. [What is a View?](#q71-what-is-a-view)
72. [Why use Views?](#q72-why-use-views)
73. [Types of Views?](#q73-types-of-views)
74. [What is a Simple View?](#q74-what-is-a-simple-view)
75. [What is a Complex View?](#q75-what-is-a-complex-view)
76. [What is a Materialized View?](#q76-what-is-a-materialized-view)
77. [Can we insert data through Views?](#q77-can-we-insert-data-through-views)
78. [What is WITH CHECK OPTION?](#q78-what-is-with-check-option)
79. [Can we create Index on Views?](#q79-can-we-create-index-on-views)
80. [Difference between View and Table?](#q80-difference-between-view-and-table)

</details>

<details>
<summary><strong>Section 8: Transactions and Locking (Q81-Q95)</strong></summary>

81. [What is a Transaction?](#q81-what-is-a-transaction)
82. [What is ACID Property?](#q82-what-is-acid-property)
83. [What is COMMIT?](#q83-what-is-commit)
84. [What is ROLLBACK?](#q84-what-is-rollback)
85. [What is SAVEPOINT?](#q85-what-is-savepoint)
86. [What are Transaction Isolation Levels?](#q86-what-are-transaction-isolation-levels)
87. [What is READ UNCOMMITTED?](#q87-what-is-read-uncommitted)
88. [What is READ COMMITTED?](#q88-what-is-read-committed)
89. [What is REPEATABLE READ?](#q89-what-is-repeatable-read)
90. [What is SERIALIZABLE?](#q90-what-is-serializable)
91. [What is Locking?](#q91-what-is-locking)
92. [Types of Locks?](#q92-types-of-locks)
93. [What is Deadlock?](#q93-what-is-deadlock)
94. [What is Lock Escalation?](#q94-what-is-lock-escalation)
95. [What are Dirty Reads, Non-Repeatable Reads, and Phantom Reads?](#q95-what-are-dirty-reads-non-repeatable-reads-and-phantom-reads)

</details>

<details>
<summary><strong>Section 9: SQL Commands and Clauses (Q96-Q115)</strong></summary>

96. [Difference between DELETE and TRUNCATE?](#q96-difference-between-delete-and-truncate)
97. [Difference between DROP and TRUNCATE?](#q97-difference-between-drop-and-truncate)
98. [Difference between WHERE and HAVING?](#q98-difference-between-where-and-having)
99. [What is GROUP BY clause?](#q99-what-is-group-by-clause)
100. [What is ORDER BY clause?](#q100-what-is-order-by-clause)
101. [Difference between UNION and UNION ALL?](#q101-difference-between-union-and-union-all)
102. [What is INTERSECT?](#q102-what-is-intersect)
103. [What is EXCEPT/MINUS?](#q103-what-is-except-minus)
104. [What is the CASE statement?](#q104-what-is-the-case-statement)
105. [What is COALESCE function?](#q105-what-is-coalesce-function)
106. [What is NULLIF function?](#q106-what-is-nullif-function)
107. [What are Wildcard operators?](#q107-what-are-wildcard-operators)
108. [What is LIKE operator?](#q108-what-is-like-operator)
109. [What is IN operator?](#q109-what-is-in-operator)
110. [What is BETWEEN operator?](#q110-what-is-between-operator)
111. [What is EXISTS operator?](#q111-what-is-exists-operator)
112. [What is ALL operator?](#q112-what-is-all-operator)
113. [What is ANY operator?](#q113-what-is-any-operator)
114. [What is DISTINCT keyword?](#q114-what-is-distinct-keyword)
115. [What is TOP/LIMIT clause?](#q115-what-is-top-limit-clause)

</details>

<details>
<summary><strong>Section 10: Data Types and Functions (Q116-Q130)</strong></summary>

116. [What are SQL Data Types?](#q116-what-are-sql-data-types)
117. [Difference between CHAR and VARCHAR?](#q117-difference-between-char-and-varchar)
118. [What is NVARCHAR?](#q118-what-is-nvarchar)
119. [Difference between VARCHAR and NVARCHAR?](#q119-difference-between-varchar-and-nvarchar)
120. [What are Date and Time Data Types?](#q120-what-are-date-and-time-data-types)
121. [What is DATETIME vs DATETIME2?](#q121-what-is-datetime-vs-datetime2)
122. [What are String Functions?](#q122-what-are-string-functions)
123. [What is SUBSTRING function?](#q123-what-is-substring-function)
124. [What is CHARINDEX function?](#q124-what-is-charindex-function)
125. [What is STUFF function?](#q125-what-is-stuff-function)
126. [What is REPLACE function?](#q126-what-is-replace-function)
127. [Difference between STUFF and REPLACE?](#q127-difference-between-stuff-and-replace)
128. [What are Date Functions?](#q128-what-are-date-functions)
129. [What is DATEADD function?](#q129-what-is-dateadd-function)
130. [What is DATEDIFF function?](#q130-what-is-datediff-function)

</details>

<details>
<summary><strong>Section 11: Performance and Optimization (Q131-Q145)</strong></summary>

131. [How to improve SQL query performance?](#q131-how-to-improve-sql-query-performance)
132. [What is Query Execution Plan?](#q132-what-is-query-execution-plan)
133. [What is SQL Profiler?](#q133-what-is-sql-profiler)
134. [What is Denormalization?](#q134-what-is-denormalization)
135. [What is Partitioning?](#q135-what-is-partitioning)
136. [What is a Covering Index?](#q136-what-is-a-covering-index)
137. [What is Index Scan vs Index Seek?](#q137-what-is-index-scan-vs-index-seek)
138. [What is Statistics in SQL Server?](#q138-what-is-statistics-in-sql-server)
139. [What is UPDATE_STATISTICS?](#q139-what-is-update-statistics)
140. [What is Fill Factor?](#q140-what-is-fill-factor)
141. [What is Page Split?](#q141-what-is-page-split)
142. [What are Hints in SQL Server?](#q142-what-are-hints-in-sql-server)
143. [What is Query Optimization?](#q143-what-is-query-optimization)
144. [What is Cost-Based Optimization?](#q144-what-is-cost-based-optimization)
145. [What is Parallel Query Execution?](#q145-what-is-parallel-query-execution)

</details>

<details>
<summary><strong>Section 12: Advanced Topics (Q146-Q165)</strong></summary>

146. [What is a Cursor?](#q146-what-is-a-cursor)
147. [Types of Cursors?](#q147-types-of-cursors)
148. [Why avoid Cursors?](#q148-why-avoid-cursors)
149. [What is CTE (Common Table Expression)?](#q149-what-is-cte-common-table-expression)
150. [What is a Recursive CTE?](#q150-what-is-a-recursive-cte)
151. [What are Temporary Tables?](#q151-what-are-temporary-tables)
152. [What are Table Variables?](#q152-what-are-table-variables)
153. [Difference between Temp Table and Table Variable?](#q153-difference-between-temp-table-and-table-variable)
154. [What is Dynamic SQL?](#q154-what-is-dynamic-sql)
155. [What is SQL Injection?](#q155-what-is-sql-injection)
156. [How to prevent SQL Injection?](#q156-how-to-prevent-sql-injection)
157. [What is Collation?](#q157-what-is-collation)
158. [What is Schema?](#q158-what-is-schema)
159. [What are Synonyms?](#q159-what-are-synonyms)
160. [What is a Sequence?](#q160-what-is-a-sequence)
161. [What is IDENTITY column?](#q161-what-is-identity-column)
162. [Difference between @@IDENTITY and SCOPE_IDENTITY?](#q162-difference-between-identity-and-scope-identity)
163. [What is IDENT_CURRENT?](#q163-what-is-ident-current)
164. [What are System Functions?](#q164-what-are-system-functions)
165. [What is @@ROWCOUNT?](#q165-what-is-rowcount)

</details>

<details>
<summary><strong>Section 13: SQL Server Specific (Q166-Q180)</strong></summary>

166. [What is OLTP?](#q166-what-is-oltp)
167. [What is OLAP?](#q167-what-is-olap)
168. [Difference between OLTP and OLAP?](#q168-difference-between-oltp-and-olap)
169. [What is Data Warehouse?](#q169-what-is-data-warehouse)
170. [What are Fact and Dimension Tables?](#q170-what-are-fact-and-dimension-tables)
171. [What is Star Schema?](#q171-what-is-star-schema)
172. [What is Snowflake Schema?](#q172-what-is-snowflake-schema)
173. [What is Replication?](#q173-what-is-replication)
174. [Types of Replication?](#q174-types-of-replication)
175. [What is BCP Utility?](#q175-what-is-bcp-utility)
176. [What is SSIS?](#q176-what-is-ssis)
177. [What is SSRS?](#q177-what-is-ssrs)
178. [What is SSAS?](#q178-what-is-ssas)
179. [What is Linked Server?](#q179-what-is-linked-server)
180. [What is DBCC?](#q180-what-is-dbcc)

</details>

<details>
<summary><strong>Section 14: Practical SQL Queries (Q181-Q200)</strong></summary>

181. [Find Second Highest Salary](#q181-find-second-highest-salary)
182. [Find Nth Highest Salary](#q182-find-nth-highest-salary)
183. [Find Duplicate Records](#q183-find-duplicate-records)
184. [Delete Duplicate Records](#q184-delete-duplicate-records)
185. [Find Employees with Same Salary](#q185-find-employees-with-same-salary)
186. [Display Odd Rows](#q186-display-odd-rows)
187. [Display Even Rows](#q187-display-even-rows)
188. [Find Employees Who Are Also Managers](#q188-find-employees-who-are-also-managers)
189. [Display Employee Name and Manager Name](#q189-display-employee-name-and-manager-name)
190. [Find Departments with No Employees](#q190-find-departments-with-no-employees)
191. [Find Employees Earning More Than Their Managers](#q191-find-employees-earning-more-than-their-managers)
192. [Find Students Scoring Above Average](#q192-find-students-scoring-above-average)
193. [Display Current Date and Time](#q193-display-current-date-and-time)
194. [Calculate Age from Date of Birth](#q194-calculate-age-from-date-of-birth)
195. [Find Max Salary from Each Department](#q195-find-max-salary-from-each-department)
196. [Display Row Numbers](#q196-display-row-numbers)
197. [Transpose Rows to Columns](#q197-transpose-rows-to-columns)
198. [Generate Running Total](#q198-generate-running-total)
199. [Find Consecutive Records](#q199-find-consecutive-records)
200. [String Concatenation from Multiple Rows](#q200-string-concatenation-from-multiple-rows)

</details>

---

## Section 1: Database Fundamentals

### Q1: What is a Database?

**Answer:**

A database is an organized, structured collection of data stored electronically in a computer system and managed by a Database Management System (DBMS). It efficiently stores, retrieves, modifies, and manages large volumes of information in a systematic manner using tables with rows (records) and columns (attributes).

**Key Components:**
- **Tables:** Store data in structured format
- **Rows:** Individual records
- **Columns:** Specific attributes or fields
- **Relationships:** Links between tables

**Advantages:**
- **Data Centralization:** Eliminates redundancy
- **Improved Security:** Access controls and authentication
- **Data Consistency:** Constraints and validation rules
- **Concurrent Access:** Multiple users simultaneously
- **Backup & Recovery:** Protection against data loss

**Common Use Cases:**
- Business applications (ERP, CRM)
- Web services and e-commerce
- Banking and financial systems
- Healthcare recordskeeping
- Inventory management

```sql
-- Creating a database
CREATE DATABASE CompanyDB;

-- Using the database
USE CompanyDB;

-- Creating a table within the database
CREATE TABLE Employees (
    EmployeeID INT PRIMARY KEY,
    FirstName VARCHAR(50),
    LastName VARCHAR(50),
   Department VARCHAR(50),
    Salary DECIMAL(10,2)
);
```

---

### Q2: What is DBMS?

**Answer:**

DBMS (Database Management System) is system software that acts as an interface between the database and users/applications, enabling efficient creation, retrieval, update, and management of data while ensuring integrity, security, and consistency.

**Key Functions:**
- **Data Definition (DDL):** Create and modify database structures
- **Data Manipulation (DML):** Insert, update, delete, and query data
- **Data Security:** Authentication and authorization controls
- **Concurrency Control:** Handle multiple simultaneous users
- **Backup & Recovery:** Protect against data loss

**Popular DBMS Examples:**
- **MySQL:** Open-source, widely used for web applications
- **Oracle Database:** Enterprise-level applications
- **Microsoft SQL Server:** Integrates with Windows environments
- **PostgreSQL:** Advanced open-source DBMS
- **MongoDB:** NoSQL database for unstructured data

**Advantages:**
- Reduced data redundancy through normalization
- Improved data consistency with integrity constraints
- Enhanced data security
- Easier data sharing across applications
- Faster data access through indexing
- Enforcement of data standards

---

### Q3: What is SQL?

**Answer:**

SQL (Structured Query Language) is a standardized programming language designed for managing and manipulating relational databases. It provides commands for querying data, modifying records, creating database structures, and controlling access.

**SQL Sublanguages:**

**1. Data Definition Language (DDL):**
- `CREATE` - Create database objects (tables, views, indexes)
- `ALTER` - Modify existing structures
- `DROP` - Delete database objects
- `TRUNCATE` - Remove all records while keeping structure

**2. Data Manipulation Language (DML):**
- `SELECT` - Retrieve data from tables
- `INSERT` - Add new records
- `UPDATE` - Modify existing records
- `DELETE` - Remove records

**3. Data Control Language (DCL):**
- `GRANT` - Give user privileges
- `REVOKE` - Remove user privileges

**4. Transaction Control Language (TCL):**
- `COMMIT` - Permanently save changes
- `ROLLBACK` - Undo changes
- `SAVEPOINT` - Set rollback points within transactions

**Key Characteristics:**
- Case-insensitive (in most DBMS)
- Highly portable across platforms
- Declarative (specify what, not how)
- Can be embedded in programming languages

```sql
-- DDL Example
CREATE TABLE Students (
    StudentID INT PRIMARY KEY,
    Name VARCHAR(100),
    Age INT,
    Grade CHAR(1)
);

-- DML Example
INSERT INTO Students VALUES (1, 'John Smith', 20, 'A');

SELECT * FROM Students WHERE Age > 18;

UPDATE Students SET Grade = 'B' WHERE StudentID = 1;

DELETE FROM Students WHERE StudentID = 1;

-- DCL Example
GRANT SELECT ON Students TO UserName;

-- TCL Example
BEGIN TRANSACTION;
UPDATE Students SET Grade = 'A' WHERE StudentID = 2;
COMMIT;
```

---

### Q4: What is RDBMS?

**Answer:**

RDBMS (Relational Database Management System) is a type of DBMS that stores data based on the relational model, organizing information into tables (relations) with rows and columns, and establishing relationships between tables using primary and foreign keys.

**Key Principles:**
- **Structure:** Data stored in tables with rows and columns
- **Integrity:** Accuracy ensured through constraints
- **Manipulation:** Data operations via SQL
- **Independence:** Separation of data storage from application logic

**ACID Properties:**
- **Atomicity:** All-or-nothing transaction execution
- **Consistency:** Database integrity maintained
- **Isolation:** Concurrent transactions don't interfere
- **Durability:** Committed changes are permanent

**Major Features:**
- Normalization to eliminate redundancy
- Complex queries with joins and subqueries
- Data security through authentication/authorization
- Scalability for growing data volumes
- Transaction management for consistency
- Referential integrity via foreign keys

**Popular RDBMS Products:**
- **Oracle Database:** Large enterprise applications
- **MySQL:** Web applications, open-source
- **Microsoft SQL Server:** Windows environments
- **PostgreSQL:** Advanced features, standards compliance
- **IBM DB2:** Mainframe and enterprise systems
- **SQLite:** Embedded database applications

```sql
-- Example of RDBMS structure with relationships
CREATE TABLE Department (
    DeptID INT PRIMARY KEY,
    DeptName VARCHAR(50),
    Location VARCHAR(50)
);

CREATE TABLE Employee (
    EmpID INT PRIMARY KEY,
    EmpName VARCHAR(100),
    DeptID INT,
    Salary DECIMAL(10,2),
    FOREIGN KEY (DeptID) REFERENCES Department(DeptID)
);

-- This establishes a relationship between Employee and Department tables
```

---

### Q5: What is a Database Table?

**Answer:**

A database table is the fundamental structure in a relational database that stores data in rows and columns. Each table represents a specific entity (Employees, Customers, Products) and contains related information about that entity.

**Table Components:**
- **Rows (Records/Tuples):** Individual instances of the entity
- **Columns (Fields/Attributes):** Specific characteristics with defined data types
- **Primary Key:** Uniquely identifies each row
- **Foreign Keys:** Reference primary keys in other tables
- **Constraints:** Rules enforcing data integrity (NOT NULL, UNIQUE, CHECK, DEFAULT)
- **Indexes:** Improve query performance
- **Triggers:** Auto-execute on certain events

**Table Properties:**
- Unique name within database schema
- Defined structure with column names and data types
- Can store zero or more rows
- Supports SELECT, INSERT, UPDATE, DELETE operations

```sql
-- Creating a comprehensive table example
CREATE TABLE Customer (
    CustomerID INT PRIMARY KEY IDENTITY(1,1),
    FirstName VARCHAR(50) NOT NULL,
    LastName VARCHAR(50) NOT NULL,
    Email VARCHAR(100) UNIQUE,
    Phone VARCHAR(15),
    DateOfBirth DATE,
    RegistrationDate DATETIME DEFAULT GETDATE(),
    Status VARCHAR(20) CHECK (Status IN ('Active', 'Inactive', 'Suspended')),
    AccountBalance DECIMAL(10,2) DEFAULT 0.00
);

-- Example data structure
-- CustomerID | FirstName | LastName | Email | Phone | DateOfBirth | RegistrationDate | Status | AccountBalance
-- 1 | John | Smith | john@email.com | 1234567890 | 1990-05-15 | 2024-01-01 | Active | 1000.00
```

---

### Q6: What is a Query?

**Answer:**

A query is a request for data from database tables, written in SQL, specifying what data to retrieve, how to filter it, and how to present results. Queries are the primary mechanism for extracting meaningful information for analysis, reporting, and decision-making.

**Common SQL Clauses:**
- **SELECT:** Specifies columns to retrieve (can include calculations, aggregate functions)
- **FROM:** Specifies source tables
- **WHERE:** Filters rows based on conditions
- **GROUP BY:** Groups rows with same values (used with aggregate functions)
- **HAVING:** Filters groups (applied after GROUP BY)
- **ORDER BY:** Sorts results (ASC/DESC)
- **JOIN:** Combines data from multiple related tables

**Query Capabilities:**
- Simple selection of all records
- Filtered retrieval with complex conditions
- Multi-table joins for related data
- Aggregations and grouping for summaries
- Subqueries (nested queries)
- Set operations (UNION, INTERSECT, EXCEPT)
- Window functions for analytics

```sql
-- Simple Query
SELECT * FROM Employees;

-- Filtered Query with condition
SELECT FirstName, LastName, Salary 
FROM Employees 
WHERE Salary > 50000 AND Department = 'Sales';

-- Query with JOIN
SELECT e.FirstName, e.LastName, d.DepartmentName
FROM Employees e
INNER JOIN Departments d ON e.DepartmentID = d.DepartmentID;

-- Query with GROUP BY and aggregate function
SELECT Department, COUNT(*) as EmployeeCount, AVG(Salary) as AvgSalary
FROM Employees
GROUP BY Department
HAVING COUNT(*) > 5
ORDER BY AvgSalary DESC;

-- Query with subquery
SELECT FirstName, LastName, Salary
FROM Employees
WHERE Salary > (SELECT AVG(Salary) FROM Employees);
```

---

### Q7: What is a Subquery?

**Answer:**

A subquery (inner query/nested query) is a SQL query embedded within another query, enclosed in parentheses, executed first to provide data for the outer query. Subqueries break down complex queries into manageable parts and can appear in WHERE, HAVING, FROM, or SELECT clauses.

**Subquery Result Types:**
- **Scalar Subquery:** Returns single value (one row, one column)
- **Row Subquery:** Returns single row with multiple columns
- **Column Subquery:** Returns single column with multiple rows
- **Table Subquery:** Returns multiple rows and columns

**Common Uses:**
- Filter data based on aggregated values
- Perform calculations depending on other calculations
- Create derived tables for complex analysis
- Implement logic difficult to express in single query

**Advantages:**
- Improved code readability
- Multi-step operations in single statement
- Dynamic filtering based on calculated values

**Performance Note:** Subqueries may impact performance with large datasets; consider JOINs as alternatives when appropriate.

```sql
-- Scalar Subquery - returns single value
SELECT FirstName, LastName, Salary
FROM Employees
WHERE Salary > (SELECT AVG(Salary) FROM Employees);

-- Column Subquery - returns single column
SELECT FirstName, LastName
FROM Employees
WHERE DepartmentID IN (SELECT DepartmentID FROM Departments WHERE Location = 'New York');

-- Subquery in FROM clause (Derived Table)
SELECT DeptName, AvgSalary
FROM (
    SELECT DepartmentID, AVG(Salary) as AvgSalary
    FROM Employees
    GROUP BY DepartmentID
) AS DeptAvg
JOIN Departments d ON DeptAvg.DepartmentID = d.DepartmentID;

-- Subquery in SELECT clause
SELECT 
    FirstName, 
    LastName, 
    Salary,
    (SELECT AVG(Salary) FROM Employees) as CompanyAvgSalary,
    Salary - (SELECT AVG(Salary) FROM Employees) as DifferenceFromAvg
FROM Employees;
```

---

### Q8: What are the Types of Subquery?

**Answer:**

Subqueries are classified based on dependency, result type, and location in SQL statements.

**1. Based on Dependency:**
- **Non-Correlated (Independent):** Executes once, independent of outer query; more efficient
- **Correlated (Dependent):** References outer query columns; executes per row; slower but necessary for row-by-row comparisons

**2. Based on Result Returned:**
- **Scalar Subquery:** Returns one value (1 row, 1 column); used with comparison operators
- **Row Subquery:** Returns single row with multiple columns
- **Column Subquery:** Returns single column with multiple rows; used with IN, ANY, ALL, EXISTS
- **Table Subquery:** Returns multiple rows and columns; used in FROM clause

**3. Based on Location:**
- **WHERE Clause:** Filter records based on conditions
- **HAVING Clause:** Filter groups after GROUP BY
- **FROM Clause:** Create derived tables/inline views
- **SELECT Clause:** Calculate values for each result row
- **DML Statements:** Within INSERT, UPDATE, DELETE

```sql
-- Non-Correlated Subquery Example
SELECT FirstName, LastName, Salary
FROM Employees
WHERE Salary > (SELECT AVG(Salary) FROM Employees);
-- The subquery runs once and returns avg salary

-- Correlated Subquery Example
SELECT e1.FirstName, e1.LastName, e1.Salary, e1.DepartmentID
FROM Employees e1
WHERE e1.Salary > (
    SELECT AVG(e2.Salary)
    FROM Employees e2
    WHERE e2.DepartmentID = e1.DepartmentID
);
-- Subquery runs for each row, comparing to department average

-- Scalar Subquery (single value)
SELECT FirstName, LastName
FROM Employees
WHERE EmployeeID = (SELECT ManagerID FROM Departments WHERE DepartmentName = 'Sales');

-- Row Subquery (single row, multiple columns)
SELECT FirstName, LastName
FROM Employees
WHERE (DepartmentID, Salary) = (SELECT DepartmentID, MAX(Salary) FROM Employees GROUP BY DepartmentID);

-- Column Subquery (multiple rows, single column)
SELECT FirstName, LastName
FROM Employees
WHERE DepartmentID IN (SELECT DepartmentID FROM Departments WHERE Location IN ('New York', 'Los Angeles'));

-- Table Subquery (multiple rows and columns)
SELECT AVG(DeptSalary) as AverageOfDepartmentAverages
FROM (
    SELECT DepartmentID, AVG(Salary) as DeptSalary
    FROM Employees
    GROUP BY DepartmentID
) AS DepartmentAverages;

-- EXISTS with Correlated Subquery
SELECT d.DepartmentName
FROM Departments d
WHERE EXISTS (
    SELECT 1 
    FROM Employees e 
    WHERE e.DepartmentID = d.DepartmentID 
    AND e.Salary > 100000
);
```

---

### Q9: What is Database Normalization?

**Answer:**

Database normalization is a systematic approach to organizing data in a relational database to minimize redundancy by dividing larger tables into smaller, related tables and defining relationships using foreign keys.

**Primary Goals:**
- Eliminate data redundancy (storing same data multiple times)
- Prevent data anomalies during INSERT, UPDATE, DELETE operations
- Ensure data dependencies make logical sense
- Improve data integrity and consistency
- Optimize database structure for efficient querying

**Data Anomalies Prevented:**
- **Insertion Anomaly:** Cannot add data without adding unrelated data
- **Update Anomaly:** Changing data in one place requires multiple updates
- **Deletion Anomaly:** Deleting data unintentionally removes other information

**Normalization Process:**
1. Identify repeating groups and move to separate tables
2. Ensure each piece of data stored in only one place
3. Establish proper relationships using primary and foreign keys

**Trade-offs:**
- Highly normalized databases may require complex joins
- Can impact query performance
- Denormalization sometimes used in data warehousing for read performance

```sql
-- Example of Unnormalized Data (problems with redundancy)
CREATE TABLE EmployeeUnnormalized (
    EmployeeID INT,
    EmployeeName VARCHAR(100),
    DepartmentName VARCHAR(50),
    DepartmentLocation VARCHAR(50),
    DepartmentManager VARCHAR(100)
);
-- Issues: Department info repeated for each employee
-- Changing department location requires updating multiple rows
-- Cannot add department without adding employee

-- After Normalization
CREATE TABLE Employee (
    EmployeeID INT PRIMARY KEY,
    EmployeeName VARCHAR(100),
    DepartmentID INT,
    FOREIGN KEY (DepartmentID) REFERENCES Department(DepartmentID)
);

CREATE TABLE Department (
    DepartmentID INT PRIMARY KEY,
    DepartmentName VARCHAR(50),
    DepartmentLocation VARCHAR(50),
    ManagerID INT
);
-- Benefits: No redundancy, can add departments independently
-- Updating department info happens in one place
```

---

### Q10: What are Database Normalization Forms?

**Answer:**

Database normalization forms are progressive guidelines that organize data to reduce redundancy and improve integrity. Each form builds upon the previous one. Most practical databases normalize to 3NF or BCNF.

**Normal Forms:**

**1st Normal Form (1NF):**
- Atomic values only (no repeating groups/arrays)
- Each column contains single data type
- Unique column names
- Order of data doesn't matter

**2nd Normal Form (2NF):**
- Must be in 1NF
- All non-key attributes fully dependent on entire primary key
- Eliminates partial dependencies (applies to composite keys)

**3rd Normal Form (3NF):**
- Must be in 2NF
- All attributes directly dependent on primary key
- No transitive dependencies (non-key attributes depending on other non-key attributes)

**Boyce-Codd Normal Form (BCNF):**
- Stricter version of 3NF
- Every determinant must be a candidate key

**4th Normal Form (4NF):**
- Must be in BCNF
- No multi-valued dependencies

**5th Normal Form (5NF):**
- Must be in 4NF
- Every join dependency implied by candidate keys

**Practical Application:** Most databases normalized to 3NF for balance between redundancy reduction and query performance.

```sql
-- Unnormalized Table (violates 1NF - has repeating groups)
CREATE TABLE StudentUnnormalized (
    StudentID INT,
    StudentName VARCHAR(100),
    CourseNames VARCHAR(500)  -- "Math, Physics, Chemistry"
);

-- First Normal Form (1NF) - Atomic values
CREATE TABLE Student (
    StudentID INT,
    StudentName VARCHAR(100),
    PRIMARY KEY (StudentID)
);

CREATE TABLE StudentCourse (
    StudentID INT,
    CourseName VARCHAR(100),
    PRIMARY KEY (StudentID, CourseName)
);

-- Violates 2NF (partial dependency)
CREATE TABLE OrderDetails (
    OrderID INT,
    ProductID INT,
    ProductName VARCHAR(100),  -- Depends only on ProductID, not full key
    Quantity INT,
    PRIMARY KEY (OrderID, ProductID)
);

-- Second Normal Form (2NF) - Eliminate partial dependencies
CREATE TABLE OrderDetails2NF (
    OrderID INT,
    ProductID INT,
    Quantity INT,
    PRIMARY KEY (OrderID, ProductID),
    FOREIGN KEY (ProductID) REFERENCES Product(ProductID)
);

CREATE TABLE Product (
    ProductID INT PRIMARY KEY,
    ProductName VARCHAR(100)
);

-- Violates 3NF (transitive dependency)
CREATE TABLE Employee3NFViolation (
    EmployeeID INT PRIMARY KEY,
    EmployeeName VARCHAR(100),
    DepartmentID INT,
    DepartmentName VARCHAR(100),  -- Depends on DepartmentID, not EmployeeID
    DepartmentLocation VARCHAR(100)  -- Depends on DepartmentID, not EmployeeID
);

-- Third Normal Form (3NF) - Eliminate transitive dependencies
CREATE TABLE Employee3NF (
    EmployeeID INT PRIMARY KEY,
    EmployeeName VARCHAR(100),
    DepartmentID INT,
    FOREIGN KEY (DepartmentID) REFERENCES Department(DepartmentID)
);

CREATE TABLE Department (
    DepartmentID INT PRIMARY KEY,
    DepartmentName VARCHAR(100),
    DepartmentLocation VARCHAR(100)
);
```

---

## Section 2: Keys and Constraints

### Q11: What is a Primary Key?

**Answer:**

A primary key is a column or combination of columns in a table that uniquely identifies each row, serving as the main identifier with strict constraints ensuring data integrity.

**Critical Constraints:**
- **Uniqueness:** No two rows can have same primary key value
- **NOT NULL:** Primary key cannot contain NULL values
- **One per table:** Only one primary key allowed per table
- **Can be composite:** Multiple columns can form composite primary key

**Automatic Features:**
- Creates unique clustered index by default (in SQL Server)
- Physically orders table data based on primary key
- Improves query performance for searches and sorts

**Role in Relationships:**
- Referenced by foreign keys in other tables
- Establishes referential integrity across database
- Enables table relationships (one-to-many, many-to-many)

**Primary Key Selection Criteria:**
- **Stable:** Should not change over time
- **Minimal:** Use least number of columns necessary
- **Simple:** Avoid complex business logic

**Common Approaches:**
- **Auto-incrementing Integer:** Simple and efficient
- **Natural Key:** Existing real-world data (SSN, Email)
- **GUID/UUID:** For distributed systems

```sql
-- Creating table with single column primary key
CREATE TABLE Customer (
    CustomerID INT PRIMARY KEY,
    FirstName VARCHAR(50),
    LastName VARCHAR(50),
    Email VARCHAR(100)
);

-- Creating table with auto-increment primary key
CREATE TABLE Orders (
    OrderID INT PRIMARY KEY IDENTITY(1,1),
    CustomerID INT,
    OrderDate DATETIME,
    TotalAmount DECIMAL(10,2),
    FOREIGN KEY (CustomerID) REFERENCES Customer(CustomerID)
);

-- Creating table with composite primary key
CREATE TABLE OrderDetails (
    OrderID INT,
    ProductID INT,
    Quantity INT,
    UnitPrice DECIMAL(10,2),
    PRIMARY KEY (OrderID, ProductID)
);

-- Adding primary key to existing table
ALTER TABLE Employee
ADD CONSTRAINT PK_Employee PRIMARY KEY (EmployeeID);

-- Example showing primary key prevents duplicates
INSERT INTO Customer VALUES (1, 'John', 'Doe', 'john@email.com');
INSERT INTO Customer VALUES (1, 'Jane', 'Smith', 'jane@email.com');
-- Second insert will fail due to primary key violation
```

---

### Q12: What is a Foreign Key?

**Answer:**

A foreign key is a column or set of columns that creates a link between two tables by referencing the primary key of another table, enforcing referential integrity.

**Key Characteristics:**
- **Child Table:** Table containing the foreign key
- **Parent Table:** Table being referenced
- **Referential Integrity:** Values must exist in referenced primary key or be NULL
- **Prevents Orphaned Records:** Maintains data consistency

**Referential Actions:**
- **CASCADE:** Automatically update/delete child records
- **SET NULL:** Set foreign key to NULL on parent delete
- **NO ACTION:** Prevent parent deletion if child records exist
- **SET DEFAULT:** Set foreign key to default value

**Properties:**
- Multiple foreign keys allowed per table
- Can be composite keys (multiple columns)
- Can reference multiple parent tables

```sql
-- Creating tables with foreign key
CREATE TABLE Department (
    DepartmentID INT PRIMARY KEY,
    DepartmentName VARCHAR(50)
);

CREATE TABLE Employee (
    EmployeeID INT PRIMARY KEY,
    EmployeeName VARCHAR(100),
    DepartmentID INT,
    FOREIGN KEY (DepartmentID) REFERENCES Department(DepartmentID)
);

-- Foreign key with CASCADE
CREATE TABLE Orders (
    OrderID INT PRIMARY KEY,
    CustomerID INT,
    FOREIGN KEY (CustomerID) REFERENCES Customer(CustomerID)
        ON DELETE CASCADE ON UPDATE CASCADE
);
```

---

### Q13: What is a Unique Key?

**Answer:**

A unique key is a constraint ensuring all values in a column or combination of columns are unique across the table, preventing duplicate entries.

**Key Differences from Primary Key:**
- **NULL Values:** Unique key can accept NULL values (usually one NULL per column)
- **Quantity:** Multiple unique keys allowed per table
- **Index Type:** Creates non-clustered index by default
- **Purpose:** Enforces uniqueness without being primary identifier

**Common Use Cases:**
- Email addresses
- Phone numbers
- Social Security Numbers
- Username fields
- Any column requiring uniqueness but not primary identification

**Automatic Features:**
- Non-clustered index created automatically
- Enforces uniqueness at database level

```sql
-- Creating table with unique key
CREATE TABLE User (
    UserID INT PRIMARY KEY,
    Username VARCHAR(50) UNIQUE,
    Email VARCHAR(100) UNIQUE,
    Phone VARCHAR(15)
);

-- Adding unique constraint
ALTER TABLE Employee
ADD CONSTRAINT UK_Employee_Email UNIQUE (Email);

-- Composite unique key
CREATE TABLE Product (
    ProductID INT PRIMARY KEY,
    ProductName VARCHAR(100),
    CategoryID INT,
    CONSTRAINT UK_Product_Name_Category UNIQUE (ProductName, CategoryID)
);
```

---

### Q14: What is a Candidate Key?

**Answer:**

A candidate key is a column or set of columns that can uniquely identify any record and could potentially serve as the primary key.

**Required Properties:**
- **Uniqueness:** No two rows have the same value
- **Irreducibility:** No subset of the key can uniquely identify records (minimal)

**Characteristics:**
- Table may have multiple candidate keys
- One candidate key chosen as primary key
- Others defined as unique keys

**Selection Criteria for Primary Key:**
- **Simplicity:** Fewer columns preferred
- **Stability:** Values don't change over time
- **Performance:** Efficient for indexing and joins
- **Natural vs Surrogate:** Consider business needs

```sql
-- Example: Student table with multiple candidate keys
CREATE TABLE Student (
    StudentID INT PRIMARY KEY,        -- Chosen as primary key
    Email VARCHAR(100) UNIQUE,         -- Candidate key
    SSN VARCHAR(11) UNIQUE,            -- Candidate key
    StudentName VARCHAR(100),
    DateOfBirth DATE
);

-- Both StudentID, Email, and SSN are candidate keys
-- StudentID is selected as primary key
-- Email and SSN are defined as unique keys
```

---

### Q15: Difference between Primary Key and Unique Key?

**Answer:**

Primary key and unique key both enforce uniqueness, but have significant differences in constraints, quantity, and purpose.

**Comparison:**

| Aspect | Primary Key | Unique Key |
|--------|-------------|------------|
| **NULL Values** | NOT allowed | Allowed (usually one NULL) |
| **Quantity per Table** | Only ONE | Multiple allowed |
| **Index Type** | Clustered (default) | Non-clustered (default) |
| **Purpose** | Main identifier | Enforce uniqueness |
| **Foreign Key Reference** | Can be referenced | Generally not referenced |
| **NOT NULL Constraint** | Automatic | Optional |

**Key Points:**
- Primary key has stricter constraints
- Primary key physically orders data (clustered index)
- Unique key allows flexibility with NULL values
- Both prevent duplicate values

```sql
-- Demonstrating differences
CREATE TABLE Employee (
    EmployeeID INT PRIMARY KEY,           -- Only one primary key
    Email VARCHAR(100) UNIQUE,            -- Can have multiple unique keys
    Phone VARCHAR(15) UNIQUE,             -- Another unique key
    SSN VARCHAR(11) UNIQUE,               -- Yet another unique key
    EmployeeName VARCHAR(100)
);

-- Primary Key: Cannot be NULL
INSERT INTO Employee VALUES (NULL, 'email@test.com', '123', '111-22-3333', 'John');  -- Fails

-- Unique Key: Can be NULL
INSERT INTO Employee VALUES (1, NULL, NULL, '111-22-3333', 'John');  -- Success
INSERT INTO Employee VALUES (2, NULL, NULL, '222-33-4444', 'Jane');  -- Success
```

---

### Q16: What is a Composite Key?

**Answer:**

A composite key is a primary key or unique key consisting of two or more columns combined to uniquely identify a record when a single column cannot.

**Characteristics:**
- **Multiple Columns:** Combination of 2+ columns
- **Unique Together:** Columns together must be unique
- **Individual Non-Unique:** Each column alone may not be unique
- **All Required:** All columns needed for unique identification

**Common Use Cases:**
- Junction tables (many-to-many relationships)
- OrderDetails (OrderID + ProductID)
- StudentCourse (StudentID + CourseID + Semester)
- Weak entities in ER diagrams

**Important Considerations:**
- Column order matters for index efficiency
- More columns = larger index size
- Choose minimal combination needed

```sql
-- Composite Primary Key
CREATE TABLE OrderDetails (
    OrderID INT,
    ProductID INT,
    Quantity INT,
    UnitPrice DECIMAL(10,2),
    PRIMARY KEY (OrderID, ProductID)
);

-- Composite Unique Key
CREATE TABLE StudentCourse (
    EnrollmentID INT PRIMARY KEY,
    StudentID INT,
    CourseID INT,
    Semester VARCHAR(20),
    CONSTRAINT UK_Student_Course UNIQUE (StudentID, CourseID, Semester)
);

-- Composite Foreign Key
CREATE TABLE OrderItems (
    ItemID INT PRIMARY KEY,
    OrderID INT,
    ProductID INT,
    FOREIGN KEY (OrderID, ProductID) 
        REFERENCES OrderDetails(OrderID, ProductID)
);
```

---

### Q17: What are Constraints in SQL?

**Answer:**

Constraints are rules enforced on table columns to maintain data accuracy, integrity, and reliability by limiting the type of data that can be inserted, updated, or deleted.

**Main Constraint Types:**

**1. PRIMARY KEY:**
- Uniquely identifies records
- Does NOT allow NULL
- Only one per table

**2. FOREIGN KEY:**
- Maintains referential integrity between tables
- Links child table to parent table

**3. UNIQUE:**
- Ensures all values in column are different
- Allows NULL values

**4. NOT NULL:**
- Prevents NULL values in column
- Ensures data presence

**5. CHECK:**
- Validates data against a condition
- Custom business rules

**6. DEFAULT:**
- Provides default value when none specified
- Reduces manual data entry

**Constraint Levels:**
- **Column Level:** Applied to single column
- **Table Level:** Can reference multiple columns

**Benefits:**
- Prevent invalid data entry
- Enforce business rules automatically
- Maintain database integrity
- Reduce application-level validation

```sql
-- Multiple constraints example
CREATE TABLE Employee (
    EmployeeID INT PRIMARY KEY,                    -- Primary Key
    Email VARCHAR(100) UNIQUE NOT NULL,            -- Unique + Not Null
    Age INT CHECK (Age >= 18),                     -- Check
    Status VARCHAR(20) DEFAULT 'Active',           -- Default
    DepartmentID INT NOT NULL,                     -- Not Null
    ManagerID INT,
    Salary DECIMAL(10,2) CHECK (Salary > 0),
    FOREIGN KEY (ManagerID) REFERENCES Employee(EmployeeID)  -- Foreign Key
);
-- Adding constraint to existing table
ALTER TABLE Employee
ADD CONSTRAINT CK_Employee_Salary CHECK (Salary BETWEEN 20000 AND 500000);
```

---

### Q18: What is a Check Constraint?

**Answer:**

A CHECK constraint limits the range of values for a column by specifying a condition that must be true for data to be inserted or updated.

**Key Features:**
- Validates data against logical expressions
- Uses comparison operators (<, >, =, !=, etc.)
- Can reference other columns in same row
- Can use logical operators (AND, OR, NOT)
- Can use functions (LEN, UPPER, etc.)

**Capabilities:**
- **Single Column:** Validate one column's values
- **Multi-Column:** Compare multiple columns
- **Complex Logic:** Combine multiple conditions
- **Named Constraints:** Easier management and identification

**Common Use Cases:**
- Age range validation (Age BETWEEN 18 AND 65)
- Positive values (Salary > 0)
- Enum-like values (Gender IN ('M', 'F', 'O'))
- Date comparisons (EndDate > StartDate)
- Email format validation

**Behavior:**
- Condition evaluates to TRUE: Data accepted
- Condition evaluates to FALSE: Operation rejected
- Multiple CHECK constraints allowed per column

```sql
-- Single column CHECK constraint
CREATE TABLE Employee (
    EmployeeID INT PRIMARY KEY,
    Age INT CHECK (Age >= 18),
    Salary DECIMAL(10,2) CHECK (Salary > 0),
    Gender CHAR(1) CHECK (Gender IN ('M', 'F', 'O'))
);

-- Multi-column CHECK constraint
CREATE TABLE Project (
    ProjectID INT PRIMARY KEY,
    StartDate DATE,
    EndDate DATE,
    Budget DECIMAL(15,2),
    CHECK (EndDate > StartDate),
    CHECK (Budget > 0)
);

-- Named CHECK constraint
CREATE TABLE Product (
    ProductID INT PRIMARY KEY,
    ProductName VARCHAR(100),
    Price DECIMAL(10,2),
    Discount DECIMAL(5,2),
    CONSTRAINT CK_Product_Price CHECK (Price > 0),
    CONSTRAINT CK_Product_Discount CHECK (Discount >= 0 AND Discount <= 100)
);

-- Adding CHECK constraint to existing table
ALTER TABLE Employee
ADD CONSTRAINT CK_Employee_Email CHECK (Email LIKE '%@%.%');
```

---

### Q19: What is a Default Constraint?

**Answer:**

A DEFAULT constraint provides an automatic value for a column when no value is specified during an INSERT operation.

**Key Features:**
- Ensures columns have values even without user input
- Applied only when value not explicitly provided
- Does NOT prevent NULL unless combined with NOT NULL
- Explicit NULL insertion bypasses default

**Default Value Types:**
- **Constants:** Fixed values ('Active', 0, 'USA')
- **System Functions:** GETDATE(), NEWID(), USER
- **Calculated Expressions:** Simple calculations

**Common Use Cases:**
- Registration/creation dates (GETDATE())
- Status flags ('Active', 'Pending')
- Default country or region
- Initial balances or counters (0)
- Boolean flags (0 or 1)

**Benefits:**
- Improves data consistency
- Reduces application logic complexity
- Ensures meaningful defaults
- Faster data entry

```sql
-- DEFAULT constraint examples
CREATE TABLE Customer (
    CustomerID INT PRIMARY KEY,
    CustomerName VARCHAR(100),
    RegistrationDate DATETIME DEFAULT GETDATE(),
    Status VARCHAR(20) DEFAULT 'Active',
    Country VARCHAR(50) DEFAULT 'USA',
    CreditLimit DECIMAL(10,2) DEFAULT 0.00
);

-- Inserting without specifying default columns
INSERT INTO Customer (CustomerID, CustomerName)
VALUES (1, 'John Doe');
-- RegistrationDate will be current date/time
-- Status will be 'Active'
-- Country will be 'USA'
-- CreditLimit will be 0.00

-- Adding DEFAULT constraint to existing table
ALTER TABLE Customer
ADD CONSTRAINT DF_Customer_Status DEFAULT 'Active' FOR Status;

-- Explicit NULL overrides DEFAULT
INSERT INTO Customer (CustomerID, CustomerName, Status)
VALUES (2, 'Jane Smith', NULL);  -- Status will be NULL, not 'Active'
```

---

### Q20: What is NOT NULL Constraint?

**Answer:**

A NOT NULL constraint ensures that a column cannot contain NULL values, requiring every row to have a valid value for that column.

**Key Characteristics:**
- Enforces mandatory data entry
- Prevents NULL values in column
- Must be explicitly specified (except for primary keys)
- Applies to INSERT and UPDATE operations

**Important Distinctions:**
- **NULL:** Absence of any value
- **Zero (0):** Actual numeric value
- **Empty String (''):** Actual text value (length zero)
- NOT NULL prevents only NULL, not zero or empty strings

**Automatic Application:**
- Primary key columns automatically NOT NULL
- Other columns allow NULL by default
- Must explicitly declare NOT NULL for other columns

**Common Use Cases:**
- Critical identifiers (Employee ID, Customer ID)
- Mandatory personal information (Name, Email)
- Required dates (Registration Date, Birth Date)
- Essential business fields

**Benefits:**
- Maintains data quality
- Prevents incomplete records
- Enforces data completeness
- Reduces data validation in application layer

```sql
-- NOT NULL constraint in table creation
CREATE TABLE Employee (
    EmployeeID INT PRIMARY KEY,
    FirstName VARCHAR(50) NOT NULL,
    LastName VARCHAR(50) NOT NULL,
    Email VARCHAR(100) NOT NULL,
    Phone VARCHAR(15),              -- Allows NULL
    DateOfBirth DATE NOT NULL
);

-- Attempting to insert NULL into NOT NULL column
INSERT INTO Employee (EmployeeID, FirstName, LastName, Email, DateOfBirth)
VALUES (1, 'John', NULL, 'john@email.com', '1990-01-01');  -- Fails: LastName is NOT NULL

-- Adding NOT NULL to existing column
ALTER TABLE Employee
ALTER COLUMN Phone VARCHAR(15) NOT NULL;

-- Combining NOT NULL with DEFAULT
CREATE TABLE Product (
    ProductID INT PRIMARY KEY,
    ProductName VARCHAR(100) NOT NULL,
    Status VARCHAR(20) NOT NULL DEFAULT 'Available',
    Price DECIMAL(10,2) NOT NULL
);
```

---

## Section 3: Indexes

### Q21: What is an Index?

**Answer:**

An index is a database object that improves data retrieval speed at the cost of additional storage and slower write operations, similar to a book's index that helps quickly locate information.

**How Indexes Work:**
- Creates separate data structure with sorted column values
- Contains pointers to actual table rows
- Allows quick row location without scanning entire table
- Database uses index to find matching rows efficiently

**Index Structure:**
- Stores indexed column values in sorted order
- Maintains pointers/references to actual data rows
- Can be created on single or multiple columns
- Separate from table data (additional storage)

**When Indexes Help:**
- SELECT queries with WHERE clauses
- JOIN operations between tables
- ORDER BY sorting
- Retrieving DISTINCT values
- Enforcing uniqueness

**Trade-offs:**
- **Pros:** Faster SELECT/read operations
- **Cons:** Additional storage space required
- **Cons:** Slower INSERT, UPDATE, DELETE (index maintenance)
- Should be created strategically

**Best Candidates for Indexing:**
- Columns in WHERE clauses
- Foreign key columns for JOINs
- Columns in ORDER BY clauses
- Frequently searched columns

```sql
-- Creating an index
CREATE INDEX IX_Employee_LastName ON Employee(LastName);

-- Creating unique index
CREATE UNIQUE INDEX UX_Employee_Email ON Employee(Email);

-- Creating composite index
CREATE INDEX IX_Employee_Dept_Salary ON Employee(DepartmentID, Salary);

-- Viewing index usage
SELECT * FROM Employee WHERE LastName = 'Smith';  -- Uses index
SELECT * FROM Employee WHERE FirstName = 'John';  -- Table scan if no index

-- Dropping an index
DROP INDEX IX_Employee_LastName ON Employee;
```

---

### Q22: Why do we need Indexes?

**Answer:**

Indexes are essential for improving query performance, especially on large tables, by reducing the amount of data the database needs to scan to find results.

**Problems Without Indexes:**
- **Table Scan:** Database reads every row
- **Slow Performance:** Time increases with table size
- **Inefficient Searches:** Linear search through all data
- **Poor Scalability:** Performance degrades as data grows

**Index Benefits:**
- **Faster SELECT Queries:** Quick data retrieval with WHERE clauses
- **Improved JOINs:** Faster table joining operations
- **Efficient Sorting:** ORDER BY operations use index order
- **Quick DISTINCT:** Faster unique value retrieval
- **Faster Lookups:** Direct row location

**Best Use Cases:**
- Columns frequently used in WHERE conditions
- Foreign key columns for JOIN operations
- Columns used in ORDER BY or GROUP BY
- Columns with high selectivity (many distinct values)

**Trade-offs to Consider:**
- **Additional Disk Space:** Indexes consume storage
- **Slower Writes:** INSERT, UPDATE, DELETE maintain indexes
- **Optimizer Confusion:** Too many indexes can be counterproductive
- **Maintenance Overhead:** Indexes need periodic optimization

**Strategy:** Create indexes strategically on columns that significantly benefit read performance.

```sql
-- Without index - Table scan (slow on large tables)
SELECT * FROM Employee WHERE DepartmentID = 10;
-- Reads all rows to find matching records

-- With index - Index seek (fast)
CREATE INDEX IX_Employee_DepartmentID ON Employee(DepartmentID);
SELECT * FROM Employee WHERE DepartmentID = 10;
-- Uses index to directly locate matching rows

-- Index benefits for JOIN
SELECT e.EmployeeName, d.DepartmentName
FROM Employee e
JOIN Department d ON e.DepartmentID = d.DepartmentID;
-- Index on DepartmentID improves join performance

-- Index benefits for ORDER BY
SELECT * FROM Employee ORDER BY LastName;
-- Index on LastName avoids sorting operation
```

---

### Q23: What are the Types of Indexes?

**Answer:**

SQL supports various index types, each serving specific purposes with different performance characteristics and storage requirements.

**Main Index Types:**

**1. Clustered Index:**
- Physically sorts and stores table data
- Only ONE per table
- Determines physical row order
- Leaf nodes contain actual data

**2. Non-Clustered Index:**
- Creates separate structure with pointers
- Multiple allowed per table
- Leaf nodes contain pointers to data
- Additional storage overhead

**3. Unique Index:**
- Ensures all values are unique
- Prevents duplicate entries
- Can be clustered or non-clustered

**4. Composite Index:**
- Built on multiple columns
- Useful for multi-column queries
- Column order matters

**5. Covering Index:**
- Includes all query-needed columns
- Avoids accessing base table
- Uses INCLUDE clause for non-key columns

**6. Filtered Index:**
- Created on subset of rows
- Based on WHERE condition
- Smaller, more efficient for specific queries

**7. Full-Text Index:**
- For text searching in large text columns
- Supports complex text queries

**8. Columnstore Index:**
- For data warehousing and analytics
- Stores data column-wise
- Excellent for aggregations

```sql
-- Clustered Index (only one per table)
CREATE CLUSTERED INDEX IX_Employee_EmployeeID ON Employee(EmployeeID);

-- Non-Clustered Index (multiple allowed)
CREATE NONCLUSTERED INDEX IX_Employee_LastName ON Employee(LastName);
CREATE NONCLUSTERED INDEX IX_Employee_Email ON Employee(Email);

-- Unique Index
CREATE UNIQUE INDEX UX_Employee_SSN ON Employee(SSN);

-- Composite Index
CREATE INDEX IX_Employee_Dept_Salary ON Employee(DepartmentID, Salary);

-- Filtered Index
CREATE INDEX IX_Employee_Active 
ON Employee(LastName) 
WHERE Status = 'Active';

-- Covering Index (includes non-key columns)
CREATE INDEX IX_Employee_Cover 
ON Employee(DepartmentID) 
INCLUDE (FirstName, LastName, Salary);
```

---

### Q24: What is a Clustered Index?

**Answer:**

A clustered index determines the physical order of data storage in a table by sorting and storing rows based on key column values.

**Key Characteristics:**
- **Only ONE per table:** Data can be sorted in only one order
- **Physical Order:** Determines how data is stored on disk
- **Leaf Nodes:** Contain actual data pages (not pointers)
- **Auto-Created:** Primary key creates clustered index by default

**Performance Benefits:**
- **Excellent for Range Queries:** Sequential data access
- **Fast ORDER BY:** Data already sorted
- **Efficient Multiple Row Retrieval:** Contiguous storage
- **No Additional Lookup:** Data is in the index

**Ideal Candidates:**
- Sequential values (IDs, dates)
- Columns in ORDER BY clauses
- Columns used in range searches
- Primary key columns

**Best Practices:**
- Keep key narrow (few bytes)
- Use unique or nearly unique columns
- Avoid frequently updated columns
- Consider sequential inserts

```sql
-- Creating clustered index
CREATE CLUSTERED INDEX IX_Employee_EmployeeID ON Employee(EmployeeID);

-- Primary key automatically creates clustered index
CREATE TABLE Orders (
    OrderID INT PRIMARY KEY,  -- Clustered index created automatically
    CustomerID INT,
    OrderDate DATETIME
);

-- Explicitly creating table with clustered index
CREATE TABLE Product (
    ProductID INT PRIMARY KEY NONCLUSTERED,  -- Non-clustered primary key
    ProductCode VARCHAR(20),
    ProductName VARCHAR(100)
);
CREATE CLUSTERED INDEX IX_Product_Code ON Product(ProductCode);

-- Range query benefits from clustered index
SELECT * FROM Orders 
WHERE OrderDate BETWEEN '2024-01-01' AND '2024-12-31';
-- Clustered index on OrderDate makes this very efficient
```

---

### Q25: What is a Non-Clustered Index?

**Answer:**

A non-clustered index creates a separate structure from table data containing indexed column values and pointers (row locators) to the actual data rows.

**Key Characteristics:**
- **Multiple Allowed:** Up to 999 non-clustered indexes per table (SQL Server)
- **Separate Structure:** Index distinct from table data
- **Leaf Nodes:** Contain index keys + row locators (pointers)
- **Row Locators:** Point to clustered index key or actual row location

**Row Locator Behavior:**
- With clustered index: Points to clustered index key
- Without clustered index: Points to actual row location (RID)

**Performance Characteristics:**
- **Good for Specific Lookups:** Fast equality searches
- **Additional Lookup:** May need to access base table
- **Covering Index:** Can avoid table lookup if all columns included
- **Slower for Ranges:** Compared to clustered index

**Ideal Use Cases:**
- Columns in WHERE clauses
- JOIN conditions
- Foreign key columns
- Frequently searched non-key columns

**Storage Impact:**
- Doesn't affect physical data order
- Additional storage required
- Maintenance overhead during DML operations

```sql
-- Creating non-clustered index
CREATE NONCLUSTERED INDEX IX_Employee_LastName ON Employee(LastName);

-- Multiple non-clustered indexes allowed
CREATE NONCLUSTERED INDEX IX_Employee_Email ON Employee(Email);
CREATE NONCLUSTERED INDEX IX_Employee_Department ON Employee(DepartmentID);
CREATE NONCLUSTERED INDEX IX_Employee_HireDate ON Employee(HireDate);

-- Non-clustered index with included columns (covering index)
CREATE NONCLUSTERED INDEX IX_Employee_Dept_Cover 
ON Employee(DepartmentID) 
INCLUDE (FirstName, LastName, Salary);

-- Query using non-clustered index
SELECT * FROM Employee WHERE Email = 'john@company.com';
-- Uses IX_Employee_Email to quickly find the row

-- Query benefiting from covering index
SELECT FirstName, LastName, Salary 
FROM Employee 
WHERE DepartmentID = 10;
-- Uses IX_Employee_Dept_Cover without accessing base table
```

---

### Q26: Difference between Clustered and Non-Clustered Index?

**Answer:**

Clustered and non-clustered indexes have fundamental differences in how they store and access data.

**Comprehensive Comparison:**

| Aspect | Clustered Index | Non-Clustered Index |
|--------|----------------|---------------------|
| **Number per Table** | Only 1 | Up to 999 (SQL Server) |
| **Data Storage** | Data IS the index | Separate structure with pointers |
| **Physical Order** | Determines physical row order | Doesn't affect data order |
| **Leaf Nodes** | Contain actual data pages | Contain keys + row locators |
| **Range Queries** | Excellent performance | Slower (needs lookups) |
| **Specific Lookups** | Good performance | Good with covering index |
| **Additional Space** | No extra space | Requires additional storage |
| **Auto-Creation** | Primary key (default) | Unique/foreign key constraints |
| **Data Retrieval** | Direct (no lookup needed) | May require table lookup |
| **Best For** | Sequential access, ranges | Specific value searches |

**Key Insights:**
- **Clustered:** Data sorted by index; one per table; faster ranges
- **Non-Clustered:** Separate index; multiple allowed; faster specific lookups

**When to Use:**
- **Clustered:** Primary keys, sequential data, range queries
- **Non-Clustered:** WHERE clauses, JOINs, multiple search columns

```sql
-- Clustered Index
CREATE CLUSTERED INDEX IX_Orders_OrderDate ON Orders(OrderDate);

-- Non-Clustered Index
CREATE NONCLUSTERED INDEX IX_Orders_CustomerID ON Orders(CustomerID);
```

---

### Q27: What is a Unique Index?

**Answer:**

A unique index ensures all values in the indexed column(s) are distinct, preventing duplicates while improving query performance.

**Key Characteristics:**
- **Enforces Uniqueness:** Prevents duplicate values
- **Auto-Created:** Created with UNIQUE or PRIMARY KEY constraints
- **Multiple Allowed:** Can have multiple unique indexes per table
- **NULL Values:** Allows NULL (unlike primary key)
- **Default Type:** Creates non-clustered index by default

**Dual Purpose:**
- **Data Integrity:** Enforces uniqueness constraint
- **Performance:** Improves query speed like regular index

**Unique vs Primary Key:**
- Unique index allows NULL values
- Primary key does NOT allow NULL
- Table can have multiple unique indexes
- Table has only one primary key

**Common Use Cases:**
- Email addresses
- Username fields
- Social Security Numbers
- Passport numbers
- Any column requiring uniqueness

```sql
-- Creating unique index
CREATE UNIQUE INDEX UX_Employee_Email ON Employee(Email);

-- Unique index on multiple columns
CREATE UNIQUE INDEX UX_Student_Course ON Enrollment(StudentID, CourseID);

-- Attempting duplicate insert fails
INSERT INTO Employee VALUES (1, 'John', 'john@email.com');
INSERT INTO Employee VALUES (2, 'Jane', 'john@email.com');  -- Error: duplicate email
```

---

### Q28: What is a Composite Index?

**Answer:**

A composite index is created on two or more columns, useful when queries frequently filter or sort by multiple columns together.

**Key Concept - Leftmost Prefix Rule:**
- Index most effective when matching leftmost columns first
- Example: Index on (LastName, FirstName) works for:
  - WHERE LastName = 'Smith' ✓
  - WHERE LastName = 'Smith' AND FirstName = 'John' ✓
  - WHERE FirstName = 'John' ✗ (skips leftmost)

**Column Order Considerations:**
- **Most Selective First:** Column with most unique values
- **Most Frequently Used First:** Column in most queries
- **Equality Before Range:** Equality conditions before range conditions

**Capabilities:**
- Up to 16 columns (SQL Server)
- Reduces need for multiple single-column indexes
- Improves multi-column WHERE and JOIN performance
- Supports compound search conditions

**Best Practices:**
- Order matters significantly
- Keep number of columns reasonable (typically 2-3)
- Consider query patterns when ordering
- Monitor index usage and efficiency

```sql
-- Creating composite index
CREATE INDEX IX_Employee_Name ON Employee(LastName, FirstName);

-- Effective queries (uses index)
SELECT * FROM Employee WHERE LastName = 'Smith';
SELECT * FROM Employee WHERE LastName = 'Smith' AND FirstName = 'John';

-- Ineffective query (doesn't use index efficiently)
SELECT * FROM Employee WHERE FirstName = 'John';  -- Skips leftmost column

-- Composite index for JOIN
CREATE INDEX IX_Order_Customer_Date ON Orders(CustomerID, OrderDate);
```

---

### Q29: When should you create an Index?

**Answer:**

Create indexes strategically on columns that significantly improve read performance while considering the overhead on write operations.

**Create Index When:**
- **Frequent WHERE Clauses:** Column heavily used in search conditions
- **Large Tables:** Thousands of rows+ where table scans expensive
- **Foreign Keys:** Columns used in JOIN operations
- **ORDER BY/GROUP BY:** Columns in sorting/grouping
- **High Selectivity:** Many unique values (EmployeeID, Email)
- **Read-Heavy Workload:** More SELECT than INSERT/UPDATE/DELETE

**Avoid Index When:**
- **Small Tables:** Few hundred rows (table scan faster)
- **Frequently Updated:** Columns modified often
- **Low Cardinality:** Few distinct values (Gender: M/F, Status: Y/N)
- **Write-Heavy Workload:** Heavy INSERT/UPDATE/DELETE operations
- **Wide Columns:** Large text or binary data
- **Rarely Queried:** Columns seldom used in searches

**Performance Trade-offs:**
- **Pros:** Faster SELECT, JOIN, ORDER BY, GROUP BY
- **Cons:** Slower INSERT, UPDATE, DELETE; extra storage; maintenance overhead

**Best Practices:**
- Index based on actual query patterns
- Monitor index usage regularly
- Remove unused indexes
- Consider covering indexes for specific queries
- Balance read vs write performance

```sql
-- Good indexing candidates
CREATE INDEX IX_Orders_CustomerID ON Orders(CustomerID);  -- Foreign key
CREATE INDEX IX_Orders_OrderDate ON Orders(OrderDate);    -- Frequent filtering
CREATE INDEX IX_Products_Category ON Products(CategoryID); -- Frequent grouping

-- Poor indexing candidates (avoid)
-- CREATE INDEX IX_Employee_Gender ON Employee(Gender);  -- Low cardinality
-- CREATE INDEX IX_Counter_Value ON Counter(Value);  -- Frequently updated
```

---

### Q30: What is Index Selectivity?

**Answer:**

Index selectivity measures how unique the values are in an indexed column, indicating the effectiveness of an index for query optimization.

**Formula:** 
```
Selectivity = (Distinct Values / Total Rows) × 100
```

**Selectivity Levels:**

**High Selectivity (>80%):**
- Many unique values
- Index highly effective
- Optimizer likely uses index
- **Examples:** EmployeeID, Email, SSN, OrderID

**Medium Selectivity (20-80%):**
- Moderate uniqueness
- Consider based on query patterns
- May or may not use index
- **Examples:** LastName, City, ZipCode

**Low Selectivity (<20%):**
- Few distinct values
- Index often ineffective
- Optimizer may ignore index
- **Examples:** Gender (M/F/O), Status (Active/Inactive), Boolean flags

**Impact on Query Optimization:**
- **High Selectivity:** Database uses index (fast)
- **Low Selectivity:** Database may prefer table scan
- Optimizer considers selectivity in execution plan decisions

**Real-World Example:**
- **Email (98% selectivity):** 10,000 employees, 9,800 unique emails
- **Gender (0.03% selectivity):** 10,000 employees, 3 values (M/F/O)

**Best Practice:** Index columns with high selectivity for maximum performance benefit.

```sql
-- High selectivity - Good for index
CREATE INDEX IX_Employee_Email ON Employee(Email);
-- 10,000 employees, 9,800 unique emails = 98% selectivity

-- Low selectivity - Poor for index
-- Gender: 10,000 employees, 3 values (M/F/O) = 0.03% selectivity
-- Database will likely ignore this index

-- Check selectivity
SELECT 
    COUNT(DISTINCT Email) * 100.0 / COUNT(*) AS EmailSelectivity,
    COUNT(DISTINCT Gender) * 100.0 / COUNT(*) AS GenderSelectivity
FROM Employee;

-- Result might show:
-- EmailSelectivity: 98.0
-- GenderSelectivity: 0.03
```

## Section 4: Joins

### Q31: What is a Join in SQL?

**Answer:**

A JOIN clause is used to combine rows from two or more tables based on a related column between them, allowing you to retrieve data from multiple tables in a single query. Joins are fundamental to relational databases because they enable you to work with normalized data by connecting related information stored across different tables. The most common join types are INNER JOIN which returns only matching rows from both tables, LEFT JOIN which returns all rows from the left table and matching rows from the right, RIGHT JOIN which returns all rows from the right table and matching rows from the left, and FULL JOIN which returns all rows from both tables. The join condition is typically specified using the ON clause, comparing primary and foreign key columns.

**Common Join Types:**
- **INNER JOIN:** Only matching records
- **LEFT JOIN:** All from left + matching from right
- **RIGHT JOIN:** All from right + matching from left
- **FULL JOIN:** All records from both tables
- **CROSS JOIN:** Cartesian product

```sql
-- Basic INNER JOIN
SELECT e.EmployeeName, d.DepartmentName
FROM Employee e
INNER JOIN Department d ON e.DepartmentID = d.DepartmentID;

-- Multiple table JOIN
SELECT o.OrderID, c.CustomerName, p.ProductName
FROM Orders o
JOIN Customers c ON o.CustomerID = c.CustomerID
JOIN OrderDetails od ON o.OrderID = od.OrderID
JOIN Products p ON od.ProductID = p.ProductID;
```

---

### Q32: What are Different Types of Joins?

**Answer:**

SQL supports several join types for different scenarios. INNER JOIN returns only rows where there's a match in both tables, filtering out non-matching rows. LEFT OUTER JOIN returns all rows from the left table and matched rows from the right table, with NULLs for non-matching right table columns. RIGHT OUTER JOIN returns all rows from the right table and matched rows from the left table. FULL OUTER JOIN returns all rows from both tables, with NULLs where there's no match. CROSS JOIN returns the Cartesian product of both tables, combining each row from the first table with every row from the second. SELF JOIN joins a table to itself, useful for hierarchical data. Each join type serves specific querying needs based on what data relationships you want to retrieve.

**Join Types Summary:**
- **INNER:** Only matching rows (intersection)
- **LEFT OUTER:** All left + matching right
- **RIGHT OUTER:** All right + matching left  
- **FULL OUTER:** All rows from both (union)
- **CROSS:** All combinations (Cartesian product)
- **SELF:** Table joined with itself

```sql
-- INNER JOIN
SELECT * FROM Employee e
INNER JOIN Department d ON e.DeptID = d.DeptID;

-- LEFT JOIN
SELECT * FROM Employee e
LEFT JOIN Department d ON e.DeptID = d.DeptID;

-- RIGHT JOIN
SELECT * FROM Employee e
RIGHT JOIN Department d ON e.DeptID = d.DeptID;

-- FULL OUTER JOIN
SELECT * FROM Employee e
FULL OUTER JOIN Department d ON e.DeptID = d.DeptID;

-- CROSS JOIN
SELECT * FROM Colors CROSS JOIN Sizes;

-- SELF JOIN
SELECT e1.Name as Employee, e2.Name as Manager
FROM Employee e1
JOIN Employee e2 ON e1.ManagerID = e2.EmployeeID;
```

---

### Q33: What is an Inner Join?

**Answer:**

INNER JOIN returns only the rows where there is a match in both tables based on the join condition, effectively giving you the intersection of two tables. It is the most commonly used join type and is the default join in SQL, meaning you can write JOIN instead of INNER JOIN. If a row in the left table has no corresponding match in the right table, or vice versa, that row is excluded from the result set. INNER JOIN is ideal when you only want records that have valid relationships in both tables, such as employees who belong to existing departments or orders that have customer information.

**Key Points:**
- Returns only matching rows from both tables
- Non-matching rows are excluded
- Default JOIN type (INNER is optional)
- Most restrictive join type

```sql
-- INNER JOIN syntax
SELECT e.EmployeeName, d.DepartmentName, d.Location
FROM Employee e
INNER JOIN Department d ON e.DepartmentID = d.DepartmentID;

-- Using just JOIN (same as INNER JOIN)
SELECT e.EmployeeName, d.DepartmentName
FROM Employee e
JOIN Department d ON e.DepartmentID = d.DepartmentID;

-- Multiple conditions
SELECT o.OrderID, c.CustomerName, o.OrderDate
FROM Orders o
INNER JOIN Customers c ON o.CustomerID = c.CustomerID 
    AND o.OrderDate >= c.RegistrationDate;

-- Example result:
-- Only employees with valid department IDs are shown
-- Employees without department or with invalid DeptID are excluded
```

---

### Q34: What is a Left Outer Join?

**Answer:**

LEFT OUTER JOIN (or simply LEFT JOIN) returns all rows from the left table and the matched rows from the right table, filling NULL values for right table columns where there's no match. This is useful when you want to preserve all records from the left table regardless of whether they have corresponding records in the right table. For example, if you want to list all employees including those not assigned to any department, or all customers including those who haven't placed orders yet, you would use LEFT JOIN. The LEFT keyword refers to the table mentioned first (before the JOIN keyword).

**Characteristics:**
- All rows from left table are included
- Matching rows from right table are included
- NULL for right table columns when no match
- Preserves left table data completeness

```sql
-- LEFT JOIN example
SELECT e.EmployeeName, d.DepartmentName
FROM Employee e
LEFT JOIN Department d ON e.DepartmentID = d.DepartmentID;
-- Shows all employees, even those without department

-- Find employees without department
SELECT e.EmployeeName, e.DepartmentID
FROM Employee e
LEFT JOIN Department d ON e.DepartmentID = d.DepartmentID
WHERE d.DepartmentID IS NULL;

-- Customers with or without orders
SELECT c.CustomerName, COUNT(o.OrderID) as OrderCount
FROM Customers c
LEFT JOIN Orders o ON c.CustomerID = o.CustomerID
GROUP BY c.CustomerID, c.CustomerName;
```

---

### Q35: What is a Right Outer Join?

**Answer:**

RIGHT OUTER JOIN (or RIGHT JOIN) returns all rows from the right table and the matched rows from the left table, with NULL values for left table columns where there's no match. It's essentially the opposite of LEFT JOIN, preserving all records from the right table (the one after the JOIN keyword) regardless of matches in the left table. RIGHT JOIN is less commonly used than LEFT JOIN because you can achieve the same result by swapping table order and using LEFT JOIN. It's useful when you want to ensure all records from the second table are displayed, such as showing all departments even if they have no employees.

**Characteristics:**
- All rows from right table are included
- Matching rows from left table are included  
- NULL for left table columns when no match
- Less common than LEFT JOIN

```sql
-- RIGHT JOIN example
SELECT e.EmployeeName, d.DepartmentName
FROM Employee e
RIGHT JOIN Department d ON e.DepartmentID = d.DepartmentID;
-- Shows all departments, even those without employees

-- Find departments without employees
SELECT d.DepartmentName, d.DepartmentID
FROM Employee e
RIGHT JOIN Department d ON e.DepartmentID = d.DepartmentID
WHERE e.EmployeeID IS NULL;

-- Equivalent LEFT JOIN (more common approach)
SELECT e.EmployeeName, d.DepartmentName
FROM Department d
LEFT JOIN Employee e ON e.DepartmentID = d.DepartmentID;
-- Same result as RIGHT JOIN above
```

---

### Q36: What is a Full Outer Join?

**Answer:**

FULL OUTER JOIN (or FULL JOIN) returns all rows from both tables, matching rows where possible and filling with NULL where there's no match on either side. It combines the results of both LEFT and RIGHT joins, showing matched rows plus unmatched rows from both tables. This join type is useful when you want to see all data from both tables regardless of relationships, such as finding all employees and all departments including employees without departments and departments without employees. FULL OUTER JOIN is less commonly used but valuable for identifying orphaned records or data inconsistencies.

**Characteristics:**
- All rows from both tables included
- Matched rows show data from both sides
- NULL where no match exists
- Combination of LEFT and RIGHT joins

```sql
-- FULL OUTER JOIN example
SELECT e.EmployeeName, d.DepartmentName
FROM Employee e
FULL OUTER JOIN Department d ON e.DepartmentID = d.DepartmentID;
-- Shows all employees and all departments

-- Find orphaned records (no match on either side)
SELECT e.EmployeeName, d.DepartmentName
FROM Employee e
FULL OUTER JOIN Department d ON e.DepartmentID = d.DepartmentID
WHERE e.EmployeeID IS NULL OR d.DepartmentID IS NULL;

-- Compare two tables for differences
SELECT 
    COALESCE(t1.ID, t2.ID) as ID,
    t1.Value as Table1Value,
    t2.Value as Table2Value
FROM Table1 t1
FULL OUTER JOIN Table2 t2 ON t1.ID = t2.ID
WHERE t1.Value != t2.Value OR t1.ID IS NULL OR t2.ID IS NULL;
```

---

### Q37: What is a Self Join?

**Answer:**

A SELF JOIN is a regular join where a table is joined with itself, useful for comparing rows within the same table or handling hierarchical data. You must use table aliases to differentiate between the two instances of the same table. Common use cases include finding employees and their managers from the same Employee table, comparing records within a table, or working with parent-child relationships. Self joins can be INNER, LEFT, RIGHT, or FULL joins depending on requirements. They're particularly valuable for organizational hierarchies, bill-of-materials structures, or any scenario where records reference other records in the same table.

**Common Use Cases:**
- Employee-Manager relationships
- Hierarchical data structures
- Comparing rows within same table
- Finding duplicates or related records

```sql
-- Employee-Manager relationship
SELECT 
    e1.EmployeeName as Employee,
    e2.EmployeeName as Manager
FROM Employee e1
INNER JOIN Employee e2 ON e1.ManagerID = e2.EmployeeID;

-- Find employees in same department
SELECT 
    e1.EmployeeName as Employee1,
    e2.EmployeeName as Employee2,
    e1.DepartmentID
FROM Employee e1
INNER JOIN Employee e2 ON e1.DepartmentID = e2.DepartmentID
WHERE e1.EmployeeID < e2.EmployeeID;  -- Avoid duplicate pairs

-- Hierarchical structure with levels
SELECT 
    e1.Name as Employee,
    e2.Name as Manager,
    e3.Name as Director
FROM Employee e1
LEFT JOIN Employee e2 ON e1.ManagerID = e2.EmployeeID
LEFT JOIN Employee e3 ON e2.ManagerID = e3.EmployeeID;
```

---

### Q38: What is a Cross Join?

**Answer:**

CROSS JOIN produces the Cartesian product of two tables, meaning it combines each row from the first table with every row from the second table, resulting in a result set with rows equal to the product of row counts from both tables. If Table A has 10 rows and Table B has 5 rows, the CROSS JOIN produces 50 rows. It doesn't require an ON clause because there's no matching condition. CROSS JOIN is useful for generating combinations, creating test data, or producing matrices of all possible pairings. However, it should be used carefully as it can produce very large result sets and impact performance.

**Characteristics:**
- Returns Cartesian product
- No ON clause required
- Result rows = Table1 rows × Table2 rows
- Use cautiously due to large result sets

```sql
-- Basic CROSS JOIN
SELECT c.Color, s.Size
FROM Colors c
CROSS JOIN Sizes s;
-- If Colors has 5 rows and Sizes has 4 rows, result has 20 rows

-- Generate all day-time slot combinations
SELECT d.DayName, t.TimeSlot
FROM Days d
CROSS JOIN TimeSlots t;

-- Create number sequence
SELECT t1.n + t2.n * 10 as Number
FROM (VALUES (0),(1),(2),(3),(4),(5),(6),(7),(8),(9)) t1(n)
CROSS JOIN (VALUES (0),(1),(2),(3),(4),(5),(6),(7),(8),(9)) t2(n);

-- Using WHERE to filter cross join (acts like INNER JOIN)
SELECT e.EmployeeName, d.DepartmentName
FROM Employee e
CROSS JOIN Department d
WHERE e.DepartmentID = d.DepartmentID;
```

---

### Q39: Difference between Inner Join and Outer Join?

**Answer:**

INNER JOIN returns only rows that have matching values in both tables, excluding any rows without matches, while OUTER JOIN returns matching rows plus unmatched rows from one or both tables with NULL values for missing data. INNER JOIN is more restrictive and gives you the intersection of datasets, whereas OUTER JOIN is more inclusive and preserves data from one or both tables. OUTER JOIN has three types: LEFT (all from left table), RIGHT (all from right table), and FULL (all from both tables). Use INNER JOIN when you only need related records, and OUTER JOIN when you need to preserve all records from one or both tables.

**Key Differences:**
- **Result Set:** INNER (only matches), OUTER (matches + unmatched)
- **Data Loss:** INNER (may exclude rows), OUTER (preserves rows)
- **Use Case:** INNER (strict relationships), OUTER (include orphans)
- **NULL Values:** INNER (no NULLs), OUTER (NULLs for unmatched)

```sql
-- INNER JOIN - Only employees with departments
SELECT e.EmployeeName, d.DepartmentName
FROM Employee e
INNER JOIN Department d ON e.DepartmentID = d.DepartmentID;
-- Result: 100 employees (excluding 10 without departments)

-- LEFT OUTER JOIN - All employees
SELECT e.EmployeeName, d.DepartmentName
FROM Employee e
LEFT JOIN Department d ON e.DepartmentID = d.DepartmentID;
-- Result: 110 employees (including 10 without departments)

-- Comparison with sample data
-- Employee: 110 rows, Department: 20 rows
-- INNER JOIN: ~100 rows (only matching)
-- LEFT JOIN: 110 rows (all employees)
-- RIGHT JOIN: ~105 rows (all departments + matched employees)
-- FULL JOIN: ~115 rows (all from both)
```

---

### Q40: Can you join more than two tables?

**Answer:**

Yes, you can join multiple tables in a single query by chaining JOIN clauses, which is common in relational databases where data is normalized across many tables. Each JOIN operation connects two tables at a time, and you can continue adding more JOIN clauses to include additional tables. The joins are processed sequentially, building up the result set step by step. When joining multiple tables, ensure proper join conditions to avoid Cartesian products, consider the order of joins for performance, and use appropriate join types for each relationship. Complex multi-table joins are common in real-world applications for combining customer, order, product, and related information.

**Best Practices:**
- Use clear table aliases
- Join on indexed columns for performance
- Consider join order (smaller tables first)
- Use appropriate join type for each relationship

```sql
-- Joining four tables
SELECT 
    c.CustomerName,
    o.OrderDate,
    p.ProductName,
    od.Quantity,
    od.UnitPrice
FROM Customers c
INNER JOIN Orders o ON c.CustomerID = o.CustomerID
INNER JOIN OrderDetails od ON o.OrderID = od.OrderID
INNER JOIN Products p ON od.ProductID = p.ProductID
WHERE o.OrderDate >= '2024-01-01';

-- Mix of JOIN types
SELECT 
    e.EmployeeName,
    d.DepartmentName,
    p.ProjectName,
    m.EmployeeName as ManagerName
FROM Employee e
LEFT JOIN Department d ON e.DepartmentID = d.DepartmentID
LEFT JOIN Project p ON e.ProjectID = p.ProjectID
LEFT JOIN Employee m ON e.ManagerID = m.EmployeeID;

-- Complex business query
SELECT 
    o.OrderID,
    c.CustomerName,
    e.EmployeeName as SalesRep,
    p.ProductName,
    cat.CategoryName,
    od.Quantity * od.UnitPrice as LineTotal
FROM Orders o
JOIN Customers c ON o.CustomerID = c.CustomerID
JOIN Employees e ON o.EmployeeID = e.EmployeeID
JOIN OrderDetails od ON o.OrderID = od.OrderID
JOIN Products p ON od.ProductID = p.ProductID
JOIN Categories cat ON p.CategoryID = cat.CategoryID;
```

---

### Q41: What is the default Join type?

**Answer:**

The default JOIN type in SQL is INNER JOIN, meaning when you write just JOIN without specifying the type, the database treats it as an INNER JOIN. This returns only the rows where there is a match in both tables based on the join condition. Most databases follow this standard, though it's good practice to explicitly write INNER JOIN for code clarity. The INNER keyword is optional but recommended for readability, especially for developers who might be less familiar with SQL defaults or when maintaining complex queries with multiple joins of different types.

```sql
-- These are equivalent (both are INNER JOIN)
SELECT e.Name, d.DeptName
FROM Employee e
JOIN Department d ON e.DeptID = d.DeptID;

SELECT e.Name, d.DeptName
FROM Employee e
INNER JOIN Department d ON e.DeptID = d.DeptID;

-- Explicitly specify other join types
SELECT e.Name, d.DeptName
FROM Employee e
LEFT JOIN Department d ON e.DeptID = d.DeptID;  -- Must specify LEFT

SELECT e.Name, d.DeptName
FROM Employee e
RIGHT JOIN Department d ON e.DeptID = d.DeptID;  -- Must specify RIGHT
```

---

### Q42: What is Natural Join?

**Answer:**

NATURAL JOIN is a type of join that automatically joins tables based on columns with the same name and compatible data types, eliminating the need to specify the join condition explicitly. It's supported in some databases like MySQL, PostgreSQL, and Oracle but not in SQL Server. While it can make queries shorter, it's generally discouraged in production code because it's implicit, can cause unexpected results if table structures change, and reduces query clarity. If a column is added to one table with the same name as a column in another table, the natural join behavior changes automatically, potentially breaking queries.

**Caution Points:**
- Automatic join on same-named columns
- No explicit ON clause needed
- Can cause unexpected results
- Not recommended for production code

```sql
-- Natural Join (MySQL, PostgreSQL)
SELECT *
FROM Employee
NATURAL JOIN Department;
-- Automatically joins on any columns with same name

-- Equivalent explicit join (preferred)
SELECT *
FROM Employee e
INNER JOIN Department d ON e.DepartmentID = d.DepartmentID;

-- Problem scenario
-- If both tables have 'Name' column, natural join uses both columns
-- Can lead to unexpected results
```

---

### Q43: Difference between Join and Union?

**Answer:**

JOIN combines columns from multiple tables horizontally based on a related column, increasing the number of columns in the result set, while UNION combines rows from multiple queries vertically, stacking result sets on top of each other with the same columns. JOIN requires a relationship between tables through common columns, whereas UNION requires that all SELECT statements have the same number of columns with compatible data types. JOIN is used to retrieve related data from multiple tables, while UNION is used to combine similar data from different sources or queries. JOIN can produce more rows or the same rows, while UNION typically produces more rows unless there are duplicates.

**Key Differences:**
- **Operation:** JOIN (horizontal/columns), UNION (vertical/rows)
- **Result:** JOIN (more columns), UNION (more rows)
- **Requirement:** JOIN (related columns), UNION (same structure)
- **Use Case:** JOIN (related data), UNION (combine results)

```sql
-- JOIN - Combines columns
SELECT e.Name, d.DeptName
FROM Employee e
JOIN Department d ON e.DeptID = d.DeptID;
-- Result: Name and DeptName columns

-- UNION - Combines rows
SELECT EmployeeName FROM Employee WHERE City = 'New York'
UNION
SELECT EmployeeName FROM Employee WHERE City = 'Los Angeles';
-- Result: Combined list of employee names

-- UNION must have same column structure
SELECT CustomerName, City FROM Customers
UNION
SELECT SupplierName, City FROM Suppliers;
-- Combines customers and suppliers into one list
```

---

### Q44: What is Equi Join?

**Answer:**

EQUI JOIN is a type of join where the join condition uses an equality operator (=) to match rows between tables based on equal values in specified columns. It's the most common type of join condition and forms the basis of most INNER, LEFT, RIGHT, and FULL joins. The term "equi" comes from "equality," referring to the use of the equals operator. Most joins you write in practice are equi joins because relationships between tables are typically defined through matching ID values or key columns. Non-equi joins, which use operators other than equals, are much less common.

**Characteristics:**
- Uses equality operator (=)
- Most common join condition
- Matches on equal values
- Foundation of relational database joins

```sql
-- Equi Join examples
SELECT e.Name, d.DeptName
FROM Employee e
INNER JOIN Department d ON e.DeptID = d.DeptID;  -- Equi join using =

SELECT o.OrderID, c.CustomerName
FROM Orders o
JOIN Customers c ON o.CustomerID = c.CustomerID;  -- Equi join

-- Multiple equi join conditions
SELECT od.OrderID, p.ProductName
FROM OrderDetails od
JOIN Products p ON od.ProductID = p.ProductID 
    AND od.StoreID = p.StoreID;  -- Both conditions use =
```

---

### Q45: What is Non-Equi Join?

**Answer:**

NON-EQUI JOIN is a join where the join condition uses comparison operators other than equality, such as greater than (>), less than (<), BETWEEN, or NOT EQUAL (<>). These joins are less common but useful for specific scenarios like matching ranges, finding overlapping periods, or comparing values. Examples include matching salary ranges, finding employees hired within specific date ranges, or identifying price brackets. Non-equi joins often produce larger result sets and can be less performant than equi joins because they can't leverage index structures as efficiently.

**Common Operators:**
- Greater than (>), Less than (<)
- BETWEEN, NOT EQUAL (<>)
- Greater/Less than or equal (>=, <=)

**Use Cases:**
- Range matching
- Overlapping periods
- Hierarchical comparisons

```sql
-- Salary range matching
SELECT e.EmployeeName, e.Salary, g.GradeName
FROM Employee e
JOIN SalaryGrade g ON e.Salary BETWEEN g.MinSalary AND g.MaxSalary;

-- Find senior employees
SELECT e1.Name as Junior, e2.Name as Senior
FROM Employee e1
JOIN Employee e2 ON e1.HireDate > e2.HireDate
WHERE e1.DepartmentID = e2.DepartmentID;

-- Overlapping date ranges
SELECT c1.CourseName, c2.CourseName
FROM Courses c1
JOIN Courses c2 ON c1.StartDate < c2.EndDate 
    AND c1.EndDate > c2.StartDate
WHERE c1.CourseID <> c2.CourseID;

-- Price comparison
SELECT p1.ProductName, p2.ProductName
FROM Products p1
JOIN Products p2 ON p1.Price < p2.Price
WHERE p1.CategoryID = p2.CategoryID;
```


## Section 5: Stored Procedures and Functions

### Q46: What is a Stored Procedure?

**Answer:**

A stored procedure is a precompiled collection of SQL statements stored in the database that can be executed as a single unit by calling its name. It acts like a database function that can accept input parameters, perform operations like SELECT, INSERT, UPDATE, DELETE, and return output parameters or result sets. Stored procedures are compiled once and stored in execution plan cache, improving performance for repeated executions. They provide benefits like code reusability, reduced network traffic since only procedure call is sent instead of multiple SQL statements, enhanced security through permission control, and centralized business logic in the database layer.

**Key Benefits:**
- Precompiled and cached for better performance
- Reduces network traffic
- Provides security through permission grants
- Encapsulates business logic
- Supports input/output parameters
- Can handle transactions and error handling

```sql
-- Creating a stored procedure
CREATE PROCEDURE GetEmployeesByDepartment
    @DepartmentID INT
AS
BEGIN
    SELECT EmployeeID, EmployeeName, Salary
    FROM Employee
    WHERE DepartmentID = @DepartmentID;
END;

-- Executing stored procedure
EXEC GetEmployeesByDepartment @DepartmentID = 10;

-- Stored procedure with multiple parameters
CREATE PROCEDURE InsertEmployee
    @Name VARCHAR(100),
    @DeptID INT,
    @Salary DECIMAL(10,2)
AS
BEGIN
    INSERT INTO Employee (EmployeeName, DepartmentID, Salary)
    VALUES (@Name, @DeptID, @Salary);
END;

-- Execute with parameters
EXEC InsertEmployee @Name = 'John Doe', @DeptID = 5, @Salary = 50000;
```

---

### Q47: Why use Stored Procedures?

**Answer:**

Stored procedures offer multiple advantages including improved performance through precompilation and execution plan caching, reduced network traffic by sending only procedure calls instead of lengthy SQL code, enhanced security by granting execute permissions without exposing underlying table structures, code reusability across multiple applications, centralized business logic maintenance, transaction management with proper error handling, and protection against SQL injection attacks when properly parameterized. They enable database-side processing which is faster than fetching data to application layer, and allow for complex business logic implementation with conditional statements, loops, and error handling that would be difficult in standard SQL queries.

**Main Advantages:**
- Performance optimization through caching
- Network bandwidth reduction
- Security through permission abstraction
- Code maintainability and reusability
- Prevention of SQL injection
- Complex logic implementation
- Transaction control

```sql
-- Complex business logic in stored procedure
CREATE PROCEDURE ProcessMonthlyPayroll
    @Month INT,
    @Year INT
AS
BEGIN
    BEGIN TRANSACTION;
    BEGIN TRY
        -- Calculate salaries
        UPDATE Employee
        SET LastPaymentDate = GETDATE();
        
        -- Insert payment records
        INSERT INTO PaymentHistory (EmployeeID, Amount, PaymentDate)
        SELECT EmployeeID, Salary, GETDATE()
        FROM Employee
        WHERE IsActive = 1;
        
        -- Update statistics
        UPDATE PayrollStats
        SET TotalProcessed = TotalProcessed + @@ROWCOUNT;
        
        COMMIT TRANSACTION;
        PRINT 'Payroll processed successfully';
    END TRY
    BEGIN CATCH
        ROLLBACK TRANSACTION;
        PRINT 'Error: ' + ERROR_MESSAGE();
    END CATCH;
END;
```

---

### Q48: What is a Function in SQL?

**Answer:**

A function in SQL is a database object that accepts input parameters, performs operations, and must return a single value or a table. Unlike stored procedures, functions are designed to compute and return values that can be used in SQL statements like SELECT, WHERE, or JOIN clauses. SQL functions are divided into built-in system functions provided by the database and user-defined functions created by developers. Functions cannot modify database state through INSERT, UPDATE, or DELETE operations, making them read-only operations. They can return scalar values (single value), table values (result set), or aggregate values (computed from multiple rows).

**Function Characteristics:**
- Must return a value
- Can be used in SELECT statements
- Cannot modify data (no DML operations)
- Can accept parameters
- Two types: System functions and User-defined functions

**Types:**
- **Scalar Functions:** Return single value
- **Table-Valued Functions:** Return table
- **Aggregate Functions:** Compute from multiple rows

```sql
-- Scalar function example
CREATE FUNCTION CalculateBonus(@Salary DECIMAL(10,2))
RETURNS DECIMAL(10,2)
AS
BEGIN
    RETURN @Salary * 0.10;
END;

-- Using function in SELECT
SELECT EmployeeName, Salary, dbo.CalculateBonus(Salary) as Bonus
FROM Employee;

-- Table-valued function
CREATE FUNCTION GetEmployeesByDept(@DeptID INT)
RETURNS TABLE
AS
RETURN (
    SELECT EmployeeID, EmployeeName, Salary
    FROM Employee
    WHERE DepartmentID = @DeptID
);

-- Using table function
SELECT * FROM dbo.GetEmployeesByDept(10);
```

---

### Q49: Types of Functions?

**Answer:**

SQL functions are categorized into system built-in functions and user-defined functions. Built-in functions include scalar functions that operate on single values like UPPER, LOWER, GETDATE, and LEN; aggregate functions that operate on sets of values like SUM, AVG, COUNT, MAX, and MIN; string functions for text manipulation; date functions for temporal operations; mathematical functions for calculations; and conversion functions like CAST and CONVERT. User-defined functions are created by developers and include scalar functions returning a single value, inline table-valued functions returning a table from a single SELECT statement, and multi-statement table-valued functions that can contain complex logic with multiple statements to build and return a table.

**System Functions:**
- **Scalar:** UPPER, LOWER, LEN, ROUND, GETDATE
- **Aggregate:** SUM, AVG, COUNT, MAX, MIN
- **String:** SUBSTRING, CONCAT, REPLACE, TRIM
- **Date:** DATEADD, DATEDIFF, YEAR, MONTH
- **Conversion:** CAST, CONVERT, TRY_CAST

**User-Defined Functions:**
- **Scalar UDF:** Returns single value
- **Inline Table-Valued:** Returns table (single SELECT)
- **Multi-Statement Table-Valued:** Returns table (complex logic)

```sql
-- Built-in functions usage
SELECT 
    UPPER(EmployeeName) as UpperName,
    LEN(EmployeeName) as NameLength,
    YEAR(HireDate) as HireYear,
    ROUND(Salary, 0) as RoundedSalary
FROM Employee;

-- Aggregate functions
SELECT 
    DepartmentID,
    COUNT(*) as EmployeeCount,
    AVG(Salary) as AvgSalary,
    MAX(Salary) as MaxSalary,
    MIN(Salary) as MinSalary
FROM Employee
GROUP BY DepartmentID;
```

---

### Q50: Difference between Stored Procedure and Function?

**Answer:**

Stored procedures can perform any operation including SELECT, INSERT, UPDATE, DELETE and don't require returning a value, while functions must return a value and cannot perform data modification operations. Stored procedures can have output parameters and return multiple result sets, whereas functions return only a single value or table. Functions can be called from SELECT statements and used in WHERE clauses, but stored procedures must be executed using EXEC or EXECUTE. Stored procedures support transaction management and error handling with TRY-CATCH blocks, while functions have limited transaction capabilities. Functions are compiled and optimized inline in queries, while stored procedures maintain separate execution plans.

**Key Differences:**

| Feature | Stored Procedure | Function |
|---------|-----------------|----------|
| Return value | Optional | Mandatory |
| DML operations | Allowed | Not allowed |
| Called from SELECT | No | Yes |
| Output parameters | Yes | No (only return value) |
| Transaction control | Full support | Limited |
| Error handling | TRY-CATCH supported | Limited |
| Usage | EXEC/EXECUTE | Direct in queries |

```sql
-- Stored Procedure - Can modify data
CREATE PROCEDURE UpdateEmployeeSalary
    @EmpID INT,
    @NewSalary DECIMAL(10,2)
AS
BEGIN
    UPDATE Employee SET Salary = @NewSalary WHERE EmployeeID = @EmpID;
    SELECT @@ROWCOUNT as RowsAffected;
END;

-- Function - Cannot modify data
CREATE FUNCTION GetEmployeeSalary(@EmpID INT)
RETURNS DECIMAL(10,2)
AS
BEGIN
    DECLARE @Salary DECIMAL(10,2);
    SELECT @Salary = Salary FROM Employee WHERE EmployeeID = @EmpID;
    RETURN @Salary;
END;

-- Function can be used in SELECT
SELECT EmployeeName, dbo.GetEmployeeSalary(EmployeeID) as Salary
FROM Employee;

-- Stored procedure cannot be used in SELECT
-- EXEC must be used
EXEC UpdateEmployeeSalary @EmpID = 1, @NewSalary = 60000;
```

---

### Q51: What are Scalar Functions?

**Answer:**

Scalar functions are functions that return a single value of any data type based on input parameters, operating on individual values rather than sets of data. They can be built-in system functions like UPPER, LEN, GETDATE, or user-defined functions created to encapsulate specific calculations or logic. Scalar functions can be used anywhere an expression is valid including SELECT lists, WHERE clauses, computed columns, and CHECK constraints. They take zero or more parameters and always return exactly one value. User-defined scalar functions must use BEGIN-END block and RETURN statement to return the computed value.

**Characteristics:**
- Returns single value of any data type
- Can accept zero or more parameters
- Used in expressions and calculations
- Cannot modify database state
- Can be nested within other functions

**Common Built-in Scalar Functions:**
- **String:** UPPER, LOWER, SUBSTRING, LEN
- **Numeric:** ROUND, ABS, CEILING, FLOOR
- **Date:** GETDATE, DATEADD, DATEDIFF
- **Conversion:** CAST, CONVERT

```sql
-- User-defined scalar function
CREATE FUNCTION CalculateTax(@Salary DECIMAL(10,2))
RETURNS DECIMAL(10,2)
AS
BEGIN
    DECLARE @Tax DECIMAL(10,2);
    IF @Salary <= 50000
        SET @Tax = @Salary * 0.10;
    ELSE IF @Salary <= 100000
        SET @Tax = @Salary * 0.20;
    ELSE
        SET @Tax = @Salary * 0.30;
    RETURN @Tax;
END;

-- Using scalar function
SELECT 
    EmployeeName,
    Salary,
    dbo.CalculateTax(Salary) as Tax,
    Salary - dbo.CalculateTax(Salary) as NetSalary
FROM Employee;

-- Scalar function in WHERE clause
SELECT * FROM Employee
WHERE dbo.CalculateTax(Salary) > 5000;
```

---

### Q52: What are Aggregate Functions?

**Answer:**

Aggregate functions perform calculations on a set of values and return a single summary value, commonly used with GROUP BY clause to calculate statistics for groups of rows. The main aggregate functions are COUNT for counting rows, SUM for total of numeric values, AVG for average, MAX for maximum value, MIN for minimum value, and statistical functions like STDEV and VAR. Aggregate functions ignore NULL values except COUNT(*) which counts all rows. They are essential for generating reports, calculating summaries, and analyzing data patterns. When used with GROUP BY, they produce one result per group, and can be filtered using HAVING clause.

**Common Aggregate Functions:**
- **COUNT:** Counts rows or non-NULL values
- **SUM:** Adds numeric values
- **AVG:** Calculates average
- **MAX:** Finds maximum value
- **MIN:** Finds minimum value
- **STDEV:** Standard deviation
- **VAR:** Variance

**Important Notes:**
- Ignore NULL values (except COUNT(*))
- Used with GROUP BY for grouped calculations
- Cannot be used in WHERE clause (use HAVING)

```sql
-- Basic aggregate functions
SELECT 
    COUNT(*) as TotalEmployees,
    COUNT(ManagerID) as EmployeesWithManager,
    SUM(Salary) as TotalSalary,
    AVG(Salary) as AverageSalary,
    MAX(Salary) as HighestSalary,
    MIN(Salary) as LowestSalary
FROM Employee;

-- With GROUP BY
SELECT 
    DepartmentID,
    COUNT(*) as EmployeeCount,
    AVG(Salary) as AvgSalary,
    MAX(Salary) as MaxSalary
FROM Employee
GROUP BY DepartmentID;

-- With HAVING clause
SELECT 
    DepartmentID,
    COUNT(*) as EmployeeCount,
    AVG(Salary) as AvgSalary
FROM Employee
GROUP BY DepartmentID
HAVING COUNT(*) > 5 AND AVG(Salary) > 50000;

-- COUNT with DISTINCT
SELECT 
    COUNT(DISTINCT DepartmentID) as UniqueDepartments,
    COUNT(DISTINCT City) as UniqueCities
FROM Employee;
```

---

### Q53: What are User-Defined Functions?

**Answer:**

User-defined functions (UDFs) are custom functions created by database developers to encapsulate frequently used logic, calculations, or queries that can be reused across multiple queries and applications. They extend SQL's functionality beyond built-in functions to meet specific business requirements. UDFs can accept parameters, perform computations or queries, and return values that can be used in SQL statements. They promote code reusability, maintain consistency in calculations across the application, simplify complex queries by abstracting logic into named functions, and improve maintainability by centralizing logic changes. UDFs are classified into scalar functions, inline table-valued functions, and multi-statement table-valued functions.

**Advantages:**
- Code reusability across queries
- Consistent business logic implementation
- Simplified complex queries
- Easier maintenance and updates
- Better query readability

**Types:**
- **Scalar:** Returns single value
- **Inline Table-Valued:** Returns table (single query)
- **Multi-Statement Table-Valued:** Returns table (complex logic)

```sql
-- Scalar UDF for business logic
CREATE FUNCTION GetCustomerTier(@TotalPurchases DECIMAL(10,2))
RETURNS VARCHAR(20)
AS
BEGIN
    DECLARE @Tier VARCHAR(20);
    IF @TotalPurchases >= 10000
        SET @Tier = 'Gold';
    ELSE IF @TotalPurchases >= 5000
        SET @Tier = 'Silver';
    ELSE
        SET @Tier = 'Bronze';
    RETURN @Tier;
END;

-- Using UDF
SELECT 
    CustomerName,
    TotalPurchases,
    dbo.GetCustomerTier(TotalPurchases) as CustomerTier
FROM Customers;

-- Inline Table-Valued UDF
CREATE FUNCTION GetActiveEmployees()
RETURNS TABLE
AS
RETURN (
    SELECT EmployeeID, EmployeeName, Salary
    FROM Employee
    WHERE IsActive = 1
);

-- Using table-valued function
SELECT * FROM dbo.GetActiveEmployees()
WHERE Salary > 50000;
```

---

### Q54: Types of User-Defined Functions?

**Answer:**

User-defined functions are classified into three types. Scalar functions return a single value of any data type and must contain BEGIN-END block with explicit RETURN statement, used for calculations and transformations. Inline table-valued functions return a table result set defined by a single SELECT statement without BEGIN-END block, offering better performance as they're expanded inline in queries and act like parameterized views. Multi-statement table-valued functions return a table but can contain multiple statements to build the result set with complex logic including loops and conditional statements, using a table variable to accumulate results before returning. Inline TVFs generally perform better than multi-statement TVFs due to inline optimization.

**1. Scalar Functions:**
- Returns single value
- Must use BEGIN-END block
- Contains RETURN statement
- Used in expressions

**2. Inline Table-Valued Functions:**
- Returns table from single SELECT
- No BEGIN-END needed
- Better performance (inline expansion)
- Acts like parameterized view

**3. Multi-Statement Table-Valued Functions:**
- Returns table with complex logic
- Uses table variable
- Multiple statements allowed
- Slower than inline TVF

```sql
-- 1. Scalar Function
CREATE FUNCTION GetFullName(@FirstName VARCHAR(50), @LastName VARCHAR(50))
RETURNS VARCHAR(100)
AS
BEGIN
    RETURN @FirstName + ' ' + @LastName;
END;

-- Usage
SELECT dbo.GetFullName(FirstName, LastName) as FullName FROM Employee;

-- 2. Inline Table-Valued Function
CREATE FUNCTION GetEmployeesByDept(@DeptID INT)
RETURNS TABLE
AS
RETURN (
    SELECT EmployeeID, EmployeeName, Salary
    FROM Employee
    WHERE DepartmentID = @DeptID
);

-- Usage
SELECT * FROM dbo.GetEmployeesByDept(10);

-- 3. Multi-Statement Table-Valued Function
CREATE FUNCTION GetDepartmentSummary(@DeptID INT)
RETURNS @Result TABLE (
    DeptName VARCHAR(50),
    EmployeeCount INT,
    AvgSalary DECIMAL(10,2)
)
AS
BEGIN
    INSERT INTO @Result
    SELECT 
        d.DepartmentName,
        COUNT(e.EmployeeID),
        AVG(e.Salary)
    FROM Department d
    LEFT JOIN Employee e ON d.DepartmentID = e.DepartmentID
    WHERE d.DepartmentID = @DeptID
    GROUP BY d.DepartmentName;
    
    RETURN;
END;

-- Usage
SELECT * FROM dbo.GetDepartmentSummary(10);
```

---

### Q55: What is a Table-Valued Function?

**Answer:**

A table-valued function is a user-defined function that returns a table result set, allowing it to be used like a table in FROM clauses of SELECT statements. Unlike scalar functions that return single values, TVFs return multiple rows and columns that can be joined with other tables, filtered, and manipulated like regular tables. There are two types: inline TVFs which contain a single SELECT statement and offer better performance due to inline expansion, and multi-statement TVFs which use a table variable and can contain complex logic with multiple statements. TVFs are useful for parameterized views, encapsulating complex queries, and creating reusable query logic.

**Characteristics:**
- Returns table result set
- Used in FROM clause like tables
- Can be joined with other tables
- Accepts parameters for dynamic queries
- Alternative to views with parameters

**Use Cases:**
- Parameterized views
- Complex query encapsulation
- Reusable filtering logic
- Dynamic data transformations

```sql
-- Inline Table-Valued Function
CREATE FUNCTION GetSalesByDateRange(
    @StartDate DATE,
    @EndDate DATE
)
RETURNS TABLE
AS
RETURN (
    SELECT 
        o.OrderID,
        c.CustomerName,
        o.OrderDate,
        SUM(od.Quantity * od.UnitPrice) as TotalAmount
    FROM Orders o
    JOIN Customers c ON o.CustomerID = c.CustomerID
    JOIN OrderDetails od ON o.OrderID = od.OrderID
    WHERE o.OrderDate BETWEEN @StartDate AND @EndDate
    GROUP BY o.OrderID, c.CustomerName, o.OrderDate
);

-- Using TVF in query
SELECT * FROM dbo.GetSalesByDateRange('2024-01-01', '2024-12-31')
WHERE TotalAmount > 1000;

-- Joining TVF with other tables
SELECT 
    s.*,
    p.ProductName
FROM dbo.GetSalesByDateRange('2024-01-01', '2024-12-31') s
JOIN Products p ON s.ProductID = p.ProductID;
```

---

### Q56: Can we call a Stored Procedure from Function?

**Answer:**

No, you cannot call a stored procedure from within a user-defined function because functions have restrictions on operations that cause side effects or modify database state. Functions must be deterministic and cannot perform operations that change database data, and since stored procedures can execute INSERT, UPDATE, DELETE statements or other data modification operations, calling them from functions is prohibited by SQL Server. Functions can only call other functions, not stored procedures. This restriction maintains the principle that functions should be read-only operations that return values without causing side effects. If you need stored procedure functionality within a function, you must convert that logic into another function or restructure your code design.

**Restrictions in Functions:**
- Cannot call stored procedures
- Cannot execute DML operations (INSERT, UPDATE, DELETE)
- Cannot use non-deterministic functions
- Cannot create temporary tables
- Limited transaction control

**Reason:**
- Functions must be side-effect free
- Ensures query optimizer reliability
- Maintains function determinism

```sql
-- This is NOT allowed
CREATE FUNCTION InvalidFunction()
RETURNS INT
AS
BEGIN
    EXEC MyStoredProcedure;  -- ERROR: Cannot execute stored procedure
    RETURN 1;
END;

-- Correct approach: Use function instead
CREATE FUNCTION ValidFunction(@Param INT)
RETURNS INT
AS
BEGIN
    DECLARE @Result INT;
    -- Function can only contain SELECT and calculations
    SELECT @Result = COUNT(*) FROM Employee WHERE DepartmentID = @Param;
    RETURN @Result;
END;

-- If you need procedure functionality, call from procedure
CREATE PROCEDURE WrapperProcedure
AS
BEGIN
    DECLARE @Value INT;
    SET @Value = dbo.ValidFunction(10);
    EXEC AnotherStoredProcedure @Value;
END;
```

---

### Q57: What are Input and Output Parameters?

**Answer:**

Input parameters allow passing values into stored procedures or functions when executing them, enabling dynamic and reusable code that can operate on different data. Output parameters allow stored procedures to return values back to the calling program in addition to result sets, useful for returning single values, status codes, or computed results. Input parameters are declared with the parameter name and data type, while output parameters require the OUTPUT or OUT keyword in both declaration and execution. Multiple input and output parameters can be defined, and parameters can have default values making them optional. Output parameters must be variables in the calling statement to receive returned values.

**Input Parameters:**
- Pass values into procedures/functions
- Declared with name and data type
- Can have default values
- Make code reusable and dynamic

**Output Parameters:**
- Return values from procedures
- Require OUTPUT keyword
- Must be variables when calling
- Useful for status codes and computed results

```sql
-- Input parameters
CREATE PROCEDURE GetEmployeeInfo
    @EmpID INT,
    @DeptID INT = NULL  -- Optional with default value
AS
BEGIN
    SELECT * FROM Employee 
    WHERE EmployeeID = @EmpID 
    AND (@DeptID IS NULL OR DepartmentID = @DeptID);
END;

-- Output parameters
CREATE PROCEDURE CalculateStats
    @DeptID INT,
    @EmployeeCount INT OUTPUT,
    @AvgSalary DECIMAL(10,2) OUTPUT
AS
BEGIN
    SELECT 
        @EmployeeCount = COUNT(*),
        @AvgSalary = AVG(Salary)
    FROM Employee
    WHERE DepartmentID = @DeptID;
END;

-- Calling with output parameters
DECLARE @Count INT, @Avg DECIMAL(10,2);
EXEC CalculateStats 
    @DeptID = 10,
    @EmployeeCount = @Count OUTPUT,
    @AvgSalary = @Avg OUTPUT;
SELECT @Count as EmployeeCount, @Avg as AverageSalary;

-- Input and output combined
CREATE PROCEDURE UpdateSalaryAndReturn
    @EmpID INT,
    @Increment DECIMAL(10,2),
    @NewSalary DECIMAL(10,2) OUTPUT
AS
BEGIN
    UPDATE Employee 
    SET Salary = Salary + @Increment
    WHERE EmployeeID = @EmpID;
    
    SELECT @NewSalary = Salary 
    FROM Employee 
    WHERE EmployeeID = @EmpID;
END;
```

---

### Q58: What is Return Statement in Stored Procedure?

**Answer:**

The RETURN statement in a stored procedure immediately exits the procedure and optionally returns an integer status code to the caller, typically used to indicate success or failure of the operation. By convention, returning 0 indicates success while non-zero values indicate errors or specific conditions. RETURN is different from output parameters as it can only return integer values and immediately terminates execution, while output parameters can return any data type and execution continues. The RETURN statement is commonly used for error handling, status reporting, and early exit from procedures based on conditions. The returned value can be captured in a variable or used in conditional logic.

**Characteristics:**
- Returns only integer values
- Immediately exits procedure
- Typically 0 for success, non-zero for errors
- Different from output parameters
- Can be captured in calling code

**Common Usage:**
- Success/failure indication
- Error codes
- Early exit based on conditions
- Status reporting

```sql
-- Stored procedure with RETURN
CREATE PROCEDURE ValidateAndInsertEmployee
    @Name VARCHAR(100),
    @DeptID INT,
    @Salary DECIMAL(10,2)
AS
BEGIN
    -- Validation
    IF @Salary < 0
    BEGIN
        RETURN -1;  -- Error code for invalid salary
    END;
    
    IF NOT EXISTS (SELECT 1 FROM Department WHERE DepartmentID = @DeptID)
    BEGIN
        RETURN -2;  -- Error code for invalid department
    END;
    
    -- Insert if validation passes
    INSERT INTO Employee (EmployeeName, DepartmentID, Salary)
    VALUES (@Name, @DeptID, @Salary);
    
    RETURN 0;  -- Success code
END;

-- Capturing return value
DECLARE @ReturnCode INT;
EXEC @ReturnCode = ValidateAndInsertEmployee 
    @Name = 'John Doe',
    @DeptID = 10,
    @Salary = 50000;

IF @ReturnCode = 0
    PRINT 'Employee inserted successfully';
ELSE IF @ReturnCode = -1
    PRINT 'Error: Invalid salary';
ELSE IF @ReturnCode = -2
    PRINT 'Error: Invalid department';

-- Early exit example
CREATE PROCEDURE ProcessOrder @OrderID INT
AS
BEGIN
    IF NOT EXISTS (SELECT 1 FROM Orders WHERE OrderID = @OrderID)
        RETURN -1;  -- Exit immediately if order doesn't exist
    
    -- Continue processing if order exists
    UPDATE Orders SET Status = 'Processed' WHERE OrderID = @OrderID;
    RETURN 0;
END;
```

---

### Q59: Can Stored Procedures be nested?

**Answer:**

Yes, stored procedures can be nested, meaning one stored procedure can call another stored procedure, up to 32 levels deep in SQL Server. Nesting allows breaking complex operations into smaller, manageable, and reusable procedures, promoting modular code design. Each nested level increases the nesting level counter which can be checked using @@NESTLEVEL system function. When a procedure calls another procedure, the called procedure executes completely before returning control to the calling procedure. Nested procedures share the same transaction context, so if the outermost procedure rolls back, all nested procedure changes are also rolled back. While nesting improves code organization, excessive nesting can make debugging difficult and impact performance.

**Key Points:**
- Maximum 32 nesting levels allowed
- Use @@NESTLEVEL to check current level
- Share same transaction context
- Promotes modular code design
- Can pass parameters between procedures

**Benefits:**
- Code reusability
- Logical operation separation
- Easier maintenance
- Transaction management across procedures

```sql
-- Level 1 procedure
CREATE PROCEDURE Level1_ProcessOrder
    @OrderID INT
AS
BEGIN
    PRINT 'Level 1: Processing Order ' + CAST(@OrderID AS VARCHAR);
    PRINT 'Nesting Level: ' + CAST(@@NESTLEVEL AS VARCHAR);
    
    -- Call level 2 procedure
    EXEC Level2_ValidateOrder @OrderID;
    EXEC Level3_UpdateInventory @OrderID;
END;

-- Level 2 procedure
CREATE PROCEDURE Level2_ValidateOrder
    @OrderID INT
AS
BEGIN
    PRINT 'Level 2: Validating Order';
    PRINT 'Nesting Level: ' + CAST(@@NESTLEVEL AS VARCHAR);
    -- Validation logic
END;

-- Level 3 procedure
CREATE PROCEDURE Level3_UpdateInventory
    @OrderID INT
AS
BEGIN
    PRINT 'Level 3: Updating Inventory';
    PRINT 'Nesting Level: ' + CAST(@@NESTLEVEL AS VARCHAR);
    -- Inventory update logic
END;

-- Transaction across nested procedures
CREATE PROCEDURE MainProcedure
AS
BEGIN
    BEGIN TRANSACTION;
    BEGIN TRY
        EXEC SubProcedure1;
        EXEC SubProcedure2;
        COMMIT TRANSACTION;
    END TRY
    BEGIN CATCH
        ROLLBACK TRANSACTION;
        PRINT ERROR_MESSAGE();
    END CATCH;
END;
```

---

### Q60: What is a Recursive Stored Procedure?

**Answer:**

A recursive stored procedure is a procedure that calls itself repeatedly until a specified termination condition is met, useful for processing hierarchical or tree-structured data like organizational charts, bill of materials, or folder structures. Each recursive call operates on a subset of data, gradually working toward the base case that stops recursion. SQL Server limits recursion to 32 levels by default to prevent infinite loops and stack overflow. Recursive procedures must have a base case that stops recursion and a recursive case that calls the procedure with modified parameters moving toward the base case. Common alternatives include recursive CTEs which often provide better performance and clearer syntax for hierarchical queries.

**Characteristics:**
- Procedure calls itself
- Requires termination condition
- Maximum 32 recursion levels (default)
- Useful for hierarchical data
- Each call has own variable scope

**Use Cases:**
- Organizational hierarchies
- Bill of materials
- File system traversal
- Tree structure processing

**Important:** Recursive CTEs often preferred over recursive procedures for better performance and clarity.

```sql
-- Recursive procedure for employee hierarchy
CREATE PROCEDURE GetEmployeeHierarchy
    @EmployeeID INT,
    @Level INT = 0
AS
BEGIN
    -- Base case check (prevent infinite recursion)
    IF @Level > 10
        RETURN;
    
    -- Print current employee with indentation
    SELECT 
        REPLICATE('  ', @Level) + EmployeeName as EmployeeName,
        @Level as Level
    FROM Employee
    WHERE EmployeeID = @EmployeeID;
    
    -- Recursive case: call for all subordinates
    DECLARE @SubordinateID INT;
    DECLARE subordinate_cursor CURSOR FOR
        SELECT EmployeeID FROM Employee WHERE ManagerID = @EmployeeID;
    
    OPEN subordinate_cursor;
    FETCH NEXT FROM subordinate_cursor INTO @SubordinateID;
    
    WHILE @@FETCH_STATUS = 0
    BEGIN
        EXEC GetEmployeeHierarchy @SubordinateID, @Level + 1;
        FETCH NEXT FROM subordinate_cursor INTO @SubordinateID;
    END;
    
    CLOSE subordinate_cursor;
    DEALLOCATE subordinate_cursor;
END;

-- Execute recursive procedure
EXEC GetEmployeeHierarchy @EmployeeID = 1;

-- Better alternative: Recursive CTE
WITH EmployeeHierarchy AS (
    -- Base case
    SELECT EmployeeID, EmployeeName, ManagerID, 0 as Level
    FROM Employee
    WHERE ManagerID IS NULL
    
    UNION ALL
    
    -- Recursive case
    SELECT e.EmployeeID, e.EmployeeName, e.ManagerID, eh.Level + 1
    FROM Employee e
    INNER JOIN EmployeeHierarchy eh ON e.ManagerID = eh.EmployeeID
)
SELECT 
    REPLICATE('  ', Level) + EmployeeName as EmployeeName,
    Level
FROM EmployeeHierarchy;
```


## Section 6: Triggers

### Q61: What is a Trigger?

**Answer:**

A trigger is a special type of stored procedure that automatically executes in response to specific events on a table or view, such as INSERT, UPDATE, or DELETE operations. Triggers are database objects that enforce business rules, maintain data integrity, audit changes, and perform cascading operations without requiring explicit calls from applications. They fire automatically when the triggering event occurs, executing before or after the data modification. Triggers have access to special tables called INSERTED and DELETED that contain the new and old values of affected rows. Common use cases include maintaining audit trails by logging all changes to critical tables, enforcing complex business rules that can't be implemented with constraints, synchronizing related tables, preventing invalid  transactions, and calculating derived column values automatically. While triggers are powerful for automating database logic, they should be used judiciously as they add overhead to data modification operations and can make debugging complex when multiple triggers interact.

**Characteristics:**
- Executes automatically on DML/DDL events
- Cannot be explicitly called
- Has access to INSERTED and DELETED tables
- Executes within same transaction as triggering statement
- Can rollback the entire transaction

**Common Use Cases:**
- Audit logging and change tracking
- Enforcing business rules
- Maintaining derived data
- Preventing invalid operations
- Cascading changes to related tables

```sql
-- Basic trigger for audit logging
CREATE TRIGGER trg_Employee_Audit
ON Employee
AFTER INSERT, UPDATE, DELETE
AS
BEGIN
    INSERT INTO EmployeeAudit (EmployeeID, Action, ActionDate, UserName)
    SELECT 
        COALESCE(i.EmployeeID, d.EmployeeID),
        CASE 
            WHEN EXISTS (SELECT * FROM INSERTED) AND EXISTS (SELECT * FROM DELETED) THEN 'UPDATE'
            WHEN EXISTS (SELECT * FROM INSERTED) THEN 'INSERT'
            ELSE 'DELETE'
        END,
        GETDATE(),
        SUSER_NAME()
    FROM INSERTED i
    FULL OUTER JOIN DELETED d ON i.EmployeeID = d.EmployeeID;
END;

-- Trigger to prevent deletion
CREATE TRIGGER trg_PreventDelete
ON CriticalTable
INSTEAD OF DELETE
AS
BEGIN
    RAISERROR ('Deletion not allowed on this table', 16, 1);
    ROLLBACK TRANSACTION;
END;
```

---

### Q62: Why do we need Triggers?

**Answer:**

Triggers are essential for automating database-level logic that must execute consistently regardless of which application or user modifies the data, ensuring business rules and data integrity are enforced at the database layer rather than relying on application code. They provide centralized enforcement of complex business logic that can't be implemented through constraints alone, such as cross-table validations, complex calculations, or multi-step operations. Triggers automatically maintain audit trails by capturing who changed what data and when, critical for compliance and security requirements. They synchronize related data across tables automatically, such as updating summary tables when detail records change, or propagating changes through dependent relationships. Triggers prevent invalid operations by validating data against complex rules and rolling back transactions if conditions aren't met. They're particularly valuable in environments with multiple applications accessing the same database, ensuring consistent behavior regardless of the access path. However, triggers should be used thoughtfully as they add processing overhead, can create hidden dependencies that complicate debugging, and may impact performance if not optimized properly.

**Key Benefits:**
- **Automatic enforcement:** No reliance on application code
- **Centralized logic:** One place to maintain business rules
- **Audit trails:** Automatic change tracking
- **Data integrity:** Enforce complex validation rules
- **Derived data:** Automatically maintain calculated values

**When to Use:**
- Complex business rules beyond constraints
- Audit and compliance requirements
- Synchronizing denormalized data
- Enforcing referential integrity beyond foreign keys
- Multi-table validation

```sql
-- Trigger for maintaining denormalized data
CREATE TRIGGER trg_UpdateOrderTotal
ON OrderDetails
AFTER INSERT, UPDATE, DELETE
AS
BEGIN
    UPDATE Orders
    SET TotalAmount = (
        SELECT SUM(Quantity * UnitPrice)
        FROM OrderDetails
        WHERE OrderID = Orders.OrderID
    )
    WHERE OrderID IN (
        SELECT DISTINCT OrderID FROM INSERTED
        UNION
        SELECT DISTINCT OrderID FROM DELETED
    );
END;

-- Trigger for complex business rule
CREATE TRIGGER trg_ValidateSalaryIncrease
ON Employee
AFTER UPDATE
AS
BEGIN
    IF EXISTS (
        SELECT 1
        FROM INSERTED i
        JOIN DELETED d ON i.EmployeeID = d.EmployeeID
        WHERE i.Salary > d.Salary * 1.20  -- More than 20% increase
    )
    BEGIN
        RAISERROR ('Salary increase cannot exceed 20%', 16, 1);
        ROLLBACK TRANSACTION;
    END;
END;
```

---

### Q63: Types of Triggers?

**Answer:**

SQL Server provides several types of triggers categorized by when they execute and what events they respond to. DML triggers fire in response to Data Manipulation Language operations like INSERT, UPDATE, and DELETE on tables or views, and are further divided into AFTER triggers that execute after the operation completes and INSTEAD OF triggers that replace the triggering operation. DDL triggers respond to Data Definition Language events such as CREATE, ALTER, and DROP statements, useful for preventing schema changes or auditing database structure modifications. LOGON triggers fire when user login events occur, enabling login auditing or restricting connections based on conditions. DML triggers are most common and can be defined as AFTER triggers which validate or log changes after they occur, or INSTEAD OF triggers which provide custom logic to replace the default INSERT, UPDATE, or DELETE behavior, particularly useful for updating views that aren't normally updatable. Each trigger type serves specific purposes in database automation and security enforcement.

**1. DML Triggers (Data Manipulation):**
- **AFTER/FOR Triggers:** Execute after the operation
- **INSTEAD OF Triggers:** Replace the operation

**2. DDL Triggers (Data Definition):**
- Respond to CREATE, ALTER, DROP
- Used for schema change auditing/prevention

**3. LOGON Triggers:**
- Fire on user login events
- Restrict connections or audit logins

```sql
-- AFTER Trigger (most common)
CREATE TRIGGER trg_After_Insert
ON Employee
AFTER INSERT
AS
BEGIN
    PRINT 'New employee(s) added';
    -- Logging or validation logic
END;

-- INSTEAD OF Trigger
CREATE TRIGGER trg_Instead_Update
ON EmployeeView
INSTEAD OF UPDATE
AS
BEGIN
    -- Custom update logic for non-updatable view
    UPDATE Employee
    SET Salary = i.Salary
    FROM Employee e
    INNER JOIN INSERTED i ON e.EmployeeID = i.EmployeeID;
END;

-- DDL Trigger
CREATE TRIGGER trg_PreventTableDrop
ON DATABASE
FOR DROP_TABLE
AS
BEGIN
    PRINT 'Table dropping is not allowed';
    ROLLBACK;
END;

-- LOGON Trigger
CREATE TRIGGER trg_Login_Audit
ON ALL SERVER
FOR LOGON
AS
BEGIN
    INSERT INTO LoginAudit (LoginName, LoginTime, HostName)
    VALUES (ORIGINAL_LOGIN(), GETDATE(), HOST_NAME());
END;
```

---

### Q64: What is a DML Trigger?

**Answer:**

A DML trigger is a database object that automatically executes when Data Manipulation Language operations (INSERT, UPDATE, or DELETE) are performed on a table or view. DML triggers are the most commonly used trigger type and can fire AFTER the operation completes or INSTEAD OF the operation to provide custom logic. When a DML trigger fires, it has access to two special logical tables: INSERTED which contains new data for INSERT and UPDATE operations, and DELETED which contains old data for UPDATE and DELETE operations. DML triggers execute within the same transaction as the triggering statement, so if the trigger issues ROLLBACK, both the trigger actions and the original data modification are undone. These triggers are invaluable for maintaining audit trails, enforcing complex business rules, synchronizing denormalized data, and validating data changes. Performance considerations are important as triggers add overhead to every affected data modification operation, so they should contain efficient code and avoid lengthy operations.

**Key Features:**
- Fires on INSERT, UPDATE, DELETE
- Access to INSERTED and DELETED tables
- Executes in same transaction
- Can be AFTER or INSTEAD OF
- Can handle multiple rows

**INSERTED TABLE:**
- Contains new rows (INSERT, UPDATE)

**DELETED TABLE:**
- Contains old rows (UPDATE, DELETE)

```sql
-- DML Trigger for audit trail
CREATE TRIGGER trg_Employee_Changes
ON Employee
AFTER INSERT, UPDATE, DELETE
AS
BEGIN
    SET NOCOUNT ON;
    
    -- Handle INSERT
    INSERT INTO EmployeeAudit (EmployeeID, FieldName, OldValue, NewValue, Action, ChangedDate)
    SELECT 
        i.EmployeeID,
        'ALL FIELDS',
        NULL,
        'New employee: ' + i.EmployeeName,
        'INSERT',
        GETDATE()
    FROM INSERTED i
    WHERE NOT EXISTS (SELECT 1 FROM DELETED);
    
    -- Handle UPDATE
    INSERT INTO EmployeeAudit (EmployeeID, FieldName, OldValue, NewValue, Action, ChangedDate)
    SELECT 
        i.EmployeeID,
        'Salary',
        CAST(d.Salary AS VARCHAR),
        CAST(i.Salary AS VARCHAR),
        'UPDATE',
        GETDATE()
    FROM INSERTED i
    INNER JOIN DELETED d ON i.EmployeeID = d.EmployeeID
    WHERE i.Salary != d.Salary;
    
    -- Handle DELETE
    INSERT INTO EmployeeAudit (EmployeeID, FieldName, OldValue, NewValue, Action, ChangedDate)
    SELECT 
        d.EmployeeID,
        'ALL FIELDS',
        'Deleted employee: ' + d.EmployeeName,
        NULL,
        'DELETE',
        GETDATE()
    FROM DELETED d
    WHERE NOT EXISTS (SELECT 1 FROM INSERTED);
END;

-- DML Trigger with validation
CREATE TRIGGER trg_ValidateEmployee
ON Employee
AFTER INSERT, UPDATE
AS
BEGIN
    IF EXISTS (SELECT 1 FROM INSERTED WHERE Salary < 0)
    BEGIN
        RAISERROR ('Salary cannot be negative', 16, 1);
        ROLLBACK TRANSACTION;
    END;
    
    IF EXISTS (SELECT 1 FROM INSERTED WHERE Age < 18)
    BEGIN
        RAISERROR ('Employee must be at least 18 years old', 16, 1);
        ROLLBACK TRANSACTION;
    END;
END;
```

---

### Q65: What is a DDL Trigger?

**Answer:**

A DDL trigger is a special trigger that fires in response to Data Definition Language events such as CREATE, ALTER, or DROP statements that modify database structure or schema. Unlike DML triggers which respond to data changes in tables, DDL triggers respond to structural changes and can be created at the database level to monitor specific database schema changes or at the server level to monitor instance-wide events. These triggers are primarily used for preventing unauthorized schema modifications, auditing database structure changes for compliance, enforcing naming conventions on database objects, and maintaining a history of schema evolution. DDL triggers can access information about the triggering event using the EVENTDATA() function which returns an XML document containing details about what object was affected and what operation was performed. They're particularly valuable in production environments where schema changes must be controlled, documented, or restricted to maintenance windows.

**Characteristics:**
- Fires on DDL statements (CREATE, ALTER, DROP)
- Database-scoped or server-scoped
- Uses EVENTDATA() function for event info
- Cannot be INSTEAD OF type (only FOR/AFTER)
- Useful for change control and auditing

**Common Events:**
- CREATE_TABLE, ALTER_TABLE, DROP_TABLE
- CREATE_PROCEDURE, ALTER_PROCEDURE, DROP_PROCEDURE
- CREATE_INDEX, DROP_INDEX
- CREATE_DATABASE, DROP_DATABASE

```sql
-- DDL Trigger to prevent table drops
CREATE TRIGGER trg_Prevent_Table_Drop
ON DATABASE
FOR DROP_TABLE
AS
BEGIN
    PRINT 'Dropping tables is not allowed in this database';
    ROLLBACK;
END;

-- DDL Trigger for auditing schema changes
CREATE TRIGGER trg_Audit_Schema_Changes
ON DATABASE
FOR CREATE_TABLE, ALTER_TABLE, DROP_TABLE,
    CREATE_PROCEDURE, ALTER_PROCEDURE, DROP_PROCEDURE
AS
BEGIN
    DECLARE @EventData XML = EVENTDATA();
    
    INSERT INTO SchemaChangeAudit (
        EventType,
        ObjectName,
        ObjectType,
        TSQLCommand,
        LoginName,
        EventDate
    )
    VALUES (
        @EventData.value('(/EVENT_INSTANCE/EventType)[1]', 'VARCHAR(100)'),
        @EventData.value('(/EVENT_INSTANCE/ObjectName)[1]', 'VARCHAR(255)'),
        @EventData.value('(/EVENT_INSTANCE/ObjectType)[1]', 'VARCHAR(100)'),
        @EventData.value('(/EVENT_INSTANCE/TSQLCommand)[1]', 'VARCHAR(MAX)'),
        @EventData.value('(/EVENT_INSTANCE/LoginName)[1]', 'VARCHAR(100)'),
        GETDATE()
    );
END;

-- DDL Trigger to enforce naming conventions
CREATE TRIGGER trg_Enforce_Naming
ON DATABASE
FOR CREATE_TABLE
AS
BEGIN
    DECLARE @EventData XML = EVENTDATA();
    DECLARE @ObjectName VARCHAR(255) = @EventData.value('(/EVENT_INSTANCE/ObjectName)[1]', 'VARCHAR(255)');
    
    IF @ObjectName NOT LIKE 'tbl%'
    BEGIN
        PRINT 'Table names must start with "tbl" prefix';
        ROLLBACK;
    END;
END;

-- Disable/Enable DDL trigger
DISABLE TRIGGER trg_Prevent_Table_Drop ON DATABASE;
ENABLE TRIGGER trg_Prevent_Table_Drop ON DATABASE;

-- Drop DDL trigger
DROP TRIGGER trg_Prevent_Table_Drop ON DATABASE;
```

---

### Q66: What is an INSTEAD OF Trigger?

**Answer:**

An INSTEAD OF trigger is a special type of DML trigger that executes in place of the triggering INSERT, UPDATE, or DELETE statement rather than after it, giving you complete control over how the operation is performed. When an INSTEAD OF trigger is defined, the original DML statement doesn't execute automatically; instead, the trigger code must explicitly perform the intended operation or provide alternative logic. These triggers are particularly useful for making views updatable when they wouldn't normally support direct modifications, such as views based on multiple tables, views with aggregations, or views with computed columns. INSTEAD OF triggers can also implement complex validation and business logic that determines whether and how the operation should proceed. Unlike AFTER triggers which validate after the fact and must rollback to prevent changes, INSTEAD OF triggers can simply choose not to perform the operation, avoiding the overhead of rollback. Only one INSTEAD OF trigger per action (INSERT, UPDATE, DELETE) is allowed on a table or view, and they fire only once per statement regardless of how many rows are affected.

**Characteristics:**
- Replaces the triggering operation
- Must explicitly perform the intended operation
- Useful for non-updatable views
- Only one per action type (INSERT/UPDATE/DELETE)
- Fires once per statement, not per row
- Cannot be created on tables with cascading foreign keys

**Use Cases:**
- Making views updatable
- Complex validation before operation
- Custom insert/update/delete logic
- Distributed partitioned views

```sql
-- INSTEAD OF trigger on view
CREATE VIEW vw_EmployeeDetails
AS
SELECT 
    e.EmployeeID,
    e.EmployeeName,
    e.Salary,
    d.DepartmentName
FROM Employee e
JOIN Department d ON e.DepartmentID = d.DepartmentID;
GO

-- Make the view updatable
CREATE TRIGGER trg_Update_EmployeeView
ON vw_EmployeeDetails
INSTEAD OF UPDATE
AS
BEGIN
    -- Update only Employee table (view spans multiple tables)
    UPDATE Employee
    SET 
        EmployeeName = i.EmployeeName,
        Salary = i.Salary
    FROM Employee e
    INNER JOIN INSERTED i ON e.EmployeeID = i.EmployeeID;
    
    -- Department name changes are ignored as business rule
    PRINT 'Department name cannot be changed through this view';
END;

-- INSTEAD OF INSERT with validation
CREATE TRIGGER trg_Instead_Insert_Employee
ON Employee
INSTEAD OF INSERT
AS
BEGIN
    -- Validate before inserting
    IF EXISTS (SELECT 1 FROM INSERTED WHERE Salary < 20000)
    BEGIN
        RAISERROR ('Minimum salary is 20,000', 16, 1);
        RETURN;
    END;
    
    -- Perform the insert with modifications
    INSERT INTO Employee (EmployeeID, EmployeeName, Salary, DepartmentID, CreatedDate)
    SELECT 
        EmployeeID,
        UPPER(EmployeeName),  -- Automatically uppercase names
        Salary,
        DepartmentID,
        GETDATE()  -- Automatically set creation date
    FROM INSERTED;
END;

-- INSTEAD OF DELETE for soft delete
CREATE TRIGGER trg_Instead_Delete_Employee
ON Employee
INSTEAD OF DELETE
AS
BEGIN
    -- Soft delete: mark as inactive instead of deleting
    UPDATE Employee
    SET 
        IsActive = 0,
        DeletedDate = GETDATE(),
        DeletedBy = SUSER_NAME()
    WHERE EmployeeID IN (SELECT EmployeeID FROM DELETED);
    
    PRINT 'Employees marked as inactive instead of deleted';
END;
```

---

### Q67: What is an AFTER Trigger?

**Answer:**

An AFTER trigger, also called a FOR trigger, is a DML trigger that executes after the triggering INSERT, UPDATE, or DELETE operation has successfully completed and the data has been modified in the table. AFTER triggers are the most common type of trigger and fire only after all constraints including CHECK, FOREIGN KEY, PRIMARY KEY, and UNIQUE constraints have been validated and the operation has been committed to the table. This means the trigger executes only if the data modification succeeds, making it ideal for audit logging, synchronizing related tables, enforcing business rules, and maintaining derived data. AFTER triggers have access to both the INSERTED and DELETED tables to see the new and old values of affected rows. They execute within the same transaction as the triggering statement, so if the trigger code issues a ROLLBACK, both the trigger actions and the original data changes are undone. Multiple AFTER triggers can be defined for the same event on a table, and you can specify their execution order using sp_settriggerorder procedure.

**Characteristics:**
- Executes after the DML operation completes
- Fires after constraint validation
- Has access to INSERTED and DELETED tables
- Executes within same transaction
- Can rollback if validation fails
- Multiple AFTER triggers allowed per event

**When Data is Available:**
- Data already modified in table
- Constraints already validated
- Can see both old and new values

```sql
-- AFTER trigger for audit logging
CREATE TRIGGER trg_After_Employee_Update
ON Employee
AFTER UPDATE
AS
BEGIN
    SET NOCOUNT ON;
    
    -- Log salary changes
    IF UPDATE(Salary)  -- Check if Salary column was updated
    BEGIN
        INSERT INTO SalaryAudit (
            EmployeeID,
            OldSalary,
            NewSalary,
            ChangedBy,
            ChangedDate
        )
        SELECT 
            i.EmployeeID,
            d.Salary,
            i.Salary,
            SUSER_NAME(),
            GETDATE()
        FROM INSERTED i
        INNER JOIN DELETED d ON i.EmployeeID = d.EmployeeID
        WHERE i.Salary != d.Salary;
    END;
END;

-- AFTER trigger with validation and rollback
CREATE TRIGGER trg_After_Insert_Validate
ON Orders
AFTER INSERT
AS
BEGIN
    -- Validate that customer exists and is active
    IF EXISTS (
        SELECT 1 
        FROM INSERTED i
        LEFT JOIN Customers c ON i.CustomerID = c.CustomerID
        WHERE c.CustomerID IS NULL OR c.IsActive = 0
    )
    BEGIN
        RAISERROR ('Cannot create order for inactive or non-existent customer', 16, 1);
        ROLLBACK TRANSACTION;
        RETURN;
    END;
    
    -- Update customer's last order date
    UPDATE Customers
    SET LastOrderDate = GETDATE()
    WHERE CustomerID IN (SELECT DISTINCT CustomerID FROM INSERTED);
END;

-- Multiple AFTER triggers with order
CREATE TRIGGER trg_After_First
ON Employee
AFTER INSERT
AS
BEGIN
    PRINT 'First trigger executed';
END;

CREATE TRIGGER trg_After_Second
ON Employee
AFTER INSERT
AS
BEGIN
    PRINT 'Second trigger executed';
END;

-- Set execution order
EXEC sp_settriggerorder 
    @triggername = 'trg_After_First',
    @order = 'First',
    @stmttype = 'INSERT';
    
EXEC sp_settriggerorder 
    @triggername = 'trg_After_Second',
    @order = 'Last',
    @stmttype = 'INSERT';
```

---

### Q68: Difference between Trigger and Stored Procedure?

**Answer:**

Triggers and stored procedures are both database objects containing SQL code, but they differ fundamentally in how they execute and their purposes. Triggers execute automatically in response to specific events like INSERT, UPDATE, or DELETE and cannot be manually called, while stored procedures must be explicitly executed using EXEC statement and don't fire automatically. Triggers are event-driven and fire for every row affected by the triggering operation within the same transaction, whereas stored procedures are executed on-demand and run independently. Triggers have access to special INSERTED and DELETED tables showing before and after values of affected rows, while stored procedures work with regular tables and parameters. Stored procedures can accept input parameters and return output parameters or result sets, but triggers cannot accept parameters though they can access the affected data through INSERTED/DELETED tables. Triggers are primarily used for enforcing business rules, maintaining data integrity, and auditing, while stored procedures encapsulate business logic, batch operations, and complex transactions. Performance-wise, stored procedures are generally more efficient for batch operations, while triggers add overhead to every data modification.

**Key Differences:**

| Feature | Trigger | Stored Procedure |
|---------|---------|------------------|
| Execution | Automatic (event-driven) | Manual (explicit call) |
| Call method | Cannot be called | EXEC/EXECUTE |
| Parameters | No input parameters | Yes, input/output parameters |
| Special tables | INSERTED, DELETED | None |
| Return value | Cannot return values | Can return values |
| Transaction | Same as triggering statement | Independent |
| Purpose | Enforce rules, audit | Business logic, batch ops |
| When used | Data modification events | On-demand operations |

```sql
-- Trigger - Automatic execution
CREATE TRIGGER trg_Auto_Audit
ON Employee
AFTER UPDATE
AS
BEGIN
    INSERT INTO AuditLog (Action, TableName, ActionDate)
    SELECT 'UPDATE', 'Employee', GETDATE()
    FROM INSERTED;
END;
-- Fires automatically when Employee table is updated
-- Cannot be manually called: EXEC trg_Auto_Audit (ERROR!)

-- Stored Procedure - Manual execution
CREATE PROCEDURE sp_Manual_Audit
    @TableName VARCHAR(50),
    @Action VARCHAR(20)
AS
BEGIN
    INSERT INTO AuditLog (Action, TableName, ActionDate)
    VALUES (@Action, @TableName, GETDATE());
END;
-- Must be explicitly called:
EXEC sp_Manual_Audit @TableName = 'Employee', @Action = 'UPDATE';

-- Trigger has access to INSERTED/DELETED
CREATE TRIGGER trg_Salary_Change
ON Employee
AFTER UPDATE
AS
BEGIN
    SELECT 
        i.EmployeeID,
        d.Salary as OldSalary,
        i.Salary as NewSalary
    FROM INSERTED i
    INNER JOIN DELETED d ON i.EmployeeID = d.EmployeeID;
END;

-- Stored Procedure uses parameters
CREATE PROCEDURE sp_Update_Salary
    @EmployeeID INT,
    @NewSalary DECIMAL(10,2),
    @Result VARCHAR(100) OUTPUT
AS
BEGIN
    UPDATE Employee 
    SET Salary = @NewSalary 
    WHERE EmployeeID = @EmployeeID;
    
    SET @Result = 'Salary updated successfully';
END;
```

---

### Q69: Can we have multiple triggers on a table?

**Answer:**

Yes, you can have multiple triggers on a single table for the same event or The different events, allowing complex logic to be separated into manageable, modular trigger procedures. SQL Server allows multiple AFTER triggers for each type of operation (INSERT, UPDATE, DELETE) on a table, but only one INSTEAD OF trigger per operation type. When multiple AFTER triggers exist for the same event, they execute in a specific order that can be controlled using the sp_settriggerorder system stored procedure to designate which trigger fires first, which fires last, and others fire in undefined order between them. Multiple triggers are useful for separating concerns such as having one trigger for audit logging, another for business rule validation, and another for synchronizing related tables. While this modularity improves maintainability, it's important to ensure triggers don't conflict with each other or create circular dependencies. Each trigger executes within the same transaction, so if any trigger issues ROLLBACK, all changes including those made by previously executed triggers are undone. Performance considerations are important as each additional trigger adds overhead to data modification operations.

**Key Points:**
- Multiple AFTER triggers allowed per event
- Only one INSTEAD OF trigger per event
- Execution order can be controlled
- All execute in same transaction
- Useful for separating concerns

**Execution Order:**
- Use sp_settriggerorder to set First/Last
- Other triggers execute in undefined order
- All rollback if any trigger fails

```sql
-- Create multiple AFTER triggers for same event
CREATE TRIGGER trg_Audit_Employee
ON Employee
AFTER INSERT, UPDATE, DELETE
AS
BEGIN
    INSERT INTO EmployeeAudit (Action, ActionDate, UserName)
    SELECT 'Data Modified', GETDATE(), SUSER_NAME()
    FROM INSERTED;
END;

CREATE TRIGGER trg_Validate_Employee
ON Employee
AFTER INSERT, UPDATE
AS
BEGIN
    IF EXISTS (SELECT 1 FROM INSERTED WHERE Salary < 0)
    BEGIN
        RAISERROR ('Invalid salary', 16, 1);
        ROLLBACK;
    END;
END;

CREATE TRIGGER trg_Sync_Department
ON Employee
AFTER INSERT, UPDATE, DELETE
AS
BEGIN
    UPDATE Department
    SET EmployeeCount = (
        SELECT COUNT(*) FROM Employee WHERE DepartmentID = Department.DepartmentID
    )
    WHERE DepartmentID IN (
        SELECT DepartmentID FROM INSERTED
        UNION
        SELECT DepartmentID FROM DELETED
    );
END;

-- Set trigger execution order
EXEC sp_settriggerorder 
    @triggername = 'trg_Validate_Employee',
    @order = 'First',  -- Validate first
    @stmttype = 'INSERT';

EXEC sp_settriggerorder 
    @triggername = 'trg_Audit_Employee',
    @order = 'Last',  -- Audit last
    @stmttype = 'INSERT';

-- trg_Sync_Department executes in between

-- View all triggers on a table
SELECT 
    name AS TriggerName,
    OBJECT_NAME(parent_id) AS TableName,
    is_instead_of_trigger,
    is_disabled
FROM sys.triggers
WHERE parent_id = OBJECT_ID('Employee');

-- Disable/Enable specific trigger
DISABLE TRIGGER trg_Audit_Employee ON Employee;
ENABLE TRIGGER trg_Audit_Employee ON Employee;

-- Disable/Enable all triggers on table
DISABLE TRIGGER ALL ON Employee;
ENABLE TRIGGER ALL ON Employee;
```

---

### Q70: What are INSERTED and DELETED tables?

**Answer:**

INSERTED and DELETED are special logical tables automatically created by SQL Server during trigger execution that hold the before and after values of rows affected by INSERT, UPDATE, or DELETE operations. These tables have the same structure as the table on which the trigger is defined and exist only within the scope of the trigger. The INSERTED table contains the new rows for INSERT operations and the new values for UPDATE operations, essentially showing what the data looks like after the modification. The DELETED table contains the old rows for DELETE operations and the old values for UPDATE operations, showing what the data looked like before the modification. For INSERT statements, only the INSERTED table has data while DELETED is empty. For DELETE statements, only the DELETED table has data while INSERTED is empty. For UPDATE statements, both tables contain data where DELETED holds the old values and INSERTED holds the new values. These tables are crucial for triggers to compare before and after states, audit changes, validate business rules based on what changed, and synchronize related data. Important to note that these are logical tables, not physical tables, and they cannot be directly modified.

**Table Usage by Operation:**

| Operation | INSERTED Table | DELETED Table |
|-----------|---------------|---------------|
| INSERT | New rows | Empty |
| UPDATE | New values | Old values |
| DELETE | Empty | Old rows |

**Common Uses:**
- Auditing changes (old vs new values)
- Validating business rules
- Synchronizing related tables
- Logging data modifications
- Implementing soft deletes

```sql
-- Using INSERTED and DELETED in trigger
CREATE TRIGGER trg_Employee_Audit
ON Employee
AFTER INSERT, UPDATE, DELETE
AS
BEGIN
    SET NOCOUNT ON;
    
    -- Handle INSERT (only INSERTED has data)
    IF EXISTS (SELECT * FROM INSERTED) AND NOT EXISTS (SELECT * FROM DELETED)
    BEGIN
        INSERT INTO EmployeeAudit (EmployeeID, Action, NewValue, AuditDate)
        SELECT 
            EmployeeID,
            'INSERT',
            'Name: ' + EmployeeName + ', Salary: ' + CAST(Salary AS VARCHAR),
            GETDATE()
        FROM INSERTED;
    END;
    
    -- Handle UPDATE (both tables have data)
    IF EXISTS (SELECT * FROM INSERTED) AND EXISTS (SELECT * FROM DELETED)
    BEGIN
        INSERT INTO EmployeeAudit (
            EmployeeID, 
            Action, 
            OldValue, 
            NewValue, 
            AuditDate
        )
        SELECT 
            i.EmployeeID,
            'UPDATE',
            'Old Salary: ' + CAST(d.Salary AS VARCHAR),
            'New Salary: ' + CAST(i.Salary AS VARCHAR),
            GETDATE()
        FROM INSERTED i
        INNER JOIN DELETED d ON i.EmployeeID = d.EmployeeID
        WHERE i.Salary != d.Salary;  -- Only log if salary changed
    END;
    
    -- Handle DELETE (only DELETED has data)
    IF EXISTS (SELECT * FROM DELETED) AND NOT EXISTS (SELECT * FROM INSERTED)
    BEGIN
        INSERT INTO EmployeeAudit (EmployeeID, Action, OldValue, AuditDate)
        SELECT 
            EmployeeID,
            'DELETE',
            'Name: ' + EmployeeName + ', Salary: ' + CAST(Salary AS VARCHAR),
            GETDATE()
        FROM DELETED;
    END;
END;

-- Using INSERTED/DELETED for validation
CREATE TRIGGER trg_Validate_Salary_Change
ON Employee
AFTER UPDATE
AS
BEGIN
    IF EXISTS (
        SELECT 1
        FROM INSERTED i
        INNER JOIN DELETED d ON i.EmployeeID = d.EmployeeID
        WHERE i.Salary < d.Salary * 0.5  -- Salary decreased by more than 50%
    )
    BEGIN
        RAISERROR ('Salary cannot be decreased by more than 50%', 16, 1);
        ROLLBACK TRANSACTION;
    END;
END;

-- Detecting which columns were updated
CREATE TRIGGER trg_Check_Column_Updates
ON Employee
AFTER UPDATE
AS
BEGIN
    IF UPDATE(Salary)  -- Optimized check if Salary column was in UPDATE
    BEGIN
        -- Compare actual values
        SELECT 
            i.EmployeeID,
            i.EmployeeName,
            d.Salary AS OldSalary,
            i.Salary AS NewSalary,
            i.Salary - d.Salary AS SalaryChange
        FROM INSERTED i
        INNER JOIN DELETED d ON i.EmployeeID = d.EmployeeID
        WHERE i.Salary != d.Salary;
    END;
END;
```

## Section 7: Views

### Q71: What is a View?

**Answer:**

A view is a virtual table based on the result set of a SELECT query that doesn't store data physically but presents data from one or more underlying tables in a specific format. Views act as stored queries that can be referenced like tables in SELECT, INSERT, UPDATE, and DELETE statements, providing a layer of abstraction between users and the actual table structure. When you query a view, the database executes the underlying SELECT statement and returns the results as if they came from a real table. Views are powerful database objects used for simplifying complex queries by encapsulating joins and calculations, restricting access to specific columns or rows for security purposes, presenting data in different formats without modifying underlying tables, and maintaining backward compatibility when table structures change. Views can be created on single tables, multiple joined tables, other views, or combinations thereof. They're particularly valuable for providing customized data access to different user groups, hiding sensitive columns, and creating reusable query logic. However, views with complex joins, aggregations, or calculations may impact query performance, and not all views support direct data modification.

**Characteristics:**
- Virtual table (no physical storage)
- Based on SQL SELECT statement
- Can reference tables, views, or both
- Updated when underlying tables change
- Can be used in SELECT, INSERT, UPDATE, DELETE

**Benefits:**
- Simplifies complex queries
- Enhances security (column/row filtering)
- Provides data abstraction
- Maintains backward compatibility
- Reusable query logic

```sql
-- Simple view on single table
CREATE VIEW vw_ActiveEmployees
AS
SELECT EmployeeID, EmployeeName, Department, Salary
FROM Employee
WHERE IsActive = 1;

-- Using the view
SELECT * FROM vw_ActiveEmployees WHERE Salary > 50000;

-- View joining multiple tables
CREATE VIEW vw_EmployeeDetails
AS
SELECT 
    e.EmployeeID,
    e.EmployeeName,
    d.DepartmentName,
    d.Location,
    e.Salary,
    e.HireDate
FROM Employee e
INNER JOIN Department d ON e.DepartmentID = d.DepartmentID;

-- View with calculations
CREATE VIEW vw_EmployeeAge
AS
SELECT 
    EmployeeID,
    EmployeeName,
    DateOfBirth,
    DATEDIFF(YEAR, DateOfBirth, GETDATE()) AS Age,
    Salary,
    Salary * 12 AS AnnualSalary
FROM Employee;

-- Security view (hiding sensitive columns)
CREATE VIEW vw_EmployeePublic
AS
SELECT 
    EmployeeID,
    EmployeeName,
    Department,
    Email
    -- Salary and SSN are hidden
FROM Employee;

-- Modifying view
ALTER VIEW vw_ActiveEmployees
AS
SELECT EmployeeID, EmployeeName, Department, Salary, Email
FROM Employee
WHERE IsActive = 1 AND Salary > 30000;

-- Dropping view
DROP VIEW vw_ActiveEmployees;
```

---

### Q72: Why use Views?

**Answer:**

Views serve multiple critical purposes in database design and administration, making them indispensable for large-scale applications. First, they simplify complex queries by encapsulating complicated joins, subqueries, and calculations into a single named object that can be queried like a table, reducing code duplication and making queries more readable and maintainable. Second, views enhance security by restricting user access to specific columns or rows, allowing you to expose only necessary data while hiding sensitive information like salaries or social security numbers without managing complex permissions on base tables. Third, views provide data abstraction, creating a stable interface to data even when underlying table structures change, enabling database refactoring without breaking existing applications. Fourth, views present data in different formats or structures for different user groups or applications without duplicating data. Fifth, views improve development productivity by allowing developers to work with simplified data structures. Sixth, views support data integrity by enforcing business rules through WITH CHECK OPTION. However, views can impact performance if they contain complex operations, and indexed views (materialized views) can help mitigate this issue by storing precomputed results.

**Key Benefits:**

**1. Simplification:**
- Encapsulate complex joins and logic
- Reusable query components
- Easier query writing

**2. Security:**
- Column-level security
- Row-level security  
- Hide sensitive data

**3. Abstraction:**
- Stable interface despite schema changes
- Hide complexity from users
- Logical data independence

**4. Consistency:**
- Centralized business logic
- Standardized data presentation
- Reduced errors

```sql
-- 1. Simplification - Complex query as view
CREATE VIEW vw_OrderSummary
AS
SELECT 
    o.OrderID,
    c.CustomerName,
    COUNT(od.ProductID) AS ProductCount,
    SUM(od.Quantity * od.UnitPrice) AS TotalAmount,
    o.OrderDate
FROM Orders o
JOIN Customers c ON o.CustomerID = c.CustomerID
JOIN OrderDetails od ON o.OrderID = od.OrderID
GROUP BY o.OrderID, c.CustomerName, o.OrderDate;

-- Simple usage instead of complex query
SELECT * FROM vw_OrderSummary WHERE TotalAmount > 1000;

-- 2. Security - Restrict column access
CREATE VIEW vw_EmployeeSafe
AS
SELECT EmployeeID, FirstName, LastName, Department, Email
FROM Employee;  -- SSN, Salary, DateOfBirth hidden

GRANT SELECT ON vw_EmployeeSafe TO PublicUsers;

-- 3. Row-level security
CREATE VIEW vw_ManagerEmployees
AS
SELECT * FROM Employee
WHERE ManagerID = SUSER_ID();  -- Only see your own team

-- 4. Abstraction - Stable interface
CREATE VIEW vw_CustomerInfo
AS
SELECT 
    CustomerID,
    FirstName + ' ' + LastName AS FullName,  -- Computed column
    ContactEmail AS Email,  -- Column renamed
    City,
    Country
FROM Customer;

-- If table structure changes, only view needs update
-- Applications using view remain unchanged

-- 5. Data transformation
CREATE VIEW vw_MonthlySales
AS
SELECT 
    YEAR(OrderDate) AS Year,
    MONTH(OrderDate) AS Month,
    SUM(TotalAmount) AS Sales
FROM Orders
GROUP BY YEAR(OrderDate), MONTH(OrderDate);
```

---

### Q73: Types of Views?

**Answer:**

Views can be classified into several types based on their complexity, storage, and functionality. Simple views are based on a single table without any joins, aggregate functions, or GROUP BY clauses, and typically support INSERT, UPDATE, and DELETE operations. Complex views involve multiple tables with joins, aggregate functions, GROUP BY clauses, DISTINCT, or subqueries, and may not support direct data modification. Materialized views, also called indexed views in SQL Server, physically store the query results and are automatically updated when base tables change, offering significant performance benefits for expensive aggregations and joins at the cost of storage and maintenance overhead. Partitioned views combine data from multiple tables horizontally partitioned across servers, useful in distributed database scenarios. Inline views or derived tables exist only within a single query as subqueries in the FROM clause. Each view type serves specific use cases:  simple views for basic data filtering and security, complex views for reporting and data presentation, materialized views for performance optimization of frequently run expensive queries, and partitioned views for distributed data access.

**Types:**

**1. Simple View:**
- Single table
- No aggregate functions
- Supports DML operations

**2. Complex View:**
- Multiple tables (joins)
- Aggregate functions/GROUP BY
- May not support DML

**3. Materialized View (Indexed View):**
- Physically stores results
- Improves query performance
- Requires maintenance

**4. Partitioned View:**
- Combines data from multiple tables
- Distributed database scenarios

```sql
-- 1. Simple View
CREATE VIEW vw_SimpleEmployee
AS
SELECT EmployeeID, EmployeeName, Department
FROM Employee
WHERE IsActive = 1;

-- DML operations supported
INSERT INTO vw_SimpleEmployee VALUES (101, 'John Doe', 'Sales');
UPDATE vw_SimpleEmployee SET Department = 'Marketing' WHERE EmployeeID = 101;
DELETE FROM vw_SimpleEmployee WHERE EmployeeID = 101;

-- 2. Complex View
CREATE VIEW vw_ComplexDepartmentStats
AS
SELECT 
    d.DepartmentName,
    COUNT(e.EmployeeID) AS EmployeeCount,
    AVG(e.Salary) AS AvgSalary,
    MAX(e.Salary) AS MaxSalary
FROM Department d
LEFT JOIN Employee e ON d.DepartmentID = e.DepartmentID
GROUP BY d.DepartmentName;

-- DML operations NOT supported (read-only)
-- SELECT only
SELECT * FROM vw_ComplexDepartmentStats;

-- 3. Materialized View (Indexed View in SQL Server)
CREATE VIEW vw_MaterializedSales
WITH SCHEMABINDING  -- Required for indexed views
AS
SELECT 
    ProductID,
    SUM(Quantity) AS TotalQuantity,
    SUM(Quantity * UnitPrice) AS TotalRevenue,
    COUNT_BIG(*) AS OrderCount  -- COUNT_BIG required
FROM dbo.OrderDetails  -- Schema required
GROUP BY ProductID;
GO

-- Create unique clustered index (makes it materialized)
CREATE UNIQUE CLUSTERED INDEX IX_SalesProduct 
ON vw_MaterializedSales(ProductID);

-- 4. Partitioned View
CREATE VIEW vw_PartitionedOrders
AS
SELECT * FROM Orders2023
UNION ALL
SELECT * FROM Orders2024;

-- 5. View with CHECK OPTION
CREATE VIEW vw_HighSalaryEmployees
AS
SELECT EmployeeID, EmployeeName, Salary
FROM Employee
WHERE Salary > 50000
WITH CHECK OPTION;  -- Prevents inserting salary <= 50000

-- This will fail
INSERT INTO vw_HighSalaryEmployees VALUES (102, 'Jane Smith', 40000);
```

---

### Q74: What is a Simple View?

**Answer:**

A simple view is a view created from a single base table without any joins, aggregate functions, DISTINCT clause, GROUP BY, or subqueries, representing a straightforward subset of columns and rows from one table. Simple views are the most basic type of view and generally support all DML operations (INSERT, UPDATE, DELETE) because there's a direct one-to-one mapping between view rows and table rows. They're commonly used for security purposes to restrict user access to specific columns or rows, simplify queries by presenting only relevant columns, and provide logical names for columns. Simple views don't store data themselves but act as filters or windows into the underlying table. When you perform an INSERT, UPDATE, or DELETE on a simple view, the operation affects the underlying base table directly. Simple views are lightweight, easy to understand, and have minimal performance impact. They're ideal for scenarios where you want to hide certain columns for security, provide a subset of data to specific users, or rename columns for better readability without duplicating data or significantly impacting performance.

**Characteristics:**
- Based on single table
- No joins or aggregations
- No DISTINCT or GROUP BY
- Supports INSERT, UPDATE, DELETE
- Direct mapping to base table

**Common Uses:**
- Column-level security
- Hiding sensitive columns
- Row-level filtering
- Column renaming
- Simplified data access

```sql
-- Simple view filtering columns
CREATE VIEW vw_EmployeeBasic
AS
SELECT EmployeeID, FirstName, LastName, Department, Email
FROM Employee;
-- Hides Salary, SSN, DateOfBirth

-- Simple view filtering rows
CREATE VIEW vw_ActiveEmployees
AS
SELECT *
FROM Employee
WHERE IsActive = 1;

-- Simple view with both column and row filtering
CREATE VIEW vw_ SalesTeam
AS
SELECT EmployeeID, EmployeeName, Email, Phone
FROM Employee
WHERE Department = 'Sales' AND IsActive = 1;

-- DML operations on simple view
-- INSERT
INSERT INTO vw_EmployeeBasic (EmployeeID, FirstName, LastName, Department, Email)
VALUES (101, 'John', 'Doe', 'IT', 'john@company.com');

-- UPDATE
UPDATE vw_EmployeeBasic
SET Department = 'Sales'
WHERE EmployeeID = 101;

-- DELETE
DELETE FROM vw_EmployeeBasic
WHERE EmployeeID = 101;

-- All operations affect the underlying Employee table

-- Simple view with CHECK OPTION
CREATE VIEW vw_ITDepartment
AS
SELECT *
FROM Employee
WHERE Department = 'IT'
WITH CHECK OPTION;

-- This succeeds
INSERT INTO vw_ITDepartment (EmployeeID, EmployeeName, Department)
VALUES (102, 'Jane Smith', 'IT');

-- This fails (Department != 'IT')
INSERT INTO vw_ITDepartment (EmployeeID, EmployeeName, Department)
VALUES (103, 'Bob Johnson', 'Sales');

-- Column renaming in simple view
CREATE VIEW vw_EmployeeRenamed
AS
SELECT 
    EmployeeID AS ID,
    EmployeeName AS Name,
    Department AS Dept,
    Salary AS AnnualSalary
FROM Employee;
```

---

### Q75: What is a Complex View?

**Answer:**

A complex view is a view that involves more sophisticated SQL operations such as joins between multiple tables, aggregate functions (SUM, AVG, COUNT), GROUP BY clauses, DISTINCT keyword, subqueries, or UNION operations, making it more than just a simple filter on a single table. Complex views are typically read-only and don't support INSERT, UPDATE, or DELETE operations directly because there's no clear one-to-one mapping between view rows and the underlying table rows. They're extensively used for reporting, data analysis, and presenting summarized or combined data from multiple sources. Complex views encapsulate business logic and complex query patterns, making them invaluable for creating dashboards, reports, and analytical queries. While they simplify querying by hiding complexity, complex views can impact performance if the underlying query is expensive, especially when involving large tables or costly operations. In such cases, materialized views or indexed views can provide better performance by precalculating and storing results. Complex views are essential for providing business users with meaningful views of data without requiring them to understand underlying table relationships and complex SQL syntax.

**Characteristics:**
- Multiple tables with joins
- Aggregate functions (SUM, AVG, COUNT, etc.)
- GROUP BY, HAVING clauses
- DISTINCT, UNION operations
- Subqueries
- Generally read-only (no DML)

**Common Uses:**
- Reporting and analytics
- Data summarization
- Combining data from multiple tables
- Complex business logic encapsulation
- Dashboard queries

```sql
-- Complex view with JOIN
CREATE VIEW vw_EmployeeDepartment
AS
SELECT 
    e.EmployeeID,
    e.EmployeeName,
    d.DepartmentName,
    d.Location,
    e.Salary
FROM Employee e
INNER JOIN Department d ON e.DepartmentID = d.DepartmentID;

-- Complex view with aggregation
CREATE VIEW vw_DepartmentStatistics
AS
SELECT 
    d.DepartmentName,
    COUNT(e.EmployeeID) AS EmployeeCount,
    AVG(e.Salary) AS AverageSalary,
    MIN(e.Salary) AS MinSalary,
    MAX(e.Salary) AS MaxSalary,
    SUM(e.Salary) AS TotalSalaryBudget
FROM Department d
LEFT JOIN Employee e ON d.DepartmentID = e.DepartmentID
GROUP BY d.DepartmentID, d.DepartmentName;

-- Complex view with DISTINCT and subquery
CREATE VIEW vw_EmployeeWithOrders
AS
SELECT DISTINCT
    e.EmployeeID,
    e.EmployeeName,
    e.Department,
    (SELECT COUNT(*) FROM Orders o WHERE o.EmployeeID = e.EmployeeID) AS OrderCount
FROM Employee e
WHERE EXISTS (SELECT 1 FROM Orders WHERE EmployeeID = e.EmployeeID);

-- Complex view with multiple joins
CREATE VIEW vw_OrderFullDetails
AS
SELECT 
    o.OrderID,
    c.CustomerName,
    c.City AS CustomerCity,
    e.EmployeeName AS SalesRep,
    p.ProductName,
    od.Quantity,
    od.UnitPrice,
    od.Quantity * od.UnitPrice AS LineTotal,
    o.OrderDate
FROM Orders o
INNER JOIN Customers c ON o.CustomerID = c.CustomerID
INNER JOIN Employee e ON o.EmployeeID = e.EmployeeID
INNER JOIN OrderDetails od ON o.OrderID = od.OrderID
INNER JOIN Products p ON od.ProductID = p.ProductID;

-- Complex view with UNION
CREATE VIEW vw_AllContacts
AS
SELECT 
    'Customer' AS ContactType,
    CustomerName AS Name,
    Email,
    Phone
FROM Customers
UNION ALL
SELECT 
    'Employee' AS ContactType,
    EmployeeName AS Name,
    Email,
    Phone
FROM Employees
UNION ALL
SELECT 
    'Supplier' AS ContactType,
    SupplierName AS Name,
    Email,
    Phone
FROM Suppliers;

-- Using complex views (read-only)
SELECT * FROM vw_DepartmentStatistics 
WHERE EmployeeCount > 10
ORDER BY AverageSalary DESC;

-- DML operations not allowed on complex views
-- INSERT INTO vw_DepartmentStatistics... -- ERROR
-- UPDATE vw_DepartmentStatistics... -- ERROR
```

---
### Q76: What is a Materialized View?

**Answer:**

A materialized view, also known as an indexed view in SQL Server, is a view that physically stores the query result set on disk rather than computing it dynamically each time it's queried, significantly improving query performance for expensive operations like complex joins and aggregations. Unlike regular views which are virtual and execute the underlying query every time they're accessed, materialized views precompute and cache the results, automatically refreshing when the underlying base tables change. In SQL Server, creating a materialized view requires using the WITH SCHEMABINDING option and creating a unique clustered index on the view. Materialized views are particularly beneficial for data warehousing scenarios, reporting dashboards, and frequently executed complex queries involving aggregations across large datasets. The trade-off is that they consume storage space and require maintenance overhead to keep synchronized with base tables, and they work best for data that doesn't change frequently. SQL Server automatically considers using indexed views in query plans even when the view isn't directly referenced, providing transparent performance optimization.

**Characteristics:**
- Physically stores query results
- Requires WITH SCHEMABINDING
- Needs unique clustered index
- Automatically maintained
- Improves query performance
- Consumes storage space

**Requirements in SQL Server:**
- WITH SCHEMABINDING mandatory
- Unique clustered index
- Deterministic functions only
- No OUTER JOIN  (use INNER JOIN)
- COUNT_BIG instead of COUNT

```sql
-- Create materialized view (indexed view)
CREATE VIEW vw_ProductSales
WITH SCHEMABINDING  -- Required
AS
SELECT 
    p.ProductID,
    p.ProductName,
    SUM(od.Quantity) AS TotalQuantity,
    SUM(od.Quantity * od.UnitPrice) AS TotalRevenue,
    COUNT_BIG(*) AS OrderCount  -- COUNT_BIG required
FROM dbo.Products p  -- Must use schema
INNER JOIN dbo.OrderDetails od ON p.ProductID = od.ProductID
GROUP BY p.ProductID, p.ProductName;
GO

-- Create unique clustered index (materializes the view)
CREATE UNIQUE CLUSTERED INDEX IX_ProductSales
ON vw_ProductSales(ProductID);

-- Optional: Add non-clustered indexes
CREATE NONCLUSTERED INDEX IX_ProductSales_Revenue
ON vw_ProductSales(TotalRevenue DESC);

-- Query the materialized view
SELECT * FROM vw_ProductSales
WHERE TotalRevenue > 10000
ORDER BY TotalRevenue DESC;

-- View metadata
SELECT 
    OBJECT_NAME(object_id) AS ViewName,
    is_tracked_by_cdc,
    is_sync_tran_subscribed
FROM sys.views
WHERE OBJECT_NAME(object_id) = 'vw_ProductSales';

-- Check if view is indexed (materialized)
SELECT 
    v.name AS ViewName,
    i.name AS IndexName,
    i.type_desc
FROM sys.views v
JOIN sys.indexes i ON v.object_id = i.object_id
WHERE v.name = 'vw_ProductSales';
```

---

### Q77: Can we insert data through Views?

**Answer:**

Yes, you can insert data through views, but only under specific conditions depending on whether the view is simple or complex. Simple views based on a single table without aggregations, DISTINCT, or GROUP BY generally support INSERT operations, and the data is inserted into the underlying base table. Complex views involving multiple tables, joins, aggregations, or GROUP BY clauses typically do not support direct INSERT operations because there's ambiguity about which table should receive the data. However, you can use INSTEAD OF triggers on complex views to define custom logic for handling INSERT operations. When inserting through a view, you can only insert into columns that are present in the view definition, and all NOT NULL columns in the base table must either be in the view or have DEFAULT values. The WITH CHECK OPTION ensures that inserted data satisfies the view's WHERE clause, preventing inserts that wouldn't be visible through the view.

**Conditions for INSERT through views:**
- Simple view (single table)
- No aggregate functions
- No DISTINCT, GROUP BY
- No calculated columns for insert
- All required base table columns available

**Restrictions:**
- Cannot insert into computed columns
- Complex views need INSTEAD OF triggers
- Must satisfy base table constraints

```sql
-- Simple view supporting INSERT
CREATE VIEW vw_ActiveEmployees
AS
SELECT EmployeeID, EmployeeName, Department, Salary, Email
FROM Employee
WHERE IsActive = 1;

-- INSERT works on simple view
INSERT INTO vw_ActiveEmployees (EmployeeID, EmployeeName, Department, Salary, Email)
VALUES (101, 'John Doe', 'Sales', 50000, 'john@company.com');

-- Data inserted into underlying Employee table
SELECT * FROM Employee WHERE EmployeeID = 101;

-- View with WITH CHECK OPTION
CREATE VIEW vw_HighSalaryEmployees
AS
SELECT EmployeeID, EmployeeName, Salary
FROM Employee
WHERE Salary > 50000
WITH CHECK OPTION;

-- This succeeds
INSERT INTO vw_HighSalaryEmployees 
VALUES (102, 'Jane Smith', 60000);

-- This fails (violates WHERE clause)
INSERT INTO vw_HighSalaryEmployees 
VALUES (103, 'Bob Johnson', 40000);  -- ERROR: WITH CHECK OPTION

-- Complex view (doesn't support direct INSERT)
CREATE VIEW vw_EmployeeDepartment
AS
SELECT e.EmployeeID, e.EmployeeName, d.DepartmentName
FROM Employee e
JOIN Department d ON e.DepartmentID = d.DepartmentID;

-- This fails
INSERT INTO vw_EmployeeDepartment VALUES (104, 'Alice Brown', 'IT');  -- ERROR

-- Solution: INSTEAD OF trigger
CREATE TRIGGER trg_Insert_EmployeeDepartment
ON vw_EmployeeDepartment
INSTEAD OF INSERT
AS
BEGIN
    INSERT INTO Employee (EmployeeID, EmployeeName, DepartmentID)
    SELECT 
        i.EmployeeID,
        i.EmployeeName,
        d.DepartmentID
    FROM INSERTED i
    JOIN Department d ON i.DepartmentName = d.DepartmentName;
END;

-- Now INSERT works through trigger
INSERT INTO vw_EmployeeDepartment 
VALUES (104, 'Alice Brown', 'IT');
```

---

### Q78: What is WITH CHECK OPTION?

**Answer:**

WITH CHECK OPTION is a clause used when creating or altering a view that enforces a constraint ensuring that all INSERT and UPDATE operations performed through the view must satisfy the view's WHERE clause condition, preventing modifications that would make the affected rows invisible through the view. When WITH CHECK OPTION is specified, any attempt to insert or update data that doesn't meet the view's filter criteria will fail with an error. This maintains data integrity by ensuring that users working with a view can only see and modify data that belongs in that view's scope. There are two levels: WITH CHECK OPTION applies only to the immediate view, while WITH CASCADED CHECK OPTION (the default) applies the check to the base view and all views it depends on. This feature is particularly useful for implementing row-level security, ensuring department-specific views only contain relevant data, and maintaining logical data boundaries.

**Purpose:**
- Enforces view's WHERE clause on INSERT/UPDATE
- Prevents inserting invisible rows
- Maintains data integrity
- Implements row-level security

**Types:**
- **WITH CHECK OPTION:** Checks only this view
- **WITH CASCADED CHECK OPTION:** Checks this and dependent views (default)
- **WITH LOCAL CHECK OPTION:** Checks only views with CHECK OPTION

```sql
-- View WITHOUT CHECK OPTION
CREATE VIEW vw_SalesDepartment_NoCheck
AS
SELECT EmployeeID, EmployeeName, Department, Salary
FROM Employee
WHERE Department = 'Sales';

-- This INSERT succeeds but row won't be visible in view
INSERT INTO vw_SalesDepartment_NoCheck 
VALUES (101, 'John Doe', 'IT', 50000);

SELECT * FROM vw_SalesDepartment_NoCheck WHERE EmployeeID = 101;
-- Returns no rows (Department is 'IT', not 'Sales')

-- View WITH CHECK OPTION
CREATE VIEW vw_SalesDepartment
AS
SELECT EmployeeID, EmployeeName, Department, Salary
FROM Employee
WHERE Department = 'Sales'
WITH CHECK OPTION;

-- This succeeds
INSERT INTO vw_SalesDepartment 
VALUES (102, 'Jane Smith', 'Sales', 55000);

-- This fails (Department must be 'Sales')
INSERT INTO vw_SalesDepartment 
VALUES (103, 'Bob Johnson', 'IT', 60000);
-- ERROR: The attempted insert or update failed because the target view
-- either specifies WITH CHECK OPTION or spans a view that specifies WITH CHECK OPTION

-- UPDATE also enforced
UPDATE vw_SalesDepartment 
SET Department = 'IT' 
WHERE EmployeeID = 102;
-- ERROR: Cannot change to 'IT' because of CHECK OPTION

-- Cascaded CHECK OPTION example
CREATE VIEW vw_HighSalaryEmployees
AS
SELECT * FROM Employee
WHERE Salary > 50000
WITH CHECK OPTION;

CREATE VIEW vw_HighSalarySales
AS
SELECT * FROM vw_HighSalaryEmployees
WHERE Department = 'Sales';
-- Inherits CHECK OPTION from parent view

-- Must satisfy both conditions
INSERT INTO vw_HighSalarySales 
VALUES (104, 'Alice Brown', 'Sales', 60000);  -- OK

INSERT INTO vw_HighSalarySales 
VALUES (105, 'Charlie Davis', 'Sales', 40000);  -- ERROR (Salary <= 50000)

-- LOCAL CHECK OPTION
CREATE VIEW vw_LocalCheck
AS
SELECT * FROM vw_HighSalaryEmployees
WHERE Department = 'Marketing'
WITH LOCAL CHECK OPTION;
-- Only checks Department = 'Marketing', not salary constraint
```

---

### Q79: Can we create Index on Views?

**Answer:**

Yes, you can create indexes on views in SQL Server, but only if the view meets specific requirements and is created WITH SCHEMABINDING option. Creating a unique clustered index on a view makes it a materialized view or indexed view, physically storing the result set and dramatically improving query performance for complex operations. The first index on a view must be a unique clustered index, after which you can create additional non-clustered indexes. Indexed views are particularly beneficial for aggregations, complex joins, and frequently executed queries on large datasets. Requirements include using WITH SCHEMABINDING to bind the view to the schema of underlying tables, ensuring all referenced objects use two-part names with schema, using deterministic functions only, and avoiding certain constructs like OUTER JOINs, TOP, UNION, subqueries in SELECT list, and COUNT(*) must be COUNT_BIG(*). Indexed views automatically maintain synchronization with base tables but add overhead to INSERT, UPDATE, and DELETE operations on those tables.

**Requirements:**
- View created WITH SCHEMABINDING
- Unique clustered index (first index)
- Two-part names (schema.table)
- Deterministic functions only
- COUNT_BIG instead of COUNT
- No OUTER JOIN, TOP, DISTINCT (in some cases)

**Benefits:**
- Dramatically faster queries
- Precomputed results
- Automatic maintenance
- Transparent to queries

```sql
-- Create indexed view
CREATE VIEW vw_DepartmentSales
WITH SCHEMABINDING
AS
SELECT 
    d.DepartmentID,
    d.DepartmentName,
    SUM(e.Salary) AS TotalSalary,
    COUNT_BIG(*) AS EmployeeCount  -- COUNT_BIG required
FROM dbo.Department d  -- Schema required
INNER JOIN dbo.Employee e ON d.DepartmentID = e.DepartmentID
GROUP BY d.DepartmentID, d.DepartmentName;
GO

-- Create unique clustered index (makes it materialized)
CREATE UNIQUE CLUSTERED INDEX IX_DepartmentSales_DeptID
ON vw_DepartmentSales(DepartmentID);

-- Create additional non-clustered indexes
CREATE NONCLUSTERED INDEX IX_DepartmentSales_Salary
ON vw_DepartmentSales(TotalSalary DESC);

CREATE NONCLUSTERED INDEX IX_DepartmentSales_Count
ON vw_DepartmentSales(EmployeeCount);

-- View with all required elements
CREATE VIEW vw_ProductStatistics
WITH SCHEMABINDING
AS
SELECT 
    p.CategoryID,
    p.ProductID,
    p.ProductName,
    SUM(od.Quantity) AS TotalQuantity,
    SUM(od.Quantity * od.UnitPrice) AS TotalRevenue,
    AVG(od.UnitPrice) AS AvgPrice,
    COUNT_BIG(*) AS OrderLines
FROM dbo.Products p
INNER JOIN dbo.OrderDetails od ON p.ProductID = od.ProductID
WHERE p.IsActive = 1
GROUP BY p.CategoryID, p.ProductID, p.ProductName;
GO

CREATE UNIQUE CLUSTERED INDEX IX_ProductStats
ON vw_ProductStatistics(ProductID);

-- Query optimizer may use indexed view automatically
SELECT ProductName, TotalRevenue
FROM Products p
JOIN OrderDetails od ON p.ProductID = od.ProductID
WHERE p.IsActive = 1
GROUP BY p.ProductID, p.ProductName;
-- May use vw_ProductStatistics index even without referencing view

-- Check indexed views
SELECT 
    OBJECT_NAME(v.object_id) AS ViewName,
    i.name AS IndexName,
    i.type_desc AS IndexType,
    i.is_unique,
    i.is_primary_key
FROM sys.views v
JOIN sys.indexes i ON v.object_id = i.object_id
WHERE i.index_id > 0  -- Has indexes
ORDER BY v.object_id, i.index_id;

-- Disallow/Allow indexed view usage
SELECT * FROM vw_DepartmentSales WITH (NOEXPAND);  -- Force using index
```

---

### Q80: Difference between View and Table?

**Answer:**

Views and tables are fundamentally different database objects despite appearing similar when queried. A table is a physical database object that stores actual data on disk with rows and columns, consuming storage space proportional to the data volume, while a view is a virtual table that doesn't store data but instead stores a SELECT query definition that's executed when the view is accessed. Tables support all DML operations (INSERT, UPDATE, DELETE) directly, whereas views support these operations only under specific conditions, primarily simple views on single tables. Tables can have indexes, constraints, triggers, and physical storage parameters, while views can have indexes only if created as materialized/indexed views with special requirements. Data in tables persists until explicitly modified or deleted, but view results are dynamically generated from underlying tables each time queried. Tables are standalone objects that exist independently, while views depend on underlying base tables and become invalid if those tables are dropped. Performance-wise, querying a table directly accesses stored data, while querying a regular view executes the underlying SQL which may involve joins and calculations, though indexed views provide performance similar to tables.

**Key Differences:**

| Aspect | Table | View |
|--------|-------|------|
| Storage | Physical data storage | Virtual (stores only query) |
| Data | Stores actual data | Retrieves data dynamically |
| Space | Consumes disk space | No space (except indexed views) |
| DML Operations | Full support | Conditional support |
| Indexes | Always allowed | Only with special requirements |
| Performance | Direct data access | Executes underlying query |
| Independence | Standalone | Depends on base tables |
| Constraints | Full support | Limited |
| Modification | ALTER TABLE | ALTER VIEW |

```sql
-- TABLE - Physical storage
CREATE TABLE Employee (
    EmployeeID INT PRIMARY KEY,
    EmployeeName VARCHAR(100),
    Department VARCHAR(50),
    Salary DECIMAL(10,2)
);

-- Stores actual data
INSERT INTO Employee VALUES (1, 'John Doe', 'Sales', 50000);
INSERT INTO Employee VALUES (2, 'Jane Smith', 'IT', 60000);

-- Data physically stored on disk
-- Consumes storage space

-- VIEW - Virtual table
CREATE VIEW vw_Employee
AS
SELECT EmployeeID, EmployeeName, Department, Salary
FROM Employee
WHERE Salary > 40000;

-- No data stored, only query definition
-- No storage space consumed (for regular view)

-- Querying table vs view
SELECT * FROM Employee;  -- Direct data access from storage

SELECT * FROM vw_Employee;  -- Executes SELECT query on Employee table

-- DML Operations
-- Table - Full support
UPDATE Employee SET Salary = 55000 WHERE EmployeeID = 1;  -- Works
DELETE FROM Employee WHERE EmployeeID = 1;  -- Works

-- View - Conditional support
UPDATE vw_Employee SET Salary = 65000 WHERE EmployeeID = 2;  -- Works (simple view)
-- DELETE might work depending on view complexity

-- Indexes
-- Table - Always allowed
CREATE INDEX IX_Employee_Dept ON Employee(Department);

-- View - Special requirements
-- CREATE INDEX IX_View ON vw_Employee(Department);  -- ERROR
-- Must use SCHEMABINDING and unique clustered index

-- Table modifications
ALTER TABLE Employee ADD Email VARCHAR(100);  -- Works

-- View modifications
ALTER VIEW vw_Employee
AS
SELECT EmployeeID, EmployeeName, Department, Salary
FROM Employee
WHERE Salary > 45000;  -- Works

-- Dependency
DROP TABLE Employee;  -- vw_Employee becomes invalid (depends on Employee)

-- Storage information
EXEC sp_spaceused 'Employee';  -- Shows space used
EXEC sp_spaceused 'vw_Employee';  -- Shows 0 KB (unless indexed view)
```


## Section 8: Transactions and Locking

### Q81: What is a Transaction?

**Answer:**

A transaction is a logical unit of work consisting of one or more SQL operations that are executed as a single atomic unit, meaning either all operations complete successfully and are committed to the database, or if any operation fails, all changes are rolled back and the database returns to its previous state. Transactions ensure data integrity and consistency by following the ACID properties: Atomicity ensures all-or-nothing execution, Consistency maintains database integrity rules, Isolation prevents interference between concurrent transactions, and Durability guarantees committed changes persist even after system failures. Transactions are essential for maintaining data accuracy in multi-user environments and handling errors gracefully. Common examples include bank transfers where debiting one account and crediting another must both succeed or both fail, order processing where inventory, orders, and payment must all be updated consistently, and any operation where related data across multiple tables must remain synchronized. Transactions begin explicitly with BEGIN TRANSACTION or implicitly with DML statements, and end with COMMIT to save changes or ROLLBACK to undo them.

**ACID Properties:**
- **Atomicity:** All or nothing execution
- **Consistency:** Maintains data integrity
- **Isolation:** Concurrent transactions don't interfere
- **Durability:** Committed changes are permanent

**Transaction Control:**
- **BEGIN TRANSACTION:** Start transaction
- **COMMIT:** Save all changes
- **ROLLBACK:** Undo all changes
- **SAVEPOINT:** Create intermediate save point

```sql
-- Basic transaction
BEGIN TRANSACTION;
    UPDATE Accounts SET Balance = Balance - 100 WHERE AccountID = 1;
    UPDATE Accounts SET Balance = Balance + 100 WHERE AccountID = 2;
COMMIT;  -- Both updates saved

-- Transaction with error handling
BEGIN TRANSACTION;
BEGIN TRY
    INSERT INTO Orders (OrderID, CustomerID, OrderDate)
    VALUES (1001, 5, GETDATE());
    
    INSERT INTO OrderDetails (OrderID, ProductID, Quantity)
    VALUES (1001, 10, 5);
    
    UPDATE Products SET Stock = Stock - 5 WHERE ProductID = 10;
    
    COMMIT TRANSACTION;
    PRINT 'Order placed successfully';
END TRY
BEGIN CATCH
    ROLLBACK TRANSACTION;
    PRINT 'Error: ' + ERROR_MESSAGE();
END CATCH;

-- Transaction with validation
BEGIN TRANSACTION;
    DECLARE @Balance DECIMAL(10,2);
    
    SELECT @Balance = Balance FROM Accounts WHERE AccountID = 1;
    
    IF @Balance >= 100
    BEGIN
        UPDATE Accounts SET Balance = Balance - 100 WHERE AccountID = 1;
        UPDATE Accounts SET Balance = Balance + 100 WHERE AccountID = 2;
        COMMIT;
        PRINT 'Transfer successful';
    END
    ELSE
    BEGIN
        ROLLBACK;
        PRINT 'Insufficient balance';
    END;

-- Checking transaction state
SELECT @@TRANCOUNT AS ActiveTransactions;  -- Number of active transactions
SELECT XACT_STATE() AS TransactionState;  -- -1, 0, or 1

-- Implicit transactions (auto-commit mode is default)
UPDATE Employee SET Salary = 50000 WHERE EmployeeID = 1;
-- Automatically committed
```

---

### Q82: What is ACID Property?

**Answer:**

ACID is an acronym representing four fundamental properties that guarantee reliable transaction processing in database systems: Atomicity, Consistency, Isolation, and Durability. Atomicity ensures that a transaction is treated as a single indivisible unit where either all operations complete successfully and are committed, or if any operation fails, all changes are rolled back as if the transaction never occurred, preventing partial updates that could leave the database in an inconsistent state. Consistency ensures that a transaction brings the database from one valid state to another valid state, maintaining all defined integrity constraints, rules, and invariants, so the database never violates business rules or data integrity constraints. Isolation ensures that concurrent transactions execute independently without interfering with each other, making it appear as if transactions are executed serially even when running simultaneously, preventing issues like dirty reads, non-repeatable reads, and phantom reads. Durability guarantees that once a transaction is committed, its changes are permanent and will survive system crashes, power failures, or errors, typically achieved through transaction logs and write-ahead logging mechanisms. Together, these properties ensure database reliability, consistency, and integrity in multi-user environments.

**A - Atomicity:**
- All-or-nothing execution
- Partial transactions not allowed
- Rollback on any failure
- Maintains database consistency

**C - Consistency:**
- Enforces integrity constraints
- Valid state to valid state
- Business rules maintained
- No  constraint violations

**I - Isolation:**
- Concurrent transactions don't interfere
- Prevents dirty reads, phantom reads
- Multiple isolation levels available
- Controlled by locking mechanisms

**D - Durability:**
- Committed changes are permanent
- Survives system crashes
- Transaction log ensures recovery
- Changes persisted to disk

```sql
-- Demonstrating ACID properties

-- ATOMICITY: All or nothing
BEGIN TRANSACTION;
    -- Both must succeed or both fail
    UPDATE Account SET Balance = Balance - 500 WHERE AccountID = 1;
    UPDATE Account SET Balance = Balance + 500 WHERE AccountID = 2;
    
    -- If second update fails, first is rolled back
    IF @@ERROR <> 0
        ROLLBACK TRANSACTION;
    ELSE
        COMMIT TRANSACTION;

-- CONSISTENCY: Maintaining constraints
BEGIN TRANSACTION;
BEGIN TRY
    INSERT INTO Employee (EmployeeID, Name, Age, Salary)
    VALUES (101, 'John Doe', 25, 50000);
    
    -- This violates CHECK constraint (Age >= 18)
    INSERT INTO Employee (EmployeeID, Name, Age, Salary)
    VALUES (102, 'Jane Smith', 15, 40000);  -- Fails
    
    COMMIT;  -- Won't reach here
END TRY
BEGIN CATCH
    ROLLBACK;  -- Maintains consistency
    PRINT 'Transaction rolled back due to constraint violation';
END CATCH;

-- ISOLATION: Preventing interference
-- Transaction 1
SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
BEGIN TRANSACTION;
    SELECT Balance FROM Account WHERE AccountID = 1;
    -- Other transactions can't see uncommitted changes
    UPDATE Account SET Balance = Balance + 100 WHERE  AccountID = 1;
    -- Delay before commit
    WAITFOR DELAY '00:00:10';
COMMIT;

-- Transaction 2 (concurrent)
SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
BEGIN TRANSACTION;
    -- Waits for Transaction 1 to commit
    SELECT Balance FROM Account WHERE AccountID = 1;
COMMIT;

-- DURABILITY: Persisting changes
BEGIN TRANSACTION;
    UPDATE CriticalData SET Value = 'Important' WHERE ID = 1;
COMMIT;
-- Even if system crashes after COMMIT, change is permanent
-- Transaction log ensures recovery

-- Checking ACID compliance
SELECT 
    name AS DatabaseName,
    recovery_model_desc,  -- For Durability
    is_read_committed_snapshot_on,  -- For Isolation
    snapshot_isolation_state_desc  -- For Isolation
FROM sys.databases
WHERE name = DB_NAME();
```

---

### Q83: What is COMMIT?

**Answer:**

COMMIT is a transaction control statement that permanently saves all changes made during the current transaction to the database, making them visible to other users and ensuring durability. When you execute COMMIT, all INSERT, UPDATE, and DELETE operations performed within the transaction are written permanently to disk, all locks acquired during the transaction are released allowing other transactions to proceed, and the transaction counter is decremented. Once committed, changes cannot be rolled back and become a permanent part of the database even if the system crashes subsequently, as the transaction log ensures recovery. COMMIT should be used after successfully completing all operations in a transaction when you're confident the data is correct and all business rules are satisfied. In auto-commit mode which is the default in most database systems, each individual SQL statement is automatically committed upon successful execution without requiring an explicit COMMIT statement. Understanding when to commit is crucial for balancing data integrity with performance and concurrency.

**Purpose:**
- Makes transaction changes permanent
- Releases locks and resources
- Decrements transaction counter
- Ensures durability of changes
- Makes changes visible to other users

**When to Use:**
- After successful transaction completion
- When all validations pass
- Before ending a logical unit of work
- After error-free execution

```sql
-- Explicit transaction with COMMIT
BEGIN TRANSACTION;
    INSERT INTO Orders (OrderID, CustomerID, OrderDate, TotalAmount)
    VALUES (1001, 105, GETDATE(), 1500.00);
    
    INSERT INTO OrderDetails (OrderID, ProductID, Quantity, UnitPrice)
    VALUES (1001, 50, 3, 500.00);
    
    UPDATE Products SET Stock = Stock - 3 WHERE ProductID = 50;
    
COMMIT TRANSACTION;  -- All changes saved permanently
PRINT 'Order committed successfully';

-- COMMIT with error handling
BEGIN TRANSACTION;
BEGIN TRY
    UPDATE Inventory SET Quantity = Quantity - 10 WHERE ProductID = 100;
    
    IF (SELECT Quantity FROM Inventory WHERE ProductID = 100) < 0
    BEGIN
        RAISERROR('Insufficient inventory', 16, 1);
    END;
    
    INSERT INTO Sales (ProductID, QuantitySold) VALUES (100, 10);
    
    COMMIT TRANSACTION;  -- Committed only if no errors
    PRINT 'Transaction committed';
END TRY
BEGIN CATCH
    ROLLBACK TRANSACTION;  -- Undo all changes on error
    PRINT 'Transaction rolled back: ' + ERROR_MESSAGE();
END CATCH;

-- Nested transactions (only outermost COMMIT matters)
BEGIN TRANSACTION;  -- @@TRANCOUNT = 1
    UPDATE Table1 SET Value = 100;
    
    BEGIN TRANSACTION;  -- @@TRANCOUNT = 2
        UPDATE Table2 SET Value = 200;
    COMMIT;  -- @@TRANCOUNT = 1 (doesn't actually commit)
    
COMMIT;  -- @@TRANCOUNT = 0 (actual commit happens here)

-- Auto-commit mode (default)
UPDATE Employee SET Salary = 55000 WHERE EmployeeID = 1;
-- Automatically committed after successful execution

-- Checking transaction count
SELECT @@TRANCOUNT AS OpenTransactions;  -- 0 if no active transaction

-- Commit with verification
BEGIN TRANSACTION;
    DECLARE @RowsAffected INT;
    
    UPDATE Products SET Price = Price * 1.10 WHERE CategoryID = 5;
    SET @RowsAffected = @@ROWCOUNT;
    
    IF @RowsAffected > 0
    BEGIN
        COMMIT;
        PRINT CAST(@RowsAffected AS VARCHAR) + ' rows updated and committed';
    END
    ELSE
    BEGIN
        ROLLBACK;
        PRINT 'No rows affected, transaction rolled back';
    END;
```

---

### Q84: What is ROLLBACK?

**Answer:**

ROLLBACK is a transaction control statement that undoes all changes made during the current transaction, returning the database to its state before the transaction began, effectively canceling all INSERT, UPDATE, and DELETE operations performed within the transaction. When you execute ROLLBACK, all modifications are discarded, all locks acquired during the transaction are released, and the transaction counter is decremented. ROLLBACK is crucial for maintaining data integrity when errors occur, validation fails, or business rules are violated, ensuring that partial or incorrect changes don't corrupt the database. It can be used to rollback to the beginning of a transaction or to a specific SAVEPOINT within the transaction, allowing fine-grained control over which operations to undo. ROLLBACK acts as a safety mechanism enabling developers to implement error handling that prevents data inconsistencies, and it's commonly used in TRY-CATCH blocks to automatically undo changes when exceptions occur. Unlike COMMIT which makes changes permanent, ROLLBACK ensures that failed or invalid operations have no lasting impact on database state.

**Purpose:**
- Undoes all transaction changes
- Returns database to previous state
- Releases locks and resources
- Prevents partial/invalid updates
- Error recovery mechanism

**When to Use:**
- When errors occur
- When validation fails
- On business rule violations
- On exception in TRY-CATCH
- When user cancels operation

```sql
-- Basic ROLLBACK
BEGIN TRANSACTION;
    UPDATE Account SET Balance = Balance - 1000 WHERE AccountID = 1;
    UPDATE Account SET Balance = Balance + 1000 WHERE AccountID = 2;
    
    -- Error occurred
ROLLBACK TRANSACTION;  -- Undoes both updates
PRINT 'Transaction rolled back';

-- ROLLBACK with error handling
BEGIN TRANSACTION;
BEGIN TRY
    DECLARE @Balance DECIMAL(10,2);
    
    SELECT @Balance = Balance FROM Account WHERE AccountID = 1;
    
    IF @Balance < 1000
    BEGIN
        RAISERROR('Insufficient funds', 16, 1);
    END;
    
    UPDATE Account SET Balance = Balance - 1000 WHERE AccountID = 1;
    UPDATE Account SET Balance = Balance + 1000 WHERE AccountID = 2;
    
    COMMIT TRANSACTION;
END TRY
BEGIN CATCH
    ROLLBACK TRANSACTION;  -- Automatic rollback on error
    PRINT 'Error: ' + ERROR_MESSAGE();
END CATCH;

-- Conditional ROLLBACK
BEGIN TRANSACTION;
    UPDATE Inventory SET Quantity = Quantity - 50 WHERE ProductID = 100;
    
    DECLARE @NewQuantity INT;
    SELECT @NewQuantity = Quantity FROM Inventory WHERE ProductID = 100;
    
    IF @NewQuantity < 0
    BEGIN
        ROLLBACK TRANSACTION;
        PRINT 'Transaction rolled back: Would result in negative inventory';
    END
    ELSE
    BEGIN
        COMMIT TRANSACTION;
        PRINT 'Transaction committed successfully';
    END;

-- ROLLBACK to SAVEPOINT
BEGIN TRANSACTION;
    UPDATE Employee SET Salary = Salary * 1.10 WHERE Department = 'Sales';
    SAVE TRANSACTION SavePoint1;  -- Create savepoint
    
    UPDATE Employee SET Salary = Salary * 1.05 WHERE Department = 'IT';
    SAVE TRANSACTION SavePoint2;
    
    UPDATE Employee SET Salary = Salary * 1.15 WHERE Department = 'HR';
    
    -- Rollback to SavePoint2 (undoes only HR update)
    ROLLBACK TRANSACTION SavePoint2;
    
    -- Rollback to SavePoint1 (undoes IT and HR updates)
    ROLLBACK TRANSACTION SavePoint1;
    
COMMIT TRANSACTION;  -- Commits only Sales update

-- Checking transaction state before rollback
IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRANSACTION;
    PRINT 'Active transaction rolled back';
END;

-- Rollback in trigger
CREATE TRIGGER trg_PreventSalaryDecrease
ON Employee
AFTER UPDATE
AS
BEGIN
    IF EXISTS (
        SELECT 1 FROM INSERTED i
        JOIN DELETED d ON i.EmployeeID = d.EmployeeID
        WHERE i.Salary < d.Salary
    )
    BEGIN
        ROLLBACK TRANSACTION;
        RAISERROR('Salary cannot be decreased', 16, 1);
    END;
END;
```

---

### Q85: What is SAVEPOINT?

**Answer:**

SAVEPOINT, also known as SAVE TRANSACTION in SQL Server, is a mechanism that creates a named marker within a transaction allowing you to perform a partial rollback to that specific point rather than rolling back the entire transaction. Savepoints provide fine-grained control over transaction management by enabling you to undo only a portion of the transaction's operations while preserving earlier changes, which is particularly useful in complex transactions with multiple steps where you may want to retry certain operations without losing all progress. When you rollback to a savepoint, all changes made after that savepoint are undone, but changes made before it remain intact and the transaction continues to be active. You can create multiple savepoints within a single transaction, and rolling back to an earlier savepoint automatically releases all subsequent savepoints. Savepoints are valuable for implementing sophisticated error handling, trying alternative approaches when operations fail, and managing long-running transactions with multiple optional steps, though they add complexity and should be used judiciously to maintain code readability.

**Purpose:**
- Create recovery points within transactions
- Enable partial rollback
- Preserve earlier changes
- Support complex error handling
- Allow retry logic without full rollback

**Characteristics:**
- Multiple savepoints allowed
- Rollback to specific point
- Transaction remains active
- Later savepoints released on rollback
- Names must be unique

```sql
-- Basic SAVEPOINT usage
BEGIN TRANSACTION;
    -- Step 1: Update prices
    UPDATE Products SET Price = Price * 1.10 WHERE CategoryID = 1;
    SAVE TRANSACTION Step1;  -- Create savepoint after step 1
    
    -- Step 2: Update inventory
    UPDATE Products SET Stock = Stock - 10 WHERE CategoryID = 1;
    SAVE TRANSACTION Step2;  -- Create savepoint after step 2
    
    -- Step 3: Update descriptions (error occurs)
    UPDATE Products SET Description = NULL WHERE CategoryID = 1;
    
    -- Rollback only Step 3, keep Steps 1 and 2
    ROLLBACK TRANSACTION Step2;  -- Undo only inventory update
    
COMMIT TRANSACTION;  -- Commit price updates

-- Complex transaction with savepoints
BEGIN TRANSACTION;
BEGIN TRY
    -- Phase 1: Create order
    INSERT INTO Orders (CustomerID, OrderDate) VALUES (100, GETDATE());
    DECLARE @OrderID INT = SCOPE_IDENTITY();
    SAVE TRANSACTION OrderCreated;
    
    -- Phase 2: Add order items
    INSERT INTO OrderDetails (OrderID, ProductID, Quantity, UnitPrice)
    VALUES (@OrderID, 1, 5, 100.00);
    SAVE TRANSACTION ItemsAdded;
    
    -- Phase 3: Update inventory
    UPDATE Inventory SET Quantity = Quantity - 5 WHERE ProductID = 1;
    
    -- Check inventory validity
    IF (SELECT Quantity FROM Inventory WHERE ProductID = 1) < 0
    BEGIN
        -- Rollback only inventory update, keep order and items
        ROLLBACK TRANSACTION ItemsAdded;
        PRINT 'Insufficient inventory, order on backorder';
    END;
    
    COMMIT TRANSACTION;
END TRY
BEGIN CATCH
    ROLLBACK TRANSACTION;  -- Full rollback on unexpected error
    PRINT 'Error: ' + ERROR_MESSAGE();
END CATCH;

-- Savepoints with retry logic
BEGIN TRANSACTION;
    DECLARE @Attempts INT = 0;
    DECLARE @Success BIT = 0;
    
    UPDATE Account SET Balance = Balance - 100 WHERE AccountID = 1;
    SAVE TRANSACTION AfterDebit;
    
    WHILE @Attempts < 3 AND @Success = 0
    BEGIN
        BEGIN TRY
            UPDATE Account SET Balance = Balance + 100 WHERE AccountID = 2;
            SET @Success = 1;
        END TRY
        BEGIN CATCH
            ROLLBACK TRANSACTION AfterDebit;  -- Retry credit
            SET @Attempts = @Attempts + 1;
            WAITFOR DELAY '00:00:01';  -- Wait before retry
        END CATCH;
    END;
    
    IF @Success = 1
        COMMIT TRANSACTION;
    ELSE
        ROLLBACK TRANSACTION;

-- Savepoint with conditional operations
BEGIN TRANSACTION;
    UPDATE Orders SET Status = 'Processing' WHERE OrderID = 1001;
    SAVE TRANSACTION StatusUpdated;
    
    -- Try to charge credit card
    EXEC ChargePayment @OrderID = 1001, @Success = @PaymentSuccess OUTPUT;
    
    IF @PaymentSuccess = 0
    BEGIN
        -- Payment failed, rollback to savepoint
        ROLLBACK TRANSACTION StatusUpdated;
        UPDATE Orders SET Status = 'Payment Failed' WHERE OrderID = 1001;
    END;
    
COMMIT TRANSACTION;

-- Nested savepoints
BEGIN TRANSACTION;
    INSERT INTO Log VALUES ('Transaction started');
    SAVE TRANSACTION SP1;
    
    UPDATE Table1 SET Value = 100;
    SAVE TRANSACTION SP2;
    
    UPDATE Table2 SET Value = 200;
    SAVE TRANSACTION SP3;
    
    -- Rollback to SP2 (releases SP3)
    ROLLBACK TRANSACTION SP2;
    
    -- SP3 no longer exists, SP1 and SP2 still valid
    
COMMIT TRANSACTION;
```

---

### Q86: What are Transaction Isolation Levels?

**Answer:**

Transaction isolation levels define the degree to which one transaction must be isolated from the effects of other concurrent transactions, determining what data modifications made by one transaction are visible to other concurrent transactions. SQL Server supports four standard isolation levels as defined by the SQL standard: READ UNCOMMITTED (lowest isolation, highest concurrency), READ COMMITTED (default), REPEATABLE READ, and SERIALIZABLE (highest isolation, lowest concurrency). Each level provides different trade-offs between data consistency and concurrent access performance. Lower isolation levels allow higher concurrency but may experience phenomena like dirty reads, non-repeatable reads, or phantom reads, while higher isolation levels prevent these issues but reduce concurrency and may cause more locking and blocking. Additionally, SQL Server provides snapshot-based isolation levels (SNAPSHOT and READ COMMITTED SNAPSHOT) that use row versioning to provide consistent reads without blocking. Choosing the appropriate isolation level depends on your application's requirements for data consistency versus performance and concurrency.

**Isolation Levels (lowest to highest):**
1. **READ UNCOMMITTED** - No isolation, allows dirty reads
2. **READ COMMITTED** - Default, prevents dirty reads  
3. **REPEATABLE READ** - Prevents non-repeatable reads
4. **SERIALIZABLE** - Full isolation, prevents phantom reads
5. **SNAPSHOT** - Row versioning, no locks for reads

**Problems Prevented:**

| Level | Dirty Reads | Non-Repeatable | Phantom Reads |
|-------|-------------|----------------|---------------|
| READ UNCOMMITTED | No | No | No |
| READ COMMITTED | Yes | No | No |
| REPEATABLE READ | Yes | Yes | No |
| SERIALIZABLE | Yes | Yes | Yes |
| SNAPSHOT | Yes | Yes | Yes |

```sql
-- Setting isolation level for session
SET TRANSACTION ISOLATION LEVEL READ UNCOMMITTED;
SET TRANSACTION ISOLATION LEVEL READ COMMITTED;  -- Default
SET TRANSACTION ISOLATION LEVEL REPEATABLE READ;
SET TRANSACTION ISOLATION LEVEL SERIALIZABLE;
SET TRANSACTION ISOLATION LEVEL SNAPSHOT;

-- Setting isolation level for specific transaction
BEGIN TRANSACTION;
SET TRANSACTION ISOLATION LEVEL SERIALIZABLE;
    SELECT * FROM Orders WHERE CustomerID = 100;
COMMIT;

-- Table-level hint overrides session isolation
SELECT * FROM Employee WITH (NOLOCK);  -- Same as READ UNCOMMITTED
SELECT * FROM Employee WITH (READCOMMITTED);
SELECT * FROM Employee WITH (REPEATABLEREAD);
SELECT * FROM Employee WITH (SERIALIZABLE);

-- Checking current isolation level
DBCC USEROPTIONS;

-- Or using system function
SELECT 
    CASE transaction_isolation_level
        WHEN 0 THEN 'Unspecified'
        WHEN 1 THEN 'READ UNCOMMITTED'
        WHEN 2 THEN 'READ COMMITTED'
        WHEN 3 THEN 'REPEATABLE READ'
        WHEN 4 THEN 'SERIALIZABLE'
        WHEN 5 THEN 'SNAPSHOT'
    END AS IsolationLevel
FROM sys.dm_exec_sessions
WHERE session_id = @@SPID;
```

---

### Q87: What is READ UNCOMMITTED?

**Answer:**

READ UNCOMMITTED is the lowest transaction isolation level that allows transactions to read data that has been modified by other transactions but not yet committed, known as dirty reads. This isolation level provides the highest level of concurrency but the lowest level of data consistency, as it places no shared locks and doesn't honor exclusive locks, allowing reads to proceed without waiting for other transactions to complete. While this dramatically improves performance by eliminating lock waits, it means you can read uncommitted changes that might be rolled back, leading to potentially incorrect query results. READ UNCOMMITTED is equivalent to using the NOLOCK hint and is typically used for approximate reporting, statistics, or scenarios where performance is critical and occasional incorrect data is acceptable. It should never be used for financial transactions, critical business logic, or any scenario requiring accurate data. This isolation level prevents no concurrency problems - it allows dirty reads, non-repeatable reads, and phantom reads.

**Characteristics:**
- Lowest isolation level
- Allows dirty reads (uncommitted data)
- No shared locks placed
- Doesn't honor exclusive locks
- Highest concurrency
- Lowest data consistency

**Use Cases:**
- Approximate reporting
- Statistical queries
- Non-critical data reads
- Performance-critical scenarios
- Large table scans

```sql
-- Set READ UNCOMMITTED for session
SET TRANSACTION ISOLATION LEVEL READ UNCOMMITTED;

-- Transaction 1: Writing data
BEGIN TRANSACTION;
    UPDATE Employee SET Salary = 100000 WHERE EmployeeID = 1;
    -- Not committed yet
    WAITFOR DELAY '00:00:10';
ROLLBACK;  -- Changes reverted

-- Transaction 2: Reading (concurrent, READ UNCOMMITTED)
SET TRANSACTION ISOLATION LEVEL READ UNCOMMITTED;
SELECT Salary FROM Employee WHERE EmployeeID = 1;
-- Returns 100000 (dirty read) even though it will be rolled back

-- Using NOLOCK hint (equivalent)
SELECT * FROM Employee WITH (NOLOCK) WHERE Department = 'Sales';

-- Demonstrating dirty read problem
-- Session 1
BEGIN TRANSACTION;
UPDATE Products SET Price = 999.99 WHERE ProductID = 100;
-- Don't commit yet

-- Session 2 (READ UNCOMMITTED)
SET TRANSACTION ISOLATION LEVEL READ UNCOMMITTED;
SELECT Price FROM Products WHERE ProductID = 100;
-- Returns 999.99 (uncommitted value)

-- Session 1 rolls back
ROLLBACK;  -- Price reverts to original

-- Session 2's read was incorrect (dirty read)

-- When to use READ UNCOMMITTED
SET TRANSACTION ISOLATION LEVEL READ UNCOMMITTED;
SELECT 
    Department,
    COUNT(*) AS ApproximateCount,
    AVG(Salary) AS ApproximateAvgSalary
FROM Employee
GROUP BY Department;
-- Acceptable for approximate statistics

-- When NOT to use
-- DON'T use for:
-- - Financial transactions
-- - Critical business logic
-- - Data requiring accuracy
SET TRANSACTION ISOLATION LEVEL READ COMMITTED;  -- Use higher level
```

---

### Q88: What is READ COMMITTED?

**Answer:**

READ COMMITTED is the default isolation level in SQL Server that prevents dirty reads by ensuring transactions can only read data that has been committed by other transactions, providing a balance between data consistency and concurrency. Under READ COMMITTED, shared locks are acquired for read operations and held only for the duration of the read, not for the entire transaction, which allows better concurrency than higher isolation levels. While it prevents dirty reads, READ COMMITTED still allows non-repeatable reads where the same query executed twice within a transaction can return different results if another transaction modifies and commits the data between the reads, and phantom reads where new rows matching the query criteria can appear. By default, READ COMMITTED uses locking to enforce consistency, but SQL Server also supports READ COMMITTED SNAPSHOT isolation which uses row versioning instead of locks, providing non-blocking reads with the same consistency guarantees. This isolation level is suitable for most OLTP applications where preventing dirty reads is essential but some inconsistency is acceptable.

**Characteristics:**
- Default isolation level in SQL Server
- Prevents dirty reads
- Allows non-repeatable reads and phantom reads
- Shared locks held only during read
- Good balance of consistency and concurrency
- Can use locking or snapshot versions

**Behavior:**
- Reads only committed data
- Shared locks released immediately after read
- Other transactions can modify data between reads
- Better concurrency than REPEATABLE READ

```sql
-- Default isolation level (explicitly set)
SET TRANSACTION ISOLATION LEVEL READ COMMITTED;

-- Transaction 1: Modifying data
BEGIN TRANSACTION;
    UPDATE Employee SET Salary = 75000 WHERE EmployeeID = 1;
    WAITFOR DELAY '00:00:05';
COMMIT;

-- Transaction 2: Reading (concurrent, READ COMMITTED)
SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
BEGIN TRANSACTION;
    SELECT Salary FROM Employee WHERE EmployeeID = 1;
    -- Waits for Transaction 1 to commit (prevents dirty read)
    -- Returns 75000 after commit
COMMIT;

-- Demonstrating non-repeatable read
-- Transaction 1
SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
BEGIN TRANSACTION;
    SELECT Salary FROM Employee WHERE EmployeeID = 1;  -- Returns 50000
    
    WAITFOR DELAY '00:00:10';  -- Wait for concurrent update
    
    SELECT Salary FROM Employee WHERE EmployeeID = 1;  -- Returns 60000 (changed!)
COMMIT;

-- Transaction 2 (concurrent)
BEGIN TRANSACTION;
    UPDATE Employee SET Salary = 60000 WHERE EmployeeID = 1;
COMMIT;

-- READ COMMITTED SNAPSHOT (alternative)
-- Enable at database level
ALTER DATABASE MyDatabase
SET READ_COMMITTED_SNAPSHOT ON;

-- Now READ COMMITTED uses row versioning
SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
BEGIN TRANSACTION;
    SELECT * FROM Employee WHERE EmployeeID = 1;
    -- Returns snapshot as of transaction start
    -- No locks, no blocking
    WAITFOR DELAY '00:00:05';
    SELECT * FROM Employee WHERE EmployeeID = 1;
    -- Returns same snapshot (consistent within transaction)
COMMIT;

-- Checking if RCSI is enabled
SELECT 
    name,
    is_read_committed_snapshot_on
FROM sys.databases
WHERE name = DB_NAME();

-- Practical usage
BEGIN TRANSACTION;
    -- Read current balance (waits for locks to clear)
    DECLARE @Balance DECIMAL(10,2);
    SELECT @Balance = Balance 
    FROM Account WITH (READCOMMITTED)
    WHERE AccountID = 100;
    
    IF @Balance >= 500
    BEGIN
        UPDATE Account SET Balance = Balance - 500
        WHERE AccountID = 100;
    END;
COMMIT;
```

---

### Q89: What is REPEATABLE READ?

**Answer:**

REPEATABLE READ is an isolation level that ensures once data is read within a transaction, subsequent reads of the same data within that transaction will always return the same values, preventing non-repeatable reads by holding shared locks on all data read until the transaction completes. This means if you read a row at the beginning of your transaction, no other transaction can modify that row until your transaction finishes, guaranteeing consistency for data you've already read. While REPEATABLE READ prevents dirty reads and non-repeatable reads, it still allows phantom reads where new rows matching your query criteria can be inserted by other transactions. This isolation level uses range locks on read data, which significantly reduces concurrency compared to READ COMMITTED as locks are held for the transaction duration rather than just the read duration. REPEATABLE READ is appropriate for scenarios requiring consistent reads of specific rows throughout a transaction, such as multi-step calculations or comparisons, but the increased locking can lead to more blocking and potential deadlocks.

**Characteristics:**
- Prevents dirty reads and non-repeatable reads
- Allows phantom reads
- Shared locks held until transaction ends
- Lower concurrency than READ COMMITTED
- Guarantees consistent row values
- May cause more blocking

**Comparison:**
- **Prevents:** Dirty reads, Non-repeatable reads
- **Allows:** Phantom reads
- **Lock Duration:** Entire transaction
- **Use Case:** Consistent multi-read scenarios

```sql
-- Set REPEATABLE READ isolation
SET TRANSACTION ISOLATION LEVEL REPEATABLE READ;

-- Transaction 1: Consistent reads
BEGIN TRANSACTION;
    SELECT Salary FROM Employee WHERE EmployeeID = 1;  -- Returns 50000
    
    -- Other transaction tries to update
    WAITFOR DELAY '00:00:10';
    
    SELECT Salary FROM Employee WHERE EmployeeID = 1;  -- Still returns 50000
    -- Guaranteed same value (locks prevent modification)
COMMIT;  -- Locks released

-- Transaction 2 (concurrent, tries to modify)
BEGIN TRANSACTION;
    UPDATE Employee SET Salary = 60000 WHERE EmployeeID = 1;
    -- Blocked until Transaction 1 commits
COMMIT;

-- Demonstrating phantom reads (still allowed)
-- Transaction 1
SET TRANSACTION ISOLATION LEVEL REPEATABLE READ;
BEGIN TRANSACTION;
    SELECT COUNT(*) FROM Employee WHERE Department = 'Sales';  -- Returns 10
    
    WAITFOR DELAY '00:00:05';
    
    SELECT COUNT(*) FROM Employee WHERE Department = 'Sales';  -- Returns 11 (phantom!)
COMMIT;

-- Transaction 2 (concurrent)
BEGIN TRANSACTION;
    INSERT INTO Employee (EmployeeID, EmployeeName, Department, Salary)
    VALUES (999, 'New Employee', 'Sales', 50000);
COMMIT;  -- New row is a phantom

-- Preventing non-repeatable reads
BEGIN TRANSACTION;
    DECLARE @Price1 DECIMAL(10,2), @Price2 DECIMAL(10,2);
    
    SELECT @Price1 = Price FROM Products WHERE ProductID = 100;
    -- Shared lock held on this row
    
    WAITFOR DELAY '00:00:05';
    
    SELECT @Price2 = Price FROM Products WHERE ProductID = 100;
    -- Guaranteed @Price1 = @Price2
    
    IF @Price1 = @Price2
        PRINT 'Price remained consistent';
COMMIT;

-- Using table hint
SELECT * FROM Employee WITH (REPEATABLEREAD)
WHERE Department = 'Sales';

-- Demonstrating increased blocking
-- Session 1
SET TRANSACTION ISOLATION LEVEL REPEATABLE READ;
BEGIN TRANSACTION;
    SELECT * FROM Orders WHERE OrderID = 1001;
    -- Holds shared lock
    WAITFOR DELAY '00:01:00';
COMMIT;

-- Session 2 (blocked)
UPDATE Orders SET TotalAmount = 2000 WHERE OrderID = 1001;
-- Waits for Session 1 to complete

-- When to use REPEATABLE READ
SET TRANSACTION ISOLATION LEVEL REPEATABLE READ;
BEGIN TRANSACTION;
    -- Calculate total from multiple reads
    DECLARE @Total DECIMAL(10,2) = 0;
    
    SELECT @Total = @Total + Amount FROM Transactions WHERE AccountID = 100;
    -- Process...
    SELECT @Total = @Total + Amount FROM Transactions WHERE AccountID = 100;
    -- Guaranteed same values
COMMIT;
```

---

### Q90: What is SERIALIZABLE?

**Answer:**

SERIALIZABLE is the highest isolation level that provides complete isolation from other transactions by making transactions appear as if they executed serially one after another, eliminating all concurrency anomalies including dirty reads, non-repeatable reads, and phantom reads. Under SERIALIZABLE isolation, range locks are placed on data that prevent other transactions from inserting, updating, or deleting rows that would affect the result set, ensuring that if you execute the same query multiple times within a transaction, you get identical results. This is achieved through aggressive locking including range locks and key-range locks that block other transactions from modifying or inserting data in the locked ranges. While SERIALIZABLE provides the strongest consistency guarantees, it severely limits concurrent access, significantly reduces throughput, increases the likelihood of deadlocks, and can dramatically impact performance in high-concurrency environments. SERIALIZABLE is typically used for critical financial transactions, inventory management where exact counts matter, or any scenario where absolute consistency is required and performance can be sacrificed.

**Characteristics:**
- Highest isolation level
- Prevents all concurrency anomalies
- Places range locks on data
- Lowest concurrency
- Highest data consistency
- Significant performance impact

**Prevents All:**
- Dirty reads
- Non-repeatable reads  
- Phantom reads

```sql
-- Set SERIALIZABLE isolation
SET TRANSACTION ISOLATION LEVEL SERIALIZABLE;

-- Transaction 1: Complete isolation
BEGIN TRANSACTION;
    SELECT COUNT(*) FROM Employee WHERE Department = 'Sales';  -- Returns 10
    
    WAITFOR DELAY '00:00:10';
    
    SELECT COUNT(*) FROM Employee WHERE Department = 'Sales';  -- Still returns 10
    -- No phantoms allowed (range lock prevents inserts)
COMMIT;

-- Transaction 2 (concurrent, blocked)
BEGIN TRANSACTION;
    INSERT INTO Employee (EmployeeID, EmployeeName, Department, Salary)
    VALUES (999, 'New Employee', 'Sales', 50000);
    -- Blocked by range lock on Department = 'Sales'
COMMIT;

-- Demonstrating complete consistency
-- Transaction 1
SET TRANSACTION ISOLATION LEVEL SERIALIZABLE;
BEGIN TRANSACTION;
    DECLARE @Total1 DECIMAL(10,2), @Total2 DECIMAL(10,2);
    
    SELECT @Total1 = SUM(Amount) FROM Orders WHERE CustomerID = 100;
    -- Range lock on CustomerID = 100
    
    WAITFOR DELAY '00:00:05';
    
    SELECT @Total2 = SUM(Amount) FROM Orders WHERE CustomerID = 100;
    -- Guaranteed @Total1 = @Total2 (no inserts/updates/deletes allowed)
    
    PRINT 'Total1: ' + CAST(@Total1 AS VARCHAR);
    PRINT 'Total2: ' + CAST(@Total2 AS VARCHAR);
COMMIT;

-- Critical financial transaction
SET TRANSACTION ISOLATION LEVEL SERIALIZABLE;
BEGIN TRANSACTION;
BEGIN TRY
    DECLARE @AccountBalance DECIMAL(10,2);
    
    -- Lock account balance
    SELECT @AccountBalance = Balance 
    FROM Accounts WITH (SERIALIZABLE)
    WHERE AccountID = 1001;
    
    IF @Account Balance >= 5000
    BEGIN
        -- Debit
        UPDATE Accounts SET Balance = Balance - 5000
        WHERE AccountID = 1001;
        
        -- Credit
        UPDATE Accounts SET Balance = Balance + 5000
        WHERE AccountID = 2002;
        
        -- Log transaction
        INSERT INTO TransactionLog (FromAccount, ToAccount, Amount, TransDate)
        VALUES (1001, 2002, 5000, GETDATE());
    END;
    
    COMMIT TRANSACTION;
END TRY
BEGIN CATCH
    ROLLBACK TRANSACTION;
    PRINT 'Error: ' + ERROR_MESSAGE();
END CATCH;

-- Performance impact demonstration
-- Session 1
SET TRANSACTION ISOLATION LEVEL SERIALIZABLE;
BEGIN TRANSACTION;
    SELECT * FROM Products WHERE Category = 'Electronics';
    -- Range lock on all Electronics
    WAITFOR DELAY '00:01:00';
COMMIT;

-- Session 2, 3, 4 (all blocked)
UPDATE Products SET Price = 100 WHERE Category = 'Electronics';  -- Blocked
INSERT INTO Products (ProductID, ProductName, Category) 
VALUES (9999, 'New Product', 'Electronics');  -- Blocked
DELETE FROM Products WHERE Category = 'Electronics';  -- Blocked

-- Using table hint
SELECT * FROM Orders WITH (SERIALIZABLE)
WHERE OrderDate >= '2024-01-01';

-- When to use SERIALIZABLE
-- Inventory management (exact counts critical)
SET TRANSACTION ISOLATION LEVEL SERIALIZABLE;
BEGIN TRANSACTION;
    DECLARE @AvailableStock INT;
    
    SELECT @AvailableStock = Quantity 
    FROM Inventory 
    WHERE ProductID = 100;
    
    IF @AvailableStock >= 50
    BEGIN
        UPDATE Inventory SET Quantity = Quantity - 50
        WHERE ProductID = 100;
        
        INSERT INTO Orders (ProductID, Quantity)
        VALUES (100, 50);
    END;
COMMIT;
```

---

### Q91: What is Locking?

**Answer:**

Locking is a concurrency control mechanism that prevents multiple transactions from simultaneously modifying the same data, ensuring data integrity and consistency. When a transaction accesses data, it acquires locks that prevent other transactions from making conflicting changes until the lock is released. SQL Server automatically manages locks based on isolation levels and operations - shared locks for reads and exclusive locks for writes. Locks are essential for implementing ACID properties, particularly isolation, but can cause blocking when transactions wait for lock release and deadlocks when transactions circularly wait for each other's locks.

**Lock Types:**
- **Shared (S):** Read locks, multiple allowed
- **Exclusive (X):** Write locks, blocks all others
- **Update (U):** Prevents deadlocks during updates
- **Intent:** Hierarchy locks on higher levels

```sql
-- Automatic locking
BEGIN TRANSACTION;
    SELECT * FROM Employee WHERE EmployeeID = 1;  -- Shared lock
    UPDATE Employee SET Salary = 60000 WHERE EmployeeID = 1;  -- Exclusive lock
COMMIT;  -- Locks released

-- View current locks
SELECT 
    resource_type,
    resource_description,
    request_mode,
    request_status
FROM sys.dm_tran_locks
WHERE request_session_id = @@SPID;

-- Lock hints
SELECT * FROM Employee WITH (ROWLOCK);  -- Row-level lock
SELECT * FROM Employee WITH (TABLOCK);  -- Table-level lock
SELECT * FROM Employee WITH (UPDLOCK);  -- Update lock
SELECT * FROM Employee WITH (XLOCK);    -- Exclusive lock
```

---

### Q92: Types of Locks?

**Answer:**

SQL Server uses several lock types based on the operation and isolation level. Shared (S) locks are acquired for read operations and allow multiple transactions to read simultaneously. Exclusive (X) locks are acquired for write operations and block all other locks. Update (U) locks are acquired when reading data that will be updated, preventing conversion deadlocks. Intent locks (IS, IX, IU) are placed on higher-level objects to indicate locks exist at lower levels. Schema locks (Sch-S, Sch-M) protect table structure during queries or modifications. Bulk Update (BU) locks are used during bulk operations. Locks can be applied at different granularities: row, page, table, or database level.

**Main Lock Types:**

| Lock Type | Description | Compatibility |
|-----------|-------------|---------------|
| Shared (S) | Read lock | Compatible with S and U |
| Exclusive (X) | Write lock | Blocks all others |
| Update (U) | Pre-write lock | Compatible with S only |
| Intent (IS/IX) | Hierarchy indicator | Varies |
| Schema (Sch-S/M) | Structure lock | Sch-S allows S |

```sql
-- Shared lock (SELECT)
SELECT * FROM Employee WITH (HOLDLOCK);

-- Exclusive lock (UPDATE/DELETE/INSERT)
UPDATE Employee SET Salary = 50000 WHERE EmployeeID = 1;

-- Update lock (prevents deadlock)
SELECT * FROM Employee WITH (UPDLOCK) WHERE EmployeeID = 1;
-- Later update won't cause deadlock

-- Intent locks (automatic)
BEGIN TRANSACTION;
    UPDATE Employee SET Salary = 55000 WHERE EmployeeID = 1;
    -- IX (Intent Exclusive) on table
    -- X (Exclusive) on row
COMMIT;

-- View lock details
SELECT 
    request_session_id AS SPID,
    resource_type,
    resource_description,
    request_mode AS LockType,
    request_status AS Status
FROM sys.dm_tran_locks
ORDER BY request_session_id;
```

---

### Q93: What is Deadlock?

**Answer:**

A deadlock occurs when two or more transactions are waiting for each other to release locks, creating a circular dependency where none can proceed. SQL Server automatically detects deadlocks and chooses one transaction as the "deadlock victim" to rollback, allowing others to continue. Deadlocks commonly occur when transactions acquire locks in different orders or hold locks while waiting for user input. Prevention strategies include accessing resources in consistent order, keeping transactions short, using appropriate isolation levels, and implementing retry logic for deadlock victims.

**Deadlock Scenario:**
- Transaction A locks Table 1, waits for Table 2
- Transaction B locks Table 2, waits for Table 1
- Neither can proceed → Deadlock

**Prevention Strategies:**
- Access resources in same order
- Keep transactions short
- Use lower isolation levels when possible
- Implement proper indexing
- Handle deadlock errors with retry logic

```sql
-- Deadlock example
-- Session 1
BEGIN TRANSACTION;
    UPDATE Accounts SET Balance = Balance - 100 WHERE AccountID = 1;  -- Locks Account 1
    WAITFOR DELAY '00:00:05';
    UPDATE Accounts SET Balance = Balance + 100 WHERE AccountID = 2;  -- Waits for Account 2
COMMIT;

-- Session 2 (concurrent)
BEGIN TRANSACTION;
    UPDATE Accounts SET Balance = Balance - 50 WHERE AccountID = 2;  -- Locks Account 2
    WAITFOR DELAY '00:00:05';
    UPDATE Accounts SET Balance = Balance + 50 WHERE AccountID = 1;  -- Waits for Account 1 → DEADLOCK!
COMMIT;

-- Deadlock handling with retry
DECLARE @Retries INT = 3;
WHILE @Retries > 0
BEGIN
    BEGIN TRY
        BEGIN TRANSACTION;
            -- Your transaction logic
            UPDATE Table1 SET Value = 100;
            UPDATE Table2 SET Value = 200;
        COMMIT;
        SET @Retries = 0;  -- Success, exit loop
    END TRY
    BEGIN CATCH
        IF ERROR_NUMBER() = 1205  -- Deadlock error
        BEGIN
            ROLLBACK;
            SET @Retries = @Retries - 1;
            WAITFOR DELAY '00:00:01';  -- Wait before retry
        END
        ELSE
            THROW;  -- Re-raise other errors
    END CATCH;
END;

-- Set deadlock priority
SET DEADLOCK_PRIORITY LOW;  -- More likely to be victim
SET DEADLOCK_PRIORITY HIGH;  -- Less likely to be victim

-- View deadlock information
-- Enable trace flags
DBCC TRACEON (1222, -1);  -- Deadlock info to error log
```

---

### Q94: What is Lock Escalation?

**Answer:**

Lock escalation is SQL Server's automatic process of converting many fine-grained locks (row or page locks) into fewer coarse-grained locks (table locks) to reduce memory overhead and improve performance. Escalation typically occurs when a transaction holds more than 5,000 locks on a single table or when lock memory exceeds a threshold. While this reduces memory consumption, table-level locks can block other transactions and reduce concurrency. You can disable escalation on specific tables using ALTER TABLE, though this may increase memory usage.

**When Escalation Occurs:**
- More than 5,000 locks on single table
- Lock memory threshold exceeded
- System memory pressure

**Impact:**
- Reduces memory overhead
- May increase blocking
- Can reduce concurrency

```sql
-- View lock escalation events
SELECT 
    OBJECT_NAME(object_id) AS TableName,
    lock_escalation_desc
FROM sys.tables;

-- Disable lock escalation
ALTER TABLE Employee
SET (LOCK_ESCALATION = DISABLE);

-- Enable lock escalation (default)
ALTER TABLE Employee
SET (LOCK_ESCALATION = TABLE);

-- Auto escalation
ALTER TABLE Employee
SET (LOCK_ESCALATION = AUTO);

-- Prevent escalation with hints
SELECT * FROM Employee WITH (ROWLOCK)
WHERE Department = 'Sales';

-- Monitor escalations
SELECT 
    database_name,
    object_name,
    escalation_count
FROM sys.dm_db_stats_properties_internal;
```

---

### Q95: What are Dirty Reads, Non-Repeatable Reads, and Phantom Reads?

**Answer:**

These are concurrency phenomena that occur at different isolation levels. Dirty reads happen when a transaction reads uncommitted changes from another transaction that might be rolled back (READ UNCOMMITTED). Non-repeatable reads occur when reading the same row twice returns different values because another transaction modified it between reads (READ COMMITTED). Phantom reads happen when re-executing a query returns different rows because another transaction inserted or deleted matching rows (REPEATABLE READ). Higher isolation levels prevent these issues but reduce concurrency.

**Dirty Read:**
- Reading uncommitted data
- Data might be rolled back
- Prevented by: READ COMMITTED and higher

**Non-Repeatable Read:**
- Same row, different values on re-read
- Another transaction modified it
- Prevented by: REPEATABLE READ and higher

**Phantom Read:**
- Different rows on re-query
- Another transaction inserted/deleted rows
- Prevented by: SERIALIZABLE

```sql
-- DIRTY READ
-- Transaction 1
BEGIN TRANSACTION;
UPDATE Employee SET Salary = 100000 WHERE EmployeeID = 1;
WAITFOR DELAY '00:00:10';
ROLLBACK;  -- Never committed

-- Transaction 2 (READ UNCOMMITTED)
SET TRANSACTION ISOLATION LEVEL READ UNCOMMITTED;
SELECT Salary FROM Employee WHERE EmployeeID = 1;  -- Returns 100000 (dirty!)

--- NON-REPEATABLE READ
-- Transaction 1
SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
BEGIN TRANSACTION;
SELECT Salary FROM Employee WHERE EmployeeID = 1;  -- Returns 50000
WAITFOR DELAY '00:00:05';
SELECT Salary FROM Employee WHERE EmployeeID = 1;  -- Returns 60000 (different!)
COMMIT;

-- Transaction 2 (concurrent)
UPDATE Employee SET Salary = 60000 WHERE EmployeeID = 1;

-- PHANTOM READ
-- Transaction 1
SET TRANSACTION ISOLATION LEVEL REPEATABLE READ;
BEGIN TRANSACTION;
SELECT COUNT(*) FROM Employee WHERE Department = 'Sales';  -- Returns 10
WAITFOR DELAY '00:00:05';
SELECT COUNT(*) FROM Employee WHERE Department = 'Sales';  -- Returns 11 (phantom!)
COMMIT;

-- Transaction 2 (concurrent)
INSERT INTO Employee VALUES (999, 'New', 'Sales', 50000);

-- Prevention summary
SET TRANSACTION ISOLATION LEVEL SERIALIZABLE;  -- Prevents all three
SET TRANSACTION ISOLATION LEVEL REPEATABLE READ;  -- Prevents dirty and non-repeatable
SET TRANSACTION ISOLATION LEVEL READ COMMITTED;  -- Prevents only dirty reads
```


## Section 9: SQL Commands and Clauses

### Q96: Difference between DELETE and TRUNCATE?

**Answer:**

DELETE is a DML command that removes rows one at a time, logs each deletion, can use WHERE clause for selective deletion, triggers fire, and can be rolled back. TRUNCATE is a DDL command that deallocates all data pages, is minimally logged, removes all rows (no WHERE clause), doesn't fire triggers, is faster for large tables, and resets identity columns. DELETE maintains transaction log for rollback while TRUNCATE is more efficient but less flexible.

**Key Differences:**

| Feature | DELETE | TRUNCATE |
|---------|--------|----------|
| Type | DML | DDL |
| WHERE clause | Yes | No (all rows) |
| Speed | Slower | Faster |
| Logging | Fully logged | Minimally logged |
| Triggers | Fire | Don't fire |
| Rollback | Yes | Yes (if in transaction) |
| Identity reset | No | Yes |

```sql
-- DELETE - Selective, logged
DELETE FROM Employee WHERE Department = 'Sales';  -- Conditional
DELETE FROM Employee;  -- All rows, but logged each deletion

-- Can rollback
BEGIN TRANSACTION;
DELETE FROM Employee;
ROLLBACK;  -- Restored

-- TRUNCATE - Faster, all rows
TRUNCATE TABLE Employee;  -- Removes all, no WHERE allowed

-- Resets identity
CREATE TABLE Test (ID INT IDENTITY(1,1), Name VARCHAR(50));
INSERT INTO Test VALUES ('A'), ('B'), ('C');
DELETE FROM Test;
INSERT INTO Test VALUES ('D');  -- ID = 4

TRUNCATE TABLE Test;
INSERT INTO Test VALUES ('E');  -- ID = 1 (reset!)

-- TRUNCATE limitations
-- TRUNCATE TABLE Employee WHERE Department = 'Sales';  -- ERROR: No WHERE
-- Cannot truncate table with FK reference
-- TRUNCATE TABLE Department;  -- ERROR if Employee references it
```

---

### Q97: Difference between DROP and TRUNCATE?

**Answer:**

DROP removes the entire table structure and data permanently from the database, freeing all storage and indexes. TRUNCATE removes only data while preserving the table structure, columns, indexes, and constraints. DROP is irreversible without backup, while TRUNCATE keeps the table definition intact for future use. After DROP, you must recreate the table to use it again. After TRUNCATE, the table is immediately ready for new data with the same structure.

**Key Differences:**

| Feature | DROP | TRUNCATE |
|---------|------|----------|
| Removes | Structure + Data | Data only |
| Table exists after | No | Yes |
| Can rollback | Only in transaction | Yes (if in transaction) |
| Storage | Fully freed | Data pages freed |
| Speed | Fast | Very fast |

```sql
-- DROP - Removes everything
DROP TABLE Employee;  -- Table no longer exists
-- SELECT * FROM Employee;  -- ERROR: Invalid object name

-- Must recreate to use
CREATE TABLE Employee (
    EmployeeID INT PRIMARY KEY,
    Name VARCHAR(100)
);

-- TRUNCATE - Keeps structure
CREATE TABLE Test (ID INT PRIMARY KEY, Name VARCHAR(50));
INSERT INTO Test VALUES (1, 'A'), (2, 'B');
TRUNCATE TABLE Test;  -- Data gone, but table exists
INSERT INTO Test VALUES (3, 'C');  -- Works immediately

-- DROP also removes
DROP TABLE Test;  -- Indexes, constraints, triggers all removed

-- TRUNCATE preserves
CREATE TABLE Orders (
    OrderID INT PRIMARY KEY,
    Amount DECIMAL(10,2),
    OrderDate DATE DEFAULT GETDATE()
);
CREATE INDEX IX_Orders_Date ON Orders(OrderDate);
TRUNCATE TABLE Orders;  -- Index still exists
```

---

### Q98: Difference between WHERE and HAVING?

**Answer:**

WHERE filters rows before grouping and aggregation, works with individual rows, cannot use aggregate functions, and is processed early in query execution. HAVING filters groups after GROUP BY and aggregation, works with grouped results, can use aggregate functions like COUNT, SUM, AVG, and is processed after grouping. Use WHERE for row-level filtering and HAVING for group-level filtering.

**Key Differences:**

| Feature | WHERE | HAVING |
|---------|-------|--------|
| Filters | Rows (before grouping) | Groups (after grouping) |
| Aggregates | Not allowed | Allowed |
| Used with | Any query | GROUP BY queries |
| Processing | Before grouping | After grouping |
| Performance | Generally faster | After aggregation |

```sql
-- WHERE - Row filtering
SELECT * FROM Employee
WHERE Salary > 50000;  -- Filters individual rows

-- HAVING - Group filtering
SELECT Department, AVG(Salary) AS AvgSalary
FROM Employee
GROUP BY Department
HAVING AVG(Salary) > 50000;  -- Filters groups

-- Cannot use aggregate in WHERE
-- SELECT Department FROM Employee WHERE AVG(Salary) > 50000;  -- ERROR

-- Using both
SELECT 
    Department,
    COUNT(*) AS EmployeeCount,
    AVG(Salary) AS AvgSalary
FROM Employee
WHERE IsActive = 1  -- Filter rows FIRST
GROUP BY Department
HAVING COUNT(*) > 5;  -- Filter groups AFTER

-- Execution order
SELECT Department, AVG(Salary)
FROM Employee
WHERE Salary > 30000  -- 1. Filter rows
GROUP BY Department    -- 2. Group
HAVING AVG(Salary) > 50000  -- 3. Filter groups
ORDER BY AVG(Salary);  -- 4. Sort

-- Performance tip: Use WHERE when possible
-- Good: Filter before grouping
SELECT Department, COUNT(*)
FROM Employee
WHERE HireDate > '2020-01-01'
GROUP BY Department;

-- Less efficient: Filter after grouping
SELECT Department,COUNT(*)
FROM Employee
GROUP BY Department, HireDate
HAVING HireDate > '2020-01-01';
```

---

### Q99: What is GROUP BY clause?

**Answer:**

GROUP BY groups rows with the same values in specified columns into summary rows, typically used with aggregate functions like COUNT, SUM, AVG, MAX, MIN. It collapses multiple rows into single summary rows per group. All non-aggregated columns in SELECT must appear in GROUP BY. Multiple columns create nested groups. Use HAVING to filter grouped results.

```sql
-- Basic GROUP BY
SELECT Department, COUNT(*) AS EmployeeCount
FROM Employee
GROUP BY Department;

-- Multiple columns
SELECT Department, City, AVG(Salary) AS AvgSalary
FROM Employee
GROUP BY Department, City;

-- With aggregate functions
SELECT 
    Department,
    COUNT(*) AS Total,
    AVG(Salary) AS AvgSalary,
    MAX(Salary) AS MaxSalary,
    MIN(Salary) AS MinSalary
FROM Employee
GROUP BY Department
HAVING COUNT(*) > 5;

-- Common error
-- SELECT Department, EmployeeName, COUNT(*)  -- ERROR: EmployeeName not in GROUP BY
-- FROM Employee GROUP BY Department;
```

---

### Q100: What is ORDER BY clause?

**Answer:**

ORDER BY sorts the result set by one or more columns in ascending (ASC, default) or descending (DESC) order. It's always the last clause executed in a query. Can sort by column names, aliases, or column positions. Supports multiple sort columns with different directions. NULL values appear first in ASC, last in DESC.

```sql
-- Single column ascending
SELECT * FROM Employee ORDER BY Salary;  -- ASC is default

-- Descending
SELECT * FROM Employee ORDER BY Salary DESC;

-- Multiple columns
SELECT * FROM Employee 
ORDER BY Department ASC, Salary DESC;

-- By alias
SELECT EmployeeName, Salary * 12 AS AnnualSalary
FROM Employee
ORDER BY AnnualSalary DESC;

-- By column position
SELECT Department, AVG(Salary) AS AvgSalary
FROM Employee
GROUP BY Department
ORDER BY 2 DESC;  -- Order by 2nd column (AvgSalary)
```

---

### Q101: Difference between UNION and UNION ALL?

**Answer:**

UNION combines result sets from multiple SELECT statements and removes duplicate rows, while UNION ALL returns all rows including duplicates. UNION is slower due to duplicate elimination requiring sorting and comparison. UNION ALL is faster and useful when you know there are no duplicates or duplicates are acceptable. Both require same number of columns with compatible data types.

**Differences:**

| Feature | UNION | UNION ALL |
|---------|-------|-----------|
| Duplicates | Removed | Kept |
| Speed | Slower | Faster |
| Sorting | Yes (for dedup) | No |
| Use when | No duplicates wanted | All rows needed |

```sql
-- UNION - Removes duplicates
SELECT City FROM Customers
UNION
SELECT City FROM Suppliers;
-- If 'New York' in both, appears once

-- UNION ALL - Keeps duplicates
SELECT City FROM Customers
UNION ALL
SELECT City FROM Suppliers;
-- If 'New York' in both, appears twice

-- Performance comparison
-- UNION
SELECT ProductID FROM Orders WHERE OrderDate = '2024-01-01'
UNION
SELECT ProductID FROM Orders WHERE OrderDate = '2024-01-02';
-- Slower due to duplicate removal

-- UNION ALL (when duplicates OK)
SELECT ProductID FROM Orders WHERE OrderDate = '2024-01-01'
UNION ALL
SELECT ProductID FROM Orders WHERE OrderDate = '2024-01-02';
-- Faster, no deduplication
```

---

### Q102: What is INTERSECT?

**Answer:**

INTERSECT returns only rows that appear in both result sets, finding the common records. It automatically removes duplicates like UNION. Requires same number of columns with compatible types. Useful for finding matching data across tables or queries.

```sql
-- Find customers who are also suppliers
SELECT City FROM Customers
INTERSECT
SELECT City FROM Suppliers;
-- Returns only cities present in BOTH tables

-- Find products ordered in both months
SELECT ProductID FROM Orders WHERE MONTH(OrderDate) = 1
INTERSECT
SELECT ProductID FROM Orders WHERE MONTH(OrderDate) = 2;

-- Equivalent using JOIN (alternative)
SELECT DISTINCT c.City
FROM Customers c
INNER JOIN Suppliers s ON c.City = s.City;
```

---

### Q103: What is EXCEPT/MINUS?

**Answer:**

EXCEPT (MINUS in Oracle) returns rows from the first query that don't appear in the second query, finding the difference between result sets. Automatically removes duplicates. Useful for finding missing records or identifying data in one set but not another.

```sql
-- EXCEPT - Find customers without orders
SELECT CustomerID FROM Customers
EXCEPT
SELECT CustomerID FROM Orders;
-- Returns customers who never ordered

-- Find products not sold this year
SELECT ProductID FROM Products
EXCEPT
SELECT DISTINCT ProductID FROM Orders WHERE YEAR(OrderDate) = 2024;

-- Equivalent using NOT EXISTS
SELECT CustomerID FROM Customers c
WHERE NOT EXISTS (SELECT 1 FROM Orders o WHERE o.CustomerID = c.CustomerID);

-- Order matters
SELECT City FROM Customers
EXCEPT
SELECT City FROM Suppliers;
-- Different from:
SELECT City FROM Suppliers
EXCEPT
SELECT City FROM Customers;
```

---

### Q104: What is the CASE statement?

**Answer:**

CASE is a conditional expression that returns different values based on conditions, similar to if-else logic. Two forms: simple CASE compares an expression to values, searched CASE evaluates boolean conditions. Widely used for conditional columns, data transformations, and dynamic sorting.

```sql
-- Simple CASE
SELECT 
    EmployeeName,
    Department,
    CASE Department
        WHEN 'Sales' THEN 'Revenue Generator'
        WHEN 'IT' THEN 'Tech Support'
        WHEN 'HR' THEN 'People Management'
        ELSE 'Other'
    END AS DepartmentType
FROM Employee;

-- Searched CASE (more flexible)
SELECT 
    Employ eeName,
    Salary,
    CASE 
        WHEN Salary < 30000 THEN 'Low'
        WHEN Salary BETWEEN 30000 AND 70000 THEN 'Medium'
        WHEN Salary > 70000 THEN 'High'
        ELSE 'Unknown'
    END AS SalaryBand
FROM Employee;

-- In UPDATE
UPDATE Employee
SET Bonus = CASE
    WHEN Salary < 50000 THEN Salary * 0.10
    WHEN Salary < 100000 THEN Salary * 0.15
    ELSE Salary * 0.20
END;

-- In ORDER BY
SELECT * FROM Employee
ORDER BY 
    CASE 
        WHEN Department = 'Executive' THEN 1
        WHEN Department = 'Management' THEN 2
        ELSE 3
    END;
```

---

### Q105: What is COALESCE function?

**Answer:**

COALESCE returns the first non-NULL value from a list of arguments. Takes unlimited parameters and evaluates left to right, returning the first non-NULL. Useful for handling NULL values, providing defaults, and combining multiple nullable columns.

```sql
-- Basic usage
SELECT COALESCE(NULL, NULL, 'First non-NULL', 'Second') AS Result;
-- Returns: 'First non-NULL'

-- Handling NULL in columns
SELECT 
    EmployeeName,
    COALESCE(Phone, Mobile, 'No contact') AS ContactNumber
FROM Employee;

-- Default values
SELECT 
    ProductName,
    COALESCE(DiscountPrice, RegularPrice) AS FinalPrice
FROM Products;

-- Multiple columns
SELECT 
    COALESCE(MiddleName, FirstName, 'Unknown') AS DisplayName
FROM Customers;

-- In calculations
SELECT 
    Quantity * COALESCE(DiscountedPrice, StandardPrice, 0) AS Total
FROM OrderDetails;

-- Difference from ISNULL
SELECT COALESCE(NULL, NULL, 'Value');  -- Works with multiple args
SELECT ISNULL(Column1, 'Default');  -- Only 2 args
```

---

### Q106: What is NULLIF function?

**Answer:**

NULLIF compares two expressions and returns NULL if they're equal, otherwise returns the first expression. Useful for converting specific values to NULL, avoiding division by zero, and data cleansing.

```sql
-- Basic usage
SELECT NULLIF(10, 10);  -- Returns NULL (equal)
SELECT NULLIF(10, 20);  -- Returns 10 (not equal)

-- Avoid division by zero
SELECT 
    TotalSales,
    TotalOrders,
    TotalSales / NULLIF(TotalOrders, 0) AS AvgOrderValue
FROM SalesSummary;
-- If TotalOrders = 0, returns NULL instead of error

-- Convert blanks to NULL
SELECT 
    EmployeeName,
    NULLIF(MiddleName, '') AS MiddleName
FROM Employee;

-- Data cleansing
UPDATE Products
SET Discount = NULLIF(Discount, 0);
-- Converts 0 to NULL

-- Combine with COALESCE
SELECT 
    COALESCE(NULLIF(DiscountPrice, 0), RegularPrice) AS FinalPrice
FROM Products;
```

---

### Q107: What are Wildcard operators?

**Answer:**

Wildcards are special characters used with LIKE operator for pattern matching: % (zero or more characters), _ (exactly one character), [] (any single character in range), [^] (not in range). Enable flexible text searches without knowing exact values.

```sql
-- % - Zero or more characters
SELECT * FROM Employee WHERE EmployeeName LIKE 'John%';  -- Starts with John
SELECT * FROM Employee WHERE EmployeeName LIKE '%Smith';  -- Ends with Smith
SELECT * FROM Employee WHERE EmployeeName LIKE '%son%';  -- Contains son

-- _ - Exactly one character
SELECT * FROM Employee WHERE EmployeeName LIKE 'J_hn';  -- John, Jahn
SELECT * FROM Products WHERE ProductCode LIKE 'A-___';  -- A-followed by 3 chars

-- [] - Character range
SELECT * FROM Employee WHERE EmployeeName LIKE '[JMS]%';  -- Starts with J, M, or S
SELECT * FROM Products WHERE ProductCode LIKE '[A-C]%';  -- Starts with A, B, or C

-- [^] - NOT in range
SELECT * FROM Employee WHERE EmployeeName LIKE '[^JMS]%';  -- NOT J, M, S
SELECT * FROM Products WHERE Code LIKE '[^0-9]%';  -- Doesn't start with digit

-- Escape special characters
SELECT * FROM Products WHERE Description LIKE '%20[%]%';  -- Contains 20%
```

---

### Q108: What is LIKE operator?

**Answer:**

LIKE performs pattern matching on string data using wildcards. Case-sensitive in some databases, case-insensitive in SQL Server by default. Can use NOT LIKE for opposite matching. Often used with wildcards but can match exact strings.

```sql
-- Basic pattern matching
SELECT * FROM Employee WHERE EmployeeName LIKE 'John%';  -- Starts with John

-- Multiple patterns
SELECT * FROM Products 
WHERE ProductName LIKE '%Phone%' 
   OR ProductName LIKE '%Tablet%';

-- NOT LIKE
SELECT * FROM Employee WHERE Email NOT LIKE '%@company.com';

-- Exact match (useful in some scenarios)
SELECT * FROM Employee WHERE Department LIKE 'Sales';  -- Same as = 'Sales'

-- Complex patterns
SELECT * FROM Employee 
WHERE EmployeeName LIKE '[A-M]%'  -- First letter A-M
  AND EmployeeName LIKE '%son';   -- Ends with son

-- Performance note
-- Avoid leading wildcard (slow)
SELECT * FROM Employee WHERE Name LIKE '%Smith';  -- Table scan

-- Preferred (can use index)
SELECT * FROM Employee WHERE Name LIKE 'Smith%';  -- Index seek
```

---

### Q109: What is IN operator?

**Answer:**

IN checks if a value matches any value in a list or subquery, simplifying multiple OR conditions. More readable than repeated OR statements. Can use with subqueries to check against dynamic value sets. NOT IN checks for values not in the list.

```sql
-- IN with value list
SELECT * FROM Employee 
WHERE Department IN ('Sales', 'Marketing', 'IT');
-- Equivalent to: Department = 'Sales' OR Department = 'Marketing' OR Department = 'IT'

-- IN with subquery
SELECT * FROM Products
WHERE CategoryID IN (SELECT CategoryID FROM Categories WHERE IsActive = 1);

-- NOT IN
SELECT * FROM Customers
WHERE CustomerID NOT IN (SELECT CustomerID FROM Orders);

-- vs OR (less readable)
SELECT * FROM Employee 
WHERE Department = 'Sales' 
   OR Department = 'Marketing' 
   OR Department = 'IT';

-- NULL handling (important!)
SELECT * FROM Employee WHERE ManagerID IN (1, 2, NULL);  -- Works
SELECT * FROM Employee WHERE ManagerID NOT IN (1, 2, NULL);  -- Returns nothing if NULL exists!

-- Better with NOT IN and NULL
SELECT * FROM Employee 
WHERE ManagerID NOT IN (SELECT ManagerID FROM Employee WHERE ManagerID IS NOT NULL);
```

---

### Q110: What is BETWEEN operator?

**Answer:**

BETWEEN checks if a value is within a range (inclusive of endpoints). Simplifies range comparisons. Works with numbers, dates, and strings. More readable than >= AND <=. NOT BETWEEN checks values outside the range.

```sql
-- Numeric range
SELECT * FROM Employee WHERE Salary BETWEEN 50000 AND 100000;
-- Equivalent to: Salary >= 50000 AND Salary <= 100000

-- Date range
SELECT * FROM Orders 
WHERE OrderDate BETWEEN '2024-01-01' AND '2024-12-31';

-- NOT BETWEEN
SELECT * FROM Products 
WHERE Price NOT BETWEEN 100 AND 500;

-- String range (alphabetical)
SELECT * FROM Employee WHERE EmployeeName BETWEEN 'A' AND 'M';

-- BETWEEN is inclusive
SELECT * FROM Products WHERE Price BETWEEN 100 AND 200;
-- Includes 100 and 200

-- Date range best practice
SELECT * FROM Orders
WHERE OrderDate >= '2024-01-01' AND OrderDate < '2025-01-01';
-- Better than BETWEEN for dates (avoids time component issues)
```

---

### Q111: What is EXISTS operator?

**Answer:**

EXISTS tests whether a subquery returns any rows, returning TRUE if at least one row exists, FALSE otherwise. More efficient than IN for large datasets as it stops at first match. Returns boolean result, doesn't return actual data from subquery. Commonly used with correlated subqueries.

```sql
-- Find customers with orders
SELECT * FROM Customers c
WHERE EXISTS (
    SELECT 1 FROM Orders o 
    WHERE o.CustomerID = c.CustomerID
);

-- NOT EXISTS - Customers without orders
SELECT * FROM Customers c
WHERE NOT EXISTS (
    SELECT 1 FROM Orders o 
    WHERE o.CustomerID = c.CustomerID
);

-- vs IN (EXISTS often faster for large datasets)
-- EXISTS - Stops at first match
SELECT * FROM Customers c
WHERE EXISTS (SELECT 1 FROM Orders WHERE CustomerID = c.CustomerID);

-- IN - Returns all matching values
SELECT * FROM Customers
WHERE CustomerID IN (SELECT CustomerID FROM Orders);

-- Complex conditions
SELECT * FROM Employees e
WHERE EXISTS (
    SELECT 1 FROM Departments d
    WHERE d.DepartmentID = e.DepartmentID
      AND d.Budget > 1000000
);

-- SELECT 1 vs SELECT * in EXISTS
-- Both work the same, SELECT 1 is convention (clearer intent)
WHERE EXISTS (SELECT 1 FROM...)  -- Preferred
WHERE EXISTS (SELECT * FROM...)  -- Works but less clear
```

---

### Q112: What is ALL operator?

**Answer:**

ALL compares a value to all values in a set, returning TRUE only if the comparison is true for every value. Used with comparison operators (>, <, =, etc.) and subqueries. Returns FALSE if any comparison fails.

```sql
-- Greater than ALL (maximum)
SELECT * FROM Products
WHERE Price > ALL (SELECT Price FROM Products WHERE Category = 'Budget');
-- Price higher than ALL budget products

-- Equivalent to MAX
SELECT * FROM Products
WHERE Price > (SELECT MAX(Price) FROM Products WHERE Category = 'Budget');

-- Less than ALL (minimum)
SELECT * FROM Employee
WHERE Salary < ALL (SELECT Salary FROM Employee WHERE Department = 'Executive');

-- Equal to ALL (all values same)
SELECT * FROM Orders
WHERE Quantity = ALL (SELECT 10);  -- All quantities = 10

-- With NOT
SELECT * FROM Products
WHERE NOT Price > ALL (SELECT Price FROM Products WHERE Category = 'Premium');

-- Practical example
SELECT EmployeeName, Salary
FROM Employee E1
WHERE Salary >= ALL (
    SELECT Salary FROM Employee E2 
    WHERE E2.Department = E1.Department
);  -- Highest paid in each department
```

---

### Q113: What is ANY operator?

**Answer:**

ANY (or SOME, which is identical) compares a value to any value in a set, returning TRUE if the comparison is true for at least one value. Used with comparison operators and subqueries. More lenient than ALL - only needs one match.

```sql
-- Greater than ANY (at least one)
SELECT * FROM Products
WHERE Price > ANY (SELECT Price FROM Products WHERE Category = 'Budget');
-- Price higher than at least one budget product

-- Equivalent to MIN with >
SELECT * FROM Products
WHERE Price > (SELECT MIN(Price) FROM Products WHERE Category = 'Budget');

-- = ANY is same as IN
SELECT * FROM Employee
WHERE Department = ANY ('Sales', 'IT', 'HR');
-- Same as: Department IN ('Sales', 'IT', 'HR')

-- < ANY
SELECT * FROM Employee
WHERE Salary < ANY (SELECT Salary FROM Employee WHERE Department = 'Executive');
-- Salary less than at least one executive

-- SOME (identical to ANY)
SELECT * FROM Products
WHERE Price > SOME (SELECT Price FROM Products WHERE Category = 'Budget');

// Practical example
SELECT ProductName, Price
FROM Products P1
WHERE Price < ANY (
    SELECT Price FROM Products P2
    WHERE P2.Category = P1.Category AND P2.ProductID != P1.ProductID
);  -- Not the most expensive in category
```

---

### Q114: What is DISTINCT keyword?

**Answer:**

DISTINCT removes duplicate rows from result set, returning only unique combinations. Applied to all selected columns. Causes performance overhead due to sorting/hashing for comparison. Can be used with aggregate functions like COUNT DISTINCT.

```sql
-- Remove duplicate rows
SELECT DISTINCT Department FROM Employee;
-- Returns unique departments only

-- Multiple columns (unique combinations)
SELECT DISTINCT Department, City FROM Employee;
-- Returns unique Department-City pairs

-- COUNT DISTINCT
SELECT COUNT(DISTINCT Department) AS UniqueDepartments FROM Employee;

-- vs ALL  (default)
SELECT ALL Department FROM Employee;  -- Includes duplicates (default behavior)
SELECT Department FROM Employee;  -- Same as ALL

-- With aggregate
SELECT Department, COUNT(DISTINCT City) AS UniqueCities
FROM Employee
GROUP BY Department;

-- Performance consideration
-- DISTINCT can be expensive
SELECT DISTINCT * FROM LargeTable;  -- Slow on large tables

-- Alternative: GROUP BY (sometimes faster)
SELECT Department FROM Employee GROUP BY Department;  -- Same result, may be faster
```

---

### Q115: What is TOP/LIMIT clause?

**Answer:**

TOP (SQL Server) or LIMIT (MySQL/PostgreSQL) retrieves a specified number of rows from the beginning of result set. Often used with ORDER BY to get top N records. TOP supports PERCENT and WITH TIES options. Essential for pagination and finding top/bottom records.

```sql
-- SQL Server - TOP
SELECT TOP 10 * FROM Employee ORDER BY Salary DESC;  -- Top 10 salaries

-- TOP with PERCENT
SELECT TOP 10 PERCENT * FROM Employee ORDER BY Salary DESC;  -- Top 10%

-- TOP WITH TIES (includes ties)
SELECT TOP 3 WITH TIES * FROM Employee ORDER BY Salary DESC;
-- If 4th row has same salary as 3rd, includes it too

-- MySQL/PostgreSQL - LIMIT
SELECT * FROM Employee ORDER BY Salary DESC LIMIT 10;

-- LIMIT with OFFSET (pagination)
SELECT * FROM Employee ORDER BY EmployeeID LIMIT 10 OFFSET 20;  -- Rows 21-30

-- SQL Server pagination (OFFSET FETCH)
SELECT * FROM Employee
ORDER BY EmployeeID
OFFSET 20 ROWS FETCH NEXT 10 ROWS ONLY;  -- Rows 21-30

-- Find bottom N
SELECT TOP 5 * FROM Employee ORDER BY Salary ASC;  -- 5 lowest salaries

-- Random rows
SELECT TOP 10 * FROM Employee ORDER BY NEWID();  -- 10 random rows
```

## Section 10: Data Types and Functions

### Q116: What are SQL Data Types?

**Answer:**

SQL data types define what kind of data can be stored in a column, determining storage size, format, and allowed operations. SQL Server supports several categories of data types. Numeric types include INT for whole numbers, DECIMAL/NUMERIC for exact decimal values, FLOAT/REAL for approximate decimal values. String types include VARCHAR for variable-length character data, CHAR for fixed-length, NVARCHAR for Unicode variable-length, and NCHAR for Unicode fixed-length. Date and time types include DATE for dates only, DATETIME and DATETIME2 for date and time combinations, and TIME for time only. Binary types include VARBINARY for variable-length binary data and BINARY for fixed-length. Special types include BIT for boolean values, UNIQUEIDENTIFIER for GUIDs, XML for XML data, and spatial types for geographic data.

**Categories:**
- **Numeric:** INT, BIGINT, SMALLINT, TINYINT, DECIMAL, NUMERIC, FLOAT, REAL
- **String:** VARCHAR, CHAR, NVARCHAR, NCHAR, TEXT
- **Date/Time:** DATE, TIME, DATETIME, DATETIME2, DATETIMEOFFSET
- **Binary:** VARBINARY, BINARY, IMAGE
- **Special:** BIT, UNIQUEIDENTIFIER, XML, JSON, GEOGRAPHY

```sql
-- Numeric data types
CREATE TABLE NumericDemo (
    IntValue INT,                    -- 4 bytes, -2B to 2B
    BigIntValue BIGINT,              -- 8 bytes
    DecimalValue DECIMAL(10,2),      -- Exact precision
    FloatValue FLOAT                 -- Approximate
);

-- String data types
CREATE TABLE StringDemo (
    FixedChar CHAR(10),              -- Always 10 bytes (padded)
    VarChar VARCHAR(100),            -- Variable up to 100
    UnicodeVar NVARCHAR(100),        -- Unicode, 2 bytes per char
    LargeText VARCHAR(MAX)           -- Up to 2GB
);

-- Date/Time data types
CREATE TABLE DateDemo (
    DateOnly DATE,                   -- YYYY-MM-DD
    TimeOnly TIME,                   -- HH:MM:SS
    DateTime DATETIME,               -- 3.33ms precision
    DateTime2 DATETIME2,             -- 100ns precision, preferred
    DateWithZone DATETIMEOFFSET      -- Includes timezone
);

-- Special data types
CREATE TABLE SpecialDemo (
    IsActive BIT,                    -- 0 or 1
    UniqueID UNIQUEIDENTIFIER,       -- GUID
    XmlData XML,                     -- XML content
    JsonData NVARCHAR(MAX)           -- JSON (stored as text)
);

-- Choosing appropriate types
CREATE TABLE Employee (
    EmployeeID INT PRIMARY KEY,
    EmployeeName NVARCHAR(100),      -- Unicode for international names
    Salary DECIMAL(10,2),            -- Exact for money
    HireDate DATE,                   -- Date sufficient, no time needed
    IsActive BIT DEFAULT 1
);
```

---

### Q117: Difference between CHAR and VARCHAR?

**Answer:**

CHAR is a fixed-length character datatype that always uses the defined amount of storage regardless of actual string length, padding shorter strings with spaces. VARCHAR is a variable-length datatype that only uses storage for actual characters plus 2 bytes for length information. CHAR is faster for fixed-length data like country codes or status flags because it doesn't need to calculate length. VARCHAR saves space for varying-length data like names or addresses. CHAR performs better for frequent updates to fixed-length fields. VARCHAR is better when data length varies significantly.

**Key Differences:**

| Feature | CHAR | VARCHAR |
|---------|------|---------|
| Length | Fixed | Variable |
| Storage | Always uses defined size | Actual length + 2 bytes |
| Padding | Pads with spaces | No padding |
| Performance | Faster (fixed) | Slightly slower |
| Use case | Fixed-length data | Variable-length data |

```sql
-- CHAR - Fixed length
CREATE TABLE CharDemo (
    CountryCode CHAR(2),        -- Always 2 characters
    Status CHAR(1)              -- Always 1 character
);

INSERT INTO CharDemo VALUES ('US', 'A');
INSERT INTO CharDemo VALUES ('UK', 'I');  -- Always uses 2 bytes for CountryCode

-- Storage: Each row uses exactly 3 bytes (2 + 1)

-- VARCHAR - Variable length
CREATE TABLE VarCharDemo (
    EmployeeName VARCHAR(100),  -- Up to 100 characters
    City VARCHAR(50)
);

INSERT INTO VarCharDemo VALUES ('John', 'NYC');
-- Storage: Name=4 chars+2, City=3 chars+2 = 11 bytes total

INSERT INTO VarCharDemo VALUES ('Alexander', 'Los Angeles');
-- Storage: Name=9 chars+2, City=11 chars+2 = 24 bytes total

-- Comparison
CREATE TABLE Compare (
    FixedCode CHAR(5),
    VarCode VARCHAR(5)
);

INSERT INTO Compare VALUES ('AB', 'AB');
-- FixedCode stores: 'AB   ' (5 bytes)
-- VarCode stores: 'AB' (4 bytes: 2 for data + 2 for length)

-- Performance example
-- CHAR better for:
CREATE TABLE Status (
    StatusCode CHAR(1),      -- Always 'A', 'I', or 'D'
    Category CHAR(3)         -- Always 3-letter codes
);

-- VARCHAR better for:
CREATE TABLE Person (
    FirstName VARCHAR(50),   -- Varies from 2-50 characters
    Address VARCHAR(200)     -- Highly variable length
);
```

---

### Q118: What is NVARCHAR?

**Answer:**

NVARCHAR is a Unicode variable-length character datatype that stores international characters using 2 bytes per character, supporting languages with non-Latin alphabets like Chinese, Arabic, or Russian. The 'N' prefix stands for National and indicates Unicode support. NVARCHAR can store up to 4000 characters (or MAX for up to 2GB). Use NVARCHAR when you need to store multilingual data, special characters, or emojis. It uses more storage than VARCHAR (2 bytes vs 1 byte per character) but provides full international character support.

**Characteristics:**
- Unicode character support
- 2 bytes per character
- Supports all languages
- Maximum 4000 characters or MAX
- Prefix string literals with N: N'text'

**When to Use:**
- International applications
- Multilingual data
- Special characters/emojis
- Future-proofing for global expansion

```sql
-- NVARCHAR for international characters
CREATE TABLE InternationalData (
    ProductName NVARCHAR(100),
    Description NVARCHAR(MAX)
);

-- Storing international characters
INSERT INTO InternationalData VALUES 
    (N'产品名称', N'Chinese product description'),  -- Chinese
    (N'مُنتَج', N'Arabic product description'),      -- Arabic
    (N'Продукт', N'Russian product description'),    -- Russian
    (N'製品', N'Japanese product description');      -- Japanese

-- Without N prefix (wrong)
INSERT INTO InternationalData VALUES 
    ('产品名称', 'Will show as ???');  -- Loses characters

-- With N prefix (correct)
INSERT INTO InternationalData VALUES 
    (N'产品名称', N'Preserves characters');  -- Correctly stored

-- Storage comparison
CREATE TABLE StorageDemo (
    EnglishVar VARCHAR(10),      -- 'Hello' = 7 bytes (5 + 2)
    UnicodeVar NVARCHAR(10)      -- N'Hello' = 12 bytes (10 + 2)
);

-- Practical example
CREATE TABLE Customer (
    CustomerID INT PRIMARY KEY,
    FirstName NVARCHAR(50),      -- Supports Владимир, 王明, etc.
    LastName NVARCHAR(50),
    Email VARCHAR(100),          -- Email doesn't need Unicode
    Phone VARCHAR(20),           -- Phone doesn't need Unicode
    Address NVARCHAR(200),       -- Address may have Unicode chars
    Comments NVARCHAR(MAX)       -- Large Unicode text
);

-- Query with Unicode
SELECT * FROM Customer
WHERE FirstName = N'Владимир';  -- Must use N prefix in query too
```

---

### Q119: Difference between VARCHAR and NVARCHAR?

**Answer:**

VARCHAR stores single-byte character data (ASCII/ANSI) using 1 byte per character, while NVARCHAR stores double-byte Unicode data using 2 bytes per character. VARCHAR is sufficient for English and Western European languages. NVARCHAR is required for international characters, Asian languages, Arabic, Cyrillic, and special symbols. VARCHAR uses less storage and can be faster. NVARCHAR provides universal language support but uses twice the storage. Choose VARCHAR for English-only applications and NVARCHAR for multilingual applications.

**Comparison:**

| Feature | VARCHAR | NVARCHAR |
|---------|---------|----------|
| Character set | ASCII/ANSI | Unicode |
| Bytes per char | 1 byte | 2 bytes |
| Max length | 8000 characters | 4000 characters |
| Languages | English, Western | All languages |
| Storage | Less | More (2x) |
| Performance | Slightly faster | Slightly slower |

```sql
-- VARCHAR - English/ASCII only
CREATE TABLE EnglishData (
    Name VARCHAR(100),           -- 1 byte per character
    Description VARCHAR(MAX)
);

INSERT INTO EnglishData VALUES ('John Smith', 'Standard English text');
-- Storage: ~10 bytes for name, ~22 bytes for description

-- NVARCHAR - International
CREATE TABLE IntlData (
    Name NVARCHAR(100),          -- 2 bytes per character
    Description NVARCHAR(MAX)
);

INSERT INTO IntlData VALUES (N'José García', N'Español description');
INSERT INTO IntlData VALUES (N'李明', N'中文描述');  -- Chinese
-- Storage: Double the ASCII equivalent

-- ASCII characters in NVARCHAR (wasteful)
CREATE TABLE WasteStorage (
    Email NVARCHAR(100)          -- Email rarely needs Unicode
);
INSERT INTO WasteStorage VALUES (N'john@email.com');
-- Wastes space: 'john@email.com' = 30 bytes instead of 15

-- Better approach
CREATE TABLE MixedStorage (
    Name NVARCHAR(100),          -- May have Unicode
    Email VARCHAR(100),          -- ASCII sufficient
    Phone VARCHAR(20),           -- ASCII sufficient
    Address NVARCHAR(200)        -- May have Unicode
);

-- Conversion caution
DECLARE @Eng VARCHAR(50) = 'Hello';
DECLARE @Unicode NVARCHAR(50) = N'مرحبا';

-- This loses data
SET @Eng = @Unicode;  -- Arabic becomes ????

-- This works
SET @Unicode = @Eng;  -- ASCII to Unicode is safe

-- Performance consideration
-- For English-only database
SELECT * FROM Employee WHERE Name = 'John';  -- VARCHAR faster

-- For international database
SELECT * FROM Employee WHERE Name = N'José';  -- NVARCHAR necessary
```

---

### Q120: What are Date and Time Data Types?

**Answer:**

SQL Server provides several date and time datatypes for different precision and range needs. DATE stores only the date (YYYY-MM-DD) from 0001-01-01 to 9999-12-31 in 3 bytes. TIME stores only time (HH:MM:SS.nnnnnnn) with 100 nanosecond precision in 3-5 bytes. DATETIME stores both date and time with 3.33 millisecond precision in 8 bytes, range 1753-9999. DATETIME2 is the recommended type with 100 nanosecond precision and larger range (0001-9999) in 6-8 bytes. SMALLDATETIME has minute precision in 4 bytes, range 1900-2079. DATETIMEOFFSET includes timezone offset in 10 bytes.

**Data Types:**
- **DATE:** Date only, 3 bytes
- **TIME:** Time only, 3-5 bytes, 100ns precision
- **DATETIME:** Legacy, 8 bytes, 3.33ms precision
- **DATETIME2:** Recommended, 6-8 bytes, 100ns precision
- **SMALLDATETIME:** Minute precision, 4 bytes
- **DATETIMEOFFSET:** With timezone, 10 bytes

```sql
-- Date and Time data types
CREATE TABLE DateTimeDemo (
    DateOnly DATE,                       -- 2024-12-27
    TimeOnly TIME,                       -- 14:30:45.1234567
    OldDateTime DATETIME,                -- 2024-12-27 14:30:45.123
    NewDateTime DATETIME2,               -- 2024-12-27 14:30:45.1234567
    SmallDT SMALLDATETIME,              -- 2024-12-27 14:31 (rounded)
    DTOffset DATETIMEOFFSET             -- 2024-12-27 14:30:45.12 +05:30
);

-- Inserting date/time values
INSERT INTO DateTimeDemo VALUES (
    '2024-12-27',                        -- DATE
    '14:30:45.1234567',                  -- TIME
    '2024-12-27 14:30:45.123',          -- DATETIME
    '2024-12-27 14:30:45.1234567',      -- DATETIME2
    '2024-12-27 14:30:45',              -- SMALLDATETIME
    '2024-12-27 14:30:45.12 +05:30'     -- DATETIMEOFFSET
);

-- Current date/time functions
SELECT 
    GETDATE() AS CurrentDateTime,        -- Returns DATETIME
    SYSDATETIME() AS CurrentDateTime2,    -- Returns DATETIME2
    GETUTCDATE() AS UTCDateTime,         -- Returns DATETIME in UTC
    SYSUTCDATETIME() AS UTCDT2,          -- Returns DATETIME2 in UTC
    SYSDATETIMEOFFSET() AS DTOffset,     -- Returns DATETIMEOFFSET
    CURRENT_TIMESTAMP AS Timestamp;       -- Same as GETDATE()

-- Precision comparison
DECLARE @DT DATETIME = '2024-12-27 14:30:45.1237';
DECLARE @DT2 DATETIME2 = '2024-12-27 14:30:45.1237';

SELECT @DT AS DateTime;      -- 2024-12-27 14:30:45.123 (rounded to 3.33ms)
SELECT @DT2 AS DateTime2;    -- 2024-12-27 14:30:45.1237000 (exact)

// Practical usage
CREATE TABLE EventLog (
    EventID INT PRIMARY KEY,
    EventDate DATE,                      -- When (date only)
    EventTime TIME,                      -- When (time only)
    EventDateTime DATETIME2,             -- Precise timestamp
    CreatedAt DATETIME2 DEFAULT SYSDATETIME()
);

-- Choosing the right type
CREATE TABLE Appointment (
    AppointmentID INT PRIMARY KEY,
    AppointmentDate DATE,                -- Only date matters
    StartTime TIME,                      -- Only time matters
    EndTime TIME,
    CreatedDateTime DATETIME2            -- Full timestamp
);
```

---

### Q121: What is DATETIME vs DATETIME2?

**Answer:**

DATETIME is the legacy date-time type with 3.33 millisecond precision, 8-byte storage, and range from 1753 to 9999. DATETIME2 is the newer recommended type with 100 nanosecond precision, 6-8 byte storage depending on precision, and a larger range from year 0001 to 9999. DATETIME2 offers better precision, smaller storage for lower precision needs, and ANSI SQL standard compliance. Use DATETIME2 for new development. DATETIME remains for legacy compatibility.

**Comparison:**

| Feature | DATETIME | DATETIME2 |
|---------|----------|-----------|
| Precision | 3.33 milliseconds | 100 nanoseconds |
| Storage | 8 bytes (fixed) | 6-8 bytes (variable) |
| Range | 1753-9999 | 0001-9999 |
| Standard | Non-standard | ANSI SQL standard |
| Recommendation | Legacy only | Preferred |

```sql
-- DATETIME - Legacy
DECLARE @OldDT DATETIME = '2024-12-27 14:30:45.1237';
SELECT @OldDT;  -- Result: 2024-12-27 14:30:45.123 (rounded)

-- DATETIME2 - Recommended
DECLARE @NewDT DATETIME2 = '2024-12-27 14:30:45.1237';
SELECT @NewDT;  -- Result: 2024-12-27 14:30:45.1237000 (precise)

-- Precision demonstration
CREATE TABLE PrecisionTest (
    TestDT DATETIME,
    TestDT2 DATETIME2
);

INSERT INTO PrecisionTest VALUES 
    ('2024-01-01 12:00:00.1234567', '2024-01-01 12:00:00.1234567');

SELECT 
    TestDT,    -- 2024-01-01 12:00:00.123
    TestDT2;   -- 2024-01-01 12:00:00.1234567

-- Storage comparison
-- DATETIME2 can specify precision to save space
CREATE TABLE StorageDemo (
    DT DATETIME,                 -- Always 8 bytes
    DT2_7 DATETIME2(7),          -- 8 bytes (max precision)
    DT2_3 DATETIME2(3),          -- 7 bytes (millisecond)
    DT2_0 DATETIME2(0)           -- 6 bytes (second)
);

-- Range demonstration
-- DATETIME min date
SELECT CAST('1753-01-01' AS DATETIME);  -- Works
-- SELECT CAST('1752-12-31' AS DATETIME);  -- Error!

-- DATETIME2 broader range
SELECT CAST('0001-01-01' AS DATETIME2);  -- Works!
SELECT CAST('9999-12-31' AS DATETIME2);  -- Works!

-- Practical recommendations
CREATE TABLE ModernTable (
    RecordID INT PRIMARY KEY,
    EventTimestamp DATETIME2(7), -- Use DATETIME2 for new tables
    CreatedAt DATETIME2(3) DEFAULT SYSDATETIME(),  -- Millisecond precision sufficient
    ModifiedAt DATETIME2(3)
);

-- Legacy table (don't change existing)
CREATE TABLE LegacyTable (
    RecordID INT PRIMARY KEY,
    EventTimestamp DATETIME,     -- Keep DATETIME for existing data
    CreatedAt DATETIME DEFAULT GETDATE()
);

-- Converting between types
DECLARE @DT DATETIME = GETDATE();
DECLARE @DT2 DATETIME2 = @DT;    -- Implicit conversion works

SELECT 
    CAST(@DT AS DATETIME2) AS Converted,
    CONVERT(DATETIME2, @DT) AS ConvertedAlt;
```

---

### Q122: What are String Functions?

**Answer:**

String functions manipulate and transform text data in SQL Server. Common functions include LEN() to get string length, SUBSTRING() to extract portions, UPPER()/LOWER() for case conversion, LTRIM()/RTRIM()/TRIM() to remove spaces, CONCAT() to join strings, REPLACE() to substitute text, CHARINDEX() to find positions, LEFT()/RIGHT() to extract from ends, REVERSE() to reverse strings, and STUFF() to insert/delete characters. These functions are essential for data cleansing, formatting, and text processing in queries and stored procedures.

**Common String Functions:**
- **LEN():** Returns string length
- **SUBSTRING():** Extracts substring
- **UPPER()/LOWER():** Case conversion
- **TRIM()/LTRIM()/RTRIM():** Remove spaces
- **CONCAT():** Concatenate strings
- **REPLACE():** Replace text
- **CHARINDEX():** Find position
- **LEFT()/RIGHT():** Extract from ends

```sql
-- LEN - String length
SELECT LEN('Hello World') AS Length;  -- Returns: 11
SELECT LEN('  Spaces  ') AS Length;  -- Returns: 10 (spaces counted, not trailing)

-- SUBSTRING - Extract portion
SELECT SUBSTRING('Hello World', 1, 5) AS Sub;  -- Returns: Hello
SELECT SUBSTRING('Hello World', 7, 5) AS Sub;  -- Returns: World

-- UPPER/LOWER - Case conversion
SELECT UPPER('hello world') AS Upper;  -- Returns: HELLO WORLD
SELECT LOWER('HELLO WORLD') AS Lower;  -- Returns: hello world

-- TRIM/LTRIM/RTRIM - Remove spaces
SELECT TRIM('  Hello  ') AS Trimmed;   -- Returns: Hello
SELECT LTRIM('  Hello') AS LeftTrim;   -- Returns: Hello (right space remains)
SELECT RTRIM('Hello  ') AS RightTrim;  -- Returns: Hello (left space remains)

-- CONCAT - Join strings
SELECT CONCAT('Hello', ' ', 'World') AS Combined;  -- Returns: Hello World
SELECT CONCAT('Value: ', NULL, ' End') AS WithNull;  -- Returns: Value:  End

-- REPLACE - Substitute text
SELECT REPLACE('Hello World', 'World', 'SQL') AS Replaced;  -- Returns: Hello SQL

-- CHARINDEX - Find position
SELECT CHARINDEX('World', 'Hello World') AS Position;  -- Returns: 7
SELECT CHARINDEX('X', 'Hello World') AS NotFound;  -- Returns: 0

-- LEFT/RIGHT - Extract from ends
SELECT LEFT('Hello World', 5) AS LeftPart;   -- Returns: Hello
SELECT RIGHT('Hello World', 5) AS RightPart;  -- Returns: World

-- REVERSE - Reverse string
SELECT REVERSE('Hello') AS Reversed;  -- Returns: olleH

-- Practical examples
-- Format full name
SELECT CONCAT(FirstName, ' ', LastName) AS FullName
FROM Employee;

-- Extract domain from email
SELECT 
    Email,
    SUBSTRING(Email, CHARINDEX('@', Email) + 1, LEN(Email)) AS Domain
FROM Employee;

-- Clean and format data
SELECT 
    UPPER(LTRIM(RTRIM(ProductName))) AS CleanName,
    REPLACE(ProductCode, '-', '') AS FormattedCode
FROM Products;

-- Find and replace
UPDATE Employee
SET Email = REPLACE(Email, '@oldcompany.com', '@newcompany.com')
WHERE Email LIKE '%@oldcompany.com';
```

---

### Q123: What is SUBSTRING function?

**Answer:**

SUBSTRING() extracts a portion of a string starting at a specified position for a given length. Syntax is SUBSTRING(string, start_position, length). Position is 1-based (first character is 1). Commonly used for extracting parts of codes, splitting data, or parsing fixed-format strings.

**Syntax:**
```
SUBSTRING(string_expression, start_position, length)
```

**Parameters:**
- **string_expression:** The source string
- **start_position:** Starting position (1-based)
- **length:** Number of characters to extract

```sql
-- Basic usage
SELECT SUBSTRING('Hello World', 1, 5) AS Result;  -- Returns: Hello
SELECT SUBSTRING('Hello World', 7, 5) AS Result;  -- Returns: World

-- Extract from middle
SELECT SUBSTRING('2024-12-27', 6, 2) AS Month;  -- Returns: 12
SELECT SUBSTRING('2024-12-27', 9, 2) AS Day;    -- Returns: 27

-- With column data
SELECT 
    ProductCode,
    SUBSTRING(ProductCode, 1, 3) AS Category,
    SUBSTRING(ProductCode, 4, 4) AS SubCode
FROM Products
WHERE ProductCode LIKE 'CAT-%';

-- Extract after specific character
SELECT 
    Email,
    SUBSTRING(Email, 1, CHARINDEX('@', Email) - 1) AS Username,
    SUBSTRING(Email, CHARINDEX('@', Email) + 1, LEN(Email)) AS Domain
FROM Employee;

-- Extract area code from phone
SELECT 
    Phone,
    SUBSTRING(Phone, 1, 3) AS AreaCode,
    SUBSTRING(Phone, 4, 3) AS Exchange,
    SUBSTRING(Phone, 7, 4) AS Number
FROM Contact
WHERE LEN(Phone) = 10;

-- Combining with other functions
SELECT 
    FullName,
    SUBSTRING(FullName, 1, CHARINDEX(' ', FullName) - 1) AS FirstName,
    SUBSTRING(FullName, CHARINDEX(' ', FullName) + 1, LEN(FullName)) AS LastName
FROM Customer;

-- Extract year, month, day from date string
DECLARE @DateStr VARCHAR(10) = '2024-12-27';
SELECT 
    SUBSTRING(@DateStr, 1, 4) AS Year,
    SUBSTRING(@DateStr, 6, 2) AS Month,
    SUBSTRING(@DateStr, 9, 2) AS Day;

-- Negative length handling
SELECT SUBSTRING('Hello', 3, 100) AS Result;  -- Returns: llo (stops at end)
SELECT SUBSTRING('Hello', 10, 5) AS Result;   -- Returns: empty string
```

---

### Q124: What is CHARINDEX function?

**Answer:**

CHARINDEX() searches for a substring within a string and returns its starting position (1-based). Returns 0 if not found. Can specify an optional start position for search. Case-insensitive by default. Useful for validating formats, extracting data, and conditional logic based on string content.

**Syntax:**
```
CHARINDEX(substring, string [, start_position])
```

**Returns:** Integer position (1-based) or 0 if not found

```sql
-- Basic usage
SELECT CHARINDEX('World', 'Hello World') AS Position;  -- Returns: 7
SELECT CHARINDEX('SQL', 'Hello World') AS Position;    -- Returns: 0 (not found)

-- Case-insensitive
SELECT CHARINDEX('world', 'Hello World') AS Position;  -- Returns: 7

-- With start position
SELECT CHARINDEX('o', 'Hello World', 1) AS First;   -- Returns: 5 (first 'o')
SELECT CHARINDEX('o', 'Hello World', 6) AS Second;  -- Returns: 8 (second 'o')

-- Practical examples
-- Validate email format
SELECT 
    Email,
    CASE 
        WHEN CHARINDEX('@', Email) > 0 AND CHARINDEX('.', Email) > CHARINDEX('@', Email)
        THEN 'Valid'
        ELSE 'Invalid'
    END AS EmailStatus
FROM Employee;

-- Extract username and domain
SELECT 
    Email,
    SUBSTRING(Email, 1, CHARINDEX('@', Email) - 1) AS Username,
    SUBSTRING(Email, CHARINDEX('@', Email) + 1, LEN(Email)) AS Domain
FROM Employee
WHERE CHARINDEX('@', Email) > 0;

-- Find file extension
SELECT 
    FileName,
    SUBSTRING(FileName, CHARINDEX('.', REVERSE(FileName)), LEN(FileName)) AS Extension
FROM Documents;

-- Split full name
SELECT 
    FullName,
    CASE 
        WHEN CHARINDEX(' ', FullName) > 0
        THEN SUBSTRING(FullName, 1, CHARINDEX(' ', FullName) - 1)
        ELSE FullName
    END AS FirstName,
    CASE 
        WHEN CHARINDEX(' ', FullName) > 0
        THEN SUBSTRING(FullName, CHARINDEX(' ', FullName) + 1, LEN(FullName))
        ELSE ''
    END AS LastName
FROM Customer;

-- Find specific pattern
SELECT * FROM Products
WHERE CHARINDEX('Premium', ProductName) > 0;

-- vs PATINDEX (supports wildcards)
SELECT CHARINDEX('o', 'Hello World');  -- Exact match only: 5
SELECT PATINDEX('%o%', 'Hello World'); -- Supports wildcards: 5
SELECT PATINDEX('%[0-9]%', 'Product123');  -- Find first digit: 8
```

---

### Q125: What is STUFF function?

**Answer:**

STUFF() deletes a specified length of characters from a string and inserts another string at the specified position. Essential for inserting, replacing, or removing text within strings. Different from REPLACE which replaces all occurrences - STUFF works at a specific position. Syntax: STUFF(string, start, length, replacement).

**Syntax:**
```
STUFF(string, start_position, length_to_delete, string_to_insert)
```

**Use Cases:**
- Format phone numbers
- Insert characters at position
- Delete characters from position
- Replace portion of string

```sql
-- Basic usage
SELECT STUFF('Hello World', 7, 5, 'SQL') AS Result;  -- Returns: Hello SQL
-- Deletes 5 chars from position 7 ('World'), inserts 'SQL'

-- Insert without deleting (length = 0)
SELECT STUFF('HelloWorld', 6, 0, ' ') AS Result;  -- Returns: Hello World
-- Inserts space at position 6, deletes 0 chars

-- Delete without inserting (empty string)
SELECT STUFF('Hello World', 6, 6, '') AS Result;  -- Returns: Hello
-- Deletes ' World', inserts nothing

-- Format phone number
SELECT STUFF(STUFF('1234567890', 7, 0, '-'), 4, 0, '-') AS Phone;
-- Returns: 123-456-7890

-- Format SSN
DECLARE @SSN VARCHAR(9) = '123456789';
SELECT STUFF(STUFF(@SSN, 6, 0, '-'), 4, 0, '-') AS FormattedSSN;
-- Returns: 123-45-6789

-- Practical examples
-- Mask credit card
SELECT 
    CreditCard,
    STUFF(CreditCard, 1, 12, '************') AS Masked
FROM Payment;
-- 1234567890123456 → ************3456

-- Remove characters
UPDATE Employee
SET Phone = STUFF(Phone, 1, 2, '')  -- Remove country code
WHERE Phone LIKE '+1%';

-- Replace middle portion
SELECT STUFF('Product_OLD_Code', 9, 3, 'NEW') AS Updated;
-- Returns: Product_NEW_Code

-- Combine with CHARINDEX for dynamic position
SELECT 
    Email,
    STUFF(Email, 1, CHARINDEX('@', Email), '*****@') AS Masked
FROM Employee;
-- john@email.com → *****@email.com

-- String concatenation from rows
SELECT 
    Department,
    STUFF((
        SELECT ', ' + EmployeeName
        FROM Employee E2
        WHERE E2.Department = E1.Department
        FOR XML PATH('')
    ), 1, 2, '') AS Employees
FROM Employee E1
GROUP BY Department;
```

---

### Q126: What is REPLACE function?

**Answer:**

REPLACE() replaces all occurrences of a specified substring with another substring within a string. Unlike STUFF which works at a specific position, REPLACE finds and replaces all instances. Case-sensitive replacement. Commonly used for data cleansing, format standardization, and text corrections.

**Syntax:**
```
REPLACE(string, find_string, replace_string)
```

**Characteristics:**
- Replaces ALL occurrences
- Case-sensitive
- If find_string not found, returns original
- Can replace with empty string to remove text

```sql
-- Basic usage
SELECT REPLACE('Hello World', 'World', 'SQL') AS Result;  
-- Returns: Hello SQL

-- Replace all occurrences
SELECT REPLACE('Hello Hello', 'Hello', 'Hi') AS Result;  
-- Returns: Hi Hi

-- Remove text (replace with empty)
SELECT REPLACE('1-234-567-890', '-', '') AS Result;  
-- Returns: 1234567890

-- Case-sensitive
SELECT REPLACE('Hello WORLD', 'world', 'SQL') AS Result;  
-- Returns: Hello WORLD (no match due to case)

-- Practical examples
-- Clean phone numbers
UPDATE Contact
SET Phone = REPLACE(REPLACE(REPLACE(Phone, '-', ''), '(', ''), ')', '');
-- (123) 456-7890 → 1234567890

-- Update company name across records
UPDATE Employee
SET Email = REPLACE(Email, '@oldcompany.com', '@newcompany.com')
WHERE Email LIKE '%@oldcompany.com';

-- Remove special characters
SELECT 
    ProductName,
    REPLACE(REPLACE(REPLACE(ProductName, '/', ''), '\', ''), ':', '') AS CleanName
FROM Products;

-- Standardize data
UPDATE Address
SET Street = REPLACE(REPLACE(REPLACE(Street, 'St.', 'Street'), 'Ave.', 'Avenue'), 'Blvd.', 'Boulevard');

-- Replace multiple spaces with single space
DECLARE @Text VARCHAR(100) = 'Too    many     spaces';
WHILE CHARINDEX('  ', @Text) > 0
    SET @Text = REPLACE(@Text, '  ', ' ');
SELECT @Text AS Cleaned;  -- Returns: Too many spaces

-- Format JSON or XML (simple cases)
SELECT REPLACE(REPLACE(Value, ' ', ''), CHAR(10), '') AS Compact
FROM DataTable;

-- Nested REPLACE for multiple substitutions
SELECT 
    REPLACE(
        REPLACE(
            REPLACE(ProductCode, 'OLD', 'NEW'),
        'TEMP', 'PERM'),
    'TEST', 'PROD') AS UpdatedCode
FROM Products;

-- Replace in expressions
SELECT 
    FullName,
    REPLACE(
        CONCAT(FirstName, ' ', MiddleName, ' ', LastName),
        '  ', ' '
    ) AS FormattedName
FROM Person;
```

---

### Q127: Difference between STUFF and REPLACE?

**Answer:**

STUFF() modifies a string at a specific position by deleting a specified length and inserting new text, working with position and length parameters. REPLACE() finds all occurrences of a substring and replaces them with another string, working with pattern matching. STUFF is position-based and single-operation, while REPLACE is content-based and affects all matches. Use STUFF for precise position operations and REPLACE for global text substitutions.

**Key Differences:**

| Feature | STUFF | REPLACE |
|---------|-------|---------|
| Operation | Position-based | Pattern-based |
| Occurrences | Single position | All occurrences |
| Parameters | Position, length | Find, replace strings |
| Use case | Specific location | All matches |

```sql
-- STUFF - Position-based
SELECT STUFF('Hello World', 7, 5, 'SQL') AS Result;  
-- Replaces text at position 7, length 5
-- Returns: Hello SQL

-- REPLACE - Pattern-based
SELECT REPLACE('Hello Hello', 'Hello', 'Hi') AS Result;  
-- Replaces ALL occurrences of 'Hello'
-- Returns: Hi Hi

-- Comparison example
DECLARE @Text VARCHAR(50) = 'ABCDEFABCDEF';

-- STUFF: Replace at specific position
SELECT STUFF(@Text, 4, 3, 'XYZ') AS StuffResult;  
-- Returns: ABCXYZABCDEF (replaced position 4-6)

-- REPLACE: Replace all occurrences
SELECT REPLACE(@Text, 'DEF', 'XYZ') AS ReplaceResult;  
-- Returns: ABCXYZABCXYZ (replaced all 'DEF')

-- STUFF: Insert without delete
SELECT STUFF('HelloWorld', 6, 0, ' ') AS Stuff;  
-- Returns: Hello World (inserted space)

-- REPLACE: Cannot insert, only substitute
SELECT REPLACE('HelloWorld', '', ' ') AS Replace;  
-- Returns: HelloWorld (no change, can't find empty string)

-- Practical use cases
-- STUFF: Format phone at specific position
SELECT STUFF(STUFF('1234567890', 7, 0, '-'), 4, 0, '-') AS Phone;
-- Returns: 123-456-7890

-- REPLACE: Remove all dashes
SELECT REPLACE('123-456-7890', '-', '') AS Phone;
-- Returns: 1234567890

-- STUFF: Mask specific characters
SELECT STUFF('4532-1234-5678-9012', 6, 9, 'XXXX-XXXX') AS Masked;
-- Returns: 4532-XXXX-XXXX-9012

-- REPLACE: Remove all spaces
SELECT REPLACE('4532 1234 5678 9012', ' ', '') AS NoSpaces;
-- Returns: 4532123456789012

-- When to use which
-- Use STUFF when:
-- - You know exact position
-- - Single replacement needed
-- - Inserting/deleting at specific point

-- Use REPLACE when:
-- - Multiple occurrences exist
-- - Pattern not position-dependent
-- - Global substitution needed
```

---

### Q128: What are Date Functions?

**Answer:**

Date functions manipulate and extract information from date/time values. Common functions include GETDATE()/SYSDATETIME() for current time, DATEADD() to add intervals, DATEDIFF() to calculate differences, DATEPART()/DAT ENAME() to extract components, YEAR()/MONTH()/DAY() for specific parts, EOMONTH() for end of month, and ISDATE() to validate dates. Essential for date arithmetic, formatting, and filtering in queries.

**Common Date Functions:**
- **GETDATE():** Current datetime
- **DATEADD():** Add interval to date
- **DATEDIFF():** Difference between dates
- **DATEPART():** Extract part of date
- **YEAR/MONTH/DAY():** Specific components
- **EOMONTH():** Last day of month
- **FORMAT():** Format date as string

```sql
-- Current date/time
SELECT 
    GETDATE() AS CurrentDateTime,           -- 2024-12-27 14:30:45.123
    SYSDATETIME() AS PreciseDateTime,       -- 2024-12-27 14:30:45.1234567
    CURRENT_TIMESTAMP AS Timestamp,          -- Same as GETDATE()
    GETUTCDATE() AS UTCTime;                -- UTC time

-- Extract components
SELECT 
    YEAR(GETDATE()) AS Year,               -- 2024
    MONTH(GETDATE()) AS Month,             -- 12
    DAY(GETDATE()) AS Day,                 -- 27
    DATEPART(HOUR, GETDATE()) AS Hour,     -- 14
    DATEPART(MINUTE, GETDATE()) AS Minute, -- 30
    DATENAME(WEEKDAY, GETDATE()) AS DayName, -- Friday
    DATENAME(MONTH, GETDATE()) AS MonthName; -- December

-- DATEADD - Add intervals
SELECT 
    DATEADD(DAY, 7, GETDATE()) AS NextWeek,
    DATEADD(MONTH, 1, GETDATE()) AS NextMonth,
    DATEADD(YEAR, -1, GETDATE()) AS LastYear,
    DATEADD(HOUR, 2, GETDATE()) AS TwoHoursLater;

-- DATEDIFF - Calculate differences
SELECT 
    DATEDIFF(DAY, '2024-01-01', GETDATE()) AS DaysSinceNewYear,
    DATEDIFF(MONTH, HireDate, GETDATE()) AS MonthsEmployed,
    DATEDIFF(YEAR, DateOfBirth, GETDATE()) AS ApproxAge
FROM Employee;

-- EOMONTH - End of month
SELECT 
    EOMONTH(GETDATE()) AS EndOfCurrentMonth,
    EOMONTH(GETDATE(), 1) AS EndOfNextMonth,
    EOMONTH('2024-02-15') AS EndOfFeb2024;  -- 2024-02-29

-- FORMAT - Date formatting
SELECT 
    FORMAT(GETDATE(), 'yyyy-MM-dd') AS ISODate,
    FORMAT(GETDATE(), 'MM/dd/yyyy') AS USDate,
    FORMAT(GETDATE(), 'dd-MMM-yyyy') AS DisplayDate,
    FORMAT(GETDATE(), 'HH:mm:ss') AS Time24;

-- Practical examples
-- Age calculation
SELECT 
    FirstName,
    DateOfBirth,
    DATEDIFF(YEAR, DateOfBirth, GETDATE()) - 
    CASE 
        WHEN MONTH(DateOfBirth) > MONTH(GETDATE()) 
          OR (MONTH(DateOfBirth) = MONTH(GETDATE()) AND DAY(DateOfBirth) > DAY(GETDATE()))
        THEN 1
        ELSE 0
    END AS Age
FROM Employee;

-- Find records from last 30 days
SELECT * FROM Orders
WHERE OrderDate >= DATEADD(DAY, -30, GETDATE());

-- Get start of month
SELECT DATEADD(DAY, 1 - DAY(GETDATE()), CAST(GETDATE() AS DATE)) AS StartOfMonth;

-- Business days between dates
SELECT 
    DATEDIFF(DAY, StartDate, EndDate) -
    (DATEDIFF(WEEK, StartDate, EndDate) * 2) AS BusinessDays
FROM Project;
```

---

### Q129: What is DATEADD function?

**Answer:**

DATEADD() adds a specified time interval to a date, returning a new date. Syntax: DATEADD(unit, number, date). Units include YEAR, MONTH, DAY, HOUR, MINUTE, SECOND. Number can be positive (future) or negative (past). Useful for calculating due dates, expiration dates, and date arithmetic.

**Syntax:**
```
DATEADD(interval, number, date)
```

**Intervals:** YEAR, QUARTER, MONTH, WEEK, DAY, HOUR, MINUTE, SECOND, MILLISECOND

```sql
-- Add days
SELECT DATEADD(DAY, 7, '2024-01-01') AS Result;  -- 2024-01-08
SELECT DATEADD(DAY, -7, '2024-01-01') AS Result; -- 2023-12-25

-- Add months
SELECT DATEADD(MONTH, 1, '2024-01-31') AS Result;  -- 2024-02-29 (end of Feb)
SELECT DATEADD(MONTH, -3, GETDATE()) AS ThreeMonthsAgo;

// Add years
SELECT DATEADD(YEAR, 1, '2024-02-29') AS Result;  -- 2025-02-28
SELECT DATEADD(YEAR, 5, HireDate) AS FifthAnniversary FROM Employee;

-- Add time units
SELECT DATEADD(HOUR, 2, GETDATE()) AS In2Hours;
SELECT DATEADD(MINUTE, 30, GETDATE()) AS In30Minutes;
SELECT DATEADD(SECOND, 120, GETDATE()) AS In2Minutes;

-- Practical examples
-- Calculate due date (30 days from order)
SELECT 
    OrderID,
    OrderDate,
    DATEADD(DAY, 30, OrderDate) AS DueDate
FROM Orders;

-- Subscription expiration
UPDATE Subscription
SET ExpirationDate = DATEADD(YEAR, 1, SubscriptionDate)
WHERE Status = 'Active';

-- Next business day (skip weekend)
DECLARE @Date DATE = GETDATE();
SET @Date = DATEADD(DAY, 1, @Date);
WHILE DATEPART(WEEKDAY, @Date) IN (1, 7)  -- Sunday=1, Saturday=7
    SET @Date = DATEADD(DAY, 1, @Date);
SELECT @Date AS NextBusinessDay;

-- Calculate age-based expiration
SELECT 
    ProductID,
    ManufactureDate,
    DATEADD(MONTH, ShelfLife, ManufactureDate) AS ExpirationDate
FROM Products;

-- Past date range
SELECT * FROM Employee
WHERE HireDate BETWEEN DATEADD(YEAR, -5, GETDATE()) 
                   AND DATEADD(YEAR, -1, GETDATE());

-- Add quarters
SELECT DATEADD(QUARTER, 1, '2024-01-15') AS NextQuarter;  -- 2024-04-15

-- Combine with other functions
SELECT 
    OrderDate,
    EOMONTH(DATEADD(MONTH, 1, OrderDate)) AS EndOfNextMonth
FROM Orders;
```

---

### Q130: What is DATEDIFF function?

**Answer:**

DATEDIFF() calculates the difference between two dates in specified units. Syntax: DATEDIFF(unit, start_date, end_date). Returns integer count of boundaries crossed, not actual elapsed time. Positive if end_date is after start_date, negative if before. Commonly used for age calculation, elapsed time, and date comparisons.

**Syntax:**
```
DATEDIFF(interval, start_date, end_date)
```

**Returns:** Integer representing number of intervals between dates

```sql
-- Calculate days between dates
SELECT DATEDIFF(DAY, '2024-01-01', '2024-01-31') AS Days;  -- 30

-- Calculate months
SELECT DATEDIFF(MONTH, '2024-01-15', '2024-06-20') AS Months;  -- 5

-- Calculate years
SELECT DATEDIFF(YEAR, '2020-01-01', '2024-12-31') AS Years;  -- 4

-- Negative values (start > end)
SELECT DATEDIFF(DAY, '2024-12-31', '2024-01-01') AS Days;  -- -365

-- Time differences
SELECT 
    DATEDIFF(HOUR, '2024-01-01 10:00', '2024-01-01 15:30') AS Hours,    -- 5
    DATEDIFF(MINUTE, '2024-01-01 10:00', '2024-01-01 10:45') AS Minutes, -- 45
    DATEDIFF(SECOND, '2024-01-01 10:00:00', '2024-01-01 10:02:30') AS Seconds;  -- 150

-- Practical examples
-- Calculate age
SELECT 
    FirstName,
    DateOfBirth,
    DATEDIFF(YEAR, DateOfBirth, GETDATE()) AS ApproxAge,
    -- More accurate age
    DATEDIFF(YEAR, DateOfBirth, GETDATE()) -
    CASE 
        WHEN MONTH(DateOfBirth) > MONTH(GETDATE())
        OR (MONTH(DateOfBirth) = MONTH(GETDATE()) AND DAY(DateOfBirth) > DAY(GETDATE()))
        THEN 1
        ELSE 0
    END AS ActualAge
FROM Employee;

-- Days since last order
SELECT 
    CustomerID,
    MAX(OrderDate) AS LastOrder,
    DATEDIFF(DAY, MAX(OrderDate), GETDATE()) AS DaysSinceLastOrder
FROM Orders
GROUP BY CustomerID;

-- Employee tenure
SELECT 
    EmployeeName,
    HireDate,
    DATEDIFF(YEAR, HireDate, GETDATE()) AS YearsOfService,
    DATEDIFF(MONTH, HireDate, GETDATE()) AS MonthsOfService,
    DATEDIFF(DAY, HireDate, GETDATE()) AS DaysOfService
FROM Employee;

-- Find overdue items
SELECT * FROM Tasks
WHERE Status = 'Pending'
  AND DATEDIFF(DAY, DueDate, GETDATE()) > 0;  -- Past due date

-- Calculate project duration
SELECT 
    ProjectName,
    Start Date,
    EndDate,
    DATEDIFF(DAY, StartDate, EndDate) AS DurationDays,
    DATEDIFF(WEEK, StartDate, EndDate) AS DurationWeeks
FROM Projects;

-- Warning: Boundary crossing issue
SELECT DATEDIFF(YEAR, '2023-12-31', '2024-01-01') AS Years;  -- 1 (crossed year boundary)
-- But actual days is only 1!

-- Combining with DATEADD
SELECT * FROM Subscriptions
WHERE DATEDIFF(DAY, GETDATE(), ExpirationDate) <= 30;  -- Expires in 30 days
```

## Section 11: Performance and Optimization

### Q131: How to improve query performance?

**Answer:**

Query performance optimization involves multiple strategies to reduce execution time and resource consumption. Primary techniques include creating appropriate indexes on frequently queried columns, avoiding SELECT * by selecting only needed columns, using WHERE clauses effectively, minimizing subqueries in favor of joins, keeping transactions short, updating statistics regularly, and analyzing execution plans. Write SARGable queries where indexed columns aren't wrapped in functions. Use covering indexes to avoid key lookups. Partition large tables. Avoid cursors when set-based operations work. Consider denormalization for read-heavy workloads.

**Key Strategies:**
- Create appropriate indexes
- Select only needed columns (avoid SELECT *)
- Write SARGable queries  
- Use JOINs instead of subqueries when possible
- Keep transactions short
- Update statistics regularly
- Analyze execution plans
- Use covering indexes
- Avoid functions on indexed columns

```sql
-- Bad: SELECT *
SELECT * FROM Employee WHERE Department = 'Sales';

-- Good: Select only needed columns
SELECT EmployeeID, EmployeeName, Salary FROM Employee WHERE Department = 'Sales';

-- Bad: Function on indexed column (not SARGable)
SELECT * FROM Orders WHERE YEAR(OrderDate) = 2024;

-- Good: SARGable query
SELECT * FROM Orders 
WHERE OrderDate >= '2024-01-01' AND OrderDate < '2025-01-01';

-- Bad: Multiple subqueries
SELECT * FROM Employee
WHERE Department = (SELECT Department FROM Department WHERE DepartmentID = 1)
  AND Salary > (SELECT AVG(Salary) FROM Employee);

-- Better: Use JOINs and optimize
SELECT e.* FROM Employee e
INNER JOIN Department d ON e.Department = d.Department
CROSS JOIN (SELECT AVG(Salary) AS AvgSalary FROM Employee) avg
WHERE d.DepartmentID = 1 AND e.Salary > avg.AvgSalary;

-- Create covering index
CREATE NONCLUSTERED INDEX IX_Employee_Covering
ON Employee(Department) INCLUDE (EmployeeID, EmployeeName, Salary);

-- Update statistics
UPDATE STATISTICS Employee;
EXEC sp_updatestats;  -- Update all tables

-- View execution plan
SET SHOWPLAN_XML ON;
SELECT * FROM Employee WHERE Department = 'Sales';
SET SHOWPLAN_XML OFF;

-- Or use
SET STATISTICS IO ON;
SET STATISTICS TIME ON;
SELECT * FROM Employee WHERE EmployeeID = 100;
SET STATISTICS IO OFF;
SET STATISTICS TIME OFF;
```

---

### Q132: What is an Execution Plan?

**Answer:**

An execution plan is a visual or XML representation of the steps SQL Server takes to execute a query, showing the sequence of operations, their costs, and resource usage. It displays how tables are accessed (scans vs seeks), join methods used, indexes utilized, and estimated vs actual row counts. Execution plans help identify performance bottlenecks like table scans, missing indexes, or inefficient joins. Two types exist: estimated (before execution) and actual (after execution). View in SSMS with Ctrl+L (estimated) or Ctrl+M (include actual). Analyzing plans reveals optimization opportunities.

**Types:**
- **Estimated Plan:** Shows planned operations before execution
- **Actual Plan:** Shows actual operations after execution

**Key Components:**
- Operation types (Index Seek, Scan, Join)
- Cost percentages
- Row counts (estimated vs actual)
- Warnings  (missing indexes, type conversions)

**How to View:**
- SSMS: Ctrl+L (estimated), Ctrl+M (actual)
- T-SQL: SET SHOWPLAN_XML ON

```sql
-- Enable actual execution plan
SET STATISTICS XML ON;
SELECT * FROM Employee WHERE Department = 'Sales';
SET STATISTICS XML OFF;

-- Show estimated plan (doesn't execute)
SET SHOWPLAN_XML ON;
SELECT * FROM Employee WHERE Department = 'Sales';
SET SHOWPLAN_XML OFF;

-- Show text plan
SET SHOWPLAN_TEXT ON;
SELECT * FROM Orders WHERE OrderDate > '2024-01-01';
SET SHOWPLAN_TEXT OFF;

-- Include actual execution plan
SET STATISTICS PROFILE ON;
SELECT * FROM Employee e
INNER JOIN Department d ON e.DepartmentID = d.DepartmentID;
SET STATISTICS PROFILE OFF;

-- Query to find expensive queries
SELECT 
    qs.execution_count,
    qs.total_worker_time / qs.execution_count AS avg_cpu_time,
    qs.total_elapsed_time / qs.execution_count AS avg_elapsed_time,
    SUBSTRING(qt.text, qs.statement_start_offset/2 + 1,
        (CASE WHEN qs.statement_end_offset = -1
            THEN LEN(CONVERT(NVARCHAR(MAX), qt.text)) * 2
            ELSE qs.statement_end_offset
        END - qs.statement_start_offset)/2) AS query_text
FROM sys.dm_exec_query_stats qs
CROSS APPLY sys.dm_exec_sql_text(qs.sql_handle) qt
ORDER BY avg_cpu_time DESC;
```

---

### Q133: What is SQL Profiler?

**Answer:**

SQL Profiler is a graphical tool for monitoring and capturing SQL Server database activity in real-time, tracking events like queries executed, stored procedures called, connection attempts, errors, and deadlocks. It helps identify slow queries, troubleshoot performance issues, audit database access, and analyze workload patterns. Profiler creates traces that record selected events with details like duration, CPU usage, reads/writes, and executing user. While powerful, Profiler adds overhead and is being superseded by Extended Events for production monitoring.

**Use Cases:**
- Identify slow-running queries
- Troubleshoot performance problems
- Audit database access
- Capture deadlock information
- Analyze query patterns
- Debug applications

**Key Events to Trace:**
- SQL:BatchCompleted
- RPC:Completed
- SP:StmtCompleted
- Deadlock graph
- Login/Logout events

```sql
-- Create server-side trace (alternative to Profiler GUI)
DECLARE @TraceID INT;
DECLARE @MaxFileSize BIGINT = 100;  -- MB

EXEC sp_trace_create @TraceID OUTPUT, 
    2,  -- Rollover file
    N'C:\Trace\MyTrace', 
    @MaxFileSize;

-- Set events to capture (e.g., RPC:Completed)
EXEC sp_trace_setevent @TraceID, 10, 1, 1;  -- Event 10, Column 1
EXEC sp_trace_setevent @TraceID, 10, 13, 1; -- Duration

-- Set filters (e.g., duration > 1000ms)
EXEC sp_trace_setfilter @TraceID, 13, 0, 4, 1000;

-- Start trace
EXEC sp_trace_setstatus @TraceID, 1;

-- Stop trace
EXEC sp_trace_setstatus @TraceID, 0;

-- Close and delete trace
EXEC sp_trace_setstatus @TraceID, 2;

-- Read trace file
SELECT * FROM fn_trace_gettable('C:\Trace\MyTrace.trc', DEFAULT);

-- Alternative: Extended Events (recommended)
CREATE EVENT SESSION SlowQueries ON SERVER
ADD EVENT sqlserver.sql_batch_completed (
    WHERE duration > 1000000  -- Microseconds (1 second)
)
ADD TARGET package0.event_file (
    SET filename = 'C:\XE\SlowQueries.xel'
);

-- Start session
ALTER EVENT SESSION SlowQueries ON SERVER STATE = START;

-- Stop session
ALTER EVENT SESSION SlowQueries ON SERVER STATE = STOP;
```

---

### Q134: What is Denormalization?

**Answer:**

Denormalization is the process of intentionally introducing redundancy into a normalized database by combining tables or duplicating data to improve read performance at the cost of increased storage and write complexity. While normalization eliminates redundancy, denormalization adds it back strategically for performance gains. Common in data warehouses and reporting databases where reads vastly outnumber writes. Techniques include storing calculated values, duplicating frequently joined columns, and maintaining summary tables. Trade-offs include faster queries but slower updates and potential data inconsistency.

**Benefits:**
- Faster query performance (fewer joins)
- Reduced query complexity
- Better for read-heavy workloads
- Improved reporting performance

**Drawbacks:**
- Data redundancy and increased storage
- Update anomalies risk
- More complex write operations
- Potential data inconsistency

**When to Use:**
- Data warehouses and OLAP
- Read-heavy applications
- Reporting databases
- Performance-critical queries

```sql
-- Normalized structure (3NF)
CREATE TABLE Orders (
    OrderID INT PRIMARY KEY,
    CustomerID INT,
    OrderDate DATE
);

CREATE TABLE OrderDetails (
    OrderDetailID INT PRIMARY KEY,
    OrderID INT,
    ProductID INT,
    Quantity INT,
    UnitPrice DECIMAL(10,2)
);

-- Query requires join and aggregation
SELECT 
    o.OrderID,
    o.OrderDate,
    SUM(od.Quantity * od.UnitPrice) AS TotalAmount
FROM Orders o
INNER JOIN OrderDetails od ON o.OrderID = od.OrderID
GROUP BY o.OrderID, o.OrderDate;

-- Denormalized: Add TotalAmount to Orders table
ALTER TABLE Orders ADD TotalAmount DECIMAL(10,2);

-- Maintain with trigger
CREATE TRIGGER trg_UpdateOrderTotal
ON OrderDetails
AFTER INSERT, UPDATE, DELETE
AS
BEGIN
    UPDATE Orders
    SET TotalAmount = (
        SELECT SUM(Quantity * UnitPrice)
        FROM OrderDetails
        WHERE OrderID = Orders.OrderID
    )
    WHERE OrderID IN (
        SELECT OrderID FROM INSERTED
        UNION
        SELECT OrderID FROM DELETED
    );
END;

-- Now query is simpler and faster
SELECT OrderID, OrderDate, TotalAmount FROM Orders;

-- Denormalization example: Customer summary
CREATE TABLE CustomerSummary (
    CustomerID INT PRIMARY KEY,
    CustomerName VARCHAR(100),
    TotalOrders INT,
    TotalSpent DECIMAL(10,2),
    LastOrderDate DATE
);

-- Maintain with scheduled job or triggers
-- Faster than calculating on every query
SELECT * FROM CustomerSummary WHERE TotalSpent > 10000;
```

---

### Q135: What is Table Partitioning?

**Answer:**

Table partitioning divides large tables into smaller, manageable pieces called partitions based on a partition key (usually a date or ID range), while appearing as a single table to queries. Each partition can be on different filegroups for better I/O distribution. Benefits include improved query performance through partition elimination, easier maintenance (backup/restore individual partitions), and better index management. Horizontal partitioning splits rows, vertical partitioning splits columns. Commonly used for large tables with time-series or range-based data.

**Types:**
- **Range Partitioning:** Based on value ranges (dates, IDs)
- **List Partitioning:** Based on discrete values
- **Hash Partitioning:** Based on hash function

**Benefits:**
- Improved query performance (partition elimination)
- Easier maintenance and archiving
- Better index management
- Parallel query execution
- Faster backup/restore of partitions

```sql
-- Create partition function (defines ranges)
CREATE PARTITION FUNCTION pf_OrderDate (DATE)
AS RANGE RIGHT FOR VALUES (
    '2022-01-01', '2023-01-01', '2024-01-01'
);
-- Creates partitions: <2022, 2022-2023, 2023-2024, >=2024

-- Create partition scheme (maps to filegroups)
CREATE PARTITION SCHEME ps_OrderDate
AS PARTITION pf_OrderDate
TO (FG2022, FG2023, FG2024, FG2025);

-- Create partitioned table
CREATE TABLE Orders (
    OrderID INT,
    CustomerID INT,
    OrderDate DATE,
    TotalAmount DECIMAL(10,2)
) ON ps_OrderDate(OrderDate);

-- Query benefits from partition elimination
SELECT * FROM Orders
WHERE OrderDate >= '2024-01-01' AND OrderDate < '2024-12-31';
-- Only scans 2024 partition

-- View partition information
SELECT 
    OBJECT_NAME(p.object_id) AS TableName,
    p.partition_number,
    p.rows,
    ps.name AS PartitionScheme,
    pf.name AS PartitionFunction
FROM sys.partitions p
INNER JOIN sys.partition_schemes ps ON p.partition_number = ps.data_space_id
INNER JOIN sys.partition_functions pf ON ps.function_id = pf.function_id
WHERE OBJECT_NAME(p.object_id) = 'Orders';

-- Archive old partition
-- Switch partition to archive table
ALTER TABLE Orders
SWITCH PARTITION 1 TO OrdersArchive2022;

-- Split partition (add new boundary)
ALTER PARTITION FUNCTION pf_OrderDate()
SPLIT RANGE ('2025-01-01');

-- Merge partitions
ALTER PARTITION FUNCTION pf_OrderDate()
MERGE RANGE ('2022-01-01');
```

---

### Q136: What is a Covering Index?

**Answer:**

A covering index is an index that includes all columns required by a query in its key or INCLUDE clause, eliminating the need for SQL Server to access the base table data (avoiding key lookups or RID lookups). When a query can be completely satisfied using only the index, it's "covered." Creates significant performance improvements by reducing I/O. Built using INCLUDE clause to add non-key columns. Balance storage cost against query performance gains.

**Benefits:**
- Eliminates table lookups
- Reduces I/O operations
- Improves query performance
- Faster execution for covered queries

**Considerations:**
- Increased index size and storage
- Slower INSERT/UPDATE/DELETE
- Choose included columns carefully

```sql
-- Query needing Employee data
SELECT EmployeeID, EmployeeName, Salary
FROM Employee
WHERE Department = 'Sales';

-- Non-covering index
CREATE NONCLUSTERED INDEX IX_Employee_Department
ON Employee(Department);
-- Requires key lookup to get EmployeeName and Salary

-- Covering index (better)
CREATE NONCLUSTERED INDEX IX_Employee_Covering
ON Employee(Department)
INCLUDE (EmployeeName, Salary);
-- No table lookup needed - all data in index

-- Verify covering index usage
SET STATISTICS IO ON;
SELECT EmployeeID, EmployeeName, Salary
FROM Employee
WHERE Department = 'Sales';
SET STATISTICS IO OFF;

-- Complex query example
SELECT OrderID, CustomerName, OrderDate, TotalAmount
FROM Orders o
INNER JOIN Customers c ON o.CustomerID = c.CustomerID
WHERE OrderDate >= '2024-01-01';

-- Covering indexes
CREATE NONCLUSTERED INDEX IX_Orders_Covering
ON Orders(OrderDate)
INCLUDE (OrderID, CustomerID, TotalAmount);

CREATE NONCLUSTERED INDEX IX_Customers_Covering
ON Customers(CustomerID)
INCLUDE (CustomerName);

-- View index usage
SELECT 
    OBJECT_NAME(ixs.object_id) AS TableName,
    ix.name AS IndexName,
    ixs.user_seeks,
    ixs.user_scans,
    ixs.user_lookups
FROM sys.dm_db_index_usage_stats ixs
INNER JOIN sys.indexes ix ON ixs.object_id = ix.object_id 
    AND ixs.index_id = ix.index_id
WHERE OBJECT_NAME(ixs.object_id) = 'Employee';
```

---

### Q137: Difference between Index Seek and Index Scan?

**Answer:**

Index Seek is an efficient operation where SQL Server uses the B-tree structure to quickly navigate to specific rows matching the search criteria, reading only necessary rows. Index Scan reads all or most rows in the index sequentially, similar to a table scan but on the index. Seeks are fast and preferred, occurring when queries have SARGable predicates on indexed columns. Scans are slower, happening when no suitable index exists or predicates aren't SARGable. Execution plans show which operation is used.

**Index Seek:**
- Uses B-tree to find specific rows
- Reads only matching rows
- Fast and efficient
- Preferred operation
- Occurs with SARGable predicates

**Index Scan:**
- Reads all/most index rows sequentially
- Slower than seek
- Happens without suitable index
- Or with non-SARGable predicates

```sql
-- Index Seek example (efficient)
CREATE NONCLUSTERED INDEX IX_Employee_ID ON Employee(EmployeeID);

SELECT * FROM Employee WHERE EmployeeID = 100;
-- Uses Index Seek on IX_Employee_ID

SELECT * FROM Employee WHERE EmployeeID BETWEEN 100 AND 200;
-- Uses Index Seek (range)

-- Index Scan example (less efficient)
SELECT * FROM Employee WHERE YEAR(HireDate) = 2024;
-- Index Scan - function on column prevents seek

-- Better (Index Seek)
SELECT * FROM Employee 
WHERE HireDate >= '2024-01-01' AND HireDate < '2025-01-01';

-- Scan vs Seek comparison
-- Scan: No WHERE clause or non-indexed column
SELECT * FROM Employee;  -- Table/Clustered Index Scan
SELECT * FROM Employee WHERE MiddleName = 'Smith';  -- Scan if not indexed

-- Seek: Indexed column with equality or range
SELECT * FROM Employee WHERE EmployeeID = 100;  -- Seek
SELECT * FROM Employee WHERE LastName = 'Smith';  -- Seek if indexed

-- View in execution plan
SET STATISTICS IO ON;
SET STATISTICS TIME ON;

-- This does Index Seek
SELECT * FROM Employee WHERE EmployeeID = 100;

-- This does Index/Table Scan
SELECT * FROM Employee WHERE UPPER(LastName) = 'SMITH';

SET STATISTICS IO OFF;
SET STATISTICS TIME OFF;
```

---

### Q138: What are Statistics in SQL Server?

**Answer:**

Statistics are metadata objects containing information about the distribution of values in one or more columns of a table or index, used by the query optimizer to estimate row counts and choose optimal execution plans. SQL Server automatically creates and updates statistics on indexed columns and can auto-create on non-indexed columns used in predicates. Statistics include density, histogram showing value distribution, and modification counter. Outdated statistics lead to poor query plans. Maintain using UPDATE STATISTICS or auto-update statistics.

**Key Information Stored:**
- Density (uniqueness of values)
- Histogram (value distribution)
- Number of rows
- Last update date
- Modification counter

**Importance:**
- Query optimizer uses for cardinality estimation
- Determines join order and access methods
- Affects query performance significantly
- Outdated stats cause poor plans

```sql
-- View statistics for a table
DBCC SHOW_STATISTICS('Employee', 'IX_Employee_Department');

-- Enable auto-create and auto-update statistics
ALTER DATABASE MyDatabase SET AUTO_CREATE_STATISTICS ON;
ALTER DATABASE MyDatabase SET AUTO_UPDATE_STATISTICS ON;

-- Manual update
UPDATE STATISTICS Employee;  -- All statistics on table
UPDATE STATISTICS Employee IX_Employee_Department;  -- Specific index

-- Update all statistics in database
EXEC sp_updatestats;

-- Full scan for accuracy (slower)
UPDATE STATISTICS Employee WITH FULLSCAN;

-- Sample scan (faster)
UPDATE STATISTICS Employee WITH SAMPLE 50 PERCENT;

-- Create statistics manually
CREATE STATISTICS Stats_Employee_Salary 
ON Employee(Salary);

-- View all statistics on a table
SELECT 
    s.name AS StatisticsName,
    STRING_AGG(c.name, ', ') AS ColumnNames,
    s.auto_created,
    s.user_created,
    sp.last_updated,
    sp.rows,
    sp.modification_counter
FROM sys.stats s
INNER JOIN sys.stats_columns sc ON s.object_id = sc.object_id 
    AND s.stats_id = sc.stats_id
INNER JOIN sys.columns c ON sc.object_id = c.object_id 
    AND sc.column_id = c.column_id
CROSS APPLY sys.dm_db_stats_properties(s.object_id, s.stats_id) sp
WHERE s.object_id = OBJECT_ID('Employee')
GROUP BY s.name, s.auto_created, s.user_created, sp.last_updated, 
    sp.rows, sp.modification_counter;

-- Drop statistics
DROP STATISTICS Employee.Stats_Employee_Salary;
```

---

### Q139: How to update Statistics?

**Answer:**

Update statistics using UPDATE STATISTICS command, sp_updatestats system procedure, or enable auto-update statistics at database level. Manual updates recommended after significant data changes, bulk loads, or index rebuilds. Options include FULLSCAN for complete accuracy (slower), SAMPLE for faster partial scan, or RESAMPLE to use previous sample rate. Schedule regular updates for large tables where auto-update may lag.

**Methods:**
- UPDATE STATISTICS (manual)
- sp_updatestats (all tables)
- AUTO_UPDATE_STATISTICS (automatic)
- Index rebuild (updates stats automatically)

**Options:**
- FULLSCAN: Scan all rows (accurate, slow)
- SAMPLE: Scan percentage (faster)
- RESAMPLE: Use previous sample rate

```sql
-- Update all statistics on a table
UPDATE STATISTICS Employee;

-- Update specific index/statistics
UPDATE STATISTICS Employee IX_Employee_Department;

-- Full scan for accuracy
UPDATE STATISTICS Employee WITH FULLSCAN;

-- Sample percentage
UPDATE STATISTICS Employee WITH SAMPLE 25 PERCENT;

-- Resample using previous rate
UPDATE STATISTICS Employee WITH RESAMPLE;

-- Update all tables in database
EXEC sp_updatestats;

-- Enable automatic updates
ALTER DATABASE MyDatabase SET AUTO_UPDATE_STATISTICS ON;
ALTER DATABASE MyDatabase SET AUTO_UPDATE_STATISTICS_ASYNC ON;  -- Async updates

-- Asynchronous update (doesn't block query)
ALTER DATABASE MyDatabase SET AUTO_UPDATE_STATISTICS_ASYNC ON;

-- Create job to update statistics regularly
-- Example: Update stats weekly for large tables
UPDATE STATISTICS LargeTable WITH SAMPLE 30 PERCENT;

-- Rebuild index (updates statistics automatically)
ALTER INDEX IX_Employee_Department ON Employee REBUILD;

-- Check when statistics were last updated
SELECT 
    OBJECT_NAME(s.object_id) AS TableName,
    s.name AS StatisticsName,
    sp.last_updated,
    sp.rows,
    sp.modification_counter,
    sp.modification_counter * 100.0 / sp.rows AS ModificationPercent
FROM sys.stats s
CROSS APPLY sys.dm_db_stats_properties(s.object_id, s.stats_id) sp
WHERE OBJECT_NAME(s.object_id) = 'Employee'
ORDER BY sp.last_updated;

-- Update if modification counter high
DECLARE @ModThreshold INT = 20;  -- 20% changes

UPDATE STATISTICS Employee
WHERE (modification_counter * 100.0 / rows) > @ModThreshold;
```

---

### Q140: What are Fill Factor and Page Split?

**Answer:**

Fill Factor is an index option (0-100) that specifies how full SQL Server should make index pages during creation or rebuild, leaving free space for future inserts to reduce page splits. Default 0 (same as 100) fills pages completely. Lower values (70-90) leave space for growth. Page Split occurs when inserting into a full page requires splitting it into two pages, causing fragmentation and performance degradation. Proper fill factor balances storage efficiency against insert performance and fragmentation.

**Fill Factor:**
- Percentage of page fullness (0-100)
- 0 or 100: Completely full
- Lower values: More free space
- Trade-off: Storage vs. fragmentation

**Page Split:**
- Occurs when inserting into full page
- Splits page into two half-full pages
- Causes fragmentation
- Degrades performance
- Prevented by appropriate fill factor

```sql
-- Create index with fill factor
CREATE NONCLUSTERED INDEX IX_Employee_Name
ON Employee(EmployeeName)
WITH (FILLFACTOR = 80);  -- 80% full, 20% free

-- Rebuild with new fill factor
ALTER INDEX IX_Employee_Name ON Employee
REBUILD WITH (FILLFACTOR = 90);

-- Set fill factor for all indexes
ALTER INDEX ALL ON Employee
REBUILD WITH (FILLFACTOR = 85);

-- View current fill factor
SELECT 
    OBJECT_NAME(i.object_id) AS TableName,
    i.name AS IndexName,
    i.fill_factor
FROM sys.indexes i
WHERE OBJECT_NAME(i.object_id) = 'Employee'
  AND i.index_id > 0;

-- Check fragmentation (indicates page splits)
SELECT 
    OBJECT_NAME(ips.object_id) AS TableName,
    i.name AS IndexName,
    ips.avg_fragmentation_in_percent,
    ips.page_count,
    ips.avg_page_space_used_in_percent
FROM sys.dm_db_index_physical_stats(
    DB_ID(), 
    OBJECT_ID('Employee'), 
    NULL, NULL, 'DETAILED'
) ips
INNER JOIN sys.indexes i ON ips.object_id = i.object_id 
    AND ips.index_id = i.index_id
WHERE ips.avg_fragmentation_in_percent > 10;

-- Rebuild fragmented indexes
ALTER INDEX IX_Employee_Name ON Employee REBUILD;

-- When to use lower fill factor:
-- - High INSERT activity
-- - Sequential key (IDENTITY) with many inserts
-- - Random key inserts causing splits

-- When to use higher fill factor (95-100):
-- - Read-only or mostly SELECT queries
-- - Low INSERT/UPDATE activity
-- - Save storage space
```

---
### Q141: What are Query Hints?

**Answer:**

Query hints are directives that override the SQL Server query optimizer's default behavior, forcing it to use specific strategies or settings for query execution. Added using WITH clause or OPTION clause, hints can specify join types, index usage, locking behavior, or parallelism settings. Common hints include NOLOCK for uncommitted reads, INDEX to force specific index, FORCESEEK to require index seek, MAXDOP to limit parallelism, and RECOMPILE to recompile on each execution. While powerful for troubleshooting or edge cases, hints should be used sparingly as they can harm performance when data distribution or schema changes, and they prevent the optimizer from adapting to new conditions.

**Common Table Hints:**
- **NOLOCK:** Read uncommitted data (dirty reads)
- **ROWLOCK:** Force row-level locking
- **INDEX:** Force specific index usage
- **FORCESEEK:** Force index seek operation

**Common Query Hints (OPTION clause):**
- **MAXDOP:** Limit degree of parallelism
- **RECOMPILE:** Recompile query each execution
- **OPTIMIZE FOR:** Optimize for specific parameter value
- **FAST:** Return first N rows quickly

```sql
-- Table hints (WITH clause)
SELECT * FROM Employee WITH (NOLOCK)
WHERE Department = 'Sales';

-- Force specific index
SELECT * FROM Employee WITH (INDEX(IX_Employee_Department))
WHERE Department = 'IT';

-- Force index seek
SELECT * FROM Orders WITH (FORCESEEK)
WHERE OrderDate > '2024-01-01';

-- Row-level locking
SELECT * FROM Employee WITH (ROWLOCK)
WHERE EmployeeID = 100;

-- Query hints (OPTION clause)
SELECT * FROM Employee
WHERE Department = 'Sales'
OPTION (MAXDOP 2);  -- Limit to 2 processors

-- Recompile each execution
SELECT * FROM Employee
WHERE Salary > @MinSalary
OPTION (RECOMPILE);

-- Optimize for specific value
SELECT * FROM Orders
WHERE CustomerID = @CustomerID
OPTION (OPTIMIZE FOR (@CustomerID = 100));

-- Return first 100 rows quickly
SELECT * FROM LargeTable
WHERE Category = 'Electronics'
OPTION (FAST 100);

-- Combine multiple hints
SELECT e.* 
FROM Employee e WITH (NOLOCK, INDEX(IX_Employee_Department))
WHERE e.Department = 'Sales'
OPTION (MAXDOP 4, RECOMPILE);

-- Join hints
SELECT e.*, d.*
FROM Employee e
INNER LOOP JOIN Department d ON e.DepartmentID = d.DepartmentID;
-- Forces LOOP join instead of HASH or MERGE

-- When to use hints
-- Use cases:
-- - Known optimizer issue
-- - Specific performance requirement
-- - Troubleshooting
-- - Temporary fix (plan to correct root cause)

-- Caution: Hints can hurt more than help
-- Bad example: Forcing wrong index
SELECT * FROM Employee WITH (INDEX(IX_Wrong_Index))
WHERE EmployeeID = 100;  -- May be slower than clustered index
```

---

### Q142: What is a SARGable Query?

**Answer:**

SARGable (Search ARGument able) refers to query predicates written in a way that allows the SQL Server query optimizer to use indexes efficiently for searching. A SARGable predicate compares a bare column (without functions or expressions) to a constant value, enabling index seeks. Non-SARGable predicates wrap columns in functions or use leading wildcards, forcing index or table scans. Writing SARGable queries is crucial for performance - avoid functions on indexed columns, use proper date ranges instead of functions like YEAR(), and avoid leading wildcards in LIKE. The optimizer can only use indexes when the column appears unmodified in the WHERE clause.

**SARGable Characteristics:**
- Column compared directly to value
- No functions on column
- Allows index seek
- Better performance

**Non-SARGable Patterns:**
- Functions on columns: `YEAR(DateColumn) = 2024`
- Calculations: `Salary * 1.1 > 50000`
- Leading wildcards: `Name LIKE '%Smith'`
- Type conversions (implicit)

```sql
-- Non-SARGable examples (BAD)
-- Function on column
SELECT * FROM Employee WHERE YEAR(HireDate) = 2024;  -- Index scan

-- Calculation on column
SELECT * FROM Employee WHERE Salary * 1.1 > 50000;  -- Index scan

-- Leading wildcard
SELECT * FROM Employee WHERE EmployeeName LIKE '%Smith';  -- Index scan

-- UPPER/LOWER on column
SELECT * FROM Employee WHERE UPPER(LastName) = 'SMITH';  -- Index scan

-- Calculation on date
SELECT * FROM Orders WHERE DATEADD(DAY, 30, OrderDate) > GETDATE();  -- Scan

-- SARGable alternatives (GOOD)
-- Direct date range
SELECT * FROM Employee 
WHERE HireDate >= '2024-01-01' AND HireDate < '2025-01-01';  -- Index seek

-- Move calculation to constant
SELECT * FROM Employee WHERE Salary > 50000 / 1.1;  -- Index seek

-- Trailing wildcard
SELECT * FROM Employee WHERE EmployeeName LIKE 'Smith%';  -- Index seek

-- Case-insensitive collation or indexed computed column
SELECT * FROM Employee WHERE LastName = 'Smith';  -- Index seek

-- Move calculation to right side
SELECT * FROM Orders WHERE OrderDate > DATEADD(DAY, -30, GETDATE());  -- Seek

-- Comparison examples
-- Non-SARGable
WHERE CAST(EmployeeID AS VARCHAR) = '100'  -- Type conversion
WHERE EmployeeID + 1 = 101  -- Calculation
WHERE ISNULL(ManagerID, 0) = 0  -- Function

-- SARGable
WHERE EmployeeID = 100  -- Direct comparison
WHERE EmployeeID = 101 - 1  -- Calculation on constant
WHERE ManagerID IS NULL  -- Direct NULL check

-- Date handling
-- Non-SARGable
WHERE YEAR(OrderDate) = 2024 AND MONTH(OrderDate) = 12

-- SARGable
WHERE OrderDate >= '2024-12-01' AND OrderDate < '2025-01-01'

-- Best practices
-- Always compare bare column to value/expression
-- Move functions/calculations to the constant side
-- Use proper date ranges
-- Avoid leading wildcards when possible
```

---

### Q143: What is Query Cost Analysis?

**Answer:**

Query cost analysis evaluates the resources required to execute a query, measured in estimated I/O, CPU, and memory usage displayed in execution plans. SQL Server assigns costs to each operation (seek, scan, join, sort) as percentages of the total query or batch cost. Analyzing costs helps identify expensive operations, compare alternative queries, and optimize bottlenecks. Execution plans show estimated vs actual costs - large discrepancies indicate statistics issues. Focus on highest-cost operations first when optimizing. Actual execution plans provide real resource usage while estimated plans show optimizer's predictions.

**Cost Components:**
- **I/O Cost:** Disk reads/writes
- **CPU Cost:** Processing operations
- **Memory:** Sort, hash operations
- **Subtree Cost:** Cumulative operation cost

**Analysis Tools:**
- Graphical execution plans (SSMS)
- SET STATISTICS IO/TIME
- sys.dm_exec_query_stats DMV
- Query Store

```sql
-- View estimated cost (no execution)
SET SHOWPLAN_XML ON;
GO
SELECT e.*, d.*
FROM Employee e
INNER JOIN Department d ON e.DepartmentID = d.DepartmentID
WHERE e.Salary > 50000;
GO
SET SHOWPLAN_XML OFF;

-- Get detailed I/O and time statistics
SET STATISTICS IO ON;
SET STATISTICS TIME ON;

SELECT * FROM Employee WHERE Department = 'Sales';

SET STATISTICS IO OFF;
SET STATISTICS TIME OFF;

-- Find expensive queries
SELECT TOP 10
    qs.execution_count,
    qs.total_worker_time / 1000000.0 AS total_cpu_sec,
    qs.total_elapsed_time / 1000000.0 AS total_elapsed_sec,
    qs.total_logical_reads,
    qs.total_logical_writes,
    SUBSTRING(qt.text, (qs.statement_start_offset/2)+1,
        ((CASE qs.statement_end_offset
            WHEN -1 THEN DATALENGTH(qt.text)
            ELSE qs.statement_end_offset
        END - qs.statement_start_offset)/2) + 1) AS query_text
FROM sys.dm_exec_query_stats qs
CROSS APPLY sys.dm_exec_sql_text(qs.sql_handle) qt
ORDER BY qs.total_worker_time DESC;

-- Query cost comparison
-- Option 1: Subquery
SELECT * FROM Employee
WHERE DepartmentID IN (SELECT DepartmentID FROM Department WHERE Location = 'NY');

-- Option 2: JOIN (usually better)
SELECT DISTINCT e.*
FROM Employee e
INNER JOIN Department d ON e.DepartmentID = d.DepartmentID
WHERE d.Location = 'NY';

-- Analyze cost difference in execution plan

-- Cost analysis from execution plan
-- Look for:
-- - Table scans (high cost)
-- - Missing index suggestions
-- - High-cost joins
-- - Expensive sorts
-- - Key lookups

-- Example: High cost operation
SELECT * FROM Orders
WHERE YEAR(OrderDate) = 2024  -- Non-SARGable, high cost scan
ORDER BY TotalAmount DESC;    -- Expensive sort without index

-- Optimized version
CREATE INDEX IX_Orders_Date_Amount ON Orders(OrderDate, TotalAmount);

SELECT * FROM Orders
WHERE OrderDate >= '2024-01-01' AND OrderDate < '2025-01-01'
ORDER BY TotalAmount DESC;  -- Lower cost with proper index
```

---

### Q144: What is Parallel Query Execution?

**Answer:**

Parallel query execution splits a query into multiple tasks that run simultaneously across multiple CPU cores, reducing execution time for large data operations like scans, sorts, and aggregations. SQL Server automatically determines parallelism based on query cost threshold, available processors, and server load. MAXDOP (Maximum Degree of Parallelism) setting controls how many processors a query can use. While parallelism speeds up individual queries, too much can hurt overall throughput. Configure server-level MAXDOP (typically number of cores or 8, whichever is less) and use query-level hints for specific needs.

**Key Concepts:**
- Distributes work across multiple CPUs
- Automatic based on cost threshold
- Controlled by MAXDOP setting
- Best for large table scans/aggregations
- Overhead for small queries

**When Parallelism Occurs:**
- Query cost exceeds threshold (default 5)
- Multiple processors available
- Server not at maximum workers
- Operations support parallelism (scans, joins, sorts)

**MAXDOP Guidelines:**
- Single CPU: MAXDOP = 1 (no parallelism)
- 8 or fewer cores: MAXDOP = number of cores
- More than 8 cores: MAXDOP = 8
- OLTP: Lower MAXDOP (2-4)
- OLAP/Reporting: Higher MAXDOP

```sql
-- View current MAXDOP setting
SELECT value_in_use FROM sys.configurations WHERE name = 'max degree of parallelism';

-- Set server-wide MAXDOP
EXEC sp_configure 'max degree of parallelism', 4;
RECONFIGURE;

-- Query-level MAXDOP hint
SELECT * FROM LargeTable
WHERE Category = 'Electronics'
OPTION (MAXDOP 2);  -- Use max 2 processors

-- Disable parallelism for specific query
SELECT * FROM Employee
WHERE Department = 'Sales'
OPTION (MAXDOP 1);

-- View parallel execution in plan
SET STATISTICS PROFILE ON;
SELECT COUNT(*) FROM LargeTable;
SET STATISTICS PROFILE OFF;
-- Look for "Parallelism (Gather Streams)" operator

-- Cost threshold for parallelism
EXEC sp_configure 'cost threshold for parallelism';  -- Default: 5
EXEC sp_configure 'cost threshold for parallelism', 50;  -- Increase threshold
RECONFIGURE;

-- Monitor parallelism
SELECT 
    query_plan,
    execution_count,
    CAST(query_plan AS XML).value('(//RelOp/@Parallel)[1]', 'INT') AS IsParallel
FROM sys.dm_exec_cached_plans cp
CROSS APPLY sys.dm_exec_query_plan(cp.plan_handle) qp
WHERE CAST(query_plan AS XML).value('(//RelOp/@Parallel)[1]', 'INT') = 1;

-- Example: Parallel aggregation
SELECT 
    Department,
    COUNT(*) AS EmployeeCount,
    AVG(Salary) AS AvgSalary
FROM Employee
GROUP BY Department
OPTION (MAXDOP 4);  -- Can use up to 4 processors

-- When parallelism helps
-- Large table scans
SELECT * FROM HugeTable WHERE Category = 'A';

-- Large aggregations
SELECT Category, SUM(Amount) FROM LargeOrders GROUP BY Category;

-- When to limit parallelism
-- OLTP queries (short, frequent)
-- Concurrent user queries
-- Resource contention scenarios
```

---

### Q145: What is Parameter Sniffing?

**Answer:**

Parameter sniffing occurs when SQL Server creates an execution plan based on the first parameter value passed to a stored procedure or parameterized query, then reuses that plan for subsequent executions regardless of parameter values. This optimization works well when parameters have similar data distribution but causes performance problems when different parameter values have vastly different data volumes (e.g., one customer has 10 orders, another has 10,000). Solutions include using OPTION (RECOMPILE) to generate new plans each time, OPTION (OPTIMIZE FOR) to specify typical values, or local variables to prevent sniffing.

**How It Works:**
1. First execution creates plan for that parameter
2. Plan cached and reused for all executions
3. Good when data distribution is similar
4. Bad when distribution varies widely

**Problems Caused:**
- Plan optimized for first value
- Subsequent different values use wrong plan
- Performance degradation for some values
- Unpredictable query performance

**Solutions:**
- OPTION (RECOMPILE) - New plan each time
- OPTION (OPTIMIZE FOR) - Specify typical value
- Local variables - Prevent sniffing
- Plan guides - Control plan selection

```sql
-- Problem demonstration
CREATE PROCEDURE GetOrders (@CustomerID INT)
AS
BEGIN
    SELECT * FROM Orders WHERE CustomerID = @CustomerID;
END;

-- First call: CustomerID 1 has 10 orders (index seek)
EXEC GetOrders 1;  -- Fast, plan cached

-- Later call: CustomerID 100 has 50,000 orders (table scan better)
EXEC GetOrders 100;  -- Slow! Using seek plan for many rows

-- Solution 1: RECOMPILE (new plan each time)
CREATE PROCEDURE GetOrders (@CustomerID INT)
AS
BEGIN
    SELECT * FROM Orders 
    WHERE CustomerID = @CustomerID
    OPTION (RECOMPILE);  -- New plan every execution
END;

-- Solution 2: OPTIMIZE FOR (optimize for typical value)
CREATE PROCEDURE GetOrders (@CustomerID INT)
AS
BEGIN
    SELECT * FROM Orders 
    WHERE CustomerID = @CustomerID
    OPTION (OPTIMIZE FOR (@CustomerID = 50));  -- Optimize for customer 50
END;

-- Solution 3: OPTIMIZE FOR UNKNOWN (use average statistics)
CREATE PROCEDURE GetOrders (@CustomerID INT)
AS
BEGIN
    SELECT * FROM Orders 
    WHERE CustomerID = @CustomerID
    OPTION (OPTIMIZE FOR (@CustomerID UNKNOWN));
END;

-- Solution 4: Local variable (prevents sniffing)
CREATE PROCEDURE GetOrders (@CustomerID INT)
AS
BEGIN
    DECLARE @LocalCustomerID INT = @CustomerID;  -- Copy to local variable
    SELECT * FROM Orders WHERE CustomerID = @LocalCustomerID;
    -- Uses average statistics, not sniffed value
END;

-- Solution 5: Dynamic SQL
CREATE PROCEDURE GetOrders (@CustomerID INT)
AS
BEGIN
    DECLARE @SQL NVARCHAR(MAX) = N'SELECT * FROM Orders WHERE CustomerID = @CustomerID';
    EXEC sp_executesql @SQL, N'@CustomerID INT', @CustomerID;
    -- New plan for each parameter value
END;

-- Clear plan cache for testing
DBCC FREEPROCCACHE;

-- View cached plans
SELECT 
    cp.plan_handle,
    st.text,
    cp.usecounts,
    cp.size_in_bytes
FROM sys.dm_exec_cached_plans cp
CROSS APPLY sys.dm_exec_sql_text(cp.plan_handle) st
WHERE st.text LIKE '%GetOrders%';

-- When parameter sniff is good
-- Similar data distribution
CREATE PROCEDURE GetProductsByCategory (@Category VARCHAR(50))
AS
BEGIN
    SELECT * FROM Products WHERE Category = @Category;
    -- All categories have similar row counts - sniffing OK
END;

-- When parameter sniffing is bad
-- Skewed data distribution
CREATE PROCEDURE GetCustomerOrders (@CustomerID INT)
AS
BEGIN
    SELECT * FROM Orders WHERE CustomerID = @CustomerID;
    -- Customer 1: 5 orders, Customer 100: 50,000 orders - sniffing BAD
END;
```


## Section 12: Advanced Topics

### Q146: What is a Cursor?

**Answer:**

A cursor is a database object that allows row-by-row processing of query results, enabling procedural iteration through a result set one record at a time. Unlike set-based operations which process all rows at once, cursors fetch and process individual rows sequentially. While useful for certain scenarios requiring row-level logic or external processing, cursors are generally slower and more resource-intensive than set-based operations. SQL Server supports different cursor types: FORWARD_ONLY (default, fastest), STATIC (snapshot), DYNAMIC (reflects changes), and KEYSET (detects some changes). Use cursors only when set-based alternatives are impossible.

**Cursor Types:**
- **FORWARD_ONLY:** Scrolls forward only, fastest
- **STATIC:** Snapshot, doesn't reflect changes
- **DYNAMIC:** Reflects all changes, slowest
- **KEYSET:** Detects updates/deletes, not inserts

**Lifecycle:**
1. DECLARE cursor
2. OPEN cursor
3. FETCH rows (loop)
4. CLOSE cursor
5. DEALLOCATE cursor

**When to Avoid:**
- Set-based operations are usually faster
- High overhead and resource usage
- Locks held during iteration

```sql
-- Basic cursor example
DECLARE @EmployeeID INT, @EmployeeName VARCHAR(100), @Salary DECIMAL(10,2);

-- 1. Declare cursor
DECLARE EmployeeCursor CURSOR FOR
SELECT EmployeeID, EmployeeName, Salary
FROM Employee
WHERE Department = 'Sales';

-- 2. Open cursor
OPEN EmployeeCursor;

-- 3. Fetch first row
FETCH NEXT FROM EmployeeCursor INTO @EmployeeID, @EmployeeName, @Salary;

-- 4. Loop through rows
WHILE @@FETCH_STATUS = 0
BEGIN
    -- Process each row
    PRINT 'Employee: ' + @EmployeeName + ', Salary: ' + CAST(@Salary AS VARCHAR);
    
    -- Fetch next row
    FETCH NEXT FROM EmployeeCursor INTO @EmployeeID, @EmployeeName, @Salary;
END;

-- 5. Close and deallocate
CLOSE EmployeeCursor;
DEALLOCATE EmployeeCursor;

-- Cursor types comparison
-- FORWARD_ONLY (default, fastest)
DECLARE cur1 CURSOR FORWARD_ONLY FOR SELECT * FROM Employee;

-- STATIC (snapshot at open time)
DECLARE cur2 CURSOR STATIC FOR SELECT * FROM Employee;

-- DYNAMIC (reflects all changes)
DECLARE cur3 CURSOR DYNAMIC FOR SELECT * FROM Employee;

-- KEYSET (detects updates/deletes)
DECLARE cur4 CURSOR KEYSET FOR SELECT * FROM Employee;

-- Cursor with UPDATE
DECLARE UpdateCursor CURSOR FOR
SELECT EmployeeID, Salary FROM Employee WHERE Department = 'IT'
FOR UPDATE OF Salary;  -- Allows updates

OPEN UpdateCursor;
FETCH NEXT FROM UpdateCursor INTO @EmployeeID, @Salary;

WHILE @@FETCH_STATUS = 0
BEGIN
    -- Update current row
    UPDATE Employee 
    SET Salary = Salary * 1.10 
    WHERE CURRENT OF UpdateCursor;
    
    FETCH NEXT FROM UpdateCursor INTO @EmployeeID, @Salary;
END;

CLOSE UpdateCursor;
DEALLOCATE UpdateCursor;

-- Better alternative: Set-based operation
-- Instead of cursor above, use:
UPDATE Employee 
SET Salary = Salary * 1.10 
WHERE Department = 'IT';
-- Much faster!
```

---

### Q149: What is a CTE (Common Table Expression)?

**Answer:**

A Common Table Expression (CTE) is a temporary named result set defined within a query using the WITH clause, providing a way to write more readable and maintainable queries by breaking complex logic into named sub-queries. CTEs exist only during query execution and can be referenced multiple times within the same query. They support recursion for hierarchical data like organizational charts or file systems. Benefits include improved readability over subqueries, ability to reference the CTE multiple times, and support for recursive queries. CTEs are particularly useful for simplifying complex joins, breaking down multi-step calculations, and working with hierarchical data structures.

**Types:**
- **Non-Recursive:** Simple named subqueries
- **Recursive:** Self-referencing for hierarchical data

**Benefits:**
- Improved query readability
- Can reference CTE multiple times
- Supports recursion
- Better than subqueries for complex logic

**Limitations:**
- Exists only during query execution
- Cannot be indexed
- Not materialized (re-evaluated each reference)

```sql
-- Basic CTE
WITH EmployeeCTE AS (
    SELECT EmployeeID, EmployeeName, Salary, Department
    FROM Employee
    WHERE Salary > 50000
)
SELECT * FROM EmployeeCTE WHERE Department = 'IT';

-- Multiple CTEs
WITH 
SalesCTE AS (
    SELECT EmployeeID, SUM(SalesAmount) AS TotalSales
    FROM Sales
    GROUP BY EmployeeID
),
TopPerformers AS (
    SELECT EmployeeID, TotalSales
    FROM SalesCTE
    WHERE TotalSales > 100000
)
SELECT e.EmployeeName, t.TotalSales
FROM Employee e
INNER JOIN TopPerformers t ON e.EmployeeID = t.EmployeeID;

-- Recursive CTE (organizational hierarchy)
WITH EmployeeHierarchy AS (
    -- Anchor: Top-level employees (no manager)
    SELECT EmployeeID, EmployeeName, ManagerID, 0 AS Level
    FROM Employee
    WHERE ManagerID IS NULL
    
    UNION ALL
    
    -- Recursive: Employees reporting to previous level
    SELECT e.EmployeeID, e.EmployeeName, e.ManagerID, eh.Level + 1
    FROM Employee e
    INNER JOIN EmployeeHierarchy eh ON e.ManagerID = eh.EmployeeID
)
SELECT 
    REPLICATE('  ', Level) + EmployeeName AS HierarchyView,
    Level
FROM EmployeeHierarchy
ORDER BY Level, EmployeeName;

-- Recursive CTE with MAXRECURSION
WITH NumberSeries AS (
    SELECT 1 AS Num
    UNION ALL
    SELECT Num + 1 FROM NumberSeries WHERE Num < 100
)
SELECT * FROM NumberSeries
OPTION (MAXRECURSION 100);  -- Prevent infinite recursion

-- CTE for running totals
WITH OrderTotals AS (
    SELECT 
        OrderID,
        OrderDate,
        Amount,
        SUM(Amount) OVER (ORDER BY OrderDate) AS RunningTotal
    FROM Orders
)
SELECT * FROM OrderTotals;

-- Using CTE multiple times
WITH DepartmentStats AS (
    SELECT 
        Department,
        AVG(Salary) AS AvgSalary,
        COUNT(*) AS EmployeeCount
    FROM Employee
    GROUP BY Department
)
SELECT 
    d1.Department,
    d1.AvgSalary,
    d1.EmployeeCount,
    d2.Department AS ComparedTo,
    d2.AvgSalary AS ComparedAvg
FROM DepartmentStats d1
CROSS JOIN DepartmentStats d2
WHERE d1.Department != d2.Department;
```

---

### Q150: Difference between CTE and Subquery?

**Answer:**

CTEs and subqueries both create temporary result sets, but CTEs offer better readability, can be referenced multiple times in the same query, and support recursion. Subqueries are embedded within the main query and must be repeated if needed multiple times. CTEs are defined once with WITH clause and referenced by name, making complex queries more maintainable. Performance is generally similar, but CTEs can sometimes be more efficient when referenced multiple times. CTEs support recursive queries while subqueries don't. Use CTEs for complex multi-step logic and hierarchical data; use subqueries for simple one-time operations.

**Key Differences:**

| Feature | CTE | Subquery |
|---------|-----|----------|
| Definition | WITH clause at start | Inline in query |
| Reusability | Can reference multiple times | Must repeat |
| Recursion | Supported | Not supported |
| Readability | Better for complex queries | OK for simple cases |
| Performance | Similar,  better if reused | Similar |

```sql
-- Subquery approach (repeated logic)
SELECT * FROM Employee
WHERE Salary > (SELECT AVG(Salary) FROM Employee)
  AND Department IN (
      SELECT Department FROM Employee GROUP BY Department HAVING COUNT(*) > 5
  );

-- CTE approach (cleaner, reusable)
WITH 
AvgSalaryCTE AS (
    SELECT AVG(Salary) AS AvgSal FROM Employee
),
LargeDepartments AS (
    SELECT Department FROM Employee 
    GROUP BY Department HAVING COUNT(*) > 5
)
SELECT e.*
FROM Employee e
CROSS JOIN AvgSalaryCTE avg
WHERE e.Salary > avg.AvgSal
  AND e.Department IN (SELECT Department FROM LargeDepartments);

-- Subquery referenced multiple times (inefficient)
SELECT 
    (SELECT AVG(Salary) FROM Employee) AS AvgSalary,
    (SELECT MAX(Salary) FROM Employee) AS MaxSalary,
    (SELECT MIN(Salary) FROM Employee) AS MinSalary
FROM Employee
WHERE Salary > (SELECT AVG(Salary) FROM Employee);  -- Repeated!

-- CTE referenced once, defined once (efficient)
WITH SalaryStats AS (
    SELECT 
        AVG(Salary) AS AvgSalary,
        MAX(Salary) AS MaxSalary,
        MIN(Salary) AS MinSalary
    FROM Employee
)
SELECT e.*, s.*
FROM Employee e
CROSS JOIN SalaryStats s
WHERE e.Salary > s.AvgSalary;

-- Recursion: Only CTE supports this
-- Organizational hierarchy with CTE
WITH OrgChart AS (
    SELECT EmployeeID, EmployeeName, ManagerID, 1 AS Level
    FROM Employee WHERE ManagerID IS NULL
    UNION ALL
    SELECT e.EmployeeID, e.EmployeeName, e.ManagerID, o.Level + 1
    FROM Employee e
    INNER JOIN OrgChart o ON e.ManagerID = o.EmployeeID
)
SELECT * FROM OrgChart;

-- Cannot do this with subquery!

-- When to use each
-- Use CTE when:
-- - Complex multi-step logic
-- - Need to reference result multiple times
-- - Recursive queries
-- - Improved readability important

-- Use Subquery when:
-- - Simple one-time use
-- - Single column/value needed
-- - Inline filter
```

---

### Q147: What are different types of Cursors?

**Answer:**

SQL Server provides four cursor types based on data sensitivity and scrolling capabilities. FORWARD_ONLY cursors scroll in one direction only, are fastest, and use minimal resources - the default type. STATIC cursors create a snapshot of data in tempdb at open time, don't reflect changes made by others, allow scrolling but use more memory. DYNAMIC cursors reflect all changes immediately, are slowest, and most resource-intensive but always show current data. KEYSET cursors use keys to detect updates and deletes to existing rows but don't show new inserts, balance between static and dynamic. Choose based on requirements: FORWARD_ONLY for speed, DYNAMIC for real-time data, STATIC for consistent snapshots.

**Cursor Types:**

| Type | Scrolling | Reflects Changes | Performance | Use Case |
|------|-----------|------------------|-------------|----------|
| FORWARD_ONLY | Forward only | No (snapshot at fetch) | Fastest | One-pass processing |
| STATIC | Both directions | No (snapshot at open) | Slower | Consistent data view |
| DYNAMIC | Both directions | Yes (all changes) | Slowest | Real-time data |
| KEYSET | Both directions | Partial (updates/deletes) | Medium | Detect changes to rows |

```sql
-- FORWARD_ONLY Cursor (default, fastest)
DECLARE ForwardCursor CURSOR FORWARD_ONLY FOR
SELECT EmployeeID, EmployeeName FROM Employee;

OPEN ForwardCursor;
DECLARE @ID INT, @Name VARCHAR(100);

FETCH NEXT FROM ForwardCursor INTO @ID, @Name;
WHILE @@FETCH_STATUS =  0
BEGIN
    PRINT @Name;
    FETCH NEXT FROM ForwardCursor INTO @ID, @Name;  -- Only forward
    -- FETCH PRIOR FROM ForwardCursor... -- ERROR: Not supported
END;

CLOSE ForwardCursor;
DEALLOCATE ForwardCursor;

-- STATIC Cursor (snapshot)
DECLARE StaticCursor CURSOR STATIC FOR
SELECT EmployeeID, EmployeeName, Salary FROM Employee;

OPEN StaticCursor;

-- Changes by other users not visible
-- Data copied to tempdb at OPEN time
FETCH NEXT FROM StaticCursor INTO @ID, @Name, @Salary;
FETCH PRIOR FROM StaticCursor INTO @ID, @Name, @Salary;  -- Can scroll back
FETCH FIRST FROM StaticCursor INTO @ID, @Name, @Salary;  -- Jump to first
FETCH LAST FROM StaticCursor INTO @ID, @Name, @Salary;   -- Jump to last

CLOSE StaticCursor;
DEALLOCATE StaticCursor;

-- DYNAMIC Cursor (reflects all changes)
DECLARE DynamicCursor CURSOR DYNAMIC FOR
SELECT EmployeeID, EmployeeName FROM Employee;

OPEN DynamicCursor;

-- Sees INSERT, UPDATE, DELETE by other users
FETCH NEXT FROM DynamicCursor INTO @ID, @Name;
-- If another user inserts/updates/delete, this cursor sees it
FETCH NEXT FROM DynamicCursor INTO @ID, @Name;

CLOSE DynamicCursor;
DEALLOCATE DynamicCursor;

-- KEYSET Cursor (detects updates/deletes, not inserts)
DECLARE KeysetCursor CURSOR KEYSET FOR
SELECT EmployeeID, EmployeeName FROM Employee;

OPEN KeysetCursor;

-- Sees UPDATE and DELETE by other users
-- Does NOT see INSERT by other users
FETCH NEXT FROM KeysetCursor INTO @ID, @Name;

CLOSE KeysetCursor;
DEALLOCATE KeysetCursor;

-- Comparison example
DECLARE @CursorType VARCHAR(20) = 'FORWARD_ONLY';

IF @CursorType = 'FORWARD_ONLY'
    DECLARE cur CURSOR FORWARD_ONLY FOR SELECT * FROM Employee;
ELSE IF @CursorType = 'STATIC'
    DECLARE cur CURSOR STATIC FOR SELECT * FROM Employee;
ELSE IF @CursorType = 'DYNAMIC'
    DECLARE cur CURSOR DYNAMIC FOR SELECT * FROM Employee;
ELSE
    DECLARE cur CURSOR KEYSET FOR SELECT * FROM Employee;
```

---

### Q148: When to use Cursors?

**Answer:**

Use cursors only when set-based operations are impossible or impractical, such as calling external procedures for each row, complex row-by-row calculations with inter-row dependencies, or administrative tasks requiring sequential processing. Valid scenarios include calling stored procedures that can't accept sets, interacting with external APIs row-by-row, complex auditing requiring row context, or migration scripts with conditional logic per row. However, 95% of cursor use cases can be replaced with faster set-based operations using JOINs, UPDATE with FROM clause, or window functions. Always try set-based approach first before resorting to cursors.

**Valid Use Cases:**
- Calling stored procedures for each row
- External API calls per record
- Complex administrative tasks
- Row-by-row validation with dependencies
- Some migration/ETL scenarios

**Avoid Cursors For:**
- Simple UPDATE/DELETE (use set-based)
- Aggregations (use GROUP BY)
- Running totals (use window functions)
- Conditional updates (use CASE in UPDATE)

**Alternatives:**
- JOINs instead of nested cursor loops
- Window functions for running calculations
- UPDATE...FROM for dependent updates
- MERGE for complex INSERT/UPDATE logic

```sql
-- BAD: Using cursor for simple update
DECLARE UpdateCursor CURSOR FOR SELECT EmployeeID, Salary FROM Employee;
OPEN UpdateCursor;

DECLARE @ID INT, @Salary DECIMAL(10,2);
FETCH NEXT FROM UpdateCursor INTO @ID, @Salary;

WHILE @@FETCH_STATUS = 0
BEGIN
    UPDATE Employee SET Salary = @Salary * 1.10 WHERE EmployeeID = @ID;
    FETCH NEXT FROM UpdateCursor INTO @ID, @Salary;
END;

CLOSE UpdateCursor;
DEALLOCATE UpdateCursor;

-- GOOD: Set-based update
UPDATE Employee SET Salary = Salary * 1.10;

-- BAD: Cursor for running total
DECLARE TotalCursor CURSOR FOR SELECT OrderID, Amount FROM Orders ORDER BY OrderDate;
OPEN TotalCursor;

DECLARE @OrderID INT, @Amount DECIMAL(10,2), @RunningTotal DECIMAL(10,2) = 0;
FETCH NEXT FROM TotalCursor INTO @OrderID, @Amount;

WHILE @@FETCH_STATUS = 0
BEGIN
    SET @RunningTotal = @RunningTotal + @Amount;
    UPDATE Orders SET RunningTotal = @RunningTotal WHERE OrderID = @OrderID;
    FETCH NEXT FROM TotalCursor INTO @OrderID, @Amount;
END;

CLOSE TotalCursor;
DEALLOCATE TotalCursor;

-- GOOD: Window function
UPDATE Orders
SET RunningTotal = (
    SELECT SUM(Amount) 
    FROM Orders o2 
    WHERE o2.OrderDate <= Orders.OrderDate
);
-- Or use SUM() OVER()

-- VALID Cursor Use: Calling procedure for each row
DECLARE ProcessCursor CURSOR FOR
SELECT CustomerID, OrderID, Amount FROM Orders WHERE Status = 'Pending';

OPEN ProcessCursor;

DECLARE @CustomerID INT, @OrderID INT, @Amount DECIMAL(10,2);
FETCH NEXT FROM ProcessCursor INTO @CustomerID, @OrderID, @Amount;

WHILE @@FETCH_STATUS = 0
BEGIN
    -- Call external procedure that can't handle sets
    EXEC ProcessPayment @CustomerID, @OrderID, @Amount;
    
    -- Or call external API
    -- EXEC sp_SendEmailNotification @CustomerID, @OrderID;
    
    FETCH NEXT FROM ProcessCursor INTO @CustomerID, @OrderID, @Amount;
END;

CLOSE ProcessCursor;
DEALLOCATE ProcessCursor;

-- VALID: Complex row logic with dependencies
DECLARE @PrevValue INT = 0;

DECLARE SequenceCursor CURSOR FOR
SELECT ID, Value FROM DataTable ORDER BY ID;

OPEN SequenceCursor;

DECLARE @ID INT, @Value INT;
FETCH NEXT FROM SequenceCursor INTO @ID, @Value;

WHILE @@FETCH_STATUS = 0
BEGIN
    -- Complex logic depending on previous row
    IF @Value > @PrevValue * 2
        UPDATE DataTable SET Flag = 'Spike' WHERE ID = @ID;
    
    SET @PrevValue = @Value;
    FETCH NEXT FROM SequenceCursor INTO @ID, @Value;
END;

CLOSE SequenceCursor;
DEALLOCATE SequenceCursor;
```

---

### Q151: What are Temporary Tables?

**Answer:**

Temporary tables are temporary database objects that store data during a session or procedure execution, automatically dropped when out of scope. Local temp tables (#tablename) are session-specific and visible only to the creating session, dropped when session ends. Global temp tables (##tablename) are visible to all sessions and dropped when all referencing sessions disconnect. Temp tables are  created in tempdb, support indexes and constraints, and are faster than table variables for large datasets. Use for complex intermediate results, staging data in ETL processes, or breaking complex queries into steps. Unlike CTEs or subqueries, temp tables physically store data and can be indexed.

**Types:**
- **Local (#temp):** Session-scoped, auto-dropped at session end
- **Global (##temp):** All sessions, dropped when all disconnect
- **Table Variables (@table):** Batch-scoped, smaller datasets

**Characteristics:**
- Created in tempdb database
- Support indexes and constraints
- Statistics maintained
- Can be referenced multiple times
- Better than table variables for large data

**When to Use:**
- Complex multi-step procedures
- Staging data for ETL
- Breaking complex queries
- Large intermediate results
- Need indexes on temporary data

```sql
-- Local Temporary Table (#temp)
CREATE TABLE #TempEmployee (
    EmployeeID INT PRIMARY KEY,
    EmployeeName VARCHAR(100),
    Salary DECIMAL(10,2),
    Department VARCHAR(50)
);

-- Insert data
INSERT INTO #TempEmployee
SELECT EmployeeID, EmployeeName, Salary, Department
FROM Employee
WHERE  Salary > 50000;

-- Create index
CREATE INDEX IX_TempEmp_Dept ON #TempEmployee(Department);

-- Use multiple times
SELECT * FROM #TempEmployee WHERE Department = 'IT';
SELECT AVG(Salary) FROM #TempEmployee;

-- Automatically dropped at session end
-- Or explicit drop
DROP TABLE #TempEmployee;

-- Global Temporary Table (##temp)
CREATE TABLE ##GlobalTemp (
    ID INT,
    Value VARCHAR(100)
);

-- Visible to all sessions
-- Another session can query:
SELECT * FROM ##GlobalTemp;

-- Dropped when all referencing sessions disconnect
DROP TABLE ##GlobalTemp;

-- Table Variable (alternative for small data)
DECLARE @TableVar TABLE (
    EmployeeID INT,
    EmployeeName VARCHAR(100)
);

INSERT INTO @TableVar SELECT EmployeeID, EmployeeName FROM Employee;
SELECT * FROM @TableVar;
-- Auto-dropped at batch end

-- Practical example: Multi-step processing
-- Step 1: Get high performers
CREATE TABLE #HighPerformers (
    EmployeeID INT,
    TotalSales DECIMAL(10,2)
);

INSERT INTO #HighPerformers
SELECT EmployeeID, SUM(SalesAmount)
FROM Sales
WHERE SaleDate >= '2024-01-01'
GROUP BY EmployeeID
HAVING SUM(SalesAmount) > 100000;

-- Step 2: Join with employee details
SELECT e.EmployeeName, e.Department, h.TotalSales
FROM Employee e
INNER JOIN #HighPerformers h ON e.EmployeeID = h.EmployeeID;

-- Step 3: Calculate department averages
SELECT 
    e.Department,
    AVG(h.TotalSales) AS AvgDeptSales
FROM #HighPerformers h
JOIN Employee e ON h.EmployeeID = e.EmployeeID
GROUP BY e.Department;

DROP TABLE #HighPerformers;

-- Complex ETL example
CREATE TABLE #StagingData (
    ID INT IDENTITY(1,1),
    SourceID INT,
    DataValue VARCHAR(100),
    IsProcessed BIT DEFAULT 0
);

-- Load data
INSERT INTO #StagingData (SourceID, DataValue)
SELECT ID, Value FROM ExternalSource;

-- Process in batches
UPDATE TOP (1000) #StagingData
SET IsProcessed = 1
OUTPUT inserted.SourceID, inserted.DataValue
INTO FinalTable;

-- Continue until all processed
```

---

### Q152: Difference between Temp Table and Table Variable?

**Answer:**

Temp tables (#temp) and table variables (@table) both store temporary data, but differ in scope, performance, and features. Temp tables are created in tempdb with full DDL support including indexes, constraints, and statistics, visible throughout the session, and better for large datasets. Table variables are memory-optimized for small datasets, scoped to the batch or procedure, have no statistics (optimizer assumes 1 row), and cannot have explicit indexes beyond primary key/unique constraints. Use temp tables for large data (>100 rows), when indexes needed, or multi-statement processing. Use table variables for small datasets, simple operations, or when transaction log overhead should be minimized.

**Key Differences:**

| Feature | Temp Table (#temp) | Table Variable (@table) |
|---------|-------------------|------------------------|
| Scope | Session | Batch/Procedure |
| Location | tempdb (disk) | Memory then tempdb |
| Indexes | Yes, multiple | Only PK/Unique constraint |
| Statistics | Yes | No (assumes 1 row) |
| Size | Large datasets | Small datasets (<100 rows) |
| Transactions | Participates | Limited participation |
| Recompiles | Can cause | Reduces recompiles |

```sql
-- Temp Table
CREATE TABLE #TempOrders (
    OrderID INT PRIMARY KEY,
    CustomerID INT,
    Amount DECIMAL(10,2),
    OrderDate DATE
);

-- Create additional index
CREATE INDEX IX_TempOrders_Customer ON #TempOrders(CustomerID);

-- Statistics available
UPDATE STATISTICS #TempOrders;

-- Visible in entire session
INSERT INTO #TempOrders VALUES (1, 100, 500, '2024-01-01');
SELECT * FROM #TempOrders;  -- Works anywhere in session

DROP TABLE #TempOrders;

-- Table Variable
DECLARE @OrdersVar TABLE (
    OrderID INT PRIMARY KEY,  -- Only index allowed
    CustomerID INT,
    Amount DECIMAL(10,2),
    OrderDate DATE
);

-- Cannot create additional indexes
-- CREATE INDEX IX_Var... -- ERROR!

-- No statistics (optimizer assumes 1 row)
INSERT INTO @OrdersVar VALUES (1, 100, 500, '2024-01-01');
INSERT INTO @OrdersVar VALUES (2, 101, 300, '2024-01-02');

SELECT * FROM @OrdersVar;
-- Auto-dropped at end of batch

-- Performance comparison
-- Small dataset: Table Variable faster
DECLARE @SmallData TABLE (ID INT, Value VARCHAR(10));
INSERT INTO @SmallData VALUES (1, 'A'), (2, 'B'), (3, 'C');
SELECT * FROM @SmallData;  -- Fast

-- Large dataset: Temp Table better
CREATE TABLE #LargeData (ID INT, Value VARCHAR(10));
CREATE INDEX IX_LargeData ON #LargeData(ID);

INSERT INTO #LargeData
SELECT TOP 10000 ROW_NUMBER() OVER (ORDER BY (SELECT NULL)), 'Value'
FROM sys.objects a CROSS JOIN sys.objects b;

SELECT * FROM #LargeData WHERE ID BETWEEN 1000 AND 2000;  -- Uses index
DROP TABLE #LargeData;

-- Transaction behavior
BEGIN TRANSACTION;

-- Temp table participates in transaction
CREATE TABLE #TransTest (ID INT);
INSERT INTO #TransTest VALUES (1);
ROLLBACK;  -- #TransTest dropped

-- Table variable minimally affected by rollback
BEGIN TRANSACTION;
DECLARE @TransVar TABLE (ID INT);
INSERT INTO @TransVar VALUES (1);
ROLLBACK;  -- @TransVar still has data!
SELECT * FROM @TransVar;  -- Returns 1

-- When to use each
-- Use Temp Table when:
-- - Large datasets (>100 rows)
-- - Need indexes for performance
-- - Multi-statement processing
-- - Statistics needed

-- Use Table Variable when:
-- - Small datasets (<100 rows)
-- - Simple operations
-- - Minimize transaction log
-- - Avoid recompiles
```

---

### Q153: What is Dynamic SQL?

**Answer:**

Dynamic SQL is SQL code constructed and executed at runtime using string concatenation and EXEC or sp_executesql, allowing flexible query generation based on runtime conditions. Useful for building queries with variable table names, column lists, or search conditions determined at execution time. sp_executesql is preferred over EXEC as it supports parameterization preventing SQL injection and enables plan reuse. Critical to validate inputs and use parameters to prevent SQL injection attacks. Common uses include dynamic search filters, pivot queries with dynamic columns, and administrative scripts requiring variable object names.

**Execution Methods:**
- **EXEC():** Simple but no parameters, prone to SQL injection
- **sp_executesql:** Parameterized, safer, plan reuse

**Use Cases:**
- Dynamic search conditions
- Variable table/column names
- Dynamic pivot queries
- Building queries from metadata
- Administrative scripts

**Security:**
- Always use parameters (sp_executesql)
- Validate inputs
- Never concatenate user input directly
- Use QUOTENAME for identifiers

```sql
-- Basic Dynamic SQL with EXEC
DECLARE @SQL NVARCHAR(MAX);
SET @SQL = 'SELECT * FROM Employee WHERE Department = ''Sales''';
EXEC(@SQL);

-- Better: sp_executesql with parameters
DECLARE @SQL NVARCHAR(MAX);
DECLARE @Dept VARCHAR(50) = 'Sales';

SET @SQL = N'SELECT * FROM Employee WHERE Department = @Department';
EXEC sp_executesql @SQL, 
    N'@Department VARCHAR(50)',  -- Parameter definition
    @Dept;                        -- Parameter value

-- Dynamic table name (use QUOTENAME for safety)
DECLARE @TableName NVARCHAR(128) = 'Employee';
DECLARE @SQL NVARCHAR(MAX);

SET @SQL = N'SELECT * FROM ' + QUOTENAME(@TableName);
EXEC sp_executesql @SQL;

-- Dynamic search conditions
DECLARE @SearchName VARCHAR(100) = 'John';
DECLARE @SearchDept VARCHAR(50) = NULL;
DECLARE @SQL NVARCHAR(MAX) = N'SELECT * FROM Employee WHERE 1=1';

IF @SearchName IS NOT NULL
    SET @SQL = @SQL + N' AND EmployeeName LIKE @Name';
    
IF @SearchDept IS NOT NULL
    SET @SQL = @SQL + N' AND Department = @Dept';

EXEC sp_executesql @SQL,
    N'@Name VARCHAR(100), @Dept VARCHAR(50)',
    @SearchName, @SearchDept;

-- Dynamic column list
DECLARE @Columns NVARCHAR(MAX) = 'EmployeeID, EmployeeName, Salary';
DECLARE @SQL NVARCHAR(MAX);

SET @SQL = N'SELECT ' + @Columns + N' FROM Employee';
EXEC sp_executesql @SQL;

-- Dynamic ORDER BY
DECLARE @SortColumn VARCHAR(50) = 'Salary';
DECLARE @SortOrder VARCHAR(4) = 'DESC';
DECLARE @SQL NVARCHAR(MAX);

SET @SQL = N'SELECT * FROM Employee ORDER BY ' + QUOTENAME(@SortColumn) + N' ' + @SortOrder;
EXEC sp_executesql @SQL;

-- SQL Injection example (DANGEROUS - DON'T DO THIS)
DECLARE @UserInput VARCHAR(100) = 'Sales''; DROP TABLE Employee; --';
DECLARE @BadSQL NVARCHAR(MAX);

SET @BadSQL = 'SELECT * FROM Employee WHERE Department = ''' + @UserInput + '''';
-- EXEC(@BadSQL);  -- Would execute: ...WHERE Department = 'Sales'; DROP TABLE Employee; --'

-- Safe version with parameters
DECLARE @SafeSQL NVARCHAR(MAX);
SET @SafeSQL = N'SELECT * FROM Employee WHERE Department = @Dept';
EXEC sp_executesql @SafeSQL, N'@Dept VARCHAR(100)', @UserInput;
-- @UserInput treated as literal value, not executable code

-- Return output parameter
DECLARE @SQL NVARCHAR(MAX);
DECLARE @Count INT;

SET @SQL = N'SELECT @OutputCount = COUNT(*) FROM Employee WHERE Department = @Dept';
EXEC sp_executesql @SQL,
    N'@Dept VARCHAR(50), @OutputCount INT OUTPUT',
    'Sales', @Count OUTPUT;

SELECT @Count AS EmployeeCount;

-- Dynamic pivot
DECLARE @Columns NVARCHAR(MAX), @SQL NVARCHAR(MAX);

SELECT @Columns = STRING_AGG(QUOTENAME(Department), ', ')
FROM (SELECT DISTINCT Department FROM Employee) AS Depts;

SET @SQL = N'
SELECT * FROM (
    SELECT Department, Salary FROM Employee
) AS Source
PIVOT (
    AVG(Salary) FOR Department IN (' + @Columns + N')
) AS PivotTable';

EXEC sp_executesql @SQL;
```

---

### Q154: What is SQL Injection and how to prevent it?

**Answer:**

SQL Injection is a security vulnerability where attackers inject malicious SQL code through input fields, potentially accessing, modifying, or deleting data. Occurs when user input is directly concatenated into SQL statements without validation or parameterization. Prevention requires using parameterized queries (sp_executesql with parameters), validating and sanitizing all inputs, using stored procedures with parameters, implementing least privilege access, and never trusting user input. Always use parameters instead of string concatenation for user-supplied values.

**Attack Methods:**
- Bypassing login: `' OR '1'='1`
- Data extraction: `'; SELECT * FROM Users; --`
- Data deletion: `'; DROP TABLE Users; --`
- Privilege escalation

**Prevention Methods:**
- Use parameterized queries (sp_executesql)
- Stored procedures with parameters
- Input validation and sanitization
- Least privilege database accounts
- ORM frameworks with parameterization
- Never concatenate user input

```sql
-- VULNERABLE CODE (SQL Injection possible)
DECLARE @Username VARCHAR(50) = 'admin'' OR ''1''=''1';
DECLARE @Password VARCHAR(50) = 'anything';
DECLARE @SQL NVARCHAR(MAX);

-- DON'T DO THIS!
SET @SQL = 'SELECT * FROM Users WHERE Username = ''' + @Username + ''' AND Password = ''' + @Password + '''';
EXEC(@SQL);
-- Executes: ...WHERE Username = 'admin' OR '1'='1' AND Password = 'anything'
-- Returns all users! (1=1 is always true)

-- SAFE CODE (Parameterized query)
DECLARE @SQL NVARCHAR(MAX);
SET @SQL = N'SELECT * FROM Users WHERE Username = @User AND Password = @Pass';
EXEC sp_executesql @SQL,
    N'@User VARCHAR(50), @Pass VARCHAR(50)',
    @Username, @Password;
-- @Username treated as literal string, not SQL code

-- Attack example: Data extraction
DECLARE @UserInput VARCHAR(100) = 'admin''; SELECT * FROM CreditCards; --';

-- Vulnerable
SET @SQL = 'SELECT * FROM Users WHERE Username = ''' + @UserInput + '''';
-- EXEC(@SQL);  -- Would also execute SELECT * FROM CreditCards

-- Safe
SET @SQL = N'SELECT * FROM Users WHERE Username = @Input';
EXEC sp_executesql @SQL, N'@Input VARCHAR(100)', @UserInput;

-- Attack example: Table drop
DECLARE @UserInput VARCHAR(100) = 'admin''; DROP TABLE Users; --';

-- Vulnerable
SET @SQL = 'SELECT * FROM Users WHERE Username = ''' + @UserInput + '''';
-- EXEC(@SQL);  -- Would drop Users table!

-- Safe with parameters
SET @SQL = N'SELECT * FROM Users WHERE Username = @Input';
EXEC sp_executesql @SQL, N'@Input VARCHAR(100)', @UserInput;

-- Input validation (additional layer)
CREATE PROCEDURE sp_SafeLogin
    @Username VARCHAR(50),
    @Password VARCHAR(50)
AS
BEGIN
    -- Validate input format
    IF @Username NOT LIKE '[a-zA-Z0-9]%' OR LEN(@Username) > 50
    BEGIN
        RAISERROR('Invalid username format', 16, 1);
        RETURN;
    END;
    
    -- Use parameters
    SELECT * FROM Users 
    WHERE Username = @Username AND Password = HASHBYTES('SHA2_256', @Password);
END;

-- Stored procedure approach (safe)
CREATE PROCEDURE sp_GetUserOrders
    @CustomerID INT
AS
BEGIN
    SELECT * FROM Orders WHERE CustomerID = @CustomerID;
    -- Parameters automatically safe from injection
END;

-- Using QUOTENAME for identifiers (table/column names)
DECLARE @TableName NVARCHAR(128) = 'Employee';
DECLARE @SQL NVARCHAR(MAX);

-- Safe with QUOTENAME
SET @SQL = N'SELECT * FROM ' + QUOTENAME(@TableName);
EXEC sp_executesql @SQL;

-- Whitelist validation
DECLARE @SortColumn VARCHAR(50) = 'Salary';

IF @SortColumn NOT IN ('EmployeeName', 'Salary', 'Department')
BEGIN
    SET @SortColumn = 'EmployeeID';  -- Default safe value
END;

SET @SQL = N'SELECT * FROM Employee ORDER BY ' + QUOTENAME(@SortColumn);
EXEC sp_executesql @SQL;
```

---

### Q155: What are Collations in SQL Server?

**Answer:**

Collation defines rules for how SQL Server stores, sorts, and compares character data, determining case sensitivity, accent sensitivity, and sort order. Collations are set at server, database, column, or expression level. Common collations include SQL_Latin1_General_CP1_CI_AS (case-insensitive, accent-sensitive) and Latin1_General_CS_AS (case-sensitive). CI means case-insensitive, CS means case-sensitive, AS means accent-sensitive, AI means accent-insensitive. Collation affects string comparisons, sorting, and indexing. Choose appropriate collation based on language requirements and comparison needs.

**Components:**
- **CI/CS:** Case Insensitive/Case Sensitive
- **AI/AS:** Accent Insensitive/Accent Sensitive
- **Locale:** Language-specific sort rules

**Levels:**
- Server-level (default)
- Database-level
- Column-level
- Expression-level

```sql
-- View server default collation
SELECT SERVERPROPERTY('Collation') AS ServerCollation;

-- Create database with specific collation
CREATE DATABASE MyDatabase
COLLATE Latin1_General_CS_AS;  -- Case-sensitive

-- View database collation
SELECT name, collation_name
FROM sys.databases
WHERE name = 'MyDatabase';

-- Column-level collation
CREATE TABLE Employee (
    EmployeeID INT PRIMARY KEY,
    EmployeeName VARCHAR(100) COLLATE SQL_Latin1_General_CP1_CI_AS,  -- Case-insensitive
    LoginID VARCHAR(50) COLLATE Latin1_General_CS_AS  -- Case-sensitive
);

-- Case-insensitive comparison (default)
SELECT * FROM Employee WHERE EmployeeName = 'john';  -- Finds 'John', 'JOHN', 'john'

-- Case-sensitive comparison
SELECT * FROM Employee WHERE LoginID = 'User1';  -- Only finds exact 'User1'

-- Expression-level collation
SELECT * FROM Employee
WHERE EmployeeName COLLATE Latin1_General_CS_AS = 'John';  -- Case-sensitive

-- Collation conflict
CREATE TABLE Table1 (Name VARCHAR(50) COLLATE SQL_Latin1_General_CP1_CI_AS);
CREATE TABLE Table2 (Name VARCHAR(50) COLLATE Latin1_General_CS_AS);

-- This causes error:
-- SELECT * FROM Table1 t1 JOIN Table2 t2 ON t1.Name = t2.Name;

-- Fix with COLLATE
SELECT * FROM Table1 t1 
JOIN Table2 t2 ON t1.Name COLLATE DATABASE_DEFAULT = t2.Name;

-- List available collations
SELECT name, description
FROM sys.fn_helpcollations()
WHERE name LIKE 'Latin1%';

-- Change database collation
ALTER DATABASE MyDatabase
COLLATE SQL_Latin1_General_CP1_CS_AS;
```

---

### Q156: What is a Schema in SQL Server?

**Answer:**

A schema is a logical container or namespace for database objects (tables, views, procedures) providing organizational structure and security boundary. Schemas separate objects into groups, enable permission management at schema level, and avoid naming conflicts. Default schema is 'dbo'. Users can own schemas and have default schemas. Objects are referenced as schema.object (e.g., dbo.Employee). Schemas improve security by grouping related objects and simplifying permission assignments.

**Benefits:**
- Logical grouping of objects
- Security management (grant permissions to schema)
- Namespace separation
- Ownership management
- Better organization

**Default Schemas:**
- **dbo:** Database owner, default
- **guest:** Guest user schema
- **sys:** System objects
- **INFORMATION_SCHEMA:** Metadata views

```sql
-- Create schema
CREATE SCHEMA Sales;
CREATE SCHEMA HR;
CREATE SCHEMA Finance;

-- Create objects in schema
CREATE TABLE Sales.Orders (
    OrderID INT PRIMARY KEY,
    CustomerID INT,
    OrderDate DATE
);

CREATE TABLE HR.Employee (
    EmployeeID INT PRIMARY KEY,
    EmployeeName VARCHAR(100)
);

-- Reference with schema prefix
SELECT * FROM Sales.Orders;
SELECT * FROM HR.Employee;

-- Grant permissions to schema
CREATE USER SalesUser WITHOUT LOGIN;
GRANT SELECT, INSERT ON SCHEMA::Sales TO SalesUser;
-- SalesUser can SELECT/INSERT on all Sales schema objects

-- Transfer object between schemas
ALTER SCHEMA Finance TRANSFER Sales.Orders;
-- Orders moved from Sales to Finance schema

-- View schemas
SELECT * FROM sys.schemas;

-- Create procedure in schema
CREATE PROCEDURE Sales.GetOrders
AS
BEGIN
    SELECT * FROM Sales.Orders;
END;

-- User's default schema
CREATE USER JohnDoe WITHOUT LOGIN;
ALTER USER JohnDoe WITH DEFAULT_SCHEMA = Sales;
-- JohnDoe references Orders instead of Sales.Orders

-- Drop schema (must be empty)
DROP TABLE Sales.Orders;
DROP SCHEMA Sales;

-- Practical organization
CREATE SCHEMA App;      -- Application tables
CREATE SCHEMA Config;   -- Configuration tables
CREATE SCHEMA Audit;    -- Audit tables

CREATE TABLE App.Users (...);
CREATE TABLE Config.Settings (...);
CREATE TABLE Audit.UserActivity (...);
```

---

### Q157: What are Synonyms?

**Answer:**

A synonym is an alias or alternative name for another database object (table, view, procedure, function) providing abstraction layer and simplifying references. Synonyms enable referencing objects without specifying schema or even remote server, useful for hiding object locations, simplifying code during refactoring, or accessing linked server objects. Changes to underlying object don't break code using synonyms. Cannot create synonyms for other synonyms.

**Use Cases:**
- Abstract object location
- Simplify long names
- Reference linked server objects
- Ease refactoring
- Backward compatibility

```sql
-- Create synonym for table
CREATE SYNONYM Emps FOR dbo.Employee;

-- Use synonym instead of full name
SELECT * FROM Emps;  -- References dbo.Employee

-- Synonym for view
CREATE VIEW dbo.ActiveEmployees AS
SELECT * FROM dbo.Employee WHERE IsActive = 1;

CREATE SYNONYM ActiveEmps FOR dbo.ActiveEmployees;
SELECT * FROM ActiveEmps;

-- Synonym for stored procedure
CREATE PROCEDURE dbo.GetEmployees AS
SELECT * FROM dbo.Employee;

CREATE SYNONYM GetEmps FOR dbo.GetEmployees;
EXEC GetEmps;  -- Calls dbo.GetEmployees

-- Synonym for remote object (linked server)
CREATE SYNONYM RemoteOrders FOR LinkedServer.DatabaseName.dbo.Orders;
SELECT * FROM RemoteOrders;

-- Hide implementation details
CREATE SYNONYM CurrentOrders FOR dbo.Orders_2024;
-- Later change to:
DROP SYNONYM CurrentOrders;
CREATE SYNONYM CurrentOrders FOR dbo.Orders_2025;
-- Application code using CurrentOrders doesn't change

-- View synonyms
SELECT 
    name AS SynonymName,
    base_object_name AS TargetObject
FROM sys.synonyms;

-- Drop synonym
DROP SYNONYM Emps;

-- Practical example: Abstraction
CREATE TABLE dbo.Employee_Archive (EmployeeID INT, Name VARCHAR(100));
CREATE TABLE dbo.Employee_Current (EmployeeID INT, Name VARCHAR(100));

CREATE SYNONYM Employees FOR dbo.Employee_Current;

-- Application uses Employees
SELECT * FROM Employees;

-- Later switch to archive without code changes
DROP SYNONYM Employees;
CREATE SYNONYM Employees FOR dbo.Employee_Archive;
```

---

### Q158: What is a Sequence?

**Answer:**

A sequence is a user-defined object that generates sequential numeric values according to specification, similar to IDENTITY but independent of tables. Created with CREATE SEQUENCE, sequences can be used across multiple tables, reset manually, and cached for performance. Support cycling, min/max values, and custom increments. Use NEXT VALUE FOR to get next value. More flexible than IDENTITY as one sequence can serve multiple tables and values can be generated without INSERT.

**Benefits:**
- Independent of tables
- Share across multiple tables
- Manual control (reset, restart)
- Get value before INSERT
- Cache for performance

**Syntax:**
```sql
CREATE SEQUENCE schema.sequence_name
START WITH start_value
INCREMENT BY increment_value
MINVALUE min | NO MINVALUE
MAXVALUE max | NO MAXVALUE
CYCLE | NO CYCLE
CACHE cache_size | NO CACHE;
```

```sql
-- Create basic sequence
CREATE SEQUENCE dbo.OrderSeq
START WITH 1000
INCREMENT BY 1;

-- Get next value
SELECT NEXT VALUE FOR dbo.OrderSeq;  -- Returns 1000
SELECT NEXT VALUE FOR dbo.OrderSeq;  -- Returns 1001

-- Use in INSERT
INSERT INTO Orders (OrderID, OrderDate)
VALUES (NEXT VALUE FOR dbo.OrderSeq, GETDATE());

-- Sequence with cycling
CREATE SEQUENCE dbo.TicketSeq
START WITH 1
INCREMENT BY 1
MINVALUE 1
MAXVALUE 100
CYCLE;  -- Restarts at 1 after 100

-- Share sequence across tables
CREATE SEQUENCE dbo.SharedIDSeq START WITH 1 INCREMENT BY 1;

INSERT INTO Table1 (ID, Data) VALUES (NEXT VALUE FOR dbo.SharedIDSeq, 'A');
INSERT INTO Table2 (ID, Data) VALUES (NEXT VALUE FOR dbo.SharedIDSeq, 'B');
-- Both tables use same sequence

-- Sequence properties
SELECT 
    name,
    start_value,
    increment,
    minimum_value,
    maximum_value,
    current_value
FROM sys.sequences
WHERE name = 'OrderSeq';

-- Restart sequence
ALTER SEQUENCE dbo.OrderSeq RESTART WITH 5000;

-- Change increment
ALTER SEQUENCE dbo.OrderSeq INCREMENT BY 10;

-- Get range of values
DECLARE @FirstID INT, @LastID INT;
EXEC sp_sequence_get_range 
    @sequence_name = 'dbo.OrderSeq',
    @range_size = 10,
    @range_first_value = @FirstID OUTPUT,
    @range_last_value = @LastID OUTPUT;

-- Use range
PRINT 'Reserved IDs from ' + CAST(@FirstID AS VARCHAR) + ' to ' + CAST(@LastID AS VARCHAR);

-- Cached sequence (better performance)
CREATE SEQUENCE dbo.FastSeq
START WITH 1
INCREMENT BY 1
CACHE 100;  -- Caches 100 values in memory

-- Drop sequence
DROP SEQUENCE dbo.OrderSeq;

-- Sequence vs IDENTITY comparison
-- IDENTITY: Tied to table, automatic on INSERT
-- SEQUENCE: Independent, manual retrieval, multi-table
```

---

### Q161: What is IDENTITY in SQL Server?

**Answer:**

IDENTITY is a column property that automatically generates sequential numeric values, typically used for primary keys. Defined with IDENTITY(seed, increment) where seed is starting value and increment is step value. SQL Server manages identity values automatically on INSERT - cannot explicitly insert unless IDENTITY_INSERT is ON. Functions like SCOPE_IDENTITY(), @@IDENTITY, and IDENT_CURRENT() retrieve last generated values. Identity values skip on rollback, aren't reused, and can have gaps. Seed and increment can be any integer value including negative for descending sequences.

**Syntax:**
```sql
ColumnName INT IDENTITY(seed, increment)
```

**Identity Functions:**
- **SCOPE_IDENTITY():** Last identity in current scope (recommended)
- **@@IDENTITY:** Last identity in session (any scope)
- **IDENT_CURRENT('table'):** Last identity for specific table
- **IDENTITY_INSERT:** Allow explicit identity values

**Characteristics:**
- Auto-generated on INSERT
- Cannot update identity column
- Gaps can occur (rollback, cache)
- One identity column per table

```sql
-- Create table with IDENTITY
CREATE TABLE Employee (
    EmployeeID INT IDENTITY(1,1) PRIMARY KEY,  -- Start 1, increment 1
    Employee Name VARCHAR(100),
    Department VARCHAR(50)
);

-- Insert without specifying EmployeeID
INSERT INTO Employee (EmployeeName, Department) VALUES ('John Doe', 'IT');
INSERT INTO Employee (EmployeeName, Department) VALUES ('Jane Smith', 'HR');

SELECT * FROM Employee;
-- EmployeeID auto-generated: 1, 2

-- Get last inserted identity
SELECT SCOPE_IDENTITY() AS LastID;  -- Returns 2

-- Different seed and increment
CREATE TABLE Orders (
    OrderID INT IDENTITY(1000, 10) PRIMARY KEY,  -- Start 1000, increment 10
    OrderDate DATE
);

INSERT INTO Orders VALUES (GETDATE());
INSERT INTO Orders VALUES (GETDATE());
-- OrderID: 1000, 1010, 1020...

-- Negative increment (descending)
CREATE TABLE Tickets (
    TicketID INT IDENTITY(1000, -1) PRIMARY KEY,
    IssueDesc VARCHAR(200)
);

INSERT INTO Tickets VALUES ('Issue 1');
INSERT INTO Tickets VALUES ('Issue 2');
-- TicketID: 1000, 999, 998...

-- IDENTITY functions comparison
INSERT INTO Employee (EmployeeName, Department) VALUES ('Bob', 'Sales');

SELECT 
    SCOPE_IDENTITY() AS ScopeID,         -- Last in current scope
    @@IDENTITY AS SessionID,             -- Last in session
    IDENT_CURRENT('Employee') AS TableID; -- Last for Employee table

-- SCOPE_IDENTITY vs @@IDENTITY
CREATE TABLE EmployeeAudit (AuditID INT IDENTITY(1,1), EmployeeID INT);

CREATE TRIGGER trg_Employee_Insert ON Employee
AFTER INSERT
AS
BEGIN
    INSERT INTO EmployeeAudit (EmployeeID) SELECT EmployeeID FROM INSERTED;
END;

INSERT INTO Employee (EmployeeName, Department) VALUES ('Test', 'IT');

SELECT SCOPE_IDENTITY();  -- Returns Employee.EmployeeID
SELECT @@IDENTITY;        -- Returns EmployeeAudit.AuditID (from trigger)
-- Always use SCOPE_IDENTITY()!

-- Explicit insert (IDENTITY_INSERT)
SET IDENTITY_INSERT Employee ON;

INSERT INTO Employee (EmployeeID, EmployeeName, Department) 
VALUES (100, 'Manual ID', 'Admin');

SET IDENTITY_INSERT Employee OFF;

-- Check current identity value
SELECT IDENT_CURRENT('Employee') AS CurrentValue;

-- Reseed identity
DBCC CHECKIDENT ('Employee', RESEED, 1000);  -- Next will be 1001

-- Get seed and increment
SELECT 
    IDENT_SEED('Employee') AS Seed,
    IDENT_INCR('Employee') AS Increment;

-- Identity gaps example
BEGIN TRANSACTION;
INSERT INTO Employee (EmployeeName, Department) VALUES ('Gap Test', 'IT');
SELECT SCOPE_IDENTITY();  -- e.g., 5
ROLLBACK;  -- Value 5 is lost

INSERT INTO Employee (EmployeeName, Department) VALUES ('Next', 'IT');
SELECT SCOPE_IDENTITY();  -- Returns 6 (5 skipped)
```

---

### Q162: What is @@ROWCOUNT?

**Answer:**

@@ROWCOUNT is a system function that returns the number of rows affected by the last executed statement. Value resets after each statement, so must be captured immediately if needed later. Returns 0 if no rows affected. Useful for verifying UPDATE/DELETE impact, conditional logic based on affected rows, and error handling. Works with SELECT, INSERT, UPDATE, DELETE, and  MERGE statements.

**Use Cases:**
- Verify rows affected
- Conditional error handling
- Loop control
- Audit logging
- Optimization verification

```sql
-- UPDATE example
UPDATE Employee 
SET Salary = Salary * 1.10 
WHERE Department = 'IT';

SELECT @@ROWCOUNT AS RowsUpdated;  -- e.g., 25

-- Conditional check
IF @@ROWCOUNT = 0
    PRINT 'No IT employees found';
ELSE
    PRINT CAST(@@ROWCOUNT AS VARCHAR) + ' employees updated';

-- DELETE example
DELETE FROM Orders WHERE OrderDate < '2020-01-01';

DECLARE @DeletedRows INT = @@ROWCOUNT;
PRINT 'Deleted ' + CAST(@DeletedRows AS VARCHAR) + ' old orders';

-- INSERT example
INSERT INTO Employee (EmployeeName, Department)
VALUES ('John Doe', 'Sales');

IF @@ROWCOUNT > 0
    PRINT 'Employee inserted successfully';

-- SELECT example
SELECT * FROM Employee WHERE Department = 'NonExistent';

IF @@ROWCOUNT = 0
    PRINT 'No employees in this department';

-- Multiple statements (@@ROWCOUNT resets)
UPDATE Table1 SET Value = 1;  -- Affects 10 rows
UPDATE Table2 SET Value = 2;  -- Affects 5 rows
SELECT @@ROWCOUNT;  -- Returns 5 (only last statement)

-- Capture before reset
UPDATE Employee SET Salary = Salary * 1.10 WHERE Department = 'Sales';
DECLARE @SalesUpdated INT = @@ROWCOUNT;

UPDATE Employee SET Salary = Salary * 1.05 WHERE Department = 'IT';
DECLARE @ITUpdated INT = @@ROWCOUNT;

PRINT 'Sales: ' +  CAST(@SalesUpdated AS VARCHAR) + ', IT: ' + CAST(@ITUpdated AS VARCHAR);

-- Error handling
UPDATE Products SET Stock = Stock - 10 WHERE ProductID = 999;

IF @@ROWCOUNT = 0
BEGIN
    RAISERROR('Product not found', 16, 1);
    RETURN;
END;

-- MERGE statement
MERGE INTO Target t
USING Source s ON t.ID = s.ID
WHEN MATCHED THEN UPDATE SET t.Value = s.Value
WHEN NOT MATCHED THEN INSERT VALUES (s.ID, s.Value);

PRINT 'Rows merged: ' + CAST(@@ROWCOUNT AS VARCHAR);

-- Loop with @@ROWCOUNT
WHILE @@ROWCOUNT > 0 OR @@ROWCOUNT IS NULL
BEGIN
    DELETE TOP (1000) FROM LargeTable WHERE Status = 'Archived';
    -- Loop until no more rows to delete
END;
```

---

### Q163: What is @@ERROR?

**Answer:**

@@ERROR is a system function returning the error number of the last executed T-SQL statement. Returns 0 if successful, non-zero error number if failed. Value resets after each statement, so must capture immediately. Largely superseded by TRY...CATCH blocks in modern SQL Server, but still useful in legacy code and simple error checking. Error numbers correspond to sys.messages catalog.

**Characteristics:**
- Returns 0 for success
- Returns error number for failure
- Resets after each statement
- Must capture immediately

**Common Error Numbers:**
- 2627: Violation of PRIMARY KEY constraint
- 547: FOREIGN KEY constraint violation
- 8152: String truncation
- 1205: Deadlock victim

```sql
-- Basic error checking
INSERT INTO Employee (EmployeeID, EmployeeName) VALUES (1, 'John');
INSERT INTO Employee (EmployeeID, EmployeeName) VALUES (1, 'Jane');  -- Duplicate key

IF @@ERROR != 0
BEGIN
    PRINT 'Error occurred: ' + CAST(@@ERROR AS VARCHAR);
    -- Error 2627: PRIMARY KEY constraint violation
END;

-- Capture error immediately
UPDATE Employee SET Salary = Salary * 1.10 WHERE EmployeeID = 999;
DECLARE @ErrorNum INT = @@ERROR;

IF @ErrorNum != 0
    PRINT 'Update failed with error: ' + CAST(@ErrorNum AS VARCHAR);
ELSE IF @@ROWCOUNT = 0
    PRINT 'No rows updated';
ELSE
    PRINT 'Success';

-- @@ERROR resets after each statement
DELETE FROM Employee WHERE EmployeeID = -1;  -- No error, 0 rows
IF @@ERROR = 0
    PRINT 'Delete completed';  -- @@ERROR checked

SELECT * FROM NonExistentTable;  -- Error occurs
-- @@ERROR for DELETE is now lost!

-- String truncation error
CREATE TABLE Test (Value VARCHAR(5));
INSERT INTO Test VALUES ('12345');     -- Success
INSERT INTO Test VALUES ('123456789'); -- Error 8152

IF @@ERROR = 8152
    PRINT 'Value too long';

-- Transaction with @@ERROR
BEGIN TRANSACTION;

INSERT INTO Orders (OrderID, Amount) VALUES (1, 100);
IF @@ERROR != 0 GOTO ErrorHandler;

UPDATE Inventory SET Stock = Stock - 1 WHERE ProductID = 1;
IF @@ERROR != 0 GOTO ErrorHandler;

COMMIT TRANSACTION;
PRINT 'Transaction completed';
GOTO Done;

ErrorHandler:
    ROLLBACK TRANSACTION;
    PRINT 'Transaction rolled back due to error: ' + CAST(@@ERROR AS VARCHAR);

Done:

-- Modern alternative: TRY...CATCH (preferred)
BEGIN TRY
    INSERT INTO Employee (EmployeeID, EmployeeName) VALUES (1, 'Duplicate');
END TRY
BEGIN CATCH
    PRINT 'Error: ' + ERROR_MESSAGE();
    PRINT 'Error Number: ' + CAST(ERROR_NUMBER() AS VARCHAR);
END CATCH;

-- View error messages
SELECT message_id, severity, text
FROM sys.messages
WHERE language_id = 1033  -- English
  AND message_id IN (2627, 547, 8152, 1205);
```

---

### Q164: What is USER_NAME() and SUSER_NAME()?

**Answer:**

USER_NAME() returns the database username for the current context or specified user ID, while SUSER_NAME() returns the SQL Server login name. USER_NAME() maps to database-level principals (users), SUSER_NAME() maps to server-level principals (logins). Without parameters, both return current user/login. With ID parameter, return corresponding name. Useful for auditing, logging, and security checks.

**Key Differences:**
- **USER_NAME():** Database user (database-level)
- **SUSER_NAME():** Server login (server-level)
- One login can map to different users in different databases

```sql
-- Current user and login
SELECT 
    USER_NAME() AS DatabaseUser,    -- e.g., 'dbo'
    SUSER_NAME() AS ServerLogin,    -- e.g., 'DOMAIN\username'
    USER AS CurrentUser,             -- Same as USER_NAME()
    SYSTEM_USER AS SystemUser;       -- Same as SUSER_NAME()

-- With user/login ID
SELECT 
    USER_NAME(1) AS UserID1,         -- Usually 'dbo'
    SUSER_NAME(1) AS LoginID1;       -- 'sa'

-- Get current user ID
SELECT 
    USER_ID() AS CurrentUserID,
    SUSER_ID() AS CurrentLoginID;

-- Audit logging
CREATE TABLE AuditLog (
    LogID INT IDENTITY(1,1),
    ActionTime DATETIME DEFAULT GETDATE(),
    DatabaseUser VARCHAR(100),
    ServerLogin VARCHAR(100),
    ActionDesc VARCHAR(200)
);

INSERT INTO AuditLog (DatabaseUser, ServerLogin, ActionDesc)
VALUES (USER_NAME(), SUSER_NAME(), 'Record created');

-- Security check
IF USER_NAME() != 'dbo'
BEGIN
    RAISERROR('Only dbo can execute this procedure', 16, 1);
    RETURN;
END;

-- View all database users
SELECT 
    principal_id,
    name AS UserName,
    type_desc
FROM sys.database_principals
WHERE type IN ('S', 'U');  -- SQL user, Windows user

-- View all server logins
SELECT 
    principal_id,
    name AS LoginName,
    type_desc
FROM sys.server_principals
WHERE type IN ('S', 'U', 'G');  -- SQL login, Windows user, Windows group

-- User-Login mapping
SELECT 
    dp.name AS DatabaseUser,
    sp.name AS ServerLogin
FROM sys.database_principals dp
LEFT JOIN sys.server_principals sp ON dp.sid = sp.sid
WHERE dp.type IN ('S', 'U');

-- Other related functions
SELECT 
    HOST_NAME() AS ComputerName,
    APP_NAME() AS ApplicationName,
    DB_NAME() AS DatabaseName,
    @@SERVERNAME AS ServerName,
    ORIGINAL_LOGIN() AS OriginalLogin;
```

---

### Q165: What are other System Functions?

**Answer:**

SQL Server provides numerous system functions for retrieving metadata and system information. HOST_NAME() returns client computer name, DB_NAME() returns current database name, APP_NAME() returns application name, @@SERVERNAME returns server name, @@VERSION returns SQL Server version. These functions are useful for logging, auditing, dynamic SQL, and administrative tasks. Most don't require parameters and return current context information.

**Common System Functions:**
- **HOST_NAME():** Client computer name
- **DB_NAME():** Current/specified database name
- **APP_NAME():** Application name
- **@@SERVERNAME:** SQL Server instance name
- **@@VERSION:** SQL Server version
- **NEWID():** Generate GUID
- **OBJECT_ID():** Get object ID
- **OBJECT_NAME():** Get object name

```sql
-- Basic system information
SELECT 
    HOST_NAME() AS ClientComputer,
    DB_NAME() AS CurrentDatabase,
    APP_NAME() AS ApplicationName,
    @@SERVERNAME AS ServerInstance,
    @@VERSION AS SQLVersion;

-- Database functions
SELECT 
    DB_NAME() AS CurrentDB,
    DB_NAME(1) AS MasterDB,  -- Database ID 1 is usually master
    DB_ID() AS CurrentDBID,
    DB_ID('tempdb') AS TempDBID;

-- Object information
SELECT 
    OBJECT_ID('dbo.Employee') AS TableID,
    OBJECT_NAME(OBJECT_ID('dbo.Employee')) AS TableName,
    OBJECT_SCHEMA_NAME(OBJECT_ID('dbo.Employee')) AS SchemaName;

-- Generate unique identifiers
SELECT 
    NEWID() AS UniqueGUID1,
    NEWID() AS UniqueGUID2;  -- Different each time

-- Connection and session info
SELECT 
    @@SPID AS SessionID,
    @@CONNECTIONS AS TotalConnections,
    @@CPU_BUSY AS CPUBusyTime,
    @@IDLE AS IdleTime,
    @@IO_BUSY AS IOBusyTime;

-- Date and scope functions
SELECT 
    CURRENT_TIMESTAMP AS CurrentTime,
    GETDATE() AS DateTime,
    SYSDATETIME() AS PreciseDateTime,
    GETUTCDATE() AS UTCTime;

-- Audit logging with system functions
CREATE TABLE SystemAudit (
    AuditID INT IDENTITY(1,1),
    AuditTime DATETIME DEFAULT GETDATE(),
    ServerName VARCHAR(100),
    DatabaseName VARCHAR(100),
    LoginName VARCHAR(100),
    HostName VARCHAR(100),
    AppName VARCHAR(100),
    ActionDesc VARCHAR(200)
);

INSERT INTO SystemAudit (ServerName, DatabaseName, LoginName, HostName, AppName, ActionDesc)
VALUES (
    @@SERVERNAME,
    DB_NAME(),
    SUSER_NAME(),
    HOST_NAME(),
    APP_NAME(),
    'User logged in'
);

-- Dynamic database context
DECLARE @DBName VARCHAR(100) = 'MyDatabase';
DECLARE @SQL NVARCHAR(MAX);

SET @SQL = N'USE ' + QUOTENAME(@DBName) + N'; SELECT DB_NAME() AS CurrentDB;';
EXEC sp_executesql @SQL;

-- Version checking
IF LEFT(CAST(SERVERPROPERTY('ProductVersion') AS VARCHAR), 2) >= '15'
    PRINT 'SQL Server 2019 or later';
ELSE
    PRINT 'Older SQL Server version';

-- Server property function
SELECT 
    SERVERPROPERTY('ProductVersion') AS Version,
    SERVERPROPERTY('ProductLevel') AS ServicePack,
    SERVERPROPERTY('Edition') AS Edition,
    SERVERPROPERTY('Collation') AS Collation,
    SERVERPROPERTY('MachineName') AS MachineName;
```

---

## Section 13: SQL Server Specific Features

### Q166: Difference between OLTP and OLAP?

**Answer:**

OLTP (Online Transaction Processing) systems handle day-to-day transactional operations like orders, payments, and updates with emphasis on fast writes, data integrity, and concurrent users. OLAP (Online Analytical Processing) systems support complex analytical queries and reporting on historical data with emphasis on fast reads, aggregations, and data analysis. OLTP databases are normalized to avoid redundancy, use row-based storage, and optimize for INSERT/UPDATE/DELETE. OLAP databases are denormalized for query performance, use columnar storage, and optimize for SELECT with aggregations. OLTP serves operational needs while OLAP serves decision-making and business intelligence.

**Key Differences:**

| Feature | OLTP | OLAP |
|---------|------|------|
| Purpose | Transactional operations | Analysis and reporting |
| Users | Many concurrent users | Fewer analytical users |
| Data | Current, detailed | Historical, aggregated |
| Database design | Normalized (3NF) | Denormalized (star/snowflake) |
| Queries | Simple, fast | Complex, long-running |
| Operations | INSERT, UPDATE, DELETE | SELECT, aggregations |
| Response time | Milliseconds | Seconds to minutes |
| Data size | GB to TB | TB to PB |

```sql
-- OLTP Database Example (Normalized)
CREATE TABLE Customers (
    CustomerID INT PRIMARY KEY,
    CustomerName VARCHAR(100),
    Email VARCHAR(100)
);

CREATE TABLE Orders (
    OrderID INT PRIMARY KEY,
    CustomerID INT FOREIGN KEY REFERENCES Customers(CustomerID),
    OrderDate DATE,
    TotalAmount DECIMAL(10,2)
);

CREATE TABLE OrderDetails (
    OrderDetailID INT PRIMARY KEY,
    OrderID INT FOREIGN KEY REFERENCES Orders(OrderID),
    ProductID INT,
    Quantity INT,
    UnitPrice DECIMAL(10,2)
);

-- OLTP Queries (fast, simple)
INSERT INTO Orders VALUES (1001, 100, '2024-01-15', 500.00);
UPDATE Orders SET TotalAmount = 550.00 WHERE OrderID = 1001;
SELECT * FROM Orders WHERE OrderID = 1001;

-- OLAP Database Example (Denormalized - Star Schema)
-- Fact Table
CREATE TABLE FactSales (
    SaleID INT PRIMARY KEY,
    DateKey INT,
    ProductKey INT,
    CustomerKey INT,
    StoreKey INT,
    SalesAmount DECIMAL(10,2),
    Quantity INT,
    Cost DECIMAL(10,2),
    Profit AS (SalesAmount - Cost)
);

-- Dimension Tables
CREATE TABLE DimDate (
    DateKey INT PRIMARY KEY,
    Date DATE,
    Year INT,
    Quarter INT,
    Month INT,
    MonthName VARCHAR(20),
    DayOfWeek VARCHAR(20)
);

CREATE TABLE DimProduct (
    ProductKey INT PRIMARY KEY,
    ProductID VARCHAR(20),
    ProductName VARCHAR(100),
    Category VARCHAR(50),
    SubCategory VARCHAR(50),
    Brand VARCHAR(50)
);

CREATE TABLE DimCustomer (
    CustomerKey INT PRIMARY KEY,
    CustomerID VARCHAR(20),
    CustomerName VARCHAR(100),
    City VARCHAR(50),
    State VARCHAR(50),
    Country VARCHAR(50)
);

-- OLAP Queries (complex, analytical)
-- Sales by year and category
SELECT 
    d.Year,
    p.Category,
    SUM(f.SalesAmount) AS TotalSales,
    SUM(f.Quantity) AS TotalQuantity,
    AVG(f.Profit) AS AvgProfit
FROM FactSales f
JOIN DimDate d ON f.DateKey = d.DateKey
JOIN DimProduct p ON f.ProductKey = p.ProductKey
GROUP BY d.Year, p.Category
ORDER BY d.Year, TotalSales DESC;

-- Year-over-year growth
SELECT 
    d.Year,
    SUM(f.SalesAmount) AS TotalSales,
    LAG(SUM(f.SalesAmount)) OVER (ORDER BY d.Year) AS PrevYearSales,
    (SUM(f.SalesAmount) - LAG(SUM(f.SalesAmount)) OVER (ORDER BY d.Year)) / 
        LAG(SUM(f.SalesAmount)) OVER (ORDER BY d.Year) * 100 AS GrowthPercent
FROM FactSales f
JOIN DimDate d ON f.DateKey = d.DateKey
GROUP BY d.Year;

-- Top products by region
SELECT 
    c.Country,
    c.State,
    p.ProductName,
    SUM(f.SalesAmount) AS Sales,
    RANK() OVER (PARTITION BY c.Country ORDER BY SUM(f.SalesAmount) DESC) AS ProductRank
FROM FactSales f
JOIN DimCustomer c ON f.CustomerKey = c.CustomerKey
JOIN DimProduct p ON f.ProductKey = p.ProductKey
GROUP BY c.Country, c.State, p.ProductName;
```

---

### Q167: What is a Data Warehouse?

**Answer:**

A data warehouse is a centralized repository storing integrated data from multiple sources, optimized for analysis and reporting rather than transactions. Data warehouses consolidate historical data from various OLTP systems, transform it into consistent format (ETL process), and organize it for efficient querying using dimensional modeling (star or snowflake schemas). Characteristics include subject-oriented (organized by business areas), integrated (consistent formats), time-variant (historical tracking), and non-volatile (read-mostly, stable data). Used for business intelligence, reporting, data mining, and decision support. Examples include SQL Server Analysis Services, Amazon Redshift, Snowflake.

**Characteristics:**
- **Subject-oriented:** Organized by business subjects (sales, inventory)
- **Integrated:** Consolidated from multiple sources
- **Time-variant:** Historical data with time dimension
- **Non-volatile:** Read-mostly, rarely updated

**Components:**
- Staging area (raw data loading)
- ETL processes (Extract, Transform, Load)
- Data warehouse database (star/snowflake schema)
- Data marts (department-specific subsets)
- OLAP cubes (pre-aggregated data)

**Benefits:**
- Improved decision making
- Historical analysis
- Better data quality
- Faster query performance
- Consolidated view of business

```sql
-- Data Warehouse Architecture

-- 1. Staging Tables (temporary data from sources)
CREATE TABLE Staging_Orders (
    SourceSystem VARCHAR(50),
    OrderID VARCHAR(50),
    CustomerID VARCHAR(50),
    OrderDate VARCHAR(50),
    Amount VARCHAR(50),
    LoadDate DATETIME DEFAULT GETDATE()
);

-- 2. Dimension Tables (slowly changing dimensions)
CREATE TABLE DimCustomer (
    CustomerKey INT PRIMARY KEY IDENTITY(1,1),  -- Surrogate key
    CustomerID VARCHAR(20),                      -- Business key
    CustomerName VARCHAR(100),
    City VARCHAR(50),
    State VARCHAR(50),
    Country VARCHAR(50),
    StartDate DATE,
    EndDate DATE,
    IsCurrent BIT,
    Version INT
);

CREATE TABLE DimProduct (
    ProductKey INT PRIMARY KEY IDENTITY(1,1),
    ProductID VARCHAR(20),
    ProductName VARCHAR(100),
    Category VARCHAR(50),
    Brand VARCHAR(50)
);

CREATE TABLE DimDate (
    DateKey INT PRIMARY KEY,  -- YYYYMMDD format
    FullDate DATE,
    Year INT,
    Quarter INT,
    Month INT,
    MonthName VARCHAR(20),
    Week INT,
    DayOfWeek INT,
    DayName VARCHAR(20),
    IsWeekend BIT,
    IsHoliday BIT
);

-- Populate Date Dimension
DECLARE @StartDate DATE = '2020-01-01';
DECLARE @EndDate DATE = '2030-12-31';

WHILE @StartDate <= @EndDate
BEGIN
    INSERT INTO DimDate (DateKey, FullDate, Year, Quarter, Month, MonthName, 
        Week, DayOfWeek, DayName, IsWeekend, IsHoliday)
    VALUES (
        CAST(FORMAT(@StartDate, 'yyyyMMdd') AS INT),
        @StartDate,
        YEAR(@StartDate),
        DATEPART(QUARTER, @StartDate),
        MONTH(@StartDate),
        DATENAME(MONTH, @StartDate),
        DATEPART(WEEK, @StartDate),
        DATEPART(WEEKDAY, @StartDate),
        DATENAME(WEEKDAY, @StartDate),
        CASE WHEN DATEPART(WEEKDAY, @StartDate) IN (1,7) THEN 1 ELSE 0 END,
        0  -- Set holidays separately
    );
    
    SET @StartDate = DATEADD(DAY, 1, @StartDate);
END;

-- 3. Fact Table (measures and foreign keys)
CREATE TABLE FactSales (
    SaleKey INT PRIMARY KEY IDENTITY(1,1),
    DateKey INT FOREIGN KEY REFERENCES DimDate(DateKey),
    ProductKey INT FOREIGN KEY REFERENCES DimProduct(ProductKey),
    CustomerKey INT FOREIGN KEY REFERENCES DimCustomer(CustomerKey),
    
    -- Measures
    Quantity INT,
    UnitPrice DECIMAL(10,2),
    SalesAmount DECIMAL(10,2),
    Cost DECIMAL(10,2),
    Profit AS (SalesAmount - Cost),
    
    -- Audit columns
    ETLBatchID INT,
    LoadDate DATETIME DEFAULT GETDATE()
);

-- ETL Process Example
-- Extract from source
INSERT INTO Staging_Orders (SourceSystem, OrderID, CustomerID, OrderDate, Amount)
SELECT 'ERP', OrderID, CustomerID, OrderDate, TotalAmount
FROM ERPSystem.dbo.Orders
WHERE OrderDate >= DATEADD(DAY, -1, GETDATE());

-- Transform and Load into Dimension
INSERT INTO DimProduct (ProductID, ProductName, Category, Brand)
SELECT DISTINCT 
    ProductID,
    ProductName,
    Category,
    Brand
FROM Staging_Products sp
WHERE NOT EXISTS (
    SELECT 1 FROM DimProduct dp WHERE dp.ProductID = sp.ProductID
);

-- Load into Fact Table
INSERT INTO FactSales (DateKey, ProductKey, CustomerKey, Quantity, UnitPrice, SalesAmount, Cost)
SELECT 
    CAST(FORMAT(CAST(s.OrderDate AS DATE), 'yyyyMMdd') AS INT) AS DateKey,
    dp.ProductKey,
    dc.CustomerKey,
    s.Quantity,
    s.UnitPrice,
    s.Amount,
    p.Cost
FROM Staging_Orders s
JOIN DimProduct dp ON s.ProductID = dp.ProductID
JOIN DimCustomer dc ON s.CustomerID = dc.CustomerID AND dc.IsCurrent = 1
JOIN Products p ON s.ProductID = p.ProductID;

-- Analytical Queries
-- Sales trend by month
SELECT 
    d.Year,
    d.MonthName,
    SUM(f.SalesAmount) AS TotalSales,
    COUNT(*) AS OrderCount,
    AVG(f.Profit) AS AvgProfit
FROM FactSales f
JOIN DimDate d ON f.DateKey = d.DateKey
GROUP BY d.Year, d.Month, d.MonthName
ORDER BY d.Year, d.Month;
```

---

### Q168: What are Fact and Dimension Tables?

**Answer:**

Fact tables store quantitative measurements (metrics) and foreign keys to dimension tables, representing business events like sales, orders, or transactions. Fact tables are typically large, narrow (few columns), and grow continuously. Dimension tables store descriptive attributes providing context for facts, like customer details, product information, or time periods. Dimensions are smaller, wider (many columns), and relatively static. Together they form star or snowflake schemas in data warehouses. Fact tables answer "how much" or "how many" while dimensions answer "who, what, when, where, why."

**Fact Tables:**
- Store measurements/metrics (sales amount, quantity)
- Contain foreign keys to dimensions
- Large number of rows
- Narrow (few columns)
- Grain: level of detail (e.g., one row per sale)

**Dimension Tables:**
- Store descriptive attributes
- Provide context for facts
- Smaller number of rows
- Wide (many columns)
- Used for filtering, grouping, labeling

**Types of Facts:**
- **Additive:** Can sum across all dimensions (sales amount)
- **Semi-Additive:** Can sum across some dimensions (account balance)
- **Non-Additive:** Cannot sum (ratios, percentages)

```sql
-- Fact Table Example
CREATE TABLE FactSales (
    -- Surrogate key
    SaleKey INT PRIMARY KEY IDENTITY(1,1),
    
    -- Foreign keys to dimensions
    DateKey INT FOREIGN KEY REFERENCES DimDate(DateKey),
    ProductKey INT FOREIGN KEY REFERENCES DimProduct(ProductKey),
    CustomerKey INT FOREIGN KEY REFERENCES DimCustomer(CustomerKey),
    StoreKey INT FOREIGN KEY REFERENCES DimStore(StoreKey),
    
    -- Additive measures (can sum across all dimensions)
    Quantity INT,
    SalesAmount DECIMAL(10,2),
    Cost DECIMAL(10,2),
    
    -- Calculated measure
    Profit AS (SalesAmount - Cost),
    
    -- Semi-additive measure (balance at point in time)
    InventoryLevel INT,
    
    -- Degenerate dimension (fact attribute with no dimension table)
    OrderNumber VARCHAR(20),
    
    -- Audit columns
    ETLBatchID INT,
    LoadDate DATETIME DEFAULT GETDATE()
);

-- Dimension Tables

-- Date Dimension
CREATE TABLE DimDate (
    DateKey INT PRIMARY KEY,  -- Surrogate key (YYYYMMDD)
    FullDate DATE,
    
    -- Year hierarchy
    Year INT,
    YearName VARCHAR(10),  -- '2024'
    
    -- Quarter hierarchy
    Quarter INT,
    QuarterName VARCHAR(10),  -- 'Q1 2024'
    
    -- Month hierarchy
    Month INT,
    MonthName VARCHAR(20),
    MonthYear VARCHAR(20),  -- 'Jan 2024'
    
    -- Week hierarchy
    WeekOfYear INT,
    WeekName VARCHAR(20),
    
    -- Day attributes
    DayOfMonth INT,
    DayOfWeek INT,
    DayName VARCHAR(20),
    IsWeekend BIT,
    IsHoliday BIT,
    HolidayName VARCHAR(50)
);

-- Product Dimension
CREATE TABLE DimProduct (
    ProductKey INT PRIMARY KEY IDENTITY(1,1),  -- Surrogate key
    ProductID VARCHAR(20),                      -- Business/natural key
    
    -- Product attributes
    ProductName VARCHAR(100),
    Description VARCHAR(500),
    SKU VARCHAR(50),
    
    -- Product hierarchy
    Brand VARCHAR(50),
    SubCategory VARCHAR(50),
    Category VARCHAR(50),
    Department VARCHAR(50),
    
    -- Product properties
    Color VARCHAR(20),
    Size VARCHAR(20),
    Weight DECIMAL(10,2),
    
    -- Pricing
    StandardCost DECIMAL(10,2),
    ListPrice DECIMAL(10,2),
    
    -- Status
    Status VARCHAR(20),  -- Active, Discontinued
    
    -- SCD Type 2 columns (track history)
    StartDate DATE,
    EndDate DATE,
    IsCurrent BIT,
    Version INT
);

-- Customer Dimension
CREATE TABLE DimCustomer (
    CustomerKey INT PRIMARY KEY IDENTITY(1,1),
    CustomerID VARCHAR(20),
    
    -- Customer attributes
    FirstName VARCHAR(50),
    LastName VARCHAR(50),
    FullName AS (FirstName + ' ' + LastName),
    Email VARCHAR(100),
    Phone VARCHAR(20),
    
    -- Geographic hierarchy
    AddressLine1 VARCHAR(100),
    City VARCHAR(50),
    State VARCHAR(50),
    ZipCode VARCHAR(10),
    Country VARCHAR(50),
    Region VARCHAR(50),
    
    -- Customer segmentation
    CustomerType VARCHAR(20),  -- Individual, Business
    Segment VARCHAR(20),  -- Standard, Premium, VIP
    
    -- Demographics
    BirthDate DATE,
    Gender CHAR(1),
    MaritalStatus CHAR(1),
    
    -- SCD Type 2
    StartDate DATE,
    EndDate DATE,
    IsCurrent BIT
);

-- Store Dimension
CREATE TABLE DimStore (
    StoreKey INT PRIMARY KEY IDENTITY(1,1),
    StoreID VARCHAR(20),
    StoreName VARCHAR(100),
    
    -- Location
    Address VARCHAR(100),
    City VARCHAR(50),
    State VARCHAR(50),
    Country VARCHAR(50),
    
    -- Store attributes
    StoreType VARCHAR(20),  -- Mall, Standalone, Online
    Size INT,  -- Square feet
    OpenDate DATE,
    Manager VARCHAR(100)
);

-- Example Queries

-- Sales by product category and year
SELECT 
    d.Year,
    p.Category,
    SUM(f.SalesAmount) AS TotalSales,
    SUM(f.Quantity) AS TotalQuantity,
    COUNT(DISTINCT f.CustomerKey) AS UniqueCustomers
FROM FactSales f
JOIN DimDate d ON f.DateKey = d.DateKey
JOIN DimProduct p ON f.ProductKey = p.ProductKey
GROUP BY d.Year, p.Category
ORDER BY d.Year, TotalSales DESC;

-- Top 10 customers by sales
SELECT TOP 10
    c.CustomerName,
    c.City,
    c.Segment,
    SUM(f.SalesAmount) AS TotalPurchases,
    COUNT(*) AS OrderCount,
    AVG(f.SalesAmount) AS AvgOrderValue
FROM FactSales f
JOIN DimCustomer c ON f.CustomerKey = c.CustomerKey
WHERE c.IsCurrent = 1
GROUP BY c.CustomerKey, c.CustomerName, c.City, c.Segment
ORDER BY TotalPurchases DESC;

-- Sales by store and product category
SELECT 
    s.StoreName,
    p.Category,
    SUM(f.SalesAmount) AS Sales,
    SUM(f.Profit) AS Profit
FROM FactSales f
JOIN DimStore s ON f.StoreKey = s.StoreKey
JOIN DimProduct p ON f.ProductKey = p.ProductKey
GROUP BY s.StoreName, p.Category
ORDER BY Sales DESC;
```

---

### Q169: Difference between Star Schema and Snowflake Schema?

**Answer:**

Star schema is a denormalized data warehouse design where dimension tables connect directly to central fact table in a star pattern, with all attributes in single dimension tables. Snowflake schema is a normalized version where dimension tables are split into sub-dimensions, creating a snowflake-like structure. Star schema offers simpler queries and faster performance due to fewer joins, but uses more storage due to denormalization. Snowflake schema saves storage space through normalization but requires more complex queries with additional joins. Star schema is preferred for most data warehouses due to query performance, while snowflake is used when storage is critical or dimensional hierarchies are complex.

**Star Schema:**
- Denormalized dimensions
- Fewer tables and joins
- Faster query performance  
- More storage space
- Simpler to understand

**Snowflake Schema:**
- Normalized dimensions
- More tables and joins
- Slower query performance
- Less storage space
- Complex structure

```sql
-- STAR SCHEMA (Denormalized)

-- Dimension table - all attributes in one table
CREATE TABLE DimProduct_Star (
    ProductKey INT PRIMARY KEY,
    ProductID VARCHAR(20),
    ProductName VARCHAR(100),
    
    -- All hierarchy levels denormalized
    Brand VARCHAR(50),
    SubCategory VARCHAR(50),
    Category VARCHAR(50),
    Department VARCHAR(50)
);

-- Fact table
CREATE TABLE FactSales_Star (
    SaleKey INT PRIMARY KEY,
    DateKey INT,
    ProductKey INT FOREIGN KEY REFERENCES DimProduct_Star(ProductKey),
    CustomerKey INT,
    SalesAmount DECIMAL(10,2),
    Quantity INT
);

-- Simple query - one join
SELECT 
    p.Department,
    p.Category,
    SUM(f.SalesAmount) AS TotalSales
FROM FactSales_Star f
INNER JOIN DimProduct_Star p ON f.ProductKey = p.ProductKey
GROUP BY p.Department, p.Category;

-- SNOWFLAKE SCHEMA (Normalized)

-- Normalized dimension hierarchy
CREATE TABLE DimDepartment (
    DepartmentKey INT PRIMARY KEY,
    DepartmentName VARCHAR(50)
);

CREATE TABLE DimCategory (
    CategoryKey INT PRIMARY KEY,
    CategoryName VARCHAR(50),
    DepartmentKey INT FOREIGN KEY REFERENCES DimDepartment(DepartmentKey)
);

CREATE TABLE DimSubCategory (
    SubCategoryKey INT PRIMARY KEY,
    SubCategoryName VARCHAR(50),
    CategoryKey INT FOREIGN KEY REFERENCES DimCategory(CategoryKey)
);

CREATE TABLE DimBrand (
    BrandKey INT PRIMARY KEY,
    BrandName VARCHAR(50)
);

CREATE TABLE DimProduct_Snowflake (
    ProductKey INT PRIMARY KEY,
    ProductID VARCHAR(20),
    ProductName VARCHAR(100),
    SubCategoryKey INT FOREIGN KEY REFERENCES DimSubCategory(SubCategoryKey),
    BrandKey INT FOREIGN KEY REFERENCES DimBrand(BrandKey)
);

-- Fact table
CREATE TABLE FactSales_Snowflake (
    SaleKey INT PRIMARY KEY,
    DateKey INT,
    ProductKey INT FOREIGN KEY REFERENCES DimProduct_Snowflake(ProductKey),
    CustomerKey INT,
    SalesAmount DECIMAL(10,2),
    Quantity INT
);

-- Complex query - multiple joins
SELECT 
    d.DepartmentName,
    c.CategoryName,
    SUM(f.SalesAmount) AS TotalSales
FROM FactSales_Snowflake f
INNER JOIN DimProduct_Snowflake p ON f.ProductKey = p.ProductKey
INNER JOIN DimSubCategory sc ON p.SubCategoryKey = sc.SubCategoryKey
INNER JOIN DimCategory c ON sc.CategoryKey = c.CategoryKey
INNER JOIN DimDepartment d ON c.DepartmentKey = d.DepartmentKey
GROUP BY d.DepartmentName, c.CategoryName;

-- Storage comparison
-- Star: ProductName + Brand + SubCategory + Category + Department per row
-- Snowflake: ProductName only, lookup Brand/SubCategory/Category/Department

-- Performance test
-- Star schema: Typically 2-5x faster due to fewer joins
-- Snowflake: Slower but saves storage (30-50% space reduction for large dimensions)
```

---

### Q170: What are Slowly Changing Dimensions (SCD)?

**Answer:**

Slowly Changing Dimensions (SCD) are dimension tables that change slowly over time, requiring strategies to track historical changes. Type 1 SCD overwrites old values with new ones, providing no history tracking - simple but loses historical data. Type 2 SCD adds new rows for changes while keeping old rows, maintaining full history using StartDate, EndDate, and IsCurrent flags - most common approach. Type 3 SCD adds columns to store limited history (e.g., PreviousValue, EffectiveDate), tracking only most recent change - rarely used. Choose based on business requirements: Type 1 for current values only, Type 2 for full historical analysis, Type 3 for limited history tracking.

**SCD Types:**

| Type | Strategy | History | Complexity | Use Case |
|------|----------|---------|------------|----------|
| Type 1 | Overwrite | None | Simple | Current values sufficient |
| Type 2 | Add rows | Full | Medium | Historical analysis needed |
| Type 3 | Add columns | Limited | Simple | Recent history only |

```sql
-- Sample dimension table
CREATE TABLE DimCustomer (
    CustomerKey INT PRIMARY KEY IDENTITY(1,1),  -- Surrogate key
    CustomerID VARCHAR(20),                      -- Business key
    CustomerName VARCHAR(100),
    City VARCHAR(50),
    State VARCHAR(50),
    
    -- SCD Type 2 fields
    StartDate DATE,
    EndDate DATE,
    IsCurrent BIT,
    Version INT
);

-- Initial load
INSERT INTO DimCustomer (CustomerID, CustomerName, City, State, StartDate, EndDate, IsCurrent, Version)
VALUES ('C001', 'John Doe', 'Boston', 'MA', '2020-01-01', '9999-12-31', 1, 1);

-- TYPE 1 SCD (Overwrite - No History)
UPDATE DimCustomer
SET City = 'New York', State = 'NY'
WHERE CustomerID = 'C001' AND IsCurrent = 1;

SELECT * FROM DimCustomer WHERE CustomerID = 'C001';
-- Only shows current: New York, NY (Boston history lost)

-- TYPE 2 SCD (Add Row - Full History)
-- Step 1: Expire current record
UPDATE DimCustomer
SET EndDate = CAST(GETDATE() AS DATE),
    IsCurrent = 0
WHERE CustomerID = 'C001' AND IsCurrent = 1;

-- Step 2: Insert new record with changes
INSERT INTO DimCustomer (CustomerID, CustomerName, City, State, StartDate, EndDate, IsCurrent, Version)
SELECT 
    CustomerID,
    CustomerName,
    'Los Angeles' AS City,  -- New value
    'CA' AS State,          -- New value
    CAST(GETDATE() AS DATE) AS StartDate,
    '9999-12-31' AS EndDate,
    1 AS IsCurrent,
    Version + 1 AS Version
FROM DimCustomer
WHERE CustomerID = 'C001' AND EndDate = CAST(GETDATE() AS DATE);

-- Query history
SELECT 
    CustomerKey,
    CustomerName,
    City,
    State,
    StartDate,
    EndDate,
    IsCurrent,
    Version
FROM DimCustomer
WHERE CustomerID = 'C001'
ORDER BY Version;
-- Shows: Boston (v1, inactive), New York (v2, inactive), Los Angeles (v3, active)

-- Query as of specific date
SELECT *
FROM DimCustomer
WHERE CustomerID = 'C001'
  AND '2021-06-15' BETWEEN StartDate AND EndDate;

-- Current record only
SELECT *
FROM DimCustomer
WHERE CustomerID = 'C001' AND IsCurrent = 1;

-- TYPE 3 SCD (Add Columns - Limited History)
ALTER TABLE DimCustomer ADD 
    PreviousCity VARCHAR(50),
    PreviousState VARCHAR(50),
    CityChangeDate DATE;

-- Update with previous value
UPDATE DimCustomer
SET PreviousCity = City,
    PreviousState = State,
    City = 'Miami',
    State = 'FL',
    CityChangeDate = GETDATE()
WHERE CustomerID = 'C001' AND IsCurrent = 1;

SELECT CustomerName, City, State, PreviousCity, PreviousState, CityChangeDate
FROM DimCustomer WHERE CustomerID = 'C001';
-- Shows current and previous only

-- SCD Type 2 with MERGE (efficient)
MERGE INTO DimCustomer AS Target
USING (SELECT 'C001' AS CustomerID, 'Seattle' AS City, 'WA' AS State) AS Source
ON Target.CustomerID = Source.CustomerID AND Target.IsCurrent = 1
WHEN MATCHED AND (Target.City != Source.City OR Target.State != Source.State) THEN
    UPDATE SET EndDate = CAST(GETDATE() AS DATE), IsCurrent = 0
WHEN NOT MATCHED BY SOURCE THEN
    INSERT (CustomerID, CustomerName, City, State, StartDate, EndDate, IsCurrent, Version)
    VALUES (Source.CustomerID, 'John Doe', Source.City, Source.State, 
            CAST(GETDATE() AS DATE), '9999-12-31', 1, 
            (SELECT MAX(Version) + 1 FROM DimCustomer WHERE CustomerID = Source.CustomerID));
```



### Q171: What is Star Schema?

**Answer:**

Star schema is a denormalized data warehouse schema where a central fact table is surrounded by dimension tables, forming a star-like structure. Each dimension table connects directly to the fact table through foreign keys, with all attributes denormalized in single dimension tables. This design optimizes query performance by minimizing joins, making it ideal for OLAP and reporting. Star schemas are simple to understand, fast for queries, but use more storage space due to denormalization.

---

### Q172: What is Snowflake Schema?

**Answer:**

Snowflake schema is a normalized variation of star schema where dimension tables are broken down into sub-dimensions, creating a snowflake-like structure. Hierarchies are normalized into separate tables (e.g., Product → Category → Department split into multiple tables). While snowflake schemas save storage space through normalization, they require more complex queries with additional joins, resulting in slower query performance compared to star schemas. Used when storage savings are prioritized over query speed.

---

### Q173: What is Replication?

**Answer:**

Replication is the process of copying and maintaining database objects and data across multiple servers to ensure data availability, redundancy, and load distribution. SQL Server replication involves a Publisher (source server), Distributor (manages distribution), and Subscribers (destination servers). Supports three main types: Snapshot (periodic full copy), Transactional (real-time changes), and Merge (bidirectional updates with conflict resolution). Used for disaster recovery, reporting servers, and distributed data scenarios.

---

### Q174: What are Types of Replication?

**Answer:**

SQL Server supports three replication types. **Snapshot Replication** copies entire dataset periodically, best for static data or infrequent updates. **Transactional Replication** sends changes in near real-time as transactions occur, ideal for low-latency requirements and one-way data flow. **Merge Replication** allows updates at multiple sites with automatic conflict detection and resolution, suitable for occasionally connected systems like mobile applications. Each type serves different business needs based on latency, data volume, and update patterns.

---

### Q175: What is BCP Utility?

**Answer:**

BCP (Bulk Copy Program) is a command-line utility for fast bulk import and export of data between SQL Server and data files. It operates outside SQL Server transactions, making it significantly faster than INSERT statements for large datasets. Supports various file formats (native, character, Unicode) and uses format files to define data structure. Common uses include data migration, ETL processes, and database backups. Syntax: `bcp database.schema.table in/out filename -S server -T -c`.

---

###  Q176: What is SSIS?

**Answer:**

SSIS (SQL Server Integration Services) is Microsoft's ETL (Extract, Transform, Load) platform for data integration tasks. Provides graphical tools to build data workflows that extract data from various sources, transform it through operations like cleaning and aggregation, and load it into destinations like data warehouses. Supports both control flow (workflow orchestration) and data flow (data transformations). Used for data migration, warehouse loading, data cleansing, and automated reporting.

---

### Q177: What is SSRS?

**Answer:**

SSRS (SQL Server Reporting Services) is a server-based reporting platform for creating, managing, and distributing reports. Supports various report formats (tabular, matrix, charts, gauges) and output types (PDF, Excel, Word, HTML). Features include parameterized reports, subscriptions for scheduled delivery, and report caching for performance. Reports can access data from SQL Server and other sources. Used for operational reports, dashboards, and business intelligence visualization.

---

### Q178: What is SSAS?

**Answer:**

SSAS (SQL Server Analysis Services) is an analytical data engine providing OLAP (Online Analytical Processing) and data mining capabilities. Supports two modes: Multidimensional (traditional OLAP cubes with MDX queries) and Tabular (in-memory columnar storage with DAX queries). Enables fast aggregation queries, complex calculations, and time-based analysis on large datasets. Used for business intelligence, financial analysis, sales reporting, and decision support systems.

---

### Q179: What is Linked Server?

**Answer:**

A Linked Server is a connection configuration that allows SQL Server to execute queries against external data sources like other SQL Servers, Oracle, Excel, or Access databases. Once configured, remote tables can be queried using four-part naming convention: `LinkedServerName.DatabaseName.SchemaName.TableName`. Supports distributed queries and transactions across servers. Useful for data consolidation, cross-server reporting, and heterogeneous database integration. Configured using `sp_addlinkedserver` and `sp_addlinkedsrvlogin`.

---

### Q180: What is DBCC?

**Answer:**

DBCC (Database Console Commands) are statements for administrative and maintenance tasks in SQL Server. Key commands include: `DBCC CHECKDB` for database integrity checks, `DBCC SHRINKDATABASE` to reduce database size, `DBCC FREEPROCCACHE` to clear procedure cache, `DBCC SHOW_STATISTICS` to view index statistics, and `DBCC CHECKIDENT` to check/reseed identity values. Some commands like `DBCC TRACEON/TRACEOFF` control trace flags for troubleshooting. Essential for database administration, performance tuning, and corruption detection.




## Section 14: Practical SQL Queries

### Q181: Find Second Highest Salary

**Answer:**

Finding the second highest salary is a common interview question with multiple solutions. Best approach uses DENSE_RANK() or ROW_NUMBER() window functions for efficiency and handling ties. DENSE_RANK() assigns same rank to equal values, making it better for finding Nth highest with duplicates. Subquery with MAX and NOT IN works but is slower. OFFSET-FETCH provides clean syntax in SQL Server 2012+. Always use DISTINCT when values might repeat.

**Methods:**
- DENSE_RANK() - Best for ties  
- ROW_NUMBER() - Best for unique values
- Subquery with MAX - Simple but slower
- OFFSET-FETCH - Clean syntax

```sql
-- Test data
CREATE TABLE Employee (
    EmployeeID INT PRIMARY KEY,
    EmployeeName VARCHAR(100),
    Salary DECIMAL(10,2)
);

INSERT INTO Employee VALUES
(1, 'John', 100000),
(2, 'Jane', 120000),
(3, 'Bob', 80000),
(4, 'Alice', 120000),  -- Duplicate highest
(5, 'Charlie', 90000);

-- Method 1: DENSE_RANK (Best - Handles ties)
SELECT DISTINCT Salary
FROM (
    SELECT Salary,
           DENSE_RANK() OVER (ORDER BY Salary DESC) AS Rank
    FROM Employee
) AS Ranked
WHERE Rank = 2;
-- Returns: 100000

-- Method 2: ROW_NUMBER (Good for unique salaries)
SELECT Salary
FROM (
    SELECT DISTINCT Salary,
           ROW_NUMBER() OVER (ORDER BY Salary DESC) AS RowNum
    FROM Employee
) AS Ranked
WHERE RowNum = 2;

-- Method 3: Subquery with MAX (Simple but slower)
SELECT MAX(Salary) AS SecondHighest
FROM Employee
WHERE Salary < (SELECT MAX(Salary) FROM Employee);

-- Method 4: OFFSET-FETCH (SQL Server 2012+)
SELECT DISTINCT Salary
FROM Employee
ORDER BY Salary DESC
OFFSET 1 ROW FETCH NEXT 1 ROW ONLY;

-- Method 5: TOP with subquery
SELECT TOP 1 Salary
FROM (
    SELECT DISTINCT TOP 2 Salary
    FROM Employee
    ORDER BY Salary DESC
) AS TopTwo
ORDER BY Salary ASC;

-- Handle NULL safely
SELECT COALESCE(
    (SELECT DISTINCT Salary
     FROM (
         SELECT Salary, DENSE_RANK() OVER (ORDER BY Salary DESC) AS Rank
         FROM Employee
     ) AS R
     WHERE Rank = 2),
    0) AS SecondHighest;
```

---

### Q182: Find Nth Highest Salary

**Answer:**

Generalize second highest to find any Nth highest salary using parameterized ranking functions. DENSE_RANK() with variable N is most flexible and handles ties properly. Can create reusable function or stored procedure. OFFSET-FETCH requires N-1 offset. Important to use DISTINCT to avoid counting duplicate salaries as different ranks.

```sql
-- Method 1: DENSE_RANK with parameter (Best)
DECLARE @N INT = 3;  -- Find 3rd highest

SELECT DISTINCT Salary
FROM (
    SELECT Salary,
           DENSE_RANK() OVER (ORDER BY Salary DESC) AS Rank
    FROM Employee
) AS Ranked
WHERE Rank = @N;

-- Method 2: OFFSET-FETCH with parameter
DECLARE @N INT = 3;

SELECT DISTINCT Salary
FROM Employee
ORDER BY Salary DESC
OFFSET (@N - 1) ROWS FETCH NEXT 1 ROW ONLY;

-- Method 3: Create reusable function
CREATE FUNCTION dbo.GetNthHighestSalary(@N INT)
RETURNS DECIMAL(10,2)
AS
BEGIN
    DECLARE @Result DECIMAL(10,2);
    
    SELECT @Result = Salary
    FROM (
        SELECT DISTINCT Salary,
               DENSE_RANK() OVER (ORDER BY Salary DESC) AS Rank
        FROM Employee
    ) AS Ranked
    WHERE Rank = @N;
    
    RETURN @Result;
END;

-- Usage
SELECT dbo.GetNthHighestSalary(3) AS ThirdHighest;
SELECT dbo.GetNthHighestSalary(5) AS FifthHighest;

-- Method 4: Stored procedure with output
CREATE PROCEDURE sp_GetNthHighestSalary
    @N INT,
    @Salary DECIMAL(10,2) OUTPUT
AS
BEGIN
    SELECT @Salary = Salary
    FROM (
        SELECT DISTINCT Salary,
               DENSE_RANK() OVER (ORDER BY Salary DESC) AS Rank
        FROM Employee
    ) AS Ranked
    WHERE Rank = @N;
END;

-- Usage
DECLARE @Result DECIMAL(10,2);
EXEC sp_GetNthHighestSalary @N = 3, @Salary = @Result OUTPUT;
SELECT @Result AS ThirdHighest;

-- Find Nth highest by department
DECLARE @N INT = 2;

SELECT Department, Salary
FROM (
    SELECT Department, Salary,
           DENSE_RANK() OVER (PARTITION BY Department ORDER BY Salary DESC) AS Rank
    FROM Employee
) AS Ranked
WHERE Rank = @N;
```

---

### Q183: Find Duplicate Records

**Answer:**

Finding duplicate records requires identifying rows with same values in key columns. Use GROUP BY with HAVING COUNT(*) > 1 to find duplicates. To show all duplicate rows, use window functions or EXISTS. Common in data cleansing and validation scenarios.

```sql
-- Find duplicate email addresses
SELECT Email, COUNT(*) AS DuplicateCount
FROM Employee
GROUP BY Email
HAVING COUNT(*) > 1;

-- Show all rows that have duplicates
SELECT *
FROM Employee e1
WHERE EXISTS (
    SELECT 1 FROM Employee e2
    WHERE e1.Email = e2.Email AND e1.EmployeeID != e2.EmployeeID
);

-- Using window function
SELECT *
FROM (
    SELECT *,
           COUNT(*) OVER (PARTITION BY Email) AS DupCount
    FROM Employee
) AS Numbered
WHERE DupCount > 1;

-- Find duplicates across multiple columns
SELECT FirstName, LastName, DateOfBirth, COUNT(*) AS Count
FROM Person
GROUP BY FirstName, LastName, DateOfBirth
HAVING COUNT(*) > 1;

-- Show duplicate details with row numbers
SELECT *
FROM (
    SELECT *,
           ROW_NUMBER() OVER (PARTITION BY Email ORDER BY EmployeeID) AS RowNum
    FROM Employee
) AS Numbered
WHERE RowNum > 1;
```

---

### Q184: Delete Duplicate Records

**Answer:**

Use CTE with ROW_NUMBER() to identify and delete duplicates while keeping one record. Safest method as it's precise and can be tested in transaction. Alternative methods include self-join DELETE or temporary table approach.

```sql
-- Method 1: CTE with ROW_NUMBER (Best - Keeps minimum ID)
WITH CTE AS (
    SELECT *,
           ROW_NUMBER() OVER (PARTITION BY Email ORDER BY EmployeeID) AS RowNum
    FROM Employee
)
DELETE FROM CTE WHERE RowNum > 1;

-- Method 2: Self-join DELETE
DELETE e1
FROM Employee e1
INNER JOIN Employee e2 ON e1.Email = e2.Email AND e1.EmployeeID > e2.EmployeeID;

-- Method 3: Temporary table approach (safest for large data)
SELECT DISTINCT * INTO #TempEmployee FROM Employee;
TRUNCATE TABLE Employee;
INSERT INTO Employee SELECT * FROM #TempEmployee;
DROP TABLE #TempEmployee;

-- Keep specific record (e.g., most recent)
WITH CTE AS (
    SELECT *,
           ROW_NUMBER() OVER (PARTITION BY Email ORDER BY CreatedDate DESC) AS RowNum
    FROM Employee
)
DELETE FROM CTE WHERE RowNum > 1;

-- Test before deleting
BEGIN TRANSACTION;
WITH CTE AS (
    SELECT *, ROW_NUMBER() OVER (PARTITION BY Email ORDER BY EmployeeID) AS RowNum
    FROM Employee
)
DELETE FROM CTE WHERE RowNum > 1;
SELECT * FROM Employee WHERE Email IN (SELECT Email FROM Employee GROUP BY Email HAVING COUNT(*) > 1);
ROLLBACK;  -- Or COMMIT if correct
```

---

### Q185: Find Employees with Same Salary

**Answer:**

To find employees with the same salary, use GROUP BY with HAVING clause to identify duplicate salary values. STRING_AGG function (SQL Server 2017+) concatenates employee names sharing the same salary for easy viewing.

```sql
SELECT Salary, STRING_AGG(EmployeeName, ', ') AS Employees
FROM Employee
GROUP BY Salary
HAVING COUNT(*) > 1;
```

---

### Q186: Display Odd Rows

**Answer:**

Use ROW_NUMBER() window function to assign sequential numbers to rows, then filter for odd row numbers using modulo operator (% 2 = 1).

```sql
SELECT * FROM (
    SELECT *, ROW_NUMBER() OVER (ORDER BY EmployeeID) AS RowNum
    FROM Employee
) AS Numbered WHERE RowNum % 2 = 1;
```

---

### Q187: Display Even Rows

**Answer:**

Similar to odd rows, use ROW_NUMBER() and filter for even row numbers using modulo operator (% 2 = 0).

```sql
SELECT * FROM (
    SELECT *, ROW_NUMBER() OVER (ORDER BY EmployeeID) AS RowNum
    FROM Employee
) AS Numbered WHERE RowNum % 2 = 0;
```

---

### Q188: Find Employees Who Are Also Managers

**Answer:**

Use self-join on Employee table where ManagerID matches EmployeeID to find employees who manage other employees. DISTINCT eliminates duplicate manager records.

```sql
SELECT DISTINCT m.*
FROM Employee m
INNER JOIN Employee e ON m.EmployeeID = e.ManagerID;
```

---

### Q189: Display Employee Name and Manager Name

**Answer:**

Self-join Employee table using LEFT JOIN to show all employees with their manager names. ISNULL handles employees with no manager (top-level executives).

```sql
SELECT 
    e.EmployeeName AS Employee,
    ISNULL(m.EmployeeName, 'No Manager') AS Manager
FROM Employee e
LEFT JOIN Employee m ON e.ManagerID = m.EmployeeID;
```

---

### Q190: Find Departments with No Employees

**Answer:**

Use LEFT JOIN from Department to Employee and filter WHERE Employee.EmployeeID IS NULL to find departments with no assigned employees.

```sql
SELECT d.*
FROM Department d
LEFT JOIN Employee e ON d.DepartmentID = e.DepartmentID
WHERE e.EmployeeID IS NULL;
```

---

### Q191: Find Employees Earning More Than Their Managers

**Answer:**

Self-join Employee table to compare employee salary with manager salary. Filter WHERE clause for employees earning more than their managers.

```sql
SELECT e.*
FROM Employee e
INNER JOIN Employee m ON e.ManagerID = m.EmployeeID
WHERE e.Salary > m.Salary;
```

---

### Q192: Find Students Scoring Above Average

**Answer:**

Use subquery to calculate average score, then filter students with scores greater than the average in WHERE clause.

```sql
SELECT *
FROM Students
WHERE Score > (SELECT AVG(Score) FROM Students);
```

---

### Q193: Display Current Date and Time

**Answer:**

Use GETDATE() function for current datetime. CAST to DATE or TIME types to extract specific components.

```sql
SELECT 
    GETDATE() AS CurrentDateTime,
    CAST(GETDATE() AS DATE) AS CurrentDate,
    CAST(GETDATE() AS TIME) AS CurrentTime;
```

---

### Q194: Calculate Age from Date of Birth

**Answer:**

Use DATEDIFF to calculate year difference, then subtract 1 if birthday hasn't occurred yet this year using CASE statement to handle month and day comparison.

```sql
SELECT 
    DateOfBirth,
    DATEDIFF(YEAR, DateOfBirth, GETDATE()) -
    CASE 
        WHEN MONTH(DateOfBirth) > MONTH(GETDATE()) 
          OR (MONTH(DateOfBirth) = MONTH(GETDATE()) AND DAY(DateOfBirth) > DAY(GETDATE()))
        THEN 1 ELSE 0
    END AS Age
FROM Employee;
```

---

### Q195: Find Max Salary from Each Department

**Answer:**

Use GROUP BY Department with MAX aggregate function to find highest salary in each department.

```sql
SELECT Department, MAX(Salary) AS MaxSalary
FROM Employee
GROUP BY Department;
```

---

### Q196: Display Row Numbers

**Answer:**

Use ROW_NUMBER() window function with ORDER BY to assign sequential numbers to each row in the result set.

```sql
SELECT 
    ROW_NUMBER() OVER (ORDER BY EmployeeID) AS RowNum,
    *
FROM Employee;
```

---

### Q197: Transpose Rows to Columns (Pivot)

**Answer:**

Use PIVOT operator to transform rows into columns. Specify aggregate function, pivot column, and list of values to become column headers.

```sql
SELECT *
FROM (
    SELECT Department, Salary FROM Employee
) AS SourceTable
PIVOT (
    AVG(Salary) FOR Department IN ([Sales], [IT], [HR])
) AS PivotTable;
```

---

### Q198: Generate Running Total

**Answer:**

Use SUM() with OVER clause and ORDER BY to calculate cumulative sum. Window function computes running total ordered by specified column.

```sql
SELECT 
    OrderID,
    Amount,
    SUM(Amount) OVER (ORDER BY OrderDate) AS RunningTotal
FROM Orders;
```

---

### Q199: Find Consecutive Records

**Answer:**

Self-join table with condition t1.ID = t2.ID - 1 to find adjacent rows, then filter WHERE clause for matching values to identify consecutive duplicate values.

```sql
SELECT DISTINCT t1.Value
FROM Table1 t1
INNER JOIN Table1 t2 ON t1.ID = t2.ID - 1
WHERE t1.Value = t2.Value;
```

---

### Q200: String Concatenation from Multiple Rows

**Answer:**

Use STRING_AGG function (SQL Server 2017+) to concatenate multiple row values into single string with specified delimiter. For older versions, use FOR XML PATH with STUFF function.

```sql
-- SQL Server 2017+
SELECT Department,
    STRING_AGG(EmployeeName, ', ') WITHIN GROUP (ORDER BY EmployeeName) AS Employees
FROM Employee
GROUP BY Department;

-- Pre-2017 version
SELECT Department,
    STUFF((
        SELECT ', ' + EmployeeName
        FROM Employee E2
        WHERE E2.Department = E1.Department
        ORDER BY EmployeeName
        FOR XML PATH('')
    ), 1, 2, '') AS Employees
FROM Employee E1
GROUP BY Department;
```




## Conclusion

This comprehensive guide covers all 200 SQL interview questions with detailed explanations, practical examples, and SQL code fragments. Each answer is designed for interview readiness with concise paragraphs, bullet points for key concepts, and executable code examples.

**Good luck with your SQL interviews!**

---

