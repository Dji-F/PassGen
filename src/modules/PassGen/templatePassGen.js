export const templatePassGen = () => {
    return `
    <div id="passgen-bg">
        <div class="passgen">
            <h1 class="passgen__title">Password Generator</h1>
            <div class="passgen__text">Password length:</div>
            <div class="wrap">
                <div id="select"></div>
            </div>
            <div class="passgen__text">Include numbers:</div>
            <div>
                <input id='number' type='checkbox' name="number" checked />
                <label for='number'>1234567890</label>
            </div>
            <div class="passgen__text">Include lowercase characters:</div>
            <div>
                <input id="lowercase" type="checkbox" name="lowercase" checked />
                <label for="lowercase">abcdef...</label>
            </div>
            <div class="passgen__text">Include uppercase characters:</div>
            <div>
                <input id="uppercase" type="checkbox" name="uppercase" checked />
                <label for="uppercase">ABCDEF...</label>
            </div>
            <div class="passgen__text">Include symbols:</div>
            <div>
                <input id="symbol" type="checkbox" name="symbol" checked />
                <label for="symbol">-_#$%&()*+<=>?@</label>
            </div>
            <button class="button-29 generator-btn" data-type="generator-btn">Generate password</button>
            <input type="text" class="passgen__pass-value" data-type="pass-value">
            <button class="button-29 copy-btn" data-type="copy-btn">Copy</button>
            <div class="close" data-type="close">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <svg viewBox="0 0 36 36" class="circle">
                <path
                  stroke-dasharray="100, 100"
                  d="M18 2.0845
                    a 15.9155 15.9155 0 0 1 0 31.831
                    a 15.9155 15.9155 0 0 1 0 -31.831"
                />
              </svg>
            </div>
        </div>
    </div>
    `
}
