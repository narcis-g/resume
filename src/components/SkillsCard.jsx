import styled from 'styled-components'

const SkillsCard = (props) => {

  return (
    <Container>
          <Title>{props.title}</Title>
          <Skills>{props.skills}</Skills>
    </Container>
  )
}

export default SkillsCard;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 290px;
  flex-shrink: 0;
  margin-left:43px;
  
  border: 3px solid #211814;
  background: #FFE9A8;
  box-shadow: -10px 10px 0px 0px rgba(0, 0, 0, 0.15);
  padding: 30px 5px 30px 30px;
`;

const Title = styled.span`
  color: #000;
  font-family: Lato;
  font-size: 14px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
  margin-bottom:15px;
  
`;

const Skills = styled.span`
  color: #595959;
  font-family: 'Source Sans 3';
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%; /* 19.6px */
`;