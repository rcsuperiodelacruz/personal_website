const webdev = {
    code:'ACIT 1620',
    name: 'Web Fundamental Technologies'

}

const python = {
    code:'ACIT 1515',
    name: 'Scripting for IT'

}

const sysAdmin = {
    code:'ACIT 1420',
    name: 'Intro to Systems Admin'

}
const courses = [webdev, python, sysAdmin]
do{
    var myCourses = prompt('what class do you want to check')
}

while(isNaN(myCourses) || myCourses.length !== 4)

let takingCourse = false;

for (let item of courses){
    if (item.code.includes(myCourses))
    console.log('i am taking this course');
}

if (takingCourse = true);
    const newCourse = {code: `ACIT ${myCourses}`, name : null};
    courses.push(newCourse);
    console.log(`added ${myCourses} to list of current courses`);