/**
 * This function maps the array to obtain the IDs of each playlist and returns a random one.
 * @function randomly
 * @param {Array} arr It contains one object for each user's playlist.
 * @returns {String} A random ID of a user's playlist.
 */
const randomly = (arr) => {

    /**
     * @type {Array} Every ID of user's playlists.
     */
    const playlists = arr.map(item => item.id);

    /**
     * @type {Number} A random number between 0 and the length of playlists array.
     */
    const index = Math.floor(Math.random() * playlists.length);

    return playlists[index];

};

module.exports = { randomly };