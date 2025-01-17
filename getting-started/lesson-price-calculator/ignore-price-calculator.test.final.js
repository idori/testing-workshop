    const ProductsService = require('./products-service')

    describe('Calculate Price', () => {

        beforeAll(async () => {
            console.log('Before all - Open DB, initialize mock server, set config.sendSMS=false');
        })

        afterAll(() => {
            console.log('After all - closes all things')
        });

        beforeEach(() => {
            console.log('Before each - reset config, config = {Default Values}')
        });

        afterEach(() => {
            console.log('After each')
        });


        describe('Price calculator', () => {
            test('When a product is on sale, then expect 10% discount', () => {
                /// Arrange
                const productService = new ProductsService();

                // Act
                const receivedPrice = productService.calculatePrice(100, true, false);

                // Assert
                expect(receivedPrice).toBe(90);
            });


            test('When 2 books exist for the same category, then get both when querying', async () => {
                /// Arrange
                const productsServiceUnderTest = new ProductsService();
                const product1 = productsServiceUnderTest.addProduct('War & peace', 100, 'books');
                const product2 = productsServiceUnderTest.addProduct('Moby dick', 120, 'books');


                // Act
                const receivedResult = await productsServiceUnderTest.getProducts('books');

                // Assert
                expect(receivedResult).toContain(product1);
                expect(receivedResult).toContain(product2);
            });

            test("When deleting an existing product , Then get confirmation", (done) => {
                // Arrange
                const productsServiceUnderTest = new ProductsService();
                productsServiceUnderTest.addProduct('War & peace', 100, 'books');

                // Act
                productsServiceUnderTest.deleteProduct('War & peace', (error, result) => {
                    // Assert
                    expect(result.succeed).toBe(true);
                    done();
                });
            });

            test('When a product is on sale, then expect 10% discount - Without AAA', () => {
                const serviceConfig = {
                    allowDiscount: false
                };
                const productPrice = 100;
                const isOnSale = true;
                const productService = new ProductsService();
                productsServiceUnderTest.addProduct('War & peace', 100, 'books');
                productService.config = serviceConfig;
                const receivedPrice = productService.calculatePrice(productPrice, isOnSale, false);
                expect(receivedPrice).not.toBeNull();
                expect(receivedPrice).toBe(90);
            });
        });

        describe('Missing inputs', () => {
            test('When no price provided, then an error should be thrown', () => {
                const nullPrice = undefined;
                const productsServiceUnderTest = new ProductsService();

                const addProduct = productsServiceUnderTest.addProduct.bind(this, 'Dracula', nullPrice, 'books');

                expect(addProduct).toThrowError();
            });
        });

    });