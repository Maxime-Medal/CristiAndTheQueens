import { NavLink } from "react-router-dom";
import styled from "styled-components";


const Resume = ({array}) => {
  return (
    <ResumeContainer className="resume" >
     <ResumeCard >
     
<div className="cards">

      <ul>
       {array.map((e) => <li>{e}</li>)}
      </ul>
   
</div>

     </ResumeCard>
     <LinkButton>
     <NavLink to="/"  >
  Accueil
</NavLink>
</LinkButton>
    </ResumeContainer>
  );
}

const ResumeContainer = styled.div`
display: flex;
background-color: whitesmoke;
height: 100vh;
font-size: 2rem;
text-align: center;
flex-direction: column;
background: grey;
`;

const ResumeCard = styled.div`
display: flex;
color: black;
justify-content: center;
align-items: center;
text-align: center;
height: 100vh;

.cards{
display: flex;
justify-content: center;
width: 100%;
height: 100%;
background: grey;
align-items: center;
}



`;

const LinkButton = styled.div`
display: flex;
align-self: center;
margin-bottom: 15%;
width: 30%;
background: grey;
`


 


export default Resume;