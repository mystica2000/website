---
title: "The Packet That Started it All"
desp: "creation of packets, how it's encapsulated in protocol stack"
tags:
  - web
  - networks
  - http
keywords: "web,networks,http,packets,tcp,ip"
---

### Motivation
The level of abstraction in software development nowadays is mind-blowing.
Abstraction makes it easier for us to solve problems instead of knowing the internals of some tech we don't care about but on the other hand,
it looks like a black box sometimes. What happens when I make an HTTP request and how the database knows where to store?
What's the process behind all these has always been a mystery to me.
So I started digging into these concepts and gonna share my learnings along the way!



Have you ever wondered what happens when you make an HTTP request?
What happens under the hood? You might have heard about TCP, UDP, and OSI models but are not sure how these things work in reality.
Let’s analyze using {% ahref "https://www.wireshark.org/","Wireshark","ahrefmd" %}!

## ✨ Abstracted View of OSI Model

{% image "src/assets/images/posts/http-packets/osi.png", "osi layer architecture containing application layer having protocols http, dns, ftp and transport layer protocol containing udp, tcp and quic","post-img", "lazy" %}


HTTP, DNS, and FTP are all application layer protocols that we use when developing apps in general. But to send this request to a server it needs to be traveled via various networks. Packets make it possible to send chunks of data across several networks.

## ✨ HTTP

HTTP is request-response (client-server protocol)., Check out {% ahref "https://developer.mozilla.org/en-US/docs/Web/HTTP","MDN","ahrefmd" %} Web docs for a detailed view of HTTP.

In this post, we will look at the HTTP Request (Note: specifically about http v1.1,  not for http over tls or http v2/v3). How it’s made! Wireshark is a tool that allows us to capture network requests and responses.

HTTP works under the hood of TCP protocol. That means HTTP is the payload for TCP in the
transport layer. And Well, TCP is the payload for IP Packets. And then IP is the payload for Ethernet Frame and so on.

### 🚀 Start from the Bottom (Ethernet Layer)
If you look at the ethernet frames in Wireshark, you can see IPv4/ IPv6 as payload for the ethernet frame.

{% image "src/assets/images/posts/http-packets/ethernet.png", "ethernet frame containing IPv6 as payload in wireshark","post-img", "lazy" %}


### 🚀 Network Layer
In this case, it’s IPv6. And then followed by IPv6 Packet now, containing TCP as its payload.

{% image "src/assets/images/posts/http-packets/ipv6.png", "IPv6 packet containing TCP as payload in wireshark","post-img", "lazy" %}


### 🚀 Transport Layer
Now, look at the TCP Packet, it contains destination PORT as 80 which belongs to HTTP.  we are gonna request a resource from a server that is running http server at port 80. And another port to keep in mind that our source port is 57995 (random port) selected by our browser or application. so the payload of 303 bytes here is for HTTP Request.

{% image "src/assets/images/posts/http-packets/tcppacket.png", "tcp packet containing destination port as 80 (http port), desination port as 57995 (random port) and tcp payload byte as 303 which is request data of http","post-img", "lazy" %}


### 🚀 Application Layer
Now, the HTTP load contains the request we made... For example get request for /canonical.html which uses http version 1.1

{% image "src/assets/images/posts/http-packets/tcppayload.jpg", "http request data containing requesting GET for /canoinical.html here","post-img", "lazy" %}

This is how the packet travels across the network! To wrap things up, packets are encapsulated at every level of the TCP/IP Stack and then sent across the network.


## Our Data Packets!!!
{% image "src/assets/images/posts/http-packets/payload.png", "diagram containing http encapsulated in http, tcp encapsulated in ip and then ip encapsulated in ethernet frames","post-img", "lazy" %}



## 🔙 HTTP Response Packet
Similarly, For HTTP Response from the Server. It looks kinda similar but the source and destination ports and IP gets changed in Transport (TCP Packet) and Network (IPV6).


Since we made the request from port 57995 (random port). We are receiving the response from the PORT 80 and sending it to our application which is running at 57995 port.


{% image "src/assets/images/posts/http-packets/responsetcp.jpg", "tcp packet containing source port as 80 (http port), desination port as 57995 (random port)","post-img", "lazy" %}

This is the overview of the HTTP packets and how packet is created to communicate across the networks.





TLDR;

 ⭐ Packets are encapsulated at each layer of OSI,TCP/IP protocol stack to send data across the networks.