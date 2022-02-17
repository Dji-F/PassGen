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
            <label for="number">
                <input type="checkbox" name="number" checked>1234567890
            </label>
            <div class="passgen__text">Include lowercase characters:</div>
            <label for="lowercase">
                <input type="checkbox" name="lowercase" checked>abcdef
            </label>
            <div class="passgen__text">Include uppercase characters:</div>
            <label for="uppercase">
                <input type="checkbox" name="uppercase" checked>ABCDEF
            </label>
            <button data-type="generator-btn">Generate password</button>
            <input type="text" data-type="pass-value">
        </div>
    </div>
    `
}
