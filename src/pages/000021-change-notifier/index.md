---
title: Deeper dive into ChangeNotifier.
date: '2020-12-18'
spoiler: The secret behind great habits and amazing productivity.
---

## My current understanding

As of now, change notifier for me I think of it as a Observable (Observer pattern component) that is widely recognized by Flutter's Widgets out of the box.So basically if we want any change on data or state to also update the UI, We just ask change notifier to notify to widget and whichever widget are listening to the change notifier will update themselves when we call `notifyChange()`.

I am not so sure about how deep is ChangeNotifier is integrated into Flutter Widget ecosystem. It might have been implemented by some specific widgets that might have been named something like "ChangeNotifierListener" or "ChangeNotifierBuilder" but bottom line is that there will a lambda in that widget which will build a new widget every time the `changeNotify()` callback fires the build method. Or it might be spread across a rainbow of Widgets which can take add advantage of simplicity of `ChangeNotifier`. But I strongly feel that the widgets must have some kind of builder API exposed to users, that leaves a lot of Widgets behind from potential out of the box integration with `ChangeNotifier`.

So in short my initial guess is it is an Observable which provides a callback on data change that we can use to rebuild widget. Ideally the callback can be used to do anything but widget use it to update the content when data is updated.

