$(document).ready((function(){var t=$(".Tooltip--root");t.length>0&&t.on("mouseenter mouseleave",(function(){var t=$(this),n=t.find(".Tooltip--container"),o=t.find(".Tooltip--content"),e=n[0].getBoundingClientRect().right>window.innerWidth/2;o.toggleClass("left",e).toggle()}))}));