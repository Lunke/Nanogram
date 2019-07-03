
class Button {

    constructor(x, y, w, h, index) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.index = index;
        this.active = false;
    }

    hit(mouseX, mouseY) {
        if (mouseX >= this.x && mouseX <= this.x + this.w && mouseY >= this.y && mouseY <= this.y + this.h) {
            return true;
        }
        return false;
    }

    draw() {
        if (this.active) {
            fill(38, 84, 162);
        } else {
            fill(165, 190, 215);
        }
        rect(this.x, this.y, this.w, this.h, 5);
        textAlign(CENTER, CENTER);
        fill(255);
        text("Level " + (this.index + 1), this.x, this.y, this.w, this.h);
    }
}