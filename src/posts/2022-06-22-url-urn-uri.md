---
title: "URL vs URN vs URI"
desp: "Major Difference between URL, URN, URI"
tags:
  - web
---

Before going into the understanding of these three acronyms, we will learn what is the resource in the acronym of the <abbr title="Uniform Resource Locator">URL</abbr>,<abbr title="Uniform Resource Namespace">  URN</abbr>, <abbr title="Uniform Resource Identifier">URI</abbr> .

```text
  URN - Uniform Resource Namespace
  URL - Uniform Resource Locator
  URI - Uniform Resource Identifier
```

## ✨ What is Resource?
A resource can be HTML file, images, API endpoints, services, or any documents, books, research papers, etc.



{% image "src/assets/images/posts/urlurnuri/venn-diagram.jpg", "venn diagram describing how URL and URN are subsets of URI","post-img" %}

<br>

From the above diagram, we can able to see that URL and URN are the Subsets of URI (Uniform Resource Identifier). We will see what is URL and URN followed by URI.

<br>
<br>

## ✨ URL
It is used to locate Specific resources on the web server or other. It knows where to find them.

<br>


### Syntax of URL as follows:

```js
URL = Scheme/Protocol ":" Scheme_Specific_Path

where,
Scheme/Protocol = http,ftp,etc
Scheme_Specific_Path = path/to/retreival/of/resource
```

<br>


### Example of the URL


{% image "src/assets/images/posts/urlurnuri/url.jpg", "http:/abc.com/index.html?name=hello#section2 where http:/ is protocol, abc.com is authority, /index.html is location or path, ?name=hello is query, #section2 is fragment","post-img" %}
<br>
<br>

## ✨ URN
- it is the persistent labeling of the resources with an identifier. It does not imply where to find the resource. It is a globally unique name for the resources.



### Syntax of URN According to {% ahref "https://datatracker.ietf.org/doc/html/rfc2141#section-2","RFC2141","ahrefmd" %}:

```js
URN = "urn:" <NID> ":" <NSS>

where,
<NID> = NameSpace Identifier (case-insensitive, globally unique)
<NIS> = NameSpace Specific String (can contain query/fragments)
```

<br>


### Examples of URN:

{% image "src/assets/images/posts/urlurnuri/urn.jpg", "URN:ISBN:9780545162074 where NID is ISBN and NSS is 9780545162074","post-img" %}
<br>

Here in the example, we can able to see ISBN is unique for the books and it just tells what is the ISBN id for the book rather than where to find them...

And from the above example, If we change the NID to

```text
urn:isbn:9780545162074
urn:Isbn:9780545162074
urn:ISBN:9780545162074
urn:IsBn:9780545162074
```

The above all are the same since it is case-sensitive


Check out other examples in  {% ahref "https://en.wikipedia.org/wiki/Uniform_Resource_Name","wiki","ahrefmd" %}

<br>
<br>
<br>

## ✨ URI

What is the common between these terms??
URN and URL follow the URI Syntax and it's the subset of URI.
<br>
<br>


### Syntax of URI According to {% ahref "https://datatracker.ietf.org/doc/html/rfc3986#section-3","RFC3986","ahrefmd" %}:

```text
URI = Scheme : heir-part [? query] [# fragment]
where
-   heir-part = authority or path (example.com / isbn:9780747532743)
-   [? query] and [# fragment] are optional ones!
```

From the above syntax,  we can able to see the "Scheme" in the syntax matches with "scheme/protocol" in URL Syntax or "urn" in the URN Syntax.


<br>
Combining both of the above examples from URL and URN,

{% image "src/assets/images/posts/urlurnuri/combine.jpg", "from the above example, http and urn are scheme whereas heir-path is what's following the part of the url or urn in the above examples","post-img" %}

<br>
<br>

we can able to distinguish that both URN and URL follow the URI Syntax.

Where we are using URI then??


In HTML,

```html
<a href="uri scheme">SCHEME</a>
```

the value of href can be http, ftp,mailto, urn, and other URI Schemes. It can be found on {% ahref "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#attr-href","MDN","ahrefmd" %} href supports URI Schemes which means we can do ("urn:isbn:0747532745"). And one of the common URI schemes we use "mailto:"...  web browsers execute something called
{% ahref "https://developer.mozilla.org/en-US/docs/Web/Manifest/protocol_handlers","protocol handlers","ahrefmd" %} to handle the URI Schemes that are not HTTP/HTTPS.

code:

```html
<a href="urn:mrn:iala:pub:g1143">URN</a>
<a href="mailto:mysticainf@gmail.com">mail</a>
<a href="ftp://speedtest.tele2.net">ftp</a>
```

<figure>
<figcaption>
{% image "src/assets/images/posts/urlurnuri/sample.jpg", "On running above html code, the browser console displaying URN as Failed to launch 'urn:mrn:iala:pub:g1143' because the scheme does not have a registered handle,for mail and ftp, it displays Launched external handler","post-img" %}
On running above html code, the browser console displaying URN as Failed to launch 'urn:mrn:iala:pub:g1143' because the scheme does not have a registered handle,for mail and ftp, it displays Launched external handler
</figcaption>
</figure>

<br>



In the above example, **mailto:** is one of the {% ahref "https://en.wikipedia.org/wiki/Mailto#:~:text=mailto%20is%20a%20Uniform%20Resource,it%20into%20an%20email%20client","URI Scheme","ahrefmd" %} in which "mailto" will be scheme name and email id is the scheme path.

<br>

URN failed because the **web** browser can't able to resolve the URN to URL...

<br>
And we do Deep Linking (the link that sends the user directly to the app installed on their phone instead of using the web version of the app on the browser)... we use URI Scheme for the app to enable deep linking. It is one of the use cases for the URI Scheme.
{% image "src/assets/images/posts/urlurnuri/deeplink.png", "diagram explaining the user clicks on the link that takes them to specific app and then deep linking checks whether the app is installed or not in user device, if yes then open the app and shows content. if not installed, it goes to play store or app store to install the app","post-img" %}


<br>


<br><br><br>

- TLDR;
- ⭐ URL (location) starts with "protocol:"
- ⭐ URN (namespace) starts with "urn:"
- ⭐ URI - both URL and URN can be called as URI.

<br>
<br>

<br>
<br>
