Reading Notes

Chapter 3
3.1
- Tag: HTML elements that implement information about content. This could be used to explain an image, a summary of a passage, or possibly corrections to an error. There are many different types of tags that all have different functions and purposes.
- A brief history of HTML begins with the ARPANET of the late 1960s, specification of HTML and HTTP between 1990 and 1991 by Tim Berners-Lee and Robert Cailliau, then the formal codification of HTML by the World Wide Web Consortium (W3C) between 1995 and 1997. The W3C is responsible for providing updates to HTML and has been since the mid to late 1900s.
- HTML is defined as a markup language which is a simple way of annotating a document in a way to make the annotations more distinct from the text being annotated. It also allows uers to control how text and visual elements are displayed and laid out.
- Specifications are very lengthy documents that are guides for manufacturers in their implimentations of web protocols like HTML or XML.
- XHTML 1.0 was a version of HTML back in the 90s that used a stricter XML (extensible markup language) syntax rules. Stricter was considered a good thing because during that time most web browsers were pretty lenient. They were unpredictable with how they would handle errors in sloppy HTML.
- The main rules for XML-based syntax rules for XHTML are: There must be a single root element, Element names are composed of any of the valid characters in XML, element names can't start with a number, they are case sensitive, attributes must always be within quotes, and all elements must have a closing element or be self-closing.
- WHATWG (Web Hypertext Application Technology Working Group) was a smaller group within the W3C and wasn't convinced of the embrace of XML and determined that backwards compatibility was the best way forward for the web. By 2009, the W3C had stopped working on XHTML 2.0 and adopted the work from the WHATWG and named it HTML5.

3.2
- HTML Element: a term that is often used interchangably with tag. It is, however, a more expansive term that encompasses the name with angle brackets (or tag) as well as the content within the tag. The element in the HTML document is identified by tags. The element name is in both the beginning and closing tag. Elements can also contain attributes.
- Attribute: a name=value pair that provides more info about the HTML element. These are usually enclosed in quotation marks, though optional, which is a good practice. Some of these attributes expect a number for their value. An empty element does not contain any text content, but instead is an instruction for the browser to do something. <img> is one of the most common empty elements.
- With nesting elements, those contained inside of another elements are considered the children of the parent element. Those contained in the children elements are the descendents of the parent and future elements within the tree. Likewise with the other way around the descendents have ancestor elements. This concept is called the Document Object Model (DOM). In order to be correct nesting, the child's ending tag must occur before the parent's ending tag.

3.3
- A strong consensus is the belief that HTML documents should only focus on the structure of the document; information about how the content of the document should look is best left to the CSS (Cascading Style Sheets).
- Semantic HTML document: an HTML document should not describe how to present content visually but to describe the content structureal semantics or meaning. This structure is aimed to make the content easier to read and to make the the reader better understand the importance of the information.
- "Eliminating presentation-oriented markup and writing semantic HTML markup has a variety of important advantages:" - Chapter 3.3 pg 83. The main advantages are Maintainability (being easier to update and change), performance (quicker to author and faster to download), Accessibility (people of all kinds are able to access the document), and search engine optimization (provides better instructions for the search engine crawlers and tells them what things are important)

3.4
- Title (<title>): used to provide a broad description of the content on a website. It isn't displayed within the browser window, but instead is displayed by the browser in its window/tab. It is also used for bookmarks and browser history. Search engines will also typically use the page's title as a linked text in their result pages. This element also played an important role in the search engine optimization by improving the page's position in the results page after a search (or its rank).
- DOCTYPE (<!DOCTYPE>): tells the browser or any other client software reading the HTML document what type of document it is processing. it specifies that the document contains HTML, not the version of HTML is contained in the document.
- <html>: sometimes called the root element; contains all the other HTML elements in the document. Think of this as the ultimate ancestor to all the other elements.
- Head (<head>): contains descriptive elements about the document, such as the title, any style sheets or JavaScript files it uses, and other types of meta information used by the search engines or other programs. It contains content (other HTML elements and regular text) which will be displayed by the browser.
- <meta>: defines the character encoding of the characters in the document.
- Style (<style>): Defines how the the visual look of the HTML elements in the document.
- Body (<body>): Another structural element which contains headings and paragraphs in the document.

