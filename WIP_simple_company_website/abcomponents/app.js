$(function() {
  $("#topHamMenu").click(function() {
      $("#phoneMenu").toggle(200);
      setTimeout(function(){
        $("#phoneMenu").hide();
      }, 5000);
  });



  // for the more suppliers link on the about page
  $("#moreSuppliers").click(function() {
    if ($("#suppliersTable").is(":hidden")) {
      $("#moreSuppliers").text("Less Suppliers");
    } else if ($("#suppliersTable").is(":visible")) {
      $("#moreSuppliers").text("More Suppliers");
    }
    $("#suppliersTable").toggle(500);
  });

  // end of more suppliers bit.

});

/*
     FILE ARCHIVED ON 04:28:51 Oct 18, 2016 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 18:16:13 Aug 11, 2019.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  exclusion.robots: 0.206
  PetaboxLoader3.datanode: 101.027 (4)
  exclusion.robots.policy: 0.193
  captures_list: 90.999
  CDXLines.iter: 12.93 (3)
  esindex: 0.009
  LoadShardBlock: 73.858 (3)
  load_resource: 82.764
  PetaboxLoader3.resolve: 21.344
  RedisCDXSource: 1.299
*/