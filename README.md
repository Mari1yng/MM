# Awesome  80' memory game 
Entertaining memory card game. User is required to match 2 cards in order to progress with the game. Score counter allows users to beat own results and finish the game in less turns each time.

# UX

## Project purpose
Main purpose of this project is to provide easy game that entertains. It is designed to be easy enough for children to operate but the theme may also encourage adults to have a go.


### Site user's goals - children:
- easy game to operate
- easy enough game to win
- game that is fun
- nice pictures to be matched
- nice colors

Awesome 80s memory card game meets all the needs above because it provides intuitive navigation. Easy and medium levels are great for even very young children to solve. They may not do this in smallest number of turns possible but they still can get sense of achievement by solving the puzzle. Game that provides this is always fun to play. This game is also colorful and presents children with characters they may have not necessarily known yet.

### Site user's goals - adults(parents and guardians)
- game that will help my children develop
- easy to use for children
- game that will challenge my child but not discourage them at the same time
- game that may spark conversation/child-parent interaction
- game that my entice me to play myself

Awesome 80s memory card game is not only entertaining but it is also having educational qualities. Game is training player's memory and exercising player's brain. Game is easy to use and challenging for users at any level. Some young children can get discouraged very easily and throw tantrums thus creating problem for parents. Luckily this game is easy enough for children to finish (match all cards) but the number of turns adds another layer to the challenge. The game presents users with characters that may bring smile and trip down memory lane. It can be a good conversation starter that can add irreplaceable intergenerational connection and extra value to using this game. This may also encourage some parents to play this game themselves.

### User stories
- playing game to kill spare time (eg. during travel etc.)
- game that is easy enough for my chldren to operate
- playing the game that is visually appealing 
- playing game that can introduce my children to characters I knew as a child 
- playing game that can remind me of the characters I grew up knowing

## Design decisions

#### Color scheme
Colors that were picked had to match the theme of this game. 1980s were well known for colorful clothing that can be seen on popular TV series Miami Vice where main characters were wearing bright colors. 1980s colors are known as colors of highlighter pens - bright yellow, orange, pink, blue, green etc, so called neon colors. Another association with 1980s color scheme and known to younger generation is released in early 2000s game Grand Theft Auto (GTA) Vice City that placed it's story in 1986. There is no color scheme more 80s than neon.

