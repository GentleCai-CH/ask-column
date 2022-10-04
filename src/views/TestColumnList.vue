
<template>
  <div class="row">
    <div v-for="column in columnList" :key="column._id" class="col-4 mb-4">
      <div class="card h-100 shadow-sm">
        <div class="card-body text-center">
          <img :src="column.avatar && column.avatar.fitUrl" :alt="column.title" class="rounded-circle border border-light my-3" >
          <h5 class="card-title">{{column.title}}</h5>
          <p class="card-text text-left">{{column.description}}</p>
          <router-link :to="`/column/${column._id}`" class="btn btn-outline-info">进入专栏</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">

import { defineComponent, PropType, computed } from 'vue'
import { ColumnProps } from '../store'
import { addColumnAvatar } from '../helper'

export default defineComponent({
  name: 'TestColumn',
  props: {
    list: {
      type: Array as PropType<ColumnProps[]>,
      required: true
    }
  },
  // setup(props) {
  //   const columnList = computed(() => {
  //     return props.list.map(column => {
  //       addColumnAvatar(column, 50, 50)
  //       return column
  //     })
  //   })
  setup() {
    const columnList: ColumnProps[] = [
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

    return {
      columnList
    }
  }
})
</script>
<style scoped>
.card-body img {
  width: 50px;
  height: 50px;
}
</style>
