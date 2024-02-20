import { Node } from './Node.js';

export default knightMoves = (start, end) => {
    let path = [];
    let queue = [];
    const rootNode = new Node(start, null);

    // Handles same start/end position
    if (JSON.stringify(rootNode.position) == JSON.stringify(end)) {
        path.push(rootNode.position);
        return path;
    }

    queue.push(rootNode)
    path = bfsTraversal(queue, end);

    return path;
}

const bfsTraversal = (queue, end) => {
    let path = [];
    while (queue.length !== 0) {
        let currentNode = queue.shift();
        let validPositions;

        if (JSON.stringify(currentNode.position) === JSON.stringify(end)) {
            path.push(currentNode.position);
            while (currentNode.previousPosition !== null) {
                path.push(currentNode.previousPosition);
                currentNode 
            }
            return path;
        } else {
            validPositions = checkValidPositions(currentNode.position);
            validPositions.forEach((validPosition) => {
                const nextNode = new Node(validPosition, currentNode.position);
                queue.push(nextNode)
            })
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