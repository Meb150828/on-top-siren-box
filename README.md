# On Top Siren Box

On Top Siren Box is a desktop app that makes emergency service roleplay a little better. It's a realistic police siren box that sits on-top of your game window, and can activate siren or light functions in-game.

> [!NOTE]
> This app was built for the game [ER:LC](https://www.roblox.com/games/2534724415/Emergency-Response-Liberty-County)

<img width="626" height="356" alt="image" src="https://github.com/user-attachments/assets/fd77905d-298a-49ff-8fe2-eda0e063642f" />
<img width="442" height="374" alt="image" src="https://github.com/user-attachments/assets/7e8ab3c2-7c6f-4543-bb64-3642c690ac6d" />

# How it works

The app works by simulating a key press to activate in-game functions

**Current key map:**
- Main Dial: `C`
- Power Switch: `X`
- Manual: `V`
- Air Horn: `H`
- Traffic Buttons: `Z`

**Custom keybind settings will be made in the future!**

# How to download

You can get the app under releases: [Releases](https://github.com/Meb150828/on-top-siren-box/releases)

# How to install

> [!WARNING]
> PLEASE NOTE: This app is NOT signed and will prompt the "Windows Defender Smart Screen"

You can install this app however you like.
Just extract all files into a folder and place that folder wherever you want.

You can create a shortcut or just double click on the .exe to run the app.

# Build it Yourself

If you would like to build the app yourself, follow these steps below.

Firstly, create a new Node project.
```bash
npm init
```
Follow the instructions to create your package.json file.

Next you'll want to install ElectronJS and Nut Js.
```bash
npm i electron --save-dev
```
```bash
npm i @nut-tree-fork/nut-js
```

Learn more about ElectronJS [here](https://www.electronjs.org/docs).

Now copy the files from [src](https://github.com/Meb150828/on-top-siren-box/tree/main/src) and insert them into your root project folder.

The Unity files will not be uploaded here. Instead, you will have to download the app from [releases](https://github.com/Meb150828/on-top-siren-box/releases) and extract the `/Unity` folder and place it in the root folder of the app.

If you did everything correctly you should be able to run the app using:
```bash
npm run dev
```

Please let me know if there are any issues with this guide, and i'll try to fix it!

# Support

Donations are always optional but are very much appreciated. Donations help me make amazing apps in the future or continue to support existing ones!

[![ko-fi](https://ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/H2H31U9V7J)

License[^license]

[^license]:
    This application is licensed under CC BY-NC 4.0.

    You may share and modify this application for non-commercial purposes only.
    Attribution must be given to the original author: Meb150828.

    Commercial distribution, resale, or inclusion in paid products is prohibited.

    https://creativecommons.org/licenses/by-nc/4.0/
