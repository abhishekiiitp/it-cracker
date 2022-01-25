import React, { useState } from 'react';
import Comment from '../Comment';
import Note from '../Note';

import Question from '../Explore/Question'
const Html=()=>{

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
        <div id="heading">Interview Question for HTML
        </div>
        
    </div>
    </div>
        {/* question answer part starts */}
        <Question 
        question="What is semantic HTML?" 
        answer="Semantic HTML is a coding style. It is the use of HTML markup to reinforce the semantics or meaning of the content. For example: In semantic HTML tag is not used for bold statement as well as tag is used for italic. Instead of these we use and tags."

        />

       <Question 
        question="How to create a nested webpage in HTML?" 
        answer="The HTML iframe tag is used to display a nested webpage. In other words, it represents a webpage within a webpage. The HTML <iframe> tag defines an inline frame."

        />
        
       <Question 
        question="Why is a URL encoded in HTML?" 
        answer="An URL is encoded to convert non-ASCII characters into a format that can be used over the Internet because a URL is sent over the Internet by using the ASCII character-set only. If a URL contains characters outside the ASCII set, the URL has to be converted. The non-ASCII characters are replaced with a '%' followed by hexadecimal digits."

        />
        
       <Question 
        question="What is SVG?" 
        answer="HTML SVG is used to describe the two-dimensional vector and vector/raster graphics. SVG images and their behaviors are defined in XML text files. So as XML files, you can create and edit an SVG image with the text editor. It is mostly used for vector type diagrams like pie charts, 2-Dimensional graphs in an X, Y coordinate system."

        />
        
       <Question 
        question="What is the advantage of collapsing white space?" 
        answer="White spaces are a blank sequence of space characters, which is treated as a single space character in HTML. Because the browser collapses multiple spaces into a single space, you can indent lines of text without worrying about multiple spaces. This enables you to organize the HTML code into a much more readable format."

        />
        
       <Question 
        question=" How do you create links to sections within the same page?" 
        answer="Links can be created using the <a> tag, with referencing through the use of the number (#) symbol. For example, you can have one line as <a href=”#topmost”>BACK TO TOP</a>, which would result in the words “BACK TO TOP” appearing on the webpage and links to a bookmark named topmost. You then create a separate tag command like <a name=”topmost”> somewhere on the top of the same webpage so that the user will be linked to that spot when he clicked on “BACK TO TOP”."

        />
        
       <Question 
        question=" What is the use of alternative text in image mapping?" 
        answer="When you use image maps, it can easily become confusing and difficult to determine which hotspots correspond to which links. Using alternative text lets, you put a descriptive text on each hotspot link."

        />
        
       <Question 
        question="What are the limits of the text field size? " 
        answer="The default size for a text field is around 13 characters. However, if you include the size attribute, you can set the size value to be as low as 1. The maximum size value will be determined by the browser width. If the size attribute is set to 0, the size will be set to the default size of 13 characters."

        />
        
       <Question 
        question="How are active links different from normal links? " 
        answer="The default color for normal and active links is blue. Some browsers recognize an active link when the mouse cursor is placed over that link; others recognize active links when the link has the focus. Those that don’t have a mouse cursor over that link is considered a normal link."

        />
        
       <Question 
        question="Do you know which are two semantic tags are included in HTML5 version?" 
        answer="The <article> and <section> tags are two new tags that are included in HTML5. Articles can be composed of multiple sections that can have multiple articles. An article tag represents a full block of content which is a section of a bigger whole."

        />
        
       <Question 
        question="What are the tags used to separate a section of texts?" 
        answer="There are three tags that can be used to separate the texts: - <br> tag – Usually <br> tag is used to separate the line of text. It breaks the current line and conveys the flow to the next line - <p> tag – This contains the text in the form of a new paragraph. - <blockquote> tag – It is used to define a large quoted section. If you have a large quotation, then put the entire text within <blockquote>……….</blockquote> tag."

        />
        
       <Question 
        question=" What is the difference between DIV and SPAN in HTML?" 
        answer="The difference between span and div is that a span element is in-line and usually used for a small chunk of HTML inside a line,such as inside a paragraph. Whereas, a div or division element is block-line which is equivalent to having a line-break before and after it and used to group larger chunks of code."

        />
        
       <Question 
        question="What is difference between HTML and XHTML?" 
        answer="The differences between HTML and XHTML are:--"
        answer1="-> HTML is an application of Standard Generalized Markup Language. Whereas, XML is an application of Extensible Markup Language."
        answer2="-> The first one is a static Web Page whereas the later one is a dynamic Web Page."
        answer3="-> HTML allows programmer to perform changes in the tags and use attribute minimization whereas XHTML when user need a new markup tag then user can define it in this."
        answer4="-> HTML is about displaying information whereas XHTML is about describing the information."
        flag="1"

        />
        
       <Question 
        question="What are “web workers”?" 
        answer="Web workers at long last bring multi-threading to JavaScript. A web worker is a script that runs in the background (i.e., in another thread) without the page needing to wait for it to complete. The user can continue to interact with the page while the web worker runs in the background. Workers utilize thread-like message passing to achieve parallelism."

        />
        
       <Question 
        question="What’s the difference between ‘block’ and ‘inline’ elements?" 
        answer="Block elements are programmed so that they would take up as much space as possible. As opposed to that, inline elements are designed to take up a very minimal amount of space."

        />
        
       <Question 
        question="What are applets?" 
        answer="Applets are the small program which can be embedded with the web pages to perform some specific functionality like computation, animation."

        />
        
       <Question 
        question="What are the web sockets?" 
        answer="Web Sockets is a next-generation bidirectional communication technology for web applications which operates over a single socket and is exposed via a JavaScript interface in HTML 5 compliant browsers."

        />
        
       <Question 
        question="What is the meaning of markup in HTML? " 
        answer="The sequence of characters or other symbols which we usually use to insert at certain places in a word or text file in order to indicate how the file should look when it is displayed or printed or Basically to describe documents logical structure. The markup indicators are often known as tags. Elements and tags are two different words which we need to understand as there is a lot of confusion among public related to this fact. It must be noted that HTML documents contain tags, but do not contain the elements. It is a wide misconception that usually occurs in mind that both exist in HTML documents.elements are usually only generated after parsing step from these tags"

        />
        
       <Question 
        question="How is data stored in HTML5? " 
        answer="There are two ways to store data in HTML5 – with local storage and with session storage. Data that is stored in the local storage is safe and will not be eliminated after the developer decides to exit the browser. In session storage, once you exit the browser, the data is automatically deleted."

        />
        
       <Question 
        question="How Do I Design For Backward Compatibility Using Style Sheets? " 
        answer="Existing HTML style methods (such as <font SIZE> and <b>) may be easily combined with style sheet specification methods. Browsers that do not understand style sheets will use the older HTML formatting methods, and style sheets specifications can control the appearance of these elements in browsers that support CSS1."

        />
        
       <Question 
        question="What are style sheets in HTML CSS?" 
        answer="Style sheets in HTML CSS enable you to build consistent, transportable, and well-defined style templates. These templates can be linked to several different web pages, making it easy to maintain and change the look and feel of all the web pages within site."

        />
        
       <Question 
        question="How do you create multicolored text in a webpage?" 
        answer="To create text with different colors, use the <font color=”color”>…</font> tags for every character that you want to apply color. You can use this tag combination as many times as needed, surrounding a single character or an entire word."

        />
        
       <Question 
        question="Why are there both numerical and named character entity values?" 
        answer="The numerical values are taken from the ASCII values for the various characters, but these can be difficult to remember. Because of this, named character entity values were created to make it easier for web page designers to use."

        />
        
       <Question 
        question="Is it possible to set specific colors for table borders?" 
        answer="You can specify a border color using style sheets, but the colors for a table that does not use style sheets will be the same as the text color."

        />
        
       <Question 
        question="How do you create a link that will connect to another web page when clicked?" 
        answer="To create hyperlinks, or links that connect to another web page, use the href tag. The general format for this is: <a href=”site”>text</a>
Replace “site” with the actual page URL that is supposed to be linked to when the text is clicked."

        />
        
       <Question 
        question="What other ways can be used to align images and wrap text?" 
        answer="Tables can be used to position text and images. Another useful way to wrap text around an image is to use style sheets."

        />
        
       <Question 
        question="Can a single text link point to two different web pages?" 
        answer="No. The <a> tag can accept only a single href attribute, and it can point to only a single web page."

        />
        
       <Question 
        question="What is the difference between the directory and menu lists and the unordered list?" 
        answer="The key difference is that the directory and menu lists do not include attributes for changing the bullet style."

        />
        
       <Question 
        question="Can you change the color of bullets?" 
        answer="The bullet color is always the same as that of the first character in the list item. If you surround the <li> and the first character with a set of <font> tags with the color attribute set, the bullet color, and the first character will be a different color from the text."

        />
        
       <Question 
        question="What are the limits of the text field size?" 
        answer="The default size for a text field is around 13 characters. However, if you include the size attribute, you can set the size value to be as low as 1. The maximum size value will be determined by the browser width. If the size attribute is set to 0, the size will be set to the default size of 13 characters."

        />
        
       <Question 
        question="Do <th> tags always need to come at the start of a row or column?" 
        answer="Any <tr> tag can be changed to a <th> tag. This causes the text contained within the <th> tag to be displayed as bold in the browser. Although <th> tags are mainly used for headings, they do not need to be used exclusively for headings."

        />
        
       <Question 
        question="What is the relationship between the border and rule attributes?" 
        answer="Default cell borders, with a thickness of 1 pixel, are automatically added between cells if the border attribute is set to a nonzero value. Likewise, If the border attribute is not included, a default 1-pixel border appears if the rules attribute is added to the <table> tag."

        />
        
       <Question 
        question="How do you create text on a webpage that will allow you to send an email when clicked in HTML CSS?" 
        answer="To change text into a clickable link to send email, use the mailto command within the href tag. The format is as follows:<A HREF=”mailto:youremailaddress”>text to be clicked</A>"

        />
        
       <Question 
        question="Are <br> tags the only way to separate sections of text?" 
        answer="No. The <br> tag is only one way to separate lines of text. Other tags, like the <p> tag and <blockquote> tag, also separate sections of text."

        />
        
       <Question 
        question="Do style sheets limit the number of new style definitions that can be included within the brackets?" 
        answer="Style sheets do not limit the number of style definitions that can be included within the brackets for a given selector. Every new style definition, however, must be separated from the others by a semicolon symbol."

        />
        
       <Question 
        question="Can I specify fractional weight values such as 670 or 973 for font weight in HTML CSS?" 
        answer="Implementation largely depends on the browser, but the standard does not support fractional weight values. Acceptable values must end with two zeroes in HTML CSS."

        />
        
       <Question 
        question="What is the hierarchy that is being followed when it comes to style sheets in HTML CSS?" 
        answer="If a single selector includes three different style definitions, the definition that is closest to the actual tag takes precedence. Inline style takes priority over embedded style sheets, which takes priority over external style sheets in HTML CSS,"

        />
        
       <Question 
        question="Can several selectors with class names be grouped together?" 
        answer="You can define several selectors with the same style definition by separating them with commas. This same technique also works for selectors with class names."

        />
        
       <Question 
        question=" What happens if you open the external HTML CSS file in a browser?" 
        answer="When you try to open the external HTML CSS file in a browser, the browser cannot open the file, because the file has a different extension. The only way to use an external HTML CSS file is to reference it using <link/> tag within another HTML document."

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
export default Html;