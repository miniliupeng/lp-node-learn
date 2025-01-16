import { DatabaseSync} from 'node:sqlite'

const db = new DatabaseSync('data.db');

db.exec('CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, age INT) STRICT');

const insert = db.prepare('INSERT INTO users (name, age) VALUES (?, ?)');

insert.run('张三', 18);
insert.run('李四', 20);

const query = db.prepare('SELECT * FROM users ORDER BY id');

const users = query.all();
console.log(users);

// node --experimental-sqlite ./13-sqlite.mjs