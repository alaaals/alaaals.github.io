$(document).ready(function() {
    var currentPage = 1;
    var numPages = $(".book .page").length;
  
    //  hide all pages except the first at first
    $(".book .page").slice(1).hide();
  
    // set the next button to move to the next page
    $(".next-btn").on("click", function() {
      if (currentPage == numPages) return false;
      showPage(currentPage + 1);
      currentPage++;
      $(".prev-btn").prop("disabled", false);
      if (currentPage == numPages) {
        $(".next-btn").prop("disabled", true);
      }
    });
  
    // Set the previous button to move to the previous page
    $(".prev-btn").on("click", function() {
      if (currentPage == 1) return false;
      showPage(currentPage - 1);
      currentPage--;
      $(".next-btn").prop("disabled", false);
      if (currentPage == 1) {
        $(".prev-btn").prop("disabled", true);
      }
    });

    $(".chapter-link").on("click", function(e) {
                e.preventDefault();
                var pageIndex = $(this).data("page");
                showPage(pageIndex);
                currentPage = pageIndex;
                $(".prev-btn").prop("disabled", pageIndex == 1);
                $(".next-btn").prop("disabled", pageIndex == numPages);
              });



});
  
  function showPage(pageIndex) {
    var pages = $(".book .page");
    var currentPage = pages.filter(".current");
    var nextPage = pages.eq(pageIndex - 1);
  
    // Hide the current page and show the next page
    currentPage.removeClass("current").hide();
    nextPage.addClass("current").show();

    // make next button not work if we are on the last page
    if (nextPage.next().length === 0) {
      $(".next-btn").prop("disabled", true);
    }
  
    // make the prev button work if we are not on the first page
    if (nextPage.prev().length !== 0) {
      $(".prev-btn").prop("disabled", false);
    }
  }

  AOS.init()