const enhancer = require('./enhancer.js');
const { repair, succeed } = require('./enhancer.js');
// test away!

// Initial Test
it("should run the tests", function() {
    expect(true).toBe(true);
  });

describe('enhancer.js', () => {

    describe('.repair()', () => {
        it('returns item durability to 100', () => {

            // Arrange
            const sword = {
                name: 'Sword of 1k Truths',
                durability: 10,
                enchancement: 20
            };

            const expected = {
                name: sword.name,
                durability: 100,
                enchancement: sword.enchancement
            }

            // Act
            const repairedItem = repair(sword);

            // Assert
            expect(repairedItem).toEqual(expected);
        })
    });

    describe('.succeed()', () => {
        it('should return an item with an increased enhancement level of + 1', () => {

            // Arrange
           const hammer = {
                name: 'Mjölnir',
                durability: 100,
                enchancement: 10
            };

            const expected = {
                name: hammer.name,
                durability: hammer.durability,
                enchancement: ++hammer.enchancement
            }

            // Act
            const enhancedItem = succeed(hammer);

            // Assert
            expect(enhancedItem).toEqual(expected);

        })
    });





})