export class Node {
    constructor(position, previousNode) {
        this.position = position; // Format: [currentX, currentY]
        this.previousNode = previousNode;
    }
}