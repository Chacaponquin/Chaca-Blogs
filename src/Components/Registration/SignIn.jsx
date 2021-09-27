import "../../css/styleSignIn.css";
import { useSignIn } from "../../hooks/useSignIn";

const SignIn = () => {
  const { handleChange, handleSubmit, signInError } = useSignIn();
  return (
    <div id="signInContainer">
      <div id="signIn-content">
        <div id="left-part">
          <div id="content-frase">
            <div id="frase-container">
              <div id="content-frase-quote">
                <img src="../img/Logos/quote-alt-right-solid-24.png" alt="" />
              </div>
              <div id="content-frase-person">
                <h1 id="content-frase-name">Jenny Wilson</h1>
                <p id="content-frase-charge">Vice President</p>
              </div>
              <p id="content-frase-opinion">
                We had an incredible experience working with Landify and were
                impressed they made such a big difference in only three weeks.
                Our team is so grateful for the wonderful improvements they made
                and their ability to get familiar with the product concept so
                quickly. It acted as a catalyst to take our design to the next
                level and get more eyes on our product.
              </p>
              <div id="arrow-navigation">
                <img src="../img/Logos/left-arrow-alt-regular-24.png" alt="" />
                <img src="../img/Logos/right-arrow-alt-regular-24.png" alt="" />
              </div>
            </div>
          </div>
        </div>

        <div id="right-part">
          <div id="signIn-form">
            {signInError !== false && (
              <div id="signIn-error">
                <p>Datos Incorrectos</p>
              </div>
            )}

            <form action="" onSubmit={handleSubmit} id="signIn-form-container">
              <h1>Login</h1>
              <input
                className="signIn-input"
                type="text"
                placeholder="Enter username..."
                autoComplete="off"
                name="nickname"
                spellCheck="false"
                onChange={handleChange}
              />
              <input
                className="signIn-input"
                type="password"
                placeholder="Enter password..."
                autoComplete="off"
                name="password"
                onChange={handleChange}
              />
              <input className="signIn-submit" type="submit" value="LOGIN" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
