import React, { useState } from 'react';
import Comment from '../Comment';
import Note from '../Note';

import Question from '../Explore/Question'
const Mongodb=()=>{

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
        <div id="heading">Interview Question for MongoDB
        </div>
        
    </div>
    </div>
        {/* question answer part starts */}
        <Question 
        question="What do you understand by NoSQL databases?" 
        answer="At the present time, the internet is loaded with big data, big users, big complexity etc. and also becoming more complex day by day. NoSQL is answer of all these problems, It is not a traditional database management system, not even a relational database management system (RDBMS). NoSQL stands for 'Not Only SQL'. NoSQL is a type of database that can handle and sort all type of unstructured, messy and complicated data. It is just a new way to think about the database."

        />

       <Question 
        question="Is MongoDB a NoSQL database?" 
        answer="Yes. MongoDB is a NoSQL database."

        />
        
       <Question 
        question="Which are the different languages supported by MongoDB?" 
        answer="MonggoDB provides official driver support for C, C++, C#, Java, Node.js, Perl, PHP, Python, Ruby, Scala, Go and Erlang."
        answer1="You can use MongoDB with any of the above languages. There are some other community supported drivers too but the above mentioned ones are officially provided by MongoDB."
        flag="1"

        />
        
       <Question 
        question="What are the different types of NoSQL databases?" 
        answer="NoSQL database can be classified as 4 basic types:"
        answer1="-> Key value store NoSQL database"
        answer2="-> Document store NoSQL database"
        answer3="-> Column store NoSQL database"
        answer4="-> Graph base NoSQL databse"
        flag="1"

        />
        
       <Question 
        question="Give some example of NoSQL databases. " 
        answer="There are many NoSQL databases. MongoDB, Cassandra, CouchBD, Hypertable, Redis, Riak, Neo4j, HBASE, Couchbase, MemcacheDB, Voldemort, RevenDB etc. are the examples of NoSQL databases."

        />
        
       <Question 
        question="Is MongoDB better than other SQL databases? If yes then how?" 
        answer="MongoDB is better than other SQL databases because it allows a highly flexible and scalable document structure."
        answer1="For example:"
        answer2="=> One data document in MongoDB can have five columns and the other one in the same collection can have ten columns."
        answer3="=> MongoDB database are faster than SQL databases due to efficient indexing and storage techniques."
        flag="1"

        />
        
       <Question 
        question="What type of DBMS is MongoDB?" 
        answer="MongoDB is a document oriented DBMS"

        />
        
       <Question 
        question="What is the difference between MongoDB and MySQL?" 
        answer="Although MongoDB and MySQL both are free and open source databases, there is a lot of difference between them in the term of data representation, relationship, transaction, querying data, schema design and definition, performance speed, normalization and many more. To compare MySQL with MongoDB is like a comparison between Relational and Non-relational databases."

        />
        
       <Question 
        question="Does MongoDB support primary-key, foreign-key relationship?" 
        answer="No. By Default, MongoDB doesn't support primary key-foreign key relationship."

        />
        
       <Question 
        question="Can you achieve primary key - foreign key relationships in MongoDB?" 
        answer="We can achieve primary key-foreign key relationship by embedding one document inside another. For example: An address document can be embedded inside customer document."

        />
        
       <Question 
        question="Does MongoDB need a lot of RAM?" 
        answer="No. There is no need a lot of RAM to run MongoDB. It can be run even on a small amount of RAM because it dynamically allocates and de-allocates RAM according to the requirement of the processes."

        />
        
       <Question 
        question="Explain the structure of ObjectID in MongoDB." 
        answer="ObjectID is a 12-byte BSON type. These are:"
        answer1="4 bytes value representing seconds"
        answer2="3 byte machine identifier"
        answer3="2 byte process id"
        answer4="3 byte counter"
        flag="1"

        />
        
       <Question 
        question="Is it true that MongoDB uses BSON to represent document structure?" 
        answer="Yes."

        />
        
       <Question 
        question="What are Indexes in MongoDB?" 
        answer="In MondoDB, Indexes are used to execute query efficiently. Without indexes, MongoDB must perform a collection scan, i.e. scan every document in a collection, to select those documents that match the query statement. If an appropriate index exists for a query, MongoDB can use the index to limit the number of documents it must inspect."

        />
        
       <Question 
        question=" By default, which index is created by MongoDB for every collection?" 
        answer="By default, the_id collection is created for every collection by MongoDB."

        />
        
       <Question 
        question="What is a Namespace in MongoDB?" 
        answer="Namespace is a concatenation of the database name and the collection name. Collection, in which MongoDB stores BSON objects."

        />
        
       <Question 
        question="Can journaling features be used to perform safe hot backups?" 
        answer="Yes."

        />
        
       <Question 
        question="Why does Profiler use in MongoDB?" 
        answer="MongoDB uses a database profiler to perform characteristics of each operation against the database. You can use a profiler to find queries and write operations"

        />
        
       <Question 
        question="If you remove an object attribute, is it deleted from the database?" 
        answer="Yes, it be. Remove the attribute and then re-save() the object."

        />
        
       <Question 
        question="In which language MongoDB is written?" 
        answer="MongoDB is written and implemented in C++."

        />
        
       <Question 
        question="Does MongoDB need a lot space of Random Access Memory (RAM)?" 
        answer="No. MongoDB can be run on small free space of RAM."

        />
        
       <Question 
        question="What language you can use with MongoDB?" 
        answer="MongoDB client drivers supports all the popular programming languages so there is no issue of language, you can use any language that you want."

        />
        
       <Question 
        question=" Does MongoDB database have tables for storing records?" 
        answer="No. Instead of tables, MongoDB uses 'Collections' to store data."

        />
        
       <Question 
        question="Do the MongoDB databases have schema?" 
        answer="Yes. MongoDB databases have dynamic schema. There is no need to define the structure to create collections."

        />
        
       <Question 
        question=" What is the method to configure the cache size in MongoDB?" 
        answer="MongoDB's cache is not configurable. Actually MongoDb uses all the free spaces on the system automatically by way of memory mapped files."

        />
        
       <Question 
        question="How to do Transaction/locking in MongoDB?" 
        answer="MongoDB doesn't use traditional locking or complex transaction with Rollback. MongoDB is designed to be light weighted, fast and predictable to its performance. It keeps transaction support simple to enhance performance."

        />
        
       <Question 
        question="Why 32 bit version of MongoDB are not preferred ?" 
        answer="Because MongoDB uses memory mapped files so when you run a 32-bit build of MongoDB, the total storage size of server is 2 GB. But when you run a 64-bit build of MongoDB, this provides virtually unlimited storage size. So 64-bit is preferred over 32-bit."

        />
        
       <Question 
        question="Is it possible to remove old files in the moveChunk directory?" 
        answer="Yes, These files can be deleted once the operations are done because these files are made as backups during normal shard balancing operation. This is a manual cleanup process and necessary to free up space."

        />
        
       <Question 
        question="What will have to do if a shard is down or slow and you do a query?" 
        answer="If a shard is down and you even do query then your query will be returned with an error unless you set a partial query option. But if a shard is slow them Mongos will wait for them till response."

        />
        
       <Question 
        question="Explain the covered query in MongoDB." 
        answer="A query is called covered query if satisfies the following two conditions:"
        answer1="->The fields used in the query are part of an index used in the query."
        answer2="->The fields returned in the results are in the same index."
        flag="1"

        />
        
       <Question 
        question="What is the importance of covered query?" 
        answer="Covered query makes the execution of the query faster because indexes are stored in RAM or sequentially located on disk. It makes the execution of the query faster."
        answer1="Covered query makes the fields are covered in the index itself, MongoDB can match the query condition as well as return the result fields using the same index without looking inside the documents."
        flag="1"

        />
        
       <Question 
        question="What is sharding in MongoDB?" 
        answer="In MongoDB, Sharding is a procedure of storing data records across multiple machines. It is a MongoDB approach to meet the demands of data growth. It creates horizontal partition of data in a database or search engine. Each partition is referred as shard or database shard."

        />
        
       <Question 
        question="What is replica set in MongoDB?" 
        answer="A replica can be specified as a group of mongo instances that host the same data set. In a replica set, one node is primary, and another is secondary. All data is replicated from primary to secondary nodes."

        />
        
       <Question 
        question="What is primary and secondary replica set in MongoDB?" 
        answer="In MongoDB, primary nodes are the node that can accept write. These are also known as master nodes. The replication in MongoDB is single master so, only one node can accept write operations at a time."
        answer1="Secondary nodes are known as slave nodes. These are read only nodes that replicate from the primary."
        flag="1"

        />
        
       <Question 
        question="By default, which replica sets are used to write data?" 
        answer="By default, MongoDB writes data only to the primary replica set."

        />
        
       <Question 
        question="What is CRUD in MongoDB?" 
        answer="MongoDB supports following CRUD operations:"
        answer1="Create"
        answer2="Read"
        answer3="Update"
        answer4="Delete"
        flag="1"

        />
        
       <Question 
        question="In which format MongoDB represents document structure?" 
        answer="MongoDB uses BSON to represent document structures."

        />
        
       <Question 
        question="What will happen when you remove a document from database in MongoDB? Does MongoDB remove it from disk?" 
        answer="Yes. If you remove a document from database, MongoDB will remove it from disk too."

        />
        
       <Question 
        question="Why are MongoDB data files large in size?" 
        answer="MongoDB doesn't follow file system fragmentation and pre allocates data files to reserve space while setting up the server. That's why MongoDB data files are large in size."

        />
        
       <Question 
        question="What is a storage engine in MongoDB?" 
        answer="A storage engine is the part of a database that is used to manage how data is stored on disk."
        answer1="For example: one storage engine might offer better performance for read-heavy workloads, and another might support a higher-throughput for write operations."
        flag="1"

        />
        
       <Question 
        question="Which are the storage engines used by MongoDB?" 
        answer="MMAPv1 and WiredTiger are two storage engine used by MongoDB."

        />
        
       <Question 
        question="What is the usage of profiler in MongoDB?" 
        answer="A database profiler is used to collect data about MongoDB write operations, cursors, database commands on a running mongod instance. You can enable profiling on a per-database or per-instance basis"
        answer1="The database profiler writes all the data it collects to the system. profile collection, which is a capped collection."
        flag="1"

        />
        
       <Question 
        question="Is it possible to configure the cache size for MMAPv1 in MongoDB?" 
        answer="No. it is not possible to configure the cache size for MMAPv1 because MMAPv1 does not allow configuring the cache size."

        />
        
       <Question 
        question="How to configure the cache size for WiredTiger in MongoDB?" 
        answer="For the WiredTiger storage engine, you can specify the maximum size of the cache that WiredTiger will use for all data. This can be done using storage.wiredTiger.engineConfig.cacheSizeGB option."

        />
        
       <Question 
        question="How does MongoDB provide concurrency?" 
        answer="MongoDB uses reader-writer locks for concurrency. Reader-writer locks allow concurrent readers shared access to a resource, such as a database or collection, but give exclusive access to a single write operation."

        />
        
       <Question 
        question="What is the difference between MongoDB and Redis database?" 
        answer="Difference between MongoDB and Redis:"
        answer1="-> Redis is faster than MongoDB."
        answer2="-> Redis has a key-value storage whereas MongoDB has a document type storage."
        answer3="-> Redis is hard to code but MongoDB is easy."
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
export default Mongodb;