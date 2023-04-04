import json
import random
import requests

products = []
with open("./products.json") as f:
    products = json.load(f)

for i in range(len(products)):
    products[i].pop("id")
    products[i].pop("currency")
    products[i].pop("product_link")
    products[i].pop("website_link")
    products[i].pop("rating")
    products[i].pop("tag_list")
    products[i].pop("created_at")
    products[i].pop("updated_at")
    products[i].pop("product_api_url")
    products[i].pop("api_featured_image")
    products[i].pop("product_colors")
print(len(products))
products = list(filter(lambda i: i['brand'] != None, products))
products = list(filter(lambda i: i['category'] != "", products))
print(len(products))
for product in products:
    product["brand_name"] = product.pop("brand")
    product["category_name"] = product.pop("category")
    product["product_type_name"] = product.pop("product_type")
    if product["category_name"] == None:
        product["category_name"] = "without_category"
    # if product["price"] == None or product["price"] == "" or product["price"] == "0.0":
    #     if product["price"] == "0.0":
    #         print("found price with 0.0")
    #     product["price"] == str(random.uniform(0.5, 50))
    if product["price_sign"] == None or product["price_sign"]:
        product["price_sign"] = "$"


def remove_quotes(item):
    if "'" in item["brand_name"]:
        item["brand_name"] = item["brand_name"].replace("'"," ")
    return item

def price_map(product):
    if product["price"] == None or product["price"] == "" or product["price"] == "0.0":
        product["price"] = str(round(random.uniform(0.5, 50),1))
    return product


def picture_map(product):
    try:
        r = requests.get(product["image_link"], timeout=10)
        if r.status_code >= 400 and r.status_code <= 599:
            print(f"picture was not uploaded for {product['name']}")
            product["image_link"] = "https://startupjungle.com/wp-content/uploads/2017/02/cosmetic-products-3018845-1.jpg"

    except:
        print (f"picture was not loaded for {product['name']}")
        product["image_link"] = "https://startupjungle.com/wp-content/uploads/2017/02/cosmetic-products-3018845-1.jpg"
    return product


products = list(map(remove_quotes,products))
products = list(map(price_map, products))
products = list(map(picture_map,products))

with open("./products_new.json", "w") as f:
    f.write(json.dumps(products))
