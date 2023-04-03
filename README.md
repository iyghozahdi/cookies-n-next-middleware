## Next Middleware

Middleware is software that enables one or more kinds of communication or connectivity between applications or application components in a distributed network. In Next.js, middleware is a simple piece of code that allows us to change the response to a request before it finishes. Based on a user’s request, we can rewrite, redirect, add headers, or even stream HTML. Middleware runs before every request made on Next.js. This means that when a user requests any page or API route, the middleware logic runs right before the request and it will not affect how pages are rendered, so it works with CSR (_Client Side Rendering_), SSR (_Server Side Rendering_), SSG (_Server Side Generation_), ISR (_Incremental Static Regeneration_). Middleware needs to return a response in less than 1.5 seconds. So, you should only use it in cases where a small amount of processing is required, otherwise the request will time out. Common example of middleware would be :

- Authentication
- Serving localised pages
- Handling unsupported browsers
- Protection from bots
- Redirects and rewrites
- A/B tests
- Server-side analytics

One more thing, middleware can run only on specific pages using a matcher or conditional statement based on the pathname found in the request. For Next middleware we can define matcher in the config function inside middleware file.

Source :

- https://nextjs.org/docs/advanced-features/middleware
- https://blog.logrocket.com/using-next-js-middleware-edge-functions/
- https://drewl.com/blog/next-js-middleware-guide/
- https://javascript.plainenglish.io/next-js-middleware-how-it-works-and-5-real-use-cases-cfacbeb810c9
- https://theodorusclarence.com/blog/nextjs-fetch-usecase

## Cookies

Cookies are pieces of data used to identify the user and their preferences. The browser returns the cookie to the server every time the page is requested. Specific cookies like HTTP cookies are used to perform cookie-based authentication to maintain the session for each user. There are different types of computer cookies each tasked with a responsibility to track certain aspects of you or your online behavior. Some cookies are necessary for websites to load properly, whereas others are purely for marketing purposes. So, here the list of computer cookies :

- Magic cookies
- HTTP cookies
- First-party cookies
- Third-party cookies
- Zombie cookies
- Session cookies
- Persistent cookies
- Essential cookies
- Performance cookies
- Functionality cookies
- Advertising cookies

HTTP cookie (web cookie, browser cookie) is a small piece of data that a server sends to a user's web browser. The browser may store the cookie and send it back to the same server with later requests. Typically, an HTTP cookie is used to tell if two requests come from the same browser—keeping a user logged in, for example. It remembers stateful information for the stateless HTTP protocol.

Source :

- https://www.cloudflare.com/learning/privacy/what-are-cookies/
- https://www.kaspersky.com/resource-center/definitions/cookies
- https://www.section.io/engineering-education/cookie-vs-token-authentication/
- https://allaboutcookies.org/what-is-a-cookie
- https://www.trendmicro.com/vinfo/us/security/definition/cookies
- https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies
