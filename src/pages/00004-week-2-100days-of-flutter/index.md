---
title: Flutter Tips 8-14
date: '2020-04-18'
spoiler: Second batch of 7 tips and tricks on the series 100DaysOfFlutter.
---

## #Day8 
If you have you been adding `Container()` with `maxwidth` at the bottom of `ListItem` to put divider line like me, you have been doing it wrong all the time. 

Flutter has `ListView.separated` just for that purpose. We have to also provide `separatorBuilder` in addition to what we already passed while using `ListView.builder`

**Bonus 🍾🎁🎊🎉 : You do not have to check if the item is last in order not to draw divider after the last item.**

[try in dartpad](https://dartpad.dartlang.org/31ec967b140ac6a5795c38ea4bdfd9a2)

![](08separatedlist.png)


## #Day9 Passing Function as parameter

We can simply pass a `function`  as `parameter` like we pass a variable. When we want to call the passed function from calling function, we just call it with `()` at the end along with parameters if it accepts any.

[try in dartpad](https://dartpad.dev/fa46336f5c1b3287c6420d3b3a277178)

![](09functionargument.png)

--- 

## #Day10 Relative Import : the right way to import `.dart` files we have in our lib package.

Ever wondered what is the right way to import a file in your own package? 

Prefer relative imports to absolute imports.

Why? 

- It's shorter and cleaner.
- We can easily differentiate our files and third-party ones.
- It makes sense, doesn't it?

![](10import.png)

## #Day11 Reusing Text Style

Tired of defining `textStyle` everytime you want to customize `Text`? **Even worse** if you have multiple theme (**dark, light, fullblack theme etc**).

just use 

`Theme.of(context).textTheme.title`

where there are other styles like `title` inside `textTheme`.

[try in dartpad with theme example](https://dartpad.dartlang.org/5270714ce97853fc36db1b17c255c999)

![](11texttheme.png)


## #Day12 Use Literal to initialize growable collections.

If we are to initialize growable collection, use literal initialization rather than with constructors.

    // Good
    var points = [];
    var addresses = {};

    // Bad
    var points = List();
    var addresses = Map();


    // With type argument 

    // Good
    var points = <Point>[];
    var addresses = <String, Address>{};

    // Bad
    var points = List<Point>();
    var addresses = Map<String, Address>();



## #Day13 Fat arrow functions

We can use fat arrow  `=>`  members (`function, getter,setter`) in dart. 

I would not use `=>` if the declaration is not **ONE LINER**. But few lines are OK. 


[try on dartpad](https://dartpad.dev/76922028eccb4535f0cdddc8e4b17aa1)

    void main() {
    User()
        ..firstName = "Laxman"
        ..lastName = " Bhattarai"
        ..age = 18
        ..printUser();
    }

    class User {
    String firstName;
    String lastName;
    DateTime birthday;

    String get fullName => firstName + lastName;
    
    set age(int age) =>  birthday = DateTime.now().subtract(Duration(days: age * 365));        
    
    int get age => DateTime.now().year - birthday.year;
    
    bool get isAdult => age >= 18;
    
    printUser() => print(fullName + " is a ${isAdult ? "Adult" : "Child"}");     
    }



## #Day14 FractionallySizedBox

Ever wanted the widget to have height and width exactly in the same proportion to it's screen's height and width? 

FractionallySizedBox is build exactly for that usecase. Just give it the fraction you need for your height and width and it will handle everything else. The fraction value will range between 0.0 to 1.0

    FractionallySizedBox(
                widthFactor: 0.5,
                heightFactor: 0.5,
                child: Container(color: Colors.green),
            )


[try on codepen](https://codepen.io/erluxman/pen/rNOLOzG)

![](14fractionallysizedbox.gif)