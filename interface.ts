interface Player {
    name:string,
    club:string,
    salary:number,
    wife?: string,
    previousClubs?: string[]
}

const messy: Player = {
    name: 'L Messy',
    club: 'PSG',
    salary: 1200000,
    wife: 'hhhhhh'
}
const hannan: Player ={
    name: 'A. Hannan',
    club: 'kolabagan',
    salary: 2000
}



interface Employee{
    name: string,
    designation: string,
    salary: number,
    age: number
}

interface Developer extends Employee {
    language: string,
    codeEditor: string,
    typingSpeed: number
}

const zuku : Developer = {
    name: 'Zukarbarg',
    salary: 1100,
    age: 31,
    designation: 'Facebooker',
    language: 'js',
    codeEditor:'VS code',
    typingSpeed: 65
}