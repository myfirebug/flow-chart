import Mock from 'mockjs'
// 列表
export const temporaryList = {
  url: '/temporary-list',
  method: 'get',
  data: {
    code: 0,
    sucess: true,
    data: Mock.mock({
      'datas|8': [
        {
          value: '@id',
          label: '@csentence(3,5)'
        }
      ]
    }),
    message: '成功'
  }
}

// 树
export const temporaryTree = {
  url: '/temporary-tree',
  method: 'get',
  data: {
    code: 0,
    sucess: true,
    data: Mock.mock({
      'datas|5': [
        {
          label: '@province',
          value: '@id',
          children: [
            {
              label: '@county',
              value: '@id',
              children: [
                {
                  label: '@county',
                  value: '@id'
                },
                {
                  label: '@county',
                  value: '@id'
                },
                {
                  label: '@county',
                  value: '@id'
                },
                {
                  label: '@county',
                  value: '@id'
                }
              ]
            }
          ]
        }
      ]
    }),
    message: '成功'
  }
}
