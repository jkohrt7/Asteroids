# Near-Earth Objects Tracker

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Description

A react-three-fiber application that provides proportional 3D visualizations of near-Earth objects that will pass near Earth in the next week. A near-earth object is an asteroid or comet whose trajectory will take it approximately 45 million kilometres from earth's orbit.

## Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation

If you'd like to use the application, you can use it in any browser here: <https://jkohrt7.github.io/Asteroids/>. Keep in mind that WebGL applications are generally resource-intensive; if you have a low-end system, you may need to close tabs/programs for smooth performance.

If you're interested in downloading the application to contribute or just learn about react-three-fiber, you'll need a couple things installed:

- [Node.js](https://nodejs.org/en/)
- Some sort of text editor; I like [VSCode](https://code.visualstudio.com/download)

Open the project in your text editor, either by downloading the project as a zip file or using `git clone https://github.com/jkohrt7/Asteroids.git` in an empty folder, and then navigate to the root folder in a terminal (cmd, bash, etc). Run `npm i` to download and install all the dependencies and then `npm start` to run it on a local server.

## Usage

The menu on the left lists all NEO whose nearest pass to earth will occur in the next 7 days. Clicking on any of these entries will cause a proportional change in the asteroid model on the right. The asteroid model starts at about 6 feet in diameter.

## Limitations

This project is still a WIP. Some of the known issues:

- At around 3000 feet asteroids start to clip outside the bounding box.
- There is no mobile layout/support.
- The astronaut pauses before starting its animation.

## Planned features

Besides bug fixes, I hope to add

- Sorting by name/size/pass date
- Additional flavor info when clicking an asteroid; the NEO API is surprisingly extensive.
- A few more objects for comparison, like buildings.
- Replace camera's linear interp with a custom Bezier one.
- Randomly deform asteroid mesh for a little variety.

I'll probably add some changes as I have time.

## Questions

If you have any questions about using or contibuting to the project, you can contact me via email or though github:

- Email: jkohrt7@gmail.com
- Github: [@jkohrt7](https://github.com/jkohrt7)

## Credits

- [R3F](https://github.com/pmndrs/react-three-fiber)
- [MrDoob](https://github.com/mrdoob/three.js/)
- [SpaceRocks](https://github.com/SpaceRocks/)

## License

[MIT](https://opensource.org/licenses/MIT)
