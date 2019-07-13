// 1. Copy and paste your prototype in here and refactor into class syntax.

class CuboidMaker  {

    constructor(Length, Width, Height)
    {
        this.Length = Length;
        this.Width = Width;
        this.Height = Height;
    }

    surfaceArea(){
  
        return (2 * ((this.Length*this.Width) + (this.Length* this.Height) + (this.Width * this.Height)));
      }

      volume() {

        return(this.Length*this.Width*this.Height);
      }

  };

  const cuboid = new CuboidMaker(4, 5, 5);

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.