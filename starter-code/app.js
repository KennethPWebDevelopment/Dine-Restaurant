// SECTION 3 SLIDE

$('#familyGathering1, #familyGathering2, #familyGathering3').click(function () {
    if (this.id == 'familyGathering1') {
        $("#familyGatheringHeader").html("Family Gathering")
        $("#familyGatheringParagraph").html("We love catering for entire families. So please bring everyone along for a special meal with your loved ones. We'll provide a memorable experience for all.")
        $("#familyGatheringImg").attr("src", "images/homepage/family-gathering-desktop.jpg")
        $(this).css('color', 'black');
        $('#familyGathering2').css('color', '#4C4C4C');
        $('#familyGathering3').css('color', '#4c4c4c');
        $("#section3HR").css({top: '-2%', right: '107%', position:'absolute'});
    }
    else if (this.id == 'familyGathering2') {
        $("#familyGatheringHeader").html("Special Events")
        $("#familyGatheringParagraph").html("Whether it’s a romantic dinner or special date you’re celebrating with others we’ll look after you We’ll be sure to mark your special date with an unforgettable meal.")
        $("#familyGatheringImg").attr("src", "images/homepage/special-events-desktop.jpg")
        $(this).css('color', 'black');
        $('#familyGathering1').css('color', '#4C4C4C');
        $('#familyGathering3').css('color', '#4c4c4c');
        $("#section3HR").css({top: '34%', right: '107%', position:'absolute'});
    } else {
        $("#familyGatheringHeader").html("Social Events")
        $("#familyGatheringParagraph").html("Are you looking to have a larger social event? No problem! We’re more than happy to cater for big parties. We’ll work with you to make your event a hit with everyone")
        $("#familyGatheringImg").attr("src", "images/homepage/social-events-desktop.jpg")
        $(this).css('color', 'black');
        $('#familyGathering1').css('color', '#4C4C4C');
        $('#familyGathering2').css('color', '#4c4c4c');
        $("#section3HR").css({top: '70%', right: '107%', position:'absolute'});
    }
});