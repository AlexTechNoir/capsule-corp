import styled from '@emotion/styled'

export default function Inventions() {
  return (
    <ProjectsSection>
      <h1>💡 Our inventions 🚀</h1>

      <div>
        <div>
          <h2>Hoi-Poi Capsules</h2>
          <p>Legendary Hoi-Poi Capsules made a revolution back in the days, especially for travelling industry. People can store almost everything - from favourite meal to a real house!</p>
        </div>
        <div>
          <img src="/img/capsules.png" alt="hoi-poi capsules" />
        </div>
      </div>

      <div>
        <div>
          <img src="/img/spaceship.png" alt="spaceship" />
        </div>
        <div>
          <h2>Interstellar Spaceships</h2>
          <p>Have you ever travelled to a planet called Namek? Well, now you can!</p>
        </div>
      </div>

      <div>
        <div>
          <h2>Time Machine</h2>
          <p>Wanna travel back to 80-s? Or how about 100 years into the future? We got it all!</p>
        </div>
        <div>
          <img src="/img/time-machine.png" alt="time machine" />
        </div>
      </div>
    </ProjectsSection>
  )
}

const ProjectsSection = styled.section`
  grid-area: 2 / 2 / 3 / 4;
  display: grid;
  grid-template-rows: auto auto auto auto;
  grid-template-columns: 100%;
  row-gap: 1em;
  > :first-child {
    grid-area: 1 / 1 / 2 / 2;
    font-weight: 600;
    font-size: 4rem;
    justify-self: center;
    margin-bottom: 1.5em;
  }
  > :nth-child(2) {
    grid-area: 2 / 1 / 3 / 2;
    width: 100%;
    display: flex;
    > :first-child {
      width: 50%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      > h2 {
        font-size: 2.5rem;
      }
      > p {
        font-size: 1.5rem;
        text-align: center;
      }
    }
    > :nth-child(2) {
      width: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
  > :nth-child(3) {
    grid-area: 3 / 1 / 4 / 2;
    width: 100%;
    display: flex;
    > :first-child {
      width: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    > :nth-child(2) {
      width: 50%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      > h2 {
        font-size: 2.5rem;
      }
      > p {
        font-size: 1.5rem;
        text-align: center;
      }
    }
  }
  > :nth-child(4) {
    grid-area: 4 / 1 / 5 / 2;
    width: 100%;
    display: flex;
    > :first-child {
      width: 50%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      > h2 {
        font-size: 2.5rem;
      }
      > p {
        font-size: 1.5rem;
        text-align: center;
      }
    }
    > :nth-child(2) {
      width: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`
