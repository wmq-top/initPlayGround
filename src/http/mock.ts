const b = {
  a: 'dadwa',
  b: 1343,
  c: {
    d: false,
    h: 11,
  },
  e: ['1111'],
  f: [{ g: 1222, h: [{ i: 111, j: ['aaa', { number: 1 }] }] }],
}

interface Test {
  a: string
  b: number
  c: {
  d: boolean
  h: number
  }
  e: Array<string>
  f: Array<{g: number, h: Array<{i: number, j: Array<string>}>}>
  }
  
export default b