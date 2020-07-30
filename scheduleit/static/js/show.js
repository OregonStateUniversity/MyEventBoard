$(document).ready(function () {
  $('.table-btn').on("click", function () {
  var userTimeSlot = $(this).parent().parent().children();
  var url = $(this).parent().parent().children().eq(4).text();
  var slotHash =  $(this).parent().parent().children().eq(6).text();
  var onid =  $(this).parent().parent().children().eq(5).text();
  var eventName = $(this).parent().parent().children().eq(7).text();
  $("#delete-attendee-modal").modal("show");
  
    $("#delete-attendee-button").click( function () {
      $("#delete-attendee-modal").modal("hide");
      removeAttendee(slotHash, onid, eventName, url);
    });
  });
});  


function removeAttendee(slotHash, onid, eventName, url) {
  $.ajax({
    url: url,
    type: "POST",
    data: { slotHash: slotHash, attendeeOnid: onid, eventName: eventName }
  }).done(function (response) {
    $("#delete-attendee-modal").modal("hide");
    location.reload();
  });
}
