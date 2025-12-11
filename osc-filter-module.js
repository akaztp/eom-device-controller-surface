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
            if (!args[0].value.endsWith('.1')) {
                return undefined;
            }
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
