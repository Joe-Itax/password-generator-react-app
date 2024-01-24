import { useState } from "react";
import "./App.css";

function App() {
  const [includeNumber, setIncludeNumber] = useState(true);
  const [includeLower, setIncludeLower] = useState(true);
  const [includeUpper, setIncludeUpper] = useState(true);
  const [includeSpecial, setIncludeSpecial] = useState(true);
  const [excludeCharSimilar, setExcludeCharSimilar] = useState(true);
  const [passwordLength, setPasswordLength] = useState(8);
  const [generatedPassword, setGeneratedPassword] = useState("");

  const [canCopy, setCanCopy] = useState(true);

  function handleGeneratePassword(e) {
    e.preventDefault();
    let charset = "";
    let password = "";

    if (includeNumber) {
      charset += "0123456789";
    }
    if (includeLower) {
      charset += "abcdefghijklmnopqrstuvwxyz";
    }
    if (includeUpper) {
      charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }
    if (includeSpecial) {
      charset += "!@#$%^&*()_+~`|}{[]:;?><,./-=";
    }

    const regExpNumber = includeNumber ? /[0-9]/ : null;
    const regExpUpper = includeUpper ? /[A-Z]/ : null;
    const regExpLower = includeLower ? /[a-z]/ : null;
    const regExpSpecialChar = includeSpecial
      ? // eslint-disable-next-line no-useless-escape
        /[$*!:;,?.\/§%£ø*\\#~@{}\[\]\`|^+)(=&]/
      : null;
    do {
      password = "";
      for (let i = 0; i < passwordLength; i++) {
        let randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
        setCanCopy(true);
      }
      console.log(password);
    } while (
      (regExpNumber !== null && !regExpNumber.test(password)) ||
      (regExpUpper !== null && !regExpUpper.test(password)) ||
      (regExpLower !== null && !regExpLower.test(password)) ||
      (regExpSpecialChar !== null && !regExpSpecialChar.test(password))
    );

    if (
      (!includeNumber && !includeLower && !includeUpper && !includeSpecial) ||
      charset === "" ||
      !charset
    ) {
      password = "Séléction incorrect";
      setCanCopy(false);
    }

    setGeneratedPassword(password);
  }

  return (
    <main>
      <h1>Générateur de mot de passe</h1>
      <form>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value={includeNumber}
            onChange={(e) => setIncludeNumber(e.target.checked)}
            id="inclureChiffre"
            defaultChecked
          />
          <label className="form-check-label" htmlFor="inclureChiffre">
            Inclure Des Chiffres
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value={includeLower}
            onChange={(e) => setIncludeLower(e.target.checked)}
            id="inclureMinuscule"
            defaultChecked
          />
          <label className="form-check-label" htmlFor="inclureMinuscule">
            Inclure Des Minuscules
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value={includeUpper}
            onChange={(e) => setIncludeUpper(e.target.checked)}
            id="inclureMajuscule"
            defaultChecked
          />
          <label className="form-check-label" htmlFor="inclureMajuscule">
            Inclure Des Majuscules
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value={includeSpecial}
            onChange={(e) => setIncludeSpecial(e.target.checked)}
            id="inclureCharSpeciaux"
            defaultChecked
          />
          <label className="form-check-label" htmlFor="inclureCharSpeciaux">
            Inclure Des Caractères Spéciaux
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value={excludeCharSimilar}
            onChange={(e) => setExcludeCharSimilar(e.target.checked)}
            id="exclureCharSimilar"
            defaultChecked
          />
          <label className="form-check-label" htmlFor="exclureCharSimilar">
            Exclure les caractères similaires [<code>o O 0 | 1 l I</code>]
          </label>
        </div>
        <div className="pwdOption">
          <select
            name="gdmdp_pwd_length"
            id="pwdLength"
            className="pwdSelect form-select"
            value={passwordLength}
            onChange={(e) => setPasswordLength(e.target.value)}
          >
            <option value={8}>8</option>
            <option value={9}>9</option>
            <option value={10}>10</option>
            <option value={11}>11</option>
            <option value={12}>12</option>
            <option value={13}>13</option>
            <option value={14}>14</option>
            <option value={15}>15</option>
            <option value={16}>16</option>
            <option value={17}>17</option>
            <option value={18}>18</option>
            <option value={19}>19</option>
            <option value={20}>20</option>
            <option value={21}>21</option>
            <option value={22}>22</option>
            <option value={23}>23</option>
            <option value={24}>24</option>
            <option value={25}>25</option>
            <option value={26}>26</option>
            <option value={27}>27</option>
            <option value={28}>28</option>
            <option value={29}>29</option>
            <option value={30}>30</option>
            <option value={31}>31</option>
            <option value={32}>32</option>
            <option value={33}>33</option>
            <option value={34}>34</option>
            <option value={35}>35</option>
            <option value={36}>36</option>
            <option value={37}>37</option>
            <option value={38}>38</option>
            <option value={39}>39</option>
            <option value={40}>40</option>
            <option value={41}>41</option>
            <option value={42}>42</option>
            <option value={43}>43</option>
            <option value={44}>44</option>
            <option value={45}>45</option>
            <option value={46}>46</option>
            <option value={47}>47</option>
            <option value={48}>48</option>
            <option value={49}>49</option>
            <option value={50}>50</option>
            <option value={60}>60</option>
            <option value={70}>70</option>
            <option value={80}>80</option>
            <option value={90}>90</option>
            <option value={100}>100</option>
          </select>
          <label htmlFor="pwdLength">Nombre de caractères</label>
        </div>
        <div className="input-group input-outPutPwd">
          <input
            readOnly
            id="outPutPwd"
            spellCheck="false"
            value={generatedPassword}
            type="text"
            className="form-control"
          />
          <span
            id="copyPwd"
            title="copier dans le presse papier"
            className="input-group-text"
            style={{ display: canCopy ? "block" : "none" }}
          >
            <i className="ri-clipboard-line" />
          </span>
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          onClick={handleGeneratePassword}
        >
          Générer mot de passe
        </button>
      </form>
    </main>
  );
}

export default App;
