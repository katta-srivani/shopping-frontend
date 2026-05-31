# Shopping Frontend

React storefront for the shopping app.

## Scripts

```bash
npm install
npm start
npm run build
```

## Environment

Create `.env` for local development or set the same value in your hosting provider:

```text
REACT_APP_API=http://localhost:8000/api
```

If `REACT_APP_API` is not set, the app calls `/api` on the same domain. That works when the frontend and backend are deployed together behind one domain. For separate Vercel/Render deployments, set `REACT_APP_API` to the deployed backend API URL.

## Improvements

- Cleaner responsive storefront UI
- Product image fallback when an uploaded photo is missing
- Safer API configuration through `src/config.js`
- INR currency display across cards and product details
- More accessible navigation buttons
