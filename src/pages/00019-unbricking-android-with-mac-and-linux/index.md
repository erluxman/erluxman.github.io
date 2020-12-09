---
title: Unbricking Android with mac/linux
date: '2020-12-09'
spoiler: How to unbrick soft brick with mac/linux
---
## Unbricking Android with mac/linux

It's easy to brick your phone. Just flash one zip/iso that you were not supposed to flash, you will most likely land on "soft brick" land.

I have been a custom ROM user for years may be for more than 8 years now. But I wasn't really aware of the ways I installed them. I just followed a blog or youtube video.

I also have another friend Prakash who has similar inclination towards custom ROMS. So he has all the windows tool that we may need if it can't be done from termial or phone itself. Of course I bricked my phone again few days ago. Usually I buy Xaiomi phones with Snapdragon processors for major two reasons.

1. They are cheap and have good hardware for the price.

2. We can flash custom ROMs like Pixel Experience, Havoc OS with Google Camera Mods to get a camera far better than the price.

When we are in the realm of installing custom ROM, we have to delete old OS, old recovery and sometimes even kernel. Usually when we delete or miss something during installation of Recovery(kinda BIOS equivalent for Android) we are bound to get a soft brick. Basically that means we have neither the OS nor the BIOS.

There are two types of ROMs, one that come as just the OS another are the ones which come with BIOS(recovery) bundled to it. But now we can't install those OS from recovery(BIOS) like we usually do for the obvious reason that we just damanged the BIOS a well. There is another mode to install OS in Android Phones that we call fastboot mode or download mode in Samsung(Samsung always have to do these stupid unwanted cloned concepts which range from bad to worst without providing any significant value). So these vendors provide fastboot ROMs as well as recovery ROMS, fastboot ROMS are usually bigger than normal custom ROMs. And these vendors also provide software like "Odin, Xaiomi flash tool" (I don't know other ones coz I have used only these two tools), which help us Install those fastboot ROMs into our phone.

When we soft brick a device, the most straight forward fix is installing the original fastboot ROM. And so when I used to brick the phone, I needed a Windows Machine but I stopped using windows after my FIFA addiction before 2015. I had been managing with friend & family's window's machine to do the dirty work of flashing fastboot ROMs. Now this friend Prakash, which I mentioned before  used to keep those Custom Roms, recovery and those files in his PC. But this time he was out of reach so had to do my own digging to this issue. Then I started asking to google a loads of questions centered around "How to unbrick Android with Mac/Linux?". Then I found

[this cute little thread](https://forum.xda-developers.com/t/is-there-any-mi-flash-for-mac-os.3625114/)

in XDA which explained my situation so amazingly well. As I was a mobile developer I already had `adb` and `fastboot` working well in my Mac.

## 😤Enough Story, give me the solution.😤

![omg](omg.gif)

**Follow the following steps in order, you can alter order of few if you know what you are doing.**

1. Download the fastboot ROM, and twrp recovery for your device.
2. Extract It (when you extract it, it should have a file called `flash_all.sh`).
3. Navigate into that extracted directory from commandline.
4. Restart phone to fastboot/download mode (find the key combination for your phone from internet) which for my phone was power + vol down and connect to your machine(mac/linux).
5. Make the shell files executable with he following command.

    `chmod +x ./*.sh`

6. Run the flash_all.sh file from commandline like this :
    `./flash_all.sh`
7. Let the process complete then the phone will restart.
8. ⛔️DON'T SKIP STOCK ROM INITIAL SETUP⛔️ 🚨 HERE IS THE TRICK 🚨, setup your phone with stock ROM and make sure from your file manager the all the internal space (full size - space taken by OS) is availiable. If you try to flash new ROM without fully setting up the original ROM, you will get greatly reduced space. In a 128 GB phone, I only got 8 GB space to use.
9. Again restart phone to fastboot mode and flash the twrp iso with the following command.

    a. `fastboot flash recovery twrp-version-devicecode.img`

    b. `fastboot reboot`

10. Now start the phone in recovery mode. (power + vol up in Xaiomi phones). Then :

    a. `Press Intall`

    b. `Install Image`

    c. `Select the twrp-version-devicecode.img`

    d. `Select "Recovery" in partition to flash`

    e. `Now swipe to confirm flash`

    f. `Reboot and go to recovery again.`

11. Now you can flash any custom ROM you like. (There are a lot of other interesting articles and tutorials in internet regarding that).

**References:**

https://forum.xda-developers.com/t/is-there-any-mi-flash-for-mac-os.3625114/
