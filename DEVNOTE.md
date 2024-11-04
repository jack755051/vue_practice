## v-方法

1. v-show

獨立於`v-if`外的使用方法，可減少DOM操作

    - v-show：僅僅通過修改元素的 display 樣式來控制元素顯示或隱藏，不會真正從 DOM 中刪除。適用於頻繁切換顯示狀態的場景，例如 Tab 切換、按鈕顯示或隱藏。
  
    - v-if：當條件為 false 時，Vue 會從 DOM 中移除元素，並在條件再次為 true 時重新創建和插入。適合在條件不常變化的情況下使用，因為每次切換條件時會重新渲染，消耗一定的性能。

----
## 生命週期

> in vue2

|階段|方法|
|----|---|
|創建|創建前(beforeCreate) / 創建後(createed)
|掛載|掛載前(beforeMount) / 掛載後(mounted)
|更新|更新前(beforeUpdate) / 更新後(updateed)
|銷毀|銷毀前(beforeDestroy) / 銷毀後(destroyed)

> in vue3

> 父子掛載工作，完成順序為先子後父

----

## 路由

1. 基本原理：

   - 路由器一組key-value的對應關係
   - 多個路由需要透過路由器管理

2. 放置位置：
   - 路由組件：通常是在放`pages`、`views` 文件夾
   - 一般組件：放在`components`文件夾
  
3. 工作模式：
    a. `history`模式：
      - 優點：美觀，不帶有`#`，更接近傳統網站的URL
      - 缺點：需要後端配合

    b. `hash`模式：
      - 優點：兼容性強，不需要服務器處理路徑，通常用於後台
      - 缺點：SEO效能不佳

4. 傳遞參數方法
   a. params 方法：
      - 特點：
        - 在標籤`RouterLink`當中需要用`name`，因此要在路由器當中設定`name`。
         ```javascript=
               name:'DETAIL',
               params: {
                  id:n.id,
                  newsTitle:n.newsTitle,
                  newsContent:encodeURIComponent(n.newsContent || 'No content available'),
                  publishDate:n.publishDate?.toString(),
               }
         ```
        - 透過路由器的`path`來傳遞參數，
         ```javascript=
         path:'detail/:id/:newsTitle/:newsContent/:publishDate',
         // 其中的 :id/:newsTitle/:newsContent/:publishDate 都是要傳遞的參數，利用`:`符號標記，並用`/`符號分格
         ```

        -遇到特殊符號需要透過`encodeURIComponent`方法包裝，並於子層利用`decodeURIComponent`解碼
