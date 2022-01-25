import React, { useState } from 'react';
import Comment from '../Comment';
import Note from '../Note';

import Question from '../Explore/Question'
const Compilerdesign=()=>{

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
        <div id="heading">Interview Question for Compiler Design
        </div>
        
    </div>
    </div>
        {/* question answer part starts */}
        <Question 
        question="What Is A Compiler?" 
        answer="A compiler is a software that reads a software written in one language –the supply language and interprets it into an equivalent program in another language-the goal language. The compiler reviews to its person the presence of errors within the supply application."

        />

       <Question 
        question="What Are The Two Parts Of A Compilation? Explain Briefly." 
        answer="Analysis and Synthesis are the two components of compilation."
        answer1="The analysis component breaks up the supply program into constituent pieces and creates an intermediate illustration of the source software.
The synthesis component constructs the favored goal application from the intermediate illustration."
         flag="1"

        />
        
       <Question 
        question="Suggest A Suitable Approach For Computing Hash Function?" 
        answer="Using hash function we have to reap exact locations of name in symbol table."
        answer1="The hash characteristic should result in uniform distribution of names in symbol desk."
        answer2="The hash feature should be such that there could be minimum variety of collisions. "
        answer3="Collision is this sort of state of affairs wherein hash feature outcomes in equal area for storing the names."
        flag="1"

        />
        
       <Question 
        question="What Is Code Motion?" 
        answer="Code movement is an optimization method wherein amount of code in a loop is reduced. This transformation is applicable to the expression that yields the equal end result impartial of the range of instances the loop is completed. Such an expression is located before the loop."

        />
        
       <Question 
        question="What Are The Properties Of Optimizing Compiler?" 
        answer="The source code need to be such that it have to produce minimum quantity of target code."
        answer1="There have to now not be any unreachable code."
        answer2="Dead code should be absolutely removed from source language."
        answer3="The optimizing compilers need to apply following code improving modifications on source language."
        flag="1"

        />
        
       <Question 
        question="What Are The Basic Goals Of Code Movement?" 
        answer="•To reduce the dimensions of the code i.E. To acquire the distance complexity."
        answer1="•To reduce the frequency of execution of code i.E. To achieve the time complexity."
        flag="1"

        />
        
       <Question 
        question="What Is Dynamic Scoping?" 
        answer="In dynamic scoping a use of non-neighborhood variable refers to the non-neighborhood records declared in maximum lately called and nevertheless active process. Therefore each time new findings are set up for neighborhood names referred to as technique. In dynamic scoping symbol tables can be required at run time."

        />
        
       <Question 
        question="Define Symbol Table." 
        answer="Symbol table is a information shape used by the compiler to keep tune of semantics of the variables. It stores records approximately scope and binding information about names."

        />
        
       <Question 
        question="What Is Linear Analysis?" 
        answer="Linear analysis is one wherein the flow of characters making up the source program is study from left to proper and grouped into tokens that are sequences of characters having a collective meaning.Also called lexical evaluation or scanning."

        />
        
       <Question 
        question="What are various phases of compilar?" 
        answer="Lexical analysis"
        answer1="Syntax analysis"
        answer2="Semantic analysis"
        answer3="Intermediate code generator"
        answer4="Code optimizer"
        answer5="Code generator"
        flag="1"

        />
        
       <Question 
        question="What is a parser?" 
        answer="A parser is a software component that takes input data (frequently text) and builds a data structure – often some kind of parse tree, abstract syntax tree or other hierarchical structure, giving a structural representation of the input while checking for correct syntax."

        />
        
       <Question 
        question="List some applications of compilers?" 
        answer="->It helps full implementation Of High-Level Programming Languages"
        answer1="->Support optimization for Computer Architecture Parallelism"
        answer2="->Design of New Memory Hierarchies of Machines"
        answer3="->Widely used for Translating Programs"
        flag="1"

        />
        
       <Question 
        question="What is ambigous grammer?" 
        answer="An ambiguous grammar is a context-free grammar for which there exists a string that can have more than one leftmost derivation or parse tree."

        />
        
       <Question 
        question="What is LR parser?" 
        answer="The LR parser is a non-recursive, shift-reduce, bottom-up parser. It uses a wide class of context-free grammar which makes it the most efficient syntax analysis technique. LR parsers are also known as LR(k) parsers, where L stands for left-to-right scanning of the input stream; R stands for the construction of right-most derivation in reverse, and k denotes the number of lookahead symbols to make decisions."

        />
        
       <Question 
        question=" List different types of compilars?" 
        answer="A Compiler is used as an interface between human understandable language and machine-understandable language by transforming the former to the later. Some of the compilers are listed below"
        answer1="->Native code compiler: The compiler used to compile a source code for the same type of platform only. The output generated by this type of compiler can only be run on the same type of computer system and Os that the compiler itself runs on."
        answer2="->Cross compiler: The compiler used to compile a source code for different kinds of platforms. Used in making software for embedded systems that can be used on multiple platforms."
        answer3="->Source to source compiler: the compiler that takes high-level language code as input and outputs source code of another high- level language only. Unlike other compilers that convert high-level language into low-level machine language, it can take up a code written in Pascal and can transform it into a C-conversion of one high-level language into another high-level language having the same type of abstraction. Thus, it is also known as a transpiler."
        flag="1"

        />
        
       <Question 
        question="What is bootstrapping in compilar designing?" 
        answer="Bootstrapping is a process in which simple language is used to translate a more complicated program which in turn may handle the more complicated programs. This complicated program can further handle even more complicated programs and so on."

        />
        
       <Question 
        question="What is Yacc?" 
        answer="It is a computer program for the Unix operating system developed by Stephen C. Johnson. It is a Look Ahead Left-to-Right parser generator, generating a LALR parser based on a formal grammar, written in a notation similar to Backus–Naur Form. Yacc is supplied as a standard utility on BSD and AT&T Unix."

        />
        
       <Question 
        question="What is dag in compiler design?" 
        answer="Directed Acyclic Graph (DAG) is a tool that depicts the structure of basic blocks, helps to see the flow of values flowing among the basic blocks, and offers optimization too. DAG provides easy transformation on basic blocks. DAG can be understood here: Leaf nodes represent identifiers, names or constants."

        />
        
       <Question 
        question="What is Semantic errors?" 
        answer="A semantic error is an error that occurs when a statement is syntactically valid but does not do what the programmer intended."

        />
        
       <Question 
        question="List some Semantic Errors?" 
        answer="->Incompatible types of operands"
        answer1="->Undeclared variable"
        answer2="->Not matching of an actual argument with formal argument"
        flag="1"

        />
        
       <Question 
        question="What Is Code Motion?" 
        answer="Code motion is a technique used to decrease the amount of code in the loop. This transformation takes a statement or expression which can be moved outside the loop body without affecting the semantics of the program."

        />
        
       <Question 
        question="Mention Some Of The Cousins Of A Compiler." 
        answer="->Preprocessors"
        answer1="->Assemblers"
        answer2="->Loaders and Link-Editors"

        />
        
       <Question 
        question="List The Phases That Constitute The Front End Of A Compiler." 
        answer="The front end consists of those phases or parts of phases that depend primarily on the source language and are largely independent of the target machine. These include"
        answer1="->Lexical and Syntactic analysis"
        answer2="->The creation of symbol table"
        answer3="->Semantic analysis"
        answer4="->Generation of intermediate code"
        answer5="A certain amount of code optimization can be done by the front end as well. Also includes error handling that goes along with each of these phases."

        />
        
       <Question 
        question="Mention The Back-end Phases Of A Compiler." 
        answer="The back end of compiler includes those portions that depend on the target machine and generally those portions do not depend on the source language, just the intermediate language. These include"
        answer1="->Code optimization"
        answer2="->Code generation, along with error handling and symbol- table operations."
        flag="1"

        />
        
       <Question 
        question=" Define Compiler-compiler." 
        answer="Systems to help with the compiler-writing process are often been referred to as compiler-compilers, compiler-generators or translator-writing systems."
        answer1="Largely they are oriented around a particular model of languages , and they are suitable for generating compilers of languages similar model."
        flag="1"

        />
        
       <Question 
        question="List The Various Compiler Construction Tools." 
        answer="Parser generators"
        answer1="Scanner generators"
        answer2="Syntax-directed translation engines"
        answer3="Automatic code generators"
        answer4="Data-flow engines"
        flag="1"
        />
        
       <Question 
        question="What is tokens?" 
        answer="Sequence of characters that have a collective meaning"

        />
        
       <Question 
        question="What is Patterns?" 
        answer="There is a set of strings in the input for which the same token is produced as output. This set of strings is described by a rule called a pattern associated with the token"

        />
        
       <Question 
        question="What is Lexeme?" 
        answer="A sequence of characters in the source program that is matched by the pattern for a token"

        />
        
       <Question 
        question=" List The Operations On Languages." 
        answer="Union – L U M ={s | s is in L or s is in M}"
        answer1="Concatenation – LM ={st | s is in L and t is in M}"
        answer2="Kleene Closure – L* (zero or more concatenations of L)"
        answer3="Positive Closure – L+ ( one or more concatenations of L)"
        flag="1"

        />
        
       <Question 
        question="Write A Regular Expression For An Identifier." 
        answer="An identifier is defined as a letter followed by zero or more letters or digits.
The regular expression for an identifier is given as"
         answer1="letter (letter | digit)*"
         flag="1"

        />
        
       <Question 
        question="Mention The Various Notational Short Hands For Representing Regular Expressions." 
        answer="One or more instances (+)"
        answer1="Zero or one instance (?)"
        answer2="Character classes ([abc] where a,b,c are alphabet symbols denotes the regular expressions a | b | c.)"
        answer3="Non regular sets"
        flag="1"

        />
        
       <Question 
        question=" What Is The Function Of A Hierarchical Analysis?" 
        answer="Hierarchical analysis is one in which the tokens are grouped hierarchically into nested collections with collective meaning.Also termed as Parsing."

        />
        
       <Question 
        question="What Does A Semantic Analysis Do?" 
        answer="Semantic analysis is one in which certain checks are performed to ensure that components of a program fit together meaningfully.Mainly performs type checking."

        />
        
       <Question 
        question="List The Various Error Recovery Strategies For A Lexical Analysis." 
        answer="Panic mode recovery"
        answer1="Deleting an extraneous character"
        answer2="Inserting a missing character"
        answer3="Replacing an incorrect character by a correct character"
        answer4="Transposing two adjacent characters"
        flag="1"

        />
        
       <Question 
        question="Mention The Basic Issues In Parsing." 
        answer="Specification of syntax"
        answer1="Representation of input after parsing."
        flag="1"

        />
        
       <Question 
        question="Why Lexical And Syntax Analysers Are Separated Out?" 
        answer="Simpler design."
        answer1="Compiler efficiency is improved."
        answer2="Compiler portability is enhanced."
        flag="1"

        />
        
       <Question 
        question=" Briefly Explain The Concept Of Derivation." 
        answer="Derivation from S means generation of string w from S. For constructing derivation two things are important."
        answe1="i) Choice of non terminal from several others."
        answer2="ii) Choice of rule from production rules for corresponding non terminal."
        answer3="Instead of choosing the arbitrary non terminal one can choose"
        answer4="i) either leftmost derivation – leftmost non terminal in a sentinel form."
        answer5="ii) or rightmost derivation – rightmost non terminal in a sentinel form."
        flag="1"

        />
        
       <Question 
        question="Define Ambiguous Grammar." 
        answer="
A grammar G is said to be ambiguous if it generates more than one parse tree for some sentence of language L(G).
i.e. both leftmost and rightmost derivations are same for the given sentence."

        />
        
       <Question 
        question="What Is A Operator Precedence Parser?" 
        answer="
A grammar is said to be operator precedence if it possess the following properties"
        answer1="1. No production on the right side is ε."
        answer2="2. There should not be any production rule possessing two adjacent non terminals at the right hand side"
        flag="1"

        />
        
       <Question 
        question=". List The Properties Of Lr Parser ?" 
        answer="1. LR parsers can be constructed to recognize most of the programming languages for which the context free grammar can be written."
        answer1="2. The class of grammar that can be parsed by LR parser is a superset of class of grammars that can be parsed using predictive parsers."
        answer2="3. LR parsers work using non backtracking shift reduce technique yet it is efficient one."
        flag="1"

        />
        
       <Question 
        question="Mention The Types Of Lr Parser ?" 
        answer="SLR parser- simple LR parser"
        answer1="LALR parser- lookahead LR parser"
        answer2="Canonical LR parser"

        />
        
       <Question 
        question=" What Is Meant By Viable Prefixes?" 
        answer="
The set of prefixes of right sentential forms that can appear on the stack of a shift-reduce parser are called viable prefixes. An equivalent definition of a viable prefix is that it is a prefix of a right sentential form that does not continue past the right end of the rightmost handle of that sentential form"

        />
        
       <Question 
        question="Define Handle ?" 
        answer="
A handle of a string is a substring that matches the right side of a production, and whose reduction to the nonterminal on the left side of the production represents one step along the reverse of a rightmost derivation."

        />
        
       <Question 
        question="What Are Kernel & Non-kernel Items?" 
        answer="Kernel items, whish include the initial item, S’→ .S, and all items whose dots are not at the left end."
        answer1="Non-kernel items, which have their dots at the left end."
        flag="1"

        />
        
       <Question 
        question=" What Is Phrase Level Error Recovery?" 
        answer="Phrase level error recovery is implemented by filling in the blank entries in the predictive parsing table with pointers to error routines. These routines may change, insert, or delete symbols on the input and issue appropriate error messages. They may also pop from the stack."

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
export default Compilerdesign;