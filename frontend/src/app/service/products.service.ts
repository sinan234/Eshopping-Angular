import { Injectable } from "@angular/core";
@Injectable({
    providedIn: 'root'
  })
export class Productservice{
  product=[
    {"Product_ID":7631,"itemcount":1, "availbale":"Available", "SKU":"HEH-9133","Name":"On Cloud Nine Pillow","Product URL":"https://www.domain.com/product/heh-9133","Price":249,"Retail Price":24.99,"Thumbnail":"https://imgs.search.brave.com/wLPMFweCa5378t_G51amlRl9gmDEGbdGXJV4xRurMT8/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5hcmNoaXRlY3R1/cmFsZGlnZXN0LmNv/bS9waG90b3MvNjA0/OTQwY2FiNmNmMzk2/NTU5NTYxMzBkLzE6/MS93XzEyODAsY19s/aW1pdC9VU18wMTAz/REVMV0FTSFBJTExP/V18yLmpwZw","Search Keywords":"lorem, ipsum, dolor, ...","Description":"Sociosqu facilisis duis ...","Category":"Home>Home Decor>Pillows|Back In Stock","Category ID":"298|511","Brand":"FabDecor","Child SKU":"","Child Price":"","Color":"White","Color Family":"White","Color Swatches":"","Size":"","Shoe Size":"","Pants Size":"","Occassion":"","Season":"","Badges":"","Rating Avg":4.2,"Rating Count":8,"Inventory Count":21,"Date Created":"2018-03-03 17:41:13"}
  ,{"Product_ID":7732,"itemcount":1,"availbale":"Available" ,"SKU":"HEH-2172","Name":"Sweater","Product URL":"https://www.domain.com/product/heh-2172","Price":800,"Retail Price":68,"Thumbnail":"https://imgs.search.brave.com/lmHmps1w_fPmvr5YiHUjFwAo3FDBcDMP6nvUsOj8q1I/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1wc2QvamVy/emVlcy1wdWxsb3Zl/ci1ob29kZWQtc3dl/YXRzaGlydC1tb2Nr/dXAtMDFfMTI2Mjc4/LTk0LmpwZz9zaXpl/PTYyNiZleHQ9anBn","Search Keywords":"lorem, ipsum, dolor, ...","Description":"Sociosqu facilisis duis ...","Category":"Clothing>Tops>Sweaters","Category ID":277,"Brand":"Enigma Clothes","Child SKU":"HEH-2172-WHT-MD|HEH-2172-WHT-LG","Child Price":"","Color":"White","Color Family":"White","Color Swatches":"","Size":"Medium|Large","Shoe Size":"","Pants Size":"","Occassion":"","Season":"Winter","Badges":"","Rating Avg":4.6,"Rating Count":22,"Inventory Count":3,"Date Created":"2018-03-01 20:18:20"}
  ,{"Product_ID":7609,"itemcount":1,"availbale":"Not Available" ,"SKU":"HEH-2211","Name":"Walk On Out Slip On Sneakers","Product URL":"https://www.domain.com/product/heh-2211","Price":360,"Retail Price":34.99,"Thumbnail":"https://imgs.search.brave.com/_A2OdtfUtZN7dgfz-N4SPtq0WtTMk-4J2KRQ6aS-Edw/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTIw/NjAzNTI2My9waG90/by95ZWxsb3ctc25l/YWtlcnMuanBnP3M9/NjEyeDYxMiZ3PTAm/az0yMCZjPTlQX2hx/ejduaHVwT1Zvc3Fy/QzJpOFlmWGEyTHQ0/R0xZYUhtTk1JY2s5/TWc9","Search Keywords":"lorem, ipsum, dolor, ...","Description":"Sociosqu facilisis duis ...","Category":"Shoes>Sneakers>Slip-On Sneakers","Category ID":302,"Brand":"Temptation","Child SKU":"HEH-2211-BSQ-6|HEH-2211-BSQ-7|HEH-2211-BSQ-8|HEH-2211-BSQ-9|HEH-2211-BSQ-10|HEH-2211-BSQ-10.5","Child Price":"","Color":"Bisque","Color Family":"Beige","Color Swatches":"","Size":"","Shoe Size":"6|7|8|9|10|10.5","Pants Size":"","Occassion":"","Season":"","Badges":"","Rating Avg":3.9,"Rating Count":5,"Inventory Count":2,"Date Created":"2018-03-20 22:15:34"}
  
  ,{"Product_ID":7677,"itemcount":1,"availbale":"Available" ,"SKU":"PCH-8738","Name":"Adidas Football","Thumbnail":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKpmIu-afhzoMAxf7Q-SWWE4puvVQ9s78CCg&usqp=CAU","Price":799 }
  ,  {"Product_ID":7632,"itemcount":1,"availbale":"Not Available" ,"SKU":"HEH-9133","Name":"Men Typography Black T-Shirt","Product URL":"https://www.domain.com/product/heh-9133","Price":249,"Retail Price":24.99,"Thumbnail":"https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/r/p/r/l-st-1224-smartees-original-imagtvm39584ce68.jpeg?q=70","Search Keywords":"lorem, ipsum, dolor, ...","Description":"Sociosqu facilisis duis ...","Category":"Home>Home Decor>Pillows|Back In Stock","Category ID":"298|511","Brand":"FabDecor","Child SKU":"","Child Price":"","Color":"White","Color Family":"White","Color Swatches":"","Size":"","Shoe Size":"","Pants Size":"","Occassion":"","Season":"","Badges":"","Rating Avg":4.2,"Rating Count":8,"Inventory Count":21,"Date Created":"2018-03-03 17:41:13"}
  ,{"Product_ID":7634,"itemcount":1,"availbale":"Available" ,"SKU":"PCH-8738","Name":"Brazil Jersey","Thumbnail":"https://rukminim2.flixcart.com/image/612/612/xif0q/kids-apparel-combo/t/h/h/8-9-years-brazilyellowbp-blueset-rjm-original-imagkgznewfbgj8f.jpeg?q=70","Price":400 }
  ,{"Product_ID":7639,"itemcount":1,"availbale":"Available" ,"SKU":"PCH-8738","Name":"Argentina Jersey ","Thumbnail":"https://rukminim2.flixcart.com/image/612/612/xif0q/kids-t-shirt/e/f/j/7-8-years-fd4-argentina2022-m-uniq-original-imagkgznczjvchbp.jpeg?q=70","Price":400 }
  
  ,{"Product_ID":7681,"itemcount":1,"availbale":"Available" ,"SKU":"PCH-8738","Name":"Men Typography Yellow T-Shirt","Thumbnail":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVCixdXXy9bu1rvCRW1IZOXTtUacL23xFo3SqK4t_3LEkCAFUpE2HRk-K9V9rzTcH4rXA&usqp=CAU","Price":399 }
    ]




















}