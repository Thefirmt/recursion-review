// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  var output = [];
  var body = document.body;
  var recursiveFunction = function(domain) {
    if (domain.classList && domain.classList.contains(className)) {
      output.push(domain);
    }
    if (domain.hasChildNodes) {
      var innerNodes = domain.childNodes;
      for (var i = 0; i < innerNodes.length; i++) {
        recursiveFunction(innerNodes[i]);
      }
    }
  };
  recursiveFunction(body);
  return output;
};
//create a document.body variable
//create output var = []
//check for 'className' if present, push
// check if node has childnodes
//if so loop through childnodes, calling getElementsByClassName on each