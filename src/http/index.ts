import axios from 'axios'
import type { AxiosRequestConfig, AxiosResponse } from 'axios'
import type { GlobalHttpConfig, AxiosConfig } from './type'
import { typeInfer } from './utils'

class Axios {
    public baseUrl = ''

    public headers = {}

    public params = {}

    constructor(baseUrl: string, globalConfig: GlobalHttpConfig) {
      this.baseUrl = baseUrl
      this.headers = globalConfig.header
      this.params = globalConfig.parmas
    }

    private getStatic(config?: AxiosRequestConfig<any>|undefined) {
      const _params = config?.params || {}
      const _headers = config?.headers || {}

      return [_params, _headers]
    }

    private getTypes(input: {data: string, name: string}):void {
      axios.post('/type', {
        ...input,
      })
    }

    public get() {
      this.getTypes({ data: '11111', name: 'test' })
    }
}

export const $http = new Axios('http://localhost:8080', {
  parmas: {},
  header: {},
})
export default $http