---
layout: single
title:  "SQL Study 1"
categories: coding

tag: [SQL, coding]
toc: true
author_profile: false
sidebar:
    nav: "docs"
---

## SQL Review

### 1. Basic
<pre>
<small>
<strong>SHOW DATABASES </strong>: Show what DB in the server 
<strong>USE world </strong>: Assgined Database to use
<strong>SHOW TABLES </strong>: Information of tables in Database world
<strong>Describe table </strong>: Information of a table city
<strong>SELECT ... FROM </strong>: Bringing columns that I want to print
</small>
</pre>

```sql
SELECT select_expr
FROM talbe_references
WHERE where_condition
GROUP BY {col_name | expr | position}
HAVING where_condition
ORDER BY {col_name | expr | position}
```

<pre>
<small>
<strong>Condition </strong>: OR, AND, =, <, >, <=, >=, <>, !=, NOT, BETWEEN...AND, IN, LIKE, SubQuery
<strong>IN </strong>: 'KOR', 'USA', 'JPN'
<strong>LIKE </strong>: 'US_', 'Tel %'
<strong>SubQuery </strong>: Query statement in Query, but not printing more than one result
    -> ANY (= SOME), ALL
</small>
</pre>

```sql
SELECT *
FROM city
WHERE Population > ANY ( SELECT Population
                         FROM city
                         WHERE District = 'New York' );
```

<pre>
<small>
<strong>ORDER BY </strong>: Statement for print order (default : ASCENDING / DESC)
</small>
</pre>

```sql
ORDER BY CountryCode ASC, Population DESC;
```

<strong>DISTINCT </strong>: Print unique values
<strong>LIMIT </strong>: Limit the number of results
<strong>GROUP BY </strong>: Combine as a group, Using with Aggregate Function, Using in SELECT statement
<strong>Condition </strong>: AVG(), MIN(), MAX(), COUNT(), COUNT(DISTINCT), STDEV(), VARIANCE()
</small>
</pre>

```sql
SELECT CountryCode, MAX(Population) AS 'Population'
FROM city
GROUP BY CountryCode;
```

<pre>
<small>
<strong>HAVING </strong>: Simmilar with WHERE statement, but must be next to GROUP BY
</small>
</pre> 

```sql
SELECT CountryCode, MAX(Population)
FROM city
GROUP BY CountryCode
HAVING MAX(Polulation) > 80000;
```

<pre>
<small>
<strong>ROLLUP </strong>: Using when we need total or middle total, Using WITH ROLLUP with GROUP BY statement
</small>
</pre> 

```sql
SELECT CountryCode, Name, SUM(Poplulation)
FROM city
GROUP BY CountryCodem Name WITH ROLLUP;
```
<pre>
<small>
<strong>JOIN </strong>: Bring data from another talbe
</small>
</pre> 

```sql
SELECT *
FROM city
JOIN country ON city.CountryCode = country.Code
JOIN countrylanguage ON city.CountryCode = countrylanguage.CountryCode;
```

