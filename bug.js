```javascript
//Incorrect aggregation pipeline causing unexpected results
db.collection.aggregate([
  {$match: { /* filter criteria */ } },
  {$group: { _id: "$field", sum: {$sum: "$anotherField" } } },
  {$sort: {sum: -1}},
  {$limit: 10}
])
```