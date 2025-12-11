module.exports = {
    oscInFilter: function (data) {
        var {address, args} = data
        if (address === '/update') {
            return undefined;
        }
        if (address === '/time/str') {
            return undefined;
        }
        if (address === '/beat/str') {
            var value = args[0].value;
            var beat = value.substr(0, value.indexOf(':'));
            if (lastBeat === beat || !beat.endsWith('.01')) {
                return undefined;
            }
            lastBeat = beat;
        }
        if (address === '/play') {
            lastBeat = null;
        }
        var parts = address.split('/');
        if (parts[1] === 'track') {
            if (parts[3] === 'clip' && parts[5] === 'isPlayingQueued') {
                return undefined
            }
        }
        return data;
    },
}

var lastBeat = null;
