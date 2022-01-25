import React, { useState } from 'react';
import Comment from '../Comment';
import Note from '../Note';

import Question from '../Explore/Question'
const Iot=()=>{

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
        <div id="heading">Interview Question for Internet of Things
        </div>
        
    </div>
    </div>
        {/* question answer part starts */}
        <Question 
        question="What is the Internet Of Things (IoT)?" 
        answer="Internet of Things (IoT) is a network of physical objects or people called 'things' that are embedded with software, electronics, network, and sensors that allow these objects to collect and exchange data. The goal of IoT is to extend to internet connectivity from standard devices like computer, mobile, tablet to relatively dumb devices like a toaster."

        />

       <Question 
        question="Explain Raspberry Pi" 
        answer="Raspberry Pi is a computer which is capable of doing all the operations like a conventional computer. It has other features such as onboard WiFi, GPIO pins, and Bluetooth in order to communicate with external things."

        />
        
       <Question 
        question="How to run Raspberry pi in headless mode?" 
        answer="Raspberry pi in headless mode can be run by using SSH. The latest operating system has an inbuilt VNC server that is installed for taking remote desktop on Raspberry Pi."

        />
        
       <Question 
        question="What are the fundamental components of IoT?" 
        answer="The four fundamental components of an IoT system are:"
        answer1="->Sensors/Devices: Sensors or devices are a key component that helps you to collect live data from the surrounding environment. All this data may have various levels of complexities. It could be a simple temperature monitoring sensor, or it may be in the form of the video feed."
        answer2="->Connectivity: All the collected data is sent to a cloud infrastructure. The sensors should be connected to the cloud using various mediums of communications. These communication mediums include mobile or satellite networks, Bluetooth, WI-FI, WAN, etc."
        answer3="->Data Processing: Once that data is collected, and it gets to the cloud, the software product performs processing on the gathered data. This process can be just checking the temperature, reading on devices like AC or heaters. However, it can sometimes also be very complex, like identifying objects, using computer vision on video."
        answer4="->User Interface: The information needs to be available to the end-user in some way, which can be achieved by triggering alarms on their phones or sending them notification through email or text message. The user sometimes might need an interface which actively checks their IoT system."
        flag="1"

        />
        
       <Question 
        question="List layers of IoT protocol stack" 
        answer="Layers of IoT protocol stack are: 1) Sensing and information, 2) Network connectivity, 3) Information processing layer, 4) Application layer."

        />
        
       <Question 
        question=" Define Arduino" 
        answer="Arduino is a free electronics platform having easy to use hardware and software. It has a microcontroller capable of reading input from sensors to control the motors programmatically."

        />
        
       <Question 
        question="Mention the basic difference between IoT and sensor businesses?" 
        answer="A sensor business does not need an active internet connection to work. Internet of Things requires a control side to work."

        />
        
       <Question 
        question="What are the advantages of IoT?" 
        answer="Key benefits of IoT technology are as follows:"
        answer1="->Technical Optimization: IoT technology helps a lot in improving techniques and making them better. For example, with IoT, a manufacturer is able to collect data from various car sensors. The manufacturer analyses them to improve its design and make them more efficient."
        answer2="->Improved Data Collection: Traditional data collection has its limitations and its design for passive use. IoT facilitates immediate action on data."
        answer3="->Reduced Waste: IoT offers real-time information leading to effective decision making & management of resources. For example, if a manufacturer finds an issue in multiple car engines, he can track the manufacturing plan of those engines and solves this issue with the manufacturing belt."
        answer4="->Improved Customer Engagement: IoT allows you to improve customer experience by detecting problems and improving the process."
        flag="1"

        />
        
       <Question 
        question="What is Bluegiga APX4 protocol?" 
        answer="The Bluegiga APX4 is a solution that supports both the WiFI and BLE platform, and it is based on a 450MHz ARM9 processor."

        />
        
       <Question 
        question="What is Pulse Width Modulation?" 
        answer="PWM or Pulse Width Modulation is a variation of how much time the signal is high in an analog fashion. The signal can be high or low, and the user can even change the proportion of the time."

        />
        
       <Question 
        question="Mention applications of PWM in IoT" 
        answer="Applications of PWM in IoT are controlling the speed of DC motor, Controlling the direction of a servo moto, Dimming LED, etc."

        />
        
       <Question 
        question="List available wireless communications boards available in Raspberry Pi?" 
        answer="Wireless communications boards available in Raspberry Pi are 1) WiFi and 2) BLE/Bluetooth."

        />
        
       <Question 
        question="What are the functions used to read analog and digital data from a sensor in Arduino?" 
        answer="Functions used to read analog and digital data from a sensor in Arduino are: digitalRead() and digitalWrite()."

        />
        
       <Question 
        question="What is Bluetooth Low Energy?" 
        answer="Bluetooth Low Energy is a wireless PAN (Personal Area Network) technology. It uses less power to transmit long-distance over a short distance."

        />
        
       <Question 
        question="Define MicroPython" 
        answer="MicroPython is a Python implementation, which includes a small subset of its standard library. It can be optimized to run on the ModeMCU microcontroller."

        />
        
       <Question 
        question="List available models in Raspberry Pi" 
        answer="Models of Raspberry Pi are:"
        answer1="->Raspberry Pi 1 Model B"
        answer2="->Raspberry Pi 1 Model B+"
        answer3="->Raspberry Pi 1 Model A"
        answer4="->Raspberry Pi Zero"
        answer5="->Raspberry Pi 3 Model B"
        flag="1"

        />
        
       <Question 
        question="What are the challenges of IoT?" 
        answer="Important challenges of IoT are:"
        answer1="->Insufficient testing and updating"
        answer2="->Concern regarding data security and privacy"
        answer3="->Software complexity"
        answer4="->Data volumes and interpretation"
        answer5="->Integration with AI and automation"
        flag="1"

        />
        
       <Question 
        question="What is a library in Arduino?" 
        answer="Arduino library is a collection of code that is already written for controlling module or sensor."

        />
        
       <Question 
        question="What is replication?" 
        answer="Replication is the act of syncing data between two or more servers."

        />
        
       <Question 
        question="What is IoT Thingworx?" 
        answer="Thingworx is a platform for the fast development and deployment of connected devices. It is a collection of integrated IoT development tools that support analysis, production, property, and alternative aspects of IoT development."

        />
        
       <Question 
        question="What is Salesforce IoT Cloud?" 
        answer="The Salesforce IoT Cloud is an online platform for storing and processing IoT information."
        answer1="It is an assortment of various application development elements, which are called lightning."
        answer2="This program gathers information from websites, devices, customers, and partners. It then triggers actions for period responses."
        flag="1"

        />
        
       <Question 
        question=" Explain IoT GE-PREDIX" 
        answer="GE or General Electric Predix is a software for the information assortment from industrial instruments. It offers a PaaS which allows users performance management and operation optimization facility. It connects instrumentation, people, and information in an exceedingly conventional technique."

        />
        
       <Question 
        question="List out Some popular companies are working on IoT" 
        answer="Popular companies working on IoT are: 1) Philips, 2) LG, 3) Google, 4) Apple and 5) Samsung."

        />
        
       <Question 
        question=" What are various types are of CAN Frame?" 
        answer="Various types of CAN frames are: 1) data frame, 2) request frame, 3) error frame, and 4) overload frame."

        />
        
       <Question 
        question="What is the main difference between floating CPU and fixed-point CPU?" 
        answer="Floating CPU can take floating value directly, whereas fixed CPU is converted to integer format. Thereby, it leads to the loss of some resolution."

        />
        
       <Question 
        question="Define GPIO" 
        answer="GPIO is a programmable pin that can be used to control input or output pins programmatically."

        />
        
       <Question 
        question="Explain Android things" 
        answer="Android things is an Android-based OS that is built for embedded devices."

        />
        
       <Question 
        question="What is the aim of airflow sensors?" 
        answer="The main aim of airflow sensors is to measure the air level in the soil. This sensor enables one to measure it dynamically, from one location, or multiple locations of the garden."

        />
        
       <Question 
        question="Why use the scheduler in RTOS?" 
        answer="Scheduler in RTOS is used for switching one task to another."

        />
        
       <Question 
        question="Mention real-time usage of Raspberry pi" 
        answer="Home a"
        answer1="Portable webserver"
        answer2="manipulating the robots"
        answer3="Internet radio"
        flag="1"

        />
        
       <Question 
        question="Define IoT Contiki" 
        answer="IoT Contiki is software that targets explicitly little devices connected with the Internet. It is used with process power bandwidth, power, and restricted memory. Contiki helps for the management of programs, resources, processes, communication, and memory."

        />
        
       <Question 
        question="What is data in IoT?" 
        answer="Data in IoT refers to the information that is collected by the installed devices at any building."

        />
        
       <Question 
        question="List majorly used IoT controllers by industries" 
        answer="Majorly used IoT controllers by industries are: 1) Siemens IoT 2020 and 2) Arduino."

        />
        
       <Question 
        question="What is a crystal oscillator?" 
        answer="A crystal oscillator is the main part of the microprocessor. It executes every single pulse one instruction in CPU."

        />
        
       <Question 
        question="What is WSN?" 
        answer="The full form of WSN is Wireless Sensor Network. It is a network of notes, design to observe and to study physical parameters of the application."

        />
        
       <Question 
        question="What is Zigbee?" 
        answer="Zigbee is the same like Bluetooth. It used in a complex system for low power operation, robustness, and high security."

        />
        
       <Question 
        question=" What is Z-Wave?" 
        answer="Z-Wave is an IoT technology that uses low power RF communication. It is designed for home automation products like lamp controllers and sensors."

        />
        
       <Question 
        question="How to install a new library in Arduino?" 
        answer="A new library in Arduino can be installed by selecting the library from the sketch option in Toolbar."

        />
        
       <Question 
        question="What is MQTT?" 
        answer="The full form of MQTT is Message Queue Telemetry Transport Protocol. It is a messaging protocol that is used for tracking devices in IoT."

        />
        
       <Question 
        question="Name some important IoT hardware" 
        answer="IoT hardware includes varieties of devices like router, bridge, sensor, etc."

        />
        
       <Question 
        question="How to reduce the size of the sketch?" 
        answer="Reducing the size of the sketch is can be reduced by removing unwanted libraries from the code and make code short and simple."

        />
        
       <Question 
        question="What are the various types of antennas designed for IoT devices?" 
        answer="Various types of antennas designed for IoT devices are:"
        answer1="->Chip Antenna"
        answer2="->PCB Antenna"
        answer3="->Wire Antenna"
        answer4="->Proprietary Antenna"
        answer5="->Whip Antenna"
        flag="1"

        />
        
       <Question 
        question="How to program Arduino?" 
        answer="Programmers can use the Arduino IDE in order to write an Arduino program. Developers can also use Node.js Johny five-module in order to control Arduino."

        />
        
       <Question 
        question="What are the features of influxDB?" 
        answer="Features of influxDB are:"
        answer1="->Provides support of visualization tools"
        answer2="->Works with distributed time-series database"
        answer3="->It does not have any external dependencies"
        flag="1"

        />
        
       <Question 
        question="How to store the high-volume file into Arduino?" 
        answer="A specification called Gridfs can be used for storing high volume file into Arduino."

        />
        
       <Question 
        question="Mention IoT software" 
        answer="IoT software are: 1) Blockchain, 2) windows IoT, 3) Predix, 4) Microsoft Azure, 5) Bluemix, and 6) Node-RED."

        />
       <Question 
        question="What is Shodan?" 
        answer="Shodan is an IOT testing tool that can be used to discover which of your devices are connected to the Internet. It allows you to keep track of all the computers which are directly accessible from the Internet."

        />
       <Question 
        question="What is a thing in IoT?" 
        answer="IOT thing is an item having an embedded and connected computing device."

        />
       <Question 
        question="What is Thermocouple?" 
        answer="A Thermocouple is a device which consists of two different conductors joined together to form an electrical junction."

        />
       <Question 
        question="What are IoT test approaches?" 
        answer="IoT test approaches are: 1) Usability, 2) IoT Security, 3) Connectivity, 4) Performance, 5) Compatibility Testing, 6) Pilot Testing, 7) Regulatory Testing, and 8) Upgrade testing."

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
export default Iot;