import { LightningElement } from 'lwc';

export default class FoodBlock extends LightningElement {
    foodTypes=['Main Course', 'Starters', 'Deserts', 'Drinks'];
    products = [
        // Main Course
        { id: 1, name: 'Grilled Chicken', Type: 'Main Course', images: 'https://img.freepik.com/free-photo/asian-cuisine-chebureki-pasties-isolated_2829-17888.jpg?t=st=1726828447~exp=1726832047~hmac=9ad0df8430b04ed7ea0542c20317e3cfb5c964a353c107d6ec1e3965e14f36b9', quantity: 0 },
        { id: 2, name: 'Stroganoff', Type: 'Main Course', images: 'https://img.freepik.com/free-photo/asian-cuisine-chebureki-pasties-isolated_2829-17888.jpg?t=st=1726828447~exp=1726832047~hmac=9ad0df8430b04ed7ea0542c20317e3cfb5c964a353c107d6ec1e3965e14f36b9', quantity: 0 },
        { id: 3, name: 'Vegetable Stir Fry', Type: 'Main Course', images: 'https://img.freepik.com/free-photo/asian-cuisine-chebureki-pasties-isolated_2829-17888.jpg?t=st=1726828447~exp=1726832047~hmac=9ad0df8430b04ed7ea0542c20317e3cfb5c964a353c107d6ec1e3965e14f36b9', quantity: 0 },
        { id: 4, name: 'Pasta Primavera', Type: 'Main Course', images: 'https://img.freepik.com/free-photo/asian-cuisine-chebureki-pasties-isolated_2829-17888.jpg?t=st=1726828447~exp=1726832047~hmac=9ad0df8430b04ed7ea0542c20317e3cfb5c964a353c107d6ec1e3965e14f36b9', quantity: 0 },
    
        // Starters
        { id: 5, name: 'Spring Rolls', Type: 'Starters', images: 'https://img.freepik.com/free-photo/asian-cuisine-chebureki-pasties-isolated_2829-17888.jpg?t=st=1726828447~exp=1726832047~hmac=9ad0df8430b04ed7ea0542c20317e3cfb5c964a353c107d6ec1e3965e14f36b9', quantity: 0 },
        { id: 6, name: 'Garlic Bread', Type: 'Starters', images: 'https://img.freepik.com/free-photo/photo-garlic-bread-slice-isolated-white-background_125540-3899.jpg?ga=GA1.1.1892245892.1726828434&semt=ais_hybrid', quantity: 0 },
        { id: 7, name: 'Bruschetta', Type: 'Starters', images: 'https://img.freepik.com/free-photo/asian-cuisine-chebureki-pasties-isolated_2829-17888.jpg?t=st=1726828447~exp=1726832047~hmac=9ad0df8430b04ed7ea0542c20317e3cfb5c964a353c107d6ec1e3965e14f36b9', quantity: 0 },
        { id: 8, name: 'Stuffed Mushrooms', Type: 'Starters', images: 'https://img.freepik.com/free-photo/close-up-baked-mushrooms-with-cheese-lettuce-white-plate_176474-2598.jpg?ga=GA1.1.1892245892.1726828434&semt=ais_hybrid', quantity: 0 },
    

        // Deserts
        { id: 9, name: 'Cheesecake', Type: 'Deserts', images: 'https://img.freepik.com/free-photo/asian-cuisine-chebureki-pasties-isolated_2829-17888.jpg?t=st=1726828447~exp=1726832047~hmac=9ad0df8430b04ed7ea0542c20317e3cfb5c964a353c107d6ec1e3965e14f36b9', quantity: 0 },
        { id: 10, name: 'Tiramisu', Type: 'Deserts', images: 'https://img.freepik.com/free-photo/asian-cuisine-chebureki-pasties-isolated_2829-17888.jpg?t=st=1726828447~exp=1726832047~hmac=9ad0df8430b04ed7ea0542c20317e3cfb5c964a353c107d6ec1e3965e14f36b9', quantity: 0 },
        { id: 11, name: 'Brownies', Type: 'Deserts', images: 'https://img.freepik.com/free-photo/asian-cuisine-chebureki-pasties-isolated_2829-17888.jpg?t=st=1726828447~exp=1726832047~hmac=9ad0df8430b04ed7ea0542c20317e3cfb5c964a353c107d6ec1e3965e14f36b9', quantity: 0 },
        { id: 12, name: 'Ice Cream Sundae', Type: 'Deserts', images: 'https://img.freepik.com/free-photo/asian-cuisine-chebureki-pasties-isolated_2829-17888.jpg?t=st=1726828447~exp=1726832047~hmac=9ad0df8430b04ed7ea0542c20317e3cfb5c964a353c107d6ec1e3965e14f36b9', quantity: 0 },
    
        // Drinks
        { id: 13, name: 'Lemonade', Type: 'Drinks', images: 'https://img.freepik.com/free-photo/asian-cuisine-chebureki-pasties-isolated_2829-17888.jpg?t=st=1726828447~exp=1726832047~hmac=9ad0df8430b04ed7ea0542c20317e3cfb5c964a353c107d6ec1e3965e14f36b9', quantity: 0 },
        { id: 14, name: 'Mojito', Type: 'Drinks', images: 'https://img.freepik.com/free-photo/asian-cuisine-chebureki-pasties-isolated_2829-17888.jpg?t=st=1726828447~exp=1726832047~hmac=9ad0df8430b04ed7ea0542c20317e3cfb5c964a353c107d6ec1e3965e14f36b9', quantity: 0 },
        { id: 15, name: 'Smoothie', Type: 'Drinks', images: 'https://img.freepik.com/free-photo/asian-cuisine-chebureki-pasties-isolated_2829-17888.jpg?t=st=1726828447~exp=1726832047~hmac=9ad0df8430b04ed7ea0542c20317e3cfb5c964a353c107d6ec1e3965e14f36b9', quantity: 0 },
        { id: 16, name: 'Iced Tea', Type: 'Drinks', images: 'https://img.freepik.com/free-photo/asian-cuisine-chebureki-pasties-isolated_2829-17888.jpg?t=st=1726828447~exp=1726832047~hmac=9ad0df8430b04ed7ea0542c20317e3cfb5c964a353c107d6ec1e3965e14f36b9', quantity: 0 }
    ];
    selectedProducts= this.products.filter(product => product.Type === 'Main Course');

    handleQuantityChange(e){
        const productId= e.target.dataset.id;
        console.log(productId);
        const updatedProduct= this.products.find(product => product.id == productId);
        console.log('before', JSON.stringify(updatedProduct));
        if(e.target.value>0){
            updatedProduct.quantity= e.target.value;
        }
        console.log('after', updatedProduct.quantity);
        this.products= [...this.products];
      
    }

  
    handleFoodType(e){
        const type=e.target.dataset.type;
        this.selectedProducts = this.products.filter(product => product.Type === type);
    }
}

