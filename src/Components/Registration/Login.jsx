import "../../css/styleLogin.css";
import { useLogin } from "../../hooks/useLogin";

const Login = () => {
  const { handleChange, handleSubmit } = useLogin();

  return (
    <div id="loginContainer">
      <div id="login-card">
        <div id="login-card-left">
          <form action="" id="createProfile-form" onSubmit={handleSubmit}>
            <h1 id="login-h">Create Account</h1>
            <div className="login-input">
              <img src="/img/Logos/user-regular-24.png" alt="" />
              <input
                type="text"
                placeholder="Nickname"
                name="nickname"
                autoComplete="off"
                required
                spellCheck="false"
                onChange={handleChange}
              />
            </div>
            <div className="login-input">
              <img src="/img/Logos/id-card-solid-24.png" alt="" />
              <input
                type="text"
                placeholder="Your Name"
                name="username"
                autoComplete="off"
                required
                spellCheck="false"
                onChange={handleChange}
              />
            </div>
            <div className="login-input">
              <img src="/img/Logos/mail-send-regular-24.png" alt="" />
              <input
                type="email"
                placeholder="Email"
                name="email"
                autoComplete="off"
                required
                spellCheck="false"
                onChange={handleChange}
              />
            </div>
            <div className="login-input">
              <img src="/img/Logos/lock-alt-regular-24.png" alt="" />
              <input
                type="password"
                placeholder="Password"
                name="password"
                required
                onChange={handleChange}
              />
            </div>
            <input type="submit" id="login-button" value="LOGIN" />
          </form>
        </div>
        <div id="login-card-right">
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
      </div>
    </div>
  );
};

export default Login;
