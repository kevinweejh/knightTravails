import { Node } from './Node.js';

export default knightMoves = (start, end) => {
    let reversePath = bfsTraversal(start, end);
    let path = reversePath.reverse();

    return path;
}

const bfsTraversal = (start, end, reversePath = []) => {
    const rootNode = new Node(start, null);
    let queue = [rootNode]
    
    while (queue.length !== 0) {
        let currentNode = queue.shift();

        if (JSON.stringify(currentNode.position) === JSON.stringify(end)) {
            reversePath.push(currentNode.position);
            while (currentNode.previousNode !== null) {
                reversePath.push(currentNode.previousNode.position);
                currentNode = currentNode.previousNode;
            }
            return reversePath;
        } else {
            let validPositions = checkValidPositions(currentNode.position);
            validPositions.forEach((validPosition) => {
                const nextNode = new Node(validPosition, currentNode);
                queue.push(nextNode);
            })
        }
    }
    // No return statement as given the knight's move pattern, it will eventually reach the `end`
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