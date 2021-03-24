<p align="center">
	<img src="../images/nextjs.png"></img>
</p>

<h2 align="center">
	CSR (Client Side Rendering)
</h2>

**PROS:**

-  Fast to navigate, no load times after initial load.

**CONS:**

-  Empty document served, hydrated by JS on client side.
-  Big bundle, long download.
-  Long loading.
-  Horrible SEO (Empty document).

---

<h2 align="center">
	SSG (Static Site Generation)
</h2>

### getStaticPaths()

Method for getting dynamic paths for files to be generated, returns an array.

### getStaticProps()

Method for returning data, used in generating the component/page.

**PROS:**

-  Static files generated once at build time.
-  Serves files immediately on requests.
-  Very fast.
-  Can be stored in a CND.

**CONS:**

-  Too many pages can result in long build times.
-  No dynamic content on the pages.

---

<h2 align="center">
	SSR (Server Side Rendering)
</h2>

### getServerSideProps()

Method that will run on every request and return props for the page to be generated.

**PROS:**

-  Dynamic HTML document being generated at request time.
-  Generated on the server.

**CONS:**

-  A lot of redundancy in code being run multiplt time for the same page on different requests.
-  More load on the server.
-  Waiting time for the user on the client side, on each request.

<h2 align="center">
	ISR (Incremental Static Regeneration)
</h2>

Not written!
