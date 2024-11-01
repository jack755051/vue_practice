<template>
    <div class="news">
        <div class="newsList">
            <ul>
                <li 
                v-for="(n,index) in artcles"
                :key=index
                >{{ n.newsTitle }}</li>
            </ul>
        </div>

    </div>

    
</template>

<script lang="ts">
import Detail from './Detail.vue'

export default {
    name:"News",
}
</script>

<script lang="ts" setup>
    import {ref,reactive, computed, onBeforeMount} from 'vue';
    import {article, newsItem} from '../types/interface';
    import utils from '../utils/utils'

    let newsAmounts:number = 6
    let artcles:newsItem[] = buildArticles(newsAmounts);
    console.log(artcles);

    let test = ref<newsItem[]>(artcles)

    // 建立id與newsContent
    function buildArticles(amount:number):newsItem[]{
        let articles:newsItem[] =[];

        for(let i=0;i<newsAmounts;i++){


            /**
             * 
             * 匯入id
             * articles[i].id = utils.generateUniqueId(),
             * //匯入內容
             * utils.generateArticle()
             * .then((res) => {
             *     articles[i].newsContent = res;
             * })
             * //文章抬頭
             * articles[i].newsTitle = `News Article 0${i}`,
             * //文章發布時間
             * articles[i].publishDate = new Date().toISOString();
             * 
             * 
             * 
             * 
             * 在你的原始代碼中，你嘗試直接對 articles[i].id、articles[i].newsContent 等屬性進行賦值，但 articles[i] 此時還沒有初始化為一個物件，因此這會觸發 Cannot set properties of undefined 錯誤。

                初始化的作用

	            •	確保 articles[i] 是一個有效的物件：在每次迴圈開始時，我們將 articles[i] 初始化為一個空的 newsItem 對象。這樣，當你嘗試設置 articles[i].id 或其他屬性時，因為 articles[i] 已經是一個對象了，就不會再出現 undefined 的錯誤。
	            •	避免空指針錯誤：初始化可以確保每個索引位的 articles[i] 都是一個有效的對象，這樣在進一步的操作中不會出現空指針錯誤。
	            •	提高代碼的安全性：在程式中進行初始化可以提高代碼的健壯性，避免在某些特殊情況下因為未初始化的數組元素而產生不可預期的錯誤。

             */

            // 初始化 `articles[i]` 為一個空的 `newsItem` 對象
            articles[i] = {
                id: utils.generateUniqueId(),
                newsTitle: `News Article 0${i+1}`,
                newsContent: "",
                publishDate: new Date().toISOString()
            };

            // 匯入內容，並在 Promise 成功時更新 `newsContent`
            utils.generateArticle().then((res) => {
                articles[i].newsContent = res;
            });
        }
        return articles;
    }

</script>

<style>
    .news{
        background-color: #ddd;
        box-shadow: 0 0 10px;
        border-radius: 10px;
        padding: 20px;
        height: 50vh;
        width: 80vw;
    }
</style>