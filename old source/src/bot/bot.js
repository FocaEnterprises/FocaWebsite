const { Client } = require('discord.js');

// WishSolidor
module.exports = class FocaClient extends Client {

    constructor(options = {}){
        super({
            disableMentions: options.disableMentions || 'everyone'
        });
    }

    async start(token){
        super.login(token);
    }
};