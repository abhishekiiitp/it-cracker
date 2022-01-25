import React, { useState } from 'react';
import Comment from '../Comment';
import Note from '../Note';

import Question from '../Explore/Question'
const Aws=()=>{

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
        <div id="heading">Interview Question for Amazon Web Services
        </div>
        
    </div>
    </div>
        {/* question answer part starts */}
        <Question 
        question="What is EC2?" 
        answer="EC2, a Virtual Machine in the cloud on which you have OS-level control. You can run this cloud server whenever you want and can be used when you need to deploy your own servers in the cloud, similar to your on-premises servers, and when you want to have full control over the choice of hardware and the updates on the machine."

        />

       <Question 
        question="What is SnowBall?" 
        answer="SnowBall is a small application that enables you to transfer terabytes of data inside and outside of the AWS environment."

        />
        
       <Question 
        question="Explain what AWS is?" 
        answer="AWS stands for Amazon Web Service; it is a collection of remote computing services also known as a cloud computing platform.  This new realm of cloud computing is also known as IaaS or Infrastructure as a Service."

        />
        
       <Question 
        question="What is AMI?" 
        answer="AMI stands for Amazon Machine Image.  It’s a template that provides the information (an operating system, an application server, and applications) required to launch an instance, which is a copy of the AMI running as a virtual server in the cloud.  You can launch instances from as many different AMIs as you need."

        />
        
       <Question 
        question="Mention what the relationship between an instance and AMI is?" 
        answer="From a single AMI, you can launch multiple types of instances.  An instance type defines the hardware of the host computer used for your instance. Each instance type provides different computer and memory capabilities.  Once you launch an instance, it looks like a traditional host, and we can interact with it as we would with any computer."

        />
        
       <Question 
        question="How can you send a request to Amazon S3?" 
        answer="Amazon S3 is a REST service, and you can send a request by using the REST API or the AWS SDK wrapper libraries that wrap the underlying Amazon S3 REST API."

        />
        
       <Question 
        question="What does an AMI include?" 
        answer="An AMI includes the following things"
        answer1="-> A template for the root volume for the instance"
        answer2="-> Launch permissions decide which AWS accounts can avail the AMI to launch instances"
        answer3="-> A block device mapping that determines the volumes to attach to the instance when it is launched"
        flag="1"

        />
        
       <Question 
        question="How many buckets can you create in AWS by default?" 
        answer="By default, you can create up to 100 buckets in each of your AWS accounts."

        />
        
       <Question 
        question=" Explain can you vertically scale an Amazon instance? How?" 
        answer="Yes, you can vertically scale on Amazon instance. For that"
        answer1="Spin up a new larger instance than the one you are currently running"
        answer2="Pause that instance and detach the root webs volume from the server and discard"
        answer3="Then stop your live instance and detach its root volume"
        answer4="Note the unique device ID and attach that root volume to your new server"
        answer5="And start it again"
        flag="1"

        />
        
       <Question 
        question="Explain what T2 instances is?" 
        answer="T2 instances are designed to provide moderate baseline performance and the capability to burst to higher performance as required by the workload."

        />
        
       <Question 
        question=" In VPC with private and public subnets, database servers should ideally be launched into which subnet?" 
        answer="With private and public subnets in VPC, database servers should ideally launch into private subnets."

        />
        
       <Question 
        question="Question NUmber 1" 
        answer="Answer number 1"

        />
        
       <Question 
        question="Mention what the security best practices for Amazon EC2 are?" 
        answer="For secure Amazon EC2 best practices, follow the following steps"
        answer1="-> Use AWS identity and access management to control access to your AWS resources"
        answer2="-> Restrict access by allowing only trusted hosts or networks to access ports on your instance"
        answer3="-> Review the rules in your security groups regularly"
        answer4="-> Only open up permissions that you require"
        answer5="-> Disable password-based login, for example, launched from your AMI"
        flag="1"

        />
        
       <Question 
        question="Explain how the buffer is used in Amazon web services?" 
        answer="The buffer is used to make the system more robust to manage traffic or load by synchronizing different component.  Usually, components receive and process the requests in an unbalanced way. With the help of buffer, the components will be balanced and will work at the same speed to provide faster services."

        />
        
       <Question 
        question="What are key-pairs in AWS?" 
        answer="Key-pairs are secure login information for your virtual machines. To connect to the instances, you can use key-pairs which contain a public-key and private-key."

        />
        
       <Question 
        question="What are the different types of instances?" 
        answer="Following are the types of instances:"
        answer1="General purpose"
        answer2="Computer Optimized"
        answer3="Memory Optimized"
        answer4="Storage Optimized"
        answer5="Accelerated Computing"
        flag="1"

        />
        
       <Question 
        question="Is the property of broadcast or multicast supported by Amazon VPC?" 
        answer="No, currently Amazon VPI not provide support for broadcast or multicast."

        />
        
       <Question 
        question="How many Elastic IPs is allows you to create by AWS?" 
        answer="5 VPC Elastic IP addresses are allowed for each AWS account."

        />
        
       <Question 
        question="Explain default storage class in S3" 
        answer="The default storage class is a Standard frequently accessed."

        />
        
       <Question 
        question="What are the Roles?" 
        answer="Roles are used to provide permissions to entities which you can trust within your AWS account. Roles are very similar to users. However,  with roles, you do not require to create any username and password to work with the resources."

        />
        
       <Question 
        question="What are the edge locations?" 
        answer="Edge location is the area where the contents will be cached. So, when a user is trying to accessing any content, the content will automatically be searched in the edge location."

        />
        
       <Question 
        question="What is VPC?" 
        answer="VPC stands for Virtual Private Cloud. It allows you to customize your networking configuration. It is a network which is logically isolated from another network in the cloud. It allows you to have your IP address range,  internet gateways, subnet and security groups."

        />
        
       <Question 
        question="Explain snowball" 
        answer="Snowball is a data transport option. It used source appliances to a large amount of data into and out of AWS. With the help of snowball, you can transfer a massive amount of data from one place to another. It helps you to reduce networking costs."

        />
        
       <Question 
        question="What is a redshift?" 
        answer="Redshift is a big data warehouse product. It is fast and powerful, fully managed data warehouse service in the cloud."

        />
        
       <Question 
        question=" What are the advantages of auto-scaling?" 
        answer="Following are the advantages of autoscaling"
        answer1="-> Offers fault tolerance"
        answer2="-> Better availability"
        answer3="-> Better cost management"
        flag="1"

        />
        
       <Question 
        question="What is meant by subnet?" 
        answer="A large section of IP Address divided into chunks is known as subnets."

        />
        
       <Question 
        question="Can you establish a Peering connection to a VPC in a different region?" 
        answer="Yes, we can establish a peering connection to a VPC in a different region. It is called inter-region VPC peering connection."

        />
        
       <Question 
        question="What is SQS?" 
        answer="Simple Queue Service also known as SQS. It is distributed queuing service which acts as a mediator for two controllers."

        />
        
       <Question 
        question="How many subnets can you have per VPC?" 
        answer="You can have 200 subnets per VPC."

        />
        
       <Question 
        question=" DNS  and Load Balancer service comes under which type of cloud service?" 
        answer="DNS and Load Balancer and DNS services come under IAAS-storage cloud service."

        />
        
       <Question 
        question="What is the role of AWS CloudTrail?" 
        answer="CloudTrail is a specially designed tool for logging and tracking API calls. It helps to audit all S3 bucket accesses."

        />
        
       <Question 
        question=" When EC2 officially launched?" 
        answer="EC2 officially launched in the year 2006."

        />
        
       <Question 
        question="What is SimpleDB?" 
        answer="SimpleDB is a data repository of structure record which encourages data doubts and indexing both S3 and EC2are called SimpleDB."

        />
        
       <Question 
        question="Explain Amazon ElasticCache" 
        answer="Amazon Elasticcache is a web service which makes it easy to deploy, scale and store data in the cloud."

        />
        
       <Question 
        question="What is AWS Lambda?" 
        answer="Lambda is an Amazon compute service which allows you to run code in the  AWS Cloud without managing servers."

        />
        
       <Question 
        question="Name the AWS service exists only to redundantly cache data and images?" 
        answer="AWS Edge locations are service which redundantly cache data and images."

        />
        
       <Question 
        question=" Explain Geo Restriction in CloudFront" 
        answer="A Geo-restriction feature helps you to prevent users of specific geographic locations from accessing content which you’re distributing through a CloudFront web distribution."

        />
        
       <Question 
        question="What is Amazon EMR?" 
        answer="EMR is a survived cluster stage which helps you to interpret the working of data structures before the intimation.  Apache Hadoop and Apache Spark on the Amazon Web Services helps you to investigate a large amount of data. You can prepare data for the analytics goals and marketing intellect workloads using Apache Hive and using other relevant open source designs."

        />
        
       <Question 
        question=" What is boot time taken for the instance stored backed AMI?" 
        answer="The boot time for an Amazon instance store-backend AMI is less than 5 minutes."

        />
        
       <Question 
        question=" Do you need an internet gateway to use peering connections?" 
        answer="Yes, the Internet gateway is needed to use VPC (virtual private cloud peering) connections."

        />
        
       <Question 
        question="How to connect EBS volume to multiple instances?" 
        answer="We can’t be able to connect EBS volume to multiple instances.  Although, you can connect various EBS Volumes to a single instance."

        />
        
       <Question 
        question="State the difference between An Instance  and AMI" 
        answer="AMI is a template consisting software configuration part. For example Operating systems, applications, application server if you start an instance, a duplicate of the AMI in a row as an attendant in the cloud."

        />
        
       <Question 
        question="In which situation you will select provisioned IOPS over standard RDS storage?" 
        answer="You should select provisioned IOPS storage over standard RDS storage if you want to perform batch-related workloads."

        />
        
       <Question 
        question="Can vertically scaling is allows in  Amazon Instance?" 
        answer="Yes, you can vertically estimate one Amazon instance."

        />
        
       <Question 
        question="What is the use of lifecycle hooks in Autoscaling?" 
        answer="Lifecycle hooks are used for autoscaling to put an additional wait time to a scale in or scale out event."

        />
        
       <Question 
        question="What are the storage class available in Amazon s3?" 
        answer="Storage classes available with Amazon s3 are:"
        answer1="-> Amazon S3 standard"
        answer2="-> Amazon S3 standard-infrequent Access"
        answer3="-> Amazon S3 Reduced Redundancy Storage"
        answer4="-> Amazon Glacier"
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
export default Aws;