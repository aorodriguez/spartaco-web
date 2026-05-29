import { NextResponse } from 'next/server';

export async function GET() {
  const SHEET_BASE_URL = process.env.GOOGLE_SHEET_CSV_URL;
  
  if (!SHEET_BASE_URL) {
    console.error('Missing GOOGLE_SHEET_CSV_URL environment variable');
    return NextResponse.json({ error: 'Configuración de servidor incompleta' }, { status: 500 });
  }
  
  // Añadimos un timestamp para evitar que Google nos entregue una versión vieja
  const timestamp = new Date().getTime();
  const SHEET_URL = `${SHEET_BASE_URL}${SHEET_BASE_URL.includes('?') ? '&' : '?'}t=${timestamp}`;

  try {
    const response = await fetch(SHEET_URL, {
      next: { revalidate: 900 }, // Revalidar cada 15 minuto ahora
    });

    if (!response.ok) throw new Error('Error al obtener datos de la planilla');

    const csvText = await response.text();
    const lines = csvText.split(/\r?\n/).filter(line => line.trim() !== '');
    
    const rows = lines.map(line => {
      // Un parser más robusto para CSV
      const result = [];
      let curValue = "";
      let inQuotes = false;
      for (let i = 0; i < line.length; i++) {
        const char = line[i];
        if (char === '"') inQuotes = !inQuotes;
        else if (char === ',' && !inQuotes) {
          result.push(curValue);
          curValue = "";
        } else curValue += char;
      }
      result.push(curValue);
      return result.map(v => v.replace(/^"|"$/g, '').trim());
    });

    const headers = rows[0].map(h => h.toLowerCase());
    const data = rows.slice(1).map(row => {
      const item: any = {};
      headers.forEach((header, index) => {
        item[header] = row[index] || "";
      });
      return item;
    });

    return NextResponse.json(data);
  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json({ error: 'Fallo al cargar productos' }, { status: 500 });
  }
}
