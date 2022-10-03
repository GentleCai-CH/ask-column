# ask-column



## ✨ 技术栈
- 编程语言：JavaScript、Typescript
- 构建工具：vue cli 2.x
- 前端框架：Vue 3.x
- 路由工具：Vue Router 4.x
- 状态管理：Vuex 4.x
- PC 端 UI 框架：Boostrap
- HTTP 工具：Axios
- 代码规范：EditorConfig + Prettier + ESLint
- 部署：shell + BT面板

## ✨ 功能清单
 
- 内容编辑器
  - 上传文件
    - 图片
    - 腾讯cos对象存储
  - 剪切板处理
    - 粘贴图片自动重新上传
 

- 注册
  - 用户名
  - 邮箱
  - 验证码
  - 其他方式登录
- 登录
  - 账户(用户名/邮箱)
  - 密码
  - 忘记密码
    - 邮箱
    - 邮箱验证
  - 其他方式登录
  
- 专栏
  - 专栏列表
  - 专栏简介
  
- 专栏详情
  - 文章列表
  - 文章简介
  - 
- 文章详情
  - 文章头图
  - 标题
  - 文章信息
  - 内容
  
- 下拉列表
  - 列表显隐
  - 列表跳转
  
  
  
## 持续更新

> 后续会对项目进行完善，持续优化界面、功能等。

* **功能性缺陷**：例如发布文章失败、创建专栏等
* **安全性漏洞**：例如 XSS/CSRF、盗用用户信息等

## Build Setup

```bash
# install dependencies
$ npm install
# serve with hot reload at localhost:3000
$ npm dev
# build for production and launch server
$ npm build
$ npm start
# generate static project
$ npm generate
```

## 项目部署
1. 关闭本地项目后,在控制台执行 `npm run build` 进行打包
2. 拷贝以下文件至服务器

![build](assets/build.png)
   
3. 服务器安装 `Nodejs` 环境
4. 项目目录下执行 `npm install`
5. 执行 `npm install pm2 -g`
6. 执行 `pm2 list` 检查 `pm2` 是否安装好
7. 执行 `pm2 start npm --name nebula -- run start`


For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).
