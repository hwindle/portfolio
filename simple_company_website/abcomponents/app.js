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