<pre>
<small>
<strong>Function </strong>:
    LENGTH(), CONCAT(), LOCATE(), LEFT(), RIGHT(), LOWER(), UPPER(), REPLACE(), TRIM(BOTH(default),                     LEADING(),TRAILING(), FORMAT(), FLOOR(), CEIL(), ROUND(), SQRT(), POW(), EXP(), LOG(), SIN(), COS(), TAN(),         PI(), ABS(), RAND(), NOW(), CURDATE(), CURTIME(), DATE(), MONTH(), DAY(), HOUR(), MINUTE(), SECOND(),               MONTHNAME(), DAYNAME(), DAYOFWEEK(), DAYOFMONTH(), DAYOFYEAR(), DATE_FORMAT()
</small>
</pre>

### 2. Create 
<pre>
<small>
<strong>CREEATE TABLE </strong>: Create table
</small>
</pre> 

```sql
CREATE TABLE city2 AS SELECT * FROM city;
```

<pre>
<small>
<strong>CREATE DATABASE </strong>: Create new database
</small>
</pre>

```sql
CREATE DATABASE jay; /* ( database named jay ) */
USE jay;
REATE TABLE test2 (
        id INT NOT NULL PRIMARY KEY,
        col1 INT NULL,
        col2 FLOAT NULL,
        col13 VARCHAR(45) NULL
        )
```

<pre>
<small>
<strong>ALTER TABLE </strong>: ADD or MODIFY or DROP columns
</small>
</pre> 

```sql
ALTER TABLE test2
ADD col4 INT NULL;
or
MODIFY col4 VARCHAR(20) NULL;
or
DROP col4;
```

<pre>
<small>
<strong>Index:</strong>
    - Using for find the data that I want in the table
    - The more time takes if there are large data because it search the whole talbe in order
    - If we modify, drop, or add data, we must to modify index
    - Often used in table for search
<strong>CREATE INDEX</strong>
</small>
</pre> 

```sql
CREATE INDEX CollIdx
ON test (col1)
```

<pre>
<small>
<strong>FULLTEXT INDEX</strong>
</small>
</pre> 
```sql
ALTER TABLE test
```

<pre>
<small>
ADD FULLTEXT Col3Idx(col3); (To search text index)
<strong>DROP INDEX</strong>
</small>
</pre> 

```sql
ALTER TABLE test
DROP INDEX Col3Idx;
or
DROP INDEX Col2IDx ON test;
```

<pre>
<small>
<strong>VIEW</strong>
    - Virtual table in the database
    - It has rows and columns, but not stored in the database
    - By using VIEW, it can print various tables or view in one table
    Positive
        - It can print needed columns not whole table for user
        - Using it for complex quert to simplify
        - Query reusable
    Negative
        - One defiend view cannot be modified
        - Add, Drop, and Modify have some limitaion
        - Cannot have own index
</small>
</pre> 

```sql
CREATE VIEW testView AS
SELECT Col1, Col2, Col3
FROM test;
             
SELECT * FROM testView;
```

<pre>
<small>
<strong>INSERT </strong>:
    - Can be added into the row very next to talbe name
    - Must have the same number of columns with table
</small>
</pre> 

```sql
INSERT INTO test
VALUES(1, 123, 1.1, "Test");
```

<pre>
<small>
<strong>INSERT INTO SELECT </strong>:
    - Insert data in test into test2
</small>
</pre> 

```sql
INSERT INTO test2 SELECT * FROM test;
```

<pre>
<small>
<strong>UPDATE </strong>:
    - Modifying statement
    - Can be skipped the WHERE statement, but change values of whole columns in the talbe
</small>
</pre> 

```sql
UPDATE test
SET col1 = 1, col2 = 1.0, col3 = 'test'
WHERE id = 1;
```

<pre>
<small>
<strong>DELETE </strong>:
    - Delete whole row
    - Data capacity is not decreased
    - Can be restored
</small>
</pre> 

```sql
DELETE FROM test
WHERE id = 1;
```

<pre>
<small>
<strong>TRUNCATE </strong>:
    - Cannot be restored
    - Data capacity is decresed
    - Remove row
<strong>DROP TABLE </strong>:
    - Cannot be restored
    - Remove whole table
<strong>DROP DATABASE </strong>:
    - Remove whole database
</small>
</pre>

### 3. Practice problem
<pre>
<small>

<strong> Problem1 : Join tables city, country, and countrylanguage, and create view of Korea
USE world </strong>

Answer:
</small>
</pre> 

```sql
CREATE VIEW allView AS
      
SELECT city.Name, country.SurfaceArea, city.Population, countrylanguage.Language
FROM city
JOIN country ON city.CountryCode = country.Code
JOIN countrylanguage ON city.CountryCode = countryCode = countrylanguage.CountryCode
WHERE city.CountryCode = 'KOR';
       
SELECT * FROM allView;
```