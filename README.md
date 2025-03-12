# 汉化教程
## 设置环境变量
N8N_DEFAULT_LOCALE=zh-CN

## 替换editor-ui包
去release里面找到对应的版本然后映射docker路径

/usr/local/lib/node_modules/n8n/node_modules/n8n-editor-ui/dist


## 完整测试docker命令
```shell
docker run -it --rm --name n8ntest \
-p 15678:5678 \
-v /n8n/n8n-editor-ui/dist:/usr/local/lib/node_modules/n8n/node_modules/n8n-editor-ui/dist \
-e N8N_DEFAULT_LOCALE=zh-CN \
-e N8N_SECURE_COOKIE=false \
n8nio/n8n
```



# 原理
> editor-ui是支持i18的，但是未开放语言包

手动添加 zh-CN.json 到 editor-ui i18n里面，然后重新编译
环境里面设置语言即可正常使用中文
