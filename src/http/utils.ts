// the Most Important Func
const typeInfer = (value: any, level: number, key?: string):any => {
  if (typeof value !== 'object') {
    if (level === 2) { // 数组中的基本数据类型不需要索引签名
      return typeof value
    } 
    return `${ key }: ${ typeof value }`
  }
  if (!value) {
    if (level === 2) { // 数组中的基本数据类型不需要索引签名
      return 'null | unknown'
    } 
    return `${ key }: null | unknown`
  }
  if (level === 0) { // 根结构的对象返回interface KEY { key: type }
    if (typeof value === 'object' && !Array.isArray(value)) {
      const midlleString:string = Object
      .keys(value).map((item: string) => typeInfer(value[item], 1, item)).join('\n')    
      return `interface ${ creatNewType() }{\n${ midlleString }\n}`
    }
    // 根结构的数组
    if (typeof value === 'object' && Array.isArray(value)) {
      return `type ${ key } = Array<${ typeInfer(value[0], 2) }>`
    }
  } else if (level === 1) {
    // 非根结构的对象 返回{ key: type }
    if (typeof value === 'object' && !Array.isArray(value)) {
      const midlleString:string = Object
      .keys(value).map((item: string) => typeInfer(value[item], 1, item)).join('\n')    
      return `${ creatNewType(key) }: {\n${ midlleString }\n}`
    }
    // 非根结构的数组
    if (typeof value === 'object' && Array.isArray(value)) {
      return `${ key }: Array<${ typeInfer(value[0], 2) }>`
    }
  } else if (level === 2) {
    // 数组里的对象
    if (typeof value === 'object' && !Array.isArray(value)) {
      const midlleString:string = Object
      .keys(value).map((item: string) => `${ item }: ${ typeInfer(value[item], 2, item) }`).join(', ')
      return `{${ midlleString }}`
    }
    if (typeof value === 'object' && Array.isArray(value)) {
      return `Array<${ typeInfer(value[0], 2) }>`
    }
  }
}

const creatNewType = (name?: string) => name || 'Test'

export { typeInfer }