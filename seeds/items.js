
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('Items').del()
    .then(function () {
      // Inserts seed entries
      return knex('Items').insert([
        {
          id: 1, item_name: "Beautiful Painting",
          item_description: "A beautiful painting description",
          item_img_ids: JSON.stringify([1, 2, 3, 4, 5]),
          item_price: 2000,
          item_rating_ids: JSON.stringify([1, 2, 3, 4, 5]),
          item_review_ids: JSON.stringify([1, 2, 3, 4, 5]),
          order_count: 1000,
          favourites_count: 10000,
          categories: JSON.stringify(["vintage", "exotic"])
        },
        {
          id: 2, item_name: "Art",
          item_description: "A beautiful art description",
          item_img_ids: JSON.stringify([1, 2, 3, 4, 5]),
          item_price: 20.99,
          item_rating_ids: JSON.stringify([1, 2, 3, 4, 5]),
          item_review_ids: JSON.stringify([1, 2, 3, 4, 5]),
          order_count: 100,
          favourites_count: 1000,
          categories: JSON.stringify(["vintage", "exotic"])
        },
        {
          id: 3, item_name: "Beautiful Painting",
          item_description: "A beautiful painting description",
          item_img_ids: JSON.stringify([1, 2, 3, 4, 5]),
          item_price: 2000,
          item_rating_ids: JSON.stringify([1, 2, 3, 4, 5]),
          item_review_ids: JSON.stringify([1, 2, 3, 4, 5]),
          order_count: 1000,
          favourites_count: 10000,
          categories: JSON.stringify(["vintage", "exotic"])
        },
        {
          id: 4, item_name: "Art",
          item_description: "A beautiful art description",
          item_img_ids: JSON.stringify([1, 2, 3, 4, 5]),
          item_price: 20.99,
          item_rating_ids: JSON.stringify([1, 2, 3, 4, 5]),
          item_review_ids: JSON.stringify([1, 2, 3, 4, 5]),
          order_count: 100,
          favourites_count: 1000,
          categories: JSON.stringify(["vintage", "exotic"])
        },
        {
          id: 5, item_name: "Beautiful Painting",
          item_description: "A beautiful painting description",
          item_img_ids: JSON.stringify([1, 2, 3, 4, 5]),
          item_price: 2000,
          item_rating_ids: JSON.stringify([1, 2, 3, 4, 5]),
          item_review_ids: JSON.stringify([1, 2, 3, 4, 5]),
          order_count: 1000,
          favourites_count: 10000,
          categories: JSON.stringify(["vintage", "exotic"])
        },
        {
          id: 6, item_name: "Art",
          item_description: "A beautiful art description",
          item_img_ids: JSON.stringify([1, 2, 3, 4, 5]),
          item_price: 20.99,
          item_rating_ids: JSON.stringify([1, 2, 3, 4, 5]),
          item_review_ids: JSON.stringify([1, 2, 3, 4, 5]),
          order_count: 100,
          favourites_count: 1000,
          categories: JSON.stringify(["vintage", "exotic"])
        },
        {
          id: 7, item_name: "Beautiful Painting",
          item_description: "A beautiful painting description",
          item_img_ids: JSON.stringify([1, 2, 3, 4, 5]),
          item_price: 2000,
          item_rating_ids: JSON.stringify([1, 2, 3, 4, 5]),
          item_review_ids: JSON.stringify([1, 2, 3, 4, 5]),
          order_count: 1000,
          favourites_count: 10000,
          categories: JSON.stringify(["vintage", "exotic"])
        },
        {
          id: 8, item_name: "Art",
          item_description: "A beautiful art description",
          item_img_ids: JSON.stringify([1, 2, 3, 4, 5]),
          item_price: 20.99,
          item_rating_ids: JSON.stringify([1, 2, 3, 4, 5]),
          item_review_ids: JSON.stringify([1, 2, 3, 4, 5]),
          order_count: 100,
          favourites_count: 1000,
          categories: JSON.stringify(["vintage", "exotic"])
        },
        {
          id: 9, item_name: "Beautiful Painting",
          item_description: "A beautiful painting description",
          item_img_ids: JSON.stringify([1, 2, 3, 4, 5]),
          item_price: 2000,
          item_rating_ids: JSON.stringify([1, 2, 3, 4, 5]),
          item_review_ids: JSON.stringify([1, 2, 3, 4, 5]),
          order_count: 1000,
          favourites_count: 10000,
          categories: JSON.stringify(["vintage", "exotic"])
        },
        {
          id: 10, item_name: "Art",
          item_description: "A beautiful art description",
          item_img_ids: JSON.stringify([1, 2, 3, 4, 5]),
          item_price: 20.99,
          item_rating_ids: JSON.stringify([1, 2, 3, 4, 5]),
          item_review_ids: JSON.stringify([1, 2, 3, 4, 5]),
          order_count: 100,
          favourites_count: 1000,
          categories: JSON.stringify(["vintage", "exotic"])
        },
        {
          id: 11, item_name: "Beautiful Painting",
          item_description: "A beautiful painting description",
          item_img_ids: JSON.stringify([1, 2, 3, 4, 5]),
          item_price: 2000,
          item_rating_ids: JSON.stringify([1, 2, 3, 4, 5]),
          item_review_ids: JSON.stringify([1, 2, 3, 4, 5]),
          order_count: 1000,
          favourites_count: 10000,
          categories: JSON.stringify(["vintage", "exotic"])
        },
        {
          id: 12, item_name: "Art",
          item_description: "A beautiful art description",
          item_img_ids: JSON.stringify([1, 2, 3, 4, 5]),
          item_price: 20.99,
          item_rating_ids: JSON.stringify([1, 2, 3, 4, 5]),
          item_review_ids: JSON.stringify([1, 2, 3, 4, 5]),
          order_count: 100,
          favourites_count: 1000,
          categories: JSON.stringify(["vintage", "exotic"])
        },

      ]);
    });
};
