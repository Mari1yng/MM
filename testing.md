# Testing

### Manual testing

#### Responsiveness was tested in Chrome Developer Tools:

Page was tested to make sure it was responsive to all devices. "Responsive" slider was used to make sure content is shown correctly on desktop, tablet and mobile, that they look as desired by the developer.

**Tested** the pages **on** all sizes/devices **available in Chrome**.
- 360 x 640 Blackberry Z30 & Galaxy Note
- 375 x 812 iPhone X
- 375 x 687 iPhone 6/7/8
- 411 x 731 Pixel 2
- 411 x 823 Pixel 2 XL
- 414 x 736 iPhone 6/7/8 Plus
- 600 x 1024 Blackberry PlayBook
- 768 x 1024 iPad
- 1024 x 1366 iPad Pro

##### Responsiveness bugs/problems:

- **Difficulty buttons were moving from inline to block too early**, when the board was still underneath them not to the right. This was very bad UX - changed media in css.
- **Cards were floating left**, especially visible on smaller devices - added Bootstrap's mx auto class to each tile created via JavaScript.
- **More than 4 tiles in 1 row** on some devices - amended media in css to allow for tile size adjustment in order to keep only 4 tiles in 1 row for all devices .
- Part of **header and turn counter were blending** on mobile devices - changed media to amend colour of header for mobile devices in css.

#### Tested interaction in Chrome, Firefox and Opera(on mobile):

Page buttons were tested for correct operation and whether they operated and opened intended parts of page(difficulty levels etc.).

1. Easy button:
    - seleceted easy level and confirmed assigning 8 tiles to the grid
    - played the game finding 3 out of 4 matches and re-clicked easy button to make sure new grid is created and game is reset
    - confrimed that each time easy button is clicked all cards are being re-shufled
    - completed the game in easy mode and confirmed that win modal is displayed
    - clicked another diffuculty and confirmed that easy grid is being replaced with another difficulty grid.

2. Medium button:
    - repeated all steps from easy button level and confirmed that correct grid is assigned/displayed, cards are re-shuffled and game reset when clicked.

3. Hard button:
    - repeated all steps from easy and medium buttons to confirm correct grid is assigned/displayed, cards are re-shuffled and game reset.
    - selected hard level and confirmed the timer is reset to count down.

4. Clicking close in win modal reloads the.

5. Clicking close in game over modal reloads the game.

6. Clicking close in welcome modal closes it allowing for the difficulty level to be picked.


##### Interaction bugs/problems:

- **Game over modal** - clicking keyboard or modal backdrop was allowing for a game to be carried on even though time has run out and modal was still displayed. This was fixed by switching backdrop off in this modal as well as initializing modal without keyboard.


#### Tested game logic using using Chrome, Firefox and Opera(on mobile):

This test was done to make sure JavaScript runs correctly (as desired) on these browsers.

1. Attempted to click more than 2 cards in 1 turn.
2. Attempted to double click in order to achieve a match on 1 card.
3. Tried to change difficulty levels many times in order for grid to be created incorrectly.
4. Changed difficulty level from hard to other one and then returning to hard trying to overlap setInterval timer function for the timer to count down quicker than every second.
5. Picking the same level and uncovering the same card in a grid hoping card deck stays not shuffled.
6. Playing game on 1 level then changing the game hoping for tiles on new level that were also displayed on previous level to remain not shuffled.
7. Changing level mid way playing the game hoping for the turn counter to remain unchanged.
8. Clicked hard level few times to check whether the timer resets.


##### Game logic bugs/problems:

- **Double clicking** of the **card** was assigned as a card match - fixed by adding another level of comparing card matching - making sure that both card don't have the same ID.
- **Difficulty level changed mid game** was not resetting turn counter - fixed by adding timeLeft = 0 every time after new grid is created.
- **Double** or more **click**s on level **hard** cause the timer to count down fast (quicker than every second) - left unfixed.
- **Changing difficulty** level **after** the **fast count down started** resets the grid but leaves the timer to count down to zero and bring up game over modal - left unfixed.


### User stories testing

1. Playing game to kill spare time (eg. during travel etc.):
    - this game is perfect to play in spare time, it is easy to operate, engaging and not too complicated,
    - playing this game does not require too much concentration therefore can be played on the move,
    - easy and quick game for a user to keep themselves occupied during spare time.

2. Game that is easy enough for my children to operate
    - game that requires matching 2 cards only is not too complicated even for very yung children, 
    - game is easy to operate - just couple of clicks gets children engaged and challenged,
    - game allows user to pick easy level that requires matching only 4 pairs,
    - for older children there is also added difficulty of time limit on leve hard - easy but challenging.

3. Playing the game that is visually appealing
    - game is very colorful and nice looking,
    - game presents user with characters that attract attention,
    - fonts and colors used evoke emotion.
    
4. Playing game that can introduce my children to characters I knew as a child:
    - game presents users with very popular game and comic book characters from 80s: Mario and Luigi - 2 plumbers from [Mario Bros](https://en.wikipedia.org/wiki/Mario_Bros.), [Donkey Kong](https://en.wikipedia.org/wiki/Donkey_Kong) from very popular game of the same name, Arcade's [Frogger](https://en.wikipedia.org/wiki/Frogger), [Bomb Jack](https://en.wikipedia.org/wiki/Bomb_Jack) as well as ghost from [Pac-Man](https://en.wikipedia.org/wiki/Pac-Man), complimented with 2 from the list of the most popular comic book characters that debuted in 1980s - [Robin](https://en.wikipedia.org/wiki/Tim_Drake) & Leonardo - one of 4 [Ninja Turtles](https://en.wikipedia.org/wiki/Teenage_Mutant_Ninja_Turtles).

5. Playing game that can spark conversation between me and my children/me and my parents:
    - introducing characters that were very popular in 80s and beginning of 90s will allow children to ask questions about them,
    - characters used in the cards can also allow parents to present children with original games and comics that the characters come from.


### Automated testing

Following online validators were used to test the code:
- [W3C Markaup Validation Service](https://validator.w3.org/) for HTML validation
- [W3C CSS Validation Service](https://jigsaw.w3.org/css-validator/) for CSS validation
- [JS Hint](https://jshint.com/) for JavaScript validation

##### HTML validation:
It brought up no errors and 1 warning about empty header h2 - this tag is used by JavaScript to display timer. Left unfixed.

##### CSS validation:
No errors found.

##### JavaScript validation:
Few semicolons misplaced - fixed.