3.5
- Headings (<h1> through <h6>): higher heading number indicates a heading of less importance. Headings are an essential way for authors to show the readers the structure of the document. These are contained within the body element. These headings are also used by the browser to make a document outline for the page. This outline is an internal representation of the control on the page which controls the rendering of the page. This document can also be used when authoers write JavaScript to manipulate elements when they use CSS to style them.
- Paragraphs (<p>): the basic unit of text in HTML. Browsers typically add newlines before and after the element.
- Link: these can reference another page or location in the same page.
- Inline text elements: These don't change the flow of text and provide more info about the text. The other elements change the flow of the text so these can be useful if you need to provide more information without changing how the text looks.
+ <a>: Anchor used for hyperlinks.
+ <abbr>: An abbreviation.
+ Line break element (<br>): forces a line break; sometimes can be confused for a paragraph element. These are suitable for text whose content belongs in a single paragraph but must have specific line breaks; Examples include addresses and poems.
+ <cite>: Citation or reference to another work.
+ <code>: Used for displaying code such as markup or programming code.
+ <em>: Emphasis.
+ <mark>: For displaying highlighted text.
+ <small>: For displaying the fine-print or "nonvital" text such as copyright or legal notices.
+ <span>: The inline equivalent of the <div> element. Generally used to mark text that will receive special formatting using CSS.
+ <strong>: For content that is strongly important.
+ <time>: Fot displaying time and date data.
- Image (<img>): Used to display an image by giving a specific filename or URL.
- List items <li>: contained within specific types of lists.
+ Unordered List (<ul>): Used to display a bulleted list in no particular order. These contain a collection of list elements. Commonly used to markup navigational menus.
+ Ordered List (<ol>): Collections of items that have a set order and are rendered by the browser as a numbered list.
+ Description List (<dl>): Collections of name and description/definition pairs; tend to be used infrequently. A common example would be a FAQ list. It contains <dt> (term or name to be described) and <dd> (describes each term) pairs fir each item in said list.
- Division (<div>): Containers for text or other HTML elements. These are block-level elements like paragraphs. These have no intrinsic presentation or semantic value and is frequently used in contemporary CSS-based layouts to mark out sections.
- Horizontal Rule (<hr>): These indicate a thematic break in the text, usually displayed as a horizontal line on the page.
- Character Entity: The mechanism for including special symbols or characters that have a reserved meaning in HTML. An example being the copyright symbol.
- Semantic Block Element: A special container in HTML5 used to describe structural elements in a document.
- Relative Referencing: syntax used to successfully reference files within the site. An example would be when clicking on a link or an image which would take you somewhere else. A full absolute reference is required when referencing a page or resource on an external site which is a complete URL: http:// or https://, the domain name, any paths, and the file name of the desired resource.

3.6
- Semantic Markup improves the maintainability and accessibility of web pages.*
- Header (<header>): contains the site logo and title (sometimes additional subtitles or taglines), horizontal navigation links, and one or two horizontal banners.
- Footer (<footer>): contains less important material such as smaller text versions of the navigation, copyright notices, info about the site's privacy policy, and sometimes twitter feeds or links to other social sites like YouTube, Reddit, or Facebook.
- Navigation (<nav>): represents a section of a page that contains links to other pages or other parts within the same page. This element was intended to be used for major navigation blocks.
- Main (<main>): this is meant to contain the main unique content of the document. Repeating elements like headers, footers, and navigation are incidental to the main content (like ads or marketing callouts) and do not belong in the <main> element. The W3C recommendation is that the main content area should "consist of content that is directly related to or expands upon the central topic of a document or central functionality of an application."
- Section (<section>) and Article (<article>): The section is the broader element while the article is to be used for blocks of content that could be read independently of the other content on the page.
- Figure (<figure>) and Figure Captions (<figcaption>): used for any type of essential content that could be moved to a different location on the page and the document would still make sense.
- Aside (<aside>): similar to the figure element in that it is used for marking up content that is seperate from the main content. This element represents a section of a page that consists of content that is tangentially important information. This could be used for sidebars, pull quotes, groups of ads, or any other grouping of nonessential elements.
- Details (<details>) and Summary (<summary>): These represent a disclosure widget where the users can obtain additional information or controls. A common use of JavaScript in the UI is accordion widgets which are used to toggle the visibility of a block of content on the page. These elements provide a way of representing functionality in markup.
- Additional Semantic Elements: <blockquote> is used to indicate a quotation from another source. <address> indicates that the enclosed HTML contains contact information for a person or organization; this also has no built-in formatting.