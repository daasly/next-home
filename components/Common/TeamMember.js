import React, { Component } from 'react'
import Link from 'next/link'

class TeamMember extends Component {
  render() {
    return (
      <section className='team-section pt-100 pb-70'>
        <div className='container'>
          <div className='section-title'>
            <span>Get to Know Us</span>
            <h2>Meet Our Team of Experts</h2>
          </div>

          <div
            className='row'
            style={{
              display: 'flex',
              justifyContent: 'center',
              flexWrap: 'wrap'
            }}
          >
            <div className='col-lg-4 col-sm-6'>
              <div className='single-team-item'>
                <div className='team-image'>
                  <img
                    src={require('../../images/team/Gennipher_Dudot_Caricature.jpg')}
                    alt='gennipher_dudot'
                  />

                  <div className='team-social'>
                    <Link href='https://www.linkedin.com/in/gennipher/'>
                      <a target='_blank'>
                        <i className='fab fa-linkedin'></i>
                      </a>
                    </Link>

                    <Link href='mailto:gennipher@daasly.com'>
                      <a target='_blank'>
                        <i className='fas fa-envelope'></i>
                      </a>
                    </Link>
                  </div>
                </div>

                <div className='team-content'>
                  <h3>Gennipher Dudot</h3>
                  <span>Junior BI Analyst</span>
                  <span>
                    Gennipher takes ownership in all that she does. She enjoys
                    transforming data into meaningful insights that help
                    stakeholders improve business performance. On weekends you
                    can find her binge-watching reality TV.
                  </span>
                </div>
              </div>
            </div>

            <div className='col-lg-4 col-sm-6'>
              <div className='single-team-item'>
                <div className='team-image'>
                  <img
                    src={require('../../images/team/Emilio Caricature Final.jpg')}
                    alt='emilio_izquierdo'
                  />

                  <div className='team-social'>
                    <Link href='https://www.linkedin.com/in/emilioraulizquierdo/'>
                      <a target='_blank'>
                        <i className='fab fa-linkedin'></i>
                      </a>
                    </Link>

                    <Link href='https://drive.google.com/file/d/1hhxOcJvz9fRhU7s9Pc9DT_wJ2SkeqMj1/view'>
                      <a target='_blank'>
                        <i className='fas fa-link'></i>
                      </a>
                    </Link>

                    <Link href='mailto:emilio@daasly.com'>
                      <a target='_blank'>
                        <i className='fas fa-envelope'></i>
                      </a>
                    </Link>
                  </div>
                </div>

                <div className='team-content'>
                  <h3>Emilio Izquierdo</h3>
                  <span>Founder</span>
                  <span>
                    Emilio has a serious obsession with all things analytics,
                    strongly believing that putting data to work can change a
                    business. In his downtime, you’ll probably find him watching
                    Formula 1 or throwing it down on the grill.
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div
            className='row'
            style={{
              display: 'flex',
              justifyContent: 'center'
            }}
          >
            <div className='col-lg-4 col-sm-6'>
              <div className='single-team-item'>
                <div className='team-image'>
                  <img
                    src={require('../../images/team/Patricia Caricature Final.jpg')}
                    alt='patricia_perdomo'
                  />

                  <div className='team-social'>
                    <Link href='https://www.linkedin.com/in/patriciaizquierdo/   '>
                      <a target='_blank'>
                        <i className='fab fa-linkedin'></i>
                      </a>
                    </Link>

                    <Link href='mailto:patricia@daasly.com'>
                      <a target='_blank'>
                        <i className='fas fa-envelope'></i>
                      </a>
                    </Link>
                  </div>
                </div>

                <div className='team-content'>
                  <h3>Patricia Perdomo</h3>
                  <span>Director of Growth</span>
                  <span>
                    Patricia is known for her ability to keep things and people
                    in order, regardless of where she is or who she’s with. Her
                    knack for operations keeps projects running smoothly and
                    with purpose. On weekends you can find Patricia chasing her
                    toddler.
                  </span>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-sm-6'>
              <div className='single-team-item'>
                <div className='team-image'>
                  <img
                    src={require('../../images/team/Robert Terrell Caricature Final.jpg')}
                    alt='robert_terrell'
                  />

                  <div className='team-social'>
                    <Link href='https://www.linkedin.com/in/rterrell25/'>
                      <a target='_blank'>
                        <i className='fab fa-linkedin'></i>
                      </a>
                    </Link>

                    <Link href='mailto:robert@daasly.com'>
                      <a target='_blank'>
                        <i className='fas fa-envelope'></i>
                      </a>
                    </Link>
                  </div>
                </div>

                <div className='team-content'>
                  <h3>Robert Terrell</h3>
                  <span>Web Developer</span>
                  <span>
                    Robert has a passion for development and loves solving
                    real-world problems. Chances are you'll find him in front of
                    his computer learning something new. In the off chance he's
                    away from his computer he's probably out diving for lobster.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default TeamMember
