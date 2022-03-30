# Pre-work - _Memory Game_

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program.

Submitted by: Damian Rozpedowski

Time spent: **20** hours spent in total

Link to project:

- [ ] Code: https://glitch.com/edit/#!/code-path-memory-game
- [ ] Live Site: https://code-path-memory-game.glitch.me

## Required Functionality

The following **required** functionality is complete:

- [x] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
- [x] "Start" button toggles between "Start" and "Stop" when clicked.
- [x] Game buttons each light up and play a sound when clicked.
- [x] Computer plays back sequence of clues including sound and visual cue for each button
- [x] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess.
- [x] User wins the game after guessing a complete pattern
- [x] User loses the game after an incorrect guess

The following **optional** features are implemented:

- [x] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
- [x] Buttons use a pitch (frequency) other than the ones in the tutorial
- [ ] More than 4 functional game buttons
- [x] Playback speeds up on each turn
- [x] Computer picks a different pattern each time the game is played
- [x] Player only loses after 3 mistakes (instead of on the first mistake)
- [x] Game button appearance change goes beyond color (e.g. add an image)
- [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
- [ ] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [x] Multiple modes included
- [x] Round number is displayed
- [x] High score system implemented for multiple modes
- [x] Description of the multiple gamemode is included for users understanding
- [x] Game mode buttons are styled for a more vibrant look, and properties change when hovering over them
- [x] Custom Social Icons, as well as window icon

## Video Walkthrough (GIF)

If you recorded multiple GIFs for all the implemented features, you can add them here:

- Selecting the game mode
![Selecting Gamemodes](https://cdn.glitch.global/04b9f7ae-531e-4fea-9bf7-d45021571efa/gif1.gif?v=1648610927650)

- Repeat after the flashing sequence
![Button Flashing Sequence, User follows along](https://cdn.glitch.global/04b9f7ae-531e-4fea-9bf7-d45021571efa/gif2.gif?v=1648610927846)

- You Lose if you don't repeat the pattern
![Standard Lost](https://cdn.glitch.global/04b9f7ae-531e-4fea-9bf7-d45021571efa/gif3.gif?v=1648610927444)

- In the standard mode you win after 8 rounds
![Standard Win](https://cdn.glitch.global/04b9f7ae-531e-4fea-9bf7-d45021571efa/gif4.gif?v=1648610927753)

- Sequences are always randomly generated
![Random Sequences Every Time](https://cdn.glitch.global/04b9f7ae-531e-4fea-9bf7-d45021571efa/gif5.gif?v=1648610927707)

- In the Speed Up game, rounds get progressively faster
![Speed Up Gameplay](https://cdn.glitch.global/04b9f7ae-531e-4fea-9bf7-d45021571efa/gif6.gif?v=1648610927727)

- In the 3 Strikes game, you have three lives, fail three times and you lose
![3 Strikes Gameplay](https://cdn.glitch.global/04b9f7ae-531e-4fea-9bf7-d45021571efa/gif7.gif?v=1648610927937)

- A high score system is implemented for each of the modes except for Standard
![High Score System](https://cdn.glitch.global/04b9f7ae-531e-4fea-9bf7-d45021571efa/gif8.gif?v=1648610927677)

## Reflection Questions

1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here.

   - [CSS Styles]
  https://www.w3schools.com/
   - [Box Shadows] 
  https://getcssscan.com/css-box-shadow-examples
   - [Background Image] 
  https://commons.wikimedia.org/wiki/File:Digital_rain_animation_small_letters_clear.gif
   - [Empty Divs] 
  https://stackoverflow.com/questions/18994830/empty-div-with-style-height-will-not-display
   - [My Game] 
  https://studio.code.org/projects/applab/mDhWDJvYTvNQBCtyLQhu55pWPmcFseE9xkWB_ZsH1pU/view
   - [Text Shadows]  
  https://www.inwebson.com/css3/css-tricks-for-headings-fonts-and-text-styling/

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words)
   - I recorded audio with a synthesizer that I would use for this memory game instead of the preset sounds. 
   When I added the audio into my project it worked, but a major problem I had was that I would hear 
   crackling/popping when the user stopped holding down on the button.
   I've spent a lot of time researching how to fix this, and got close to making it sound better with fade outs. 
   I didn't feel comfortable leaving audio unfinished and it was already taking a long time to try and figure out. 
   I decided to just change tones from the synthesizer included in the project. I wanted to focus on other aspects on 
   my project to make sure I was making good progress on my game, but this is something I still would like to figure
   out and improve on.
   
   - Understanding Javascript syntax was also a challenge at first but I already had previous knowledge of JavaScript 
   as well as other programming languages so I was able to learn fast. I created a game similar to this during High School 
   through code.org using JavaScript so I was already very familiar with the concept of memory games and the code that comes 
   along with it. 
   
   

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words)
   - How do you get a website to remember certain information when you refresh or reopen the site?
   - How do you use audio in a way that avoids crackling/popping?
   - How do you create a database of information such that includes users email adress / login information?
   - How do you create a start up animation? Ex. Logo pops up, does an animation, then brings up the game along with the rest of the site
   - What softwares/tools are used in Web Development aside from html,css,javascript in order to brainstorm ideas, quickly test out blueprints to sites, use non-copyrighted images/videos, etc.
    

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words)
   - A mode that doubles, maybe even triples, the amount of buttons on the screen, as well as some other modes to add more replayability
   - Make it more compatible with different screen sizes such as phones screens
   - I would add different audio when pressing the game buttons, I tried to do this originally but I wasn't able to figure it out with the sound I made and decided to focus on other aspects on my project. 
   - A volume adjuster
   - Multiple audio types, hearing the same button sounds can get stale
   - Buttons that change the theme of the site, includes new button styles, new text style, background image, etc.
   - Some sort of way for the site to remember your high score through the use of cookies?
   - Implementation of a leaderboard system, this may need users to sign up with an account
   - Replacing alerts for winning, losing, and getting stikes, with pop up windows that have unique animations
   - Optimizing and organizing code

## Interview Recording URL Link

[My 5-minute Interview Recording](https://youtu.be/Ia-m6qTgL0A)

## License

    Copyright Damian Rozpedowski

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
