import { query } from '../../lib/db';

export default async function handler(req, res) {
  try {
    // Example query — PostgreSQL NOW()
    const result = await query('SELECT NOW()');
    return res.status(200).json({ ok: true, now: result.rows[0] });
  } catch (err) {
    console.error(err);
    return res.status(200).json({ ok: false, error: err.message });
  }
}
