const moment = require("moment")

function create_caption(time) {
    const date = moment()
    let caption;
    switch (date.day()) {
        case 0:
            caption = "یکشنبه";
            break;
        case 1:
            caption = "دوشنبه";
            break;
        case 2:
            caption = "سه شنبه";
            break;
        case 3:
            caption = "چهارشنبه";
            break;
        case 4:
            caption = "پنجشنبه";
            break;
        case 5:
            caption = "جمعه";
            break;
        case 6:
            caption = "شنبه";
    }
    caption = caption + time
    return caption
}

module.exports = {
    create_caption,
}
