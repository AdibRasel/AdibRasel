// pdfConverter.ts
import puppeteer from 'puppeteer';



async function toPDF(url: string): Promise<string> {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url, { waitUntil: 'networkidle2' });
  const pdfBuffer = await page.pdf({ format: 'A4' });
  await browser.close();
  return URL.createObjectURL(new Blob([pdfBuffer], { type: 'application/pdf' }));
}

export { toPDF };