#### Fonts
Font [Neon](https://www.dafont.com/neon.font), font [Beastform](https://www.dafont.com/beastform.font) that created main header as well as font [Audiowide](https://fonts.google.com/specimen/Audiowide) on this page are very reminiscent of 1980s.

#### Background
Background picture was picked to compliment Neon font and neon color scheme. At the same time this picture was intended not to be overwhelming main game areas - difficulty buttons and board area.

#### Card images
These were specifically chosen to present characters from 80s games such as Nintendo's-  Mario and Luigi - 2 plumbers from [Mario Bros](https://en.wikipedia.org/wiki/Mario_Bros.), [Donkey Kong](https://en.wikipedia.org/wiki/Donkey_Kong) from very popular game of the same name, Arcade's [Frogger](https://en.wikipedia.org/wiki/Frogger), [Bomb Jack](https://en.wikipedia.org/wiki/Bomb_Jack) as well as ghost from [Pac-Man](https://en.wikipedia.org/wiki/Pac-Man). 
These were complimented with 2 from the list of the most popular comic book characters that debuted in 1980s - [Robin](https://en.wikipedia.org/wiki/Tim_Drake) & Leonardo - one of 4 [Ninja Turtles](https://en.wikipedia.org/wiki/Teenage_Mutant_Ninja_Turtles).

#### Wireframes
Initial wireframes for this project can be seen in the [Wireframes folder](https://github.com/malc-u/memoryCardGame/tree/master/wireframes).

# Features

### Existing features
1. Welcome modal - explaining how to play the game.
2. Difficulty buttons allowing player to change how many cards they want to play - 8, 12 or 16.
3. Turns counter - lets player know how many turns has it taken so far in this game.
4. Board that displays cards in 4 columns and number of rows on computers, tablets and most phone devices.
5. Timer - that allows user only 60 seconds to finish level hard. 
6. Win modal that congratulates user winnign of the game - matching all cards.

### Features left to implement

# Technologies
1. Languages : 
- [HTML](https://www.w3schools.com/html/), 
- [CSS](https://www.w3schools.com/css/),  
- [JavaScript](https://www.w3schools.com/js/) 

2. Libraries:
- [Bootstrap](https://getbootstrap.com/) - structuring the layout of the website and mobile first design, 
- [Font Awesome](https://fontawesome.com/) - used in win modal,
- [jQuery](https://jquery.com/) - used in places to simplify DOM manipulation, 
- [Google Fonts](https://fonts.google.com/) - used to style website fonts

3. Others:
- [GitHub](https://github.com/) - code stored and shared remotely, 
- [Visual Studio Code](https://code.visualstudio.com/) - IDE,  
- [Chrome Developer Tools](https://developers.google.com/web/tools/chrome-devtools) - testing the page through the development process, 
- [Autoprefixer](https://autoprefixer.github.io/) - checking and bringing code up to date

# Testing

### Manual testing

#### Tested reposivness in Chrome:
Page was tested to make sure it was responsive to all devices. "Responsive" slider was used to make sure content is shown correctly on desktop, tablet and mobile that they look as desired by the developer.

Tested the pages on all sizes/devices available in Chrome.
- 360 x 640 Blackberry Z30 & Galaxy Note
- 375 x 812 iPhone X
- 375 x 687 iPhone 6/7/8
- 411 x 731 Pixel 2
- 411 x 823 Pixel 2 XL
- 414 x 736 iPhone 6/7/8 Plus
- 600 x 1024 Blackberyy PlayBook
- 768 x 1024 iPad
- 1024 x 1366 iPad Pro

#### Tested interaction in Chrome, Firefox and Opera(mobile):
Page buttons were tested for correct operation and whether they operated and opened intended parts of page(difficulty levels etc.)
1. Easy button - opened easy level assigning 8 tiles to the grid
2. Medium button - opened medium level assigning 12 tiled to the grid
3. Hard button - opened hard level assigning 16 tiles to the grid, opening timer
4. ? in the footer, opens welcome modal that explains game rules
5. Clicking close in win modal reloads the game
6. clicking close in game over modal reloads the game
7. Clicking close in welcome modal closes it allowing for the difficulty level to be picked 

# Deployment

Deploying this page from GitHub repository to GitHub Pages was achieved by following these steps:
1. Logging into GitHub
2. Picking malc-u/memoryCardGame repository for the list of repositories
3. Selecting Settings - from menu items on the top of the page (top, right hand corner)
4. Scrolling dow to the GitHub Pages section
5. Picking Master Branch from the "Source" drop-down menu in Github Pages (changing from the default "none" to master branch)
6. Awaiting for the page to be refreshed and website to be deployed - this happens automatically when step 5 is actioned
7. Scrolling back down to the GitHub Pages section to check/retrieve the link of newly deployed website

### How to run this project locally

To clone this project from this repository following steps need to be taken:

1. Scroll up to the repository section on this page
2. Click "Clone or download"(green button on the right hand side, just above the file list) - this will open "Clone with HTTPS" section
3. Copy the clone URL for the repository from "Clone with HTTPS" section
4. Open your local IDE
5. Open your favourite terminal (e.g. in your local IDE)
6. Change the current working directory to the location where you want the cloned directory to be
7. Type git clone, and then paste the URL you copied in Step 3 - in this project the comant should be:

```
	git clone https://github.com/malc-u/memoryCardGame.git
```

8. Press Enter to create your local clone 

Futher reading or help with cloning can be found on this GitHub Help [page](https://help.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository)