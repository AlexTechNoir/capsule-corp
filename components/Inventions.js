import styled from '@emotion/styled'

export default function Inventions() {
  return (
    <ProjectsSection>
      <h1 id="inventions" className="sectionTitle">💡 Our inventions 🚀</h1>

      <div className="allInventions firstInvention" tabIndex="0">
        <div className="inventionDescr">
          <h2>Hoi-Poi Capsules</h2>
          <p>Legendary Hoi-Poi Capsules made a revolution back in the days, especially for travelling industry. People can store almost everything in them - from favourite meal 🍜 to a real house 🏠!</p>
        </div>
        <div className="inventionImgWrapper">
          <img src="/img/capsules.png" alt="hoi-poi capsules" loading="lazy" />
        </div>
      </div>

      <div className="allInventions secondInvention" tabIndex="0">
        <div className="inventionImgWrapper">
          <img src="/img/spaceship.png" alt="spaceship" loading="lazy" />
        </div>
        <div className="inventionDescr">
          <h2>Interstellar Spaceships</h2>
          <p>Remember &#34;little green men&#34;? We found them! And not only them! Currently Capsule Corp. is organising trips to 36 planets outside of our Solar System within our Universe (that&prime;s right, our Universe is not the only one!) 🌌</p>
        </div>
      </div>

      <div className="allInventions thirdInvention" tabIndex="0">
        <div className="inventionDescr">
          <h2>Time Machine</h2>
          <p>Scientists have always been saying that time travel is impossible. Luckily scientists of Capsule Corp. are open to defy any laws of matter and time! Jorneys back and forth in timeline are avaliable to anyone for a reasonable price. No touching or interacting with anything allowed ☝️</p>
        </div>
        <div className="inventionImgWrapper">
          <img src="/img/time-machine.png" alt="time machine" loading="lazy" />
        </div>
      </div>
    </ProjectsSection>
  )
}

const ProjectsSection = styled.section`
  grid-area: 2 / 2 / 3 / 4;
  display: grid;
  grid-template-rows: auto auto auto auto;
  grid-template-columns: minmax(300px, 600px) minmax(300px, 600px);
  row-gap: 1em;
  > .sectionTitle {
    grid-area: 1 / 1 / 2 / 3;
    font-weight: 600;
    font-size: 4rem;
    justify-self: center;
    margin-bottom: 1.5em;
  }
  > .allInventions {
    width: 100%;
    display: flex;
    column-gap: 2em;
    > .inventionDescr {
      padding: 0 1em 0 1em;
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
        line-height: 1.5;
      }
    }
    > .inventionImgWrapper {
      width: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  } 
  > .firstInvention {
    grid-area: 2 / 1 / 3 / 3;    
    margin-bottom: 2em;
    > .inventionImgWrapper > img {
      width: 483px;
      height: 307px;
    }
  }
  > .secondInvention {
    grid-area: 3 / 1 / 4 / 3;
    > .inventionImgWrapper > img {
      width: 575px;
      height: 573px;
    }
  }
  > .thirdInvention {
    grid-area: 4 / 1 / 5 / 3;
    > .inventionImgWrapper > img {
      width: 420px;
      height: 560px;
    }
  }

  @media only screen and (max-width: 1024px) {
    > .sectionTitle {
      font-size: 3rem;
    }
    > .allInventions {
      > .inventionDescr {
        > h2 {
          font-size: 1.8rem !important;
        }
        > p {
          font-size: 1rem !important;
        }
      }
    }
    > .firstInvention > .inventionImgWrapper > img {
      width: 403px;
      height: 257px;
    }
    > .secondInvention > .inventionImgWrapper > img {
      width: 495px;
      height: 483px;
    }
    > .thirdInvention > .inventionImgWrapper > img {
      width: 340px;
      height: 480px;
    }
  }

  @media only screen and (max-width: 938px) {
    > .sectionTitle {
      margin-top: 2em;
    }
  }

  @media only screen and (max-width: 822px) {
    grid-template-rows: repeat(7, auto);
    grid-template-columns: 100%;
    > .sectionTitle {
      grid-area: 1 / 1 / 2 / 2;
      margin-bottom: 1em;
    }
    > .allInventions {
      flex-direction: column;
      align-items: center;
      > .inventionDescr, > .inventionImgWrapper {
        width: 100%;
      }
      > .inventionDescr > p {
        margin-top: 0;
      }
    }
    > .firstInvention {
      grid-area: 2 / 1 / 3 / 2;
      flex-direction: column-reverse;
    }
    > .secondInvention {
      grid-area: 3 / 1 / 4 / 2;
      flex-direction: column;
    }
    > .thirdInvention {
      grid-area: 4 / 1 / 5 / 2;
      flex-direction: column-reverse;
    }
  }

  @media only screen and (max-width: 768px) {
    > .sectionTitle {
      margin-top: 1em;
    }
  }

  @media only screen and (max-width: 550px) {
    > .sectionTitle {
      font-size: 2.5rem;
    }
    > .firstInvention > .inventionImgWrapper > img {
      width: 343px;
      height: 227px;
    }
    > .secondInvention > .inventionImgWrapper > img {
      width: 395px;
      height: 383px;
    }
    > .thirdInvention > .inventionImgWrapper > img {
      width: 240px;
      height: 380px;
    }
  }

  @media only screen and (max-width: 428px) {
    > .sectionTitle {
      font-size: 2rem;
    }
    > .secondInvention > .inventionImgWrapper > img {
      width: 315px;
      height: 303px;
    }
    > .thirdInvention > .inventionImgWrapper > img {
      width: 240px;
      height: 380px;
    }
  }

  @media only screen and (max-width: 375px) {
    > .sectionTitle {
      font-size: 1.75rem;
    }
    > .firstInvention > .inventionImgWrapper > img {
      width: 313px;
      height: 197px;
    }
  }
`
