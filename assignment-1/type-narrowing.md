# Type Narrowing

## Introduction
A variable can have more than one type, like string or number. Type narrowing means we check the types first, so TypeScript knows exactly which type we are using inside that block.

## typeof
We use 'typeof' for simple types like string anf numbers.
```typescript
function format(value: string | number): string {
    if(typeof value === "string"){
        return value.toUpperCase();
    }
    return value.toFixed(2);
}
```

## instanceof
We use `instanceof` to check if something is made from a class.
```typescript
function show(value: Error | string): string {
    if (value instanceof Error) {
        return value.message;
    }
    return value;
}
```

## in operator
We use `in` to check if an object has any property
```typescript
type Dog = {bark:()=> void};
type Cat = {meow:()=> void};

function speak(pet: Dog | Cat): void{
    if("bark" in pet){
        pet.bark();
    } else{
        pet.meow();
    }
}
```

## Conclusion
Type narrowing helps us to avoid errors. use `typeof` for simple types, `instanceof` for classes, and `in` for object properties
