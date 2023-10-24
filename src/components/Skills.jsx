import styled from 'styled-components'
import SkillsCard from './SkillsCard'

const Skills = () => {
  return (
    <div>
      <Title>Skills</Title>
      <SkillsList>
        <SkillsCard
          title="Sofware"
          skills=
            'VSCode, Docker, Github, Figma, APIs '
          
          />
        <SkillsCard
          title="Front-end"
          skills=
            'NPM, HTML, CSS, Javascript, Typescript,  React,  Redux, styled-components, axios '
          
          />
        <SkillsCard
          title="I Can"
          skills=
            'Translate Figma designs into code,
            Build interactive websites,
            Consume third party APIs,
            and more.................... '
          
          />
      </SkillsList>

    </div>
  )
}

export default Skills;

const Title = styled.div`
  margin-left: 43px;
  margin-top:30px;
  margin-bottom:23px;
  color: #0B0B0B;
  font-family: Lato;
  font-size: 22px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-left:43px;
  margin-top:30px;

`

const SkillsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`