/**
 * Fetches the json object informations
 *
 * This class keeps track of the loaded json files and lazyloads them
 * when needed. Templates and json data will only load when realy needed
 * to prefent a seemeles user expirience
 */
class Fetcher {
  cached = []

  constructor(page) {

  }

  loadConfig() {
    console.log('load config')
  }

  /**
   * Renders the page
   */
  render(target) {

  }
}

class FetcherCache {
  constructor(url, data) {

  }

  /**
   * getData
   */
  getData() {

  }

  isLoaded() {

  }
}

module.exports = Fetcher;
