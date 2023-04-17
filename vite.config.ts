import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

//自动导入vue中的hook reactive ref等
import AutoImport from "unplugin-auto-import/vite"
//自动导入ui-组件 比如说ant-design-vue  element-plus等
import Components from 'unplugin-vue-components/vite';

import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      // 不需要引入ref reactive 
      imports:['vue','vue-router'],
      // 存放的地方 
      dts:'src/auto-import.d.ts',
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      // 默认存放的位置
      // dts: "src/components.d.ts",
      resolvers: [ElementPlusResolver()],
		}),
  ],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "./src/style/mixin.scss";` // 此处全局的scss文件
      }
    }
  },
  server:{
    proxy:{
      '/api':{//匹配的请求路径
        target:'代理的地址',
        // 开发模式 默认的127.0.0.1 开启后代理服务会把origin 修改为目标地址
        changeOrigin:true,
         // secure: true, // 是否https接口
         // ws: true, // 是否代理websocke 
         // 路径重写，**** 如果你的后端有统一前缀(如:/api)，就不开启 开启
         //简单来说，就是是否改路径 加某些东西
         rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  }
})
