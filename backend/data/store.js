import { Low } from 'lowdb';
import { JSONFile } from 'lowdb/node';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const adapter = new JSONFile(path.join(__dirname, '..', '..', 'db.json'));
const defaultData = { products: [], logs: [], profiles: {} };
const db = new Low(adapter, defaultData);

await db.read();

// Ensure db.data is initialized with default structure if it's null or missing keys
db.data ||= defaultData;
db.data.products ||= [];
db.data.logs ||= [];
db.data.profiles ||= {};

export default db;
