---
title: Flutter Tips 99-100
date: '2020-07-14'
spoiler: last 2 tips and tricks on the series 100DaysOfFlutter.
---

### #99 Show widgets as `Toast` with `oktoast`

We can show toast with `oktoast` package.

1. Add dependency:

```yml
dependencies:
  oktoast: ^2.3.2
```

2. Wrap **`(Material/Cupertino)App`** with `OKToast`

```dart
OKToast(
  child: MaterialApp( home: child)
)
```

3. Show `Text/Widget` as __`Toast`__ by calling `showToast()/showToastWidget()` from anywhere.

```dart
import 'package:oktoast/oktoast.dart';

showToast("Hello world");
showToast(Text("Hello world"));
```

[visit oktoast](https://pub.dev/packages/oktoast#-installing-tab-)

![toast](https://raw.githubusercontent.com/erluxman/awesomefluttertips/master/assets/99toasts.gif)

### #100 Easy Setting screens with `settings_ui`

Almost every app needs setting page, but doing it right across multiple platform is not a easy.

#### `settings_ui` helps create Consistant Setting Page with standard components

__`SettingList`__ -> Whole setting Page

__`SettingsSection`__ -> Set of similar settings Eg. Account, Security

__`SettingTile`__ -> Single Setting item Eg. Phone Number, Email

```dart
SettingsList( // Whole setting Page
  sections: [
    SettingsSection( // Set of similar settings items
      title: 'Common',
      tiles: [
        SettingsTile( // Single Setting item
          title: 'Language',
          subtitle: 'English',
          leading: Icon(Icons.language),
        ),
        SettingsTile( // Single Setting item
          title: 'Environment',
          subtitle: 'Production',
          leading: Icon(Icons.cloud_queue),
        ),
      ],
    ),
  ],
)
```

[visit settings_ui](https://pub.dev/packages/settings_ui#-example-tab-)

| Android Setting                   | iOS Setting               |
| --------------------------------- | ------------------------- |
| ![android](https://raw.githubusercontent.com/erluxman/awesomefluttertips/master/assets/100settingandroid.png) | ![ios](https://raw.githubusercontent.com/erluxman/awesomefluttertips/master/assets/100settingios.png) |
