// INDEX.HTML

// SECTION 3 SLIDE

    $('#familyGatheringBtn, #specialEventsBtn, #socialEventsBtn').click(function () {
        if (this.id == 'familyGatheringBtn') {
            $("#familyGatheringHeader").html("Family Gathering")
            $("#familyGatheringParagraph").html("We love catering for entire families. So please bring everyone along for a special meal with your loved ones. We'll provide a memorable experience for all.")
            $('#specialEvents').css('display', 'none');
            $('#socialEvents').css('display', 'none');
            $('#familyGathering').css('display', 'block');
            $(this).css('color', 'black');
            $('#specialEventsBtn').css('color', '#4C4C4C');
            $('#socialEventsBtn').css('color', '#4c4c4c');
            $("#section3HR").css({ top: '-2%', right: '107%', position: 'absolute' });
        } else if (this.id == 'specialEventsBtn') {
            $("#familyGatheringHeader").html("Special Events")
            $("#familyGatheringParagraph").html("Whether it’s a romantic dinner or special date you’re celebrating with others we’ll look after you We’ll be sure to mark your special date with an unforgettable meal.")
            $('#familyGathering').css('display', 'none');
            $('#socialEvents').css('display', 'none');
            $('#specialEvents').css('display', 'block');
            $('#specialEvents').css('position', 'relative');
            $(this).css('color', 'black');
            $('#familyGatheringBtn').css('color', '#4C4C4C');
            $('#socialEventsBtn').css('color', '#4c4c4c');
            $("#section3HR").css({ top: '34%', right: '107%', position: 'absolute' });
        } else {
            $("#familyGatheringHeader").html("Social Events")
            $("#familyGatheringParagraph").html("Are you looking to have a larger social event? No problem! We’re more than happy to cater for big parties. We’ll work with you to make your event a hit with everyone.")
            $('#familyGathering').css('display', 'none');
            $('#specialEvents').css('display', 'none');
            $('#socialEvents').css('display', 'block');
            $('#socialEvents').css('position', 'relative');
            $(this).css('color', 'black');
            $('#familyGatheringBtn').css('color', '#4C4C4C');
            $('#specialEventsBtn').css('color', '#4c4c4c');
            $("#section3HR").css({ top: '70%', right: '107%', position: 'absolute' });
        }
    });

// BOOKING.HTML

var minusIcon = $("#minusIcon"); 
var plusIcon = $("#plusIcon"); 

// DECREMENT THE AMOUNT OF PEOPLE

minusIcon.click(function () {
    var minusNumOfPeople = parseInt($("#numOfPeople").html());
    minusNumOfPeople--;
    $("#numOfPeople").text(minusNumOfPeople);

    if ($("#numOfPeople").html() < 1) {
        $("#numOfPeople").text(0);
    }
})

// INCREMENT THE AMOUNT OF PEOPLE

plusIcon.click(function() {
    var plusNumOfPeople = parseInt($("#numOfPeople").html()); 
    plusNumOfPeople ++;
    $("#numOfPeople").text(plusNumOfPeople);

    if ($("#numOfPeople").html() > 15) {
        $("#numOfPeople").text(15);
    }
    })