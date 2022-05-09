import './AllCourses.css'

function AllCourses() {
  return (
    <div class="page-schedule-term-">
      <article>
        <h2 id="article-head" aria-hidden="true">
          Class Schedule For Spring 2022
        </h2>
        <form>
          {/* minimal application: additional markup and a11y needed */}
          <fieldset>
            <label aria-hidden="true">Filter Courses</label>
            <input type="text" placeholder="Filter Courses" />
          </fieldset>
          <fieldset>
            <select>
              <option value="Spring">Spring</option>
              <option value="Summer">Summer</option>
              <option value="Fall">Fall</option>
              <option value="Winter">Winter</option>
            </select>
          </fieldset>
        </form>
        <section>
          <div>
            <h3>A</h3>
            <ul>
              <li className="box">
                <a href="./Acct.html">Accountancy</a>
              </li>
              <li className="box">
                <a href="https://web1.irt.csus.edu/class_schedule/Spring2022/AIS.html">
                  Accountancy Information System
                </a>
              </li>
              <li className="box">
                <a href="https://web1.irt.csus.edu/class_schedule/Spring2022/ANTH.html">
                  Anthropology
                </a>{" "}
              </li>
              <li className="box">
                <a href="https://web1.irt.csus.edu/class_schedule/Spring2022/ARBC.html">
                  Arabic
                </a>
              </li>
              <li className="box">
                <a href="https://web1.irt.csus.edu/class_schedule/Spring2022/ART.html">
                  Art
                </a>{" "}
              </li>
              <li className="box">
                <a href="https://web1.irt.csus.edu/class_schedule/Spring2022/ALS.html">
                  Arts &amp; Letters
                </a>
              </li>
              <li className="box">
                <a href="https://web1.irt.csus.edu/class_schedule/Spring2022/ASIA.html">
                  Asian Studies
                </a>
              </li>
              <li className="box">
                <a href="https://web1.irt.csus.edu/class_schedule/Spring2022/ASTR.html">
                  Astronomy
                </a>{" "}
              </li>
              <li className="box">
                <a href="https://web1.irt.csus.edu/class_schedule/Spring2022/ATIC.html">
                  Athletics
                </a>{" "}
              </li>
            </ul>
          </div>
          <div>
            <h3>B</h3>
            <ul>
              <li className="box">
                <a href="https://web1.irt.csus.edu/class_schedule/Spring2022/BIO.html">
                  Biological Sciences
                </a>
              </li>
              <li className="box">
                <a href="https://web1.irt.csus.edu/class_schedule/Spring2022/MGMT.html">
                  Business Admin - Mgt
                </a>
              </li>
              <li className="box">
                <a href="https://web1.irt.csus.edu/class_schedule/Spring2022/BUS.html">
                  Business Administration
                </a>
              </li>
              <li className="box">
                <a href="https://web1.irt.csus.edu/class_schedule/Spring2022/BHON.html">
                  Business Honors
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3>C</h3>
            <ul>
              <li className="box">
                <a href="https://web1.irt.csus.edu/class_schedule/Spring2022/CHEM.html">
                  Chemistry
                </a>{" "}
              </li>
              <li className="box">
                <a href="https://web1.irt.csus.edu/class_schedule/Spring2022/CHAD.html">
                  Child and Adolescent Developme
                </a>
              </li>
              <li className="box">
                <a href="https://web1.irt.csus.edu/class_schedule/Spring2022/CHIN.html">
                  Chinese
                </a>{" "}
              </li>
              <li className="box">
                <a href="https://web1.irt.csus.edu/class_schedule/Spring2022/CE.html">
                  Civil Engineering
                </a>
              </li>
              <li className="box">
                <a href="https://web1.irt.csus.edu/class_schedule/Spring2022/CSAD.html">
                  Comm Sciences and Disorders
                </a>
              </li>
              <li className="box">
                <a href="https://web1.irt.csus.edu/class_schedule/Spring2022/COMS.html">
                  Communication Studies
                </a>
              </li>
              <li className="box">
                <a href="https://web1.irt.csus.edu/class_schedule/Spring2022/CPE.html">
                  Computer Engineering
                </a>
              </li>
              <li className="box">
                <a href="https://web1.irt.csus.edu/class_schedule/Spring2022/CSC.html">
                  Computer Science
                </a>
              </li>
              <li className="box">
                <a href="https://web1.irt.csus.edu/class_schedule/Spring2022/CM.html">
                  Construction Management
                </a>
              </li>
              <li className="box">
                <a href="https://web1.irt.csus.edu/class_schedule/Spring2022/CRJ.html">
                  Criminal Justice
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3>D</h3>
            <ul>
              <li className="box">
                <a href="https://web1.irt.csus.edu/class_schedule/Spring2022/DNCE.html">
                  Dance
                </a>
              </li>
              <li className="box">
                <a href="https://web1.irt.csus.edu/class_schedule/Spring2022/DEAF.html">
                  Deaf Studies
                </a>
              </li>
              <li className="box">
                <a href="https://web1.irt.csus.edu/class_schedule/Spring2022/DS.html">
                  Decision Sciences
                </a>
              </li>
              <li className="box">
                <a href="https://web1.irt.csus.edu/class_schedule/Spring2022/DSGN.html">
                  Design Studies
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3>E</h3>
            <ul>
              <li className="box">
                <a href="https://web1.irt.csus.edu/class_schedule/Spring2022/ECON.html">
                  Economics
                </a>{" "}
              </li>
              <li className="box">
                <a href="https://web1.irt.csus.edu/class_schedule/Spring2022/EDC.html">
                  Ed - Counselor Education
                </a>
              </li>
              <li className="box">
                <a href="https://web1.irt.csus.edu/class_schedule/Spring2022/EDLP.html">
                  Ed Leadership &amp; Policy Studies
                </a>
              </li>
              <li className="box">
                <a href="https://web1.irt.csus.edu/class_schedule/Spring2022/EDD.html">
                  Ed.D in Educational Leadership
                </a>
              </li>
              <li className="box">
                <a href="https://web1.irt.csus.edu/class_schedule/Spring2022/EDBM.html">
                  Educ - Bilingual Multicultural
                </a>
              </li>
              <li className="box">
                <a href="https://web1.irt.csus.edu/class_schedule/Spring2022/EDSP.html">
                  Educ Specialist Credentials
                </a>
              </li>
              <li className="box">
                <a href="https://web1.irt.csus.edu/class_schedule/Spring2022/EDUC.html">
                  Education
                </a>{" "}
              </li>
              <li className="box">
                <a href="https://web1.irt.csus.edu/class_schedule/Spring2022/EEE.html">
                  Electrical &amp; Electronic Engr
                </a>
              </li>
              <li className="box">
                <a href="https://web1.irt.csus.edu/class_schedule/Spring2022/ENGR.html">
                  Engineering
                </a>{" "}
              </li>
              <li className="box">
                <a href="https://web1.irt.csus.edu/class_schedule/Spring2022/ENGL.html">
                  English
                </a>{" "}
              </li>
              <li className="box">
                <a href="https://web1.irt.csus.edu/class_schedule/Spring2022/ENTR.html">
                  Entrepreneurship
                </a>{" "}
              </li>
              <li className="box">
                <a href="https://web1.irt.csus.edu/class_schedule/Spring2022/ENVS.html">
                  Environmental Studies
                </a>
              </li>
            </ul>
          </div>
        </section>
      </article>
    </div>
  );
}

export default AllCourses;
