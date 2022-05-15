import styled from '@emotion/styled'

export default function Team() {
  return (
    <StaffSection>
      <h1 id="team" className="sectionTitle">👩‍🔧 Meet our team! 👨‍🔧</h1>
      <div className="gridWrapper">      
        <div className="teamMember" tabIndex="0">
          <h2>Dr. Brief</h2>
          <h3>President of Capsule Corp.</h3>
          <img src="/img/dr-brief.jpg" alt="doctor brief" width="200" loading="lazy" />
          <p>&#34;My inventions are my babies!&#34;</p>
        </div>
        <div className="teamMember" tabIndex="0">
          <h2>Bulma Leigh</h2>
          <h3>Chief Technical Officer</h3>
          <img src="/img/bulma.jpg" alt="bulma" width="200" loading="lazy" />
          <p>&#34;I&prime;ve been inventing since my teens!&#34;</p>
        </div>
        <div className="teamMember" tabIndex="0">
          <h2>Trunks</h2>
          <h3>Test Volunteer</h3>
          <img src="/img/trunks.jpg" alt="trunks" width="200" loading="lazy" />
          <p>&#34;You won&prime;t believe the places and times I&prime;ve been in!&#34;</p>
        </div>
        <div className="teamMember" tabIndex="0">
          <h2>Ms. Staff</h2>
          <h3>Secretary</h3>
          <img src="/img/staff.jpg" alt="staff" width="200" loading="lazy" />
          <p>&#34;Call us even from a different timeline!&#34;</p>
        </div>
        <div className="teamMember" tabIndex="0">
          <h2>Bikini</h2>
          <h3>Drink Service</h3>
          <img src="/img/bikini.jpg" alt="bikini" width="200" loading="lazy" />
          <p>&#34;You wanna lemon in your tea, dear?&#34;</p>
        </div>
        <div className="teamMember" tabIndex="0">
          <h2>Vegeta</h2>
          <h3>Chief Security Officer</h3>
          <img src="/img/vegeta.jpg" alt="vegeta" width="200" loading="lazy" />
          <p>&#34;I haven&prime;t signed up for this!&#34;</p>
        </div>
      </div>
    </StaffSection>
  )
}

const StaffSection = styled.section`
  grid-area: 3 / 2 / 4 / 4;
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  > .sectionTitle {
    font-weight: 600;
    font-size: 4rem;
  }
  > .gridWrapper {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 400px));
    justify-content: center;
    width: 100%;
    max-width: 1200px;
    > .teamMember {
      display: flex;
      flex-direction: column;
      align-items: center;
      > h3 {
        margin-top: 0;
      }
      > img {
        border-radius: 50%;
      }
      > p {
        text-align: center;
        font-style: italic;
        max-width: 300px;
      }
    }
  }

  @media only screen and (max-width: 1024px) {
    > .sectionTitle {
      font-size: 3rem;
    }
  }

  @media only screen and (max-width: 550px) {
    > .sectionTitle {
      font-size: 2.5rem;
    }
  }

  @media only screen and (max-width: 428px) {
    > .sectionTitle {
      font-size: 2rem;
    }
  }

  @media only screen and (max-width: 375px) {
    > .sectionTitle {
      font-size: 1.75rem;
    }
  }
`
