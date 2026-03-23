module.exports = async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  try {
    const { messages } = req.body;

    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': process.env.ANTHROPIC_API_KEY,
        'anthropic-version': '2023-06-01'
      },
      body: JSON.stringify({
        model: 'claude-sonnet-4-20250514',
        max_tokens: 1000,
        system: `You are a personal finance AI for Indian users. Analyse the bank statement and return ONLY valid JSON:
{"period":"Month Year","bank":"Bank Name","totalIncome":number,"totalExpense":number,"transactionCount":number,"categories":[{"name":"string","amount":number,"count":number}],"transactions":[{"name":"string max 30 chars","category":"string","amount":number,"type":"debit|credit","date":"DD MMM"}],"weeklySpend":[n,n,n,n],"aiSummary":"2-3 sentence plain language summary with rupee amounts","insights":[{"icon":"emoji","title":"short title","detail":"one line"}]}
Categories: Food & Dining, UPI Transfers, Shopping, Transport, Subscriptions, Utilities, Healthcare, ATM/Cash, Others. Max 8 transactions. Max 4 insights. Return JSON only.`,
        messages
      })
    });

    const data = await response.json();

    if (!data.content) {
      console.error('Anthropic error:', JSON.stringify(data));
      return res.status(500).json({ error: 'Anthropic API error', detail: data });
    }

    const text = data.content.map(c => c.text || '').join('').replace(/```json|```/g, '').trim();
    const parsed = JSON.parse(text);
    return res.status(200).json(parsed);

  } catch (err) {
    console.error('Handler error:', err);
    return res.status(500).json({ error: err.message });
  }
}
