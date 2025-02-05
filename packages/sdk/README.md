# Hoarder SDK

This package contains the official typescript SDK for the hoarder API.

## Installation

```
npm install @repoapp/sdk
```

## Usage

```typescript
import { createHoarderClient } from "@repoapp/sdk";

// Create a client
const apiKey = "my-super-secret-key";
const addr = `https://hoarder.mydomain.com`;
const client = createHoarderClient({
  baseUrl: `${addr}/api/v1/`,
  headers: {
    "Content-Type": "application/json",
    authorization: `Bearer ${apiKey}`,
  },
});

// Create a bookmark
const {
  data: createdBookmark,
  response: createResponse,
  error: createError,
} = await client.POST("/bookmarks", {
  body: {
    type: "text",
    title: "Search Test 1",
    text: "This is a test bookmark for search",
  },
});

console.log(createResponse.status, createdBookmark, createError);

// Search for bookmarks
const {
  data: searchResults,
  response: searchResponse,
  error: searchError,
} = await client.GET("/bookmarks/search", {
  params: {
    query: {
      q: "test bookmark",
    },
  },
});
console.log(searchResponse.status, searchResults, searchError);
```

## Docs

API docs can be found [here](https://docs.hoarder.app/api).

## Versioning

- This package follows the minor version of the hoarder server. So new APIs introduced in Hoarder version `0.21.0` will be available in this package starting from version `0.21.0`.
- Hoarder strives to maintain backward compatibility in its APIs, so older versions of this package should continue working with newer hoarder server versions.
