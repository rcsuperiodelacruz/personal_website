// const webdev = {
//     code:'ACIT 1620',
//     name: 'Web Fundamental Technologies'

// }

// const python = {
//     code:'ACIT 1515',
//     name: 'Scripting for IT'

// }

// const sysAdmin = {
//     code:'ACIT 1420',
//     name: 'Intro to Systems Admin'

// }
// const courses = [webdev, python, sysAdmin]
// do{
//     var myCourses = prompt('what class do you want to check')
// }

// while(isNaN(myCourses) || myCourses.length !== 4)

// let takingCourse = false;

// for (let item of courses){
//     if (item.code.includes(myCourses))
//     console.log('i am taking this course');
//     colorGreen()

// }

// if (takingCourse = true);
//     const newCourse = {code: `ACIT ${myCourses}`, name : null};
//     courses.push(newCourse);
//     console.log(`added ${myCourses} to list of current courses`);

// function colorGreen(){
//     const ulElement = document.querySelector('body.coursesBody')
//     ulElement.classList.add('greenBackground')
// }
 
function createCourseArray() {
    const courseNameElements = document.querySelectorAll(".code");
    const courseDateElements = document.querySelectorAll(".date");

    const courseArray = [];

        for (let i = 0; i < courseNameElements.length; i++) {
            const code = courseNameElements[i].textContent;
            const date = courseDateElements[i].textContent;
            courseObject = { code, date }
            courseArray.push(courseObject);
        }
    console.log(courseArray)
    return courseArray;
  }
  
const array = createCourseArray()

function findCourse(array){
    do{
            var myCourses = prompt('what class do you want to check')
        }while(isNaN(myCourses) || myCourses.length !== 4);
        
    let takingCourse = false;
    
    for (let item of array){
        if (item.code.includes(myCourses)){
            console.log('i am taking this course');
            colorGreen()
        }else{
            takingCourse = true
        }

    }
    if (takingCourse == true){
        const newCourse = {code: `ACIT ${myCourses}`, name : null};
        array.push(newCourse);
        console.log(`added ${myCourses} to list of current courses`);
        const element = document.querySelector("body.coursesBody");

        const para = document.createElement("p");
        const node = document.createTextNode(`course:${myCourses}       description: n/a        date: fall 2020`);
        para.appendChild(node)
        element.appendChild(para);


    }
}

findCourse(array)

function colorGreen(){
    const ulElement = document.querySelector('body.coursesBody')
    ulElement.classList.add('greenBackground')
}