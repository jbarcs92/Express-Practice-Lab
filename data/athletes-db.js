const athletes = [
    {athlete: 'Michael Jordan', sport: 'basketball'},
    {athlete: 'Sidney Crosby', sport: 'hockey'},
    {athlete: 'Tiger Woods', sport: 'golf'}
];

module.exports = {
    getAll: function() {
        return athletes;
    }
};