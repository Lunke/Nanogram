
class Tile {
    constructor() {
        this.isPixel = true;
        this.isHidden = true;
        this.color = [0, 0, 0];
    }

    drawAt(r, c) {
        var x = (c + 2) * TILE_SIZE;
        var y = HEADER_HEIGHT + (r + 2) * TILE_SIZE;

        if (won) {
            noStroke();
            fill(this.color[0], this.color[1], this.color[2]);
        } else if (this.isHidden) {
            if (showError) {
                stroke(100, 0, 0);
                fill(255, 0, 0);
            } else {
                stroke(180, 190, 205);
                fill(255);
            }
        } else {
            if (this.isPixel) {
                stroke(18, 35, 54);
                fill(54, 72, 96);
            } else {
                stroke(180, 190, 205);
                fill(255);
            }
        }
        rect(x, y, TILE_SIZE, TILE_SIZE);

        if (!this.isHidden && !this.isPixel && !won) {
            noStroke();
            textSize(32);
            textAlign(CENTER, CENTER);
            fill(18, 35, 54);
            text('X', x + TILE_SIZE / 2, y + TILE_SIZE / 2);
        }
    }
}
