// Massiv va obyektlarga oid masalalar.

// 1-masala

// const students = [
//     { name: 'Alice', age: 20, score: 85, status: 'active' },
//     { name: 'Bob', age: 22, score: 92, status: 'inactive' }
//   ];
  
//   function getNamesAndAges(studentList) {
//     return studentList.map(student => {
//       return { name: student.name, age: student.age };
//     });
//   }
  
//   console.log(getNamesAndAges(students));
  
// 2-masala

// const students = [
//     { name: 'Alice', age: 20, score: 85, status: 'active' },
//     { name: 'Bob', age: 22, score: 92, status: 'inactive' }
//   ];
  
//   function findHighestScore(studentList) {
  
//     let highestScore = studentList[0].score;
//     let studentWithHighestScore = studentList[0];
  
//     for (let i = 1; i < studentList.length; i++) {
//       if (studentList[i].score > highestScore) {
//         highestScore = studentList[i].score;
//         studentWithHighestScore = 'name: ' + studentList[i].name + ';   ' + 'score: ' + studentList[i].score + ';';
//       }
//     }
  
//     return studentWithHighestScore;
//   }
  
//   console.log(findHighestScore(students));
  
// 3-masala

// const students = [
//     { name: 'Alice', age: 20, score: 85, status: 'active' },
//     { name: 'Bob', age: 22, score: 92, status: 'inactive' },
//     { name: 'Andrew', age: 23, score: 88, status: 'active' }
//   ];
  
//   function studentsNameStartsA(students) {
    
//     const filteredStudents = students.filter(student => {
//       return student.name.charAt(0).toUpperCase() === 'A';
//     });
    
//     return filteredStudents;
//   }
  
//   console.log(studentsNameStartsA(students));
  
// 4-masala

// const students = [
//     { name: 'Alice', age: 20, score: 85, status: 'active' },
//     { name: 'Bob', age: 22, score: 92, status: 'inactive' }
//   ];
  
//   function averageScore(students) {
    
//     let totalScore = 0;
    
//     for (let i = 0; i < students.length; i++) {
//       totalScore += students[i].score;
//     }
    
//     return totalScore / students.length;
//   }
  
//   console.log("O'rtacha ball: ", averageScore(students));
  
// 5-masala

// const students = [
//     { name: 'Alice', age: 20, score: 85, status: 'active' },
//     { name: 'John', age: 22, score: 92, status: 'inactive' },
//     { name: 'Bob', age: 23, score: 88, status: 'active' }
//   ];
  
//   function findStudentsName(students) {
    
//     const filteredStudents = students.filter(student => {
//       return student.name == 'John';
//     });
    
//     return filteredStudents;
//   }
  
//   console.log(findStudentsName(students));

// 6-masala

// const students = [
//     { name: 'Alice', age: 20, score: 80, status: 'active' },
//     { name: 'Bob', age: 22, score: 92, status: 'inactive' },
//     { name: 'Charlie', age: 23, score: 85, status: 'active' }
//   ];
  
//   function findScore(students) {
//     for (let i = 0; i < students.length; i++) {
//       if (students[i].score > 85) {
//         return i;
//       }
//     }
//   }
//   console.log(findScore(students));  

// 7-masala

// const students = [
//     { name: 'Alice', age: 20, score: 85, status: 'active' },
//     { name: 'Bob', age: 22, score: 92, status: 'inactive' },
//     { name: 'Charlie', age: 23, score: 88, status: 'active' }
//   ];
  
//   function findStudentsStatus(students) {
    
//     const filteredStudents = students.filter(student => {
//       return student.status == 'active';
//     });
    
//     return filteredStudents;
//   }
  
//   console.log(findStudentsStatus(students));

// 8-masala

// const students = [
//     { name: 'Alice', age: 20, score: 85, status: 'active' },
//     { name: 'Bob', age: 22, score: 92, status: 'inactive' },
//     { name: 'Charlie', age: 17, score: 88, status: 'active' }
//   ];
  
//   function findStudents(students) {
    
//     const filteredStudents = students.filter(student => {
//       return student.age > 18;
//     });
    
//     return filteredStudents;
//   }
  
//   console.log(findStudents(students));

// 9-masala

const students = [
    { name: 'Alice', age: 20, score: 85, status: 'active' },
    { name: 'Bob', age: 22, score: 92, status: 'inactive' },
    { name: 'Charlie', age: 23, score: 88, status: 'active' }
  ];
  
  function checkAboveScore(students) {
    for (let student of students) {
      if (student.score > 90) {
        return true;
      }
    }
    return false;
  }
  
  console.log(checkAboveScore(students)); 

  