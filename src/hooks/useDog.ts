import { onMounted, ref } from 'vue';
import axios from 'axios';

export default function dog(){

    let dogList = ref<string[]>([]);

    async function getDog(imageAmount:number) {
        let url = 'https://dog.ceo/api/breeds/image/random/' + imageAmount;
        try {
            const response = await axios.get(url);
            // dogList.value = response.data.message;
            dogList.value.push(...response.data.message)
        } catch (error) {
            console.error(error);
        }
    }

    onMounted(()=>{
        getDog(1)
    })
    
    return {
        dogList,
        getDog
    }
}

