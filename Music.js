Music.prototype.resume = function () {
    this.dispatcher.resume();
};

Music.prototype.volume = function (value) {
    console.log(value);
    this.dispatcher.setVolume(value);
};

module.exports = Music;
