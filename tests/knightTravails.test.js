describe('knightMoves tests', () => {
    test('1 move with single path', () => {
        const moveSet = knightMoves([0,0],[1,2]);
        
        expect(moveSet).toEqual([[0,0],[1,2]]);
    })

    test('2 moves with multiple paths', () => {
        const moveSet = knightMoves([0,0],[3,3]);
        
        expect([[0,0],[2,1],[3,3]], [[0,0],[1,2],[3,3]]).toContainEqual(moveSet);

        const moveSet2 = knightMoves([3,3],[0,0]);
        
        expect([[3,3],[2,1],[0,0]], [[3,3],[1,2],[0,0]]).toContainEqual(moveSet2);
    })

    test('6 moves with multiple paths', () => {
        const moveSet = knightMoves([0,0],[7,7]);
        
        expect([[0,0],[2,1],[4,2],[6,3],[4,4],[6,5],[7,7]], [[0,0],[2,1],[4,2],[6,3],[7,5],[5,6],[7,7]]).toContainEqual(moveSet);
    })
})