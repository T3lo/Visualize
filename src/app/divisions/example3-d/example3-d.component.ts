import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'example-3d',
  templateUrl: './example3-d.component.html',
  styleUrls: ['./example3-d.component.css']
})
export class Example3DComponent implements OnInit {

  gl: WebGLRenderingContext;

  constructor() { }

  ngOnInit(): void {
    let myCanvas: any = document.getElementById("my-canvas");
    console.log(myCanvas);
    this.gl = myCanvas.getContext("webgl");
    if (this.gl === null) {
      console.log("Unable to initialize WebGL");
      return;
    } else {
      console.log("WebGL initialized");
    }
    // Set clear color to black, fully opaque
    this.gl.clearColor(0.0, 0.0, 0.0, 0.5);
    // Clear the color buffer with specified clear color
    this.gl.clear(this.gl.COLOR_BUFFER_BIT);
  }

}
