## KnightTravails - Chess Knight's Shortest Path Finder

### Purpose

KnightTravails is a JavaScript implementation of a Breadth-First Search (BFS) algorithm, designed to find the shortest path for a knight to travel from one point to another on a chessboard. 

### Key Features
- Calculates the shortest path for a knight's move on a standard 8x8 chessboard.
- Employs BFS for efficient pathfinding.
- Provides the sequence of moves for the knight from the start to the end position.

### How It Works

#### Tree-Like Structure:
- While a chessboard can be thought of as a graph, the BFS traversal in this implementation effectively is represented as a tree. 
- The root of this tree is the start position, and each level represents the successive moves of the knight.

#### Level-by-Level Exploration:
- BFS explores all possible moves (children nodes) at each level before moving to the next. This ensures that when a node with `position` value that matches the given `end` position is first encountered, the associated path is the shortest path in terms of the number of moves.
- The queue used helps to maintain the order of exploration, ensuring that nodes are explored using Level Order Traversal.

#### Path Reconstruction:
- Each `Node` object is linked to its predecessor, thus allowing easy path reconstruction when the `end` position node is encountered. 

### Functions
- `knightMoves(start, end)`: Main function that calculates the shortest path from the start position to the end position.
- `bfsTraversal(start, end, reversePath = [])`: Performs the BFS traversal and path reconstruction.
- `checkValidPositions(position)`: Given a knight's position, returns all valid moves from that position.

### Usage
To use KnightTravails, import the `knightMoves` function and call it with the `start` and `end` positions:

```javascript
import knightMoves from './knightMoves.js';

const start = [0, 0]; // Starting position on the chessboard
const end = [7, 7];   // Ending position on the chessboard
const path = knightMoves(start, end);

console.log(path);
/* Prints the following: 
[
  [ 0, 0 ], [ 1, 2 ],
  [ 2, 4 ], [ 3, 6 ],
  [ 5, 7 ], [ 6, 5 ],
  [ 7, 7 ]
]
*/
```

### Contribution and Support

#### Contributing

While this project is primarily a personal learning exercise, I welcome anyone interested in using it for their learning or experimenting. Feel free to fork the repository, replicate it as you will, and share your findings. 

If you have suggestions for improvements, feel free to submit a pull request.

#### Support

For support or to report issues, contact me at [hello@codebykevin.dev](mailto:hello@codebykevin.dev). 
