import { Node } from './Node.js';

export default knightMoves = (start, end) => {
    let path = [];
    let queue = [];
    const rootNode = new Node(start);

    // Handles same start/end position
    if (JSON.stringify(start) == JSON.stringify(end)) {
        path.push(start);
        return path;
    }

    queue.push(start)
    path = bfsTraversal(queue, end);

    return path;
}

const bfsTraversal = (queue, end) => {
    let path = [];
    while (queue.length !== 0) {
        let current = queue.shift();
        let validPositions;

        if (JSON.stringify(current) === JSON.stringify(end)) {
            path.push(current);
            return path;
        } else {
            path.push(current);
            validPositions = checkValidPositions(current);
            validPositions.forEach((validPosition) => queue.push(validPosition))
        }
    }
}

const checkValidPositions = ([currentX, currentY]) => {
    const possibleMoves = [[1,2], [2,1], [-1,2], [2,-1], [1,-2], [-2,1], [-1,-2], [-2,-1]];
    let validPositions = [];

    possibleMoves.forEach(([moveX,moveY]) => {
        const possiblePositionX = currentX + moveX;
        const possiblePositionY = currentY + moveY;

        const validPositionX = (0 <= possiblePositionX) && (possiblePositionX <= 7);
        const validPositionY = (0 <= possiblePositionY) && (possiblePositionY <= 7);

        if (validPositionX && validPositionY) {
            validPositions.push([possiblePositionX,possiblePositionY]);
        }
    })

    return validPositions;
}