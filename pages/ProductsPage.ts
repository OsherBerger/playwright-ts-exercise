import { Locator, Page} from "@playwright/test";
import { BasePage } from "./BasePage";

export default class ProductsPage extends BasePage{
    
    private itemDescriptionElement: Locator;
    private shoppingCartElement: Locator;
    
    constructor(protected page:Page){
        super(page);
        this.itemDescriptionElement = this.page.locator('[class="inventory_item_description"]');
        this.shoppingCartElement = this.page.locator('a[class="shopping_cart_link"]');
    }


    public async chooseProductByTitle(expectedProductTitle: string){
        await this.itemDescriptionElement.filter({hasText: expectedProductTitle})
        .locator('button').click();
    }

    public async validateNumberOfItems(expectedNumberOfItems: string ){
        await this.validateElementText(this.shoppingCartElement, expectedNumberOfItems)
    }

    public async goToCart(){
        await this.clickElement(this.shoppingCartElement);
    }
 
}