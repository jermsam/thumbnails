// This is a skeleton for a custom service class. Remove or add the methods you need here
import puppeteer from 'puppeteer';

export class ThumbnailsService {
  constructor(app, options) {
    this.options = options
    this.app = app;
  }

  async find(_params) {
    return []
  }

  async get(url, _params) {
    const outputPath = `public/thumbnails/${'home'}.png`
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);
    await page.screenshot({ path: outputPath });
    await browser.close();
    return {
      thumbnailUrl: `${this.app.get('protocol')}://${this.app.get('host')}:${this.app.get('port')}/${outputPath.replace('public/','')}`
    }
  }
  async create(data, params) {
    if (Array.isArray(data)) {
      return Promise.all(data.map((current) => this.create(current, params)))
    }

    return {
      id: 0,
      ...data
    }
  }

  // This method has to be added to the 'methods' option to make it available to clients
  async update(id, data, _params) {
    return {
      id: 0,
      ...data
    }
  }

  async patch(id, data, _params) {
    return {
      id: 0,
      text: `Fallback for ${id}`,
      ...data
    }
  }

  async remove(id, _params) {
    return {
      id: 0,
      text: 'removed'
    }
  }
}

export const getOptions = (app) => {
  return { app }
}
