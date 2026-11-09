// Problem-1
function multiplyValue(value: number, multiplier?: number): number {
  if(multiplier === undefined){
    return value * 2;
  } else{
    return value * multiplier;
  }
}



// Problem-2
function processInput(value: string | number | boolean): string | number {
  if(typeof value === "string"){
    return value.toLowerCase().trim();
  } else if (typeof value === "number"){
    return value * 10;
  } else {
    if(value === true){
      return "Active";
    } else{
      return "Inactive";
    }
  }
}



// Problem-3
type Coordinate = readonly [number, number, string];

function formatCoordinate(data: Coordinate): string {
  const latitude: number = data[0];
  const longitude: number = data[1];
  const locationName: string = data[2];
  return "Location: " + locationName + " ("+ latitude + ", " + longitude + ")"
}



// Problem-4
function concatenateArrays<T>(...arrays: T[][]): T[] {
  let result: T[] = [];
  for(let i=0; i < arrays.length; i++){
    result = result.concat(arrays[i]);
  }
  return result;
}



// Problem-5
interface Course{
  title: string;
  students: number;
  isPublished: boolean;
}

function getPopularCourses(courses: Course[], minStudents: number): Course[] {
  const result: Course[] = []
  for(let i=0; i<courses.length; i++){
    if(courses[i].isPublished === true && courses[i].students >= minStudents){
      result.push(courses[i])
    }
  }
  return result
}

const courses = [
  { title: "TypeScript Mastery", students: 120, isPublished: true },
  { title: "Draft Course", students: 200, isPublished: false },
  { title: "Basic HTML", students: 45, isPublished: true },
  { title: "Next.js Pro", students: 85, isPublished: true }
];



// Problem-6
function pluckValues<T,K extends keyof T>(items: T[], key: K): T[K][] {
  let results: T[K][] = [];

  for(let i=0; i<items.length; i++){
    results.push(items[i][key]);
  }
  return results;
}

const users = [
  { id: 1, name: "Rakib", role: "Admin" },
  { id: 2, name: "Sadia", role: "Editor" },
  { id: 3, name: "Tariq", role: "Subscriber" }
];

pluckValues(users, "name");
pluckValues(users, "id");



// Problem-7
class Employee{
  protected name: string;
  private baseSalary: number;

  constructor(name: string, baseSalary: number){
    this.name = name;
    this.baseSalary = baseSalary;
  }

  getDetails(): string{
    return "Employee: " + this.name + ", Base Salary: " + this.baseSalary; 
  }
}

class Manager extends Employee{
  private department: string;

  constructor(name: string, baseSalary: number, department: string){
    super(name, baseSalary);
    this.department = department;
  }

  getRoleInfo(): string{
    return "Manager of " + this.department + ": " + this.name;
  }
}

const manager = new Manager("Alice", 50000, "Engineering");
manager.getDetails();
manager.getRoleInfo();



// Problem-8
async function validateAgeAsync(age: number): Promise<string>{
  if(age<18){
    throw new Error("Access Denied: Must be 18 or older");
  }

  await new Promise<void>((resolve) => {
    setTimeout(resolve, 1000);
  });

  return "Access Granted";
}


