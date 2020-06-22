//builds a grid of lines!!!
var slider
var input

function setup() {
  createCanvas (400,400)

  createElement('h1',"Contrast Game")
  //input = createInput('grayscale value here')
  slider = createSlider(77,177,165)
  slider.position(200,20)
  createP('Use the slider to make the grid disappear, then notice the gradient scale difference.')
  createP('Richard Breazeale, M.D.')
  createP('Southeastern Retina Associates')
  createP('423-756-1002')




  // put setup code here

  }

  function draw() {

    background (127)
    fill(255)
    stroke(slider.value())//color of lines
    strokeWeight(0.5)//width of lines
    for(x=0;x<=width;x=x+20){//spacing of lines
      for (y=0;y<=height;y=y+20){
      line(x, 0, x, height)
      line(0, y, width, y)
text('grayscale value =' + slider.value(), 10, 20)
text('gradient difference ='+ (slider.value()-127), 10, 40)


}
//createP("grayscale value = "+ slider.value())
}


  // put drawing code here
}
