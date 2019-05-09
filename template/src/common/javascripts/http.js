// import axios from 'axios'

const httpDefaultOpts = {}

export class Http {
  constructor (opts = httpDefaultOpts) {
    this.header = opts.header
  }
}

export default new Http()
