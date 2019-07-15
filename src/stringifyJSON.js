// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  if (obj === null || Number.isNaN(obj) || obj === Infinity) {
    return "null";
  }
  if (typeof obj === "boolean" || typeof obj === "number") {
    return "" + obj;
  }
  if (typeof obj === "string") {
    return ('"' + obj + '"');
  }
  if (obj === undefined || typeof obj === "function") {
    return undefined;
  }
  if (Array.isArray(obj)) {
    var output = "[";
    for (var i = 0; i < obj.length; i++) {
      if (obj[i] === undefined || typeof obj[i] === "function" || Number.isNaN(obj[i]) || obj[i] === Infinity) {
        output += "null";
      } else {
        output += stringifyJSON(obj[i]);
      }
      output += ",";
    }
    output += "]";
    var newOutput = output.replace(",]", "]");
    return newOutput;
  } else {
    var output = "{";
    for (var key in obj) {
      if (obj[key] === "undefined" || typeof obj[key] === "function") {
        continue;
      } 
      if (key === "undefined") {
        continue;
      } else if (key) {
        output += '"' + key + '":';
      }
      output += stringifyJSON(obj[key]);
      output += ",";
    }
    output += "}";
    var newOutput = output.replace(",}", "}");
    return newOutput;
  } 
};

