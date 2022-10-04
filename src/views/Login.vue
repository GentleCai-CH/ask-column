
<template>
  <div class="login-page mx-auto p-3 w-330">
    <h5 class="my-4 text-center">登录到问答</h5>
    <validate-form @form-submit="onFormSubmit">
      <div class="mb-3">
        <label class="form-label">邮箱地址</label>
        <validate-input
          :rules="emailRules" v-model="emailVal"
          placeholder="请输入邮箱地址，默认2406@qq.com"
          type="text"
          ref="inputRef"
        />
      </div>
      <div class="mb-3">
        <label class="form-label">密码</label>
        <validate-input
          type="password"
          placeholder="请输入密码，默认2406qq"
          :rules="passwordRules"
          v-model="passwordVal"
        />
      </div>
      <template #submit>
        <button type="submit" class="btn btn-info btn-block btn-large">登录</button>
      </template>
    </validate-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import ValidateInput, { RulesProp } from '../components/ValidateInput.vue'
import ValidateForm from '../components/ValidateForm.vue'
import createMessage from '../components/createMessage'

import { userData, testColumns, testPosts } from '../testData'
export default defineComponent({
  name: 'Login',
  components: {
    ValidateInput,
    ValidateForm
  },
  setup() {
    const emailVal = ref('')
    const router = useRouter()
    const store = useStore()
    const emailRules: RulesProp = [
      { type: 'required', message: '电子邮箱地址不能为空' },
      { type: 'email', message: '请输入正确的电子邮箱格式' }
    ]
    const passwordVal = ref('')
    const passwordRules: RulesProp = [
      { type: 'required', message: '密码不能为空' }
    ]
    const onFormSubmit = (result: boolean) => {
      if (result) {
        // 获取用户名，获取密码(没有实际api时)
        const payload = {
          data: {
            email: emailVal.value,
            password: passwordVal.value
          }
        }
        if (payload.data.email !== '2406@qq.com' || payload.data.password !== '2406qq') {
          createMessage('账户或密码错误！', 'error')
          return false
        } else {
          store.commit('fetchCurrentUser', userData)
          createMessage('登录成功 2秒后跳转首页', 'success')
          setTimeout(() => {
            router.push('/')
          }, 2000)
        }
      }
    }

    // 有实际api时的做法
    // const onFormSubmit = (result: boolean) => {
    //   if (result) {
    //     const payload = {
    //       email: emailVal.value,
    //       password: passwordVal.value
    //     }
    //     store.dispatch('loginAndFetch', payload).then(data => {
    //       createMessage('登录成功 2秒后跳转首页', 'success')
    //       setTimeout(() => {
    //         router.push('/')
    //       }, 2000)
    //     }).catch(e => {
    //       console.log(e)
    //     })
    //   }
    // }
    return {
      emailRules,
      emailVal,
      passwordVal,
      passwordRules,
      onFormSubmit
    }
  }
})
</script>
