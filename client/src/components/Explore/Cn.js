import React, { useState } from 'react';
import Comment from '../Comment';
import Note from '../Note';

import Question from '../Explore/Question'
const Cn=()=>{

    const[addItem,setAddItem]=useState([]);
    const addNote=(comment)=>{
        //alert('i m clicked');
        setAddItem((prevData)=>{
            return [...prevData,comment];
        })
        console.log(comment);
    }

    const onDelete=(id)=>{
        setAddItem((oldData)=>oldData.filter((currdata,indx)=>{
            return indx!==id;
        }))
    }
    return(


        <>
        <div className="top_img">
         <div id="by">
        <div id="heading">Interview Question for Computer Network
        </div>
        
    </div>
    </div>
        {/* question answer part starts */}
        <Question 
        question="What is the network?" 
        answer="According to Merriam Webster, Network is usually an informally interconnected group or association of different entities like a person, computers, radio stations, etc."
        answer1="For example, Dominos has a network of 1232 branches across India. As the name suggests the computer network is a system of peripherals or computers interconnected with each other and has a standard communication channel established between them to exchange different types of information and data."
        flag="1"

        />

       <Question 
        question="Why is the computer network so important?" 
        answer="Have you ever heard of the Internet or NET? I guess you have, as you are already reading this article on Interviewbit surfing through the internet. But, have you ever thought about the internet? The Internet is a network of a network connecting all different network-enabled devices which enable data and information sharing between them and that makes computer networks a core part of our life and technical interviews."

        />
        
       <Question 
        question="Explain LAN (Local Area Network)" 
        answer="LANs are widely used to connect computers/laptops and consumer electronics which enables them to share resources (e.g., printers, fax machines) and exchange information. When LANs are used by companies or organizations, they are called enterprise networks. There are two different types of LAN networks i.e. wireless LAN (no wires involved achieved using Wi-Fi) and wired LAN (achieved using LAN cable). Wireless LANs are very popular these days for places where installing wire is difficult. The below diagrams explain both wireless and wired LAN."

        />
        
       <Question 
        question=" Tell me something about VPN (Virtual Private Network)" 
        answer="VPN or the Virtual Private Network is a private WAN (Wide Area Network) built on the internet. It allows the creation of a secured tunnel (protected network) between different networks using the internet (public network). By using the VPN, a client can connect to the organization’s network remotely."

        />
        
       <Question 
        question="What are the advantages of using a VPN?" 
        answer="->VPN is used to connect offices in different geographical locations remotely and is cheaper when compared to WAN connections."
        answer1="->VPN is used for secure transactions and confidential data transfer between multiple offices located in different geographical locations."
        answer2="->VPN keeps an organization’s information secured against any potential threats or intrusions by using virtualization."
        flag="1"

        />
        
       <Question 
        question="What are the different types of VPN?" 
        answer="->Access VPN: Access VPN is used to provide connectivity to remote mobile users and telecommuters. It serves as an alternative to dial-up connections or ISDN (Integrated Services Digital Network) connections. It is a low-cost solution and provides a wide range of connectivity."
        answer1="->Site-to-Site VPN: A Site-to-Site or Router-to-Router VPN is commonly used in large companies having branches in different locations to connect the network of one office to another in different locations. There are 2 sub-categories as mentioned below:"
        answer2="->Intranet VPN: Intranet VPN is useful for connecting remote offices in different geographical locations using shared infrastructure (internet connectivity and servers) with the same accessibility policies as a private WAN (wide area network)"
        answer3="->Extranet VPN: Extranet VPN uses shared infrastructure over an intranet, suppliers, customers, partners, and other entities and connects them using dedicated connections."
        flag="1"

        />
        
       <Question 
        question=" What is nodes?" 
        answer="Node: Any communicating device in a network is called a Node. Node is the point of intersection in a network. It can send/receive data and information within a network. Examples of the node can be computers, laptops, printers, servers, modems, etc."

        />
        
       <Question 
        question="What is links?" 
        answer="Link: A link or edge refers to the connectivity between two nodes in the network. It includes the type of connectivity (wired or wireless) between the nodes and protocols used for one node to be able to communicate with the other."

        />
        
       <Question 
        question="What is the network topology?" 
        answer="Network topology is a physical layout of the network, connecting the different nodes using the links. It depicts the connectivity between the computers, devices, cables, etc."

        />
        
       <Question 
        question="What is an IPv4 address?" 
        answer="An IP address is a 32-bit dynamic address of a node in the network. An IPv4 address has 4 octets of 8-bit each with each number with a value up to 255."
        

        />
        
       <Question 
        question="What are the different classes of IPv4?" 
        answer="IPv4 classes are differentiated based on the number of hosts it supports on the network. There are five types of IPv4 classes and are based on the first octet of IP addresses which are classified as Class A, B, C, D, or E."

        />
        
       <Question 
        question="What are Private and Special IP addresses?" 
        answer="Private Address: For each class, there are specific IPs that are reserved specifically for private use only. This IP address cannot be used for devices on the Internet as they are non-routable."
        answer1="Special Address: IP Range from 127.0.0.1 to 127.255.255.255 are network testing addresses also known as loopback addresses are the special IP address."
        flag="1"

        />
        
       <Question 
        question="Describe the OSI Reference Model" 
        answer="Open System Interconnections (OSI) is a network architecture model based on the ISO standards. It is called the OSI model as it deals with connecting the systems that are open for communication with other systems."

        />
        
       <Question 
        question="Describe the TCP/IP Reference Model" 
        answer="It is a compressed version of the OSI model with only 4 layers. It was developed by the US Department of Defence (DoD) in the 1980s. The name of this model is based on 2 standard protocols used i.e. TCP (Transmission Control Protocol) and IP (Internet Protocol)."

        />
        
       <Question 
        question="What are the HTTP and the HTTPS protocol?" 
        answer="HTTP is the HyperText Transfer Protocol which defines the set of rules and standards on how the information can be transmitted on the World Wide Web (WWW).  It helps the web browsers and web servers for communication. It is a ‘stateless protocol’ where each command is independent with respect to the previous command. HTTP is an application layer protocol built upon the TCP. It uses port 80 by default."
        answer1="HTTPS is the HyperText Transfer Protocol Secure or Secure HTTP. It is an advanced and secured version of HTTP. On top of HTTP, SSL/TLS protocol is used to provide security. It enables secure transactions by encrypting the communication and also helps identify network servers securely. It uses port 443 by default."
        flag="1"

        />
        
       <Question 
        question="What is the SMTP protocol?" 
        answer="SMTP is the Simple Mail Transfer Protocol. SMTP sets the rule for communication between servers. This set of rules helps the software to transmit emails over the internet. It supports both End-to-End and Store-and-Forward methods. It is in always-listening mode on port 25."

        />
        
       <Question 
        question="What is the DNS?" 
        answer="DNS is the Domain Name System. It is considered as the devices/services directory of the Internet. It is a decentralized and hierarchical naming system for devices/services connected to the Internet. It translates the domain names to their corresponding IPs. For e.g. interviewbit.com to 172.217.166.36. It uses port 53 by default."

        />
        
       <Question 
        question="What is the use of a router and how is it different from a gateway?" 
        answer="The router is a networking device used for connecting two or more network segments. It directs the traffic in the network. It transfers information and data like web pages, emails, images, videos, etc. from source to destination in the form of packets. It operates at the network layer. The gateways are also used to route and regulate the network traffic but, they can also send data between two dissimilar networks while a router can only send data to similar networks."

        />
        
       <Question 
        question=" What is the TCP protocol?" 
        answer="TCP or TCP/IP is the Transmission Control Protocol/Internet Protocol. It is a set of rules that decides how a computer connects to the Internet and how to transmit the data over the network. It creates a virtual network when more than one computer is connected to the network and uses the three ways handshake model to establish the connection which makes it more reliable."

        />
        
       <Question 
        question="What is the UDP protocol?" 
        answer="UDP is the User Datagram Protocol and is based on Datagrams. Mainly, it is used for multicasting and broadcasting. Its functionality is almost the same as TCP/IP Protocol except for the three ways of handshaking and error checking. It uses a simple transmission without any hand-shaking which makes it less reliable."

        />
        
       <Question 
        question="What is the ICMP protocol?" 
        answer="ICMP is the Internet Control Message Protocol. It is a network layer protocol used for error handling. It is mainly used by network devices like routers for diagnosing the network connection issues and crucial for error reporting and testing if the data is reaching the preferred destination in time. It uses port 7 by default."

        />
        
       <Question 
        question="What do you mean by the DHCP Protocol?" 
        answer="DHCP is the Dynamic Host Configuration Protocol."
        answer1="It is an application layer protocol used to auto-configure devices on IP networks enabling them to use the TCP and UDP-based protocols. The DHCP servers auto-assign the IPs and other network configurations to the devices individually which enables them to communicate over the IP network. It helps to get the subnet mask, IP address and helps to resolve the DNS. It uses port 67 by default."
        flag="1"

        />
        
       <Question 
        question="What is the ARP protocol?" 
        answer="ARP is Address Resolution Protocol. It is a network-level protocol used to convert the logical address i.e. IP address to the device's physical address i.e. MAC address. It can also be used to get the MAC address of devices when they are trying to communicate over the local network."

        />
        
       <Question 
        question="What is the FTP protocol?" 
        answer="FTP is a File Transfer Protocol. It is an application layer protocol used to transfer files and data reliably and efficiently between hosts. It can also be used to download files from remote servers to your computer. It uses port 27 by default."

        />
        
       <Question 
        question=" What is the MAC address and how is it related to NIC?" 
        answer="MAC address is the Media Access Control address. It is a 48-bit or 64-bit unique identifier of devices in the network. It is also called the physical address embedded with Network Interface Card (NIC) used at the Data Link Layer. NIC is a hardware component in the networking device using which a device can connect to the network."

        />
        
       <Question 
        question="What is a subnet?" 
        answer="A subnet is a network inside a network achieved by the process called subnetting which helps divide a network into subnets. It is used for getting a higher routing efficiency and enhances the security of the network. It reduces the time to extract the host address from the routing table."

        />
        
       <Question 
        question="What is the firewall?" 
        answer="The firewall is a network security system that is used to monitor the incoming and outgoing traffic and blocks the same based on the firewall security policies. It acts as a wall between the internet (public network) and the networking devices (a private network). It is either a hardware device, software program, or a combination of both. It adds a layer of security to the network."

        />
        
       <Question 
        question="What are Unicasting, Anycasting, Multicasting and Broadcasting?" 
        answer="Unicasting: If the message is sent to a single node from the source then it is known as unicasting. This is commonly used in networks to establish a new connection."
          answer1="Anycasting: If the message is sent to any of the nodes from the source then it is known as anycasting. It is mainly used to get the content from any of the servers in the Content Delivery System."
          answer2="Multicasting: If the message is sent to a subset of nodes from the source then it is known as multicasting. Used to send the same data to multiple receivers."
          answer3="Broadcasting: If the message is sent to all the nodes in a network from a source then it is known as broadcasting. DHCP and ARP in the local network use broadcasting."
          flag="1"

        />
        
       <Question 
        question="What happens when you enter google.com in the web browser?" 
        answer="Check the browser cache first if the content is fresh and present in cache display the same."
        answer1="If not, the browser checks if the IP of the URL is present in the cache (browser and OS) if not then request the OS to do a DNS lookup using UDP to get the corresponding IP address of the URL from the DNS server to establish a new TCP connection."
        answer2="A new TCP connection is set between the browser and the server using three-way handshaking."
        answer3="An HTTP request is sent to the server using the TCP connection."
        answer4="The browser process the HTTP response sent by the server and may close the TCP connection or reuse the same for future requests."
        answer5="Browser decodes the response and renders the content."
        flag="1"

        />
        
       <Question 
        question="What is NIC?" 
        answer="NIC stands for Network Interface Card. It is a peripheral card attached to the PC to connect to a network. Every NIC has its own MAC address that identifies the PC on the network."
        answer1="It provides a wireless connection to a local area network."
        answer2="NICs were mainly used in desktop computers."
        flag="1"

        />
        
       <Question 
        question="What is the meaning of 10Base-T?" 
        answer="It is used to specify data transfer rate. In 10Base-T, 10 specify the data transfer rate, i.e., 10Mbps. The word Base specifies the baseband as opposed to broadband. T specifies the type of the cable which is a twisted pair."

        />
        
       <Question 
        question="What is NOS in computer networking?" 
        answer="NOS stands for Network Operating System. It is specialized software which is used to provide network connectivity to a computer to make communication possible with other computers and connected devices."
        answer1="NOS is the software which allows the device to communicate, share files with other devices."
        answer2="The first network operating system was Novel NetWare released in 1983. Some other examples of NOS are Windows 2000, Windows XP, Linux, etc."
        flag="1"

        />
        
       <Question 
        question="What is POP3?" 
        answer="POP3 stands for Post Office Protocol version3. POP is responsible for accessing the mail service on a client machine. POP3 works on two models such as Delete mode and Keep mode."

        />
        
       <Question 
        question=" What do you understand by MAC address?" 
        answer="MAC stands for Media Access Control. It is the address of the device at the Media Access Control Layer of Network Architecture. It is a unique address means no two devices can have same MAC addresses."

        />
        
       <Question 
        question="What is private IP address?" 
        answer="There are three ranges of IP addresses that have been reserved for IP addresses. They are not valid for use on the internet. If you want to access internet on these private IPs, you must have to use proxy server or NAT server."

        />
        
       <Question 
        question="What is public IP address?" 
        answer="A public IP address is an address taken by the Internet Service Provider which facilitates you to communication on the internet."

        />
        
       <Question 
        question="What is APIPA?" 
        answer="APIPA is an acronym stands for Automatic Private IP Addressing. This feature is generally found in Microsoft operating system."

        />
        
       <Question 
        question="What is RAID?" 
        answer="RAID is a method to provide Fault Tolerance by using multiple Hard Disc Drives."

        />
        
       <Question 
        question="What is anonymous FTP?" 
        answer="Anonymous FTP is used to grant users access to files in public servers. Users which are allowed access to data in these servers do not need to identify themselves, but instead log in as an anonymous guest."

        />
        
       <Question 
        question="What is the usage of OSI physical layer?" 
        answer="The OSI physical layer is used to convert data bits into electrical signals and vice versa. On this layer, network devices and cable types are considered and setup."

        />
        
       <Question 
        question="Explain the functionality of OSI session layer?" 
        answer="OSI session layer provides the protocols and means for two devices on the network to communicate with each other by holding a session. This layer is responsible for setting up the session, managing information exchange during the session, and tear-down process upon termination of the session."

        />
        
       <Question 
        question="What is the maximum length allowed for a UTP cable?" 
        answer="The maximum length of UTP cable is 90 to 100 meters."

        />
        
       <Question 
        question="What do you understand by ping command?" 
        answer="The 'ping' is a utility program that allows you to check the connectivity between the network devices. You can ping devices using its IP address or name."

        />
        
       <Question 
        question="What is Sneakernet?" 
        answer="Sneakernet is the earliest form of networking where the data is physically transported using removable media"

        />
        
       <Question 
        question="Explain the peer-peer process." 
        answer="The processes on each machine that communicate at a given layer are called peer-peer process."

        />
        
       <Question 
        question=" What is a congested switch?" 
        answer="A switch receives packets faster than the shared link. It can accommodate and stores in its memory, for an extended period of time, then the switch will eventually run out of buffer space, and some packets will have to be dropped. This state is called a congested state."

        />
       <Question 
        question="What is multiplexing in networking?" 
        answer="In Networking, multiplexing is the set of techniques that is used to allow the simultaneous transmission of multiple signals across a single data link."

        />
       <Question 
        question="What is RSA Algorithm?" 
        answer="RSA is short for Rivest-Shamir-Adleman algorithm. It is mostly used for public key encryption."

        />
       

       {/* Question-answer part end  */}

        <Comment passComment={addNote} />
       
        {
            addItem.map((val,index)=>{
                return(
                    <Note 
                    key={index}
                    id={index}
                    name={val.name}
                    content={val.content}
                    deleteItem={onDelete}
                    />
                )
            })
        }
        </>
    )
}
export default Cn;