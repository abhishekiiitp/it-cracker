import React, { useState } from 'react';
import Comment from '../Comment';
import Note from '../Note';

import Question from '../Explore/Question'
const Nlp=()=>{

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
        <div id="heading">Interview Question for Natural Language Processing
        </div>
        
    </div>
    </div>
        {/* question answer part starts */}
        <Question 
        question="What is the NLG (Natural Language Generation)?" 
        answer="Natural Language Generation is a part of AI and generates natural language texts from structured data to produce an output. It can be seen as NLP’s reverse process, where NLP is used to understand and interpret the natural language to form data, and NLU is used to generate outputs in natural language from structured data."

        />

       <Question 
        question="What is the order of steps in natural language understanding?" 
        answer="The order of steps that are to be followed in Natural Language Understanding is as follows:"
        answer1="Signal Processing"
        answer2="Syntactic Analysis"
        answer3="Semantic Analysis"
        answer4="Pragmatics"
        flag="1"

        />
        
       <Question 
        question="What is signal processing in NLP?" 
        answer="Signal processing is a method that enables software to analyze, modify, and synthesize signals. In NLP, these can be sound or text signals."

        />
        
       <Question 
        question="What is pragmatic analysis in NLP?" 
        answer="The pragmatic analysis is the process of information extraction from the given text. It is a set of linguistic and logical tools that enable us to churn out the meaning of the given structure of a text."

        />
        
       <Question 
        question="What is syntactic analysis in NLP?" 
        answer="  The syntactic analysis, also referred to as parsing and syntax analysis, is the phase in which we try to process the given text’s structure. This process tries to draw meaning from the text by comparing it to formal grammar rules or syntax."

        />
        
       <Question 
        question="What is semantic analysis in NLP?" 
        answer="The semantic analysis is the process of understanding the meaning of the text in the way humans perceive and communicate. It focuses on larger parts of data for processing, as compared to other analysis techniques."

        />
        
       <Question 
        question="What is sentiment analysis in NLP?" 
        answer="The sentiment analysis, also known as opinion mining and emotion AI, is a process of detecting the polarity of the opinion in the text or can be a part of it. It is majorly used to identify, extract, and quantify user or customer reviews’ polarity, survey responses, or social media opinions."

        />
        
       <Question 
        question="What is discourse analysis in NLP?" 
        answer="Discourse is a structured group of the sentence. Discourse analysis can be termed as an approach to analyzing the discourse, i.e., text or language. It involves text interpretations and interactions."

        />
        
       <Question 
        question="What is pragmatic ambiguity in NLP?" 
        answer="Pragmatic ambiguity can be referred to as a condition where words have multiple interpretations. This condition arises when the meaning of words is not specific; i.e., it can give different meanings."

        />
        
       <Question 
        question="What are the major applications of NLP?" 
        answer=" The major applications of NLP are:"
        answer1="Machine Translation"
        answer2="Speech Recognition"
        answer3="Sentiment Analysis"
        answer4="Text Classification"
        flag="1"

        />
        
       <Question 
        question="List any real-world application of NLP?" 
        answer=" The most used real-world application of NLP is speech recognition. Examples of speech recognition applications are Amazon Alexa, Google Assistant, Siri, HP Cortana."

        />
        
       <Question 
        question="What are the common NLP techniques?" 
        answer="The common NLP techniques for text extraction are:"
        answer1="Named Entity Recognition"
        answer2="Sentiment Analysis"
        answer3="Text Summarization"
        answer4="Aspect Mining"
        answer5="Text Modelling"
        flag="1"

        />
        
       <Question 
        question="What are the tools used for training NLP models?" 
        answer="The tools used to train NLP models are NLTK, spaCY, PyTorch-NLP, openNLP."

        />
        
       <Question 
        question="Which NLP technique uses a lexical knowledge base to obtain the correct base form of the words?" 
        answer="The NLP techniques that use lexical knowledge to obtain the correct base form are lemmatization and stemming."

        />
        
       <Question 
        question="Question NUmber 1" 
        answer="Answer number 1"

        />
        
       <Question 
        question="List the models to reduce the dimensionality of data in NLP." 
        answer="The commonly used models are TF-IDF, Word2vec/Glove, LSI, Topic Modelling, Elmo Embeddings."

        />
        
       <Question 
        question="List some open-source libraries for NLP." 
        answer="The popular libraries are NLTK (Natural Language ToolKit), SciKit Learn, Textblob, CoreNLP, spaCY, Gensim."

        />
        
       <Question 
        question="Explain the masked language model." 
        answer="Masked modeling is an example of autoencoding language modeling. Here the output is predicted from corrupted input. By this model, we can predict the word from other words present in the sentences."

        />
        
       <Question 
        question="What is the bag of words model?" 
        answer=" The Bagofwords model is used for information retrieval. Here the text is represented as a multiset, i.e., a bag of words. We don’t consider grammar and word order, but we surely maintain the multiplicity."

        />
        
       <Question 
        question="What is CBOW in NLP?" 
        answer="CBOW or continuous bag of words is a model that tries to predict the target word from the available source context words, i.e., the surrounding words. Here the context words are taken into account as multiple words for a given target word."

        />
        
       <Question 
        question="What is TF-IDF and what are its uses?" 
        answer=" TF-IDF is an abbreviation for the term frequency-inverse documentary frequency. It is used to provide a numeric value to a word to show how important it is in the document or a corpus."

        />
        
       <Question 
        question="What are POS and tagging?" 
        answer=" Parts Of Speech (POS) are the functions of the word, like a noun, verb, etc., and tagging is labeling the words present in the sentences into different parts of speech."

        />
        
       <Question 
        question="What is n-gram in NLP?" 
        answer="  N-grams are the continuous sequence (similar to the power set in number theory) of n-tokens of a given text."

        />
        
       <Question 
        question="What is skip-gram?" 
        answer=" Skip gram is an unsupervised learning technique used to find the most related words to a target word. It is a reverse process of the continuous bag of words model."

        />
        
       <Question 
        question="What is the corpus in NLP?" 
        answer="Corpus or corpora (plural), is a collection of the text of a similar type, for example, movie reviews, social media posts, etc."

        />
        
       <Question 
        question="What is normalization in NLP?" 
        answer="Normalization is the process of mapping similar terms to a canonical form, i.e., a single entity."

        />
        
       <Question 
        question="What is keyword normalization?" 
        answer=" Keyword normalization is an NLP technique where we apply normalization on a word to condense it to its most basic form."

        />
        
       <Question 
        question="What is lemmatization in NLP?" 
        answer=" Lemmatization is a type of normalization used to group similar terms to their base form-based on the parts of speech. For example, talking and talking can be mapped to a single term, walk."

        />
        
       <Question 
        question="What is stemming in NLP?" 
        answer="Stemming in NLP is also a type of normalization and is similar to lemmatization, but the difference here is that it segregates the words without the parts of speech tags. It is faster than lemmatization and can also be more accurate in some cases."

        />
        
       <Question 
        question="What is ambiguity in NLP?" 
        answer=" Ambiguity can be referred to as a condition when a word can have multiple interpretations and results in being misunderstood. Natural languages are ambiguous and can make it difficult to process NLP techniques on them, resulting in the wrong output."

        />
        
       <Question 
        question="What is tokenization in NLP?" 
        answer="Tokenization is the process of breaking down large sets of text into small parts for easy readability and understanding. Each small part is referred to as ‘text’ and provides a piece of meaningful information."

        />
        
       <Question 
        question="What are stop words in NLP?" 
        answer=" Stop words are the unwanted text that is present in the input. It is the process of removal of unwanted text from further processing of text, for example, a, to, can, etc."

        />
        
       <Question 
        question="How to find word similarity in NLP?" 
        answer=" Word similarity in NLP is done by calculating the word vectors of the words in the vector space and then calculating the similarity on a scale of 0 to 1."

        />
        
       <Question 
        question="How to find sentence similarity in NLP?" 
        answer=" Sentence similarity is done in NLP by finding the cosine similarity between the two sentences. It can be done by finding the cosine angle between the vectors of two sentences in the inner product space."

        />
        
       <Question 
        question="How to find document similarity in NLP?" 
        answer=" Document similarity is done in NLP by converting the documents into the TF-IDF vectors form and finding their cosine similarity."

        />
        
       <Question 
        question="What are transformers?" 
        answer="Transformers are deep learning architectures that can parallelize computations. They are used to learn long term dependencies."

        />
        
       <Question 
        question="What are punctuations in NLP, and how can we remove them?" 
        answer="Punctuations are the punctuations in the corpus or the input text. We can remove them by using the tokenizer function of NLTK. We can use nltk.RegexpTokenizer() to remove all punctuations."

        />
        
       <Question 
        question="What is latent semantic indexing (LSI)?" 
        answer="Latent Semantic Indexing,, also referred to as the latent semantic analysis, is an NLP technique used to remove stop words from processing the text into the text’s main content. It is used to find relationships between different words."

        />
        
       <Question 
        question="What is named entity recognition (NER)?" 
        answer="Named Entity Recognition is a part of information retrieval, a method to locate and classify the entities present in the unstructured data provided and convert them into predefined categories."

        />
        
       <Question 
        question="What is NLTK in NLP?" 
        answer=" NTLK, an abbreviation of Natural Language Toolkit, is one of NLP’s most popular libraries. It was written in Python and contained libraries for tokenization, classification, tagging, stemming, parsing, and semantic reasoning."

        />
        
       <Question 
        question=" What is spaCY?" 
        answer="spaCY is an open-source library for natural language processing on an advanced level. It is mostly used for production-level usage and uses convolutional neural network models."

        />
        
       <Question 
        question="What is openNLP?" 
        answer="openNLP is a java based library used for Natural Language Processing, and it supports most of the NLP tasks such as tokenization, language detection, etc."

        />
        
       <Question 
        question="What is the difference between NLTK and openNLP?" 
        answer="There is a small difference between NTLK and openNLP, i.e., NLTK is written in python, and openNLP is based on java. One other difference is that NTLK has an option of downloading corpora by an in-built method."

        />
        
       <Question 
        question="What are the differences between dependency parsing and shallow parsing?" 
        answer="The difference between shallow parsing and dependency parsing is that shallow parsing is the parsing of limited parts of the information. In contrast, dependency parsing is the process of finding relations between all the different words."

        />
        
       <Question 
        question="What is language modeling?" 
        answer="Language modeling is the process of creating a probability distribution of a sequence of words. It is used to provide probability to all the words present in the sequence."

        />
        
       <Question 
        question="What is text summarization in NLP?" 
        answer=" Text summarization in NLP is the process of conversion of large pieces of text to short text. It is intended to summarize the given text, keeping the main contents and overall meaning intact."

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
export default Nlp;