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
    $addFields: {
      user: { $ifNull: [ { $arrayElemAt: [ "$user", 0 ] }, null ] }
    }
  }
];

db.collection('products').aggregate(pipeline);
```