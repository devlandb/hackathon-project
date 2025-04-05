
import initSqlJs from 'sql.js';
// Required to let webpack 4 know it needs to copy the wasm file to our assets
import sqlWasm from "!!file-loader?name=sql-wasm-[contenthash].wasm!sql.js/dist/sql-wasm.wasm";

async function runQuery() {
  const response = await fetch("example.com/sqlitedatabase"); // Consider changing this to actual endpoint or mock
  const buf = await response.arrayBuffer();
  const SQL = await initSqlJs({ locateFile: () => sqlWasm });
  const db = new SQL.Database(new Uint8Array(buf));

  const query = db.exec(`SELECT * FROM table;`);
  if (!query.length) return [];

  const { columns, values } = query[0];
  return values.map(row => {
    const obj = {};
    row.forEach((val, i) => {
      obj[columns[i]] = val;
    });
    return obj;
  });
}
export default runQuery;