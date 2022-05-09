import styled from '@emotion/styled'

export default function Team() {
  return (
    <StaffSection>
      <h1 id="team">👩‍🔧 Meet our team! 👨‍🔧</h1>
      <div>
        <h2>Dr. Brief</h2>
        <h3>President of Capsule Corp.</h3>
        <img src="/img/dr-brief.jpg" alt="doctor brief" width="200" />
        <p>&#34;My inventions are my babies!&#34;</p>
      </div>
      <div>
        <h2>Bulma Leigh</h2>
        <h3>Chief Technical Officer</h3>
        <img src="/img/bulma.jpg" alt="bulma" width="200" />
        <p>&#34;I&prime;ve been inventing since my teens!&#34;</p>
      </div>
      <div>
        <h2>Trunks</h2>
        <h3>Test Volunteer</h3>
        <img src="/img/trunks.jpg" alt="trunks" width="200" />
        <p>&#34;You won&prime;t believe the places and times I&prime;ve been in!&#34;</p>
      </div>
      <div>
        <h2>Staff</h2>
        <h3>Secretary</h3>
        <img src="/img/staff.jpg" alt="staff" width="200" />
        <p>&#34;Call us even from a different timeline!&#34;</p>
      </div>
      <div>
        <h2>Bikini</h2>
        <h3>Drink Service</h3>
        <img src="/img/bikini.jpg" alt="bikini" width="200" />
        <p>&#34;You wanna lemon in your tea, dear?&#34;</p>
      </div>
      <div>
        <h2>Vegeta</h2>
        <h3>Chief Security Officer</h3>
        <img src="/img/vegeta.jpg" alt="vegeta" width="200" />
        <p>&#34;I haven&prime;t signed up for this!&#34;</p>
      </div>
    </StaffSection>
  )
}

const StaffSection = styled.section`
  grid-area: 3 / 2 / 4 / 4;
  display: grid;
  grid-template-rows: auto auto auto;
  grid-template-columns: repeat(auto-fit, 400px);
  justify-content: center;
  align-items: center;
  align-content: center;
  > h1 {
    grid-area: 1 / 1 / 2 / 4;
    font-weight: 600;
    font-size: 4rem;
    justify-self: center;
  }
  > div {
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
    }
  }
`
