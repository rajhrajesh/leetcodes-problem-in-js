function numIslands(grid) {
    if (grid.length === 0) return 0;

    let count = 0;

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] === '1') {
                count++;
                dfs(grid, i, j);
            }
        }
    }

    return count;
}

function dfs(grid, i, j) {
    // If out of bounds or at a water cell, return
    if (i < 0 || i >= grid.length || j < 0 || j >= grid[i].length || grid[i][j] === '0') {
        return;
    }

    // Mark the cell as visited by setting it to '0'
    grid[i][j] = '0';

    // Visit all four adjacent cells (up, down, left, right)
    dfs(grid, i - 1, j); // up
    dfs(grid, i + 1, j); // down
    dfs(grid, i, j - 1); // left
    dfs(grid, i, j + 1); // right
}

// Example usage:
const grid = [
    ['1', '1', '0', '0', '0'],
    ['1', '1', '0', '0', '0'],
    ['0', '0', '1', '0', '0'],
    ['0', '0', '0', '1', '1']
];

console.log(numIslands(grid)); // Output: 3
