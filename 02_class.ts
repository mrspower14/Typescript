// //1.TypeScript에서의 class정의
// class Student {
//     public name: string;
//     private grade: number;

//     constructor(name: string, grade: number){
//         this.name = name;
//         this.grade = grade;
//     }

//     public get Grade() {
//         return this.grade;
//     }
//     public set Grade(value: number) {
//         if (value < 1 || value > 4) {
//             throw new Error('학년은 1~4 사이여야 합니다.');
//         }
//         this.grade = value;
//     }
// }

// const student = new Student('손흥민', 10);
// const grade = student.Grade;
// console.log(grade);
// student.Grade= 4;
// console.log(student.Grade);
// // student.grade=3;                //오류발생
// // console.log(student.grade);     //오류발생

class Student {
    name: string;
    protected grade: number;

    constructor(name: string, grade: number) {
        this.name = name;
        this.grade = grade;
    }
    getGrade(): number {
        return this.grade;
    }
}

class HighSchoolStudent extends Student {
    constructor(name: string, grade: number){
        super(name, grade);
    }

    public printGrade() {
        console.log(`printGrade 학년: ${this.grade}`);
    }
    public printGrade2() {
        console.log(`printGrade2 학년: ${this.getGrade()}`);
    }
}

const s = new HighSchoolStudent('손흥민', 1);
s.printGrade()
s.printGrade2()

// s.grade = 2;
// console.log(s.getGrade());

// const s1 = new Student('손흥민', 2);
// s1.grade = 3;
// console.log(s1.getGrade());

