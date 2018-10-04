$(document).ready(function(){
  $("#table-of-contents").addClass("toc-article");
  $("#table-of-contents").children("h2").addClass("toc-title");
  (function(parent,level){
    if(parent.length == 0)return;
    var sub = parent.children("li");
    sub.addClass("toc-item toc-level-"+level).children("a").addClass("toc-link");
    arguments.callee(sub.children("ul,ol").addClass("toc-child"),level+1);
  })($("#text-table-of-contents").children("ul,ol").addClass("toc"),2);
});
