import React, { useState } from 'react';
import Comment from '../Comment';
import Note from '../Note';

import Question from './Question'
const Django=()=>{

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
        <div id="heading">Interview Question for Django
        </div>
        
    </div>
    </div>
        {/* question answer part starts */}
        <Question 
        question="What is Django?" 
        answer="Django is a high-level Python Web framework that encourages rapid development and clean, pragmatic design. Built by experienced developers, it takes care of much of the hassle of Web development, so you can focus on writing your app without needing to reinvent the wheel. It’s free and open source.."

        />

       <Question 
        question= "Django is named after Django Reinhardt, a gypsy jazz guitarist from the 1930s to early 1950s who is known as one of the best guitarists of all time."

        />
        
       <Question 
        question=" Which architectural pattern does Django Follow?" 
        answer="Django follows Model-View Template (MVT) architectural pattern."

        />
        
       <Question 
        question="Explain the architecture of Django?" 
        answer="Django is based on MVT architecture. It contains the following layers:"
        answer1="->Models: It describes the database schema and data structure."
        answer2="->Views: The view layer is a user interface. It controls what a user sees, the view retrieves data from appropriate models and execute any calculation made to the data and pass it to the template."
        answer3="->Templates: It determines how the user sees it. It describes how the data received from the views should be changed or formatted for display on the page."
        answer4="->Controller: Controller is the heart of the system. It handles requests and responses, setting up database connections and loading add-ons. It specifies the Django framework and URL parsing."
        flag="1"

        />
        
       <Question 
        question="Which foundation manages Django web framework?" 
        answer="Django web framework is managed and maintained by an independent and non-profit organization named Django Software Foundation (DSF)."

        />
        
       <Question 
        question="Is Django stable?" 
        answer="Yes, Django is quite stable. Many companies like Disqus, Instagram, Pinterest, and Mozilla have been using Django for many years."

        />
        
       <Question 
        question="How do you connect your Django project to the database?" 
        answer="Django comes with a default database which is SQLite. To connect your project to this database, use the following commands:"
        answer1="->python manage.py migrate (migrate command looks at the INSTALLED_APPS settings and creates database tables accordingly)"
        answer2="->python manage.py makemigrations (tells Django you have created/ changed your models)"
        answer3="python manage.py sqlmigrate <name of the app followed by the generated id> (sqlmigrate takes the migration names and returns their SQL)"
        flag="1"

        />
        
       <Question 
        question="What are ‘Models’?" 
        answer="Models are a single and definitive source for information about your data. It consists of all the essential fields and behaviors of the data you have stored. Often, each model will map to a single specific database table."
        answer1="In Django, models serve as the abstraction layer that is used for structuring and manipulating your data. Django models are a subclass of the django.db.models.Model class and the attributes in the models represent database fields."
        flag="1"

        />
        
       <Question 
        question="What are ‘views’?" 
        answer="Django views serve the purpose of encapsulation. They encapsulate the logic liable for processing a user’s request and for returning the response back to the user. Views in Django either return an HttpResponse or raise an exception such as Http404. HttpResponse contains the objects that consist of the content that is to be rendered to the user. Views can also be used to perform tasks such as read records from the database, delegate to the templates, generate a PDF file, etc."

        />
        
       <Question 
        question="What are ‘templates’?" 
        answer="Django’s template layer renders the information to be presented to the user in a designer-friendly format. Using templates, you can generate HTML dynamically. The HTML consists of both static as well as dynamic parts of the content. You can have any number of templates depending on the requirement of your project. It is also fine to have none of them."
        answer1="Django has its own template system called the Django template language (DTL). Regardless of the backend, you can also load and render templates using Django’s standard admin."
        flag="1"

        />
        
       <Question 
        question="What are static files?" 
        answer="Static files in Django are those files that serve the purpose of additional files such as the CSS, images or JavaScript files. These files are managed by django.contrib.staticfiles. These files are created within the project app directory by creating a subdirectory named as static."

        />
        
       <Question 
        question="What are ‘signals’?" 
        answer="Django consists of a signal dispatcher that helps allow decoupled applications to get notified when actions occur elsewhere in the framework. Django provides a set of built-in signals that basically allow senders to notify a set of receivers when some action is executed."

        />
        
       <Question 
        question="Briefly explain Django Field Class." 
        answer="‘Field’ is basically an abstract class that actually represents a column in the database table. The Field class, is in turn, a subclass of  RegisterLookupMixin. In Django, these fields are used to create database tables (db_type()) which are used to map Python types to the database using get_prep_value() and vice versa using from_db_value() method. Therefore, fields are fundamental pieces in different Django APIs such as models and querysets."

        />
        
       <Question 
        question="How to do you create a Django project?" 
        answer="To create a Django project, cd into the directory where you would like to create your project and type the following command:"
        answer1="->django-admin startproject xyz"
        answer2="NOTE: Here, xyz is the name of the project. You can give any name that you desire."
        flag="1"
        />
        
       <Question 
        question="What is mixin?" 
        answer="Mixin is a type of multiple inheritance wherein you can combine behaviors and attributes of more than one parent class. Mixins provide an excellent way to reuse code from multiple classes. For example, generic class-based views consist of a mixin called TemplateResponseMixin whose purpose is to define render_to_response() method. When this is combined with a class present in the View, the result will be a TemplateView class."
        answer1="One drawback of using these mixins is that it becomes difficult to analyze what a child class is doing and which methods to override in case of its code being too scattered between multiple classes."
        flag="1"

        />
        
       <Question 
        question="What are ‘sessions’?" 
        answer="Sessions are fully supported in Django. Using the session framework, you can easily store and retrieve arbitrary data based on the per-site-visitors. This framework basically stores data on the server-side and takes care of sending and receiving cookies. These cookies consist of a session ID but not the actual data itself unless you explicitly use a cookie-based backend."

        />
        
       <Question 
        question="What do you mean by context?" 
        answer="Context in Django is a dictionary mapping template variable name given to Python objects. This is the conventional name, but you can give any other name of your choice if you wish to do it."

        />
        
       <Question 
        question="When can you use iterators in Django ORM?" 
        answer="Iterators in Python are basically containers that consist of a countable number of elements. Any object that is an iterator implements two methods which are, the __init__() and the __next__()  methods. When you are making use of iterators in Django, the best situation to do it is when you have to process results that will require a large amount of memory space. To do this, you can make use of the iterator() method which basically evaluates a QuerySet and returns the corresponding iterator over the results."

        />
        
       <Question 
        question="Explain the caching strategies of Django?" 
        answer="Caching basically means to save the output of an expensive calculation in order to avoid performing the same calculation again. Django provides a robust cache system which in turn helps you save dynamic web pages so that they don’t have to be evaluated over and over again for each request."

        />
        
       <Question 
        question=" Explain the use of Middlewares in Django." 
        answer="You may come across numerous Django Interview Questions, where you will find this question. Middleware is a framework that is light and low-level plugin system for altering Django’s input and output globally. It is basically a framework of hooks into the request/ response processing of Django. Each component in middleware has some particular task. For example, the AuthenticationMiddleware is used to associate users with requests using sessions. Django provides many other middlewares such as cache middleware to enable site-wide cache, common middleware that performs many tasks such as forbidding access to user agents, URL rewriting, etc, GZip middleware which is used to compress the content for browsers, etc."

        />
        
       <Question 
        question="What is the significance of manage.py file in Django?" 
        answer="The manage.py file is automatically generated whenever you create a project. This is basically a command-line utility that helps you to interact with your Django project in various ways. It does the same things as django-admin but along with that, it also sets the DJANGO_SETTINGS_MODULE environment variable in order to point to your project’s settings. Usually, it is better to make use of manage.py rather than the django-admin in case you are working on a single project."

        />
        
       <Question 
        question="Explain the use of ‘migrate’ command in Django?" 
        answer="In Django, migrations are used to propagate changes made to the models. The migrate command is basically used to apply or unapply migrations changes made to the models. This command basically synchronizes the current set of models and migrations with the database state. You can use this command with or without parameters. In case you do not specify any parameter, all apps will have all their migrations running."

        />
        
       <Question 
        question=" How to view and filter items from the database?" 
        answer="In order to view all the items from your database, you can make use of the ‘all()’ function in your interactive shell as follows:"
        answer1="->XYZ.objects.all()     where XYZ is some class that you have created in your models"
        answer2="To filter out some element from your database, you either use the get() method or the filter method as follows:"
        answer3="->XYZ.objects.filter(pk=1)"
        answer4="->XYZ.objects.get(id=1)"

        />
        
       <Question 
        question="How did Django come into existence?" 
        answer="Django basically grew from a very practical need. World Online developers namely Adrian Holovaty and Simon Willison started using Python to develop its websites. As they went on building intensive, richly interactive sites, they began to pull out a generic Web development framework that allowed them to build Web applications more and more quickly. In summer 2005, World Online decided to open-source the resulting software, which is, Django."

        />
        
       <Question 
        question="How to use file-based sessions?" 
        answer="In order to make use of file-based sessions, you will need to set the SESSION_ENGINE setting to “django.contrib.sessions.backends."
         answer1="file”."
         flag="1"

        />
        
       <Question 
        question=" Explain the Django URLs in brief?" 
        answer="Django allows you to design your own URLs however you like. The aim is to maintain a clean URL scheme without any framework limitations. In order to create URLs for your app, you will need to create a Python module informally called the URLconf or URL configuration which is pure Python code and is also a mapping between the URL path expressions to the Python methods. The length of this mapping can be as long or short as required and can also reference other mappings. When processing a request, the requested URL is matched with the URLs present in the urls.py file and the corresponding view is retrieved."

        />
        
       <Question 
        question="Does the Django framework scale?" 
        answer="Yes. Hardware is much cheaper when compared to the development time and this is why Django is designed to make full use of any amount of hardware that you can provide it. Django makes use of a “shared-nothing” architecture meaning you can add hardware at any level i.e database servers, caching servers or Web/ application servers."

        />
        
       <Question 
        question="Is Django a CMS?" 
        answer="Django is not a CMS (content-management-system) . It is just a Web framework, a tool that allows you to build websites."

        />
        
       <Question 
        question="What Python version is recommended to use with Django?" 
        answer="Python 3 is actually the most recommended because it is fast, has more features and is better supported. In the case of Python 2.7, Django 1.1 can be used along with it but only till the year 2020."

        />
        
       <Question 
        question="Does Django support NoSQL?" 
        answer="NoSQL basically stands for “not only SQL”. This is considered as an alternative to the traditional RDBMS or the relational Databases.  Officially, Django does not support NoSQL databases. However, there are third-party projects, such as Django non-rel, that allow NoSQL functionality in Django. Currently, you can use MongoDB and Google App Engine."

        />
        
       <Question 
        question="How can you customize the functionality of the Django admin interface?" 
        answer="There are a number of ways to do this. You can piggyback on top of an add/ change form that is automatically generated by Django, you can add JavaScript modules using the js parameter. This parameter is basically a list of URLs that point to the JavaScript modules that are to be included in your project within a <script> tag. In case you want to do more rather than just playing around with from, you can exclusively write views for the admin."

        />
        
       <Question 
        question=" Is Django better than Flask?" 
        answer="Django is a framework that allows you to build large projects. On the other hand, Flask is used to build smaller websites but flask is much easier to learn and use compared to Django. Django is a full-fledged framework and no third-party packages are required. Flask is more of a lightweight framework that allows you to install third-party tools as and how you like. So, the answer to this question basically depends on the user’s need and in case the need is very heavy, the answer is definitely, Django."

        />
        
       <Question 
        question="What should be done in case you get a message saying “Please enter the correct username and password” even after entering the right details to log in to the admin section?" 
        answer="In case you have entered the right details and still not able to login to the admin site, cross verify if the user account has is_active and is_staff attributes set to True. The admin site allows only those users for whom these values are set to True."

        />
        
       <Question 
        question="What should be done in case you are not able to log in even after entering the right details and you get no error message?" 
        answer="In this case, the login cookie is not being set rightly. This happens if the domain of the cookie sent out by Django does not match the domain in your browser. For this, you must change the SESSION_COOKIE_DOMAIN setting to match that of your browser."

        />
        
       <Question 
        question="How can you limit admin access so that the objects can only be edited by those users who have created them?" 
        answer="Django’s ModelAdmin class provides customization hooks using which, you can control the visibility and editability of objects in the admin. To do this, you can use the get_queryset() and has_change_permission()."

        />
        
       <Question 
        question="What to do when you don’t see all objects appearing on the admin site?" 
        answer="Inconsistent row counts are a result of missing Foreign Key values or if the Foreign Key field is set to null=False. If the ForeignKey points to a record that does not exist and if that foreign is present in the list_display method, the record will not be shown the admin changelist."

        />
        
       <Question 
        question="What do you mean by the csrf_token?" 
        answer="The csrf_token is used for protection against Cross-Site Request Forgeries. This kind of attack takes place when a malicious website consists of a link, some JavaScript or a form whose aim is to perform some action on your website by using the login credentials of a genuine user."

        />
        
       <Question 
        question="Does Django support multiple-column Primary Keys?" 
        answer="No. Django only supports single-column Primary Keys."

        />
        
       <Question 
        question="How can you see the raw SQL queries that Django is running?" 
        answer="First, make sure that your DEBUG setting is set to True. Then, type the following commands:"
        answer1="from django.db import connection"
        answer2="connection.queries"
        flag="1"

        />
        
       <Question 
        question=" Is it mandatory to use the model/ database layer?" 
        answer="No. The model/ database layer is actually decoupled from the rest of the framework."

        />
        
       <Question 
        question="How to make a variable available to all the templates?" 
        answer="You can make use of the RequestContext in case all your templates require the same objects, such as, in the case of menus. This method takes an HttpRequest as its first parameter and it automatically populates the context with a few variables, according to the engine’s
        context_processors configuration option."

        />
        
       <Question 
        question="Different types caching strategies in django ?" 
        answer="Different types of  caching strategies  include Filesystem caching, in-memory caching, using memcached and database caching."

        />
        
       <Question 
        question="Types of Authentication in REST API ?" 
        answer="Token based authentication and Session based authentication."

        />
        
       <Question 
        question="How to update the data from apis ?" 
        answer="We update data by sending PUT requests. Add a new path in the data model urlpatterns from which the update will be sent to. We then add an update method to the serializer that will do the update."

        />
        
       <Question 
        question="How to Create APIs in Django ?" 
        answer="Create a project directory,  create python virtual environment,   and activate it, install Django and djangorestframework using the pip install command. In the same project directory, create  project using the command django-admin.py startproject api. Start the app. Add the rest_framework and the Djano app to INSTALLED_APPS to settings. Open the api/urls.py and add urls for the Django app. We can then create models and make migrations, create serializers, and finally wiring up the views."

        />
        
       <Question 
        question="How to do migrations in django ?" 
        answer="To do migrations , create or update a model and in the app directory, run the command ./manage.py makemigrations <app name> && ./manage.py migrate <app name>"

        />
        
        
       <Question 
        question="How to create simple application in django ?" 
        answer="To create a simple application  use the command django-admin startproject followed by the application’s name."

        />
        
        
       <Question 
        question=" Is Django a CMS i.e. content management system?" 
        answer="No, Django is not a CMS. But, it is a Web framework and a programming tool that makes you able to build websites."

        />
        
        
       <Question 
        question="What does the Django templates contain?" 
        answer="A template is a simple text file. It can create any text-based format like XML, CSV, HTML, etc. A template contains variables that get replaced with values when the template is evaluated and tags (%tag%) that controls the logic of the template."

        />
        
        
       <Question 
        question="Which architectural pattern does Django Follow?" 
        answer="Django follows Model-View Controller (MVC) architectural pattern."

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
export default Django;