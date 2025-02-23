# MongoDB Aggregation: $unwind Error on Missing Foreign Field Match

This repository demonstrates a common yet subtle error in MongoDB aggregation pipelines when using the `$unwind` operator after a `$lookup`.  The problem occurs when a document in the source collection lacks a matching document in the target collection for the join operation.

## Bug Description

The `$lookup` stage joins two collections.  If a document in the source collection lacks a corresponding document in the target collection based on the specified join fields, the resulting array in the `as` field will be empty.  Attempting to `$unwind` an empty array throws an error.

## Solution

The solution involves handling the case of empty arrays using the `$ifNull` operator in conjunction with `$unwind`.