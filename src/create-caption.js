function create_caption(time) {
    let caption;  
    switch (new Date().getDay()) {
        case 0:
            caption = "Sunday";
            break;
        case 1:
            caption = "Monday";
            break;
        case 2:
            caption = "Tuesday";
            break;
        case 3:
            caption = "Wednesday";
            break;
        case 4:
            caption = "Thursday";
            break;
        case 5:
            caption = "Friday";
            break;
        case 6:
            caption = "Saturday";
    }
    caption = caption + "  " + time
    return caption
}

module.exports = {
    create_caption,
}
