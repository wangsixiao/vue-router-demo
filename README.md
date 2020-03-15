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

// $router是new Router出来的实例，push replace进行路由的跳转
this.$router.push('/about')

<router-view/>
```
### 2、router参数

1）重定向
```
{
    path: "/",
    redirect: "/home"
}
```

2) 设置history模式，url上不会有#; 

```
mode: 'history',
```

3）浏览器不能返回前进；标签名；选中class名
```
<router-link replace tag="button" active-class="linkActive"></...>

// router实例中添加，也能修改选中class名
linkActiveClass: "linkActive"
```

4) 动态路由 --- /user/:userid
```
// $route 当前路由
this.$route.params.userid
```

### 3、打包、路由懒加载

1）打包

app开头打包的是业务代码

vendor开头的属于第三方库，类似react、react-router

manifest开头是为打包代码做底层支持

2）路由懒加载

vue异步组件和webpack代码分割，使用import实现按需加载，按路由打包成多个文件，然后切换到某路由时才请求js文件

```
var HomeMessage = () => import('@/components/homeMessage')
```

3）子路由组件添加

```
children: [
    {path: '', component: ''}
]
```


