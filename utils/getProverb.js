const sqlite3 = require('sqlite3');
const path = require('path');
const dbPath = path.resolve(__dirname, '../data/proverb.db')
const db = new sqlite3.Database(dbPath, sqlite3.OPEN_READWRITE, (err) => {
    if(err) console.log(err);
});

const getProverb = () => {
    return new Promise((resolve, reject) => {
        let result = new Object();
        let sql = `SELECT * FROM proverb ORDER BY RANDOM() LIMIT 1`;
        db.all(sql, (err, rows) => {
            try {
                result.serial = rows[0].serial
                result.word = rows[0].word
                resolve(result)
            } catch {
                resolve(`{serial: 0, world: '값을 불러올 수 없습니다.'}`)
            }
        });
    })
}

module.exports = getProverb;