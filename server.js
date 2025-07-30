const express = require('express');
const puppeteer = require('puppeteer');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json({ limit: '10mb' }));

app.post('/convert', async (req, res) => {
  const html = req.body.html;
  if (!html) return res.status(400).json({ error: 'HTML is required' });

  try {
    const browser = await puppeteer.launch({
      headless: 'new',
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    });

    const page = await browser.newPage();
    await page.setContent(html, { waitUntil: 'networkidle0' });

    const pdfBuffer = await page.pdf({
      format: 'A4',
      printBackground: true,
      margin: { top: '30px', bottom: '30px', left: '25px', right: '25px' }
    });

    await browser.close();

    const base64 = pdfBuffer.toString('base64');

    res.json({
      success: true,
      file: base64,
      mimeType: 'application/pdf',
      fileName: 'manual.pdf'
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error generating PDF' });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`PDF service listening on port ${PORT}`);
});

