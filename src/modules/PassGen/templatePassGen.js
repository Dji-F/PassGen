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
            <label for="numbers">
                <input type="checkbox" name="numbers" id="numbers">1234567890
            </label>
            <div class="passgen__text">Include lowercase characters:</div>
            <label for="lowercase">
                <input type="checkbox" name="lowercase" id="lowercase">abcdef
            </label>
            <div class="passgen__text">Include uppercase characters:</div>
            <label for="uppercase">
                <input type="checkbox" name="uppercase" id="uppercase">ABCDEF
            </label>
            <button>Generate password</button>
            <input type="text">
        </div>
    </div>
    `
}