
// 1. CURRYING


// 1. Sum of 3 numbers
function add(a) {
    return function(b) {
        return function(c) {
            console.log(a + b + c);
        };
    };
}

add(10)(20)(30);


// 2. Name, department, salary
function employee(name) {
    return function(department) {
        return function(salary) {
            console.log(name);
            console.log(department);
            console.log(salary);
        };
    };
}

employee("Abinesh")("IT")(30000);


// 3. Multiplication of 3 numbers
function multiply(a) {
    return function(b) {
        return function(c) {
            console.log(a * b * c);
        };
    };
}

multiply(2)(3)(4);


// 4. Curried to uncurried
function curriedAdd(a) {
    return function(b) {
        return function(c) {
            console.log(a + b + c);
        };
    };
}

curriedAdd(10)(20)(30);

function uncurriedAdd(a, b, c) {
    console.log(a + b + c);
}

uncurriedAdd(10, 20, 30);


// 5. Curried and uncurried 4 numbers
function curriedFour(a) {
    return function(b) {
        return function(c) {
            return function(d) {
                console.log(a + b + c + d);
            };
        };
    };
}

curriedFour(10)(20)(30)(40);

function uncurriedFour(a, b, c, d) {
    console.log(a + b + c + d);
}

uncurriedFour(10, 20, 30, 40);


// ==============================
// 2. SPREAD OPERATOR
// ==============================

// 6. Merge two arrays
let arr1 = [10, 20, 30, 40, 50];
let arr2 = [60, 70, 80, 90, 100];

let mergeArray = [...arr1, ...arr2];

console.log(mergeArray);


// 7. Merge student names
let students1 = ["Abi", "Arun", "Bala"];
let students2 = ["Ravi", "Vijay", "Kumar"];

let students = [...students1, ...students2];

console.log(students);


// 8. Original values + 3 new values
let numbers = [10, 20, 30];

let newNumbers = [...numbers, 40, 50, 60];

console.log(newNumbers);


// 9. Merge employee objects
let employee1 = {
    name: "Abinesh",
    age: 22
};

let employee2 = {
    department: "IT",
    city: "Chennai"
};

let employeeDetails = {
    ...employee1,
    ...employee2
};

console.log(employeeDetails);


// 10. Copy object and add salary
let emp = {
    name: "Abinesh",
    department: "IT"
};

let newEmp = {
    ...emp,
    salary: 30000
};

console.log(newEmp);


// 11. Combine two objects
let object1 = {
    name: "Abinesh",
    age: 22
};

let object2 = {
    city: "Chennai",
    course: "MERN"
};

let combinedObject = {
    ...object1,
    ...object2
};

console.log(combinedObject);


// 12. Reverse order using spread
let first = [1, 2, 3];
let second = [4, 5, 6];

let reverseArray = [...second.reverse(), ...first.reverse()];

console.log(reverseArray);


// ==============================
// 3. REST OPERATOR
// ==============================

// 13. Two fixed + remaining values
function values(a, b, ...remaining) {
    console.log(a);
    console.log(b);
    console.log(remaining);
}

values(10, 20, 30, 40, 50);


// 14. Student function
function student(name, department, ...marks) {
    console.log(name);
    console.log(department);
    console.log(marks);
}

student("Abinesh", "IT", 80, 85, 90);


// 15. Two numbers + additional numbers
function addNumbers(a, b, ...numbers) {
    console.log(a);
    console.log(b);
    console.log(numbers);
}

addNumbers(10, 20, 30, 40, 50);


// 16. Print 5th value from rest
function fifthValue(...numbers) {
    console.log(numbers[4]);
}

fifthValue(10, 20, 30, 40, 50, 60);


// 17. Product, price + remaining
function product(product, price, ...details) {
    console.log(product);
    console.log(price);
    console.log(details);
}

product("Laptop", 50000, "HP", "Black", "Windows");


// 18. 10 numbers, rest after first two
function tenNumbers(a, b, ...remaining) {
    console.log(a);
    console.log(b);
    console.log(remaining);
}

tenNumbers(10, 20, 30, 40, 50, 60, 70, 80, 90, 100);


// ==============================
// 4. ARRAY DESTRUCTURING
// ==============================

// 19. Extract all 4 values
let valuesArray = [10, 20, 30, 40];

let [a, b, c, d] = valuesArray;

console.log(a);
console.log(b);
console.log(c);
console.log(d);


// 20. Student details
let studentDetails = ["Abinesh", "IT", 22];

let [studentName, department, age] = studentDetails;

console.log(studentName);
console.log(department);
console.log(age);


// 21. First and fourth values
let numberArray = [10, 20, 30, 40, 50];

let [firstValue, , , fourthValue] = numberArray;

console.log(firstValue);
console.log(fourthValue);


// 22. Nested array
let nestedArray = [10, 20, [30, 40]];

let [x, y, [z, w]] = nestedArray;

console.log(x);
console.log(y);
console.log(z);
console.log(w);


// 23. Three-level nested array
let threeLevel = [10, [20, [30, 40]]];

let [p, [q, [r, s]]] = threeLevel;

console.log(p);
console.log(q);
console.log(r);
console.log(s);


// ==============================
// 5. OBJECT DESTRUCTURING
// ==============================

// 24. Employee object
let employeeObj = {
    name: "Abinesh",
    designation: "Developer",
    salary: 30000
};

