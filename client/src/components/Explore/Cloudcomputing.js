import React, { useState } from 'react';
import Comment from '../Comment';
import Note from '../Note';

import Question from '../Explore/Question'
const Cloudcomputing=()=>{

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
        <div id="heading">Interview Question for Cloud Computing
        </div>
        
    </div>
    </div>
        {/* question answer part starts */}
        <Question 
        question="What is cloud computing?" 
        answer="Cloud computing is an internet based new age computer technology. It is the next stage technology that uses the clouds to provide the services whenever and wherever the user need it.It provides a method to access several servers world wide."

        />

       <Question 
        question="What are the benefits of cloud computing?" 
        answer="->Data backup and storage of data."
        answer1="->Powerful server capabilities."
        answer2="->Incremented productivity."
        flag="1"

        />
        
       <Question 
        question="What is a cloud?" 
        answer="A cloud is a combination of networks ,hardware, services, storage, and interfaces that helps in delivering computing as a service"

        />
        
       <Question 
        question="What are the different data types used in cloud computing?" 
        answer="There are different data types in cloud computing like emails, contracts, images , blogs etc. As we know that data is increasing day by day so it is needed to new data types to store these new data. For an example, if you want to store video then you need a new data type."

        />
        
       <Question 
        question="What Is A Cloud Service?" 
        answer="A cloud service is a service that is used to build cloud applications. This service provides the facility of using the cloud application without installing it on the computer. It reduces the maintenance and support of the application as compared to those applications that are not developed using the cloud service. The different kinds of users can use the application from the cloud service, which may be public or private application."

        />
        
       <Question 
        question="Which are the different layers that define cloud architecture?" 
        answer="->CLC or Cloud Controller"
        answer1="->Walrus"
        answer2="->Cluster Controller"
        answer3="->SC or Storage Controller"
        answer4="->NC or Node Controller"
        flag="1"

        />
        
       <Question 
        question="Which platforms are used for large scale cloud computing?" 
        answer="Apache Hadoop"
        answer1="MapReduce"
        flag="1"

        />
        
       <Question 
        question="What are the different layers in cloud computing? Explain working of them." 
        answer="->Infrastructure as a service (IaaS):It provides cloud infrastructure in terms of hardware as like memory, processor, speed etc."
        answer1="->Platform as a service (PaaS):It provides cloud application platform for the developer."
        answer2="->Software as a service (SaaS)::It provides the cloud applications to users directly without installing anything on the system. These applications remains on cloud."
        flag="1"

        />
        
       <Question 
        question="What do you mean by software as a service?" 
        answer="Software As a Service (SaaS) is an important layer of cloud computing. It provides cloud applications like Google is doing. It facilitate users to save their document on the cloud and create as well."

        />
        
       <Question 
        question="What is the platform as a service?" 
        answer="It is also a layer in cloud architecture. This model is built on the infrastructure model and provide resources like computers, storage and network. It is responsible to provide complete virtualization of the infrastructure layer, make it look like a single server and invisible for outside world."

        />
        
       <Question 
        question="What is on-demand functionality? How is it provided in cloud computing?" 
        answer="Cloud computing provides a on-demand access to the virtualized IT resources. It can be used by the subscriber. It uses shared pool to provide configurable resources. Shared pool contains networks, servers, storage, applications and services."

        />
        
       <Question 
        question="What are the platforms used for large scale cloud computing?" 
        answer="Apache Hadoop and MapReduce are the platforms use for large scale cloud computing."

        />
        
       <Question 
        question="What are the different models for deployment in cloud computing?" 
        answer="->Private cloud"
        answer1="->Public cloud"
        answer2="->Hybrid cloud"
        answer3="->Community cloud"
        flag="1"

        />
        
       <Question 
        question="What is private cloud?" 
        answer="Private clouds are used to keep the strategic operations and other reasons secure. It is a complete platform which is fully functional and can be owned, operated and restricted to only an organization or an industry. Now a day, most of the organizations have moved to private clouds due to security concerns. Virtual private cloud is being used that operate by a hosting company."

        />
        
       <Question 
        question="What is public cloud?" 
        answer="The public clouds are open to the people for use and deployment. For example: Google and Amazon etc. The public clouds focus on a few layers like cloud application, infrastructure providing and providing platform markets."

        />
        
       <Question 
        question="What are Hybrid clouds?" 
        answer="Hybrid clouds are the combination of public clouds and private clouds. It is preferred over both the clouds because it applies most robust approach to implement cloud architecture. It includes the functionalities and features of both the worlds. It allows organizations to create their own cloud and allow them to give the control over to someone else as well."

        />
        
       <Question 
        question="What is the difference between cloud computing and mobile computing?" 
        answer="Mobile computing and cloud computing are slightly same in concept. Mobile computing uses the concept of cloud computing . Cloud computing provides users the data which they required while in mobile computing, applications run on the remote server and gives user the access for storage and manage."

        />
        
       <Question 
        question="What is the difference between scalability and elasticity?" 
        answer="Scalability is a characteristic of cloud computing which is used to handle the increasing workload by increasing in proportion amount of resource capacity. By the use of scalability, the architecture provides on demand resources if the requirement is being raised by the traffic. Whereas, Elasticity is a characteristic which provides the concept of commissioning and decommissioning of large amount of resource capacity dynamically. It is measured by the speed by which the resources are coming on demand and the usage of the resources."

        />
        
       <Question 
        question="What are the security benefits of cloud computing?" 
        answer="Cloud computing authorizes the application service, so it is used in identity management."
        answer1="It provides permissions to the users so that they can control the access of another user who is entering into the cloud environment."
        flag="1"

        />
        
       <Question 
        question="What is the usage of utility computing?" 
        answer="Utility computing is a plug-in managed by an organization which decides what type of services has to be deployed from the cloud. It facilitates users to pay only for what they use."

        />
        
       <Question 
        question="What is 'EUCALYPTUS' in cloud computing? Why is it used?" 
        answer="It is an acronym stands for Elastic Utility Computing Architecture For Linking Your Program To Useful Systems. It is an open source software infrastructure in cloud computing and used to implement clusters in cloud computing platform. It creates public, private and hybrid cloud. It facilitate a user to create his own data center into a private cloud and use its functionalities to many other organizations."

        />
        
       <Question 
        question="Explain System integrators in cloud computing." 
        answer="System integrator provides a strategy of a complicated process used to design a cloud platform. It creates more accurate hybrid and private cloud network because integrator have all the knowledge about the data center creation."

        />
        
       <Question 
        question="What are the open source cloud computing platform databases?" 
        answer="MongoDB, CouchDB, LucidDB are the example of open source cloud computing platform database."

        />
        
       <Question 
        question="Give some example of large cloud provider and databases?" 
        answer="->Google bigtable"
        answer1="->Amazon simpleDB"
        answer2="->Cloud based SQL"
        flag="1"

        />
        
       <Question 
        question="What is the difference between cloud and traditional datacenters?" 
        answer="The cost of the traditional datacenter is higher than cloud because in traditional databases, there is overheating problems and some software and hardware issue."

        />
        
       <Question 
        question="What are the different in Software as a Service (SaaS)?" 
        answer="Simple Multi-tenancy:In this mode, Every user has independent resources and are uniquely different from other users. This is an efficient mode."
        answer1="Fine grain multi-tenancy:: In this mode, the resources can be shared by many users but the functionality remains the same."
        flag="1"

        />
        
       <Question 
        question="Why API's is used in cloud services?" 
        answer="->It provide an alternative way that you don't need to write the fully fledged program."
        answer1="->It makes communication between one or more applications."
        answer2="->It creates applications and link the cloud services with other systems."
        flag="1"

        />
        
       <Question 
        question="What are the advantages of cloud services?" 
        answer="Cost saving: It helps in the utilization of investment in the corporate sector. So, it is cost saving."
        answer1="Scalable and Robust: It helps in the developing scalable and robust applications. Previously, the scaling took months, but now, scaling takes less time."
        answer2="Time saving: It helps in saving time in terms of deployment and maintenance."
        flag="1"

        />
        
       <Question 
        question="What are the different datacenters in cloud computing?" 
        answer="1. Containerized datacenter"
        answer1="2. Low density datacenter"
        flag="1"

        />
        
       <Question 
        question="What do you mean by CaaS?" 
        answer="CaaS is a terminology used in telecom industry as Communication As a Service. CaaS offers the enterprise user features such as desktop call control, unified messaging and desktop faxing."

        />
        
       <Question 
        question="What do you mean by VPN? What does it contain?" 
        answer="VPN stands for Virtual Private Network. VPN is a private cloud that manage the security of the data during the communication in the cloud environment. With VPN, you can make a public network as private network."

        />
        
       <Question 
        question="What are the basic clouds in cloud computing?" 
        answer="There are three basic clouds in cloud computing:"
        answer1="->Professional cloud"
        answer2="->Personal cloud"
        answer3="->Performance cloud"
        flag="1"

        />
        
       <Question 
        question="Which services are provided by Window azure operating system?" 
        answer="There are three core services provided by Window azure operating system:"
        answer1="->Compute"
        answer2="->Storage"
        answer3="->Management"
        flag="1"

        />
        
       <Question 
        question="What is the usage of virtualization platform in implementing cloud?" 
        answer="->It is used to manage the service level policies."
        answer1="->Cloud Operating System."
        answer2="->Virtualization platforms help to keep the backend level and user level concepts different from each other."
        flag="1"

        />
        
       <Question 
        question="We source cloud computing platform databases?" 
        answer="Following are the open source cloud computing platform databases:"
        answer1="->MongoDB"
        answer2="->CouchDB"
        answer3="->LucidDB"
        flag="1"

        />
        
       <Question 
        question="What are some large cloud providers and databases?" 
        answer="Following are the mostly used large cloud providers and databases:"
        answer1="->Google bigtable"
        answer2="->Amazon simpleDB"
        answer3="->Cloud based SQL"
        flag="1"

        />
        
       <Question 
        question="How would you secure data for transport in cloud?" 
        answer="This is the most obvious question accurued in mind that if the cloud data is secure; To ensure that, check that there is no data leak with the encryption key implemented with the data you sending while the data moves from point A to point B in cloud."

        />
        
       <Question 
        question="How User Will Gain From Utility Computing?" 
        answer="Utility computing allow the user to pay per use means whatever they are using only for that they have to pay. It is a plug in that needs to be managed by the organizations on deciding what type of services has to be deployed from the cloud. Utility computing allows the user to think and implement the services according to them. Most organizations go for hybrid strategy that combines internal delivered services that are hosted or outsourced services."

        />
        
       <Question 
        question="Is There Any Difference In Cloud Computing And Computing For Mobiles?" 
        answer="Mobile cloud computing uses the same concept but it just adds a device of mobile. Cloud computing comes in action when a task or a data get kept on the internet rather then individual devices. It provides users on demand access to the data which they have to retrieve. Applications run on the remote server, and then given to the user to be able to, store and manage it from the mobile platform."

        />
        
       <Question 
        question="What Are The Optimizing Strategies Used In Cloud?" 
        answer="To optimize the cost and other resources there is a concept of three-data-center which provides backups in cases of disaster recovery and allows you to keep all the data intact in the case of any failure within the system. System management can be done more efficiently by carrying out pre-emptive tasks on the services and the processes which are running for the job. Security can be more advanced to allow only the limited users to access the services."

        />
        
       <Question 
        question="How The Cloud Services Are Measured?" 
        answer="Cloud computing provides the services to the organizations so they can run their applications and install them on the cloud. Virtualization is used to deploy the cloud computing models as it provides a hidden layer between the user and the physical layer of the system. The cloud services are measured in terms of use. Pay as much as you use that can be on the basis of hours or months or years. Cloud services allow users to pay for only what they use and according to the demand the charges or the prices gets increased."

        />
        
       <Question 
        question="What Are The Three Cost Factors Involves In Cloud Data Center?" 
        answer="Cloud data center doesn’t require experts to operate it, but it requires skilled people to see the maintenance, maintain the workloads and to keep the track of the traffic. The labor cost is 6% of the total cost to operate the cloud data center. Power distribution and cooling of the datacenter cost 20% of the total cost. Computing cost is at the end and is the highest as it is where lots of resources and installation has to be done. It costs the maximum left percentage."

        />
        
       <Question 
        question="What Are The Different Modes Of Software As A Service?" 
        answer="Software as a Service provides cloud application platform on which user can create application with the tools provided. The modes of software as a service are defined as:"
        answer1="->Simple multi-tenancy: in this each user has its own resources that are different from other users. It is an inefficient mode where the user has to put more time and money to add more infrastructure if the demand rises in less time to deliver."
        answer2="->Fine grain multi-tenancy: in this the functionality remains the same that the resources can be shared to many. But it is more efficient as the resources are shared not the data and permission within an application."
        flag="1"

        />
        
       <Question 
        question="What Does Software As A Service Provide?" 
        answer="Software as Service is another layer of cloud computing, which provides cloud applications like google is doing, it is providing google docs for the user to save their documents on the cloud and create as well. It provides the applications to be created on fly without adding or installing any extra software component. It provides built in software to create wide varieties of applications and documents and share it with other people online."

        />
        
       <Question 
        question="Tell Your Opinion About Adoption Of Cloud By Operators Around The World?" 
        answer="Many operators use it today while cloud may not be seeing the traction of some forms of technology, like 4G."

        />
        
       <Question 
        question=" Describe Cloud Computing As Concisely And Simply As Possible In Layman Language?" 
        answer="The purest form of cloud computing is pay-as-you-go Info Tech, online and on demand as per needed. The Info Technology capabilities provided as a service to businesses includes the single software applications and the software suites."

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
export default Cloudcomputing;