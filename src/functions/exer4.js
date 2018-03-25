/**
 * Created by yairr on 11/06/2017.
 */
function getShortMessages(messages) {
    return messages.filter((message) => message.message.length<50).map((message) => message.message);
}

module.exports = getShortMessages