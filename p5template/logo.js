var font;
var vehicles = [];
var img;

function preload() {
    font = loadFont('./p5template/Montserrat-Medium.ttf');
    img = loadImage('./p5template/person.png');
}

function setup() {
    let canv =   createCanvas(600, 200);
    canv.position(50, -1100, 'relative');
    

    canv.background('rgba(0,255,0, 0)');

    var points = font.textToPoints('gotchu', 75, 125, 120, {
        sampleFactor: 0.2
    });

    for (var i = 0; i < points.length; i++) {
        var pt = points[i];
        var vehicle = new Vehicle(pt.x, pt.y);
        vehicles.push(vehicle);
    }
}

function draw() {
    background(51);
    for (var i = 0; i < vehicles.length; i++) {
        var v = vehicles[i];
        v.behaviors();
        v.update();
        v.show();
    }
}


function Vehicle(x, y) {
    this.pos = createVector(random(width), random(height));
    this.target = createVector(x, y);
    this.vel = p5.Vector.random2D();
    this.acc = createVector();
    this.r = 8;
    this.maxspeed = 5;
    this.maxforce = 1;
}

Vehicle.prototype.behaviors = function() {
    var arrive = this.arrive(this.target);

    arrive.mult(1);

    this.applyForce(arrive);
};

Vehicle.prototype.applyForce = function(f) {
    this.acc.add(f);
};

Vehicle.prototype.update = function() {
    this.pos.add(this.vel);
    this.vel.add(this.acc);
    this.acc.mult(0);
};

Vehicle.prototype.show = function() {
    stroke(255);
    strokeWeight(this.r);
    image(img, this.pos.x, this.pos.y, 10,10);
    //point(this.pos.x, this.pos.y);
};

Vehicle.prototype.arrive = function(target) {
    var desired = p5.Vector.sub(target, this.pos);
    var d = desired.mag();
    var speed = this.maxspeed;
    if (d < 100) {
        speed = map(d, 0, 100, 0, this.maxspeed);
    }
    desired.setMag(speed);
    var steer = p5.Vector.sub(desired, this.vel);
    steer.limit(this.maxforce);
    return steer;
};