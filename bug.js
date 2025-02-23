```javascript
const pipeline = [
  {
    $lookup: {
      from: "users",
      localField: "userId",
      foreignField: "_id",
      as: "user"
    }
  },
  {
    $unwind: "$user" // This might cause an error if userId doesn't match
  }
];

db.collection('products').aggregate(pipeline);
```