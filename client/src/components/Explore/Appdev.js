import React, { useState } from 'react';
import Comment from '../Comment';
import Note from '../Note';

import Question from '../Explore/Question';
import im1 from '../im/c1.jpg'
const Appdev=()=>{

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
        <div id="heading">Interview Question for App Development
        </div>
        
    </div>
    </div>
        {/* question answer part starts */}
        <Question 
        question="What is Android?" 
        answer="It is an open-sourced operating system that is used primarily on mobile devices, such as cell phones and tablets. It is a Linux kernel-based system that's been equipped with rich components that allows developers to create and run apps that can perform both basic and advanced functions"

        />

       <Question 
        question="What Is the Google Android SDK?" 
        answer="The Google Android SDK is a toolset that developers need in order to write apps on Android enabled devices. It contains a graphical interface that emulates an Android driven handheld environment, allowing them to test and debug their codes."

        />
        
       <Question 
        question="What is the Android Architecture?" 
        answer="Linux Kernel"
        answer1="Libraries"
        answer2="Android Framework"
        answer3="Android Applications"
        flag="1"

        />
        
       <Question 
        question="Describe the Android Framework." 
        answer="The Android Framework is an important aspect of the Android Architecture. Here you can find all the classes and methods that developers would need in order to write applications on the Android environment."

        />
        
       <Question 
        question="What is AAPT?" 
        answer="AAPT is short for Android Asset Packaging Tool. This tool provides developers with the ability to deal with zip-compatible archives, which includes creating, extracting as well as viewing its contents."

        />
        
       <Question 
        question=" What is the importance of having an emulator within the Android environment?" 
        answer="The emulator lets developers 'play' around an interface that acts as if it were an actual mobile device. They can write and test codes, and even debug. Emulators are a safe place for testing codes especially if it is in the early design phase."

        />
        
       <Question 
        question="What is the use of an activityCreator?" 
        answer="An activityCreator is the first step towards the creation of a new Android project. It is made up of a shell script that will be used to create new file system structure necessary for writing codes within the Android IDE."

        />
        
       <Question 
        question="Describe Activities." 
        answer="Activities are what you refer to as the window to a user interface. Just as you create windows in order to display output or to ask for an input in the form of dialog boxes, activities play the same role, though it may not always be in the form of a user interface."

        />
        
       <Question 
        question=" What are Intents?" 
        answer="Intents displays notification messages to the user from within the Android enabled device. It can be used to alert the user of a particular state that occurred. Users can be made to respond to intents."

        />
        
       <Question 
        question="Differentiate Activities from Services." 
        answer="Activities can be closed, or terminated anytime the user wishes. On the other hand, services are designed to run behind the scenes, and can act independently. Most services run continuously, regardless of whether there are certain or no activities being executed."

        />
        
       <Question 
        question="What items are important in every Android project?" 
        answer="These are the essential items that are present each time an Android project is created:"
        answer1="AndroidManifest.xml, build.xml, bin/, src/, res/, assets/"
        flag="1"

        />
        
       <Question 
        question="What is the importance of XML-based layouts?" 
        answer="The use of XML-based layouts provides a consistent and somewhat standard means of setting GUI definition format. In common practice, layout details are placed in XML files while other items are placed in source files."

        />
        
       <Question 
        question="What are containers?" 
        answer="Containers, as the name itself implies, holds objects and widgets together, depending on which specific items are needed and in what particular arrangement that is wanted. Containers may hold labels, fields, buttons, or even child containers, as examples."

        />
        
       <Question 
        question="What is Orientation?" 
        answer="Orientation, which can be set using setOrientation(), dictates if the LinearLayout is represented as a row or as a column. Values are set as either HORIZONTAL or VERTICAL."

        />
        
       <Question 
        question="What is the importance of Android in the mobile market?" 
        answer="Developers can write and register apps that will specifically run under the Android environment. This means that every mobile device that is Android enabled will be able to support and run these apps. With the growing popularity of Android mobile devices, developers can take advantage of this trend by creating and uploading their apps on the Android Market for distribution to anyone who wants to download it."

        />
        
       <Question 
        question="What do you think are some disadvantages of Android?" 
        answer="Given that Android is an open-source platform, and the fact that different Android operating systems have been released on different mobile devices, there's no clear cut policy to how applications can adapt with various OS versions and upgrades. One app that runs on this particular version of Android OS may or may not run on another version. Another disadvantage is that since mobile devices such as phones and tabs come in different sizes and forms, it poses a challenge for developers to create apps that can adjust correctly to the right screen size and other varying features and specs."

        />
        
       <Question 
        question="What is adb?" 
        answer="Adb is short for Android Debug Bridge. It allows developers the power to execute remote shell commands. Its basic function is to allow and control communication towards and from the emulator port."

        />
        
       <Question 
        question="What are the four essential states of an activity?" 
        answer="Active – if the activity is at the foreground"
        answer1="Paused – if the activity is at the background and still visible"
        answer2="Stopped – if the activity is not visible and therefore is hidden or obscured by another activity"
        answer3="Destroyed – when the activity process is killed or completed terminated"
        flag="1"

        />
        
       <Question 
        question="What is ANR?" 
        answer="ANR is short for Application Not Responding. This is actually a dialog that appears to the user whenever an application have been unresponsive for a long period of time."

        />
        
       <Question 
        question="Which elements can occur only once and must be present?" 
        answer="Among the different elements, the and elements must be present and can occur only once. The rest are optional, and can occur as many times as needed."

        />
        
       <Question 
        question="How are escape characters used as attribute?" 
        answer="Escape characters are preceded by double backslashes. For example, a newline character is created using '\\n'"

        />
        
       <Question 
        question="What is the importance of settings permissions in app development?" 
        answer="Permissions allow certain restrictions to be imposed primarily to protect data and code. Without these, codes could be compromised, resulting to defects in functionality."

        />
        
       <Question 
        question="What is the function of an intent filter?" 
        answer="Because every component needs to indicate which intents they can respond to, intent filters are used to filter out intents that these components are willing to receive. One or more intent filters are possible, depending on the services and activities that is going to make use of it."

        />
        
       <Question 
        question="Enumerate the three key loops when monitoring an activity" 
        answer="Entire lifetime – activity happens between onCreate and onDestroy"
        answer1="Visible lifetime – activity happens between onStart and onStop"
        answer2="Foreground lifetime – activity happens between onResume and onPause"
        flag="1"

        />
        
       <Question 
        question="When is the onStop() method invoked?" 
        answer="A call to onStop method happens when an activity is no longer visible to the user, either because another activity has taken over or if in front of that activity."

        />
        
       <Question 
        question="Is there a case wherein other qualifiers in multiple resources take precedence over locale?" 
        answer="Yes, there are actually instances wherein some qualifiers can take precedence over locale. There are two known exceptions, which are the MCC (mobile country code) and MNC (mobile network code) qualifiers."

        />
        
       <Question 
        question="What are the different states wherein a process is based?" 
        answer="There are 4 possible states:"
        answer1="=>foreground activity"
        answer2="=>visible activity"
        answer3="=>background activity"
        answer4="=>empty process"
        flag="1"

        />
        
       <Question 
        question="How can the ANR be prevented?" 
        answer="One technique that prevents the Android system from concluding a code that has been responsive for a long period of time is to create a child thread. Within the child thread, most of the actual workings of the codes can be placed, so that the main thread runs with minimal periods of unresponsive times."

        />
        
       <Question 
        question="What role does Dalvik play in Android development?" 
        answer="Dalvik serves as a virtual machine, and it is where every Android application runs. Through Dalvik, a device is able to execute multiple virtual machines efficiently through better memory management."

        />
        
       <Question 
        question="What is the AndroidManifest.xml?" 
        answer="This file is essential in every application. It is declared in the root directory and contains information about the application that the Android system must know before the codes can be executed."

        />
        
       <Question 
        question="What is the proper way of setting up an Android-powered device for app development?" 
        answer="The following are steps to be followed prior to actual application development in an Android-powered device:"
        answer1="-Declare your application as 'debuggable' in your Android Manifest."
        answer2="-Turn on 'USB Debugging' on your device."
        answer3="-Set up your system to detect your device."
        flag="1"

        />
        
       <Question 
        question="Enumerate the steps in creating a bounded service through AIDL." 
        answer="step 1->create the .aidl file, which defines the programming interface"
        answer1="step 2-> implement the interface, which involves extending the inner abstract Stub class as well as implanting its methods."
        answer2="step 3->  expose the interface, which involves implementing the service to the clients."
        flag="1"

        />
        
       <Question 
        question="What is the importance of Default Resources?" 
        answer="When default resources, which contain default strings and files, are not present, an error will occur and the app will not run. Resources are placed in specially named subdirectories under the project res/ directory."

        />
        
       <Question 
        question=" When dealing with multiple resources, which one takes precedence?" 
        answer="Assuming that all of these multiple resources are able to match the configuration of a device, the 'locale' qualifier almost always takes the highest precedence over the others."

        />
        
       <Question 
        question="When does ANR occur?" 
        answer="The ANR dialog is displayed to the user based on two possible conditions. One is when there is no response to an input event within 5 seconds, and the other is when a broadcast receiver is not done executing within 10 seconds."

        />
        
       <Question 
        question="What is AIDL?" 
        answer="AIDL, or Android Interface Definition Language, handles the interface requirements between a client and a service so both can communicate at the same level through interprocess communication or IPC. This process involves breaking down objects into primitives that Android can understand. This part is required simply because a process cannot access the memory of the other process."

        />
        
       <Question 
        question="What data types are supported by AIDL?" 
        answer="AIDL has support for the following data types:"
        answer2=" -string, charSequence, List, Map, all native Java data types like int,long, char and Boolean"
        flag="1"

        />
        
       <Question 
        question="What is a Fragment?" 
        answer="A fragment is a part or portion of an activity. It is modular in a sense that you can move around or combine with other fragments in a single activity. Fragments are also reusable."

        />
        
       <Question 
        question="What is a visible activity?" 
        answer="A visible activity is one that sits behind a foreground dialog. It is actually visible to the user, but not necessarily being in the foreground itself."

        />
        
       <Question 
        question="When is the best time to kill a foreground activity?" 
        answer="The foreground activity, being the most important among the other states, is only killed or terminated as a last resort, especially if it is already consuming too much memory. When a memory paging state has been reach by a foreground activity, then it is killed so that the user interface can retain its responsiveness to the user."

        />
        
       <Question 
        question=" Is it possible to use or add a fragment without using a user interface?" 
        answer="Yes, it is possible to do that, such as when you want to create a background behavior for a particular activity. You can do this by using add(Fragment,string) method to add a fragment from the activity."

        />
        
       <Question 
        question=" How do you remove icons and widgets from the main screen of the Android device?" 
        answer="To remove an icon or shortcut, press and hold that icon. You then drag it downwards to the lower part of the screen where a remove button appears."

        />
        
       <Question 
        question="What are the core components under the Android application architecture?" 
        answer="There are 5 key components under the Android application architecture:"
        answer1="->services"
        answer2="->intent"
        answer3="->resource externalization"
        answer4="->notifications"
        answer5="->content providers"
        flag="1"

        />
        
       <Question 
        question="What composes a typical Android application project?" 
        answer="A project under Android development, upon compilation, becomes an .apk file. This apk file format is actually made up of the AndroidManifest.xml file, application code, resource files, and other related files."

        />
        
       <Question 
        question="What is a Sticky Intent?" 
        answer="A Sticky Intent is a broadcast from sendStickyBroadcast() method such that the intent floats around even after the broadcast, allowing others to collect data from it."

        />
        
       <Question 
        question="Do all mobile phones support the latest Android operating system?" 
        answer="Some Android-powered phone allows you to upgrade to the higher Android operating system version. However, not all upgrades would allow you to get the latest version. It depends largely on the capability and specs of the phone, whether it can support the newer features available under the latest Android version.

"

        />
       <Question 
        question="What is portable wi-fi hotspot?" 
        answer="Portable Wi-Fi Hotspot allows you to share your mobile internet connection to other wireless device. For example, using your Android-powered phone as a Wi-Fi Hotspot, you can use your laptop to connect to the Internet using that access point."

        />
       <Question 
        question="What is an action?" 
        answer="In Android development, an action is what the intent sender wants to do or expected to get as a response. Most application functionality is based on the intended action."

        />
       <Question 
        question="What is the difference between a regular bitmap and a nine-patch image?" 
        answer="In general, a Nine-patch image allows resizing that can be used as background or other image size requirements for the target device. The Nine-patch refers to the way you can resize the image: 4 corners that are unscaled, 4 edges that are scaled in 1 axis, and the middle one that can be scaled into both axes."

        />
       <Question 
        question="What language is supported by Android for application development?" 
        answer="The main language supported is Java programming language. Java is the most popular language for app development, which makes it ideal even for new Android developers to quickly learn to create and deploy applications in the Android environment."

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
export default Appdev;