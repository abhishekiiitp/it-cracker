import React from 'react';
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import AccordionSummary from "@material-ui/core/AccordionSummary";
const Question=(props)=>{
    return(
        <>
        <Accordion>
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Card.Header} variant="link" eventKey="0" className="acco">
            {/* <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
        ></AccordionSummary> */}
              <QuestionAnswerIcon/>  {props.question} 
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="0"className="acco_ans">
            <Card.Body>
            <div>
		{props.answer} 
		{
		  props.flag == "1" && <div> 
			
			{props.answer1}
      
			<br/>
			{props.answer2}
      
      <br/>
			{props.answer3}
      
      <br/>
			{props.answer4}
      
      <br/>
			{props.answer5}
      
		  </div>
      
		}
    
		</div>
    
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        
      </Accordion>
        </>
    )
}

export default Question;
