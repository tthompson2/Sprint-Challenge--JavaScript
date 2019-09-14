class secondCuboidMaker {
    constructor(length, width, height) {
        this.length = length,
            this.width = width,
            this.height = height
    }
    volume() {
        return this.length * this.width * this.height;
    }
    surfaceArea() {
        return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
    }

}

const secondCuboid = new secondCuboidMaker(4, 5, 5);

console.log(secondCuboid.volume()); // 100
console.log(secondCuboid.surfaceArea()); // 130

// 1. Copy and paste your prototype in here and refactor into class syntax.

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.


class CubeMaker extends secondCuboidMaker {
    constructor(area) {
        super(area);
        this.area = area;
    }

    surfaceArea() {
        return (this.area * 6);
    }

    volume() {
        return (this.area * this.area * this.area);
    }
}

const cube = new CubeMaker(2);
console.log(cube.surfaceArea(2));
console.log(cube.volume(2));
