import forOwn from 'lodash.forown'
import isObject from 'lodash.isobjectlike'
import isArray from 'lodash.isarray'

// I hate it too, but I spent too much time trying to get this typed correctly
function traverseFields(data: any): any {
  if (isArray(data)) {
    return data.map((item) => traverseFields(item))
  }
  if (isObject(data)) {
    let tmp = `fields` in data ? { sys: data.sys, ...data.fields } : data
    tmp = forOwn(tmp, (v, k) => {
      try {
        tmp[k] = traverseFields(v)
      } catch (e) {
        console.log(e)
      }
    })
    return tmp
  }
  return data
}

export default traverseFields
