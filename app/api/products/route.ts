import { NextResponse } from "next/server";

export async function GET(){
    return NextResponse.json(
        {
            "status": 200,
            "data": [
              {
                "id": 15,
                "stock": 10,
                "price": 399,
                "name": "Chicken Biryani",
                "imgurl": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/%22Hyderabadi_Dum_Biryani%22.jpg/800px-%22Hyderabadi_Dum_Biryani%22.jpg",
                "saleprice": 349,
                "isfeatured": false,
                "brandid": 5,
                "category": "biryani",
                "productype": "single"
              },
              {
                "id": 16,
                "stock": 10,
                "price": 499,
                "name": "Mutton Biryani",
                "imgurl": "https://www.cookwithnabeela.com/wp-content/uploads/2024/02/MuttonBiryani-500x500.webp",
                "saleprice": 429,
                "isfeatured": false,
                "brandid": 6,
                "category": "biryani",
                "productype": "single"
              },
              {
                "id": 17,
                "stock": 10,
                "price": 349,
                "name": "Veg Biryani",
                "imgurl": "https://www.indianhealthyrecipes.com/wp-content/uploads/2019/04/veg-biryani-recipe-500x500.jpg",
                "saleprice": 299,
                "isfeatured": false,
                "brandid": 4,
                "category": "biryani",
                "productype": "single"
              },
              {
                "id": 18,
                "stock": 10,
                "price": 459,
                "name": "Paneer Biryani",
                "imgurl": "https://www.indianhealthyrecipes.com/wp-content/uploads/2023/02/paneer-biryani-recipe.jpg",
                "saleprice": 399,
                "isfeatured": false,
                "brandid": 8,
                "category": "biryani",
                "productype": "single"
              },
              {
                "id": 19,
                "stock": 10,
                "price": 299,
                "name": "Butter Chicken",
                "imgurl": "https://www.licious.in/blog/wp-content/uploads/2020/10/butter-chicken--600x600.jpg",
                "saleprice": 249,
                "isfeatured": false,
                "brandid": 4,
                "category": "curry",
                "productype": "variable"
              },
              {
                "id": 20,
                "stock": 10,
                "price": 259,
                "name": "Paneer Tikka Masala",
                "imgurl": "https://cookingfromheart.com/wp-content/uploads/2017/03/Paneer-Tikka-Masala-4.jpg",
                "saleprice": 219,
                "isfeatured": false,
                "brandid": 5,
                "category": "curry",
                "productype": "variable"
              },
              {
                "id": 21,
                "stock": 10,
                "price": 329,
                "name": "Chicken Curry",
                "imgurl": "https://myfoodstory.com/wp-content/uploads/2020/10/Dhaba-Style-Chicken-Curry-2-500x500.jpg",
                "saleprice": 289,
                "isfeatured": false,
                "brandid": 6,
                "category": "curry",
                "productype": "variable"
              },
              {
                "id": 22,
                "stock": 10,
                "price": 389,
                "name": "Fish Curry",
                "imgurl": "https://www.licious.in/blog/wp-content/uploads/2021/01/Mangalorean-Pomfret-Fish-Curry-750x750.jpg",
                "saleprice": 349,
                "isfeatured": false,
                "brandid": 3,
                "category": "curry",
                "productype": "variable"
              },
              {
                "id": 23,
                "stock": 10,
                "price": 49,
                "name": "Garlic Naan",
                "imgurl": "https://www.vegrecipesofindia.com/wp-content/uploads/2022/12/garlic-naan-3.jpg",
                "saleprice": 39,
                "isfeatured": false,
                "brandid": 5,
                "category": "breads",
                "productype": "single"
              },
              {
                "id": 24,
                "stock": 10,
                "price": 39,
                "name": "Plain Naan",
                "imgurl": "https://enjoyinfourseason.com/wp-content/uploads/2022/05/Fourseason-PLAIN-NAAN.jpg",
                "saleprice": 29,
                "isfeatured": false,
                "brandid": 4,
                "category": "breads",
                "productype": "single"
              },
              {
                "id": 25,
                "stock": 10,
                "price": 59,
                "name": "Butter Naan",
                "imgurl": "https://www.indianhealthyrecipes.com/wp-content/uploads/2022/03/butter-naan.jpg",
                "saleprice": 49,
                "isfeatured": false,
                "brandid": 6,
                "category": "breads",
                "productype": "single"
              },
              {
                "id": 26,
                "stock": 10,
                "price": 69,
                "name": "Roti",
                "imgurl": "https://ministryofcurry.com/wp-content/uploads/2020/01/roti-1-480x270.jpg",
                "saleprice": 59,
                "isfeatured": false,
                "brandid": 7,
                "category": "breads",
                "productype": "single"
              },
              {
                "id": 27,
                "stock": 10,
                "price": 349,
                "name": "Manchurian",
                "imgurl": "https://www.indianhealthyrecipes.com/wp-content/uploads/2021/07/veg-manchurian.jpg",
                "saleprice": 299,
                "isfeatured": false,
                "brandid": 4,
                "category": "chinese",
                "productype": "variable"
              },
              {
                "id": 28,
                "stock": 10,
                "price": 199,
                "name": "Fried Rice",
                "imgurl": "https://hips.hearstapps.com/hmg-prod/images/delish-230313-12-fried-rice-0842-eb-index-64220e8a7fc9a.jpg?crop=0.888888888888889xw:1xh;center,top&resize=1200:*",
                "saleprice": 169,
                "isfeatured": false,
                "brandid": 3,
                "category": "chinese",
                "productype": "variable"
              },
              {
                "id": 29,
                "stock": 10,
                "price": 299,
                "name": "Chilli Chicken",
                "imgurl": "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=1080/assets/search/usecase/boneless_chilli_chicken_zdish.png",
                "saleprice": 249,
                "isfeatured": false,
                "brandid": 5,
                "category": "chinese",
                "productype": "variable"
              }
            ]
          }
    )
}