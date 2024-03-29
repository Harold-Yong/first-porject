import request from "@/utils/request"

export default {
  // 分页获取列表
  search(page, size, searchMap) {
    return request({
      url: `/goods/list/search/${page}/${size}`,
      method: 'post',
      data: searchMap
    })
  },
  // 新增
  add(pojo) {
    return request({
      url: '/goods',
      method: 'post',
      data: pojo
    })
  },
  
  //查询
  getById(id) {
    return request({
      url: `/goods/${id}`, // 反单引号 ``
      method: 'get'
    })
  },
  // 更新
  update(pojo) {
    return request({
      url: `/goods/${pojo.id}`, // 反单引号 ``
      method: 'put', // put 方式提交
      data: pojo
    })
  },
  // 删除方法
  deleteById(id) {
    return request({
      url: `/goods/${id}`, // 反单引号 ``
      method: 'delete', // delete 方式提交
    })
  }
}