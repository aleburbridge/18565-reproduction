# Builder.io Error Boundary Reproduction

This repository demonstrates a known issue with Builder.io's React SDK where client-side errors thrown within custom components registered and rendered by `BuilderComponent` are not properly caught by React Error Boundaries.

## Problem Description

When a client-side error occurs within a component registered and rendered by Builder.io's `BuilderComponent`, the error is not handled by the application's Error Boundary. Instead of showing the expected error fallback UI (like a 500 page), the application renders a blank UI or fails silently.

## Expected vs Actual Behavior

- **Expected**: After hydration, the Error Boundary should catch the error and render the static 500 page content
- **Actual**: After hydration, the page tries to render but fails due to the render error, resulting in an empty UI

## Reproduction Steps

### Prerequisites
- Next.js 14.2.25
- @builder.io/react 3.1.1
- Static 500 and 404 pages (not using `_error.tsx`)

### Setup
1. Create an Error Boundary component that renders the 500 page when in error state
2. Add the Error Boundary to `_app.tsx`
3. Create a page that renders custom components registered for Builder.io with `BuilderComponent`
4. Force one of the custom components to throw an error on render

### Test Cases

#### 1. Direct Component Test
Visit `/test-page` to test if the Error Boundary works with a direct child component (should work).

## Project Structure

```
├── components/
│   ├── ErrorBoundary.tsx          # React Error Boundary component
│   └── ErrorThrowingComponent.tsx # Component that throws on render
├── pages/
│   ├── _app.tsx                   # App wrapper with Error Boundary
│   ├── 500.tsx                    # Static 500 error page
│   ├── 404.tsx                    # Static 404 error page
│   ├── test-page.tsx              # Direct Error Boundary test
│   └── hot-dog.tsx                # hot dog
└── src/
    └── builder-registry.ts        # Builder.io component registrations
```

## Running the Reproduction

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Build the application:**
   ```bash
   npm run build
   ```

3. **Start in production mode:**
   ```bash
   npm start
   ```

4. **Test the scenarios:**
   - Visit `http://localhost:3000/test-page` - Should show 500 page (Error Boundary works)
   - Visit `http://localhost:3000/hot-dog` - Should show hot dog

## Technical Details

### Error Boundary Implementation
The Error Boundary is implemented as a class component (required by React) and wraps the entire application in `_app.tsx`. It should catch any errors thrown during rendering, lifecycle methods, or constructors of its child components.

### BuilderComponent Issue
The issue appears to be related to how `BuilderComponent` renders its children. Builder.io's React SDK may:
- Catch errors internally and prevent them from propagating to parent Error Boundaries
- Render content outside the normal React tree (e.g., via portals)
- Use custom error handling that interferes with React's error boundary mechanism

## Related Issues

This reproduction is related to:
- [Builder.io GitHub Issue: Error boundaries not catching errors from BuilderComponent](https://github.com/BuilderIO/builder/issues/1092)
- React Error Boundary limitations with third-party rendering libraries

## Workarounds

1. **Wrap BuilderComponent directly** in an Error Boundary (sometimes works)
2. **Handle errors inside custom components** manually with try-catch
3. **Use custom error handling** within Builder-registered components
4. **Wait for Builder.io to fix** error propagation in their SDK

## Environment

- **Node.js**: 18+
- **Next.js**: 14.2.25
- **Builder.io React SDK**: 3.1.1
- **TypeScript**: 5.x
- **React**: 18.x

## Contributing

This is a reproduction repository for demonstrating a specific issue. If you have additional insights or workarounds, please feel free to contribute or open an issue.
