#!/bin/bash
###
 # @Author: error: git config user.name && git config user.email & please set dead value or install git
 # @Date: 2022-09-19 21:49:28
 # @LastEditors: error: git config user.name && git config user.email & please set dead value or install git
 # @LastEditTime: 2022-09-20 00:03:07
 # @FilePath: \zheye-master\depoly.sh
 # @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
### 

echo "build 生成生产环境代码"

rm -rf dist && npm run build

echo "上传代码到云主机"
###
# scp -i:远程拷贝;
# ~/.ssh/xxx.pem:拷贝时的参数;
# root@121.199.70.72:/var/www/zhihu: 移动到云主机地址
###

cd dist && scp -i ~/.ssh/vikingship.pem -r *  root@121.199.70.72:/var/www/zhihu
