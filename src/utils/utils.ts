import axios from 'axios';

export default class utils{

    constructor(){
        
    }

    static generateUniqueId():string{
        // 列舉出所有可能的字母
        let numberResult = '';
        let letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        let digits = "0123456789";

        // Ensure at least one letter and one digit
        numberResult += letters.charAt(Math.floor(Math.random() * letters.length));
        numberResult += digits.charAt(Math.floor(Math.random() * digits.length));

        // Fill the rest of the 10 characters
        let allChars = letters + digits;
        for (let i = 2; i < 10; i++) {
            numberResult += allChars.charAt(Math.floor(Math.random() * allChars.length));
        }

        // Shuffle the result to ensure randomness
        numberResult = numberResult.split('').sort(() => 0.5 - Math.random()).join('');

        return numberResult;
    }

    static async generateArticle(articleAmount?:number):Promise<string>{
        let result ='';
        // let url = 'https://api.api-ninjas.com/v1/loremipsum?paragraphs='+ articleAmount;
        // const apiKey = 'T1KWR2bBlYubNi2rfDQAiA==J8uA7raHuJFzM23r'

        //可用的API
        let url = 'https://baconipsum.com/api/?type=meat-and-filler';

        try{
            const response = await axios.get(
                url,
                // {
                //     headers: {
                //         'X-Api-Key': apiKey
                //     },
                // }
            );
            result = response.data;
        }catch(e){
            console.log('Error: ',e);
        }
        
        return result;
    }

}