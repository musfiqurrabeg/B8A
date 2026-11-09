# Generics and Promises

## Introduction

Generics let us write code that works with many types, without losing type safety. Instead of using `any`, we use a placeholder like `T`, and TS fills it in when we use code.

## Basic Generics
Here's a simple function that returns whatever we give. If we pass a string, TS knows the result is a string. If we pass a number, the result will be a number

```typescript
function identity<T>(value: T): T {
  return value;
}
const text = identity("hello");
const num = identity(10);

```

## Generics with Promises
An async fucntion always resturns a `Promise`. The `T` inside tells TS what type of data we get after the promise is done.

```typescript
interface User{
    id: number;
    name: string;
}

async function getUser(): Promise<User>{
    return {id: 1, name: "Rakib"};
}

async function showUser(): Promise<void>{
    const user = await getUser();
    console.log(user.name);
}
```

After `await`, the variable `user` is a `User`. So we get autocomplete and error checking. If we write `user.age`, Typescript shows an error.

## Conclusion
Generics Help us reuse code and keep types safe. With `Promise<T>`, we always know what data is coming from an async function.