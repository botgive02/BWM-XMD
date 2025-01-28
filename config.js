const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('config.env'))
    require('dotenv').config({ path: __dirname + '/config.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID || 'BWM-XMD;;;H4sIAAAAAAAAA5VV25KqOBT9l7xqH0BAwaquGgREsb1yU6fmIUCAKDdDRPGU/z6FdtfpqnOZHp5SIVl77bXX3vkO8gJXaIYaMPwOSoJrSFG7pE2JwBCMzlGECOiCEFIIhqBj0I7Dbc0qO+aH1bLSVh1i6yGRkHgpdvlRNqyzirYHhp2+gnsXlGc/xcEfAA3VLqT5UtHd0nUZW92F0yyt9MhyczUsVeYc8ANlZzfa2HkF9xYRYoLzWC8TlCEC0xlqVhCTr9HvKUtkNrUtkGyZXcWbjmN0W2mDNRckznbAOdwMrbZvVH5E+wJ9bTxqXEZ1eZ+xzaDcR9VEk6SDPTZXrMJYy8zOJ5zDFvpl/qRf4ThH4TREOcW0+bLu1tIKNEV8a4r60r9Nz+Sol9RjY6RnCnT2woRdHLCyg/xW+hrxSZ8RamWvb63EIii6+FeHFysaHXfZIfek3Oe8dcE5sGCDz8RX5MMrx/+j+3p+PNxO3GIebfgkxHyTeCOy6aXxPJWTdbzdb2NlzeynDqt/jX6HzzTGNN4MRvd269SJQnmr3XwFFstqfJomW262dBmzQNkn3SE9kz+x3MOQGh05IIMKmdtE69nFaDW4iKNrVp9Sb6NGhsm5FJEm5qTVOB/vUvNWmZV+o6M4FDpIVpkey6RjFnPubVBvT9ohjl8fGR1RMw3BkLt3AUExriiBFBf5Y0/udwEMawsFBNGHvGAz0yfq1iO7xlZN25jPoO4FU7hZesGhMi1xB1OyIr3qKFxeQReUpAhQVaFwgitakGaOqgrGqALDvx+VapMmKCsoMnEIhkDu8azQ57m+yLJ/Vd8uCaQVLMtvOaKgCyJSZHMEhpScURc8LmgDQVV5iRU5QVJkntVFTdFGY1UQej1BV/Q2xewZ1MYZqijMSjDkBrzE8qLYl+//dEGOrvTpnzZrnuuCCJOKOvm5TAsYfpjr4ycMguKcU6vJA7VdIAKGn7YRpTiPqzazcw5JkOAaqW0eYBjBtEL3LghRjQPU4oFQwpu4kGJ7dF5f+1bPLhEs161ySZE/jwykMAz6fPjiC2LwIgj96AWiIHwZ9IMQyn44kGQOtHI8W7e981sn0Trq7TyMbllj1W/L0B8jwRXNeomVhxueFkAEhR8q+zA4nku7OKL8D7i7ooYTKdLRpA5hrzNPrrWSs8UkX14+4T6tBYbff4xLtQhbvIk+8XYDTwBttdo4P7lh2ON+NkQO29NASROYhecUpylM2nDvtWiBQkQhTiswBOrClsWpouqLPhb8i2Eo81hRYwX8qN1HLz69Hm4cPfXG2WjmKJqgG6xvsVC4Wn1XrhY1Eywu9k3Npit5NH39BQgYgoW8ur31ORp3xLGJ5qdyN11sZQEXpwXnkd06YwYnRrTDlaJEeDSGx2vG5CdqO3wn98jeNPlc23ROeVzaO+hzM2NxUFXltY329NDnYMvlVcigWzW9jmeMlUk6ufqJIqUuOlp9WpRe3/QG7KrZbxplXurp8UqFAdr0Bs2mcDfjSe4fmUNe+3TcqFWTGXCd42T9nBKPKZW+vw74vX+fjoswegzb91r8Z81+mJ+9dz9hvI/v3xhstHXckekm+9hKFaUzGlGDpcZ57pzTyNd8htcCXbqUWGPWFri3XV2mkEYFycAQVJkPQReksKLKj+b91TzguyBrlLK0KKQfPQ+U9lumOrj/C2oasUuWCAAA',
    PREFIXE: process.env.PREFIX || ".",
    OWNER_NAME: process.env.OWNER_NAME || "Malik",
    NUMERO_OWNER : process.env.NUMERO_OWNER || "923046316500",              
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "yes",
    AUTO_DOWNLOAD_STATUS: process.env.AUTO_DOWNLOAD_STATUS || 'no',
    BOT : process.env.BOT_NAME || 'Zidi_MD',
    URL : process.env.BOT_MENU_LINKS || 'https://files.catbox.moe/h2ydge.jpg',
    MODE: process.env.PUBLIC_MODE || "yes",
    PM_PERMIT: process.env.PM_PERMIT || 'yes',
    HEROKU_APP_NAME : process.env.HEROKU_APP_NAME,
    HEROKU_APY_KEY : process.env.HEROKU_APY_KEY ,
    WARN_COUNT : process.env.WARN_COUNT || '3' ,
    ETAT : process.env.PRESENCE || '',
    CHATBOT : process.env.PM_CHATBOT || 'no',
    DP : process.env.STARTING_BOT_MESSAGE || "yes",
    ANTIDELETE1 : process.env.ANTIDELETE1 || 'yes',
    ANTIDELETE2 : process.env.ANTIDELETE2 || 'yes',
    MENUTYPE : process.env.MENUTYPE || '',
    ANTICALL : process.env.ANTICALL || 'yes',
                  AUTO_REACT : process.env.AUTO_REACT || 'no',
                  AUTO_REACT_STATUS : process.env.AUTO_REACT_STATUS || 'yes',
                  AUTO_REPLY : process.env.AUTO_REPLY || 'no',
                  AUTO_READ : process.env.AUTO_READ || 'no',
                  AUTO_SAVE_CONTACTS : process.env.AUTO_SAVE_CONTACTS || 'no',
                  AUTO_REJECT_CALL : process.env.AUTO_REJECT_CALL || 'yes',
                  AUTO_BIO : process.env.AUTO_BIO || 'no',
                  AUDIO_REPLY : process.env.AUDIO_REPLY || 'no',
    DATABASE_URL,
    DATABASE: DATABASE_URL === databasePath
        ? "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway" : "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway",
   
};
let fichier = require.resolve(__filename);
fs.watchFile(fichier, () => {
    fs.unwatchFile(fichier);
    console.log(`mise à jour ${__filename}`);
    delete require.cache[fichier];
    require(fichier);
});

