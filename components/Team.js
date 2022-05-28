import styled from '@emotion/styled'

export default function Team() {
  return (
    <StaffSection>
      <h1 id="team" className="sectionTitle">👩‍🔧 Meet our team! 👨‍🔧</h1>
      <div className="gridWrapper">      
        <div className="teamMember" tabIndex="0">
          <h2>Dr. Brief</h2>
          <h3>President of Capsule Corp.</h3>
          <picture>
            <source
              srcSet="/img/dr-brief.webp"
              type="image/webp"
            />
            <source
              srcSet="/img/dr-brief.jpg"
              type="image/jpeg"
            />
            <img src="/img/dr-brief.webp" alt="doctor brief" width="200" height="200" loading="lazy" />
          </picture>
          <p>&#34;My inventions are my babies!&#34;</p>
        </div>
        <div className="teamMember" tabIndex="0">
          <h2>Bulma</h2>
          <h3>Chief Technical Officer</h3>
          <picture>
            <source
              srcSet="/img/bulma.webp"
              type="image/webp"
            />
            <source
              srcSet="/img/bulma.jpg"
              type="image/jpeg"
            />
            <img src="/img/bulma.webp" alt="bulma" width="200" height="200" loading="lazy" />
          </picture>
          <p>&#34;I&prime;ve been inventing since my teens!&#34;</p>
        </div>
        <div className="teamMember" tabIndex="0">
          <h2>Trunks</h2>
          <h3>Test Volunteer</h3>
          <picture>
            <source
              srcSet="/img/trunks.webp"
              type="image/webp"
            />
            <source
              srcSet="/img/trunks.jpg"
              type="image/jpeg"
            />
            <img src="/img/trunks.webp" alt="trunks" width="200" height="200" loading="lazy" />
          </picture>
          <p>&#34;You won&prime;t believe the places and times I&prime;ve been in!&#34;</p>
        </div>
        <div className="teamMember" tabIndex="0">
          <h2>Ms. Staff</h2>
          <h3>Secretary</h3>
          <picture>
            <source
              srcSet="/img/staff.webp"
              type="image/webp"
            />
            <source
              srcSet="/img/staff.jpg"
              type="image/jpeg"
            />
            <img src="/img/staff.webp" alt="staff" width="200" height="200" loading="lazy" />
          </picture>
          <p>&#34;Call us even from a different timeline!&#34;</p>
        </div>
        <div className="teamMember" tabIndex="0">
          <h2>Bikini</h2>
          <h3>Drink Service</h3>
          <picture>
            <source
              srcSet="/img/bikini.webp"
              type="image/webp"
            />
            <source
              srcSet="/img/bikini.jpg"
              type="image/jpeg"
            />
            <img src="/img/bikini.webp" alt="bikini" width="200" height="200" loading="lazy" />
          </picture>
          <p>&#34;You wanna lemon in your tea, dear?&#34;</p>
        </div>
        <div className="teamMember" tabIndex="0">
          <h2>Vegeta</h2>
          <h3>Chief Security Officer</h3>
          <picture>
            <source
              srcSet="/img/vegeta.webp"
              type="image/webp"
            />
            <source
              srcSet="/img/vegeta.jpg"
              type="image/jpeg"
            />
            <img src="/img/vegeta.webp" alt="vegeta" width="200" height="200" loading="lazy" />
          </picture>
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
      > picture > img {
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
