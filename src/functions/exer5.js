/**
 * Created by yairr on 11/06/2017.
 */
function checkUsersValid(goodUsers) {
    return function allUsersValid(submittedUsers) {
        var goodUserIds = goodUsers.map((user) => user.id);
        return submittedUsers.every((user) => goodUserIds.indexOf(user.id) >= 0);
    };
}

module.exports = checkUsersValid