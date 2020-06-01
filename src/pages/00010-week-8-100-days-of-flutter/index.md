---
title: Flutter Tips 50-56
date: '2020-06-1'
spoiler: 7th batch of 7 tips and tricks on the series 100DaysOfFlutter.
---

## #Day 50 Use `a is! A` instead of `!(a is A)`

Flutter has special keyword to check if an instance ___`is not a type`___. 

    var name = "Hello World";

    // ✅✅Right way✅✅
    assert(name is String);

    //❌❌Wrong way❌❌
    assert(!(name is int));

    // ✅✅Right way✅✅
    assert( name is! int); 


## #Day51 Named constructor.

Have you been using static methods to initialze Objects with name?

Use named constructor :

    class Color {
        Color({this.r, this.b, this.g});
        int r = 0, g = 0, b = 0;

        // ❌ static method
        static Color red() => Color(r: 255,g: 0,b:255);                                      
        // ✅ named constructor
        Color.red() {
            r = 255;
        }

        // ❌ static method
        static Color cyan() => Color(r:0, b: 128, g: 128);
        // ✅ named constructor
        Color.cyan(): g = 128, b = 128;
        // ✅ named constructor
        Color.cyan() {
            g = 128;
            b = 128;
        }
    }

## #Day52 Imports on Steroids 💉💉

___`as :`___ If we import two or more libraries that have conflicting identifiers, we can use them with `prefix.` given after `as` keyword.

`import 'package:library.dart' as lib;`


___`show :`___ Show only certain class and hide everything else from it.

`import 'dart:math' show max,tan;`


___`hide :`___ Hide only certain class & show everything else from it.

`import 'dart:core' hide String;`

![](52importonsteroid.png)

## #Day53 final vs const 

`final and const` in dart are confusing to the level we think both of them are same. Let's see their diffrences

| ___`final`___ (global / static / member variables)                                                                                                                                                                 | ___`const`___ (static / global variables)                                                                                                 |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------- |
| Has single value of a `member or static or global variable` from start to end.                                                                                                                                     | Has single value of a `static or global variable` from start to end.                                                                      |
| Different objects of same type can have different final values in same member varaible.                                                                                                                            | Different objects of same type cannot have different const values in same varaible. (i.e. `const members should be static`)               |
| Should be initialzed `before constructor is called`.                                                                                                                                                               | Should be `strictly initialized during declaration`.                                                                                      |
| Only the `final` declared `member/staic/global variable` objects are immutable, their content variables may not. i.e. variables inside final objects can be udpated / reassigned if they are not final themselves. | All `const` declared `Golbal/static` variable objects including all their internal content varibales are immutable and cannot be changed. |
| Can be `intialized` with `immutable/ mutable / calculated values` determined at  `compile time or runtime`.                                                                                                        | Can be `initialized`  with `only immutable values` with all their immutable internal varaibles, determined at `compile time`.             |

We can take example of various computers and how they can be compared with dart modifiers. 
![](53finalvsconstant.png)

## #Day54 FutureBuilder

If you want to display data from API backend or any async source, use FutureBuilder.

FutureBuilder will automatically give you Widget with default  value until the data arrives from API/ async Source. 

As soon as the real data arrives, it will rebuild the Widget with actual data. 

Just provide the async function / source that will return the values asynchronously along with initial(default) data.

It works very similar to `StreamBuilder` 

        //Future Builder
        FutureBuilder<List<Player>>(
            initialData: [],
            future: FakePlayersAPI().getPlayers(),
            builder: (context, snapshot) {
                if (snapshot.data.isEmpty) return CircularProgressIndicator()
                else return PlayersListWidget(snapshot.data)
            }
        )

        //Fake Backed API.
        class FakePlayersAPI {
            Future<List<Player>> getPlayers() async {
                await Future.delayed(Duration(seconds: 1));
                return _players;
            }

            Future<String> getPlayerStory() async {
                await Future.delayed(Duration(seconds: 1));
                return playerStoryText;
            }
        }


[try on codepen](https://codepen.io/erluxman/pen/PoPrgbR)


![](54futurebuilder.gif)


## #Day55 `Get` the easy Navigation library.

Bored of writing `PageRoute`,`context` and `builder` without actual use of them just to navigate to different Widget? Use `get: ^version` library.

Also this gives us superpower to `navigate/show dialog/ BottomSheet/ Snackbar` without`BuildContext`, there might be cool patterns to be developed with this freedom.

1. Just Replace your MaterialApp with `GetMaterialApp`.
2. Start navigating like this : 
        
        //Go to next screen
        Get.to(NextScreen());
        
        //Show dialog
        Get.dialog(MyDialogWidget());
        
        //Show bottom sheet
        Get.bottomSheet(MyButtomSheetWidget)

        //Show snackbar 
        Get.snackbar(title, subTitle);


[visit library](https://pub.dev/packages/get) 

[demo](https://gist.github.com/erluxman/2d1723e3395325fb5511809f6f95e21b)

![](55getlib.gif)

## #Day56 `pub outdated`

Maintaining latest versions of pub dependencies is pain. Even worse, every latest versions are compatible.

From dart 2.8 onwards, the command `pub outdated` gives you the overview of your dependencies and possible upgrades in ___**`Resolvable column`**___.

![](56outdated.png) 

🚨🚨Tip: use `flutter pub outdated` if `pub outdated` can't find Flutter SDK. 


