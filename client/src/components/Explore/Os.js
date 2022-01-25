import React, { useState } from 'react';
import Comment from '../Comment';
import Note from '../Note';

import Question from '../Explore/Question'
const Os=()=>{

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
        <div id="heading">Interview Question for Operating System
        </div>
        
    </div>
    </div>
        {/* question answer part starts */}
        <Question 
        question="Explain the main purpose of an operating system?" 
        answer="Operating systems exist for two main purposes. One is that it is designed to make sure a computer system performs well by managing its computational activities. Another is that it provides an environment for the development and execution of programs."

        />

       <Question 
        question="What is demand paging?" 
        answer="Demand paging is referred when not all of a process’s pages are in the RAM, then the OS brings the missing(and required) pages from the disk into the RAM."

        />
        
       <Question 
        question="What are the advantages of a multiprocessor system?" 
        answer="With an increased number of processors, there is a considerable increase in throughput. It can also save more money because they can share resources. Finally, overall reliability is increased as well."

        />
        
       <Question 
        question="What is kernel?" 
        answer="A kernel is the core of every operating system. It connects applications to the actual processing of data. It also manages all communications between software and hardware components to ensure usability and reliability."

        />
        
       <Question 
        question="What are real-time systems?" 
        answer="Real-time systems are used when rigid time requirements have been placed on the operation of a processor. It has well defined and fixed time constraints."

        />
        
       <Question 
        question="What is a virtual memory?" 
        answer="Virtual memory is a memory management technique for letting processes execute outside of memory. This is very useful especially is an executing program cannot fit in the physical memory."

        />
        
       <Question 
        question="Describe the objective of multiprogramming." 
        answer="The main objective of multiprogramming is to have a process running at all times. With this design, CPU utilization is said to be maximized."

        />
        
       <Question 
        question="What is time- sharing system?" 
        answer="In a Time-sharing system, the CPU executes multiple jobs by switching among them, also known as multitasking. This process happens so fast that users can interact with each program while it is running."

        />
        
       <Question 
        question="What is SMP?" 
        answer="SMP is a short form of Symmetric Multi-Processing. It is the most common type of multiple-processor systems. In this system, each processor runs an identical copy of the operating system, and these copies communicate with one another as needed."

        />
        
       <Question 
        question="How are server systems classified?" 
        answer="Server systems can be classified as either computer-server systems or file server systems. In the first case, an interface is made available for clients to send requests to perform an action. In the second case, provisions are available for clients to create, access and update files."

        />
        
       <Question 
        question=" What is asymmetric clustering?" 
        answer="In asymmetric clustering, a machine is in a state known as hot standby mode where it does nothing but to monitor the active server. That machine takes the active server’s role should the server fails."

        />
        
       <Question 
        question="What is a thread?" 
        answer="A thread is a basic unit of CPU utilization. In general, a thread is composed of a thread ID, program counter, register set, and the stack."

        />
        
       <Question 
        question="Give some benefits of multithreaded programming." 
        answer="-> there is increased responsiveness to the user"
        answer1="-> resource sharing within the process"
        answer2="-> economy"
        answer3="-> utilization of multiprocessing architecture"
        flag="1"

        />
        
       <Question 
        question="Briefly explain FCFS." 
        answer="FCFS stands for First-come, first-served. It is one type of scheduling algorithm. In this scheme, the process that requests the CPU first is allocated the CPU first. Implementation is managed by a FIFO queue."

        />
        
       <Question 
        question="What is RR scheduling algorithm?" 
        answer="RR (round-robin) scheduling algorithm is primarily aimed for time-sharing systems. A circular queue is a setup in such a way that the CPU scheduler goes around that queue, allocating CPU to each process for a time interval of up to around 10 to 100 milliseconds."

        />
        
       <Question 
        question="What are necessary conditions which can lead to a deadlock situation in a system?" 
        answer="Deadlock situations occur when four conditions occur simultaneously in a system: Mutual exclusion; Hold and Wait; No preemption; and Circular wait."

        />
        
       <Question 
        question="Describe Banker’s algorithm" 
        answer="Banker’s algorithm is one form of deadlock-avoidance in a system. It gets its name from a banking system wherein the bank never allocates available cash in such a way that it can no longer satisfy the needs of all of its customers."

        />
        
       <Question 
        question="What factors determine whether a detection-algorithm must be utilized in a deadlock avoidance system?" 
        answer="One is that it depends on how often a deadlock is likely to occur under the implementation of this algorithm. The other has to do with how many processes will be affected by deadlock when this algorithm is applied."

        />
        
       <Question 
        question="State the main difference between logical from physical address space." 
        answer="Logical address refers to the address that is generated by the CPU. On the other hand, physical address refers to the address that is seen by the memory unit."

        />
        
       <Question 
        question="How does dynamic loading aid in better memory space utilization?" 
        answer="With dynamic loading, a routine is not loaded until it is called. This method is especially useful when large amounts of code are needed in order to handle infrequently occurring cases such as error routines."

        />
        
       <Question 
        question="What are overlays?" 
        answer="Overlays are used to enable a process to be larger than the amount of memory allocated to it. The basic idea of this is that only instructions and data that are needed at any given time are kept in memory."

        />
        
       <Question 
        question=" What is the basic function of paging?" 
        answer="Paging is a memory management scheme that permits the physical address space of a process to be noncontiguous. It avoids the considerable problem of having to fit varied sized memory chunks onto the backing store."

        />
        
       <Question 
        question="What is fragmentation?" 
        answer="Fragmentation is memory wasted. It can be internal if we are dealing with systems that have fixed-sized allocation units, or external if we are dealing with systems that have variable-sized allocation units."

        />
        
       <Question 
        question="How does swapping result in better memory management?" 
        answer="During regular intervals that are set by the operating system, processes can be copied from main memory to a backing store, and then copied back later. Swapping allows more operations to be run that can fit into memory at one time."

        />
        
       <Question 
        question="Give an example of a Process State." 
        answer="– New State – means a process is being created"
         answer1="– Running – means instructions are being executed"
         answer2="– Waiting – means a process is waiting for certain conditions or events to occur"
         answer3="– Ready – means a process is waiting for an instruction from the main processor"
         answer4="– Terminate – means a process is stopped abruptly"
         flag="1"
        />
        
       <Question 
        question=" What is a socket?" 
        answer="A socket provides a connection between two applications. Each endpoint of a communication is a socket."

        />
        
       <Question 
        question="What is Direct Access Method?" 
        answer="Direct Access method is based on a disk model of a file, such that it is viewed as a numbered sequence of blocks or records. It allows arbitrary blocks to be read or written. Direct access is advantageous when accessing large amounts of information."

        />
        
       <Question 
        question="When does thrashing occur?" 
        answer="Thrashing refers to an instance of high paging activity. This happens when it is spending more time paging instead of executing."

        />
        
       <Question 
        question="What is the best page size when designing an operating system?" 
        answer="The best paging size varies from system to system, so there is no single best when it comes to page size. There are different factors to consider in order to come up with a suitable page size, such as page table, paging time, and its effect on the overall efficiency of the operating system."

        />
        
       <Question 
        question="When designing the file structure for an operating system, what attributes are considered?" 
        answer="Typically, the different attributes for a file structure are naming, identifier, supported file types, and location for the files, size, and level of protection."

        />
        
       <Question 
        question="What is root partition?" 
        answer="Root partition is where the operating system kernel is located. It also contains other potentially important system files that are mounted during boot time."

        />
        
       <Question 
        question="What are device drivers?" 
        answer="Device drivers provide a standard means of representing I/O devices that maybe manufactured by different companies. This prevents conflicts whenever such devices are incorporated in a systems unit."

        />
        
       <Question 
        question="What are the primary functions of VFS?" 
        answer="VFS, or Virtual File System, separate file system generic operations from their implementation by defining a clean VFS interface. It is based on a file-representation structure known as vnode, which contains a numerical designator needed to support network file systems."

        />
        
       <Question 
        question="What is the purpose of an I/O status information?" 
        answer="I/O status information provides information about which I/O devices are to be allocated for a particular process. It also shows which files are opened, and other I/O device state."

        />
        
       <Question 
        question="What is multitasking?" 
        answer="Multitasking is the process within an operating system that allows the user to run several applications at the same time. However, only one application is active at a time for user interaction, although some applications can run “behind the scene”."

        />
        
       <Question 
        question="Explain pros and cons of a command line interface?" 
        answer="A command line interface allows the user to type in commands that can immediately provide results. Many seasoned computer users are well accustomed to using the command line because they find it quicker and simpler."
        answer1="However, the main problem with a command line interface is that users have to be familiar with the commands, including the switches and parameters that come with it. This is a downside for people who are not fond of memorizing commands."
        flag="1"

        />
        
       <Question 
        question="What is caching?" 
        answer="Caching is the processing of utilizing a region of fast memory for a limited data and process. A cache memory is usually much efficient because of its high access speed."

        />
        
       <Question 
        question="What is spooling?" 
        answer="Spooling is normally associated with printing. When different applications want to send an output to the printer at the same time, spooling takes all of these print jobs into a disk file and queues them accordingly to the printer."

        />
        
       <Question 
        question="What is an Assembler?" 
        answer="An assembler acts as a translator for low-level language. Assembly codes written using mnemonic commands are translated by the Assembler into machine language."

        />
        
       <Question 
        question="What are interrupts?" 
        answer="Interrupts are part of a hardware mechanism that sends a notification to the CPU when it wants to gain access to a particular resource. An interrupt handler receives this interrupt signal and “tells” the processor to take action based on the interrupt request."

        />
        
       <Question 
        question="What is GUI?" 
        answer="GUI is short for Graphical User Interface. It provides users with an interface wherein actions can be performed by interacting with icons and graphical symbols. People find it easier to interact with the computer when in a GUI especially when using the mouse. Instead of having to remember and type commands, users click on buttons to perform a process."

        />
        
       <Question 
        question="What is preemptive multitasking?" 
        answer="Preemptive multitasking allows an operating system to switch between software programs. This, in turn, allows multiple programs to run without necessarily taking complete control over the processor and resulting in system crashes."

        />
        
       <Question 
        question="Why partitioning and formatting is a prerequisite to installing an operating system?" 
        answer="Partitioning and formatting create a preparatory environment on the drive so that the operating system can be copied and installed properly. This includes allocating space on the drive, designating a drive name, determining and creating the appropriate file system and structure."

        />
        
       <Question 
        question=" What is plumbing/piping?" 
        answer="It is the process of using the output of one program as an input to another. For example, instead of sending the listing of a folder or drive to the main screen, it can be piped and sent to a file, or sent to the printer to produce a hard copy."

        />
        
       <Question 
        question="How would a file name EXAMPLEFILE.TXT appear when viewed under the DOS command console operating in Windows 98?" 
        answer="The filename would appear as EXAMPL~1.TXT . The reason behind this is that filenames under this operating system are limited to 8 characters when working under DOS environment."

        />
        
       <Question 
        question="Explain the purpose of using a libaio package in Ubuntu?" 
        answer="Libaio is Linux Kernel Asynchronous I/O (A/O).  A/O allows even a single application thread to overlap I/O operations with other processing, by providing an interface for submitting one or more I/O requests in one system call without waiting for completion.  And a separate interface to reap completed I/O operations associated with a given completion group."

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
export default Os;