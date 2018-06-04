function getFirstSelector(selector) {
  return document.querySelector(`${selector}`);
}

function nestedTarget() {
  return document.querySelector('#nested')
}

function increaseRankBy(n) {
  n = parseInt(n);
  var list = document.querySelectorAll('ul.ranked-list li')
  for (let i = 0; i<list.length; i++) {
    var num = list[i].innerHTML;
    num = parseInt(num);
    num += n;
    list[i].innerHTML = num;
  }
  return list;
}

function deepestChild() {
  var nodeList = document.querySelectorAll('#grand-node div')
  var loc = nodeList.length-1;
  return nodeList[loc].innerHTML;
}