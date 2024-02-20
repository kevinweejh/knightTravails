import knightMoves from '../src/knightMoves.js'

describe('knightMoves tests', () => {
    test('1 move with single path', () => {
        const path = knightMoves([0,0],[1,2]);
        
        expect(path).toEqual([[0,0],[1,2]]);
    })

    test('2 moves with multiple paths', () => {
        const path = knightMoves([0,0],[3,3]);
        const possiblePaths = [
            [
                [0,0],[2,1],[3,3]
            ], 
            [
                [0,0],[1,2],[3,3]
            ]
        ]
        
        const pathMatches = possiblePaths.some((possiblePath) => JSON.stringify(possiblePath) === JSON.stringify(path));
        expect(pathMatches).toBe(true);

        const path2 = knightMoves([3,3],[0,0]);
        const possiblePaths2 = [
            [
                [3,3],[2,1],[0,0]
            ], 
            [
                [3,3],[1,2],[0,0]
            ]
        ]
        
        const pathMatches2 = possiblePaths2.some((possiblePath2) => JSON.stringify(possiblePath2) === JSON.stringify(path2));
        expect(pathMatches2).toBe(true);
    })

    test('6 moves with multiple paths', () => {
        const path = knightMoves([0,0],[7,7]);
        const possiblePaths = [
            [
                [0,0],[2,1],[4,2],[6,3],[4,4],[6,5],[7,7]
            ], 
            [
                [0,0],[2,1],[4,2],[6,3],[7,5],[5,6],[7,7]
            ], 
            [
                [0,0],[1,2],[2,4],[3,6],[5,7],[6,5],[7,7]
            ]
        ];
        
        const pathMatches = possiblePaths.some((possiblePath) => JSON.stringify(possiblePath) === JSON.stringify(path));
        expect(pathMatches).toBe(true);
    })

    test('same start and end position', () => {
        const path = knightMoves([7,6],[7,6]);
        
        expect(path).toEqual([[7,6]]);
    })
})