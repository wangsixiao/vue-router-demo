# vue-router-demo

### 1、初始步骤
#### 创建项目
```
npm install -g vue-cli
创建项目：vue init webpack 项目名
安装依赖包，生成node_modules:npm install
启动：npm run dev
```
#### vue-router使用
```
npm install vue-router --save
```
1）新建route目录，index文件；

2）导入路由对象，调用vue.use(vuerouter)；

3）创建实例，传入配置；

4）在vue实例中挂载路由实例；

#### 路由映射
```
<router-link to="/about">about</router-link>
<router-view/>
```
