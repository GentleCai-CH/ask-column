import { UserProps, ColumnProps, PostProps } from './store'

export const userData = {
  data: {
    isLogin: true,
    nickName: 'Gentle',
    _id: '1',
    column: '1',
    email: '2406@qq.com',
    password: '2406qq'
  }
}

export const testColumns: ColumnProps[] = [
  {
    _id: '1',
    title: 'test1的专栏',
    description: '这是的test1专栏，有一段非常有意思的简介，可以更新一下欧, 这是的test1专栏，有一段非常有意思的简介，可以更新一下欧',
    avatar: {
      _id: '1',
      url: '',
      createdAt: '',
      fitUrl: ''
    }
  },
  {
    _id: '2',
    title: 'test2的专栏',
    description: '这是的test2专栏，有一段非常有意思的简介，可以更新一下欧',
    avatar: {
      _id: '1',
      url: '',
      createdAt: '',
      fitUrl: ''
    }
  },
  {
    _id: '3',
    title: 'test3的专栏',
    description: '这是的test1专栏，有一段非常有意思的简介，可以更新一下欧 这是的test1专栏，有一段非常有意思的简介，可以更新一下欧'
    // avatar: 'http://vue-maker.oss-cn-hangzhou.aliyuncs.com/vue-marker/5ee22dd58b3c4520912b9470.jpg?x-oss-process=image/resize,m_pad,h_100,w_100'
  },
  {
    _id: '4',
    title: 'test4的专栏',
    description: '这是的test2专栏，有一段非常有意思的简介，可以更新一下欧',
    avatar: {
      _id: '1',
      url: '',
      createdAt: '',
      fitUrl: ''
    }
  }
]

export const testPosts: PostProps[] = [
  {
    _id: '1',
    title: '这是我的第一篇文章',
    content: '"this is a new post you Very often we will need to map routes with the given pattern to the same component. For example we may have a User component which should be rendered for all users but with dif..."',
    image: {
      _id: '1',
      url: '',
      createdAt: '',
      fitUrl: ''
    },
    createdAt: '2020-06-11 10:34:22',
    column: '1'
  },
  {
    _id: '2',
    title: '这是我的第二篇文章',
    content: '"this is a new post you Very often we will need to map routes with the given pattern to the same component. For example we may have a User component which should be rendered for all users but with dif..."',
    createdAt: '2020-06-11 10:34:22',
    column: '1'
  },
  {
    _id: '3',
    title: '这是我的第三篇文章',
    content: '"this is a new post you Very often we will need to map routes with the given pattern to the same component. For example we may have a User component which should be rendered for all users but with dif..."',
    createdAt: '2020-06-11 10:34:22',
    column: '1'
  },
  {
    _id: '4',
    title: '这是我的第四篇文章',
    content: '"this is a new post you Very often we will need to map routes with the given pattern to the same component. For example we may have a User component which should be rendered for all users but with dif..."',
    image: {
      _id: '4',
      url: '',
      createdAt: '',
      fitUrl: ''
    },
    createdAt: '2020-06-11 10:34:22',
    column: '2'
  },
  {
    _id: '5',
    title: '这是我的第五篇文章',
    content: '"this is a new post you Very often we will need to map routes with the given pattern to the same component. For example we may have a User component which should be rendered for all users but with dif..."',
    image: {
      _id: '5',
      url: '',
      createdAt: '',
      fitUrl: ''
    },
    createdAt: '2020-06-11 10:34:22',
    column: '2'
  },
  {
    _id: '6',
    title: '这是我的第六篇文章',
    content: '"this is a new post you Very often we will need to map routes with the given pattern to the same component. For example we may have a User component which should be rendered for all users but with dif..."',
    image: {
      _id: '6',
      url: '',
      createdAt: '',
      fitUrl: ''
    },
    createdAt: '2020-06-11 10:34:22',
    column: '3'
  },
  {
    _id: '7',
    title: '这是我的第七篇文章',
    content: '"this is a new post you Very often we will need to map routes with the given pattern to the same component. For example we may have a User component which should be rendered for all users but with dif..."',
    image: {
      _id: '7',
      url: '',
      createdAt: '',
      fitUrl: ''
    },
    createdAt: '2020-06-11 10:34:22',
    column: '3'
  }
]
