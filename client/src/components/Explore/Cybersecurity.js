import React, { useState } from 'react';
import Comment from '../Comment';
import Note from '../Note';

import Question from '../Explore/Question'
const Cybersecurity=()=>{

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
        <div id="heading">Interview Question for Cybersecurity
        </div>
        
    </div>
    </div>
        {/* question answer part starts */}
        <Question 
        question="What is cybersecurity?" 
        answer="Cybersecurity refers to the protection of hardware, software, and data from attackers. The primary purpose of cyber security is to protect against cyberattacks like accessing, changing, or destroying sensitive information."

        />

       <Question 
        question="What are the elements of cybersecurity?" 
        answer="Information security"
        answer1="Network security"
        answer2="Operational security"
        answer3="Application security"
        answer4="End-user education"
        answer5="Business continuity planning"
        flag="1"

        />
        
       <Question 
        question="What are the advantages of cyber security?" 
        answer="It protects the business against ransomware, malware, social engineering, and phishing."
        answer1="It protects end-users."
        answer2="It gives good protection for both data as well as networks."
        answer3="Increase recovery time after a breach."
        flag="1"

        />
        
       <Question 
        question="Differentiate between IDS and IPS." 
        answer="Intrusion Detection System (IDS) detects intrusions. The administrator has to be careful while preventing the intrusion. In the Intrusion Prevention System (IPS), the system finds the intrusion and prevent it."

        />
        
       <Question 
        question="What is CIA?" 
        answer="Confidentiality, Integrity, and Availability (CIA) is a popular model which is designed to develop a security policy."

        />
        
       <Question 
        question="Explain the concept of CIA model." 
        answer="Confidentiality: Ensure the sensitive data is accessed only by an authorized user."
        answer1="Integrity: Integrity means the information is in the right format."
        answer2="Availability: Ensure the data and resources are available for users who need them."
        flag="1"

        />
        
       <Question 
        question="What is a Firewall?" 
        answer="It is a security system designed for the network. A firewall is set on the boundaries of any system or network which monitors and controls network traffic. Firewalls are mostly used to protect the system or network from malware, worms, and viruses. Firewalls can also prevent content filtering and remote access."

        />
        
       <Question 
        question="Explain Traceroute" 
        answer="It is a tool that shows the packet path. It lists all the points that the packet passes through. Traceroute is used mostly when the packet does not reach the destination. Traceroute is used to check where the connection breaks or stops or to identify the failure."

        />
        
       <Question 
        question="What does HIDS do?" 
        answer="It monitors suspicious system activities and traffic of a specific device."

        />
        
       <Question 
        question="What does NIDS do" 
        answer="It monitors the traffic of all device on the network."

        />
        
       <Question 
        question=" Explain SSL" 
        answer="SSL stands for Secure Sockets Layer. It is a technology creating encrypted connections between a web server and a web browser. It is used to protect the information in online transactions and digital payments to maintain data privacy."

        />
        
       <Question 
        question=" What do you mean by data leakage?" 
        answer="Data leakage is an unauthorized transfer of data to the outside world. Data leakage occurs via email, optical media, laptops, and USB keys."

        />
        
       <Question 
        question="Explain the brute force attack." 
        answer="It is a trial-and-error method to find out the right password or PIN. Hackers repetitively try all the combinations of credentials. In many cases, brute force attacks are automated where the software automatically works to login with credentials"

        />
        
       <Question 
        question="How to prevent brute force attack?" 
        answer="->Setting password length."
        answer1="->Increase password complexity."
        answer2="->Set limit on login failures."
        flag="1"

        />
        
       <Question 
        question=" What is port scanning?" 
        answer="It is the technique for identifying open ports and service available on a specific host. Hackers use port scanning technique to find information for malicious purposes."

        />
        
       <Question 
        question="What is a VPN?" 
        answer="VPN stands for Virtual Private Network. It is a network connection method for creating an encrypted and safe connection. This method protects data from interference, snooping, censorship."

        />
        
       <Question 
        question="What are black hat hackers?" 
        answer="Black hat hackers are people who have a good knowledge of breaching network security. These hackers can generate malware for personal financial gain or other malicious reasons. They break into a secure network to modify, steal, or destroy data so that the network can not be used by authorized network users."

        />
        
       <Question 
        question="What are white hat hackers?" 
        answer="White hat hackers or security specialist are specialized in penetration testing. They protect the information system of an organization."

        />
        
       <Question 
        question="What are grey hat hackers?" 
        answer="Grey hat hackers are computer hacker who sometimes violate ethical standards, but they do not have malicious intent."

        />
        
       <Question 
        question=" How to reset a password-protected BIOS configuration?" 
        answer="There are various ways to reset BIOS password. Some of them are as follows:"
        answer1="->Remove CMOS battery."
        answer2="->By utilizing the software."
        answer3="->By utilizing a motherboard jumper."
        answer4="->By utilizing MS-DOS."
        flag="1"

        />
        
       <Question 
        question="What is MITM attack?" 
        answer="A MITM or Man-in-the-Middle is a type of attack where an attacker intercepts communication between two persons. The main intention of MITM is to access confidential information."

        />
        
       <Question 
        question="Define ARP and its working process." 
        answer="It is a protocol used for finding MAC address associated with IPv4 address. This protocol work as an interface between the OSI network and OSI link layer."

        />
        
       <Question 
        question="Explain botnet." 
        answer="It's a number of internet-connected devices like servers, mobile devices, IoT devices, and PCs that are infected and controlled by malware."

        />
        
       <Question 
        question=" What is the main difference between SSL and TLS?" 
        answer="The main difference between these two is that SSL verifies the identity of the sender. SSL helps you to track the person you are communicating to. TLS offers a secure channel between two clients."

        />
        
       <Question 
        question="What is the abbreviation of CSRF?" 
        answer="CSRF stands for Cross-Site Request Forgery."

        />
        
       <Question 
        question="What is 2FA? How to implement it for a public website?" 
        answer="TFA stands for Two Factor Authentication. It is a security process to identify the person who is accessing an online account. The user is granted access only after presenting evidence to the authentication device."

        />
        
       <Question 
        question=" Explain the difference between asymmetric and symmetric encryption." 
        answer="Symmetric encryption requires the same key for encryption and decryption. On the other hand, asymmetric encryption needs different keys for encryption and decryption."

        />
        
       <Question 
        question="What is the full form of XSS?" 
        answer="XSS stands for cross-site scripting."

        />
        
       <Question 
        question=" Explain WAF" 
        answer="WAF stands for Web Application Firewall. WAF is used to protect the application by filtering and monitoring incoming and outgoing traffic between web application and the internet."

        />
        
       <Question 
        question="What is hacking?" 
        answer="Hacking is a process of finding weakness in computer or private networks to exploit its weaknesses and gain access."
        answer1="For example, using password cracking technique to gain access to a system."
        flag="1"

        />
        
       <Question 
        question="Who are hackers?" 
        answer="A Hacker is a person who finds and exploits the weakness in computer systems, smartphones, tablets, or networks to gain access. Hackers are well experienced computer programmers with knowledge of computer security."

        />
        
       <Question 
        question="What is network sniffing?" 
        answer="Network sniffing is a tool used for analyzing data packets sent over a network. This can be done by the specialized software program or hardware equipment. Sniffing can be used to:"
        answer1="->Capture sensitive data such as password."
        answer2="->Eavesdrop on chat messages"
        answer3="->Monitor data package over a network"
        flag="1"

        />
        
       <Question 
        question="What is the importance of DNS monitoring?" 
        answer="Yong domains are easily infected with malicious software. You need to use DNS monitoring tools to identify malware"

        />
        
       <Question 
        question=" Define the process of salting. What is the use of salting?" 
        answer="Salting is that process to extend the length of passwords by using special characters. To use salting, it is very important to know the entire mechanism of salting. The use of salting is to safeguard passwords. It also prevents attackers testing known words across the system."
        answer1="For example, Hash('QxLUF1bgIAdeQX') is added to each and every password to protect your password. It is called as salt."
        flag="1"

        />
        
       <Question 
        question="What is SSH?" 
        answer="SSH stands for Secure Socket Shell or Secure Shell. It is a utility suite that provides system administrators secure way to access the data on a network."

        />
        
       <Question 
        question="Is SSL protocol enough for network security?" 
        answer="SSL verifies the sender's identity, but it does not provide security once the data is transferred to the server. It is good to use server-side encryption and hashing to protect the server against a data breach."

        />
        
       <Question 
        question="What is black box testing and white box testing?" 
        answer="->Black box testing: It is a software testing method in which the internal structure or program code is hidden."
        answer1="->White box testing: A software testing method in which internal structure or program is known by tester."
        flag="1"

        />
        
       <Question 
        question="Explain vulnerabilities in network security." 
        answer="Vulnerabilities refer to the weak point in software code which can be exploited by a threat actor. They are most commonly found in an application like SaaS (Software as a service) software."

        />
        
       <Question 
        question="Explain TCP Three-way handshake." 
        answer="It is a process used in a network to make a connection between a local host and server. This method requires the client and server to negotiate synchronization and acknowledgment packets before starting communication."

        />
        
       <Question 
        question="Define Exfiltration." 
        answer="Data exfiltration refers to the unauthorized transfer of data from a computer system. This transmission may be manual and carried out by anyone having physical access to a computer."

        />
        
       <Question 
        question="What is exploit in network security?" 
        answer="An exploit is a method utilized by hackers to access data in an unauthorized way. It is incorporated into malware."

        />
        
       <Question 
        question="What do you mean by penetration testing?" 
        answer="It is the process of checking exploitable vulnerabilities on the target. In web security, it is used to augment the web application firewall."

        />
        
       <Question 
        question="How to make the user authentication process more secure?" 
        answer="In order to authenticate users, they have to provide their identity. The ID and Key can be used to confirm the user's identity. This is an ideal way how the system should authorize the user."

        />
        
       <Question 
        question="Explain the concept of cross-site scripting." 
        answer="Cross-site scripting refers to a network security vulnerability in which malicious scripts are injected into websites. This attack occurs when attackers allow an untrusted source to inject code into a web application."

        />
        
       <Question 
        question="Name the protocol that broadcast the information across all the devices." 
        answer="Internet Group Management Protocol or IGMP is a communication protocol that is used in game or video streaming. It facilitates routers and other communication devices to send packets."

        />
        
       <Question 
        question="How to protect email messages?" 
        answer="Use cipher algorithm to protect email, credit card information, and corporate data."

        />

       <Question 
        question="What are the risks associated with public Wi-Fi?" 
        answer="Public Wi-Fi has many security issues. Wi-Fi attacks include karma attack, sniffing, war-driving, brute force attack, etc."
        answer1="Public Wi-Fi may identify data that is passed through a network device like emails, browsing history, passwords, and credit card data."
        flag="1"

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
export default Cybersecurity;