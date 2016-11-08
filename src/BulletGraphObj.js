var BulletGraphObj = function(ranges, poor, average, target, actual, cordinates, label, position, unit){

  this.ranges = ranges;
  this.poor = poor;
  this.average = average;
  this.target = target;
  this.actual = actual;
  this.cordinates = cordinates;
  this.label = label;
  this.position = position;
  this.unit =unit



  /*Ranges*/
  BulletGraphObj.prototype.getRanges= function(){
        return this.ranges
  };
  /*poor*/
  BulletGraphObj.prototype.getPoor= function(){
        return this.poor
  };
  /*Average*/
  BulletGraphObj.prototype.getAverage= function(){
        return this.average
  };

  /*Target*/
   BulletGraphObj.prototype.getTarget = function(){
        return this.target;
  };

    /*actual*/
  BulletGraphObj.prototype.getActual = function(){
        return this.actual;
  };

    /*cordinates*/
  BulletGraphObj.prototype.getCordinates = function(){
        return this.cordinates;
  };

    /*label*/
  BulletGraphObj.prototype.getLabel = function(){
        return this.label;
  };

      /*position*/
  BulletGraphObj.prototype.getPosition = function(){
        return this.position;
  };

      /*Unit*/
  BulletGraphObj.prototype.getUnit = function(){
        return this.unit;
  };
}

module.exports = BulletGraphObj;