# 语言教程
## 设置环境变量
> 其他语言参考：https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Accept-Language

N8N_DEFAULT_LOCALE=zh-CN

## 替换editor-ui包
去release里面下载对应的版本 编辑器UI 文件，然后映射docker容器里面的 编辑器UI 目录路径

/usr/local/lib/node_modules/n8n/node_modules/n8n-editor-ui/dist


## 完整测试docker命令
```shell
docker run -it --rm --name n8ntest \
-p 15678:5678 \
-v 【替换为下载的编辑器UI目录】:/usr/local/lib/node_modules/n8n/node_modules/n8n-editor-ui/dist \
-e N8N_DEFAULT_LOCALE=zh-CN \
-e N8N_SECURE_COOKIE=false \
n8nio/n8n
```

## 使用docker-compose
请切换到对应版本的tag后，在执行
```shell
# 拉取代码
git clone https://github.com/other-blowsnow/n8n-i18n-chinese
# 注意自行修改当前版本，修改为 n8n@最新/指定版本即可
# 只支持 1.86.1+以上使用该方法
git checkout n8n@1.86.1
# 运行
docker-compose up
``` 

# 原理
> editor-ui是支持i18n的，但是未开放语言包

手动添加 zh-CN.json 到 editor-ui i18n里面，然后重新编译
环境里面设置语言即可正常使用中文

# 添加其他语言包
请PR 语言文件到 languages 目录下，github action会在下一个n8n版本自动打包
