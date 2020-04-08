---
title: Week 1 of 100 Days of Flutter
date: '2020-04-11'
spoiler: First 7 tips and tricks.
---

# Draft

## #Day1 `stless` & `stful`.

We can type `stless` and `stful` and we get Autocomplete Suggestion to generate Stateless Flutter Widget or Stateful Flutter Widget Respectively.

 ![](01stlesstful.gif)


## #Day2 `If Null` Operator (`??`).

`??` checks If something is `null`. If it's not null it returns it's own value but if it's `null` it returns the value after `??` 

`return abc??10;     //reutrns 10 if abc is null else returns it's own value,` 

It also has shorthand assignment when it's null.

`abc??=5     //assigns 5 to abc if it's null`

![](02ifnull.png)


## #Day3 Inner Function.

We can define a function inside another function. 

This is to encapsulate the inner function from everything else outside the outer function.

![](03functions.png)
---

## #Day4 ..Cascade..Chaining..Fluent API

We can chain method/member calls without returning `this` from **method(), getter() and setter()** using cascade operator (..)

try in [Dartpad](https://dartpad.dartlang.org/290e17306b745ed83b9242653ca55041)

![](04cascadebefore.png)

Can be replaced with 

![](04cascadeafter.png)
