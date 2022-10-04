<!--
 * @Author: error: git config user.name && git config user.email & please set dead value or install git
 * @Date: 2022-09-19 21:49:29
 * @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 * @LastEditTime: 2022-09-30 18:51:16
 * @FilePath: \zheye-master\src\components\PostList.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="post-list">
    <article v-for="post in posts" :key="post._id" class="card mb-3 shadow-sm">
      <div class="card-body">
        <h4><router-link :to="`/posts/${post._id}/`">{{post.title}}</router-link></h4>
        <div class="row my-3 align-items-center">
          <div v-if="post.image" class="col-4">
            <img :src="post.image.fitUrl" :alt="post.title" class="rounded-lg w-100">
          </div>
          <p :class="{'col-8': post.image}" class="text-muted">{{post.excerpt}}</p>
        </div>
        <span class="text-muted">{{post.createdAt}}</span>
      </div>
    </article>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, computed } from 'vue'
import { PostProps, ImageProps } from '../store'
import { generateFitUrl } from '../helper'
export default defineComponent({
  props: {
    list: {
      required: true,
      type: Array as PropType<PostProps[]>
    }
  },
  // setup(props) {
  //   const posts = computed(() => {
  //     return props.list.map(post => {
  //       generateFitUrl(post.image as ImageProps, 200, 110, ['m_fill'])
  //       return post
  //     })
  //   })
  setup() {
    const posts: PostProps[] = [
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
        title: '这是我的第二篇文章',
        content: '"this is a new post you Very often we will need to map routes with the given pattern to the same component. For example we may have a User component which should be rendered for all users but with dif..."',
        createdAt: '2020-06-11 10:34:22',
        column: '1'
      },
      {
        _id: '1',
        title: '这是我的第三篇文章',
        content: '"this is a new post you Very often we will need to map routes with the given pattern to the same component. For example we may have a User component which should be rendered for all users but with dif..."',
        image: {
          _id: '1',
          url: '',
          createdAt: '',
          fitUrl: ''
        },
        createdAt: '2020-06-11 10:34:22',
        column: '2'
      },
      {
        _id: '2',
        title: '这是我的第三篇文章',
        content: '"this is a new post you Very often we will need to map routes with the given pattern to the same component. For example we may have a User component which should be rendered for all users but with dif..."',
        image: {
          _id: '2',
          url: '',
          createdAt: '',
          fitUrl: ''
        },
        createdAt: '2020-06-11 10:34:22',
        column: '2'
      },
      {
        _id: '1',
        title: '这是我的第三篇文章',
        content: '"this is a new post you Very often we will need to map routes with the given pattern to the same component. For example we may have a User component which should be rendered for all users but with dif..."',
        image: {
          _id: '1',
          url: '',
          createdAt: '',
          fitUrl: ''
        },
        createdAt: '2020-06-11 10:34:22',
        column: '3'
      },
      {
        _id: '2',
        title: '这是我的第三篇文章',
        content: '"this is a new post you Very often we will need to map routes with the given pattern to the same component. For example we may have a User component which should be rendered for all users but with dif..."',
        image: {
          _id: '2',
          url: '',
          createdAt: '',
          fitUrl: ''
        },
        createdAt: '2020-06-11 10:34:22',
        column: '3'
      }
    ]
    return {
      posts
    }
  }
})
</script>

<style scoped>
.post-list h4 a {
  text-decoration: none;
  color:#1a1a1a;
}
.post-list h4 a:hover {
  color:#4ba7ab;
}
</style>