let {
    name,
    designation,
    salary
} = employeeObj;

console.log(name);
console.log(designation);
console.log(salary);


// 25. Student object
let studentObj = {
    name: "Abinesh",
    department: "IT",
    cgpa: 8.5
};

let {
    name: studentName2,
    department: department2,
    cgpa
} = studentObj;

console.log(studentName2);
console.log(department2);
console.log(cgpa);


// 26. Extract only 3 properties
let employeeObj2 = {
    name: "Abinesh",
    age: 22,
    department: "IT",
    salary: 30000,
    city: "Chennai"
};

let {
    name: name2,
    department: department3,
    salary: salary2
} = employeeObj2;

console.log(name2);
console.log(department3);
console.log(salary2);


// 27. Nested object
let company = {
    employee: {
        name: "Abinesh"
    },
    team: {
        members: ["Arun", "Bala", "Ravi"]
    }
};

let {
    employee: { name: employeeName },
    team: { members }
} = company;

console.log(employeeName);
console.log(members);


// 28. Company → Department → Employee
let companyDetails = {
    department: {
        employee: {
            name: "Abinesh"
        }
    }
};

let {
    department: {
        employee: { name: companyEmployeeName }
    }
} = companyDetails;

console.log(companyEmployeeName);


// ==============================
// 6. ARRAY MANIPULATION
// ==============================

// 29. Push 3 fruits
let fruits = ["Apple", "Mango", "Orange", "Banana", "Grapes"];

fruits.push("Pineapple", "Papaya", "Guava");

console.log(fruits);


// 30. Pop last value
let nums1 = [10, 20, 30, 40, 50];

nums1.pop();

console.log(nums1);


// 31. Shift first student
let studentList = ["Abi", "Arun", "Bala", "Ravi", "Vijay"];

studentList.shift();

console.log(studentList);


// 32. Unshift 2 numbers
let nums2 = [30, 40, 50, 60];

nums2.unshift(10, 20);

console.log(nums2);


// 33. Replace 30 with 100
let nums3 = [10, 20, 30, 40, 50];

nums3.splice(2, 1, 100);

console.log(nums3);


// 34. Remove 2 values from middle
let nums4 = [10, 20, 30, 40, 50, 60];

nums4.splice(2, 2);

console.log(nums4);


// 35. Add 3 values in middle
let nums5 = [10, 20, 60, 70];

nums5.splice(2, 0, 30, 40, 50);

console.log(nums5);


// 36. Remove 2 and add 3
let nums6 = [10, 20, 30, 40, 50];

nums6.splice(2, 2, 100, 200, 300);

console.log(nums6);


// 37. Remove student from middle
let studentsList = ["Abi", "Arun", "Bala", "Ravi", "Vijay"];

studentsList.splice(2, 1);

console.log(studentsList);


// 38. Shopping cart
let cart = ["Laptop", "Mouse", "Keyboard"];

cart.push("Headphones");
console.log(cart);

cart.pop();
console.log(cart);

cart.shift();
console.log(cart);

cart.unshift("Mobile");
console.log(cart);


// ==============================
// 7. ARRAY MERGE & EXTRACTION
// ==============================

// 39. concat two arrays
let array1 = [10, 20, 30];
let array2 = [40, 50, 60];

let concatResult = array1.concat(array2);

console.log(concatResult);


// 40. concat three arrays
let arrayA = [10, 20];
let arrayB = [30, 40];
let arrayC = [50, 60];

let concatThree = arrayA.concat(arrayB, arrayC);

console.log(concatThree);


// 41. Slice index 2 to 5
let sliceArray = [10, 20, 30, 40, 50, 60, 70, 80];

let sliceResult = sliceArray.slice(2, 6);

console.log(sliceResult);


// 42. First 3 students
let studentsArray = ["Abi", "Arun", "Bala", "Ravi", "Vijay"];

let firstThree = studentsArray.slice(0, 3);

console.log(firstThree);


// 43. Flat 3 levels
let flatArray = [1, [2, [3, 4]]];

let flatResult = flatArray.flat(2);

console.log(flatResult);


// 44. Flat 4 levels
let deepArray = [1, [2, [3, [4, 5]]]];

let deepResult = deepArray.flat(3);

console.log(deepResult);


// 45. Slice vs Splice

// Slice
let sliceExample = [10, 20, 30, 40, 50];

let sliceValue = sliceExample.slice(1, 3);

console.log(sliceValue);
console.log(sliceExample);


// Splice
let spliceExample = [10, 20, 30, 40, 50];

spliceExample.splice(1, 2);

console.log(spliceExample);


// ==============================
// 8. SEARCH & OTHER METHODS
// ==============================

// 46. Includes
let searchNumbers = [10, 20, 30, 40, 50];

console.log(searchNumbers.includes(50));


// 47. indexOf
let duplicateNumbers = [10, 20, 30, 20, 40, 20];

console.log(duplicateNumbers.indexOf(20));


// 48. lastIndexOf
let duplicateNumbers2 = [10, 20, 30, 20, 40, 20];

console.log(duplicateNumbers2.lastIndexOf(20));


// 49. Sort
let sortNumbers = [50, 10, 40, 20, 30];

sortNumbers.sort((a, b) => a - b);

console.log(sortNumbers);


// 50. Reverse
let reverseNumbers = [10, 20, 30, 40, 50];

reverseNumbers.reverse();

console.log(reverseNumbers);